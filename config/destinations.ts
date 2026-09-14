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
    'Three and a half hours from Mumbai, everyone speaks Hindi or English, and there is Indian food on every street. If you have never flown out of India before, Dubai is the softest possible landing — and it still looks spectacular in every photo you send home.',
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
    'Dubai is expensive if you eat where the tourists eat and cheap if you eat where the workers eat. Budget roughly 2,000 to 3,000 rupees a day for food and local travel.',
  tiers: [
    {
      id: 'essentials',
      name: 'Dubai Essentials',
      days: 5,
      nights: 4,
      fromPricePerPerson: 42000,
      blurb: 'The classic Dubai run. Everything you have seen in photos, none of the filler.',
      highlights: [
        '4-star hotel near the Metro, twin sharing',
        'Desert safari with BBQ dinner',
        'Burj Khalifa, levels 124 and 125',
        'Half-day Dubai city tour',
        'All airport and activity transfers',
      ],
      itinerary: [
        { day: 1, title: 'Land in Dubai', detail: 'Airport pickup in a private car, hotel check-in, and an easy evening walk around Dubai Marina to get your bearings.' },
        { day: 2, title: 'Old Dubai, then Downtown', detail: 'Half-day city tour through the spice and gold souks and across the creek by abra. Evening at Dubai Mall for the fountain show.' },
        { day: 3, title: 'Desert day', detail: 'Free morning. Afternoon pickup for dune bashing, camel photos, henna, a belly dance show and BBQ dinner under the lights. Back by 9:30pm.' },
        { day: 4, title: 'Burj Khalifa and the beach', detail: 'Morning at JBR beach. Timed-entry tickets for Burj Khalifa at sunset, which is the slot everyone wants and nobody books in time.' },
        { day: 5, title: 'Fly home', detail: 'Late checkout where the hotel allows it, then airport drop with enough buffer for the duty-free run.' },
      ],
    },
    {
      id: 'complete',
      name: 'Dubai Complete',
      days: 7,
      nights: 6,
      fromPricePerPerson: 61000,
      blurb: 'Two extra days is the difference between seeing Dubai and rushing it.',
      recommended: true,
      highlights: [
        'Everything in Essentials',
        'Full-day Abu Dhabi with the Grand Mosque',
        'Marina dhow cruise with dinner',
        'One theme park or waterpark of your choice',
        'A genuinely free day to do nothing',
      ],
      itinerary: [
        { day: 1, title: 'Land in Dubai', detail: 'Private airport pickup, check-in, and a slow first evening at the Marina.' },
        { day: 2, title: 'Old Dubai', detail: 'Souks, the creek crossing by abra, and Al Fahidi lanes. Evening free.' },
        { day: 3, title: 'Desert day', detail: 'Afternoon desert safari with dune bashing, BBQ dinner and the show.' },
        { day: 4, title: 'Abu Dhabi', detail: 'Full day out: Sheikh Zayed Grand Mosque, the Corniche and Qasr Al Watan. Long day, worth it.' },
        { day: 5, title: 'Your pick', detail: 'Theme park or waterpark day — Atlantis Aquaventure, IMG Worlds or Global Village, whichever you chose when you booked.' },
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
      blurb: 'Dubai Complete, plus two nights actually staying in Abu Dhabi instead of day-tripping it.',
      highlights: [
        'Everything in Complete',
        '2 nights in Abu Dhabi, 5 in Dubai',
        'Louvre Abu Dhabi and Ferrari World',
        'Intercity transfers by private car',
        'Works well for families with kids under 12',
      ],
      itinerary: [
        { day: 1, title: 'Land in Dubai', detail: 'Private airport pickup and check-in.' },
        { day: 2, title: 'Old Dubai', detail: 'Souks, creek and Al Fahidi. Evening at the fountain show.' },
        { day: 3, title: 'Desert day', detail: 'Afternoon safari, BBQ dinner and the show.' },
        { day: 4, title: 'Burj Khalifa and the beach', detail: 'JBR beach morning, Burj Khalifa at sunset, dhow cruise dinner.' },
        { day: 5, title: 'Move to Abu Dhabi', detail: 'Private car down, check in, and the Grand Mosque in the late afternoon light.' },
        { day: 6, title: 'Abu Dhabi on Yas Island', detail: 'Ferrari World or Warner Bros World, then the Corniche in the evening.' },
        { day: 7, title: 'Back to Dubai', detail: 'Louvre Abu Dhabi in the morning, drive back, last evening for shopping.' },
        { day: 8, title: 'Fly home', detail: 'Airport drop.' },
      ],
    },
  ],
  activities: [
    { id: 'desert-safari', name: 'Desert safari with BBQ dinner', description: 'Dune bashing, camel ride, henna, live show and a buffet dinner in the sand.', indicativePrice: 3200, childPrice: 2600, audience: 'both', durationHours: 6 },
    { id: 'burj-khalifa', name: 'Burj Khalifa, levels 124 and 125', description: 'Timed entry. Sunset slots sell out weeks ahead, so we book early.', indicativePrice: 3800, childPrice: 3000, audience: 'both', durationHours: 2 },
    { id: 'abu-dhabi-tour', name: 'Abu Dhabi day tour', description: 'Sheikh Zayed Grand Mosque, Qasr Al Watan and the Corniche, with lunch.', indicativePrice: 4500, childPrice: 3400, audience: 'both', durationHours: 10 },
    { id: 'dhow-cruise', name: 'Marina dhow cruise with dinner', description: 'Two hours on the water with a buffet and the skyline lit up.', indicativePrice: 2400, childPrice: 1800, audience: 'both', durationHours: 3 },
    { id: 'museum-future', name: 'Museum of the Future', description: 'The building everyone photographs. Book ahead or you will not get in.', indicativePrice: 4200, childPrice: 3200, audience: 'both', durationHours: 2 },
    { id: 'dubai-frame', name: 'Dubai Frame', description: 'Old city on one side, new city on the other. Quick and cheap.', indicativePrice: 1200, childPrice: 900, audience: 'both', durationHours: 2 },
    { id: 'marina-yacht', name: 'Private yacht hour on the Marina', description: 'Two hours on a shared or private yacht. Good for couples.', indicativePrice: 6000, audience: 'adult', durationHours: 2 },
    { id: 'balloon', name: 'Sunrise hot air balloon over the desert', description: 'Early start, falcon show on landing, breakfast in a desert camp.', indicativePrice: 9500, audience: 'adult', durationHours: 5 },
    { id: 'aquaventure', name: 'Atlantis Aquaventure waterpark', description: 'The biggest waterpark in the region. A full day, easily.', indicativePrice: 6500, childPrice: 5200, audience: 'both', durationHours: 8 },
    { id: 'img-worlds', name: 'IMG Worlds of Adventure', description: 'Indoor theme park, so it works even in peak summer heat.', indicativePrice: 4300, childPrice: 3600, audience: 'kids', durationHours: 7 },
    { id: 'ski-dubai', name: 'Ski Dubai snow park', description: 'Real snow inside a mall. Kids lose their minds. Jackets included.', indicativePrice: 3600, childPrice: 3100, audience: 'kids', durationHours: 3 },
    { id: 'miracle-garden', name: 'Dubai Miracle Garden', description: 'A hundred and fifty million flowers. Photo heaven.', indicativePrice: 1900, childPrice: 1500, audience: 'kids', durationHours: 3, note: 'Seasonal, open roughly November to May only' },
  ],
  included: [
    'Hotel stay on twin sharing with daily breakfast',
    'Airport pickup and drop in a private vehicle',
    'Return transfers for every activity in your plan',
    'UAE tourist visa — application, follow-up and fees',
    'Every activity you pick, pre-booked with tickets in your hand before you fly',
    'Basic travel insurance for the trip dates',
    'Our WhatsApp number, answered while you are there, including at 2am',
  ],
  notIncluded: [
    'International flights — quoted separately on your actual dates',
    'Lunches and dinners, except where an activity includes a meal',
    'Anything personal: shopping, laundry, minibar, tips',
    'Activities you decide to add after you land',
    'Tourism Dirham fee paid at hotel check-in, roughly ₹350 to ₹500 per room per night',
    'Peak-date surcharges over New Year and Eid — we tell you before you pay, never after',
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
      { label: 'peak', months: [11, 12, 1, 2, 3], multiplier: 1.25, note: 'Perfect weather. Everyone knows it, so hotels cost the most.' },
      { label: 'shoulder', months: [4, 10], multiplier: 1.05, note: 'Warm but comfortable, and noticeably cheaper than peak.' },
      { label: 'off', months: [5, 6, 7, 8, 9], multiplier: 0.85, note: 'Hot outside, but everything worth doing is indoors and prices drop a lot.' },
    ],
  },
  brochure: '/brochures/dubai-guide.pdf',
  enabled: true,
};

const thailand: Destination = {
  slug: 'thailand',
  name: 'Thailand',
  country: 'Thailand',
  tagline: 'Cheap, warm, friendly, and no visa to worry about.',
  heroImage: '/images/thailand-hero.jpg',
  heroAlt: 'Longtail boats on a limestone bay in southern Thailand',
  cardImage: '/images/thailand-card.jpg',
  summary:
    'Your money goes twice as far as it does in Dubai, and Indian passport holders walk in without a visa. Bangkok for the city and the food, the islands for the part you actually came for. It is the trip most people take second, and plenty take first.',
  bestMonthsSummary: 'November to February is the sweet spot. March and October are fine and cheaper.',
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
      'Thailand Digital Arrival Card, filled online before you fly — we do this for you',
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
    'Thailand is genuinely cheap on the ground. Around 1,500 rupees a day covers food and local travel comfortably, less if you eat street food.',
  tiers: [
    {
      id: 'bangkok-pattaya',
      name: 'Bangkok & Pattaya',
      days: 6,
      nights: 5,
      fromPricePerPerson: 34000,
      blurb: 'The cheapest way to see Thailand properly. City, beach, done.',
      highlights: [
        '3 nights Bangkok, 2 nights Pattaya',
        'Grand Palace and Wat Pho tour',
        'Coral Island day trip with lunch',
        'Floating market morning',
        'All intercity and activity transfers',
      ],
      itinerary: [
        { day: 1, title: 'Land in Bangkok', detail: 'Airport pickup, hotel check-in, and an evening walk through a night market to eat your first proper Thai meal.' },
        { day: 2, title: 'Old Bangkok', detail: 'Grand Palace, Wat Pho and the reclining Buddha in the morning before it gets hot. Afternoon free, evening on the Chao Phraya.' },
        { day: 3, title: 'Floating market, then Pattaya', detail: 'Early start for Damnoen Saduak floating market and the railway market, then the drive down to Pattaya.' },
        { day: 4, title: 'Coral Island', detail: 'Speedboat out to Koh Larn for the day — swimming, lunch on the beach, back by evening.' },
        { day: 5, title: 'Pattaya to Bangkok', detail: 'Slow morning, drive back to Bangkok, last evening for shopping at Chatuchak or MBK.' },
        { day: 6, title: 'Fly home', detail: 'Airport drop with buffer.' },
      ],
    },
    {
      id: 'bangkok-phuket',
      name: 'Bangkok & Phuket',
      days: 7,
      nights: 6,
      fromPricePerPerson: 47000,
      blurb: 'Skip Pattaya, fly south. The islands are why people come back.',
      recommended: true,
      highlights: [
        '2 nights Bangkok, 4 nights Phuket',
        'Domestic flight Bangkok to Phuket included',
        'Phi Phi islands by speedboat',
        'James Bond Island sea canoe tour',
        'Beachfront or near-beach hotel',
      ],
      itinerary: [
        { day: 1, title: 'Land in Bangkok', detail: 'Pickup, check-in, night market for dinner.' },
        { day: 2, title: 'Bangkok in one day', detail: 'Grand Palace and Wat Pho in the morning, Chao Phraya dinner cruise in the evening.' },
        { day: 3, title: 'Fly to Phuket', detail: 'Short domestic hop, transfer to your hotel, sunset at Patong or Kata depending on where you are staying.' },
        { day: 4, title: 'Phi Phi islands', detail: 'Full-day speedboat trip — Maya Bay, Pileh Lagoon, snorkelling stops and lunch on the boat.' },
        { day: 5, title: 'Phang Nga Bay', detail: 'James Bond Island and sea canoeing through the limestone caves. Calmer day than Phi Phi.' },
        { day: 6, title: 'Beach day', detail: 'Nothing scheduled. Beach, massage, old town, whatever you feel like.' },
        { day: 7, title: 'Fly home', detail: 'Phuket to Bangkok or a direct international flight, depending on what we ticket.' },
      ],
    },
    {
      id: 'bangkok-phuket-krabi',
      name: 'Bangkok, Phuket & Krabi',
      days: 9,
      nights: 8,
      fromPricePerPerson: 68000,
      blurb: 'For people who would rather do one long trip properly than two short ones.',
      highlights: [
        '2 nights Bangkok, 3 Phuket, 3 Krabi',
        'Ferry transfer between the islands',
        'Four Islands tour from Krabi',
        'Elephant sanctuary visit, no riding',
        'Two full unscheduled days',
      ],
      itinerary: [
        { day: 1, title: 'Land in Bangkok', detail: 'Pickup, check-in, night market.' },
        { day: 2, title: 'Bangkok in one day', detail: 'Grand Palace, Wat Pho, evening river cruise.' },
        { day: 3, title: 'Fly to Phuket', detail: 'Domestic flight, transfer, easy first evening on the beach.' },
        { day: 4, title: 'Phi Phi islands', detail: 'Full-day speedboat trip with snorkelling and lunch.' },
        { day: 5, title: 'Phuket free day', detail: 'Old town, a massage, or absolutely nothing.' },
        { day: 6, title: 'Ferry to Krabi', detail: 'Scenic ferry across, check in at Ao Nang.' },
        { day: 7, title: 'Four Islands tour', detail: 'Longtail boat to Tup, Chicken, Poda and Phra Nang. The best beach day of the trip.' },
        { day: 8, title: 'Elephant sanctuary', detail: 'Ethical sanctuary in the morning — feeding and bathing, no riding. Afternoon free.' },
        { day: 9, title: 'Fly home', detail: 'Krabi airport drop.' },
      ],
    },
  ],
  activities: [
    { id: 'phi-phi', name: 'Phi Phi islands by speedboat', description: 'Maya Bay, Pileh Lagoon, snorkelling and lunch on board. Long, brilliant day.', indicativePrice: 3400, childPrice: 2600, audience: 'both', durationHours: 9 },
    { id: 'james-bond', name: 'James Bond Island sea canoe', description: 'Phang Nga Bay by longtail, canoeing through limestone caves.', indicativePrice: 3600, childPrice: 2800, audience: 'both', durationHours: 8 },
    { id: 'coral-island', name: 'Coral Island with lunch', description: 'Speedboat from Pattaya to Koh Larn, beach time and a seafood lunch.', indicativePrice: 2200, childPrice: 1700, audience: 'both', durationHours: 7 },
    { id: 'grand-palace', name: 'Grand Palace and Wat Pho tour', description: 'Guided half day through the two temples everyone means when they say Bangkok.', indicativePrice: 2600, childPrice: 1900, audience: 'both', durationHours: 5 },
    { id: 'floating-market', name: 'Floating market and railway market', description: 'Early start to Damnoen Saduak and Maeklong. Very photogenic, very early.', indicativePrice: 2800, childPrice: 2200, audience: 'both', durationHours: 7 },
    { id: 'river-cruise', name: 'Chao Phraya dinner cruise', description: 'Buffet dinner on the river with the temples lit up.', indicativePrice: 2900, childPrice: 2200, audience: 'both', durationHours: 3 },
    { id: 'cooking-class', name: 'Thai cooking class', description: 'Market visit, then cook four dishes and eat them. Half day.', indicativePrice: 2500, childPrice: 2000, audience: 'both', durationHours: 4 },
    { id: 'muay-thai', name: 'Muay Thai live match', description: 'Ringside at a proper stadium, not a tourist show.', indicativePrice: 2700, audience: 'adult', durationHours: 3 },
    { id: 'elephant-sanctuary', name: 'Ethical elephant sanctuary', description: 'Feeding and bathing at a no-riding sanctuary. Half day.', indicativePrice: 4200, childPrice: 3300, audience: 'both', durationHours: 5 },
    { id: 'safari-world', name: 'Safari World and Marine Park', description: 'Drive-through safari plus dolphin and sea lion shows. Full day for kids.', indicativePrice: 3100, childPrice: 2500, audience: 'kids', durationHours: 8 },
    { id: 'fantasea', name: 'Phuket FantaSea show with dinner', description: 'Big theatrical culture show with a buffet. Kids love it.', indicativePrice: 3300, childPrice: 2700, audience: 'kids', durationHours: 4 },
    { id: 'nong-nooch', name: 'Nong Nooch Tropical Garden', description: 'Gardens, a culture show and an elephant show near Pattaya.', indicativePrice: 1900, childPrice: 1500, audience: 'kids', durationHours: 5 },
  ],
  included: [
    'Hotel stay on twin sharing with daily breakfast',
    'Airport pickup and drop in a private vehicle',
    'All intercity transfers — flights, ferries or private car as the itinerary needs',
    'Return transfers for every activity in your plan',
    'Thailand Digital Arrival Card filled and submitted for you',
    'Every activity you pick, pre-booked and confirmed before you fly',
    'Basic travel insurance for the trip dates',
    'Our WhatsApp number, answered while you are there, including at 2am',
  ],
  notIncluded: [
    'International flights — quoted separately on your actual dates',
    'Lunches and dinners, except where an activity includes a meal',
    'Anything personal: shopping, laundry, minibar, tips',
    'Activities you decide to add after you land',
    'The 300 baht tourist fee, if and when Thailand starts collecting it',
    'Peak-date surcharges over Christmas, New Year and Songkran — we tell you before you pay',
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
      { label: 'peak', months: [11, 12, 1, 2], multiplier: 1.22, note: 'Dry, warm and not humid. The best weather and the highest prices.' },
      { label: 'shoulder', months: [3, 4, 10], multiplier: 1.05, note: 'Hotter, still mostly dry. Songkran in April is chaos in the best way.' },
      { label: 'off', months: [5, 6, 7, 8, 9], multiplier: 0.85, note: 'Monsoon, but usually short sharp afternoon rain rather than all-day. Prices drop sharply.' },
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
