# Connecting the enquiry form to your Google Sheet

Ten minutes, once.

## 1. Create the spreadsheet

Go to https://sheets.new and name it something like `Bindhast Trips data`.
You do not need to create any tabs by hand. The script creates the `Inquiries`
tab with the correct headers the first time a form is submitted.

## 2. Add the script

1. In that spreadsheet: **Extensions > Apps Script**.
2. Delete whatever is in `Code.gs` and paste the contents of
   `apps-script/Code.gs` from this repository.
3. Check that `NOTIFY_EMAIL` near the top is the address you want alerts at.
4. Save.

## 3. Deploy it as a web app

1. **Deploy > New deployment**.
2. Click the gear next to "Select type" and choose **Web app**.
3. Set Execute as: **Me**, and Who has access: **Anyone**.
4. **Deploy**, then authorise when Google asks. You will see an "unverified app"
   warning because it is your own script: choose **Advanced**, then
   **Go to (project name)**, then **Allow**.
5. Copy the **Web app URL**. It ends in `/exec`.

## 4. Point the site at it

```bash
gh variable set NEXT_PUBLIC_APPS_SCRIPT_URL --repo bindhasttrips/bindhasttrips.github.io --body "PASTE_THE_EXEC_URL_HERE"
```

Then rebuild:

```bash
gh workflow run "Deploy to GitHub Pages" --repo bindhasttrips/bindhasttrips.github.io
```

For local development, put the same line in `.env.local`.

## 5. Test it

Submit the form on the live site with your own number. Within a few seconds you
should get an email, and a row should appear in the `Inquiries` tab.

## Two things that catch people out

- **Never use File > Share > Publish to web on the spreadsheet.** That exposes
  every row to anyone with the link, no matter what the script does.
- After any edit to `Code.gs`, go to **Deploy > Manage deployments**, edit the
  deployment and set Version to **New version**. Editing the code alone does not
  change what the live URL runs.

## If you already deployed an earlier version

The column list changed. Delete the `Inquiries` tab and let the script recreate
it on the next submission, then redeploy with **Deploy > Manage deployments >
edit > Version: New version**.

## What the sheet gives you

One row per enquiry:

- Who: name, phone, email
- Trip: destination, package, travel month, flexible or fixed, nights
- Party: adults, children, seniors, total
- `tripStyles`: nightlife, family, relaxed, adventure, culture, food, shopping,
  sightseeing. The fastest read on who you are about to call.
- `activities`: everything they chose
- `activitiesAdded`: what they added beyond our suggestion, which is the
  strongest signal of what they actually want
- `suggestionsRemoved`: what they took out, so you know what not to pitch
- `itinerary`: the whole plan day by day in one cell
- Money: budget band, activity total, and the estimate range they saw
- `notes`: their free text

Anything you add to the right of `ownerNotes` is private. The site never reads
this sheet, so supplier costs, margin and personal details are safe there.
