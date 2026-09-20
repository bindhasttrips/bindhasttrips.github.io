import type { Destination, SeasonLabel } from './types';

/**
 * A destination as written in this file: everything except the numbers, which
 * come from the rate card and are merged in below.
 */
/** Repeated on every destination, so it lives in one place. */
const DEFAULT_VISA_DOCS = [
  'Passport with at least 6 months validity remaining',
  'One recent photograph on a white background',
  'A scan of the first and last pages of your passport',
  'Confirmed return ticket and hotel booking, both of which we provide',
];

const DEFAULT_INCLUDED = [
  'Return international flights, ticketed on your dates',
  'Hotels or Airbnbs, on twin sharing',
  'Airport pickup and drop in a private vehicle',
  'Return transfers for every activity in your plan',
  'Visa application, documentation and fees where a visa is required',
  'Every activity you select, booked in advance with tickets issued before departure',
  'Basic travel insurance for the trip dates',
  'Support on WhatsApp for the duration of your trip',
];

const DEFAULT_NOT_INCLUDED = [
  'Meals other than breakfast, except where an activity includes one',
  'Personal expenses such as shopping, laundry, minibar and tips',
  'Activities added after arrival',
  'Surcharges on peak dates, confirmed before you pay',
  'Any increase in airfare between the estimate and ticketing, which we confirm with you first',
];

type DestinationSource = Omit<
  Destination,
  'pricing' | 'included' | 'notIncluded' | 'bookable'
> & {
  included?: string[];
  notIncluded?: string[];
  bookable?: boolean;
  pricingCopy: {
    flightNote: string;
    seasonNotes: Record<SeasonLabel, string>;
  };
};
import { ACTIVITY_PRICES, RATE_CARDS } from './prices.ts';

/**
 * PRICES ARE DELIBERATELY BLANK.
 *
 * Every activity has `indicativePrice: null`, which means "not priced yet".
 * Null activities are excluded from the estimate and shown to the customer as
 * quoted separately, rather than faked as free. Put a number in and it starts
 * counting immediately, with no other change needed.
 *
 * The land and flight rate cards under `pricing` ARE live and do drive the
 * estimate. Those are the numbers to sanity check first.
 *
 * Images: drop files into /public/images/activities and set `image`. Until
 * then a generated tile is shown. Videos: `videoUrl` only ever holds a real
 * URL you have checked. When it is empty the card links to a YouTube search,
 * which always resolves.
 */

const uae: DestinationSource = {
  slug: 'uae',
  name: 'UAE',
  country: 'United Arab Emirates',
  visaTier: 'evisa',
  bookable: true,
  tagline: 'The easiest international trip an Indian passport can take.',
  heroImage: '/images/places/dubai.jpg',
  heroAlt: 'Dubai skyline seen across the water from Jumeirah beach',
  cardImage: '/images/places/dubai.jpg',
  summary:
    'Three and a half hours from Mumbai, with English and Hindi spoken almost everywhere. Dubai and Abu Dhabi sit ninety minutes apart, so most trips combine the two.',
  bestMonthsSummary: 'November to March. April and October are warm but comfortable and cost less.',
  flightTimeSummary: '3h 15m from Mumbai, 3h 45m from Delhi, 4h from Bengaluru',
  cities: ['Dubai', 'Abu Dhabi'],
  currency: { code: 'AED', symbol: 'AED', approxInrPerUnit: 23 },
  visa: {
    required: true,
    type: 'UAE tourist e-Visa, 30 days, single entry',
    timeline: '3 to 5 working days once we have your documents',
    feeInr: 7500,
    documents: [
      'Passport with at least 6 months validity remaining',
      'One recent photograph on a white background',
      'A scan of the first and last pages of your passport',
      'Confirmed return ticket and hotel booking, both of which we provide',
    ],
    handledByUs:
      'You send your documents on WhatsApp. We complete the form, pay the fee, follow the application and send you the visa PDF. There is no centre to visit and no queue.',
    caveat:
      'Travellers with a blank passport are occasionally asked for a bank statement. We will tell you in advance if we think that applies to you.',
  },
  costSamples: [
    { label: 'Metro ride across town', fromInr: 75, toInr: 180 },
    { label: 'Sit down Indian meal for one', fromInr: 700, toInr: 1200 },
    { label: 'Shawarma from a local shop', fromInr: 180, toInr: 300 },
    { label: 'Bottle of water', fromInr: 35 },
    { label: 'Taxi, Marina to Downtown', fromInr: 600, toInr: 900 },
    { label: 'Coffee at a mall cafe', fromInr: 400, toInr: 550 },
  ],
  costSamplesNote:
    'Costs vary widely by area. Budget approximately 2,000 to 3,000 rupees per person per day for food and local transport.',
  tiers: [
    {
      id: 'essentials',
      name: 'UAE Essentials',
      days: 5,
      nights: 4,
      fromPricePerPerson: 42000,
      blurb: 'The standard first trip, covering the main sights without filler days.',
      highlights: [
        '4-star hotel near the Metro, twin sharing',
        'Desert safari with BBQ dinner',
        'Burj Khalifa, levels 124 and 125',
        'Half day Dubai city tour',
        'All airport and activity transfers',
      ],
      itinerary: [
        { day: 1, title: 'Arrive in Dubai', city: 'Dubai', detail: 'Airport pickup in a private car, hotel check-in, and a short evening walk around Dubai Marina.' },
        { day: 2, title: 'Old Dubai and Downtown', city: 'Dubai', detail: 'The souks and the creek in the morning, Downtown in the evening.' },
        { day: 3, title: 'Desert day', city: 'Dubai', detail: 'Free morning, afternoon pickup for the desert.' },
        { day: 4, title: 'Beach and Burj Khalifa', city: 'Dubai', detail: 'A slow morning by the sea, then the tower at sunset.' },
        { day: 5, title: 'Departure', city: 'Dubai', detail: 'Late checkout where the hotel permits, then airport drop.' },
      ],
    },
    {
      id: 'complete',
      name: 'Dubai and Abu Dhabi',
      days: 7,
      nights: 6,
      fromPricePerPerson: 61000,
      blurb: 'Two additional days, which allows a full Abu Dhabi visit and one unscheduled day.',
      recommended: true,
      highlights: [
        'Everything in Essentials',
        'Full day Abu Dhabi with the Grand Mosque',
        'Marina dhow cruise with dinner',
        'One theme park or waterpark of your choice',
        'One full unscheduled day',
      ],
      itinerary: [
        { day: 1, title: 'Arrive in Dubai', city: 'Dubai', detail: 'Private airport pickup, check-in, and a free first evening at the Marina.' },
        { day: 2, title: 'Old Dubai', city: 'Dubai', detail: 'Souks, the creek crossing by abra, and the Al Fahidi district.' },
        { day: 3, title: 'Desert day', city: 'Dubai', detail: 'Afternoon desert safari with BBQ dinner and a live show.' },
        { day: 4, title: 'Abu Dhabi', city: 'Abu Dhabi', detail: 'A long day out. Early start, back late.' },
        { day: 5, title: 'Your choice', city: 'Dubai', detail: 'A park, a waterpark, or nothing at all.' },
        { day: 6, title: 'Downtown and the water', city: 'Dubai', detail: 'The tower at sunset, then dinner on the water.' },
        { day: 7, title: 'Departure', city: 'Dubai', detail: 'Free morning, then airport drop.' },
      ],
    },
    {
      id: 'extended',
      name: 'UAE Extended',
      days: 9,
      nights: 8,
      fromPricePerPerson: 84000,
      blurb: 'Five nights in Dubai and three in Abu Dhabi, with room to do nothing on two of them.',
      highlights: [
        '5 nights Dubai, 3 nights Abu Dhabi',
        'Louvre Abu Dhabi and Ferrari World',
        'Intercity transfers by private car',
        'Suits families and multi generation groups',
        'Two full unscheduled days',
      ],
      itinerary: [
        { day: 1, title: 'Arrive in Dubai', city: 'Dubai', detail: 'Private airport pickup and check-in.' },
        { day: 2, title: 'Old Dubai', city: 'Dubai', detail: 'Souks, creek crossing and Al Fahidi. Evening at the fountain show.' },
        { day: 3, title: 'Desert day', city: 'Dubai', detail: 'Afternoon safari, BBQ dinner and the show.' },
        { day: 4, title: 'Beach and Burj Khalifa', city: 'Dubai', detail: 'Morning at the beach, tower at sunset, dinner on the water.' },
        { day: 5, title: 'Free day in Dubai', city: 'Dubai', detail: 'Nothing scheduled.' },
        { day: 6, title: 'Move to Abu Dhabi', city: 'Abu Dhabi', detail: 'Private transfer, check-in, Grand Mosque in the late afternoon.' },
        { day: 7, title: 'Yas Island', city: 'Abu Dhabi', detail: 'A full day on the island.' },
        { day: 8, title: 'Culture and coast', city: 'Abu Dhabi', detail: 'A museum morning and the Corniche in the evening.' },
        { day: 9, title: 'Departure', city: 'Abu Dhabi', detail: 'Airport drop.' },
      ],
    },
  ],
  activities: [
    { id: 'desert-safari', name: 'Desert safari with BBQ dinner', description: 'Dune bashing, a camel ride, henna and a buffet dinner at a desert camp.', detail: 'A 4x4 collects you mid afternoon and spends about forty minutes on the dunes before reaching camp. There is a camel ride, sand boarding, henna, a falcon photo, then a live show over a barbecue buffet. You are usually back at the hotel by half nine.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 6, tags: ['adventure', 'family', 'sightseeing'], suits: ['couple', 'family', 'friends', 'solo'], city: 'Dubai', intensity: 'moderate' },
    { id: 'desert-camel-trek', name: 'Sunset camel trek, no dune bashing', description: 'The desert at a walking pace, for anyone who does not want the 4x4.', detail: 'A gentler alternative to the safari. You ride out at golden hour, stop for photographs and Arabic coffee, and have dinner at camp without the off road driving. This is the version to pick if anyone gets motion sick or has a bad back.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 5, tags: ['relaxed', 'sightseeing', 'culture'], suits: ['couple', 'seniors', 'family'], city: 'Dubai', intensity: 'low' },
    { id: 'burj-khalifa', name: 'Burj Khalifa, levels 124 and 125', description: 'Timed entry to the main observation decks.', detail: 'The standard ticket, and the one most people want. Sunset slots sell out weeks ahead, which is the single most common thing first time visitors get wrong. Allow ninety minutes including the queue at the base.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 2, tags: ['sightseeing'], suits: ['couple', 'family', 'friends', 'seniors', 'solo'], city: 'Dubai', intensity: 'low' },
    { id: 'burj-khalifa-148', name: 'Burj Khalifa, level 148 SKY', description: 'The higher deck, with lounge access and a much shorter queue.', detail: 'Level 148 is the highest public deck in the building and includes an outdoor terrace, refreshments and priority entry. Noticeably more expensive, and worth it mainly if you hate queuing or are marking an occasion.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 2, tags: ['sightseeing'], suits: ['couple', 'friends'], city: 'Dubai', intensity: 'low' },
    { id: 'palm-view', name: 'The View at the Palm', description: 'Observation deck looking straight down the Palm Jumeirah.', detail: 'On the 52nd floor of the Palm Tower, this is the only place you actually see the palm shape from above. Cheaper and far quieter than Burj Khalifa, and a good pairing with a beach afternoon at Atlantis.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 2, tags: ['sightseeing'], suits: ['couple', 'family', 'seniors', 'solo'], city: 'Dubai', intensity: 'low' },
    { id: 'ain-dubai', name: 'Ain Dubai observation wheel', description: 'The largest observation wheel in the world, on Bluewaters Island.', detail: 'A full rotation takes about thirty eight minutes in a glass cabin with views back over the Marina and JBR. Operating status changes from time to time, so we confirm it is running before we put it in your plan.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 2, tags: ['sightseeing', 'relaxed'], suits: ['couple', 'family', 'seniors'], city: 'Dubai', intensity: 'low', note: 'We confirm it is operating before booking' },
    { id: 'dubai-city-tour', name: 'Half day Dubai city tour', description: 'A guided run through the old and new city with the main photo stops.', detail: 'Covers the Jumeirah Mosque exterior, Al Fahidi, the creek, the souks and a drive past the Burj Al Arab, finishing at Downtown. The most efficient way to get your bearings on day one or two.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 4, tags: ['sightseeing', 'culture'], suits: ['couple', 'family', 'seniors', 'solo'], city: 'Dubai', intensity: 'low' },
    { id: 'old-dubai-souks', name: 'Gold and spice souks with abra crossing', description: 'The old trading quarter, crossing the creek on a wooden abra.', detail: 'Deira on one side, Bur Dubai on the other, and a one dirham boat between them. The gold souk is genuinely worth seeing even if you do not buy, and the spice lanes behind it are where locals actually shop.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 3, tags: ['culture', 'shopping'], suits: ['couple', 'family', 'seniors', 'solo'], city: 'Dubai', intensity: 'low' },
    { id: 'dubai-food-tour', name: 'Old Dubai evening food walk', description: 'A guided walk through the places residents actually eat.', detail: 'Emirati, Iranian, Pakistani and Lebanese stops across Deira and Bur Dubai, on foot, with a guide who explains what you are eating. Roughly six tastings and you will not need dinner afterwards.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 4, tags: ['food', 'culture'], suits: ['couple', 'friends', 'solo'], city: 'Dubai', intensity: 'moderate' },
    { id: 'dhow-cruise', name: 'Marina dhow cruise with dinner', description: 'Two hours on the water with a buffet and the skyline lit up.', detail: 'A traditional wooden boat fitted out for dining, running a slow loop of Dubai Marina. There is a buffet, usually a tanoura dance, and an open upper deck which is where you want to sit.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 3, tags: ['relaxed', 'food'], suits: ['couple', 'family', 'seniors'], city: 'Dubai', intensity: 'low' },
    { id: 'museum-future', name: 'Museum of the Future', description: 'The calligraphy covered torus on Sheikh Zayed Road.', detail: 'Part museum, part immersive installation, across floors on space, ecology and wellbeing. Tickets are released on a rolling basis and same day entry is almost never available, so this has to be booked well ahead.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 2, tags: ['culture', 'sightseeing'], suits: ['couple', 'family', 'friends', 'solo'], city: 'Dubai', intensity: 'low' },
    { id: 'dubai-frame', name: 'Dubai Frame', description: 'Old city on one side, new city on the other.', detail: 'A 150 metre picture frame with a glass floor walkway at the top. Quick, inexpensive and a genuinely clever bit of architecture. Forty five minutes is plenty.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 2, tags: ['sightseeing'], suits: ['family', 'seniors', 'solo'], city: 'Dubai', intensity: 'low' },
    { id: 'dubai-fountain-boat', name: 'Dubai Fountain lake ride', description: 'A short traditional boat ride during the fountain show.', detail: 'Ten to fifteen minutes on the Burj Lake while the fountains run, which puts you closer than anyone standing on the promenade. Cheap, and the best photographs of the evening come from here.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 1, tags: ['relaxed', 'sightseeing', 'family'], suits: ['couple', 'family', 'seniors'], city: 'Dubai', intensity: 'low' },
    { id: 'la-mer-beach', name: 'Beach day at La Mer or Kite Beach', description: 'Public beach with cafes and changing facilities.', detail: 'No ticket needed. La Mer has more shade and food, Kite Beach has the Burj Al Arab view and the watersports. Both are free to enter and a good way to spend a morning without spending anything.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 4, tags: ['relaxed', 'family'], suits: ['couple', 'family', 'friends', 'seniors', 'solo'], city: 'Dubai', intensity: 'low' },
    { id: 'kite-watersports', name: 'Jet ski with the Burj Al Arab behind you', description: 'Thirty minutes on the water off Kite Beach.', detail: 'Guided jet ski runs along the Jumeirah coast, timed so you get the Burj Al Arab and the Marina skyline in shot. No licence needed and a briefing is included.', indicativePrice: null, childPrice: null, audience: 'adult', durationHours: 2, tags: ['adventure'], suits: ['friends', 'couple'], city: 'Dubai', intensity: 'high' },
    { id: 'aquaventure', name: 'Atlantis Aquaventure waterpark', description: 'The largest waterpark in the region. Allow a full day.', detail: 'Around one hundred and five slides and attractions across two towers, plus a private beach. The Leap of Faith is the famous one. Arrive at opening, because the queues build sharply after eleven.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 8, tags: ['family', 'adventure'], suits: ['family', 'friends', 'couple'], city: 'Dubai', intensity: 'high' },
    { id: 'lost-chambers', name: 'Lost Chambers Aquarium', description: 'Walk through aquarium at Atlantis, easy on small children.', detail: 'Sixty five thousand marine animals in tunnels and halls themed around a sunken city. Roughly ninety minutes, indoors and air conditioned, and it combines well with an Aquaventure ticket on the same day.', indicativePrice: null, childPrice: null, audience: 'kids', durationHours: 2, tags: ['family'], suits: ['family', 'seniors'], city: 'Dubai', intensity: 'low' },
    { id: 'dubai-aquarium', name: 'Dubai Aquarium and Underwater Zoo', description: 'Inside Dubai Mall, so it pairs with a shopping afternoon.', detail: 'A ten million litre tank you can walk under, with rays, reef sharks and a large crocodile upstairs. You can see the tank face for free from the mall; the ticket gets you the tunnel and the zoo level.', indicativePrice: null, childPrice: null, audience: 'kids', durationHours: 2, tags: ['family'], suits: ['family', 'seniors'], city: 'Dubai', intensity: 'low' },
    { id: 'green-planet', name: 'The Green Planet indoor rainforest', description: 'A biodome with sloths, snakes and free flying birds.', detail: 'Four levels of tropical rainforest built around one enormous indoor tree, with about three thousand plants and animals. Small, gentle and genuinely good for children under ten.', indicativePrice: null, childPrice: null, audience: 'kids', durationHours: 2, tags: ['family'], suits: ['family'], city: 'Dubai', intensity: 'low' },
    { id: 'img-worlds', name: 'IMG Worlds of Adventure', description: 'Indoor theme park, so it stays comfortable in peak summer.', detail: 'Marvel and Cartoon Network zones plus a dinosaur area, all under one roof. The rollercoasters are real ones, not kiddie rides. The best option in July and August when outdoor parks are unbearable.', indicativePrice: null, childPrice: null, audience: 'kids', durationHours: 7, tags: ['family', 'adventure'], suits: ['family', 'friends'], city: 'Dubai', intensity: 'moderate' },
    { id: 'ski-dubai', name: 'Ski Dubai snow park', description: 'Indoor snow park with real snow. Jackets and boots provided.', detail: 'A twenty two thousand square metre indoor ski slope inside Mall of the Emirates, with a penguin encounter, tobogganing and a chairlift. Two hours is plenty unless you actually ski.', indicativePrice: null, childPrice: null, audience: 'kids', durationHours: 3, tags: ['family', 'adventure'], suits: ['family', 'friends'], city: 'Dubai', intensity: 'moderate' },
    { id: 'dubai-safari-park', name: 'Dubai Safari Park', description: 'A proper open enclosure zoo, best in the cooler months.', detail: 'African, Asian and Arabian villages spread over a large site, with a safari bus through the open enclosures. Closed over the summer. Take a hat and start early.', indicativePrice: null, childPrice: null, audience: 'kids', durationHours: 5, tags: ['family'], suits: ['family'], city: 'Dubai', intensity: 'moderate', note: 'Closed in summer, roughly May to September' },
    { id: 'miracle-garden', name: 'Dubai Miracle Garden', description: 'A large seasonal flower garden. Popular for photographs.', detail: 'Around fifty million flowers arranged into arches, hearts and a flower covered Airbus A380. Entirely a photo stop, and none the worse for it. Open roughly November to May only.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 3, tags: ['family', 'relaxed'], suits: ['couple', 'family', 'seniors'], city: 'Dubai', intensity: 'low', note: 'Seasonal, open approximately November to May' },
    { id: 'global-village', name: 'Global Village', description: 'Open air market and food festival with pavilions by country.', detail: 'Around ninety countries with stalls, street food and a funfair, busiest after eight in the evening. Cheap to enter, easy to spend money inside, and one of the few genuinely outdoor evenings in the calendar.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 4, tags: ['family', 'shopping', 'food'], suits: ['family', 'friends', 'couple'], city: 'Dubai', intensity: 'low', note: 'Seasonal, open approximately October to April' },
    { id: 'marina-yacht', name: 'Shared yacht cruise on the Marina', description: 'Two hours on a shared yacht with refreshments.', detail: 'A smaller and quieter alternative to the dhow, running past the Marina towers, Bluewaters and Palm Jumeirah. Private charters are available if the group is large enough to justify it.', indicativePrice: null, childPrice: null, audience: 'adult', durationHours: 2, tags: ['relaxed', 'nightlife'], suits: ['couple', 'friends'], city: 'Dubai', intensity: 'low' },
    { id: 'balloon', name: 'Sunrise hot air balloon over the desert', description: 'Pre dawn start, with a falcon display on landing.', detail: 'Pickup is around four in the morning for a launch at first light over the Dubai Desert Conservation Reserve. You will usually see oryx and gazelle from the basket. Breakfast at a desert camp afterwards.', indicativePrice: null, childPrice: null, audience: 'adult', durationHours: 5, tags: ['adventure', 'sightseeing'], suits: ['couple', 'friends'], city: 'Dubai', intensity: 'moderate' },
    { id: 'skydive', name: 'Skydive over the Palm', description: 'Tandem jump with the Palm Jumeirah underneath you.', detail: 'Thirteen thousand feet, roughly a minute of freefall, then five minutes under canopy over the Palm. Weather dependent and booked out weeks ahead, so it needs to go in the plan early.', indicativePrice: null, childPrice: null, audience: 'adult', durationHours: 4, tags: ['adventure'], suits: ['friends', 'couple', 'solo'], city: 'Dubai', intensity: 'high' },
    { id: 'desert-quad', name: 'Quad biking in the desert', description: 'Self drive quad session with an instructor.', detail: 'Usually bolted onto a desert safari rather than done alone. Helmets and goggles provided, and a short briefing before you ride. Dusty, loud and the part most groups of friends remember.', indicativePrice: null, childPrice: null, audience: 'adult', durationHours: 3, tags: ['adventure'], suits: ['friends', 'couple'], city: 'Dubai', intensity: 'high' },
    { id: 'helicopter-tour', name: 'Helicopter tour over Dubai', description: 'Twelve to seventeen minutes over the Palm, the Burj and the coast.', detail: 'Departs from the Palm heliport. The twelve minute loop covers the Palm and Burj Al Arab; the longer one adds Downtown and the Burj Khalifa. Expensive per minute and worth it once.', indicativePrice: null, childPrice: null, audience: 'adult', durationHours: 1, tags: ['sightseeing', 'adventure'], suits: ['couple', 'friends'], city: 'Dubai', intensity: 'low' },
    { id: 'marina-brunch', name: 'Weekend brunch at a Marina restaurant', description: 'The long Dubai brunch, food and drinks over three hours.', detail: 'A local institution, usually Saturday afternoons, running as an unlimited sitting with live music. Venues range from family friendly to distinctly not, so tell us which end you want.', indicativePrice: null, childPrice: null, audience: 'adult', durationHours: 3, tags: ['food', 'nightlife'], suits: ['friends', 'couple'], city: 'Dubai', intensity: 'low' },
    { id: 'nightlife-marina', name: 'Night out at a Marina club or lounge', description: 'Entry and a table at a mainstream club.', detail: 'We book the table and brief you on the dress code, which is enforced and catches people out. Most venues run from eleven until three. Ladies nights on certain weekdays cut the cost considerably.', indicativePrice: null, childPrice: null, audience: 'adult', durationHours: 4, tags: ['nightlife'], suits: ['friends', 'couple'], city: 'Dubai', intensity: 'low' },
    { id: 'gold-souk-shopping', name: 'Guided gold and textile shopping', description: 'A guide who knows the going rate, which matters if you are buying.', detail: 'Gold is sold by weight at a published daily rate plus a making charge, and the making charge is where the negotiation happens. Having someone with you who knows that is worth more than the fee.', indicativePrice: null, childPrice: null, audience: 'adult', durationHours: 3, tags: ['shopping'], suits: ['couple', 'family', 'seniors'], city: 'Dubai', intensity: 'low' },
    { id: 'spa-hammam', name: 'Traditional hammam and spa session', description: 'Steam, scrub and massage.', detail: 'A proper Middle Eastern bathhouse treatment: steam room, black soap, a vigorous exfoliation and a massage. About ninety minutes and an excellent way to spend a summer afternoon.', indicativePrice: null, childPrice: null, audience: 'adult', durationHours: 2, tags: ['relaxed'], suits: ['couple', 'seniors', 'solo'], city: 'Dubai', intensity: 'low' },
    { id: 'abu-dhabi-tour', name: 'Abu Dhabi day tour from Dubai', description: 'Grand Mosque, Qasr Al Watan and the Corniche, with lunch.', detail: 'A long day: pickup around eight, back around eight. Sheikh Zayed Grand Mosque alone justifies it. Modest dress is required and abayas are available free at the entrance.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 10, tags: ['culture', 'sightseeing'], suits: ['couple', 'family', 'seniors', 'solo'], city: 'Abu Dhabi', intensity: 'moderate' },
    { id: 'grand-mosque', name: 'Sheikh Zayed Grand Mosque', description: 'On its own, at your own pace, rather than as part of a tour.', detail: 'Eighty two domes, the largest hand knotted carpet in the world, and a courtyard that photographs extraordinarily well at dusk. Free to enter. Best in the last two hours before sunset.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 3, tags: ['culture', 'sightseeing'], suits: ['couple', 'family', 'seniors', 'solo'], city: 'Abu Dhabi', intensity: 'low' },
    { id: 'louvre-abu-dhabi', name: 'Louvre Abu Dhabi', description: 'The domed museum on Saadiyat Island.', detail: 'A Jean Nouvel building where the perforated dome creates a rain of light over the galleries. The collection is arranged chronologically across civilisations rather than by region. Two to three hours.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 3, tags: ['culture'], suits: ['couple', 'seniors', 'solo', 'family'], city: 'Abu Dhabi', intensity: 'low' },
    { id: 'qasr-al-watan', name: 'Qasr Al Watan presidential palace', description: 'A working palace, open to visitors.', detail: 'Not a residence but the ceremonial seat of government, with a vast domed great hall and a library. The evening light and sound show on the facade is included with the ticket.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 3, tags: ['culture', 'sightseeing'], suits: ['couple', 'family', 'seniors'], city: 'Abu Dhabi', intensity: 'low' },
    { id: 'ferrari-world', name: 'Ferrari World', description: 'Indoor park on Yas Island with the fastest coaster in the world.', detail: 'Formula Rossa goes from zero to two hundred and forty kilometres an hour in under five seconds, and you wear goggles for it. Plenty of gentler rides too, so it still works with younger children.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 8, tags: ['family', 'adventure'], suits: ['family', 'friends', 'couple'], city: 'Abu Dhabi', intensity: 'high' },
    { id: 'warner-bros', name: 'Warner Bros World Abu Dhabi', description: 'Fully indoor park, gentler than Ferrari World.', detail: 'Six lands covering DC, Looney Tunes and Hanna Barbera, entirely under cover and air conditioned. The best of the Yas parks for children under eight.', indicativePrice: null, childPrice: null, audience: 'kids', durationHours: 8, tags: ['family'], suits: ['family'], city: 'Abu Dhabi', intensity: 'moderate' },
    { id: 'yas-waterworld', name: 'Yas Waterworld', description: 'Emirati themed waterpark with about forty rides.', detail: 'Built around a pearl diving legend, with a six person tornado slide and a surfable wave machine. Less crowded than Aquaventure and usually cheaper.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 7, tags: ['family', 'adventure'], suits: ['family', 'friends'], city: 'Abu Dhabi', intensity: 'high' },
    { id: 'emirates-palace-tea', name: 'Afternoon tea at Emirates Palace', description: 'Including the gold flaked cappuccino, if you want it.', detail: 'A sit down afternoon tea in the atrium of one of the most extravagant hotels in the region. Worth doing once for the building alone. Smart dress and a booking are both required.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 2, tags: ['food', 'relaxed'], suits: ['couple', 'seniors'], city: 'Abu Dhabi', intensity: 'low' },
  ],
  included: [
    'Return international flights, ticketed on your dates',
    'Hotels or Airbnbs, on twin sharing',
    'Airport pickup and drop in a private vehicle',
    'All intercity transfers between Dubai and Abu Dhabi',
    'Return transfers for every activity in your plan',
    'UAE tourist visa, including application, follow up and fees',
    'Every activity you select, booked in advance with tickets issued before departure',
    'Basic travel insurance for the trip dates',
    'Support on WhatsApp for the duration of your trip',
  ],
  notIncluded: [
    'Meals other than breakfast, except where an activity includes one',
    'Personal expenses such as shopping, laundry, minibar and tips',
    'Activities added after arrival',
    'Tourism Dirham fee paid at hotel check-in, approximately 350 to 500 rupees per room per night',
    'Surcharges on peak dates such as New Year and Eid, confirmed before you pay',
    'Any increase in airfare between the estimate and ticketing, which we confirm with you first',
  ],
  // Numbers live in config/prices.ts. These are the words that go with them.
  pricingCopy: {
    flightNote: 'Return economy from Mumbai, Delhi or Bengaluru.',
    seasonNotes: {
      peak: 'The best weather of the year, and correspondingly the highest hotel rates.',
      shoulder: 'Warm but comfortable, and noticeably cheaper than peak season.',
      off: 'Hot outdoors, though most attractions are indoors, and rates fall substantially.',
    },
  },
  brochure: '/brochures/uae-guide.pdf',
  enabled: true,
};

const thailand: DestinationSource = {
  slug: 'thailand',
  name: 'Thailand',
  country: 'Thailand',
  visaTier: 'none',
  bookable: true,
  tagline: 'Lower costs than the UAE, and no visa required for Indian passport holders.',
  heroImage: '/images/places/krabi.jpg',
  heroAlt: 'Railay beach in Krabi, with limestone cliffs behind the sand',
  cardImage: '/images/places/krabi.jpg',
  summary:
    'Costs on the ground are roughly half those in the UAE, and Indian passport holders currently enter without a visa. Six bases to choose between, from Bangkok to the southern islands.',
  bestMonthsSummary: 'November to February offers the best weather. March and October are warmer and cost less.',
  flightTimeSummary: '4h 20m from Kolkata, 4h 30m from Mumbai, 4h 15m from Delhi',
  cities: ['Bangkok', 'Pattaya', 'Chiang Mai', 'Phuket', 'Krabi', 'Koh Samui'],
  currency: { code: 'THB', symbol: 'THB', approxInrPerUnit: 2.6 },
  visa: {
    required: false,
    type: 'Visa free entry for Indian passport holders, currently up to 60 days',
    timeline: 'Nothing to apply for. You clear immigration on arrival.',
    feeInr: 0,
    documents: [
      'Passport with at least 6 months validity remaining',
      'Confirmed return ticket, which we provide',
      'Hotel booking confirmation, which we provide',
      'Thailand Digital Arrival Card, completed online before departure. We do this for you.',
    ],
    handledByUs:
      'There is no visa to process, which removes the single most stressful part of planning a trip. We still complete your arrival card and brief you on what immigration will ask.',
    caveat:
      'Visa free entry is a policy that governments change. We confirm the rule in force on your travel dates before you pay anything.',
  },
  costSamples: [
    { label: 'Street pad thai', fromInr: 120, toInr: 200 },
    { label: 'Bottle of water from 7-Eleven', fromInr: 25 },
    { label: 'Grab ride, 15 minutes', fromInr: 200, toInr: 350 },
    { label: 'One hour Thai massage', fromInr: 600, toInr: 900 },
    { label: 'Local beer at a bar', fromInr: 180, toInr: 300 },
    { label: 'BTS Skytrain ride', fromInr: 60, toInr: 150 },
  ],
  costSamplesNote:
    'Costs on the ground are low. Approximately 1,500 rupees per person per day covers food and local transport comfortably.',
  tiers: [
    {
      id: 'bangkok-pattaya', name: 'Bangkok and Pattaya', days: 6, nights: 5, fromPricePerPerson: 34000,
      blurb: 'The most economical way to combine a city stay with a beach stay.',
      highlights: ['3 nights Bangkok, 2 nights Pattaya', 'Grand Palace and Wat Pho tour', 'Coral Island day trip with lunch', 'Floating market morning', 'All intercity and activity transfers'],
      itinerary: [
        { day: 1, title: 'Arrive in Bangkok', city: 'Bangkok', detail: 'Airport pickup, hotel check-in, and an evening at a night market.' },
        { day: 2, title: 'Old Bangkok', city: 'Bangkok', detail: 'Temples in the morning before the heat, the river in the evening.' },
        { day: 3, title: 'Markets, then Pattaya', city: 'Bangkok', detail: 'Early start for the markets, then the transfer to the coast.' },
        { day: 4, title: 'Island day', city: 'Pattaya', detail: 'Out to the island for the day, back by evening.' },
        { day: 5, title: 'Pattaya to Bangkok', city: 'Pattaya', detail: 'Free morning, transfer back, final evening free.' },
        { day: 6, title: 'Departure', city: 'Bangkok', detail: 'Airport drop with time to spare.' },
      ],
    },
    {
      id: 'bangkok-phuket', name: 'Bangkok and Phuket', days: 7, nights: 6, fromPricePerPerson: 47000,
      blurb: 'Bangkok followed by four nights in Phuket, with the domestic flight included.',
      recommended: true,
      highlights: ['2 nights Bangkok, 4 nights Phuket', 'Domestic flight included', 'Phi Phi islands by speedboat', 'James Bond Island sea canoe tour', 'Beachfront or near beach hotel'],
      itinerary: [
        { day: 1, title: 'Arrive in Bangkok', city: 'Bangkok', detail: 'Airport pickup, hotel check-in, night market for dinner.' },
        { day: 2, title: 'Bangkok in one day', city: 'Bangkok', detail: 'Temples in the morning, the river at night.' },
        { day: 3, title: 'Fly to Phuket', city: 'Phuket', detail: 'Short domestic flight, transfer, free first evening on the beach.' },
        { day: 4, title: 'Phi Phi islands', city: 'Phuket', detail: 'A full day out on the water.' },
        { day: 5, title: 'Phang Nga Bay', city: 'Phuket', detail: 'A calmer day than Phi Phi.' },
        { day: 6, title: 'Free day', city: 'Phuket', detail: 'Nothing scheduled.' },
        { day: 7, title: 'Departure', city: 'Phuket', detail: 'Airport drop.' },
      ],
    },
    {
      id: 'grand-tour', name: 'Bangkok, Chiang Mai and the islands', days: 11, nights: 10, fromPricePerPerson: 86000,
      blurb: 'North and south in one trip, for people who would rather not come back twice.',
      highlights: ['2 nights Bangkok, 3 Chiang Mai, 5 in the south', 'Two domestic flights included', 'Elephant sanctuary in the north', 'Island hopping in the south', 'Three unscheduled days'],
      itinerary: [
        { day: 1, title: 'Arrive in Bangkok', city: 'Bangkok', detail: 'Airport pickup, check-in, night market.' },
        { day: 2, title: 'Bangkok in one day', city: 'Bangkok', detail: 'Grand Palace and Wat Pho, evening river cruise.' },
        { day: 3, title: 'Fly to Chiang Mai', city: 'Chiang Mai', detail: 'Short flight north, check-in, old city in the evening.' },
        { day: 4, title: 'Elephants and temples', city: 'Chiang Mai', detail: 'Sanctuary in the morning, Doi Suthep in the afternoon.' },
        { day: 5, title: 'Free day in the north', city: 'Chiang Mai', detail: 'Cooking class, markets, or nothing at all.' },
        { day: 6, title: 'Fly south', city: 'Phuket', detail: 'Transfer to the coast and an easy first evening.' },
        { day: 7, title: 'Phi Phi islands', city: 'Phuket', detail: 'Full day speedboat trip.' },
        { day: 8, title: 'Free day', city: 'Phuket', detail: 'Beach, old town or a massage.' },
        { day: 9, title: 'Move to Krabi', city: 'Krabi', detail: 'Ferry across, check in at Ao Nang.' },
        { day: 10, title: 'Four Islands', city: 'Krabi', detail: 'Longtail boat day among the karsts.' },
        { day: 11, title: 'Departure', city: 'Krabi', detail: 'Transfer to the airport.' },
      ],
    },
  ],
  activities: [
    { id: 'grand-palace', name: 'Grand Palace and Wat Pho', description: 'The two temples everyone means when they say Bangkok.', detail: 'The Grand Palace holds the Emerald Buddha and takes about two hours; Wat Pho next door has the forty six metre reclining Buddha. Shoulders and knees must be covered at both, and it is far more pleasant before ten in the morning.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 5, tags: ['culture', 'sightseeing'], suits: ['couple', 'family', 'seniors', 'solo'], city: 'Bangkok', intensity: 'moderate' },
    { id: 'wat-arun', name: 'Wat Arun at sunset', description: 'The porcelain temple across the river.', detail: 'Best reached by the four baht cross river ferry from Tha Tien. The spire is covered in broken Chinese porcelain and the light on it just before dusk is the reason to time it this way.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 2, tags: ['culture', 'sightseeing'], suits: ['couple', 'solo', 'seniors'], city: 'Bangkok', intensity: 'low' },
    { id: 'floating-market', name: 'Floating market and railway market', description: 'Damnoen Saduak and Maeklong in one morning.', detail: 'Departure is around six, because both markets are ninety minutes out and both are unbearable by midday. At Maeklong the stalls fold away as a train passes through, several times a day, inches from the produce.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 7, tags: ['culture', 'sightseeing', 'shopping'], suits: ['couple', 'family', 'seniors', 'solo'], city: 'Bangkok', intensity: 'moderate' },
    { id: 'river-cruise', name: 'Chao Phraya dinner cruise', description: 'Buffet dinner on the river with the temples lit.', detail: 'Two hours downriver past Wat Arun, the Grand Palace and under the Rama VIII bridge. There is usually live music. The upper deck is worth asking for when we book.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 3, tags: ['relaxed', 'food'], suits: ['couple', 'family', 'seniors'], city: 'Bangkok', intensity: 'low' },
    { id: 'cooking-class-bkk', name: 'Thai cooking class in Bangkok', description: 'A market visit, then cook four dishes and eat them.', detail: 'Starts with a walk through a local market to learn the ingredients, then a hands on session producing a curry, a stir fry, a soup and a dessert. You leave with a recipe book and no need for dinner.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 4, tags: ['food', 'culture'], suits: ['couple', 'friends', 'solo', 'family'], city: 'Bangkok', intensity: 'low' },
    { id: 'street-food-tour', name: 'Chinatown street food walk', description: 'A guided evening through Yaowarat.', detail: 'Roughly six stops through the busiest food street in the city, eating things you would not order alone. Starts around six when the stalls open and runs until about ten.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 4, tags: ['food', 'culture'], suits: ['couple', 'friends', 'solo'], city: 'Bangkok', intensity: 'moderate' },
    { id: 'safari-world', name: 'Safari World and Marine Park', description: 'Drive through safari plus the dolphin show.', detail: 'A drive through open zoo followed by a marine park with dolphin, sea lion and orangutan shows. A full day, well out of the centre, and the single best Bangkok option for children.', indicativePrice: null, childPrice: null, audience: 'kids', durationHours: 8, tags: ['family'], suits: ['family'], city: 'Bangkok', intensity: 'moderate' },
    { id: 'ayutthaya', name: 'Ayutthaya day trip', description: 'The ruined former capital, ninety minutes north.', detail: 'A UNESCO site of collapsed brick temples and the famous Buddha head grown into a fig tree. Usually done by road one way and river boat the other. Very little shade, so hats matter.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 9, tags: ['culture', 'sightseeing'], suits: ['couple', 'seniors', 'solo'], city: 'Bangkok', intensity: 'moderate' },
    { id: 'muay-thai', name: 'Muay Thai at Rajadamnern', description: 'Ringside at a competitive stadium, not a tourist show.', detail: 'One of the two historic stadiums in Bangkok, with real ranked fights and a genuinely loud gambling crowd in the upper tiers. Usually eight bouts across an evening, building to the main event.', indicativePrice: null, childPrice: null, audience: 'adult', durationHours: 3, tags: ['culture', 'nightlife'], suits: ['friends', 'couple', 'solo'], city: 'Bangkok', intensity: 'low' },
    { id: 'rooftop-bar', name: 'Rooftop bar evening', description: 'A table at one of the river or Sukhumvit rooftops.', detail: 'Bangkok does this better than almost anywhere. Dress code is enforced, so no shorts or open shoes. We book ahead because the good tables at sunset go weeks in advance.', indicativePrice: null, childPrice: null, audience: 'adult', durationHours: 3, tags: ['nightlife'], suits: ['couple', 'friends'], city: 'Bangkok', intensity: 'low' },
    { id: 'chatuchak', name: 'Chatuchak weekend market', description: 'Fifteen thousand stalls. Weekends only.', detail: 'One of the largest markets in the world, divided into numbered sections covering clothes, plants, ceramics and food. Go before noon, take cash, and agree a meeting point because phone signal is poor inside.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 4, tags: ['shopping', 'food'], suits: ['couple', 'friends', 'solo'], city: 'Bangkok', intensity: 'moderate' },
    { id: 'thai-massage-bkk', name: 'Traditional Thai massage', description: 'A proper hour at an established parlour.', detail: 'Traditional Thai massage is assisted stretching rather than oil work, and it is firm. Ask for medium pressure the first time. Wat Pho runs the most famous school in the country.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 2, tags: ['relaxed'], suits: ['couple', 'seniors', 'solo', 'friends'], city: 'Bangkok', intensity: 'low' },
    { id: 'coral-island', name: 'Coral Island with lunch', description: 'Speedboat to Koh Larn, beach time and a seafood lunch.', detail: 'Forty minutes out of Pattaya to clearer water than the mainland beaches. Parasailing and banana boats are pushed hard on arrival; they are optional and priced separately on the sand.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 7, tags: ['relaxed', 'family', 'sightseeing'], suits: ['family', 'friends', 'couple'], city: 'Pattaya', intensity: 'moderate' },
    { id: 'nong-nooch', name: 'Nong Nooch Tropical Garden', description: 'Botanical gardens with a culture show and elephants.', detail: 'Six hundred acres of landscaped gardens including a French garden and a Stonehenge replica, plus a cultural show and an elephant show. Gentle, shaded and easy on older visitors.', indicativePrice: null, childPrice: null, audience: 'kids', durationHours: 5, tags: ['family', 'relaxed'], suits: ['family', 'seniors'], city: 'Pattaya', intensity: 'low' },
    { id: 'sanctuary-truth', name: 'Sanctuary of Truth', description: 'An all timber carved temple on the seafront.', detail: 'A hundred metre high wooden structure covered in hand carved figures, built without nails and still unfinished after forty years. Hard hats are issued at the entrance because carving continues overhead.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 2, tags: ['culture', 'sightseeing'], suits: ['couple', 'family', 'seniors', 'solo'], city: 'Pattaya', intensity: 'low' },
    { id: 'alcazar-show', name: 'Alcazar cabaret show', description: 'A large scale costume and dance show, suitable for all ages.', detail: 'Around seventy performers across an hour of elaborately staged numbers. Completely family friendly despite the reputation of the town it is in. Photographs with the cast afterwards cost extra.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 2, tags: ['family', 'nightlife'], suits: ['family', 'couple', 'seniors'], city: 'Pattaya', intensity: 'low' },
    { id: 'underwater-world', name: 'Underwater World Pattaya', description: 'Walk through tunnel aquarium.', detail: 'A hundred metre acrylic tunnel with rays and reef sharks overhead, plus touch pools. About ninety minutes, entirely indoors, and a reliable rainy afternoon.', indicativePrice: null, childPrice: null, audience: 'kids', durationHours: 2, tags: ['family'], suits: ['family'], city: 'Pattaya', intensity: 'low' },
    { id: 'pattaya-floating-market', name: 'Pattaya Floating Market', description: 'Four zones of stalls and food on the water.', detail: 'Purpose built rather than historic, but far quieter than Damnoen Saduak and much closer. Paddle boats can be hired to move between the zones.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 3, tags: ['culture', 'shopping', 'food'], suits: ['family', 'seniors', 'couple'], city: 'Pattaya', intensity: 'low' },
    { id: 'walking-street', name: 'Walking Street evening', description: 'The main nightlife strip. Adults only.', detail: 'Closed to traffic from six in the evening and busiest after ten. Loud, crowded and not remotely subtle. We will say plainly whether it suits your group.', indicativePrice: null, childPrice: null, audience: 'adult', durationHours: 3, tags: ['nightlife'], suits: ['friends'], city: 'Pattaya', intensity: 'low' },
    { id: 'pattaya-speedboat-party', name: 'Private speedboat day for a group', description: 'Your own boat between the islands off Pattaya.', detail: 'Worth it from about six people. You set the route and the timing, stop where you like, and avoid the scheduled tour crowds entirely. Drinks and lunch can be loaded on board.', indicativePrice: null, childPrice: null, audience: 'adult', durationHours: 7, tags: ['nightlife', 'relaxed', 'adventure'], suits: ['friends'], city: 'Pattaya', intensity: 'moderate' },
    { id: 'elephant-sanctuary-cm', name: 'Ethical elephant sanctuary', description: 'Feeding and bathing at a no riding sanctuary.', detail: 'Half or full day at a rescue sanctuary in the hills outside the city. You feed, walk with and bathe the elephants, and nobody rides them. Take clothes you do not mind ruining.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 6, tags: ['family', 'culture'], suits: ['family', 'couple', 'solo', 'friends'], city: 'Chiang Mai', intensity: 'moderate' },
    { id: 'doi-suthep', name: 'Doi Suthep temple', description: 'The gold temple on the mountain above the city.', detail: 'Three hundred and six steps up a naga staircase, or a funicular if that is too much. The terrace looks back over the whole Chiang Mai valley and is best in the early morning haze.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 4, tags: ['culture', 'sightseeing'], suits: ['couple', 'family', 'seniors', 'solo'], city: 'Chiang Mai', intensity: 'moderate' },
    { id: 'chiang-mai-old-city', name: 'Old city temple walk', description: 'The walled old town on foot, at your own pace.', detail: 'Wat Chedi Luang, Wat Phra Singh and a dozen smaller temples inside a square kilometre still bounded by its moat. Flat, shaded and easily the most walkable historic centre in Thailand.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 3, tags: ['culture', 'sightseeing'], suits: ['couple', 'seniors', 'solo'], city: 'Chiang Mai', intensity: 'low' },
    { id: 'cooking-class-cm', name: 'Northern Thai cooking class', description: 'Khao soi and the northern dishes you do not get in Bangkok.', detail: 'Usually held on a small farm outside the city, starting with picking herbs before cooking five dishes. Northern food is milder and more herbal than central Thai and this is the place to learn it.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 5, tags: ['food', 'culture'], suits: ['couple', 'solo', 'friends'], city: 'Chiang Mai', intensity: 'low' },
    { id: 'sticky-waterfall', name: 'Bua Thong sticky waterfall', description: 'A limestone waterfall you can walk straight up.', detail: 'The mineral deposit gives the rock extraordinary grip, so you climb the falls barefoot against the current without slipping. Free to enter and about an hour out of the city.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 5, tags: ['adventure', 'family'], suits: ['family', 'friends', 'couple'], city: 'Chiang Mai', intensity: 'moderate' },
    { id: 'night-bazaar', name: 'Chiang Mai night bazaar', description: 'Handicrafts, hill tribe textiles and food stalls.', detail: 'Runs every evening along Chang Khlan Road, with a much better ratio of genuine craft to tourist tat than most Thai markets. The Sunday walking street inside the old city is better still if your dates allow.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 3, tags: ['shopping', 'food'], suits: ['couple', 'family', 'friends', 'solo'], city: 'Chiang Mai', intensity: 'low' },
    { id: 'doi-inthanon', name: 'Doi Inthanon national park', description: 'The highest point in Thailand, and genuinely cold.', detail: 'Twin royal pagodas, a cloud forest boardwalk and waterfalls, at around two and a half thousand metres. Take a jacket: it drops to single figures at the summit in December and January.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 10, tags: ['sightseeing', 'adventure'], suits: ['couple', 'friends', 'solo'], city: 'Chiang Mai', intensity: 'moderate' },
    { id: 'lantern-release', name: 'Lantern release evening', description: 'Available year round at organised venues.', detail: 'The mass release during Yi Peng in November is the famous one and sells out a year ahead. Outside that, several venues run smaller nightly releases which are far easier to arrange.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 3, tags: ['culture', 'relaxed'], suits: ['couple', 'family'], city: 'Chiang Mai', intensity: 'low', note: 'The large Yi Peng festival is November only' },
    { id: 'chiang-mai-spa', name: 'Half day spa in the hills', description: 'Herbal compress and a long massage, out of the city.', detail: 'Northern Thailand does spa treatment better and cheaper than the islands. Usually a herbal steam, a compress massage and a long oil session across three hours.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 4, tags: ['relaxed'], suits: ['couple', 'seniors', 'solo'], city: 'Chiang Mai', intensity: 'low' },
    { id: 'phi-phi', name: 'Phi Phi islands by speedboat', description: 'Maya Bay, Pileh Lagoon, snorkelling and lunch on board.', detail: 'A long day and the busiest trip in the south. Maya Bay now has restricted access and a timed entry, which we handle. Leaving earlier than the standard departure makes a real difference to the crowds.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 9, tags: ['adventure', 'sightseeing'], suits: ['couple', 'friends', 'family', 'solo'], city: 'Phuket', intensity: 'high' },
    { id: 'james-bond', name: 'James Bond Island sea canoe', description: 'Phang Nga Bay by longtail, canoeing through caves.', detail: 'Calmer and more scenic than Phi Phi. You are paddled through sea caves into hidden lagoons by a guide, rather than paddling yourself, and it works for all ages and swimming abilities.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 8, tags: ['adventure', 'sightseeing'], suits: ['family', 'couple', 'seniors', 'solo'], city: 'Phuket', intensity: 'moderate' },
    { id: 'fantasea', name: 'Phuket FantaSea show with dinner', description: 'A large theatrical culture show with a buffet.', detail: 'A three thousand seat theatre, a Thai legend told with acrobatics and pyrotechnics, and a very large buffet beforehand. Firmly aimed at families and it does the job well.', indicativePrice: null, childPrice: null, audience: 'kids', durationHours: 4, tags: ['family'], suits: ['family'], city: 'Phuket', intensity: 'low' },
    { id: 'old-town-phuket', name: 'Phuket Old Town walking tour', description: 'Sino Portuguese shophouses and street art.', detail: 'Pastel shophouses along Thalang and Dibuk Road, built on tin mining money, now full of cafes and galleries. Sunday evening is a walking street with food stalls the length of the road.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 3, tags: ['culture', 'food'], suits: ['couple', 'seniors', 'solo'], city: 'Phuket', intensity: 'low' },
    { id: 'big-buddha', name: 'Big Buddha and Karon viewpoint', description: 'The hilltop statue and the best view on the island.', detail: 'A forty five metre marble Buddha visible from most of southern Phuket, reached by a winding road. Karon viewpoint on the way down looks over three bays at once. Half a day by car.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 3, tags: ['sightseeing', 'culture'], suits: ['couple', 'family', 'seniors', 'solo'], city: 'Phuket', intensity: 'low' },
    { id: 'phuket-spa', name: 'Beachfront spa session', description: 'Oil massage and scrub at a resort spa.', detail: 'A step up from the shopfront parlours, in a proper treatment room with a shower. Two hours, usually a scrub followed by an oil massage, and worth booking for late afternoon.', indicativePrice: null, childPrice: null, audience: 'adult', durationHours: 2, tags: ['relaxed'], suits: ['couple', 'seniors', 'solo'], city: 'Phuket', intensity: 'low' },
    { id: 'surf-lesson', name: 'Beginner surf lesson at Kata', description: 'Two hours with a board and an instructor.', detail: 'Kata and Kata Noi get a consistent beginner swell from May to October, which is the low season for everything else. Boards, rash vests and a lifeguard are included.', indicativePrice: null, childPrice: null, audience: 'adult', durationHours: 2, tags: ['adventure'], suits: ['friends', 'solo', 'couple'], city: 'Phuket', intensity: 'high' },
    { id: 'patong-nightlife', name: 'Patong and Bangla Road evening', description: 'The main nightlife strip in Phuket. Adults only.', detail: 'Pedestrianised after six, wall to wall bars and clubs, and relentless. Fine for a group of friends, entirely wrong for a family, and we will say so.', indicativePrice: null, childPrice: null, audience: 'adult', durationHours: 3, tags: ['nightlife'], suits: ['friends'], city: 'Phuket', intensity: 'low' },
    { id: 'phuket-yacht', name: 'Private catamaran day charter', description: 'Your own boat around the Phang Nga islands.', detail: 'Skipper, crew and lunch included, usually eight hours out of Chalong or Ao Po. Makes sense from about eight people and transforms the day compared with a shared speedboat.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 8, tags: ['relaxed', 'adventure'], suits: ['friends', 'family', 'couple'], city: 'Phuket', intensity: 'moderate' },
    { id: 'phuket-cabaret', name: 'Simon Cabaret show', description: 'The long running Phuket cabaret, family friendly.', detail: 'Around ninety minutes of staged musical numbers with elaborate costumes, in an air conditioned theatre in Patong. Suitable for all ages despite the location.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 2, tags: ['family', 'nightlife'], suits: ['family', 'couple', 'friends'], city: 'Phuket', intensity: 'low' },
    { id: 'four-islands', name: 'Four Islands tour by longtail', description: 'Tup, Chicken, Poda and Phra Nang beaches, with lunch.', detail: 'At low tide a sandbar appears connecting Tup and Chicken islands and you can walk between them. Phra Nang has the famous cave shrine. The best beach day in the south.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 8, tags: ['sightseeing', 'adventure', 'relaxed'], suits: ['couple', 'family', 'friends', 'solo'], city: 'Krabi', intensity: 'moderate' },
    { id: 'railay-beach', name: 'Railay Beach day trip', description: 'Reachable only by boat, with cliffs on three sides.', detail: 'A peninsula cut off by limestone karsts, so a ten minute longtail from Ao Nang is the only way in. West Railay for the sand, East for the cheaper food, and a short scramble to a viewpoint lagoon.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 6, tags: ['relaxed', 'sightseeing'], suits: ['couple', 'friends', 'solo'], city: 'Krabi', intensity: 'moderate' },
    { id: 'emerald-pool', name: 'Emerald Pool and hot springs', description: 'Inland day to the spring fed pools and waterfalls.', detail: 'A clear green pool in the Khao Phra Bang Khram reserve, plus natural hot spring waterfalls nearby that sit at about forty degrees. A good choice on a day the sea is rough.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 7, tags: ['relaxed', 'adventure'], suits: ['family', 'couple', 'seniors'], city: 'Krabi', intensity: 'moderate' },
    { id: 'tiger-cave', name: 'Tiger Cave Temple climb', description: '1,260 steps to the summit. Genuinely demanding.', detail: 'A steep, uneven staircase up a limestone outcrop to a gold Buddha with a three hundred and sixty degree view. Start at dawn, take two litres of water, and do not attempt it with bad knees.', indicativePrice: null, childPrice: null, audience: 'adult', durationHours: 4, tags: ['adventure', 'culture'], suits: ['friends', 'solo'], city: 'Krabi', intensity: 'high' },
    { id: 'krabi-sunset-cruise', name: 'Sunset dinner cruise from Ao Nang', description: 'Four hours among the karsts with dinner on board.', detail: 'Leaves late afternoon, anchors for swimming and snorkelling, then serves dinner as the sun goes down behind the islands. The single most photogenic evening in Krabi.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 4, tags: ['relaxed', 'food'], suits: ['couple', 'family', 'seniors'], city: 'Krabi', intensity: 'low' },
    { id: 'krabi-kayak', name: 'Mangrove kayaking at Ao Thalane', description: 'Flat water paddling through mangrove channels.', detail: 'Two hours of easy kayaking between limestone cliffs and mangrove roots, with monkeys and kingfishers along the way. No experience needed and the water is always calm.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 4, tags: ['adventure', 'relaxed'], suits: ['couple', 'family', 'friends'], city: 'Krabi', intensity: 'moderate' },
    { id: 'krabi-cooking', name: 'Southern Thai cooking class', description: 'The hotter, coconut heavy food of the south.', detail: 'Southern Thai cooking is the spiciest in the country and leans on fresh turmeric and coconut. Small classes on a farm outside Ao Nang, including a market visit.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 5, tags: ['food', 'culture'], suits: ['couple', 'solo', 'friends'], city: 'Krabi', intensity: 'low' },
    { id: 'angthong', name: 'Ang Thong marine park day trip', description: 'Forty two islands, a hidden lagoon and a viewpoint climb.', detail: 'The archipelago that inspired The Beach. Includes kayaking, snorkelling and a steep climb to the Emerald Lake viewpoint, which is worth the effort. A full day by speedboat.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 9, tags: ['adventure', 'sightseeing'], suits: ['couple', 'friends', 'family'], city: 'Koh Samui', intensity: 'high' },
    { id: 'samui-big-buddha', name: 'Big Buddha and island temples', description: 'The twelve metre gold Buddha at Bang Rak.', detail: 'A half day circuit taking in Wat Phra Yai, the mummified monk at Wat Khunaram and the Na Muang waterfalls. Easy, mostly by car, and a good first day orientation.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 4, tags: ['culture', 'sightseeing'], suits: ['couple', 'family', 'seniors', 'solo'], city: 'Koh Samui', intensity: 'low' },
    { id: 'samui-spa', name: 'Beachfront spa half day', description: 'Long treatments with the sea a few metres away.', detail: 'Samui has the highest concentration of resort spas in Thailand. A typical half day runs a scrub, a wrap and a ninety minute massage, often in an open sided pavilion on the sand.', indicativePrice: null, childPrice: null, audience: 'adult', durationHours: 4, tags: ['relaxed'], suits: ['couple', 'seniors', 'solo'], city: 'Koh Samui', intensity: 'low' },
    { id: 'samui-snorkel', name: 'Koh Tao and Koh Nang Yuan snorkelling', description: 'The clearest water in the Gulf, an hour by boat.', detail: 'Koh Nang Yuan is three islets joined by a sandbar and the snorkelling straight off it is the best in the region. A long day out, and the boat crossing can be rough between October and December.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 9, tags: ['adventure', 'sightseeing'], suits: ['couple', 'friends', 'solo'], city: 'Koh Samui', intensity: 'high' },
    { id: 'samui-fisherman', name: 'Fisherman Village night market', description: 'Bophut old town on a Friday evening.', detail: 'A street of restored wooden Chinese shophouses that closes to traffic on Friday nights for a food and craft market. The most pleasant evening on the island and entirely free.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 3, tags: ['food', 'shopping', 'relaxed'], suits: ['couple', 'family', 'friends', 'seniors'], city: 'Koh Samui', intensity: 'low' },
    { id: 'samui-safari', name: 'Island 4x4 jungle safari', description: 'Viewpoints, waterfalls and the interior of the island.', detail: 'An open truck up unsurfaced roads into the hills, stopping at the Overlap Stone, a waterfall and a viewpoint most visitors never reach. Bumpy, and the fun is partly that.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 6, tags: ['adventure', 'sightseeing'], suits: ['friends', 'family', 'couple'], city: 'Koh Samui', intensity: 'high' },
    { id: 'samui-cooking', name: 'Island cooking class', description: 'Small group, usually in a garden kitchen.', detail: 'Four dishes with an emphasis on seafood and coconut, starting with a market trip. Smaller and more relaxed than the Bangkok classes.', indicativePrice: null, childPrice: null, audience: 'both', durationHours: 4, tags: ['food', 'culture'], suits: ['couple', 'solo', 'friends'], city: 'Koh Samui', intensity: 'low' },
    { id: 'samui-sunset-sail', name: 'Sunset catamaran sail', description: 'Three hours out of Bophut with dinner and drinks.', detail: 'A quiet, adult leaning evening on the water looking back at the island. Swimming stop on the way out, dinner served as the light goes. Popular for anniversaries.', indicativePrice: null, childPrice: null, audience: 'adult', durationHours: 4, tags: ['relaxed', 'food', 'nightlife'], suits: ['couple', 'friends'], city: 'Koh Samui', intensity: 'low' },
  ],
  included: [
    'Return international flights, ticketed on your dates',
    'Hotels or Airbnbs, on twin sharing',
    'Airport pickup and drop in a private vehicle',
    'All intercity transfers by flight, ferry or private car as the itinerary requires',
    'Return transfers for every activity in your plan',
    'Thailand Digital Arrival Card completed and submitted on your behalf',
    'Every activity you select, booked and confirmed before departure',
    'Basic travel insurance for the trip dates',
    'Support on WhatsApp for the duration of your trip',
  ],
  notIncluded: [
    'Meals other than breakfast, except where an activity includes one',
    'Personal expenses such as shopping, laundry, minibar and tips',
    'Activities added after arrival',
    'The 300 baht tourist fee, if and when Thailand begins collecting it',
    'Surcharges on peak dates such as Christmas, New Year and Songkran, confirmed before you pay',
    'Any increase in airfare between the estimate and ticketing, which we confirm with you first',
  ],
  // Numbers live in config/prices.ts. These are the words that go with them.
  pricingCopy: {
    flightNote: 'Return economy from a metro. Kolkata and Chennai are usually cheapest.',
    seasonNotes: {
      peak: 'Dry and warm with low humidity. The best weather and the highest rates.',
      shoulder: 'Hotter and still mostly dry. Songkran falls in April and is busy.',
      off: 'Monsoon season, usually short afternoon showers rather than continuous rain. Rates fall sharply.',
    },
  },
  brochure: '/brochures/thailand-guide.pdf',
  enabled: true,
};


const malaysia: DestinationSource = {
  slug: 'malaysia',
  name: 'Malaysia',
  country: 'Malaysia',
  visaTier: 'none',
  tagline: 'Visa free, cheap, and easy to combine with Singapore.',
  heroImage: '/images/places/malaysia.jpg',
  heroAlt: 'Malaysia',
  cardImage: '/images/places/malaysia.jpg',
  summary: 'Kuala Lumpur for the city and the food, Langkawi for the beaches. Indian food is everywhere and English is widely spoken, which makes it one of the easiest first trips out of India.',
  bestMonthsSummary: 'May to July and December to February are driest.',
  flightTimeSummary: '4h 30m from Chennai, 5h 30m from Mumbai',
  cities: ['Kuala Lumpur', 'Langkawi', 'Penang'],
  currency: { code: 'MYR', symbol: 'MYR', approxInrPerUnit: 19.5 },
  visa: {
    required: false,
    type: 'Visa free entry for Indian passport holders, up to 30 days',
    timeline: 'No visa. The digital arrival card must be filed at least 3 days before you fly.',
    feeInr: 0,
    documents: DEFAULT_VISA_DOCS,
    handledByUs: 'There is no visa to process. We still complete your arrival card and brief you on what immigration will ask.',
    caveat: 'Visa free entry is a policy governments change. We confirm the rule in force on your travel dates before you pay.',
  },
  costSamplesNote: 'Day to day costs are confirmed with your quote.',
  costSamples: [],
  tiers: [],
  activities: [
    { id: 'my-petronas', name: 'Petronas Towers skybridge', description: 'The bridge and observation deck, booked for a sunset slot.', detail: 'The bridge and observation deck, booked for a sunset slot.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 2, tags: ['sightseeing'], city: 'Kuala Lumpur', intensity: 'low' },
    { id: 'my-batu', name: 'Batu Caves', description: '272 painted steps to a cave temple. Go early before the heat.', detail: '272 painted steps to a cave temple. Go early before the heat.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 3, tags: ['culture', 'sightseeing'], city: 'Kuala Lumpur', intensity: 'moderate' },
    { id: 'my-kl-food', name: 'Jalan Alor street food walk', description: 'An evening eating through the city\'s best known food street.', detail: 'An evening eating through the city\'s best known food street.', suits: ['couple', 'friends', 'solo'], indicativePrice: null, audience: 'both', durationHours: 3, tags: ['food'], city: 'Kuala Lumpur', intensity: 'low' },
    { id: 'my-island-hop', name: 'Langkawi island hopping', description: 'Speedboat to Dayang Bunting and the eagle feeding point.', detail: 'Speedboat to Dayang Bunting and the eagle feeding point.', suits: ['couple', 'seniors', 'family', 'friends', 'solo'], indicativePrice: null, audience: 'both', durationHours: 5, tags: ['adventure', 'relaxed'], city: 'Langkawi', intensity: 'moderate' },
    { id: 'my-skycab', name: 'Langkawi SkyCab and sky bridge', description: 'Cable car to the ridge and a curved bridge over the rainforest.', detail: 'Cable car to the ridge and a curved bridge over the rainforest.', suits: ['family', 'couple', 'seniors', 'solo'], indicativePrice: null, audience: 'both', durationHours: 3, tags: ['sightseeing', 'family'], city: 'Langkawi', intensity: 'low' },
    { id: 'my-penang-heritage', name: 'Penang George Town walk', description: 'Street art, clan houses and the best food in the country.', detail: 'Street art, clan houses and the best food in the country.', suits: ['couple', 'seniors', 'solo', 'family', 'friends'], indicativePrice: null, audience: 'both', durationHours: 4, tags: ['culture', 'food'], city: 'Penang', intensity: 'low' },
  ],
  pricingCopy: {
    flightNote: 'Return economy from Chennai or Mumbai.',
    seasonNotes: {
      peak: 'Best weather, highest rates.',
      shoulder: 'Still good, noticeably cheaper.',
      off: 'Cheapest, with some weather trade off.',
    },
  },
  brochure: '',
  enabled: true,
  bookable: false,
};

const maldives: DestinationSource = {
  slug: 'maldives',
  name: 'Maldives',
  country: 'Maldives',
  visaTier: 'none',
  tagline: 'No visa, short flight, and the beaches everyone has seen.',
  heroImage: '/images/places/maldives.jpg',
  heroAlt: 'Maldives',
  cardImage: '/images/places/maldives.jpg',
  summary: 'A free 30 day permit on arrival. Resort islands are all inclusive and expensive; guesthouse islands like Maafushi cost a fraction and are where most Indian travellers actually stay.',
  bestMonthsSummary: 'November to April is dry season. May to October is cheaper and wetter.',
  flightTimeSummary: '1h 30m from Kochi, 3h from Mumbai',
  cities: ['Male', 'Maafushi', 'Resort island'],
  currency: { code: 'MVR', symbol: 'MVR', approxInrPerUnit: 5.6 },
  visa: {
    required: false,
    type: 'Free 30 day visa on arrival, with prepaid registered accommodation',
    timeline: 'Issued at the airport, no application needed.',
    feeInr: 0,
    documents: DEFAULT_VISA_DOCS,
    handledByUs: 'Nothing to apply for. We confirm your hotel booking and return ticket, which is all immigration asks to see.',
  },
  costSamplesNote: 'Day to day costs are confirmed with your quote.',
  costSamples: [],
  tiers: [],
  activities: [
    { id: 'mv-sandbank', name: 'Sandbank picnic', description: 'A boat to a strip of sand with nothing on it, for a few hours.', detail: 'A boat to a strip of sand with nothing on it, for a few hours.', suits: ['couple', 'seniors', 'family'], indicativePrice: null, audience: 'both', durationHours: 4, tags: ['relaxed'], city: 'Maafushi', intensity: 'low' },
    { id: 'mv-snorkel', name: 'Coral reef snorkelling trip', description: 'Guided snorkel over a house reef, gear included.', detail: 'Guided snorkel over a house reef, gear included.', suits: ['friends', 'solo', 'couple'], indicativePrice: null, audience: 'both', durationHours: 4, tags: ['adventure'], city: 'Maafushi', intensity: 'moderate' },
    { id: 'mv-dolphin', name: 'Sunset dolphin cruise', description: 'Spinner dolphins, most evenings, from a dhoni.', detail: 'Spinner dolphins, most evenings, from a dhoni.', suits: ['family', 'couple', 'seniors'], indicativePrice: null, audience: 'both', durationHours: 3, tags: ['relaxed', 'family'], city: 'Maafushi', intensity: 'low' },
    { id: 'mv-resort-day', name: 'Resort day pass', description: 'A day on a private resort island with lunch and pool access.', detail: 'A day on a private resort island with lunch and pool access.', suits: ['couple', 'seniors', 'family'], indicativePrice: null, audience: 'both', durationHours: 8, tags: ['relaxed'], city: 'Maafushi', intensity: 'low' },
    { id: 'mv-male-walk', name: 'Male city walk', description: 'The old Friday mosque, the fish market and the presidential palace.', detail: 'The old Friday mosque, the fish market and the presidential palace.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 3, tags: ['culture'], city: 'Male', intensity: 'low' },
    { id: 'mv-seaplane', name: 'Seaplane transfer', description: 'Worth doing once for the view alone, if your island needs one.', detail: 'Worth doing once for the view alone, if your island needs one.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 1, tags: ['sightseeing'], city: 'Resort island', intensity: 'low' },
  ],
  pricingCopy: {
    flightNote: 'Return economy from Kochi, Bengaluru or Mumbai.',
    seasonNotes: {
      peak: 'Best weather, highest rates.',
      shoulder: 'Still good, noticeably cheaper.',
      off: 'Cheapest, with some weather trade off.',
    },
  },
  brochure: '',
  enabled: true,
  bookable: false,
};

const nepal: DestinationSource = {
  slug: 'nepal',
  name: 'Nepal',
  country: 'Nepal',
  visaTier: 'none',
  tagline: 'No visa at all, and the cheapest mountains you will ever see.',
  heroImage: '/images/places/nepal.jpg',
  heroAlt: 'Nepal',
  cardImage: '/images/places/nepal.jpg',
  summary: 'Indian passport holders need no visa and can even travel on a voter ID. Kathmandu for temples, Pokhara for the lakes and paragliding, and treks that start from a bus stop.',
  bestMonthsSummary: 'October to November and March to April are clearest.',
  flightTimeSummary: '1h 45m from Delhi, 1h from Varanasi',
  cities: ['Kathmandu', 'Pokhara', 'Chitwan'],
  currency: { code: 'NPR', symbol: 'NPR', approxInrPerUnit: 0.63 },
  visa: {
    required: false,
    type: 'No visa required for Indian passport holders',
    timeline: 'Nothing at all. A passport or voter ID is enough.',
    feeInr: 0,
    documents: DEFAULT_VISA_DOCS,
    handledByUs: 'No visa, no arrival card, no fee. We brief you on which identity document to carry.',
  },
  costSamplesNote: 'Day to day costs are confirmed with your quote.',
  costSamples: [],
  tiers: [],
  activities: [
    { id: 'np-kathmandu-durbar', name: 'Kathmandu Durbar Square and Swayambhu', description: 'The old royal square and the monkey temple above the valley.', detail: 'The old royal square and the monkey temple above the valley.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 5, tags: ['culture', 'sightseeing'], city: 'Kathmandu', intensity: 'moderate' },
    { id: 'np-pashupatinath', name: 'Pashupatinath and Boudhanath', description: 'The riverside temple complex and the largest stupa in Nepal.', detail: 'The riverside temple complex and the largest stupa in Nepal.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 4, tags: ['culture'], city: 'Kathmandu', intensity: 'low' },
    { id: 'np-paragliding', name: 'Paragliding over Pokhara', description: 'Twenty to thirty minutes off Sarangkot with the lake below.', detail: 'Twenty to thirty minutes off Sarangkot with the lake below.', suits: ['friends', 'solo', 'couple'], indicativePrice: null, audience: 'adult', durationHours: 3, tags: ['adventure'], city: 'Pokhara', intensity: 'high' },
    { id: 'np-phewa', name: 'Phewa Lake and Peace Pagoda', description: 'A rowboat across and a short climb to the white stupa.', detail: 'A rowboat across and a short climb to the white stupa.', suits: ['couple', 'seniors', 'family', 'solo'], indicativePrice: null, audience: 'both', durationHours: 4, tags: ['relaxed', 'sightseeing'], city: 'Pokhara', intensity: 'moderate' },
    { id: 'np-sarangkot', name: 'Sarangkot sunrise', description: 'Annapurna turning gold. A very early start.', detail: 'Annapurna turning gold. A very early start.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 4, tags: ['sightseeing'], city: 'Pokhara', intensity: 'moderate' },
    { id: 'np-chitwan', name: 'Chitwan jeep safari', description: 'Rhino, deer and if you are lucky a sloth bear.', detail: 'Rhino, deer and if you are lucky a sloth bear.', suits: ['family', 'friends', 'solo', 'couple'], indicativePrice: null, audience: 'both', durationHours: 5, tags: ['adventure', 'family'], city: 'Chitwan', intensity: 'moderate' },
  ],
  pricingCopy: {
    flightNote: 'Return economy from Delhi, Varanasi or Kolkata.',
    seasonNotes: {
      peak: 'Best weather, highest rates.',
      shoulder: 'Still good, noticeably cheaper.',
      off: 'Cheapest, with some weather trade off.',
    },
  },
  brochure: '',
  enabled: true,
  bookable: false,
};

const mauritius: DestinationSource = {
  slug: 'mauritius',
  name: 'Mauritius',
  country: 'Mauritius',
  visaTier: 'none',
  tagline: 'Free entry, and a beach island that is not the Maldives.',
  heroImage: '/images/places/mauritius.jpg',
  heroAlt: 'Mauritius',
  cardImage: '/images/places/mauritius.jpg',
  summary: 'Sixty days free on arrival. Beaches, a volcanic interior and a large Indian origin population, so the food and the language are familiar.',
  bestMonthsSummary: 'May to December is drier and cooler.',
  flightTimeSummary: '6h from Mumbai, 6h 30m from Delhi',
  cities: ['Port Louis', 'Flic en Flac', 'Grand Baie'],
  currency: { code: 'MUR', symbol: 'MUR', approxInrPerUnit: 1.9 },
  visa: {
    required: false,
    type: 'Free 90 day entry permit on arrival',
    timeline: 'Issued at the airport.',
    feeInr: 0,
    documents: DEFAULT_VISA_DOCS,
    handledByUs: 'Nothing to apply for. We provide the confirmed hotel booking and return ticket that immigration asks for.',
  },
  costSamplesNote: 'Day to day costs are confirmed with your quote.',
  costSamples: [],
  tiers: [],
  activities: [
    { id: 'mu-catamaran', name: 'Catamaran to Ile aux Cerfs', description: 'A day sailing to the island with lunch on board.', detail: 'A day sailing to the island with lunch on board.', suits: ['couple', 'seniors', 'family', 'friends', 'solo'], indicativePrice: null, audience: 'both', durationHours: 8, tags: ['relaxed', 'adventure'], city: 'Flic en Flac', intensity: 'moderate' },
    { id: 'mu-chamarel', name: 'Chamarel coloured earth and waterfall', description: 'Seven colours of volcanic sand and the tallest waterfall on the island.', detail: 'Seven colours of volcanic sand and the tallest waterfall on the island.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 5, tags: ['sightseeing'], city: 'Port Louis', intensity: 'low' },
    { id: 'mu-dolphin-swim', name: 'Swimming with dolphins', description: 'Early boat out to the west coast pods.', detail: 'Early boat out to the west coast pods.', suits: ['friends', 'solo', 'couple'], indicativePrice: null, audience: 'both', durationHours: 4, tags: ['adventure'], city: 'Flic en Flac', intensity: 'moderate' },
    { id: 'mu-port-louis', name: 'Port Louis market and waterfront', description: 'The central market, the Aapravasi Ghat and the Caudan waterfront.', detail: 'The central market, the Aapravasi Ghat and the Caudan waterfront.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 4, tags: ['culture', 'shopping'], city: 'Port Louis', intensity: 'low' },
    { id: 'mu-underwater', name: 'Undersea walk', description: 'A helmet walk on the seabed. No swimming needed.', detail: 'A helmet walk on the seabed. No swimming needed.', suits: ['family', 'friends', 'solo', 'couple'], indicativePrice: null, audience: 'both', durationHours: 3, tags: ['adventure', 'family'], city: 'Grand Baie', intensity: 'moderate' },
    { id: 'mu-botanical', name: 'Pamplemousses botanical garden', description: 'Giant water lilies and a very old banyan.', detail: 'Giant water lilies and a very old banyan.', suits: ['couple', 'seniors', 'family'], indicativePrice: null, audience: 'both', durationHours: 3, tags: ['relaxed'], city: 'Grand Baie', intensity: 'low' },
  ],
  pricingCopy: {
    flightNote: 'Return economy from Mumbai or Delhi.',
    seasonNotes: {
      peak: 'Best weather, highest rates.',
      shoulder: 'Still good, noticeably cheaper.',
      off: 'Cheapest, with some weather trade off.',
    },
  },
  brochure: '',
  enabled: true,
  bookable: false,
};

const vietnam: DestinationSource = {
  slug: 'vietnam',
  name: 'Vietnam',
  country: 'Vietnam',
  visaTier: 'evisa',
  tagline: 'Cheap, fast growing, and an e-visa that is approved in days.',
  heroImage: '/images/places/vietnam.jpg',
  heroAlt: 'Vietnam',
  cardImage: '/images/places/vietnam.jpg',
  summary: 'The best value in South East Asia right now. Hanoi and Ha Long in the north, Da Nang and Hoi An in the middle, Ho Chi Minh in the south. Street food is the reason to go.',
  bestMonthsSummary: 'February to April and August to October avoid both extremes.',
  flightTimeSummary: '5h from Kolkata, 5h 30m from Delhi',
  cities: ['Hanoi', 'Ha Long', 'Da Nang', 'Ho Chi Minh City'],
  currency: { code: 'VND', symbol: 'VND', approxInrPerUnit: 0.0033 },
  visa: {
    required: true,
    type: 'Vietnam e-visa, 90 days, single or multiple entry',
    timeline: '3 to 7 working days once we have your documents',
    feeInr: 2200,
    documents: DEFAULT_VISA_DOCS,
    handledByUs: 'You send your documents on WhatsApp. We complete the application, pay the fee and send the approved e-visa as a PDF.',
  },
  costSamplesNote: 'Day to day costs are confirmed with your quote.',
  costSamples: [],
  tiers: [],
  activities: [
    { id: 'vn-halong', name: 'Ha Long Bay overnight cruise', description: 'A night on a junk among the limestone islands, with kayaking.', detail: 'A night on a junk among the limestone islands, with kayaking.', suits: ['friends', 'solo', 'couple', 'seniors', 'family'], indicativePrice: null, audience: 'both', durationHours: 24, tags: ['sightseeing', 'adventure'], city: 'Ha Long', intensity: 'moderate' },
    { id: 'vn-hanoi-street', name: 'Hanoi old quarter food walk', description: 'An evening through the old quarter eating standing up.', detail: 'An evening through the old quarter eating standing up.', suits: ['couple', 'seniors', 'solo', 'family', 'friends'], indicativePrice: null, audience: 'both', durationHours: 3, tags: ['food', 'culture'], city: 'Hanoi', intensity: 'low' },
    { id: 'vn-cuchi', name: 'Cu Chi tunnels', description: 'The tunnel network outside Ho Chi Minh City. Not for the claustrophobic.', detail: 'The tunnel network outside Ho Chi Minh City. Not for the claustrophobic.', suits: ['friends', 'solo', 'couple', 'seniors', 'family'], indicativePrice: null, audience: 'both', durationHours: 5, tags: ['culture', 'adventure'], city: 'Ho Chi Minh City', intensity: 'moderate' },
    { id: 'vn-mekong', name: 'Mekong Delta day trip', description: 'Sampan through the canals, a floating market and a fruit orchard.', detail: 'Sampan through the canals, a floating market and a fruit orchard.', suits: ['couple', 'seniors', 'family', 'solo'], indicativePrice: null, audience: 'both', durationHours: 9, tags: ['culture', 'relaxed'], city: 'Ho Chi Minh City', intensity: 'moderate' },
    { id: 'vn-hoian', name: 'Hoi An old town and lantern evening', description: 'A preserved trading port, best after dark when the lanterns are lit.', detail: 'A preserved trading port, best after dark when the lanterns are lit.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 4, tags: ['culture', 'sightseeing'], city: 'Da Nang', intensity: 'low' },
    { id: 'vn-bana', name: 'Ba Na Hills and the Golden Bridge', description: 'Cable car to the hill station and the hands holding the bridge.', detail: 'Cable car to the hill station and the hands holding the bridge.', suits: ['family', 'couple', 'seniors', 'solo'], indicativePrice: null, audience: 'both', durationHours: 8, tags: ['sightseeing', 'family'], city: 'Da Nang', intensity: 'moderate' },
  ],
  pricingCopy: {
    flightNote: 'Return economy from Kolkata, Delhi or Mumbai.',
    seasonNotes: {
      peak: 'Best weather, highest rates.',
      shoulder: 'Still good, noticeably cheaper.',
      off: 'Cheapest, with some weather trade off.',
    },
  },
  brochure: '',
  enabled: true,
  bookable: false,
};

const sri_lanka: DestinationSource = {
  slug: 'sri-lanka',
  name: 'Sri Lanka',
  country: 'Sri Lanka',
  visaTier: 'evisa',
  tagline: 'Under four hours, and a full country in a week.',
  heroImage: '/images/places/sri-lanka.jpg',
  heroAlt: 'Sri Lanka',
  cardImage: '/images/places/sri-lanka.jpg',
  summary: 'Beaches, hill country tea estates, ancient cities and safari, all within short drives. The ETA is applied for online and approved almost immediately.',
  bestMonthsSummary: 'December to March for the west and south coasts.',
  flightTimeSummary: '1h 30m from Chennai, 3h from Mumbai',
  cities: ['Colombo', 'Kandy', 'Ella', 'Galle'],
  currency: { code: 'LKR', symbol: 'LKR', approxInrPerUnit: 0.28 },
  visa: {
    required: true,
    type: 'Sri Lanka ETA, 30 days, double entry. Free for Indian passport holders',
    timeline: 'Usually approved within 24 to 48 hours',
    feeInr: 0,
    documents: DEFAULT_VISA_DOCS,
    handledByUs: 'Applied for online. We complete it and send the approval, which you carry printed or on your phone.',
  },
  costSamplesNote: 'Day to day costs are confirmed with your quote.',
  costSamples: [],
  tiers: [],
  activities: [
    { id: 'lk-sigiriya', name: 'Sigiriya rock fortress', description: '1,200 steps to a palace on top of a rock. Start at dawn.', detail: '1,200 steps to a palace on top of a rock. Start at dawn.', suits: ['friends', 'solo', 'couple', 'seniors', 'family'], indicativePrice: null, audience: 'both', durationHours: 5, tags: ['adventure', 'culture'], city: 'Kandy', intensity: 'high' },
    { id: 'lk-tooth', name: 'Temple of the Tooth, Kandy', description: 'The most important Buddhist site in the country, at evening puja.', detail: 'The most important Buddhist site in the country, at evening puja.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 3, tags: ['culture'], city: 'Kandy', intensity: 'low' },
    { id: 'lk-train', name: 'Kandy to Ella train', description: 'Seven hours through tea country. The best train ride in Asia.', detail: 'Seven hours through tea country. The best train ride in Asia.', suits: ['couple', 'seniors', 'family', 'solo'], indicativePrice: null, audience: 'both', durationHours: 7, tags: ['sightseeing', 'relaxed'], city: 'Ella', intensity: 'low' },
    { id: 'lk-tea', name: 'Tea plantation and factory tour', description: 'How the leaf becomes the cup, with a tasting.', detail: 'How the leaf becomes the cup, with a tasting.', suits: ['couple', 'seniors', 'solo', 'family', 'friends'], indicativePrice: null, audience: 'both', durationHours: 3, tags: ['culture', 'food'], city: 'Ella', intensity: 'low' },
    { id: 'lk-yala', name: 'Yala safari', description: 'The best chance of a leopard anywhere in the world.', detail: 'The best chance of a leopard anywhere in the world.', suits: ['family', 'friends', 'solo', 'couple'], indicativePrice: null, audience: 'both', durationHours: 6, tags: ['adventure', 'family'], city: 'Galle', intensity: 'moderate' },
    { id: 'lk-galle', name: 'Galle Fort walk', description: 'A Dutch walled town on the sea, best in the late afternoon.', detail: 'A Dutch walled town on the sea, best in the late afternoon.', suits: ['couple', 'seniors', 'family', 'solo'], indicativePrice: null, audience: 'both', durationHours: 3, tags: ['culture', 'relaxed'], city: 'Galle', intensity: 'low' },
  ],
  pricingCopy: {
    flightNote: 'Return economy from Chennai, Mumbai or Delhi.',
    seasonNotes: {
      peak: 'Best weather, highest rates.',
      shoulder: 'Still good, noticeably cheaper.',
      off: 'Cheapest, with some weather trade off.',
    },
  },
  brochure: '',
  enabled: true,
  bookable: false,
};

const bali: DestinationSource = {
  slug: 'bali',
  name: 'Bali',
  country: 'Indonesia',
  visaTier: 'evisa',
  tagline: 'Visa on arrival, villas for the price of a hotel room.',
  heroImage: '/images/places/bali.jpg',
  heroAlt: 'Bali',
  cardImage: '/images/places/bali.jpg',
  summary: 'Ubud for rice terraces and temples, Seminyak and Canggu for beach clubs, Nusa Penida for the cliffs. A private villa with a pool costs less than a mid range hotel in Dubai.',
  bestMonthsSummary: 'April to October is dry season.',
  flightTimeSummary: '5h 30m from Chennai, 7h from Delhi',
  cities: ['Ubud', 'Seminyak', 'Nusa Penida'],
  currency: { code: 'IDR', symbol: 'IDR', approxInrPerUnit: 0.0052 },
  visa: {
    required: true,
    type: 'Indonesia visa on arrival, 30 days, extendable once by 30 more',
    timeline: 'e-VOA approved in 24 to 72 hours, or issued at the airport',
    feeInr: 2700,
    documents: DEFAULT_VISA_DOCS,
    handledByUs: 'We apply for the e-VOA before departure so you skip the airport queue, and send you the QR code to scan on arrival.',
  },
  costSamplesNote: 'Day to day costs are confirmed with your quote.',
  costSamples: [],
  tiers: [],
  activities: [
    { id: 'id-ubud-terraces', name: 'Tegallalang rice terraces and swing', description: 'The terraces, and the swing if you want the photograph.', detail: 'The terraces, and the swing if you want the photograph.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 4, tags: ['sightseeing'], city: 'Ubud', intensity: 'low' },
    { id: 'id-monkey-temple', name: 'Sacred Monkey Forest and Ubud palace', description: 'Temple complex in a forest full of macaques.', detail: 'Temple complex in a forest full of macaques.', suits: ['family', 'couple', 'seniors', 'solo'], indicativePrice: null, audience: 'both', durationHours: 3, tags: ['culture', 'family'], city: 'Ubud', intensity: 'low' },
    { id: 'id-nusa-penida', name: 'Nusa Penida day trip', description: 'Fast boat across for Kelingking cliff and Angel\'s Billabong.', detail: 'Fast boat across for Kelingking cliff and Angel\'s Billabong.', suits: ['friends', 'solo', 'couple', 'seniors', 'family'], indicativePrice: null, audience: 'both', durationHours: 10, tags: ['adventure', 'sightseeing'], city: 'Nusa Penida', intensity: 'high' },
    { id: 'id-beach-club', name: 'Beach club day in Canggu', description: 'A daybed, a pool and the sunset. Minimum spend applies.', detail: 'A daybed, a pool and the sunset. Minimum spend applies.', suits: ['friends', 'couple', 'seniors'], indicativePrice: null, audience: 'adult', durationHours: 6, tags: ['nightlife', 'relaxed'], city: 'Seminyak', intensity: 'low' },
    { id: 'id-waterfalls', name: 'Tegenungan and Tibumana waterfalls', description: 'Two swimmable waterfalls in one morning.', detail: 'Two swimmable waterfalls in one morning.', suits: ['couple', 'seniors', 'family', 'friends', 'solo'], indicativePrice: null, audience: 'both', durationHours: 5, tags: ['adventure', 'relaxed'], city: 'Ubud', intensity: 'moderate' },
    { id: 'id-cooking', name: 'Balinese cooking class', description: 'A market visit, then cook and eat five dishes.', detail: 'A market visit, then cook and eat five dishes.', suits: ['couple', 'seniors', 'solo', 'family', 'friends'], indicativePrice: null, audience: 'both', durationHours: 5, tags: ['food', 'culture'], city: 'Ubud', intensity: 'low' },
  ],
  pricingCopy: {
    flightNote: 'Return economy from Chennai, Mumbai or Delhi.',
    seasonNotes: {
      peak: 'Best weather, highest rates.',
      shoulder: 'Still good, noticeably cheaper.',
      off: 'Cheapest, with some weather trade off.',
    },
  },
  brochure: '',
  enabled: true,
  bookable: false,
};

const azerbaijan: DestinationSource = {
  slug: 'azerbaijan',
  name: 'Azerbaijan',
  country: 'Azerbaijan',
  visaTier: 'evisa',
  tagline: 'Three hours from Delhi, and nothing like anywhere else nearby.',
  heroImage: '/images/places/azerbaijan.jpg',
  heroAlt: 'Azerbaijan',
  cardImage: '/images/places/azerbaijan.jpg',
  summary: 'Baku is a Caspian seafront city with medieval walls and modern architecture side by side. Outside it there are mud volcanoes, fire temples and mountain villages.',
  bestMonthsSummary: 'April to June and September to October are mildest.',
  flightTimeSummary: '3h 30m from Delhi, 5h from Mumbai',
  cities: ['Baku', 'Gabala', 'Quba'],
  currency: { code: 'AZN', symbol: 'AZN', approxInrPerUnit: 48.0 },
  visa: {
    required: true,
    type: 'ASAN e-visa, 30 days, single entry',
    timeline: '3 working days, or 3 hours on the urgent option',
    feeInr: 2800,
    documents: DEFAULT_VISA_DOCS,
    handledByUs: 'Applied for entirely online. We complete it, pay the fee and send the approved visa.',
  },
  costSamplesNote: 'Day to day costs are confirmed with your quote.',
  costSamples: [],
  tiers: [],
  activities: [
    { id: 'az-old-city', name: 'Baku old city and Maiden Tower', description: 'The walled city, the palace of the Shirvanshahs and the tower.', detail: 'The walled city, the palace of the Shirvanshahs and the tower.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 4, tags: ['culture', 'sightseeing'], city: 'Baku', intensity: 'low' },
    { id: 'az-mud-volcano', name: 'Mud volcanoes and Gobustan', description: 'Petroglyphs and bubbling grey mud, an hour out of the city.', detail: 'Petroglyphs and bubbling grey mud, an hour out of the city.', suits: ['friends', 'solo', 'couple', 'seniors', 'family'], indicativePrice: null, audience: 'both', durationHours: 6, tags: ['sightseeing', 'adventure'], city: 'Baku', intensity: 'moderate' },
    { id: 'az-fire', name: 'Ateshgah fire temple and Yanar Dag', description: 'A temple built over a natural gas vent, and a hillside that burns.', detail: 'A temple built over a natural gas vent, and a hillside that burns.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 4, tags: ['culture'], city: 'Baku', intensity: 'low' },
    { id: 'az-gabala', name: 'Gabala cable car and Tufandag', description: 'Up into the Caucasus, snow at the top most of the year.', detail: 'Up into the Caucasus, snow at the top most of the year.', suits: ['friends', 'solo', 'couple', 'seniors', 'family'], indicativePrice: null, audience: 'both', durationHours: 7, tags: ['sightseeing', 'adventure'], city: 'Gabala', intensity: 'moderate' },
    { id: 'az-quba', name: 'Quba and Khinalug village', description: 'A mountain village at 2,300 metres, reached on a hard road.', detail: 'A mountain village at 2,300 metres, reached on a hard road.', suits: ['friends', 'solo', 'couple', 'seniors', 'family'], indicativePrice: null, audience: 'both', durationHours: 9, tags: ['adventure', 'culture'], city: 'Quba', intensity: 'high' },
    { id: 'az-boulevard', name: 'Baku boulevard and Flame Towers by night', description: 'The seafront promenade when the towers are lit.', detail: 'The seafront promenade when the towers are lit.', suits: ['couple', 'seniors', 'family', 'solo'], indicativePrice: null, audience: 'both', durationHours: 2, tags: ['relaxed', 'sightseeing'], city: 'Baku', intensity: 'low' },
  ],
  pricingCopy: {
    flightNote: 'Return economy from Delhi or Mumbai.',
    seasonNotes: {
      peak: 'Best weather, highest rates.',
      shoulder: 'Still good, noticeably cheaper.',
      off: 'Cheapest, with some weather trade off.',
    },
  },
  brochure: '',
  enabled: true,
  bookable: false,
};

const georgia: DestinationSource = {
  slug: 'georgia',
  name: 'Georgia',
  country: 'Georgia',
  visaTier: 'evisa',
  tagline: 'Mountains, wine and a currency that favours the rupee.',
  heroImage: '/images/places/georgia.jpg',
  heroAlt: 'Georgia',
  cardImage: '/images/places/georgia.jpg',
  summary: 'Tbilisi is compact and walkable, Kazbegi has the mountains, and Kakheti is where the wine comes from. Costs are low and the scenery is disproportionate to the flight time.',
  bestMonthsSummary: 'May to June and September to October.',
  flightTimeSummary: '5h from Delhi via a hub',
  cities: ['Tbilisi', 'Kazbegi', 'Batumi'],
  currency: { code: 'GEL', symbol: 'GEL', approxInrPerUnit: 31.0 },
  visa: {
    required: true,
    type: 'Georgia e-visa, 30 days',
    timeline: '5 to 10 working days',
    feeInr: 2600,
    documents: DEFAULT_VISA_DOCS,
    handledByUs: 'Applied for online. Holders of a valid US, UK or Schengen visa may enter without one, and we will tell you if that applies to you.',
  },
  costSamplesNote: 'Day to day costs are confirmed with your quote.',
  costSamples: [],
  tiers: [],
  activities: [
    { id: 'ge-old-tbilisi', name: 'Old Tbilisi and the sulphur baths', description: 'The old town on foot, then a private bath house room.', detail: 'The old town on foot, then a private bath house room.', suits: ['couple', 'seniors', 'family', 'solo'], indicativePrice: null, audience: 'both', durationHours: 4, tags: ['culture', 'relaxed'], city: 'Tbilisi', intensity: 'low' },
    { id: 'ge-kazbegi', name: 'Kazbegi and Gergeti Trinity church', description: 'A church on a ridge under a 5,000 metre peak. Long drive, worth it.', detail: 'A church on a ridge under a 5,000 metre peak. Long drive, worth it.', suits: ['friends', 'solo', 'couple', 'seniors', 'family'], indicativePrice: null, audience: 'both', durationHours: 11, tags: ['sightseeing', 'adventure'], city: 'Kazbegi', intensity: 'moderate' },
    { id: 'ge-wine', name: 'Kakheti wine day', description: 'Three cellars, a qvevri tasting and a long lunch.', detail: 'Three cellars, a qvevri tasting and a long lunch.', suits: ['couple', 'seniors', 'solo', 'friends'], indicativePrice: null, audience: 'adult', durationHours: 9, tags: ['food', 'culture'], city: 'Tbilisi', intensity: 'low' },
    { id: 'ge-mtskheta', name: 'Mtskheta and Jvari monastery', description: 'The old capital, half an hour from Tbilisi.', detail: 'The old capital, half an hour from Tbilisi.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 4, tags: ['culture'], city: 'Tbilisi', intensity: 'low' },
    { id: 'ge-batumi', name: 'Batumi seafront and botanical garden', description: 'The Black Sea coast, the boulevard and the garden above it.', detail: 'The Black Sea coast, the boulevard and the garden above it.', suits: ['couple', 'seniors', 'family', 'solo'], indicativePrice: null, audience: 'both', durationHours: 6, tags: ['relaxed', 'sightseeing'], city: 'Batumi', intensity: 'low' },
    { id: 'ge-paragliding', name: 'Paragliding over Gudauri', description: 'Off the ridge above the ski resort, summer or winter.', detail: 'Off the ridge above the ski resort, summer or winter.', suits: ['friends', 'solo', 'couple'], indicativePrice: null, audience: 'adult', durationHours: 3, tags: ['adventure'], city: 'Kazbegi', intensity: 'high' },
  ],
  pricingCopy: {
    flightNote: 'Usually one stop from Delhi or Mumbai.',
    seasonNotes: {
      peak: 'Best weather, highest rates.',
      shoulder: 'Still good, noticeably cheaper.',
      off: 'Cheapest, with some weather trade off.',
    },
  },
  brochure: '',
  enabled: true,
  bookable: false,
};

const uzbekistan: DestinationSource = {
  slug: 'uzbekistan',
  name: 'Uzbekistan',
  country: 'Uzbekistan',
  visaTier: 'evisa',
  tagline: 'Silk Road cities, and an e-visa that takes two days.',
  heroImage: '/images/places/uzbekistan.jpg',
  heroAlt: 'Uzbekistan',
  cardImage: '/images/places/uzbekistan.jpg',
  summary: 'Samarkand, Bukhara and Khiva are among the best preserved Islamic architecture anywhere. Direct flights from Delhi and Mumbai, and prices well below Turkey.',
  bestMonthsSummary: 'April to May and September to October.',
  flightTimeSummary: '3h from Delhi',
  cities: ['Tashkent', 'Samarkand', 'Bukhara'],
  currency: { code: 'UZS', symbol: 'UZS', approxInrPerUnit: 0.0067 },
  visa: {
    required: true,
    type: 'Uzbekistan e-visa, 30 days, single entry',
    timeline: '2 to 3 working days',
    feeInr: 2200,
    documents: DEFAULT_VISA_DOCS,
    handledByUs: 'Applied for online. We complete the form, pay the fee and send the approved visa.',
  },
  costSamplesNote: 'Day to day costs are confirmed with your quote.',
  costSamples: [],
  tiers: [],
  activities: [
    { id: 'uz-registan', name: 'Registan square, Samarkand', description: 'Three madrasas facing a single square. Best at night, lit.', detail: 'Three madrasas facing a single square. Best at night, lit.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 3, tags: ['culture', 'sightseeing'], city: 'Samarkand', intensity: 'low' },
    { id: 'uz-shah-zinda', name: 'Shah-i-Zinda necropolis', description: 'A corridor of tiled tombs. The best tilework in Central Asia.', detail: 'A corridor of tiled tombs. The best tilework in Central Asia.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 2, tags: ['culture'], city: 'Samarkand', intensity: 'low' },
    { id: 'uz-bukhara-old', name: 'Bukhara old town walk', description: 'Poi Kalyan, the ark and the trading domes, all walkable.', detail: 'Poi Kalyan, the ark and the trading domes, all walkable.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 5, tags: ['culture', 'sightseeing'], city: 'Bukhara', intensity: 'moderate' },
    { id: 'uz-plov', name: 'Tashkent plov centre and bazaar', description: 'Where the city eats plov, plus the Chorsu bazaar.', detail: 'Where the city eats plov, plus the Chorsu bazaar.', suits: ['couple', 'seniors', 'solo', 'family', 'friends'], indicativePrice: null, audience: 'both', durationHours: 3, tags: ['food', 'culture'], city: 'Tashkent', intensity: 'low' },
    { id: 'uz-metro', name: 'Tashkent metro station tour', description: 'Soviet era stations built like ballrooms. Photography now allowed.', detail: 'Soviet era stations built like ballrooms. Photography now allowed.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 2, tags: ['culture', 'sightseeing'], city: 'Tashkent', intensity: 'low' },
    { id: 'uz-silk', name: 'Silk and paper workshop, Samarkand', description: 'How the paper and the ikat are still made by hand.', detail: 'How the paper and the ikat are still made by hand.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 2, tags: ['culture', 'shopping'], city: 'Samarkand', intensity: 'low' },
  ],
  pricingCopy: {
    flightNote: 'Direct from Delhi, one stop from Mumbai.',
    seasonNotes: {
      peak: 'Best weather, highest rates.',
      shoulder: 'Still good, noticeably cheaper.',
      off: 'Cheapest, with some weather trade off.',
    },
  },
  brochure: '',
  enabled: true,
  bookable: false,
};

const egypt: DestinationSource = {
  slug: 'egypt',
  name: 'Egypt',
  country: 'Egypt',
  visaTier: 'evisa',
  tagline: 'The pyramids, the Nile, and a visa applied for online.',
  heroImage: '/images/places/egypt.jpg',
  heroAlt: 'Egypt',
  cardImage: '/images/places/egypt.jpg',
  summary: 'Cairo for the pyramids and the museum, Luxor and Aswan for the temples, and a Nile cruise between them. Hurghada adds the Red Sea if you want beach time.',
  bestMonthsSummary: 'October to April. Summer inland is extreme.',
  flightTimeSummary: '5h 30m from Mumbai, 6h from Delhi',
  cities: ['Cairo', 'Luxor', 'Aswan', 'Hurghada'],
  currency: { code: 'EGP', symbol: 'EGP', approxInrPerUnit: 1.7 },
  visa: {
    required: true,
    type: 'Egypt e-visa, 30 days, single entry',
    timeline: '5 to 7 working days',
    feeInr: 2600,
    documents: DEFAULT_VISA_DOCS,
    handledByUs: 'Applied for online. We complete it and send the approval. A visa on arrival also exists but the queue is long.',
  },
  costSamplesNote: 'Day to day costs are confirmed with your quote.',
  costSamples: [],
  tiers: [],
  activities: [
    { id: 'eg-pyramids', name: 'Giza pyramids and Sphinx', description: 'The plateau with a guide, and a camel if you want one.', detail: 'The plateau with a guide, and a camel if you want one.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 5, tags: ['sightseeing', 'culture'], city: 'Cairo', intensity: 'moderate' },
    { id: 'eg-museum', name: 'Grand Egyptian Museum', description: 'Tutankhamun\'s collection under one roof. Half a day minimum.', detail: 'Tutankhamun\'s collection under one roof. Half a day minimum.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 4, tags: ['culture'], city: 'Cairo', intensity: 'low' },
    { id: 'eg-nile-cruise', name: 'Nile cruise, Luxor to Aswan', description: 'Three nights on the river with the temples along the way.', detail: 'Three nights on the river with the temples along the way.', suits: ['couple', 'seniors', 'family', 'solo'], indicativePrice: null, audience: 'both', durationHours: 72, tags: ['relaxed', 'culture'], city: 'Luxor', intensity: 'low' },
    { id: 'eg-valley-kings', name: 'Valley of the Kings', description: 'Three tombs included, Tutankhamun\'s costs extra.', detail: 'Three tombs included, Tutankhamun\'s costs extra.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 5, tags: ['culture', 'sightseeing'], city: 'Luxor', intensity: 'moderate' },
    { id: 'eg-abu-simbel', name: 'Abu Simbel', description: 'Ramses II, moved stone by stone when the dam flooded the valley.', detail: 'Ramses II, moved stone by stone when the dam flooded the valley.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 8, tags: ['culture', 'sightseeing'], city: 'Aswan', intensity: 'moderate' },
    { id: 'eg-red-sea', name: 'Red Sea snorkelling, Hurghada', description: 'Some of the clearest water and healthiest reef in the region.', detail: 'Some of the clearest water and healthiest reef in the region.', suits: ['couple', 'seniors', 'family', 'friends', 'solo'], indicativePrice: null, audience: 'both', durationHours: 6, tags: ['adventure', 'relaxed'], city: 'Hurghada', intensity: 'moderate' },
  ],
  pricingCopy: {
    flightNote: 'Return economy from Mumbai or Delhi.',
    seasonNotes: {
      peak: 'Best weather, highest rates.',
      shoulder: 'Still good, noticeably cheaper.',
      off: 'Cheapest, with some weather trade off.',
    },
  },
  brochure: '',
  enabled: true,
  bookable: false,
};

const oman: DestinationSource = {
  slug: 'oman',
  name: 'Oman',
  country: 'Oman',
  visaTier: 'evisa',
  tagline: 'The Gulf without the crowds, and wadis instead of malls.',
  heroImage: '/images/places/oman.jpg',
  heroAlt: 'Oman',
  cardImage: '/images/places/oman.jpg',
  summary: 'Muscat is calm and low rise, and an hour out there are wadis, desert camps and a coastline with almost nobody on it. A good alternative for anyone who found Dubai too busy.',
  bestMonthsSummary: 'October to April.',
  flightTimeSummary: '3h from Mumbai, 3h 30m from Delhi',
  cities: ['Muscat', 'Nizwa', 'Wahiba Sands'],
  currency: { code: 'OMR', symbol: 'OMR', approxInrPerUnit: 216.0 },
  visa: {
    required: true,
    type: 'Oman e-visa, 10 or 30 days',
    timeline: '2 to 4 working days',
    feeInr: 2300,
    documents: DEFAULT_VISA_DOCS,
    handledByUs: 'Applied for through the Royal Oman Police portal. We complete it and send the approved visa.',
  },
  costSamplesNote: 'Day to day costs are confirmed with your quote.',
  costSamples: [],
  tiers: [],
  activities: [
    { id: 'om-grand-mosque', name: 'Sultan Qaboos Grand Mosque', description: 'The second largest hand woven carpet in the world. Modest dress required.', detail: 'The second largest hand woven carpet in the world. Modest dress required.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 3, tags: ['culture', 'sightseeing'], city: 'Muscat', intensity: 'low' },
    { id: 'om-wadi-shab', name: 'Wadi Shab', description: 'A walk, a swim and a waterfall inside a cave. The best day in Oman.', detail: 'A walk, a swim and a waterfall inside a cave. The best day in Oman.', suits: ['friends', 'solo', 'couple'], indicativePrice: null, audience: 'both', durationHours: 7, tags: ['adventure'], city: 'Muscat', intensity: 'high' },
    { id: 'om-desert-camp', name: 'Wahiba Sands desert night', description: 'Dune drive, a camp under the stars and sunrise on the ridge.', detail: 'Dune drive, a camp under the stars and sunrise on the ridge.', suits: ['couple', 'seniors', 'family', 'friends', 'solo'], indicativePrice: null, audience: 'both', durationHours: 20, tags: ['adventure', 'relaxed'], city: 'Wahiba Sands', intensity: 'moderate' },
    { id: 'om-nizwa', name: 'Nizwa fort and Friday goat market', description: 'A 17th century fort and a livestock market that still runs.', detail: 'A 17th century fort and a livestock market that still runs.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 5, tags: ['culture'], city: 'Nizwa', intensity: 'low' },
    { id: 'om-dolphin', name: 'Muscat dolphin watching', description: 'Early boat along the coast, spinner pods most mornings.', detail: 'Early boat along the coast, spinner pods most mornings.', suits: ['family', 'couple', 'seniors'], indicativePrice: null, audience: 'both', durationHours: 3, tags: ['family', 'relaxed'], city: 'Muscat', intensity: 'low' },
    { id: 'om-mutrah', name: 'Mutrah souq and corniche', description: 'The old market and the seafront, best at dusk.', detail: 'The old market and the seafront, best at dusk.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 3, tags: ['shopping', 'culture'], city: 'Muscat', intensity: 'low' },
  ],
  pricingCopy: {
    flightNote: 'Return economy from Mumbai, Delhi or Kochi.',
    seasonNotes: {
      peak: 'Best weather, highest rates.',
      shoulder: 'Still good, noticeably cheaper.',
      off: 'Cheapest, with some weather trade off.',
    },
  },
  brochure: '',
  enabled: true,
  bookable: false,
};

const singapore: DestinationSource = {
  slug: 'singapore',
  name: 'Singapore',
  country: 'Singapore',
  visaTier: 'embassy',
  tagline: 'Expensive, spotless, and the easiest city in Asia with children.',
  heroImage: '/images/places/singapore.jpg',
  heroAlt: 'Singapore',
  cardImage: '/images/places/singapore.jpg',
  summary: 'Small enough to cover in three days, with Universal Studios, Gardens by the Bay and the zoo. Often paired with Malaysia to bring the average cost down.',
  bestMonthsSummary: 'February to April is least wet.',
  flightTimeSummary: '4h from Chennai, 5h 30m from Mumbai',
  cities: ['Singapore'],
  currency: { code: 'SGD', symbol: 'SGD', approxInrPerUnit: 65.0 },
  visa: {
    required: true,
    type: 'Singapore visa, applied through an authorised agent, 30 days',
    timeline: '5 to 7 working days',
    feeInr: 3400,
    documents: DEFAULT_VISA_DOCS,
    handledByUs: 'Applied through an authorised agent, which is the only route for an Indian passport. We assemble the documents and submit on your behalf.',
    caveat: 'Bank statements and proof of employment are required. We will tell you exactly what to send before you commit to dates.',
  },
  costSamplesNote: 'Day to day costs are confirmed with your quote.',
  costSamples: [],
  tiers: [],
  activities: [
    { id: 'sg-universal', name: 'Universal Studios Singapore', description: 'A full day on Sentosa. Book ahead for weekends.', detail: 'A full day on Sentosa. Book ahead for weekends.', suits: ['family', 'friends', 'solo', 'couple'], indicativePrice: null, audience: 'both', durationHours: 9, tags: ['family', 'adventure'], city: 'Singapore', intensity: 'high' },
    { id: 'sg-gardens', name: 'Gardens by the Bay and Cloud Forest', description: 'The supertrees and the indoor waterfall. Go for the light show.', detail: 'The supertrees and the indoor waterfall. Go for the light show.', suits: ['family', 'couple', 'seniors', 'solo'], indicativePrice: null, audience: 'both', durationHours: 4, tags: ['sightseeing', 'family'], city: 'Singapore', intensity: 'low' },
    { id: 'sg-zoo', name: 'Singapore Zoo and River Wonders', description: 'Open enclosures, and the best zoo in Asia by some distance.', detail: 'Open enclosures, and the best zoo in Asia by some distance.', suits: ['family'], indicativePrice: null, audience: 'both', durationHours: 6, tags: ['family'], city: 'Singapore', intensity: 'moderate' },
    { id: 'sg-marina', name: 'Marina Bay Sands SkyPark', description: 'The view from the top of the boat, at sunset.', detail: 'The view from the top of the boat, at sunset.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 2, tags: ['sightseeing'], city: 'Singapore', intensity: 'low' },
    { id: 'sg-hawker', name: 'Hawker centre food tour', description: 'Michelin listed stalls at a few dollars a plate.', detail: 'Michelin listed stalls at a few dollars a plate.', suits: ['couple', 'friends', 'solo'], indicativePrice: null, audience: 'both', durationHours: 3, tags: ['food'], city: 'Singapore', intensity: 'low' },
    { id: 'sg-night-safari', name: 'Night Safari', description: 'A tram through nocturnal enclosures after dark.', detail: 'A tram through nocturnal enclosures after dark.', suits: ['family', 'friends', 'solo', 'couple'], indicativePrice: null, audience: 'both', durationHours: 4, tags: ['family', 'adventure'], city: 'Singapore', intensity: 'low' },
  ],
  pricingCopy: {
    flightNote: 'Return economy from Chennai, Mumbai or Delhi.',
    seasonNotes: {
      peak: 'Best weather, highest rates.',
      shoulder: 'Still good, noticeably cheaper.',
      off: 'Cheapest, with some weather trade off.',
    },
  },
  brochure: '',
  enabled: true,
  bookable: false,
};

const japan: DestinationSource = {
  slug: 'japan',
  name: 'Japan',
  country: 'Japan',
  visaTier: 'embassy',
  tagline: 'The trip people save for, and it earns it.',
  heroImage: '/images/places/japan.jpg',
  heroAlt: 'Japan',
  cardImage: '/images/places/japan.jpg',
  summary: 'Tokyo, Kyoto and Osaka in ten days is the standard first route. Trains make it effortless. Costs are high but less than Europe, and cherry blossom season books out a year ahead.',
  bestMonthsSummary: 'March to May and October to November.',
  flightTimeSummary: '7h 30m from Delhi',
  cities: ['Tokyo', 'Kyoto', 'Osaka'],
  currency: { code: 'JPY', symbol: 'JPY', approxInrPerUnit: 0.56 },
  visa: {
    required: true,
    type: 'Japan tourist visa, single entry',
    timeline: '5 to 8 working days once documents are complete',
    feeInr: 3600,
    documents: DEFAULT_VISA_DOCS,
    handledByUs: 'We prepare the itinerary, schedule and document set Japan requires, and submit through the authorised centre.',
    caveat: 'Japan asks for a day by day itinerary and proof of funds. This one needs a few days of preparation before it can be filed.',
  },
  costSamplesNote: 'Day to day costs are confirmed with your quote.',
  costSamples: [],
  tiers: [],
  activities: [
    { id: 'jp-shibuya', name: 'Tokyo: Shibuya, Shinjuku and Asakusa', description: 'The crossing, the neon and the oldest temple in the city.', detail: 'The crossing, the neon and the oldest temple in the city.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 8, tags: ['sightseeing', 'culture'], city: 'Tokyo', intensity: 'moderate' },
    { id: 'jp-fuji', name: 'Mount Fuji and Hakone day trip', description: 'The lake, the ropeway and the mountain if it is clear.', detail: 'The lake, the ropeway and the mountain if it is clear.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 11, tags: ['sightseeing'], city: 'Tokyo', intensity: 'moderate' },
    { id: 'jp-fushimi', name: 'Fushimi Inari and Kyoto temples', description: 'Ten thousand torii gates. Go at first light to have them to yourself.', detail: 'Ten thousand torii gates. Go at first light to have them to yourself.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 6, tags: ['culture', 'sightseeing'], city: 'Kyoto', intensity: 'high' },
    { id: 'jp-arashiyama', name: 'Arashiyama bamboo grove and monkey park', description: 'The grove early, then the climb to the macaques.', detail: 'The grove early, then the climb to the macaques.', suits: ['family', 'couple', 'seniors', 'solo'], indicativePrice: null, audience: 'both', durationHours: 5, tags: ['sightseeing', 'family'], city: 'Kyoto', intensity: 'moderate' },
    { id: 'jp-dotonbori', name: 'Osaka: Dotonbori and street food', description: 'The canal, the neon and takoyaki cooked in front of you.', detail: 'The canal, the neon and takoyaki cooked in front of you.', suits: ['friends', 'couple', 'solo'], indicativePrice: null, audience: 'both', durationHours: 4, tags: ['food', 'nightlife'], city: 'Osaka', intensity: 'low' },
    { id: 'jp-nara', name: 'Nara day trip', description: 'The great Buddha and the deer that bow for biscuits.', detail: 'The great Buddha and the deer that bow for biscuits.', suits: ['family', 'couple', 'seniors', 'solo'], indicativePrice: null, audience: 'both', durationHours: 6, tags: ['culture', 'family'], city: 'Osaka', intensity: 'moderate' },
  ],
  pricingCopy: {
    flightNote: 'Return economy from Delhi or Mumbai.',
    seasonNotes: {
      peak: 'Best weather, highest rates.',
      shoulder: 'Still good, noticeably cheaper.',
      off: 'Cheapest, with some weather trade off.',
    },
  },
  brochure: '',
  enabled: true,
  bookable: false,
};

const south_korea: DestinationSource = {
  slug: 'south-korea',
  name: 'South Korea',
  country: 'South Korea',
  visaTier: 'embassy',
  tagline: 'Seoul, and a country most Indian travellers skip.',
  heroImage: '/images/places/south-korea.jpg',
  heroAlt: 'South Korea',
  cardImage: '/images/places/south-korea.jpg',
  summary: 'Seoul is late night food, shopping and palaces. Busan adds beaches, and Jeju is the domestic island break. Still uncrowded by Indian visitors, which is part of the appeal.',
  bestMonthsSummary: 'April to June and September to November.',
  flightTimeSummary: '7h from Delhi',
  cities: ['Seoul', 'Busan', 'Jeju'],
  currency: { code: 'KRW', symbol: 'KRW', approxInrPerUnit: 0.062 },
  visa: {
    required: true,
    type: 'South Korea tourist visa, single entry',
    timeline: '7 to 10 working days',
    feeInr: 4800,
    documents: DEFAULT_VISA_DOCS,
    handledByUs: 'We assemble the document set and file it at the visa centre on your behalf.',
    caveat: 'Proof of employment and bank statements are required, and processing is slower than most.',
  },
  costSamplesNote: 'Day to day costs are confirmed with your quote.',
  costSamples: [],
  tiers: [],
  activities: [
    { id: 'kr-palace', name: 'Gyeongbokgung palace and hanbok', description: 'Free entry if you wear a hanbok, which most people do.', detail: 'Free entry if you wear a hanbok, which most people do.', suits: ['family', 'couple', 'seniors', 'solo'], indicativePrice: null, audience: 'both', durationHours: 4, tags: ['culture', 'family'], city: 'Seoul', intensity: 'moderate' },
    { id: 'kr-dmz', name: 'DMZ tour', description: 'The border, the observation post and a tunnel. Passport required.', detail: 'The border, the observation post and a tunnel. Passport required.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 8, tags: ['culture', 'sightseeing'], city: 'Seoul', intensity: 'moderate' },
    { id: 'kr-myeongdong', name: 'Myeongdong night market and skincare run', description: 'Street food and the cosmetics everyone comes back with.', detail: 'Street food and the cosmetics everyone comes back with.', suits: ['couple', 'friends', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 4, tags: ['food', 'shopping'], city: 'Seoul', intensity: 'low' },
    { id: 'kr-nami', name: 'Nami Island and Petite France', description: 'A river island of tree lined avenues, an hour out of Seoul.', detail: 'A river island of tree lined avenues, an hour out of Seoul.', suits: ['family', 'couple', 'seniors'], indicativePrice: null, audience: 'both', durationHours: 9, tags: ['relaxed', 'family'], city: 'Seoul', intensity: 'moderate' },
    { id: 'kr-haeundae', name: 'Busan: Haeundae beach and Gamcheon village', description: 'A beach city and a hillside painted every colour.', detail: 'A beach city and a hillside painted every colour.', suits: ['couple', 'seniors', 'family', 'solo'], indicativePrice: null, audience: 'both', durationHours: 6, tags: ['relaxed', 'sightseeing'], city: 'Busan', intensity: 'moderate' },
    { id: 'kr-jeju', name: 'Jeju: Seongsan Ilchulbong sunrise', description: 'A volcanic crater rising straight out of the sea.', detail: 'A volcanic crater rising straight out of the sea.', suits: ['friends', 'solo', 'couple', 'seniors', 'family'], indicativePrice: null, audience: 'both', durationHours: 4, tags: ['adventure', 'sightseeing'], city: 'Jeju', intensity: 'high' },
  ],
  pricingCopy: {
    flightNote: 'Return economy from Delhi, usually one stop.',
    seasonNotes: {
      peak: 'Best weather, highest rates.',
      shoulder: 'Still good, noticeably cheaper.',
      off: 'Cheapest, with some weather trade off.',
    },
  },
  brochure: '',
  enabled: true,
  bookable: false,
};

const turkey: DestinationSource = {
  slug: 'turkey',
  name: 'Turkey',
  country: 'Turkiye',
  visaTier: 'embassy',
  tagline: 'Istanbul and Cappadocia, in one week.',
  heroImage: '/images/places/turkey.jpg',
  heroAlt: 'Turkey',
  cardImage: '/images/places/turkey.jpg',
  summary: 'Istanbul spans two continents and rewards slow walking. Cappadocia is the balloon photographs. Antalya adds the coast if you have longer.',
  bestMonthsSummary: 'April to June and September to November.',
  flightTimeSummary: '6h from Delhi, 7h from Mumbai',
  cities: ['Istanbul', 'Cappadocia', 'Antalya'],
  currency: { code: 'TRY', symbol: 'TRY', approxInrPerUnit: 2.3 },
  visa: {
    required: true,
    type: 'Turkiye e-visa or sticker visa depending on your documents',
    timeline: '3 to 10 working days',
    feeInr: 3800,
    documents: DEFAULT_VISA_DOCS,
    handledByUs: 'Holders of a valid US, UK or Schengen visa qualify for the quick e-visa. Everyone else needs the full application, which we handle.',
    caveat: 'Which route applies depends on what other visas you hold. We check this before quoting a timeline.',
  },
  costSamplesNote: 'Day to day costs are confirmed with your quote.',
  costSamples: [],
  tiers: [],
  activities: [
    { id: 'tr-hagia', name: 'Hagia Sophia, Blue Mosque and Topkapi', description: 'Three of the four great sights, walkable in one morning.', detail: 'Three of the four great sights, walkable in one morning.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 6, tags: ['culture', 'sightseeing'], city: 'Istanbul', intensity: 'moderate' },
    { id: 'tr-bosphorus', name: 'Bosphorus cruise', description: 'Two continents from the water, best in the late afternoon.', detail: 'Two continents from the water, best in the late afternoon.', suits: ['couple', 'seniors', 'family', 'solo'], indicativePrice: null, audience: 'both', durationHours: 3, tags: ['relaxed', 'sightseeing'], city: 'Istanbul', intensity: 'low' },
    { id: 'tr-grand-bazaar', name: 'Grand Bazaar and spice market', description: 'Four thousand shops. Bargaining expected, tea offered.', detail: 'Four thousand shops. Bargaining expected, tea offered.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 4, tags: ['shopping', 'culture'], city: 'Istanbul', intensity: 'low' },
    { id: 'tr-balloon', name: 'Cappadocia hot air balloon at sunrise', description: 'The reason most people come. Weather dependent, book two days spare.', detail: 'The reason most people come. Weather dependent, book two days spare.', suits: ['friends', 'solo', 'couple', 'seniors', 'family'], indicativePrice: null, audience: 'both', durationHours: 4, tags: ['adventure', 'sightseeing'], city: 'Cappadocia', intensity: 'moderate' },
    { id: 'tr-goreme', name: 'Goreme open air museum and underground city', description: 'Rock cut churches and a city carved eight levels down.', detail: 'Rock cut churches and a city carved eight levels down.', suits: ['couple', 'seniors', 'solo', 'family'], indicativePrice: null, audience: 'both', durationHours: 6, tags: ['culture', 'sightseeing'], city: 'Cappadocia', intensity: 'moderate' },
    { id: 'tr-antalya', name: 'Antalya old town and Duden falls', description: 'A Roman harbour town and a waterfall straight into the sea.', detail: 'A Roman harbour town and a waterfall straight into the sea.', suits: ['couple', 'seniors', 'family', 'solo'], indicativePrice: null, audience: 'both', durationHours: 5, tags: ['relaxed', 'sightseeing'], city: 'Antalya', intensity: 'low' },
  ],
  pricingCopy: {
    flightNote: 'Return economy from Delhi or Mumbai.',
    seasonNotes: {
      peak: 'Best weather, highest rates.',
      shoulder: 'Still good, noticeably cheaper.',
      off: 'Cheapest, with some weather trade off.',
    },
  },
  brochure: '',
  enabled: true,
  bookable: false,
};

/**
 * Prices live in config/prices.ts so they can all be edited in one place.
 * They are merged in here, so nothing else in the codebase needs to know
 * where a price came from.
 */
function withPrices(d: DestinationSource): Destination {
  const card = RATE_CARDS[d.slug];
  const { pricingCopy, ...rest } = d;
  return {
    ...rest,
    included: d.included ?? DEFAULT_INCLUDED,
    notIncluded: d.notIncluded ?? DEFAULT_NOT_INCLUDED,
    // Nothing is bookable until a supplier is in place for it.
    bookable: d.bookable ?? false,
    pricing: {
      baseLandPerPersonPerNight: card.landPerPersonPerNight,
      childLandFactor: card.childFactor,
      fixedPerPersonInr: card.fixedPerPerson,
      indicativeFlight: { ...card.flight, note: pricingCopy.flightNote },
      seasons: (['peak', 'shoulder', 'off'] as const).map((label) => ({
        label,
        months: card.seasons[label].months,
        multiplier: card.seasons[label].multiplier,
        note: pricingCopy.seasonNotes[label],
      })),
    },
    activities: d.activities.map((a) => {
      const price = ACTIVITY_PRICES[a.id];
      if (!price) return a;
      return {
        ...a,
        indicativePrice: price.adult,
        childPrice: price.child ?? price.adult,
      };
    }),
  };
}

export const destinations: Destination[] = [
  uae, thailand,
  malaysia, maldives, nepal, mauritius,
  vietnam, sri_lanka, bali, azerbaijan, georgia, uzbekistan, egypt, oman,
  singapore, japan, south_korea, turkey,
].map(withPrices);

/** Destinations grouped the way the customer thinks about visa effort. */
export function destinationsByVisaTier() {
  return {
    none: liveDestinations.filter((d) => d.visaTier === 'none'),
    evisa: liveDestinations.filter((d) => d.visaTier === 'evisa'),
    embassy: liveDestinations.filter((d) => d.visaTier === 'embassy'),
  };
}

export const liveDestinations = destinations.filter((d) => d.enabled);

export function getDestination(slug: string | null | undefined) {
  if (!slug) return undefined;
  const key = slug.toLowerCase();
  // 'dubai' was the old slug for the UAE. Old links must keep working.
  const alias = key === 'dubai' ? 'uae' : key;
  return liveDestinations.find((d) => d.slug === alias);
}

export function getTier(destinationSlug: string, tierId: string | null | undefined) {
  const d = getDestination(destinationSlug);
  if (!d) return undefined;
  return d.tiers.find((t) => t.id === tierId) ?? d.tiers.find((t) => t.recommended) ?? d.tiers[0];
}

export function seasonForMonth(destination: Destination, month: number) {
  return (
    destination.pricing.seasons.find((s) => s.months.includes(month)) ??
    destination.pricing.seasons.find((s) => s.label === 'shoulder') ??
    destination.pricing.seasons[0]
  );
}
