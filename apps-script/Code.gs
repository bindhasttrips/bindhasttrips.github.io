/**
 * Bindhast Trips control centre.
 *
 * The spreadsheet IS the backend. This script is the only thing the website
 * can talk to, and it never returns a column the customer should not see.
 *
 * Deploy: Deploy > New deployment > Web app.
 *   Execute as: Me.    Who has access: Anyone.
 * Copy the /exec URL into NEXT_PUBLIC_APPS_SCRIPT_URL.
 *
 * NEVER use File > Share > Publish to web on the spreadsheet. That exposes
 * every column to anyone with the link no matter what this script does.
 */

var SHEET = 'Inquiries';
var CUSTOM_SHEET = 'Custom requests';
var NOTIFY_EMAIL = 'deepghuge09@gmail.com';   // TODO: where lead alerts go
var BUSINESS_NAME = 'Bindhast Trips';
var SITE_URL = 'https://bindhasttrips.github.io';  // TODO: custom domain later
var WHATSAPP_NUMBER = '919999999999';         // TODO: digits only, country code first

/**
 * Key for the dashboard at /admin. Anyone holding it can read every booking.
 *
 * NEVER COMMIT A REAL KEY HERE. This repository is public, so a key in this
 * file is a key on the internet. Set the real value in the Apps Script
 * editor, which is private to your Google account, and leave this placeholder
 * in the repository copy.
 */
var ADMIN_KEY = 'SET-THIS-IN-THE-APPS-SCRIPT-EDITOR-ONLY';

var STAGES = [
  ['stage_payment', 'Deposit received'],
  ['stage_visa_submitted', 'Visa submitted'],
  ['stage_visa_approved', 'Visa approved'],
  ['stage_flights', 'Flights ticketed'],
  ['stage_hotels', 'Hotels confirmed'],
  ['stage_vouchers', 'Vouchers issued']
];

var HEADERS = [
  'timestamp', 'token', 'editToken', 'status',
  'name', 'phone', 'email', 'flyingFrom',
  'destination', 'cities', 'groupType', 'travelMonth', 'datesFlexible', 'nights', 'days',
  'adults', 'children', 'childAges', 'seniors', 'totalTravellers',
  'tripStyles', 'stayType', 'nightlyBudget', 'statedBudget',
  'activityCount', 'activities', 'activityIds', 'helpCities', 'itinerary',
  'estimateLow', 'estimateHigh', 'unpricedActivities',
  'notes', 'source',
  'quotedTotal', 'depositDue', 'amountPaid', 'balance',
  'paymentLink', 'paymentStatus',
  'stage_payment', 'stage_visa_submitted', 'stage_visa_approved',
  'stage_flights', 'stage_hotels', 'stage_vouchers',
  'lastUpdated', 'allowEdit', 'revoked',
  'trackerLink', 'editLink', 'whatsappQuote', 'ownerNotes'
];

/* ===================== web endpoints ===================== */

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) return json({ ok: false });
    var body = JSON.parse(e.postData.contents);

    if (body.action === 'update') return handleCustomerUpdate(body);
    if (body.action === 'custom') return handleCustomRequest(body);
    return handleNewInquiry(body);
  } catch (err) {
    console.error('doPost: ' + err + '\n' + (err && err.stack));
    return json({ ok: false });
  }
}

function doGet(e) {
  try {
    var p = (e && e.parameter) || {};
    if (p.admin) return json(adminPayload(p.admin));
    if (p.t) return json(trackerPayload(p.t));
    if (p.e) return json(editPayload(p.e));
    return json({ ok: false, error: 'not found' });
  } catch (err) {
    console.error('doGet: ' + err);
    return json({ ok: false, error: 'not found' });
  }
}

function handleNewInquiry(b) {
  var sheet = getSheet();
  var token = makeToken();
  var editToken = makeToken();
  sheet.appendRow(buildRow(b, token, editToken));
  var rowIndex = sheet.getLastRow();
  writeComputedCells(sheet, rowIndex, b, token, editToken);

  emailCustomer(b, token, editToken);
  emailOwner(b, token);
  return json({ ok: true, token: token, editToken: editToken });
}

var CUSTOM_HEADERS = [
  'timestamp', 'status', 'ownerNotes',
  'type', 'name', 'phone', 'email', 'requirement', 'source'
];

/**
 * The short "custom trip or visa help" form on the landing page. Its own tab,
 * because these are a different kind of lead and you work them differently.
 */
function handleCustomRequest(b) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(CUSTOM_SHEET);
  if (!sheet) {
    sheet = ss.insertSheet(CUSTOM_SHEET);
    sheet.appendRow(CUSTOM_HEADERS);
    sheet.setFrozenRows(1);
    var rule = SpreadsheetApp.newDataValidation()
      .requireValueInList(['new', 'contacted', 'quoted', 'converted', 'lost'], true)
      .setAllowInvalid(false).build();
    sheet.getRange(2, 2, Math.max(1, sheet.getMaxRows() - 1), 1).setDataValidation(rule);
  }

  sheet.appendRow([
    new Date(),
    'new',
    '',
    clean(b.type, 60),
    clean(b.name, 120),
    clean(b.phone, 20),
    clean(b.email, 160),
    clean(b.requirement, 2000),
    clean(b.source, 300)
  ]);

  if (NOTIFY_EMAIL) {
    MailApp.sendEmail(NOTIFY_EMAIL,
      'Enquiry: ' + clean(b.type, 60) + ' from ' + clean(b.name, 60),
      [
        clean(b.name, 120),
        clean(b.phone, 20) + '   ' + clean(b.email, 160),
        '',
        'Type: ' + clean(b.type, 60),
        '',
        clean(b.requirement, 2000)
      ].join('\n'));
  }
  return json({ ok: true });
}

/**
 * A customer editing their own enquiry. Three gates, all of them hard:
 * the edit token must match exactly, allowEdit must be TRUE, and revoked
 * must be FALSE. Once you freeze a row, nothing they send can change it.
 */
function handleCustomerUpdate(b) {
  var found = findRow('editToken', b.editToken);
  if (!found) return json({ ok: false, error: 'not found' });

  var row = found.values;
  if (String(row[col('allowEdit')]).toUpperCase() !== 'TRUE') {
    return json({ ok: false, error: 'locked' });
  }
  if (String(row[col('revoked')]).toUpperCase() === 'TRUE') {
    return json({ ok: false, error: 'not found' });
  }

  var sheet = getSheet();
  var token = row[col('token')];
  var updated = buildRow(b, token, b.editToken);

  // Preserve everything operational. A customer edit only ever rewrites the
  // columns they actually filled in.
  var keep = ['timestamp', 'status', 'quotedTotal', 'depositDue', 'amountPaid', 'balance',
    'paymentLink', 'paymentStatus', 'lastUpdated', 'allowEdit', 'revoked', 'ownerNotes',
    'trackerLink', 'editLink', 'whatsappQuote'];
  for (var i = 0; i < STAGES.length; i++) keep.push(STAGES[i][0]);
  for (var k = 0; k < keep.length; k++) updated[col(keep[k])] = row[col(keep[k])];

  sheet.getRange(found.row, 1, 1, HEADERS.length).setValues([updated]);
  sheet.getRange(found.row, col('lastUpdated') + 1).setValue(new Date());
  sheet.getRange(found.row, col('ownerNotes') + 1)
    .setValue(clean(row[col('ownerNotes')] + ' [customer edited ' + new Date().toISOString().slice(0, 16) + ']', 1000));

  if (NOTIFY_EMAIL) {
    MailApp.sendEmail(NOTIFY_EMAIL, 'Customer changed their plan: ' + clean(b.name, 60),
      clean(b.name, 60) + ' just edited their enquiry.\n\n' +
      'Itinerary now: ' + clean(b.itinerary, 2000) + '\n\n' +
      'Tracker: ' + trackerUrl(token));
  }
  return json({ ok: true, token: token });
}

/**
 * Everything, for the owner dashboard. Guarded by ADMIN_KEY, which is checked
 * in constant time so the comparison cannot be timed character by character.
 */
function adminPayload(key) {
  if (!secureEquals(String(key), ADMIN_KEY)) {
    logFailedLookup('admin');
    return { ok: false, error: 'not found' };
  }
  var sheet = getSheet();
  var last = sheet.getLastRow();
  var bookings = [];
  if (last >= 2) {
    var data = sheet.getRange(2, 1, last - 1, HEADERS.length).getValues();
    for (var i = 0; i < data.length; i++) {
      var r = data[i];
      if (!r[col('name')] && !r[col('phone')]) continue;
      var stages = [];
      for (var sIdx = 0; sIdx < STAGES.length; sIdx++) {
        stages.push({ label: STAGES[sIdx][1], state: normaliseStage(r[col(STAGES[sIdx][0])]) });
      }
      bookings.push({
        row: i + 2,
        timestamp: asIso(r[col('timestamp')]),
        token: r[col('token')],
        status: r[col('status')] || 'new',
        name: r[col('name')],
        phone: String(r[col('phone')] || ''),
        email: r[col('email')],
        flyingFrom: r[col('flyingFrom')],
        destination: r[col('destination')],
        cities: r[col('cities')],
        groupType: r[col('groupType')],
        travelMonth: monthLabel(r[col('travelMonth')]),
        datesFlexible: r[col('datesFlexible')],
        nights: r[col('nights')],
        days: r[col('days')],
        adults: r[col('adults')],
        children: r[col('children')],
        seniors: r[col('seniors')],
        travellers: r[col('totalTravellers')],
        styles: r[col('tripStyles')],
        stayType: r[col('stayType')],
        budget: r[col('statedBudget')],
        activityCount: r[col('activityCount')],
        activities: r[col('activities')],
        helpCities: r[col('helpCities')],
        itinerary: r[col('itinerary')],
        estimateLow: r[col('estimateLow')],
        estimateHigh: r[col('estimateHigh')],
        notes: r[col('notes')],
        quotedTotal: r[col('quotedTotal')],
        amountPaid: r[col('amountPaid')],
        paymentLink: r[col('paymentLink')],
        paymentStatus: r[col('paymentStatus')],
        stages: stages,
        lastUpdated: asIso(r[col('lastUpdated')]),
        allowEdit: String(r[col('allowEdit')]).toUpperCase() === 'TRUE',
        ownerNotes: r[col('ownerNotes')]
      });
    }
  }

  var custom = [];
  var cs = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(CUSTOM_SHEET);
  if (cs && cs.getLastRow() >= 2) {
    var cdata = cs.getRange(2, 1, cs.getLastRow() - 1, CUSTOM_HEADERS.length).getValues();
    for (var c = 0; c < cdata.length; c++) {
      if (!cdata[c][4] && !cdata[c][5]) continue;
      custom.push({
        row: c + 2, timestamp: asIso(cdata[c][0]), status: cdata[c][1],
        type: cdata[c][3], name: cdata[c][4], phone: String(cdata[c][5] || ''),
        email: cdata[c][6], requirement: cdata[c][7]
      });
    }
  }

  return {
    ok: true,
    sheetUrl: SpreadsheetApp.getActiveSpreadsheet().getUrl(),
    whatsappNumber: WHATSAPP_NUMBER,
    fetchedAt: new Date().toISOString(),
    bookings: bookings,
    custom: custom
  };
}

/** Length-independent comparison, so a wrong key reveals nothing by timing. */
function secureEquals(a, b) {
  if (a.length !== b.length) return false;
  var diff = 0;
  for (var i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/** ONLY these fields ever leave the sheet for a tracker view. */
function trackerPayload(token) {
  var found = findRow('token', token);
  // A revoked row and a wrong token return the same thing, so neither can be
  // told apart by probing.
  if (!found || String(found.values[col('revoked')]).toUpperCase() === 'TRUE') {
    logFailedLookup(token);
    return { ok: false, error: 'not found' };
  }
  var r = found.values;
  var stages = [];
  for (var i = 0; i < STAGES.length; i++) {
    stages.push({ key: STAGES[i][0], label: STAGES[i][1], state: normaliseStage(r[col(STAGES[i][0])]) });
  }
  return {
    ok: true,
    firstName: String(r[col('name')] || '').split(' ')[0],
    destination: r[col('destination')],
    cities: r[col('cities')],
    travelMonth: monthLabel(r[col('travelMonth')]),
    days: r[col('days')],
    travellers: r[col('totalTravellers')],
    // `status` is your internal pipeline label and deliberately never leaves
    // the sheet. A customer must never see themselves marked "lost".
    paymentStatus: r[col('paymentStatus')] || '',
    stages: stages,
    lastUpdated: asIso(r[col('lastUpdated')]) || asIso(r[col('timestamp')]),
    canEdit: String(r[col('allowEdit')]).toUpperCase() === 'TRUE',
    editToken: String(r[col('allowEdit')]).toUpperCase() === 'TRUE' ? r[col('editToken')] : ''
  };
}

/** Their own answers, returned so the builder can prefill itself. */
function editPayload(editToken) {
  var found = findRow('editToken', editToken);
  if (!found || String(found.values[col('revoked')]).toUpperCase() === 'TRUE') {
    logFailedLookup(editToken);
    return { ok: false, error: 'not found' };
  }
  var r = found.values;
  if (String(r[col('allowEdit')]).toUpperCase() !== 'TRUE') {
    return { ok: false, error: 'locked', firstName: String(r[col('name')] || '').split(' ')[0] };
  }
  return {
    ok: true,
    token: r[col('token')],
    name: r[col('name')],
    phone: r[col('phone')],
    email: r[col('email')],
    flyingFrom: r[col('flyingFrom')],
    destination: r[col('destination')],
    cities: splitList(r[col('cities')]),
    groupType: r[col('groupType')],
    travelMonth: monthLabel(r[col('travelMonth')]),
    datesFlexible: String(r[col('datesFlexible')]) === 'flexible',
    nights: Number(r[col('nights')]) || 0,
    adults: Number(r[col('adults')]) || 0,
    children: Number(r[col('children')]) || 0,
    childAges: r[col('childAges')],
    seniors: Number(r[col('seniors')]) || 0,
    styles: splitList(r[col('tripStyles')]),
    stayType: r[col('stayType')],
    nightlyBudget: r[col('nightlyBudget')],
    budgetBand: r[col('statedBudget')],
    activityIds: splitList(r[col('activityIds')]),
    helpCities: splitList(r[col('helpCities')]),
    notes: r[col('notes')]
  };
}

/* ===================== rows ===================== */

function buildRow(b, token, editToken) {
  var adults = toInt(b.adults, 0, 40);
  var children = toInt(b.children, 0, 40);
  var seniors = toInt(b.seniors, 0, 40);
  var row = new Array(HEADERS.length);
  for (var i = 0; i < row.length; i++) row[i] = '';

  row[col('timestamp')] = new Date();
  row[col('token')] = token;
  row[col('editToken')] = editToken;
  row[col('status')] = 'new';
  row[col('name')] = clean(b.name, 120);
  row[col('phone')] = clean(b.phone, 20);
  row[col('email')] = clean(b.email, 160);
  row[col('flyingFrom')] = clean(b.flyingFrom, 60);
  row[col('destination')] = clean(b.destination, 60);
  row[col('cities')] = list(b.cities);
  row[col('groupType')] = clean(b.groupType, 40);
  row[col('travelMonth')] = clean(b.travelMonth, 40);
  row[col('datesFlexible')] = b.datesFlexible ? 'flexible' : 'fixed';
  row[col('nights')] = toInt(b.nights, 0, 60);
  row[col('days')] = toInt(b.days, 0, 60);
  row[col('adults')] = adults;
  row[col('children')] = children;
  row[col('childAges')] = clean(b.childAges, 80);
  row[col('seniors')] = seniors;
  row[col('totalTravellers')] = adults + children + seniors;
  row[col('tripStyles')] = list(b.styles);
  row[col('stayType')] = clean(b.stayType, 60);
  row[col('nightlyBudget')] = clean(b.nightlyBudget, 80);
  row[col('statedBudget')] = clean(b.budgetBand, 80);
  row[col('activityCount')] = Array.isArray(b.activities) ? b.activities.length : 0;
  row[col('activities')] = list(b.activities);
  row[col('activityIds')] = list(b.activityIds);
  row[col('helpCities')] = list(b.helpCities);
  row[col('itinerary')] = clean(b.itinerary, 2000);
  row[col('estimateLow')] = toInt(b.estimateLow, 0, 100000000);
  row[col('estimateHigh')] = toInt(b.estimateHigh, 0, 100000000);
  row[col('unpricedActivities')] = toInt(b.unpricedActivities, 0, 500);
  row[col('notes')] = clean(b.notes, 1000);
  row[col('source')] = clean(b.source, 300);
  row[col('paymentStatus')] = 'not started';
  for (var s = 0; s < STAGES.length; s++) row[col(STAGES[s][0])] = 'pending';
  row[col('lastUpdated')] = new Date();
  row[col('allowEdit')] = true;
  row[col('revoked')] = false;
  return row;
}

/** Formulas live in cells so they keep working when you edit by hand. */
function writeComputedCells(sheet, rowIndex, b, token, editToken) {
  var r = rowIndex;
  // Sheets helpfully parses "December 2026" into a date, which then comes back
  // out as an ISO string and breaks both the tracker and the edit prefill.
  // Forcing the cell to plain text stops that at the source.
  var monthCell = sheet.getRange(r, col('travelMonth') + 1);
  monthCell.setNumberFormat('@');
  if (b && b.travelMonth) monthCell.setValue(clean(b.travelMonth, 40));
  sheet.getRange(r, col('balance') + 1).setFormula(
    '=IF(N(' + a1(r, 'quotedTotal') + ')=0,"",' + a1(r, 'quotedTotal') + '-N(' + a1(r, 'amountPaid') + '))');
  sheet.getRange(r, col('trackerLink') + 1).setValue(trackerUrl(token));
  sheet.getRange(r, col('editLink') + 1).setValue(editUrl(editToken));
  sheet.getRange(r, col('whatsappQuote') + 1).setFormula(whatsappFormula(r));
  sheet.getRange(r, col('allowEdit') + 1).insertCheckboxes();
  sheet.getRange(r, col('allowEdit') + 1).setValue(true);
  sheet.getRange(r, col('revoked') + 1).insertCheckboxes();
  sheet.getRange(r, col('revoked') + 1).setValue(false);
}

/**
 * One click sends the customer their quote, their payment link and their
 * tracker on WhatsApp, with the message already written.
 */
function whatsappFormula(r) {
  var msg = '"Hello "&' + a1(r, 'name') + '&", your "&' + a1(r, 'destination') +
    '&" trip is quoted at Rs "&TEXT(' + a1(r, 'quotedTotal') + ',"#,##,##0")&' +
    '". Deposit to confirm: Rs "&TEXT(' + a1(r, 'depositDue') + ',"#,##,##0")&' +
    '". Pay here: "&' + a1(r, 'paymentLink') + '&' +
    '" Track your booking here: "&' + a1(r, 'trackerLink');
  return '=IF(N(' + a1(r, 'quotedTotal') + ')=0,"add a quoted total first",' +
    'HYPERLINK("https://wa.me/"&SUBSTITUTE(' + a1(r, 'phone') + '," ","")&"?text="&ENCODEURL(' + msg + '),"Send quote on WhatsApp"))';
}

/* ===================== email ===================== */

function emailCustomer(b, token, editToken) {
  if (!b.email) return;
  var L = [];
  L.push('Hello ' + clean(b.name, 120) + ',');
  L.push('');
  L.push('Thank you. Here is a copy of everything you told us. We will come back');
  L.push('with an exact price within 24 hours.');
  L.push('');
  L.push('TRACK YOUR BOOKING');
  L.push(trackerUrl(token));
  L.push('That link stays live for the whole trip and shows every step as it happens.');
  L.push('');
  L.push('CHANGE YOUR ANSWERS');
  L.push(editUrl(editToken));
  L.push('Use this if you want to add or remove anything before we quote.');
  L.push('');
  L.push('WHAT YOU TOLD US');
  L.push('Destination: ' + clean(b.destination, 60) + ' (' + list(b.cities) + ')');
  L.push('Travelling as: ' + clean(b.groupType, 40));
  L.push('Flying from: ' + clean(b.flyingFrom, 60));
  L.push('Dates: ' + clean(b.travelMonth, 40) + (b.datesFlexible ? ', flexible' : ', fixed'));
  L.push('Length: ' + toInt(b.days, 0, 60) + ' days, ' + toInt(b.nights, 0, 60) + ' nights');
  L.push('Travellers: ' + toInt(b.adults, 0, 40) + ' adults, ' + toInt(b.children, 0, 40) +
    ' children, ' + toInt(b.seniors, 0, 40) + ' seniors');
  L.push('Staying in: ' + clean(b.stayType, 60));
  L.push('');
  L.push('YOUR PLAN');
  var parts = String(b.itinerary || '').split(' | ');
  for (var i = 0; i < parts.length; i++) L.push('  ' + parts[i]);
  L.push('');
  L.push('ESTIMATE YOU SAW');
  L.push('Rs ' + formatIndian(b.estimateLow) + ' to Rs ' + formatIndian(b.estimateHigh) +
    ' in total, including flights.');
  if (toInt(b.unpricedActivities, 0, 500) > 0) {
    L.push('The ' + toInt(b.unpricedActivities, 0, 500) +
      ' activities you chose are quoted separately and are not in that figure.');
  }
  L.push('This is an estimate, not a quote. It moves with your exact dates and with');
  L.push('what flights cost on the day we ticket.');
  L.push('');
  L.push(BUSINESS_NAME);

  MailApp.sendEmail({
    to: b.email,
    subject: 'Your ' + clean(b.destination, 60) + ' plan, and how to track it',
    body: L.join('\n'),
    name: BUSINESS_NAME
  });
}

function emailOwner(b, token) {
  if (!NOTIFY_EMAIL) return;
  var L = [
    clean(b.name, 120) + '  ' + clean(b.phone, 20) + '  ' + clean(b.email, 160),
    'Lives in / flying from: ' + clean(b.flyingFrom, 60),
    '',
    clean(b.destination, 60) + ': ' + list(b.cities),
    'Group: ' + clean(b.groupType, 40) + ' — ' + toInt(b.adults, 0, 40) + 'a ' +
      toInt(b.children, 0, 40) + 'c ' + toInt(b.seniors, 0, 40) + 's' +
      (b.childAges ? ' (ages ' + clean(b.childAges, 80) + ')' : ''),
    'Dates: ' + clean(b.travelMonth, 40) + (b.datesFlexible ? ' flexible' : ' FIXED') +
      ', ' + toInt(b.days, 0, 60) + ' days',
    'Style: ' + list(b.styles),
    'Stay: ' + clean(b.stayType, 60) + ' / ' + clean(b.nightlyBudget, 80),
    'Budget stated: ' + clean(b.budgetBand, 80),
    'Estimate shown: ' + formatIndian(b.estimateLow) + ' to ' + formatIndian(b.estimateHigh),
    '',
    'Plan: ' + clean(b.itinerary, 2000)
  ];
  if (b.helpCities && b.helpCities.length) {
    L.push('');
    L.push('*** WANTS YOUR HELP PLANNING: ' + list(b.helpCities) + ' ***');
  }
  L.push('');
  L.push('Notes: ' + clean(b.notes, 1000));
  L.push('');
  L.push('Tracker: ' + trackerUrl(token));

  MailApp.sendEmail(NOTIFY_EMAIL,
    'Lead: ' + clean(b.name, 60) + ', ' + clean(b.destination, 40) + ', ' +
      clean(b.travelMonth, 40), L.join('\n'));
}

/* ===================== spreadsheet menu ===================== */

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Bindhast')
    .addItem('Set up this sheet', 'setupSheet')
    .addItem('Open custom requests', 'openCustomSheet')
    .addSeparator()
    .addItem('Allow the customer to edit (selected rows)', 'allowEditSelected')
    .addItem('Freeze the plan (selected rows)', 'freezeSelected')
    .addSeparator()
    .addItem('Rebuild links and buttons (selected rows)', 'rebuildSelected')
    .addItem('Mark everything up to date (selected rows)', 'touchSelected')
    .addToUi();
}

/** Creates headers, freezes them, adds dropdowns and colours the stages. */
function setupSheet() {
  var sheet = getSheet();
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold');
  sheet.setFrozenRows(1);
  sheet.setFrozenColumns(5);

  sheet.getRange(2, col('travelMonth') + 1, Math.max(1, sheet.getMaxRows() - 1), 1)
    .setNumberFormat('@');

  applyList(sheet, 'status',
    ['new', 'contacted', 'quoted', 'deposit sent', 'booked', 'travelling', 'completed', 'lost']);
  applyList(sheet, 'paymentStatus',
    ['not started', 'link sent', 'deposit paid', 'part paid', 'paid in full', 'refunded']);
  for (var i = 0; i < STAGES.length; i++) {
    applyList(sheet, STAGES[i][0], ['pending', 'in_progress', 'done', 'blocked']);
  }
  SpreadsheetApp.getUi().alert(
    'Sheet is ready.\n\nColumns A to AG are what the customer told you. ' +
    'From quotedTotal onwards is yours to work in. ' +
    'Untick allowEdit to freeze a plan so the customer can no longer change it.');
}

function openCustomSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(CUSTOM_SHEET);
  if (!sheet) {
    SpreadsheetApp.getUi().alert(
      'No custom requests yet. The tab is created automatically the first time someone uses the short form on the landing page.');
    return;
  }
  ss.setActiveSheet(sheet);
}

function applyList(sheet, name, values) {
  var rule = SpreadsheetApp.newDataValidation().requireValueInList(values, true)
    .setAllowInvalid(false).build();
  sheet.getRange(2, col(name) + 1, Math.max(1, sheet.getMaxRows() - 1), 1).setDataValidation(rule);
}

function allowEditSelected() { setFlagSelected('allowEdit', true, 'Customers can edit these again.'); }
function freezeSelected() { setFlagSelected('allowEdit', false, 'Frozen. The edit link now tells them to call you.'); }

function setFlagSelected(name, value, message) {
  var rows = selectedRows();
  var sheet = getSheet();
  for (var i = 0; i < rows.length; i++) {
    sheet.getRange(rows[i], col(name) + 1).setValue(value);
    sheet.getRange(rows[i], col('lastUpdated') + 1).setValue(new Date());
  }
  SpreadsheetApp.getUi().alert(rows.length + ' row(s) updated. ' + message);
}

function rebuildSelected() {
  var sheet = getSheet();
  var rows = selectedRows();
  for (var i = 0; i < rows.length; i++) {
    var r = rows[i];
    var token = sheet.getRange(r, col('token') + 1).getValue();
    var editToken = sheet.getRange(r, col('editToken') + 1).getValue();
    if (!token) { token = makeToken(); sheet.getRange(r, col('token') + 1).setValue(token); }
    if (!editToken) { editToken = makeToken(); sheet.getRange(r, col('editToken') + 1).setValue(editToken); }
    writeComputedCells(sheet, r, {}, token, editToken);
  }
  SpreadsheetApp.getUi().alert(rows.length + ' row(s) rebuilt.');
}

function touchSelected() {
  var sheet = getSheet();
  var rows = selectedRows();
  for (var i = 0; i < rows.length; i++) {
    sheet.getRange(rows[i], col('lastUpdated') + 1).setValue(new Date());
  }
  SpreadsheetApp.getUi().alert('Timestamps updated. The tracker will show the new time.');
}

/** Any edit to a stage or payment column bumps lastUpdated automatically. */
function onEdit(e) {
  try {
    if (!e || !e.range) return;
    var sheet = e.range.getSheet();
    if (sheet.getName() !== SHEET) return;
    var r = e.range.getRow();
    if (r < 2) return;
    var c = e.range.getColumn() - 1;
    var watched = ['status', 'paymentStatus', 'quotedTotal', 'depositDue', 'amountPaid', 'paymentLink'];
    for (var i = 0; i < STAGES.length; i++) watched.push(STAGES[i][0]);
    for (var w = 0; w < watched.length; w++) {
      if (c === col(watched[w])) {
        sheet.getRange(r, col('lastUpdated') + 1).setValue(new Date());
        return;
      }
    }
  } catch (err) {
    console.error('onEdit: ' + err);
  }
}

function selectedRows() {
  var ranges = SpreadsheetApp.getActiveSheet().getActiveRangeList().getRanges();
  var rows = [];
  for (var i = 0; i < ranges.length; i++) {
    var start = ranges[i].getRow();
    for (var n = 0; n < ranges[i].getNumRows(); n++) {
      var r = start + n;
      if (r > 1 && rows.indexOf(r) === -1) rows.push(r);
    }
  }
  return rows;
}

/* ===================== helpers ===================== */

function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET);
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function col(name) {
  var i = HEADERS.indexOf(name);
  if (i === -1) throw new Error('unknown column: ' + name);
  return i;
}

function a1(row, name) {
  return colLetter(col(name) + 1) + row;
}

function colLetter(n) {
  var s = '';
  while (n > 0) {
    var m = (n - 1) % 26;
    s = String.fromCharCode(65 + m) + s;
    n = (n - m - 1) / 26;
  }
  return s;
}

function findRow(name, value) {
  if (!value) return null;
  var sheet = getSheet();
  var last = sheet.getLastRow();
  if (last < 2) return null;
  var data = sheet.getRange(2, 1, last - 1, HEADERS.length).getValues();
  var needle = String(value);
  for (var i = 0; i < data.length; i++) {
    // Exact match only. No prefix, no case folding.
    if (String(data[i][col(name)]) === needle) return { row: i + 2, values: data[i] };
  }
  return null;
}

/** 32 hex characters of real randomness. Never sequential, never guessable. */
function makeToken() {
  var bytes = Utilities.getUuid().replace(/-/g, '');
  var extra = Utilities.getUuid().replace(/-/g, '').substring(0, 8);
  return (bytes + extra).substring(0, 32);
}

function trackerUrl(token) { return SITE_URL + '/trip/?t=' + token; }
function editUrl(editToken) { return SITE_URL + '/plan/?e=' + editToken; }

/** Renders a travel month as text whether it is stored as text or a date. */
function monthLabel(v) {
  if (!v) return '';
  if (Object.prototype.toString.call(v) === '[object Date]') {
    return Utilities.formatDate(v, Session.getScriptTimeZone(), 'MMMM yyyy');
  }
  return String(v);
}

function normaliseStage(v) {
  var s = String(v || 'pending').toLowerCase().trim();
  if (s === 'done' || s === 'in_progress' || s === 'blocked') return s;
  return 'pending';
}

function asIso(v) {
  if (!v) return '';
  try { return new Date(v).toISOString(); } catch (err) { return ''; }
}

function splitList(v) {
  if (!v) return [];
  return String(v).split(',').map(function (s) { return s.trim(); }).filter(String);
}

function list(value) {
  if (!Array.isArray(value)) return '';
  return value.map(function (v) { return clean(v, 80); }).filter(String).join(', ');
}

/** Repeated bad tokens get logged so probing is visible. */
function logFailedLookup(token) {
  var cache = CacheService.getScriptCache();
  var key = 'miss';
  var n = Number(cache.get(key) || 0) + 1;
  cache.put(key, String(n), 3600);
  console.warn('Failed token lookup (' + n + ' in the last hour): ' + String(token).substring(0, 8));
}

function toInt(value, min, max) {
  var n = parseInt(value, 10);
  if (isNaN(n)) return 0;
  return Math.min(max, Math.max(min, n));
}

/** Strips control characters, caps length, defuses spreadsheet formulas. */
function clean(value, maxLength) {
  if (value === null || value === undefined) return '';
  var s = String(value).replace(/[\x00-\x1F\x7F]/g, ' ').trim();
  if (s.length > maxLength) s = s.substring(0, maxLength);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function formatIndian(n) {
  n = Math.round(Number(n) || 0);
  var s = String(Math.abs(n));
  if (s.length <= 3) return (n < 0 ? '-' : '') + s;
  var last3 = s.slice(-3);
  var rest = s.slice(0, -3).replace(/\B(?=(\d{2})+(?!\d))/g, ',');
  return (n < 0 ? '-' : '') + rest + ',' + last3;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
