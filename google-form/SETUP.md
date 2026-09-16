# The Google Form version

This builds the whole planner as a Google Form. You do not type any questions:
a script creates the form, all the pages and all 62 activities with prices.

## What the form asks, in order

1. **Destination.** Dubai or Thailand. This branches the rest of the form, so
   someone going to Thailand never sees a Dubai question.
2. **Dates.** Month, year, whether dates are flexible, and which package length.
   The page header carries best months, flight time and the visa timeline.
3. **Travellers.** Adults, children, ages of the children, seniors.
4. **Cities.** Checkboxes, with our recommendation in the help text.
5. **Where you stay.** Hotel 3 / 4 / 5 star or apartment, plus a rough nightly
   room budget.
6. **Trip style.** Sightseeing, Family, Relaxed, Nightlife, Adventure, Culture,
   Food, Shopping. This is the fastest read on who you are about to call.
7. **One page per city** listing that city's activities as checkboxes, each
   labelled with its adult and child price and its duration, with all the
   descriptions above the list.
8. **Budget** per person, with the flight and visa ranges stated so the number
   they give you means something.
9. **Contact.** Name, WhatsApp number (validated as an Indian mobile), email,
   and a free text box.

## Two things Google Forms cannot do

**It cannot show them a price, and it cannot show them their itinerary.** Forms
has no arithmetic and no way to display back what was selected.

The submit trigger solves both. The moment someone submits, the script computes
the estimate and **emails them their itinerary, their chosen activities, the
price breakdown and what is and is not included**. They get the same output the
website gave them, by email, within seconds. You get a separate lead email and a
row in the `Leads` tab.

**Per option descriptions and videos are not supported either.** An option can
only be a line of text, so each one reads
`Desert safari with BBQ dinner — ₹3,200 adult / ₹2,600 child — about 6h`, and all
the descriptions sit in a block directly above the list. If you add a YouTube URL
to an activity's `videoUrl` in `config/destinations.ts` and regenerate, the script
embeds a real video player on that page. YouTube links only, that is a Forms
restriction.

## Setting it up

1. Go to https://script.google.com and create a new project.
2. Delete everything in `Code.gs` and paste the whole of
   `google-form/Bindhast.gs`.
3. Change `NOTIFY_EMAIL` at the top to where you want lead alerts.
4. Save, then choose `buildBindhastForm` in the function dropdown and press Run.
   Authorise when Google asks: **Advanced**, then **Go to (project name)**, then
   **Allow**.
5. Open **View > Logs**. It prints the edit URL and the public link. The public
   link is what you send on WhatsApp.

### Turn on the estimate email

6. In the form's editor, go to **Responses**, click the Sheets icon and create a
   linked spreadsheet.
7. Back in the Apps Script project, open **Triggers** (the clock icon) and click
   **Add Trigger**:
   - Function: `onFormSubmit`
   - Event source: **From form**
   - Event type: **On form submit**
8. Submit the form once yourself. You should get two emails, and a `Leads` row.

## Keeping prices in sync

The form is generated from `config/destinations.ts`, the same file the website
uses. Both price identically: the estimate maths was cross checked against the
website's unit tested calculator and matches to the rupee.

To change a price, edit the config, then:

```bash
npm run generate:form
```

Repaste `google-form/Bindhast.gs` and run `buildBindhastForm()` again. That
creates a **new** form, so send out the new link, or edit prices by hand in the
existing form if you only need a small change.

## What lands in your sheet

Two tabs. **Form responses** is the raw Google Forms output. **Leads** is the one
you work from: name, phone, email, status and an owner notes column, then
destination, package, month, flexible, nights, adults, children, child ages,
seniors, total travellers, cities, trip style, stay type, nightly budget, stated
budget, activity count, the activities themselves, the activity total, the
estimate range you sent them, per person figures, the season, and their notes.

Anything you add to the right of `notes` is yours. The form never reads the
sheet, so supplier costs and margin are safe there.
