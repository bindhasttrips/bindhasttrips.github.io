import type { Destination } from './types';

/**
 * Prices are indicative and are my own estimates until checked against
 * supplier rates. `infoUrl` and `videoUrl` are deliberately absent rather
 * than guessed: add real links here and the builder shows them automatically.
 */

const dubai: Destination = {
  slug: 'dubai',
  name: 'Dubai',
  country: 'United Arab Emirates',
  tagline: 'The easiest international trip an Indian passport can take.',
  heroImage: '/images/dubai-hero.jpg',
  heroAlt: 'Dubai skyline at dusk seen from the marina',
  cardImage: '/images/dubai-card.jpg',
  summary:
    'Three and a half hours from Mumbai, with English and Hindi spoken almost everywhere and Indian food widely available. Entry is straightforward, the infrastructure is excellent, and it works equally well for couples, families and small groups.',
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
      name: 'Dubai Essentials',
      days: 5,
      nights: 4,
      fromPricePerPerson: 42000,
      blurb: 'The standard Dubai itinerary, covering the main sights without filler days.',
      highlights: [
        '4-star hotel near the Metro, twin sharing',
        'Desert safari with BBQ dinner',
        'Burj Khalifa, levels 124 and 125',
        'Half day Dubai city tour',
        'All airport and activity transfers',
      ],
      itinerary: [
        { day: 1, title: 'Arrive in Dubai', city: 'Dubai', detail: 'Airport pickup in a private car, hotel check-in, and a short evening walk around Dubai Marina.', suggestedActivityIds: [] },
        { day: 2, title: 'Old Dubai and Downtown', city: 'Dubai', detail: 'The souks and the creek in the morning, Downtown in the evening.', suggestedActivityIds: ['dubai-city-tour', 'old-dubai-souks', 'dubai-fountain-boat'] },
        { day: 3, title: 'Desert day', city: 'Dubai', detail: 'Free morning, afternoon pickup for the desert.', suggestedActivityIds: ['desert-safari'] },
        { day: 4, title: 'Beach and Burj Khalifa', city: 'Dubai', detail: 'A slow morning by the sea, then the tower at sunset.', suggestedActivityIds: ['la-mer-beach', 'burj-khalifa'] },
        { day: 5, title: 'Departure', city: 'Dubai', detail: 'Late checkout where the hotel permits, then airport drop with time to spare.', suggestedActivityIds: [] },
      ],
    },
    {
      id: 'complete',
      name: 'Dubai Complete',
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
        { day: 1, title: 'Arrive in Dubai', city: 'Dubai', detail: 'Private airport pickup, check-in, and a free first evening at the Marina.', suggestedActivityIds: [] },
        { day: 2, title: 'Old Dubai', city: 'Dubai', detail: 'Souks, the creek crossing by abra, and the Al Fahidi district.', suggestedActivityIds: ['old-dubai-souks', 'dubai-frame'] },
        { day: 3, title: 'Desert day', city: 'Dubai', detail: 'Afternoon desert safari with BBQ dinner and a live show.', suggestedActivityIds: ['desert-safari'] },
        { day: 4, title: 'Abu Dhabi', city: 'Abu Dhabi', detail: 'A long day out. Early start, back late.', suggestedActivityIds: ['abu-dhabi-tour'] },
        { day: 5, title: 'Your choice', city: 'Dubai', detail: 'A park, a waterpark, or nothing at all.', suggestedActivityIds: ['aquaventure'] },
        { day: 6, title: 'Downtown and the water', city: 'Dubai', detail: 'The tower at sunset, then dinner on the water.', suggestedActivityIds: ['burj-khalifa', 'dhow-cruise'] },
        { day: 7, title: 'Departure', city: 'Dubai', detail: 'Free morning, then airport drop.', suggestedActivityIds: [] },
      ],
    },
    {
      id: 'dubai-abu-dhabi',
      name: 'Dubai and Abu Dhabi',
      days: 8,
      nights: 7,
      fromPricePerPerson: 78000,
      blurb: 'As above, with two nights in Abu Dhabi rather than a single long day trip.',
      highlights: [
        'Everything in Complete',
        '2 nights in Abu Dhabi, 5 in Dubai',
        'Louvre Abu Dhabi and Ferrari World',
        'Intercity transfers by private car',
        'Suits families with children under 12',
      ],
      itinerary: [
        { day: 1, title: 'Arrive in Dubai', city: 'Dubai', detail: 'Private airport pickup and check-in.', suggestedActivityIds: [] },
        { day: 2, title: 'Old Dubai', city: 'Dubai', detail: 'Souks, creek crossing and Al Fahidi. Evening at the fountain show.', suggestedActivityIds: ['old-dubai-souks', 'dubai-fountain-boat'] },
        { day: 3, title: 'Desert day', city: 'Dubai', detail: 'Afternoon safari, BBQ dinner and the show.', suggestedActivityIds: ['desert-safari'] },
        { day: 4, title: 'Beach and Burj Khalifa', city: 'Dubai', detail: 'Morning at the beach, tower at sunset, dinner on the water.', suggestedActivityIds: ['la-mer-beach', 'burj-khalifa', 'dhow-cruise'] },
        { day: 5, title: 'Move to Abu Dhabi', city: 'Abu Dhabi', detail: 'Private transfer, hotel check-in, and the Grand Mosque in the late afternoon.', suggestedActivityIds: ['abu-dhabi-tour'] },
        { day: 6, title: 'Yas Island', city: 'Abu Dhabi', detail: 'A full day on the island.', suggestedActivityIds: ['ferrari-world'] },
        { day: 7, title: 'Back to Dubai', city: 'Abu Dhabi', detail: 'A museum morning, then the return transfer and a final evening free.', suggestedActivityIds: ['louvre-abu-dhabi'] },
        { day: 8, title: 'Departure', city: 'Dubai', detail: 'Airport drop.', suggestedActivityIds: [] },
      ],
    },
  ],
  activities: [
    { id: 'desert-safari', name: 'Desert safari with BBQ dinner', description: 'Dune bashing, a camel ride, henna, a live show and a buffet dinner at a desert camp.', indicativePrice: 3200, childPrice: 2600, audience: 'both', durationHours: 6, tags: ['adventure', 'family', 'sightseeing'], city: 'Dubai', intensity: 'moderate' },
    { id: 'burj-khalifa', name: 'Burj Khalifa, levels 124 and 125', description: 'Timed entry to the observation decks. Sunset slots sell out weeks in advance.', indicativePrice: 3800, childPrice: 3000, audience: 'both', durationHours: 2, tags: ['sightseeing'], city: 'Dubai', intensity: 'low' },
    { id: 'burj-khalifa-148', name: 'Burj Khalifa, level 148 SKY', description: 'The higher deck, with lounge access and a shorter queue.', indicativePrice: 8500, childPrice: 6800, audience: 'both', durationHours: 2, tags: ['sightseeing'], city: 'Dubai', intensity: 'low' },
    { id: 'dubai-city-tour', name: 'Half day Dubai city tour', description: 'A guided run through the old and new city with the main photo stops.', indicativePrice: 2200, childPrice: 1700, audience: 'both', durationHours: 4, tags: ['sightseeing', 'culture'], city: 'Dubai', intensity: 'low' },
    { id: 'old-dubai-souks', name: 'Gold and spice souks with abra crossing', description: 'The old trading quarter, crossing the creek on a wooden abra.', indicativePrice: 1400, childPrice: 1100, audience: 'both', durationHours: 3, tags: ['culture', 'shopping'], city: 'Dubai', intensity: 'low' },
    { id: 'dhow-cruise', name: 'Marina dhow cruise with dinner', description: 'Two hours on the water with a buffet dinner and views of the lit skyline.', indicativePrice: 2400, childPrice: 1800, audience: 'both', durationHours: 3, tags: ['relaxed', 'food'], city: 'Dubai', intensity: 'low' },
    { id: 'museum-future', name: 'Museum of the Future', description: 'Advance booking required. Same day tickets are rarely available.', indicativePrice: 4200, childPrice: 3200, audience: 'both', durationHours: 2, tags: ['culture', 'sightseeing'], city: 'Dubai', intensity: 'low' },
    { id: 'dubai-frame', name: 'Dubai Frame', description: 'Observation deck with the old city on one side and the new city on the other.', indicativePrice: 1200, childPrice: 900, audience: 'both', durationHours: 2, tags: ['sightseeing'], city: 'Dubai', intensity: 'low' },
    { id: 'dubai-fountain-boat', name: 'Dubai Fountain lake ride', description: 'A short boat ride on the lake during the fountain show.', indicativePrice: 1100, childPrice: 900, audience: 'both', durationHours: 1, tags: ['relaxed', 'sightseeing', 'family'], city: 'Dubai', intensity: 'low' },
    { id: 'la-mer-beach', name: 'Beach day at La Mer or Kite Beach', description: 'Public beach with cafes and changing facilities. No ticket required.', indicativePrice: 0, audience: 'both', durationHours: 4, tags: ['relaxed', 'family'], city: 'Dubai', intensity: 'low' },
    { id: 'aquaventure', name: 'Atlantis Aquaventure waterpark', description: 'The largest waterpark in the region. Allow a full day.', indicativePrice: 6500, childPrice: 5200, audience: 'both', durationHours: 8, tags: ['family', 'adventure'], city: 'Dubai', intensity: 'high' },
    { id: 'lost-chambers', name: 'Lost Chambers Aquarium', description: 'Walk through aquarium at Atlantis. Easy on small children.', indicativePrice: 2600, childPrice: 2100, audience: 'kids', durationHours: 2, tags: ['family'], city: 'Dubai', intensity: 'low' },
    { id: 'dubai-aquarium', name: 'Dubai Aquarium and Underwater Zoo', description: 'Inside Dubai Mall, so it combines easily with a shopping afternoon.', indicativePrice: 2400, childPrice: 1900, audience: 'kids', durationHours: 2, tags: ['family'], city: 'Dubai', intensity: 'low' },
    { id: 'img-worlds', name: 'IMG Worlds of Adventure', description: 'Indoor theme park, so it stays comfortable in peak summer.', indicativePrice: 4300, childPrice: 3600, audience: 'kids', durationHours: 7, tags: ['family', 'adventure'], city: 'Dubai', intensity: 'moderate' },
    { id: 'ski-dubai', name: 'Ski Dubai snow park', description: 'Indoor snow park with real snow. Jackets and boots are provided.', indicativePrice: 3600, childPrice: 3100, audience: 'kids', durationHours: 3, tags: ['family', 'adventure'], city: 'Dubai', intensity: 'moderate' },
    { id: 'miracle-garden', name: 'Dubai Miracle Garden', description: 'A large seasonal flower garden. Popular for photographs.', indicativePrice: 1900, childPrice: 1500, audience: 'both', durationHours: 3, tags: ['family', 'relaxed'], city: 'Dubai', intensity: 'low', note: 'Seasonal, open approximately November to May' },
    { id: 'global-village', name: 'Global Village', description: 'Open air market and food festival with pavilions by country.', indicativePrice: 1100, childPrice: 900, audience: 'both', durationHours: 4, tags: ['family', 'shopping', 'food'], city: 'Dubai', intensity: 'low', note: 'Seasonal, open approximately October to April' },
    { id: 'marina-yacht', name: 'Shared yacht cruise on the Marina', description: 'Two hours on a shared yacht with refreshments.', indicativePrice: 6000, audience: 'adult', durationHours: 2, tags: ['relaxed', 'nightlife'], city: 'Dubai', intensity: 'low' },
    { id: 'balloon', name: 'Sunrise hot air balloon over the desert', description: 'Pre dawn start, with a falcon display on landing and breakfast at a camp.', indicativePrice: 9500, audience: 'adult', durationHours: 5, tags: ['adventure', 'sightseeing'], city: 'Dubai', intensity: 'moderate' },
    { id: 'skydive', name: 'Skydive over the Palm', description: 'Tandem jump with video. Weather dependent and booked well ahead.', indicativePrice: 22000, audience: 'adult', durationHours: 4, tags: ['adventure'], city: 'Dubai', intensity: 'high' },
    { id: 'desert-quad', name: 'Quad biking in the desert', description: 'Self drive quad session with an instructor, usually combined with a safari.', indicativePrice: 4200, audience: 'adult', durationHours: 3, tags: ['adventure'], city: 'Dubai', intensity: 'high' },
    { id: 'helicopter-tour', name: 'Helicopter tour over Dubai', description: 'Twelve to seventeen minutes over the Palm, the Burj and the coast.', indicativePrice: 14500, audience: 'adult', durationHours: 1, tags: ['sightseeing', 'adventure'], city: 'Dubai', intensity: 'low' },
    { id: 'marina-brunch', name: 'Weekend brunch at a Marina restaurant', description: 'The long Dubai brunch. Food and drinks over three hours.', indicativePrice: 5500, audience: 'adult', durationHours: 3, tags: ['food', 'nightlife'], city: 'Dubai', intensity: 'low' },
    { id: 'nightlife-marina', name: 'Night out at a Marina club or lounge', description: 'Entry and a table at a mainstream club. Dress code applies.', indicativePrice: 4500, audience: 'adult', durationHours: 4, tags: ['nightlife'], city: 'Dubai', intensity: 'low' },
    { id: 'gold-souk-shopping', name: 'Guided gold and textile shopping', description: 'A guide who knows the rates, which matters if you intend to buy gold.', indicativePrice: 1800, audience: 'adult', durationHours: 3, tags: ['shopping'], city: 'Dubai', intensity: 'low' },
    { id: 'spa-hammam', name: 'Traditional hammam and spa session', description: 'Steam, scrub and massage. A good afternoon in peak summer.', indicativePrice: 4800, audience: 'adult', durationHours: 2, tags: ['relaxed'], city: 'Dubai', intensity: 'low' },
    { id: 'abu-dhabi-tour', name: 'Abu Dhabi day tour', description: 'Sheikh Zayed Grand Mosque, Qasr Al Watan and the Corniche, with lunch.', indicativePrice: 4500, childPrice: 3400, audience: 'both', durationHours: 10, tags: ['culture', 'sightseeing'], city: 'Abu Dhabi', intensity: 'moderate' },
    { id: 'louvre-abu-dhabi', name: 'Louvre Abu Dhabi', description: 'The domed museum on Saadiyat Island. Two to three hours is enough.', indicativePrice: 2900, childPrice: 2200, audience: 'both', durationHours: 3, tags: ['culture'], city: 'Abu Dhabi', intensity: 'low' },
    { id: 'ferrari-world', name: 'Ferrari World', description: 'Indoor theme park on Yas Island, including the fastest rollercoaster in the world.', indicativePrice: 6200, childPrice: 5200, audience: 'both', durationHours: 8, tags: ['family', 'adventure'], city: 'Abu Dhabi', intensity: 'high' },
    { id: 'warner-bros', name: 'Warner Bros World Abu Dhabi', description: 'Fully indoor park. Gentler than Ferrari World and better for younger children.', indicativePrice: 5800, childPrice: 4900, audience: 'kids', durationHours: 8, tags: ['family'], city: 'Abu Dhabi', intensity: 'moderate' },
  ],
  included: [
    'Return international flights, ticketed on your dates',
    'Hotel stay on twin sharing with daily breakfast',
    'Airport pickup and drop in a private vehicle',
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
  pricing: {
    baseLandPerPersonPerNight: 8500,
    childLandFactor: 0.6,
    fixedPerPersonInr: 9500,
    indicativeFlight: {
      low: 18000,
      high: 34000,
      note: 'Return economy from Mumbai, Delhi or Bengaluru.',
    },
    seasons: [
      { label: 'peak', months: [11, 12, 1, 2, 3], multiplier: 1.25, note: 'The best weather of the year, and correspondingly the highest hotel rates.' },
      { label: 'shoulder', months: [4, 10], multiplier: 1.05, note: 'Warm but comfortable, and noticeably cheaper than peak season.' },
      { label: 'off', months: [5, 6, 7, 8, 9], multiplier: 0.85, note: 'Hot outdoors, though most attractions are indoors, and rates fall substantially.' },
    ],
  },
  brochure: '/brochures/dubai-guide.pdf',
  enabled: true,
};

const thailand: Destination = {
  slug: 'thailand',
  name: 'Thailand',
  country: 'Thailand',
  tagline: 'Lower costs than Dubai, and no visa required for Indian passport holders.',
  heroImage: '/images/thailand-hero.jpg',
  heroAlt: 'Longtail boats on a limestone bay in southern Thailand',
  cardImage: '/images/thailand-card.jpg',
  summary:
    'Costs on the ground are roughly half those in Dubai, and Indian passport holders currently enter without a visa. Bangkok covers the city and the food, and the southern islands cover the beaches. It works well for couples, groups of friends and families alike.',
  bestMonthsSummary: 'November to February offers the best weather. March and October are warmer and cost less.',
  flightTimeSummary: '4h 20m from Kolkata, 4h 30m from Mumbai, 4h 15m from Delhi',
  cities: ['Bangkok', 'Pattaya', 'Phuket', 'Krabi'],
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
      id: 'bangkok-pattaya',
      name: 'Bangkok and Pattaya',
      days: 6,
      nights: 5,
      fromPricePerPerson: 34000,
      blurb: 'The most economical way to combine a city stay with a beach stay.',
      highlights: [
        '3 nights Bangkok, 2 nights Pattaya',
        'Grand Palace and Wat Pho tour',
        'Coral Island day trip with lunch',
        'Floating market morning',
        'All intercity and activity transfers',
      ],
      itinerary: [
        { day: 1, title: 'Arrive in Bangkok', city: 'Bangkok', detail: 'Airport pickup, hotel check-in, and an evening at a night market for dinner.', suggestedActivityIds: [] },
        { day: 2, title: 'Old Bangkok', city: 'Bangkok', detail: 'Temples in the morning before the heat, the river in the evening.', suggestedActivityIds: ['grand-palace', 'river-cruise'] },
        { day: 3, title: 'Markets, then Pattaya', city: 'Bangkok', detail: 'Early start for the markets, then the transfer down to the coast.', suggestedActivityIds: ['floating-market'] },
        { day: 4, title: 'Island day', city: 'Pattaya', detail: 'Out to the island for the day, back by evening.', suggestedActivityIds: ['coral-island'] },
        { day: 5, title: 'Pattaya to Bangkok', city: 'Pattaya', detail: 'Free morning, transfer back, final evening free.', suggestedActivityIds: ['sanctuary-truth'] },
        { day: 6, title: 'Departure', city: 'Bangkok', detail: 'Airport drop with time to spare.', suggestedActivityIds: [] },
      ],
    },
    {
      id: 'bangkok-phuket',
      name: 'Bangkok and Phuket',
      days: 7,
      nights: 6,
      fromPricePerPerson: 47000,
      blurb: 'Bangkok followed by four nights in Phuket, with the domestic flight included.',
      recommended: true,
      highlights: [
        '2 nights Bangkok, 4 nights Phuket',
        'Domestic flight Bangkok to Phuket included',
        'Phi Phi islands by speedboat',
        'James Bond Island sea canoe tour',
        'Beachfront or near beach hotel',
      ],
      itinerary: [
        { day: 1, title: 'Arrive in Bangkok', city: 'Bangkok', detail: 'Airport pickup, hotel check-in, night market for dinner.', suggestedActivityIds: [] },
        { day: 2, title: 'Bangkok in one day', city: 'Bangkok', detail: 'Temples in the morning, the river at night.', suggestedActivityIds: ['grand-palace', 'river-cruise'] },
        { day: 3, title: 'Fly to Phuket', city: 'Phuket', detail: 'Short domestic flight, hotel transfer, and a free first evening on the beach.', suggestedActivityIds: [] },
        { day: 4, title: 'Phi Phi islands', city: 'Phuket', detail: 'A full day out on the water.', suggestedActivityIds: ['phi-phi'] },
        { day: 5, title: 'Phang Nga Bay', city: 'Phuket', detail: 'A calmer day than Phi Phi.', suggestedActivityIds: ['james-bond'] },
        { day: 6, title: 'Free day', city: 'Phuket', detail: 'Nothing scheduled.', suggestedActivityIds: ['big-buddha'] },
        { day: 7, title: 'Departure', city: 'Phuket', detail: 'Airport drop.', suggestedActivityIds: [] },
      ],
    },
    {
      id: 'bangkok-phuket-krabi',
      name: 'Bangkok, Phuket and Krabi',
      days: 9,
      nights: 8,
      fromPricePerPerson: 68000,
      blurb: 'A longer itinerary covering Bangkok and two separate southern beach bases.',
      highlights: [
        '2 nights Bangkok, 3 Phuket, 3 Krabi',
        'Ferry transfer between the islands',
        'Four Islands tour from Krabi',
        'Elephant sanctuary visit, no riding',
        'Two full unscheduled days',
      ],
      itinerary: [
        { day: 1, title: 'Arrive in Bangkok', city: 'Bangkok', detail: 'Airport pickup, hotel check-in, and a night market for dinner.', suggestedActivityIds: [] },
        { day: 2, title: 'Bangkok in one day', city: 'Bangkok', detail: 'Grand Palace and Wat Pho, with an evening river cruise.', suggestedActivityIds: ['grand-palace', 'river-cruise'] },
        { day: 3, title: 'Fly to Phuket', city: 'Phuket', detail: 'Domestic flight, hotel transfer, and a free first evening on the beach.', suggestedActivityIds: [] },
        { day: 4, title: 'Phi Phi islands', city: 'Phuket', detail: 'Full day speedboat trip with snorkelling stops and lunch on board.', suggestedActivityIds: ['phi-phi'] },
        { day: 5, title: 'Phuket free day', city: 'Phuket', detail: 'Old town, a massage, or nothing at all.', suggestedActivityIds: ['old-town-phuket'] },
        { day: 6, title: 'Ferry to Krabi', city: 'Krabi', detail: 'Ferry crossing to Krabi and check-in at Ao Nang.', suggestedActivityIds: [] },
        { day: 7, title: 'Four Islands tour', city: 'Krabi', detail: 'Longtail boat to Tup, Chicken, Poda and Phra Nang beaches.', suggestedActivityIds: ['four-islands'] },
        { day: 8, title: 'Elephants and free time', city: 'Krabi', detail: 'Sanctuary visit in the morning, afternoon free.', suggestedActivityIds: ['elephant-sanctuary'] },
        { day: 9, title: 'Departure', city: 'Krabi', detail: 'Transfer to Krabi airport.', suggestedActivityIds: [] },
      ],
    },
  ],
  activities: [
    { id: 'grand-palace', name: 'Grand Palace and Wat Pho tour', description: 'Guided half day covering the two principal temples in the old city.', indicativePrice: 2600, childPrice: 1900, audience: 'both', durationHours: 5, tags: ['culture', 'sightseeing'], city: 'Bangkok', intensity: 'moderate' },
    { id: 'floating-market', name: 'Floating market and railway market', description: 'Damnoen Saduak and Maeklong. Departure is around 6am.', indicativePrice: 2800, childPrice: 2200, audience: 'both', durationHours: 7, tags: ['culture', 'sightseeing', 'shopping'], city: 'Bangkok', intensity: 'moderate' },
    { id: 'river-cruise', name: 'Chao Phraya dinner cruise', description: 'Buffet dinner on the river, with the riverside temples lit.', indicativePrice: 2900, childPrice: 2200, audience: 'both', durationHours: 3, tags: ['relaxed', 'food'], city: 'Bangkok', intensity: 'low' },
    { id: 'cooking-class', name: 'Thai cooking class', description: 'A market visit followed by preparing and eating four dishes.', indicativePrice: 2500, childPrice: 2000, audience: 'both', durationHours: 4, tags: ['food', 'culture'], city: 'Bangkok', intensity: 'low' },
    { id: 'street-food-tour', name: 'Evening street food tour', description: 'A guided walk through Chinatown and the night stalls, eating as you go.', indicativePrice: 2400, childPrice: 1900, audience: 'both', durationHours: 4, tags: ['food', 'culture'], city: 'Bangkok', intensity: 'low' },
    { id: 'safari-world', name: 'Safari World and Marine Park', description: 'Drive through safari with dolphin and sea lion shows. A full day.', indicativePrice: 3100, childPrice: 2500, audience: 'kids', durationHours: 8, tags: ['family'], city: 'Bangkok', intensity: 'moderate' },
    { id: 'ayutthaya', name: 'Ayutthaya day trip', description: 'The ruined former capital, an hour and a half north of Bangkok.', indicativePrice: 3400, childPrice: 2700, audience: 'both', durationHours: 9, tags: ['culture', 'sightseeing'], city: 'Bangkok', intensity: 'moderate' },
    { id: 'muay-thai', name: 'Muay Thai live match', description: 'Ringside seats at a competitive stadium rather than a tourist show.', indicativePrice: 2700, audience: 'adult', durationHours: 3, tags: ['culture', 'nightlife'], city: 'Bangkok', intensity: 'low' },
    { id: 'rooftop-bar', name: 'Rooftop bar evening', description: 'A table at one of the river or Sukhumvit rooftops. Dress code applies.', indicativePrice: 3200, audience: 'adult', durationHours: 3, tags: ['nightlife'], city: 'Bangkok', intensity: 'low' },
    { id: 'chatuchak', name: 'Chatuchak weekend market', description: 'Fifteen thousand stalls. Weekends only, and best before noon.', indicativePrice: 900, childPrice: 700, audience: 'both', durationHours: 4, tags: ['shopping', 'food'], city: 'Bangkok', intensity: 'moderate' },
    { id: 'thai-massage-bkk', name: 'Traditional Thai massage', description: 'A proper hour at an established parlour rather than a street shopfront.', indicativePrice: 1200, audience: 'both', durationHours: 2, tags: ['relaxed'], city: 'Bangkok', intensity: 'low' },
    { id: 'coral-island', name: 'Coral Island with lunch', description: 'Speedboat from Pattaya to Koh Larn, with beach time and a seafood lunch.', indicativePrice: 2200, childPrice: 1700, audience: 'both', durationHours: 7, tags: ['relaxed', 'family', 'sightseeing'], city: 'Pattaya', intensity: 'moderate' },
    { id: 'nong-nooch', name: 'Nong Nooch Tropical Garden', description: 'Botanical gardens with a culture show and an elephant show.', indicativePrice: 1900, childPrice: 1500, audience: 'kids', durationHours: 5, tags: ['family', 'relaxed'], city: 'Pattaya', intensity: 'low' },
    { id: 'sanctuary-truth', name: 'Sanctuary of Truth', description: 'An all timber carved temple on the seafront, still under construction.', indicativePrice: 1400, childPrice: 1100, audience: 'both', durationHours: 2, tags: ['culture', 'sightseeing'], city: 'Pattaya', intensity: 'low' },
    { id: 'alcazar-show', name: 'Alcazar cabaret show', description: 'A large scale costume and dance show. Suitable for all ages.', indicativePrice: 1800, childPrice: 1400, audience: 'both', durationHours: 2, tags: ['family', 'nightlife'], city: 'Pattaya', intensity: 'low' },
    { id: 'underwater-world', name: 'Underwater World Pattaya', description: 'Walk through tunnel aquarium. An easy indoor afternoon.', indicativePrice: 1700, childPrice: 1300, audience: 'kids', durationHours: 2, tags: ['family'], city: 'Pattaya', intensity: 'low' },
    { id: 'pattaya-floating-market', name: 'Pattaya Floating Market', description: 'Four zones of stalls and food on the water. Quieter than Damnoen Saduak.', indicativePrice: 1200, childPrice: 900, audience: 'both', durationHours: 3, tags: ['culture', 'shopping', 'food'], city: 'Pattaya', intensity: 'low' },
    { id: 'walking-street', name: 'Walking Street evening', description: 'The main nightlife strip. Adults only, and busiest after 10pm.', indicativePrice: 0, audience: 'adult', durationHours: 3, tags: ['nightlife'], city: 'Pattaya', intensity: 'low' },
    { id: 'phi-phi', name: 'Phi Phi islands by speedboat', description: 'Maya Bay, Pileh Lagoon, snorkelling stops and lunch on board.', indicativePrice: 3400, childPrice: 2600, audience: 'both', durationHours: 9, tags: ['adventure', 'sightseeing'], city: 'Phuket', intensity: 'high' },
    { id: 'james-bond', name: 'James Bond Island sea canoe', description: 'Phang Nga Bay by longtail boat, with canoeing through limestone caves.', indicativePrice: 3600, childPrice: 2800, audience: 'both', durationHours: 8, tags: ['adventure', 'sightseeing'], city: 'Phuket', intensity: 'moderate' },
    { id: 'fantasea', name: 'Phuket FantaSea show with dinner', description: 'A large theatrical culture show with a buffet dinner.', indicativePrice: 3300, childPrice: 2700, audience: 'kids', durationHours: 4, tags: ['family'], city: 'Phuket', intensity: 'low' },
    { id: 'elephant-sanctuary', name: 'Ethical elephant sanctuary', description: 'Feeding and bathing at a sanctuary that does not offer riding.', indicativePrice: 4200, childPrice: 3300, audience: 'both', durationHours: 5, tags: ['family', 'culture'], city: 'Phuket', intensity: 'low' },
    { id: 'old-town-phuket', name: 'Phuket Old Town walking tour', description: 'Sino Portuguese shophouses, street art and local cafes.', indicativePrice: 1600, childPrice: 1200, audience: 'both', durationHours: 3, tags: ['culture', 'food'], city: 'Phuket', intensity: 'low' },
    { id: 'big-buddha', name: 'Big Buddha and Karon viewpoint', description: 'The hilltop statue and the best view on the island. Half day by car.', indicativePrice: 1500, childPrice: 1200, audience: 'both', durationHours: 3, tags: ['sightseeing', 'culture'], city: 'Phuket', intensity: 'low' },
    { id: 'phuket-spa', name: 'Beachfront spa session', description: 'Oil massage and scrub at a resort spa rather than a street shop.', indicativePrice: 3200, audience: 'adult', durationHours: 2, tags: ['relaxed'], city: 'Phuket', intensity: 'low' },
    { id: 'surf-lesson', name: 'Beginner surf lesson at Kata', description: 'Two hours with a board and an instructor. Best May to October.', indicativePrice: 2800, audience: 'adult', durationHours: 2, tags: ['adventure'], city: 'Phuket', intensity: 'high' },
    { id: 'patong-nightlife', name: 'Patong and Bangla Road evening', description: 'The main nightlife strip in Phuket. Adults only.', indicativePrice: 0, audience: 'adult', durationHours: 3, tags: ['nightlife'], city: 'Phuket', intensity: 'low' },
    { id: 'four-islands', name: 'Four Islands tour by longtail', description: 'Tup, Chicken, Poda and Phra Nang beaches, with lunch.', indicativePrice: 2900, childPrice: 2300, audience: 'both', durationHours: 8, tags: ['sightseeing', 'adventure', 'relaxed'], city: 'Krabi', intensity: 'moderate' },
    { id: 'railay-beach', name: 'Railay Beach day trip', description: 'Reachable only by boat. Cliffs, calm water and a short walk to the lagoon.', indicativePrice: 2200, childPrice: 1700, audience: 'both', durationHours: 6, tags: ['relaxed', 'sightseeing'], city: 'Krabi', intensity: 'moderate' },
    { id: 'emerald-pool', name: 'Emerald Pool and hot springs', description: 'Inland day out to the spring fed pools and waterfalls.', indicativePrice: 2600, childPrice: 2000, audience: 'both', durationHours: 7, tags: ['relaxed', 'adventure'], city: 'Krabi', intensity: 'moderate' },
    { id: 'tiger-cave', name: 'Tiger Cave Temple climb', description: '1,260 steps to the summit. Start at dawn. Genuinely demanding.', indicativePrice: 1400, audience: 'adult', durationHours: 4, tags: ['adventure', 'culture'], city: 'Krabi', intensity: 'high' },
    { id: 'krabi-sunset-cruise', name: 'Sunset dinner cruise from Ao Nang', description: 'Four hours out among the karsts with dinner served on board.', indicativePrice: 3100, childPrice: 2400, audience: 'both', durationHours: 4, tags: ['relaxed', 'food'], city: 'Krabi', intensity: 'low' },
  ],
  included: [
    'Return international flights, ticketed on your dates',
    'Hotel stay on twin sharing with daily breakfast',
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
  pricing: {
    baseLandPerPersonPerNight: 6500,
    childLandFactor: 0.55,
    fixedPerPersonInr: 6000,
    indicativeFlight: {
      low: 16000,
      high: 30000,
      note: 'Return economy from a metro. Kolkata and Chennai are usually cheapest.',
    },
    seasons: [
      { label: 'peak', months: [11, 12, 1, 2], multiplier: 1.22, note: 'Dry and warm with low humidity. The best weather and the highest rates.' },
      { label: 'shoulder', months: [3, 4, 10], multiplier: 1.05, note: 'Hotter and still mostly dry. Songkran falls in April and is busy.' },
      { label: 'off', months: [5, 6, 7, 8, 9], multiplier: 0.85, note: 'Monsoon season, usually short afternoon showers rather than continuous rain. Rates fall sharply.' },
    ],
  },
  brochure: '/brochures/thailand-guide.pdf',
  enabled: true,
};

/**
 * To launch a new destination: add one object like the two above, push it into
 * this array, set enabled: true. Routes, cards, the builder and the estimator
 * all pick it up automatically.
 */
export const destinations: Destination[] = [dubai, thailand];

export const liveDestinations = destinations.filter((d) => d.enabled);

export function getDestination(slug: string | null | undefined) {
  if (!slug) return undefined;
  return liveDestinations.find((d) => d.slug === slug.toLowerCase());
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
