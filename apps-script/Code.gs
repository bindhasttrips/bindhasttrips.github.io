/**
 * Bindhast Trips: the only server side code in this project.
 *
 * Deploy this as a Web App with:
 *   Execute as:        Me
 *   Who has access:    Anyone
 *
 * Then copy the /exec URL into NEXT_PUBLIC_APPS_SCRIPT_URL.
 *
 * Never use File > Share > Publish to web on the spreadsheet itself. That
 * exposes every row to anyone with the link regardless of what this script
 * does. All access must go through here.
 */

var INQUIRY_SHEET = 'Inquiries';
var NOTIFY_EMAIL = 'deepghuge09@gmail.com'; // TODO: confirm where enquiry alerts should go

var INQUIRY_HEADERS = [
  'timestamp', 'name', 'phone', 'email',
  'destination', 'package', 'travelMonth', 'datesFlexible', 'nights',
  'adults', 'children', 'seniors', 'totalTravellers',
  'tripStyles',
  'activities', 'activitiesAdded', 'suggestionsRemoved', 'activityCount', 'activityTotal',
  'itinerary',
  'budgetBand', 'estimateLow', 'estimateHigh',
  'notes', 'source', 'status', 'ownerNotes'
];

/** POST from the website enquiry form. */
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return json({ ok: false, error: 'empty body' });
    }
    var body = JSON.parse(e.postData.contents);
    var sheet = getOrCreateSheet(INQUIRY_SHEET, INQUIRY_HEADERS);
    sheet.appendRow(buildInquiryRow(body));
    notify(body);
    return json({ ok: true });
  } catch (err) {
    console.error('doPost failed: ' + err);
    return json({ ok: false });
  }
}

function buildInquiryRow(b) {
  var adults = toInt(b.adults, 0, 40);
  var children = toInt(b.children, 0, 40);
  var seniors = toInt(b.seniors, 0, 40);
  var activities = list(b.activities);
  return [
    new Date(),
    clean(b.name, 120),
    clean(b.phone, 20),
    clean(b.email, 160),
    clean(b.destination, 60),
    clean(b.tier, 80),
    clean(b.travelMonth, 40),
    b.datesFlexible ? 'flexible' : 'fixed',
    toInt(b.nights, 0, 60),
    adults,
    children,
    seniors,
    adults + children + seniors,
    list(b.styles),
    activities,
    list(b.activitiesAdded),
    list(b.suggestionsRemoved),
    Array.isArray(b.activities) ? b.activities.length : 0,
    toInt(b.activityTotal, 0, 100000000),
    clean(b.itinerary, 2000),
    clean(b.budgetBand, 80),
    toInt(b.estimateLow, 0, 100000000),
    toInt(b.estimateHigh, 0, 100000000),
    clean(b.notes, 1000),
    clean(b.source, 300),
    'new',
    ''
  ];
}

/** Joins an array of strings into one cell, each item cleaned. */
function list(value) {
  if (!Array.isArray(value)) return '';
  return value.map(function (v) { return clean(v, 80); }).filter(String).join(', ');
}

function notify(b) {
  if (!NOTIFY_EMAIL) return;
  var lines = [
    'Name: ' + clean(b.name, 120),
    'Phone: ' + clean(b.phone, 20),
    'Email: ' + clean(b.email, 160),
    '',
    'Destination: ' + clean(b.destination, 60) + ', ' + clean(b.tier, 80),
    'Travel: ' + clean(b.travelMonth, 40) + (b.datesFlexible ? ' (flexible)' : ' (fixed)'),
    'Nights: ' + toInt(b.nights, 0, 60),
    'Travellers: ' + toInt(b.adults, 0, 40) + ' adults, ' +
      toInt(b.children, 0, 40) + ' children, ' + toInt(b.seniors, 0, 40) + ' seniors',
    'Trip style: ' + list(b.styles),
    'Budget band: ' + clean(b.budgetBand, 80),
    'Estimate shown: ' + toInt(b.estimateLow, 0, 100000000) + ' to ' + toInt(b.estimateHigh, 0, 100000000),
    '',
    'Itinerary: ' + clean(b.itinerary, 2000),
    '',
    'Added beyond the suggestion: ' + list(b.activitiesAdded),
    'Suggestions they removed: ' + list(b.suggestionsRemoved),
    '',
    'Notes: ' + clean(b.notes, 1000)
  ];
  MailApp.sendEmail(
    NOTIFY_EMAIL,
    'New enquiry: ' + clean(b.name, 60) + ', ' + clean(b.destination, 40),
    lines.join('\n')
  );
}

/* ---------- helpers ---------- */

function getOrCreateSheet(name, headers) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

/** Strips control characters, caps length, and defuses spreadsheet formulas. */
function clean(value, maxLength) {
  if (value === null || value === undefined) return '';
  var s = String(value).replace(/[\x00-\x1F\x7F]/g, ' ').trim();
  if (s.length > maxLength) s = s.substring(0, maxLength);
  // A leading =, +, - or @ is executed as a formula by Sheets and by Excel.
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function toInt(value, min, max) {
  var n = parseInt(value, 10);
  if (isNaN(n)) return 0;
  return Math.min(max, Math.max(min, n));
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
