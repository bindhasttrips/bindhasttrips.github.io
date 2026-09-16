# Your control centre

The spreadsheet is the backend. The website can only talk to it through this
script, and the script never returns a column a customer should not see.

## One time setup

1. Create a spreadsheet at https://sheets.new and name it `Bindhast Trips`.
2. **Extensions > Apps Script**. Delete everything and paste `apps-script/Code.gs`.
3. At the top of the file set:
   - `NOTIFY_EMAIL` — where lead alerts go
   - `SITE_URL` — your site, no trailing slash
   - `WHATSAPP_NUMBER` — digits only, country code first
4. Save. Reload the spreadsheet tab. A **Bindhast** menu appears.
5. **Bindhast > Set up this sheet.** This writes the headers, freezes them and
   adds the dropdowns.
6. **Deploy > New deployment > Web app.** Execute as **Me**, access **Anyone**.
   Authorise when asked: Advanced, then Go to (project), then Allow.
7. Copy the `/exec` URL.

Then point the site at it:

```bash
gh variable set NEXT_PUBLIC_APPS_SCRIPT_URL --repo bindhasttrips/bindhasttrips.github.io --body "PASTE_THE_EXEC_URL"
gh workflow run "Deploy to GitHub Pages" --repo bindhasttrips/bindhasttrips.github.io
```

**Every time you change `Code.gs`** you must go to **Deploy > Manage deployments
> edit > Version: New version**. Editing the code alone does nothing to the live
URL. This catches everyone out once.

## How a booking moves through the sheet

Columns A to AH are what the customer told you. Everything from `quotedTotal`
onwards is your working area.

| Column | What it does |
|---|---|
| `status` | Dropdown: new, contacted, quoted, deposit sent, booked, travelling, completed, lost |
| `quotedTotal` | The real price you settled on |
| `depositDue` | What you are asking for now |
| `amountPaid` | Update as money arrives |
| `balance` | Calculates itself |
| `paymentLink` | Paste the Razorpay link you generated |
| `paymentStatus` | Dropdown, and it shows on their tracker |
| `whatsappQuote` | **Click it.** Opens WhatsApp with the quote, the payment link and their tracker link already written |
| `stage_*` | Six dropdowns: pending, in_progress, done, blocked. These drive the tracker |
| `allowEdit` | Tick means they can still change their plan. Untick to freeze it |
| `revoked` | Tick to kill both links permanently |
| `trackerLink` | Their personal progress page |
| `editLink` | Their personal edit page |

Editing any stage or payment cell updates `lastUpdated` automatically, and the
tracker shows that timestamp. It is the main trust signal on the page, so let it
do its job.

## Freezing a plan

While `allowEdit` is ticked, the customer can reopen their plan and change it.
Once you have started booking, select the row and use
**Bindhast > Freeze the plan**. Their edit link then tells them to call you
instead, and no request from them can alter the row.

This is enforced on the server, not in the browser, so it holds even if someone
keeps an old page open.

## Security, and why it is built this way

- **Never use File > Share > Publish to web on the spreadsheet.** That exposes
  every column, including what you paid suppliers, to anyone with the link, no
  matter what this script does. All access goes through the web app.
- Tokens are 32 random hex characters. Sequential ids such as `BK001` would let
  anyone walk your entire customer list.
- The tracker returns first name, destination, cities, month, days, travellers,
  payment status and the six stages. Nothing else. No phone, no email, no
  prices, no supplier data, no notes.
- A wrong token, a revoked token and a missing row all return the same response,
  so nobody can tell them apart by probing. Repeated failures are logged.
- A customer edit can only ever rewrite the answer columns. Status, money,
  stages and your notes are preserved server side.

## The menu

- **Set up this sheet** — headers, dropdowns, frozen panes
- **Allow the customer to edit** / **Freeze the plan** — on the selected rows
- **Rebuild links and buttons** — regenerates tokens and formulas for a row
- **Mark everything up to date** — bumps `lastUpdated` without changing anything
