import type { Destination } from './types';

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
  bestMonthsSummary: 'November to March. April and October are warm but fine and cost less.',
  flightTimeSummary: '3h 15m from Mumbai · 3h 45m from Delhi · 4h from Bengaluru',
  currency: { code: 'AED', symbol: 'AED', approxInrPerUnit: 23 },
  visa: {
    required: true,
    type: 'UAE tourist e-Visa, 30 days, single entry',
    timeline: '3 to 5 working days once we have your documents',
    feeInr: 7500,
    documents: [
      'Passport with at least 6 months validity left',
      'One recent photo on a white background',
      'A scan of the first and last pages of your passport',
      'Confirmed return ticket and hotel booking (we provide both)',
    ],
    handledByUs:
      'You send us photos of your documents on WhatsApp. We fill the form, pay the fee, chase the application and send you the visa PDF. You do not visit a centre and you do not queue anywhere.',
    caveat:
      'Travellers with a blank passport are occasionally asked for a bank statement. We will tell you upfront if we think that applies to you.',
  },
  costSamples: [
    { label: 'Metro ride across town', fromInr: 75, toInr: 180 },
    { label: 'Sit-down Indian meal for one', fromInr: 700, toInr: 1200 },
    { label: 'Shawarma from a corner shop', fromInr: 180, toInr: 300 },
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
        'Half-day Dubai city tour',
        'All airport and activity transfers',
      ],
      itinerary: [
        { day: 1, title: 'Land in Dubai', detail: 'Airport pickup in a private car, hotel check-in, and a short evening walk around Dubai Marina.' },
        { day: 2, title: 'Old Dubai, then Downtown', detail: 'Half day city tour through the spice and gold souks, with a creek crossing by abra. Evening at Dubai Mall for the fountain show.' },
        { day: 3, title: 'Desert day', detail: 'Free morning. Afternoon pickup for dune bashing, a camel ride, henna, a live show and BBQ dinner. Return to the hotel by about 9:30pm.' },
        { day: 4, title: 'Burj Khalifa and the beach', detail: 'Morning at JBR beach. Timed entry to Burj Khalifa at sunset, booked well in advance as that slot sells out early.' },
        { day: 5, title: 'Fly home', detail: 'Late checkout where the hotel permits, then airport drop with time to spare.' },
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
        'Full-day Abu Dhabi with the Grand Mosque',
        'Marina dhow cruise with dinner',
        'One theme park or waterpark of your choice',
        'One full unscheduled day',
      ],
      itinerary: [
        { day: 1, title: 'Land in Dubai', detail: 'Private airport pickup, check-in, and a free first evening at the Marina.' },
        { day: 2, title: 'Old Dubai', detail: 'Souks, the creek crossing by abra, and the Al Fahidi district. Evening free.' },
        { day: 3, title: 'Desert day', detail: 'Afternoon desert safari with dune bashing, BBQ dinner and the show.' },
        { day: 4, title: 'Abu Dhabi', detail: 'Full day covering Sheikh Zayed Grand Mosque, Qasr Al Watan and the Corniche. An early start and a long day.' },
        { day: 5, title: 'Your pick', detail: 'Theme park or waterpark day at Atlantis Aquaventure, IMG Worlds or Global Village, depending on what you selected.' },
        { day: 6, title: 'Downtown and the water', detail: 'Burj Khalifa at sunset, then a dhow cruise with dinner along the Marina.' },
        { day: 7, title: 'Fly home', detail: 'Free morning, airport drop.' },
      ],
    },
    {
      id: 'dubai-abu-dhabi',
      name: 'Dubai + Abu Dhabi',
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
        { day: 1, title: 'Land in Dubai', detail: 'Private airport pickup and check-in.' },
        { day: 2, title: 'Old Dubai', detail: 'Souks, creek crossing and Al Fahidi. Evening at the fountain show.' },
        { day: 3, title: 'Desert day', detail: 'Afternoon desert safari with BBQ dinner and a live show.' },
        { day: 4, title: 'Burj Khalifa and the beach', detail: 'Morning at JBR beach, Burj Khalifa at sunset, then a dhow cruise with dinner.' },
        { day: 5, title: 'Move to Abu Dhabi', detail: 'Private transfer, hotel check-in, and the Grand Mosque in the late afternoon.' },
        { day: 6, title: 'Abu Dhabi on Yas Island', detail: 'Ferrari World or Warner Bros World, followed by the Corniche in the evening.' },
        { day: 7, title: 'Back to Dubai', detail: 'Louvre Abu Dhabi in the morning, return transfer to Dubai, final evening free for shopping.' },
        { day: 8, title: 'Fly home', detail: 'Airport drop.' },
      ],
    },
  ],
  activities: [
    { id: 'desert-safari', name: 'Desert safari with BBQ dinner', description: 'Dune bashing, a camel ride, henna, a live show and a buffet dinner at a desert camp.', indicativePrice: 3200, childPrice: 2600, audience: 'both', durationHours: 6 },
    { id: 'burj-khalifa', name: 'Burj Khalifa, levels 124 and 125', description: 'Timed entry. Sunset slots sell out weeks in advance, so these are booked early.', indicativePrice: 3800, childPrice: 3000, audience: 'both', durationHours: 2 },
    { id: 'abu-dhabi-tour', name: 'Abu Dhabi day tour', description: 'Sheikh Zayed Grand Mosque, Qasr Al Watan and the Corniche, with lunch.', indicativePrice: 4500, childPrice: 3400, audience: 'both', durationHours: 10 },
    { id: 'dhow-cruise', name: 'Marina dhow cruise with dinner', description: 'Two hours on the water with a buffet dinner and views of the lit skyline.', indicativePrice: 2400, childPrice: 1800, audience: 'both', durationHours: 3 },
    { id: 'museum-future', name: 'Museum of the Future', description: 'Advance booking is required. Same day tickets are rarely available.', indicativePrice: 4200, childPrice: 3200, audience: 'both', durationHours: 2 },
    { id: 'dubai-frame', name: 'Dubai Frame', description: 'Observation deck with the old city on one side and the new city on the other.', indicativePrice: 1200, childPrice: 900, audience: 'both', durationHours: 2 },
    { id: 'marina-yacht', name: 'Private yacht hour on the Marina', description: 'Two hours on a shared or private yacht along the Marina.', indicativePrice: 6000, audience: 'adult', durationHours: 2 },
    { id: 'balloon', name: 'Sunrise hot air balloon over the desert', description: 'Pre dawn start, with a falcon display on landing and breakfast at a desert camp.', indicativePrice: 9500, audience: 'adult', durationHours: 5 },
    { id: 'aquaventure', name: 'Atlantis Aquaventure waterpark', description: 'The largest waterpark in the region. Allow a full day.', indicativePrice: 6500, childPrice: 5200, audience: 'both', durationHours: 8 },
    { id: 'img-worlds', name: 'IMG Worlds of Adventure', description: 'Indoor theme park, so it remains comfortable in peak summer.', indicativePrice: 4300, childPrice: 3600, audience: 'kids', durationHours: 7 },
    { id: 'ski-dubai', name: 'Ski Dubai snow park', description: 'Indoor snow park with real snow. Jackets and boots are provided.', indicativePrice: 3600, childPrice: 3100, audience: 'kids', durationHours: 3 },
    { id: 'miracle-garden', name: 'Dubai Miracle Garden', description: 'A large seasonal flower garden. Popular for photographs.', indicativePrice: 1900, childPrice: 1500, audience: 'kids', durationHours: 3, note: 'Seasonal, open approximately November to May' },
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
      note: 'Return economy from Mumbai, Delhi or Bengaluru. Swings hard with dates, so we quote it live rather than guessing.',
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
  flightTimeSummary: '4h 20m from Kolkata · 4h 30m from Mumbai · 4h 15m from Delhi',
  currency: { code: 'THB', symbol: '฿', approxInrPerUnit: 2.6 },
  visa: {
    required: false,
    type: 'Visa-free entry for Indian passport holders, currently up to 60 days',
    timeline: 'Nothing to apply for. You clear immigration on arrival.',
    feeInr: 0,
    documents: [
      'Passport with at least 6 months validity left',
      'Confirmed return ticket (we provide it)',
      'Hotel booking confirmation (we provide it)',
      'Thailand Digital Arrival Card, completed online before departure. We do this for you.',
    ],
    handledByUs:
      'There is no visa to process, which removes the single most stressful part of planning a trip. We still fill your arrival card and brief you on exactly what immigration will ask.',
    caveat:
      'Visa-free entry is a policy that governments change. We confirm the rule actually in force on your travel dates before you pay anything.',
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
      name: 'Bangkok & Pattaya',
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
        { day: 1, title: 'Land in Bangkok', detail: 'Airport pickup, hotel check-in, and an evening at a night market for dinner.' },
        { day: 2, title: 'Old Bangkok', detail: 'Grand Palace, Wat Pho and the reclining Buddha in the morning, before the heat. Afternoon free, evening on the Chao Phraya.' },
        { day: 3, title: 'Floating market, then Pattaya', detail: 'Early start for Damnoen Saduak floating market and the Maeklong railway market, then the transfer to Pattaya.' },
        { day: 4, title: 'Coral Island', detail: 'Speedboat to Koh Larn for the day, with swimming and lunch on the beach. Return by evening.' },
        { day: 5, title: 'Pattaya to Bangkok', detail: 'Free morning, transfer back to Bangkok, final evening for shopping at Chatuchak or MBK.' },
        { day: 6, title: 'Fly home', detail: 'Airport drop with time to spare.' },
      ],
    },
    {
      id: 'bangkok-phuket',
      name: 'Bangkok & Phuket',
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
        { day: 1, title: 'Land in Bangkok', detail: 'Airport pickup, hotel check-in, night market for dinner.' },
        { day: 2, title: 'Bangkok in one day', detail: 'Grand Palace and Wat Pho in the morning, Chao Phraya dinner cruise in the evening.' },
        { day: 3, title: 'Fly to Phuket', detail: 'Short domestic flight, transfer to your hotel, and sunset at Patong or Kata depending on the hotel.' },
        { day: 4, title: 'Phi Phi islands', detail: 'Full day speedboat trip covering Maya Bay and Pileh Lagoon, with snorkelling stops and lunch on board.' },
        { day: 5, title: 'Phang Nga Bay', detail: 'James Bond Island and sea canoeing through the limestone caves. A calmer day than Phi Phi.' },
        { day: 6, title: 'Beach day', detail: 'Nothing scheduled. Beach, a massage, or the old town, as you prefer.' },
        { day: 7, title: 'Fly home', detail: 'Phuket to Bangkok, or a direct international departure, depending on the ticketing.' },
      ],
    },
    {
      id: 'bangkok-phuket-krabi',
      name: 'Bangkok, Phuket & Krabi',
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
        { day: 1, title: 'Land in Bangkok', detail: 'Airport pickup, hotel check-in, and a night market for dinner.' },
        { day: 2, title: 'Bangkok in one day', detail: 'Grand Palace and Wat Pho, with an evening river cruise.' },
        { day: 3, title: 'Fly to Phuket', detail: 'Domestic flight, hotel transfer, and a free first evening on the beach.' },
        { day: 4, title: 'Phi Phi islands', detail: 'Full day speedboat trip with snorkelling stops and lunch on board.' },
        { day: 5, title: 'Phuket free day', detail: 'Old town, a massage, or nothing at all.' },
        { day: 6, title: 'Ferry to Krabi', detail: 'Ferry crossing to Krabi and check-in at Ao Nang.' },
        { day: 7, title: 'Four Islands tour', detail: 'Longtail boat to Tup, Chicken, Poda and Phra Nang beaches.' },
        { day: 8, title: 'Elephant sanctuary', detail: 'Sanctuary visit in the morning, with feeding and bathing. No riding. Afternoon free.' },
        { day: 9, title: 'Fly home', detail: 'Transfer to Krabi airport.' },
      ],
    },
  ],
  activities: [
    { id: 'phi-phi', name: 'Phi Phi islands by speedboat', description: 'Maya Bay, Pileh Lagoon, snorkelling stops and lunch on board. A full day out.', indicativePrice: 3400, childPrice: 2600, audience: 'both', durationHours: 9 },
    { id: 'james-bond', name: 'James Bond Island sea canoe', description: 'Phang Nga Bay by longtail boat, with canoeing through the limestone caves.', indicativePrice: 3600, childPrice: 2800, audience: 'both', durationHours: 8 },
    { id: 'coral-island', name: 'Coral Island with lunch', description: 'Speedboat from Pattaya to Koh Larn, with beach time and a seafood lunch.', indicativePrice: 2200, childPrice: 1700, audience: 'both', durationHours: 7 },
    { id: 'grand-palace', name: 'Grand Palace and Wat Pho tour', description: 'Guided half day covering the two principal temples in the old city.', indicativePrice: 2600, childPrice: 1900, audience: 'both', durationHours: 5 },
    { id: 'floating-market', name: 'Floating market and railway market', description: 'Early start to Damnoen Saduak and Maeklong. Departure is around 6am.', indicativePrice: 2800, childPrice: 2200, audience: 'both', durationHours: 7 },
    { id: 'river-cruise', name: 'Chao Phraya dinner cruise', description: 'Buffet dinner on the river, with the riverside temples lit.', indicativePrice: 2900, childPrice: 2200, audience: 'both', durationHours: 3 },
    { id: 'cooking-class', name: 'Thai cooking class', description: 'A market visit followed by preparing and eating four dishes. Half day.', indicativePrice: 2500, childPrice: 2000, audience: 'both', durationHours: 4 },
    { id: 'muay-thai', name: 'Muay Thai live match', description: 'Ringside seats at a competitive stadium rather than a tourist show.', indicativePrice: 2700, audience: 'adult', durationHours: 3 },
    { id: 'elephant-sanctuary', name: 'Ethical elephant sanctuary', description: 'Feeding and bathing at a sanctuary that does not offer riding. Half day.', indicativePrice: 4200, childPrice: 3300, audience: 'both', durationHours: 5 },
    { id: 'safari-world', name: 'Safari World and Marine Park', description: 'Drive through safari with dolphin and sea lion shows. A full day.', indicativePrice: 3100, childPrice: 2500, audience: 'kids', durationHours: 8 },
    { id: 'fantasea', name: 'Phuket FantaSea show with dinner', description: 'A large theatrical culture show with a buffet dinner.', indicativePrice: 3300, childPrice: 2700, audience: 'kids', durationHours: 4 },
    { id: 'nong-nooch', name: 'Nong Nooch Tropical Garden', description: 'Botanical gardens with a culture show and an elephant show, near Pattaya.', indicativePrice: 1900, childPrice: 1500, audience: 'kids', durationHours: 5 },
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
      note: 'Return economy from a metro. Kolkata and Chennai are usually cheapest, Delhi the most expensive.',
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
 * To launch Malaysia / Singapore / Vietnam: write one more object like the two
 * above, push it into this array, set enabled: true. Routes, cards, the plan
 * form and the estimator all pick it up automatically.
 */
export const destinations: Destination[] = [dubai, thailand];

export const liveDestinations = destinations.filter((d) => d.enabled);

export function getDestination(slug: string | null | undefined): Destination | undefined {
  if (!slug) return undefined;
  return liveDestinations.find((d) => d.slug === slug.toLowerCase());
}

export function seasonForMonth(destination: Destination, month: number) {
  return (
    destination.pricing.seasons.find((s) => s.months.includes(month)) ??
    destination.pricing.seasons.find((s) => s.label === 'shoulder') ??
    destination.pricing.seasons[0]
  );
}
