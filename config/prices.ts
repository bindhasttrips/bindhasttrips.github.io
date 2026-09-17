/**
 * THE RATE CARD. Every number that affects a price is in this file.
 *
 * ----------------------------------------------------------------------
 * THE ACTIVITY PRICES BELOW ARE PLACEHOLDERS, NOT RESEARCHED RATES.
 * They are in the right ballpark and internally consistent, which is
 * enough to exercise the system end to end. They are not what your
 * suppliers charge. Replace them before quoting anyone for real.
 * ----------------------------------------------------------------------
 *
 * Nothing else in the codebase holds a price. Change a figure here and it
 * flows through the activity cards, the estimate and the sheet.
 */

/* ============================================================
 * 1. MARGIN AND SPREAD
 * ============================================================ */

/**
 * Your margin on the land package: hotels, transfers, visa and activities.
 * 1.2 is twenty percent on top of cost. Flights are passed through at cost
 * and are never marked up, because the customer can check a fare in seconds.
 */
export const MARGIN = 1.2;

/**
 * Half width of the quoted range. 0.12 shows a figure twelve percent either
 * side of the midpoint. Widen it if you are quoting on thin information.
 */
export const ESTIMATE_SPREAD = 0.12;

/* ============================================================
 * 2. ACCOMMODATION
 * ============================================================ */

/** Applied to the nightly land rate. 1.0 is the baseline four star price. */
export const STAY_MULTIPLIERS: Record<string, number> = {
  hotel3: 0.78,
  hotel4: 1.0,
  hotel5: 1.45,
  apartment: 0.9,
  value: 0.95,
};

/* ============================================================
 * 3. LAND AND FLIGHTS, PER DESTINATION
 * ============================================================ */

export interface SeasonRate {
  /** 1 = January through 12 = December. */
  months: number[];
  /** Applied to the nightly land rate in those months. */
  multiplier: number;
}

export interface RateCard {
  /** Per person per night, twin sharing, four star, shoulder season. */
  landPerPersonPerNight: number;
  /** Children pay this fraction of the adult land rate. */
  childFactor: number;
  /** Visa handling, arrival transfers and insurance, per head. */
  fixedPerPerson: number;
  /** Return economy airfare. Quoted at cost, never marked up. */
  flight: { low: number; high: number };
  seasons: { peak: SeasonRate; shoulder: SeasonRate; off: SeasonRate };
}

export const RATE_CARDS: Record<string, RateCard> = {
  uae: {
    landPerPersonPerNight: 8500,
    childFactor: 0.6,
    fixedPerPerson: 9500,
    flight: { low: 18000, high: 34000 },
    seasons: {
      peak: { months: [11, 12, 1, 2, 3], multiplier: 1.25 },
      shoulder: { months: [4, 10], multiplier: 1.05 },
      off: { months: [5, 6, 7, 8, 9], multiplier: 0.85 },
    },
  },
  thailand: {
    landPerPersonPerNight: 6500,
    childFactor: 0.55,
    fixedPerPerson: 6000,
    flight: { low: 16000, high: 30000 },
    seasons: {
      peak: { months: [11, 12, 1, 2], multiplier: 1.22 },
      shoulder: { months: [3, 4, 10], multiplier: 1.05 },
      off: { months: [5, 6, 7, 8, 9], multiplier: 0.85 },
    },
  },
};

/* ============================================================
 * 4. ACTIVITY PRICES
 * ============================================================ */

/**
 * Per person, in rupees. Four states, and they are not the same thing:
 *
 *   { adult: 3200, child: 2600 }   both set
 *   { adult: 3800 }                children pay the same
 *   { adult: 0 }                   genuinely no ticket
 *   { adult: null }                not priced yet
 *
 * null shows no price to the customer and is excluded from the estimate,
 * rather than counted as free. Fill one in and it works immediately.
 */
export interface ActivityPrice {
  adult: number | null;
  child?: number | null;
}

export const ACTIVITY_PRICES: Record<string, ActivityPrice> = {

  // ---------- UAE / Dubai ----------
  'desert-safari':             { adult: 3200, child: 2600 },   // Desert safari with BBQ dinner
  'desert-camel-trek':         { adult: 3600, child: 2900 },   // Sunset camel trek, no dune bashing
  'burj-khalifa':              { adult: 3800, child: 3000 },   // Burj Khalifa, levels 124 and 125
  'burj-khalifa-148':          { adult: 8500, child: 6800 },   // Burj Khalifa, level 148 SKY
  'palm-view':                 { adult: 2200, child: 1700 },   // The View at the Palm
  'ain-dubai':                 { adult: 3400, child: 2600 },   // Ain Dubai observation wheel
  'dubai-city-tour':           { adult: 2200, child: 1700 },   // Half day Dubai city tour
  'old-dubai-souks':           { adult: 1400, child: 1100 },   // Gold and spice souks with abra crossing
  'dubai-food-tour':           { adult: 4500, child: 3500 },   // Old Dubai evening food walk
  'dhow-cruise':               { adult: 2400, child: 1800 },   // Marina dhow cruise with dinner
  'museum-future':             { adult: 4200, child: 3200 },   // Museum of the Future
  'dubai-frame':               { adult: 1200, child: 900 },   // Dubai Frame
  'dubai-fountain-boat':       { adult: 1100, child: 900 },   // Dubai Fountain lake ride
  'la-mer-beach':              { adult: 0, child: 0 },   // Beach day at La Mer or Kite Beach
  'kite-watersports':          { adult: 4800 },   // Jet ski with the Burj Al Arab behind you
  'aquaventure':               { adult: 6500, child: 5200 },   // Atlantis Aquaventure waterpark
  'lost-chambers':             { adult: 2600, child: 2100 },   // Lost Chambers Aquarium
  'dubai-aquarium':            { adult: 2400, child: 1900 },   // Dubai Aquarium and Underwater Zoo
  'green-planet':              { adult: 3200, child: 2600 },   // The Green Planet indoor rainforest
  'img-worlds':                { adult: 4300, child: 3600 },   // IMG Worlds of Adventure
  'ski-dubai':                 { adult: 3600, child: 3100 },   // Ski Dubai snow park
  'dubai-safari-park':         { adult: 1800, child: 1300 },   // Dubai Safari Park
  'miracle-garden':            { adult: 1900, child: 1500 },   // Dubai Miracle Garden
  'global-village':            { adult: 1100, child: 900 },   // Global Village
  'marina-yacht':              { adult: 6000 },   // Shared yacht cruise on the Marina
  'balloon':                   { adult: 9500 },   // Sunrise hot air balloon over the desert
  'skydive':                   { adult: 22000 },   // Skydive over the Palm
  'desert-quad':               { adult: 4200 },   // Quad biking in the desert
  'helicopter-tour':           { adult: 14500 },   // Helicopter tour over Dubai
  'marina-brunch':             { adult: 5500 },   // Weekend brunch at a Marina restaurant
  'nightlife-marina':          { adult: 4500 },   // Night out at a Marina club or lounge
  'gold-souk-shopping':        { adult: 1800 },   // Guided gold and textile shopping
  'spa-hammam':                { adult: 4800 },   // Traditional hammam and spa session

  // ---------- UAE / Abu Dhabi ----------
  'abu-dhabi-tour':            { adult: 4500, child: 3400 },   // Abu Dhabi day tour from Dubai
  'grand-mosque':              { adult: 1500, child: 1100 },   // Sheikh Zayed Grand Mosque
  'louvre-abu-dhabi':          { adult: 2900, child: 2200 },   // Louvre Abu Dhabi
  'qasr-al-watan':             { adult: 2600, child: 2000 },   // Qasr Al Watan presidential palace
  'ferrari-world':             { adult: 6200, child: 5200 },   // Ferrari World
  'warner-bros':               { adult: 5800, child: 4900 },   // Warner Bros World Abu Dhabi
  'yas-waterworld':            { adult: 5400, child: 4600 },   // Yas Waterworld
  'emirates-palace-tea':       { adult: 4200, child: 3200 },   // Afternoon tea at Emirates Palace

  // ---------- Thailand / Bangkok ----------
  'grand-palace':              { adult: 2600, child: 1900 },   // Grand Palace and Wat Pho
  'wat-arun':                  { adult: 1400, child: 1000 },   // Wat Arun at sunset
  'floating-market':           { adult: 2800, child: 2200 },   // Floating market and railway market
  'river-cruise':              { adult: 2900, child: 2200 },   // Chao Phraya dinner cruise
  'cooking-class-bkk':         { adult: 2500, child: 2000 },   // Thai cooking class in Bangkok
  'street-food-tour':          { adult: 2400, child: 1900 },   // Chinatown street food walk
  'safari-world':              { adult: 3100, child: 2500 },   // Safari World and Marine Park
  'ayutthaya':                 { adult: 3400, child: 2700 },   // Ayutthaya day trip
  'muay-thai':                 { adult: 2700 },   // Muay Thai at Rajadamnern
  'rooftop-bar':               { adult: 3200 },   // Rooftop bar evening
  'chatuchak':                 { adult: 900, child: 700 },   // Chatuchak weekend market
  'thai-massage-bkk':          { adult: 1200, child: 900 },   // Traditional Thai massage

  // ---------- Thailand / Pattaya ----------
  'coral-island':              { adult: 2200, child: 1700 },   // Coral Island with lunch
  'nong-nooch':                { adult: 1900, child: 1500 },   // Nong Nooch Tropical Garden
  'sanctuary-truth':           { adult: 1400, child: 1100 },   // Sanctuary of Truth
  'alcazar-show':              { adult: 1800, child: 1400 },   // Alcazar cabaret show
  'underwater-world':          { adult: 1700, child: 1300 },   // Underwater World Pattaya
  'pattaya-floating-market':   { adult: 1200, child: 900 },   // Pattaya Floating Market
  'walking-street':            { adult: 0 },   // Walking Street evening
  'pattaya-speedboat-party':   { adult: 9500 },   // Private speedboat day for a group

  // ---------- Thailand / Chiang Mai ----------
  'elephant-sanctuary-cm':     { adult: 4200, child: 3300 },   // Ethical elephant sanctuary
  'doi-suthep':                { adult: 2200, child: 1700 },   // Doi Suthep temple
  'chiang-mai-old-city':       { adult: 1600, child: 1200 },   // Old city temple walk
  'cooking-class-cm':          { adult: 2600, child: 2100 },   // Northern Thai cooking class
  'sticky-waterfall':          { adult: 2400, child: 1900 },   // Bua Thong sticky waterfall
  'night-bazaar':              { adult: 0, child: 0 },   // Chiang Mai night bazaar
  'doi-inthanon':              { adult: 3600, child: 2900 },   // Doi Inthanon national park
  'lantern-release':           { adult: 3800, child: 3000 },   // Lantern release evening
  'chiang-mai-spa':            { adult: 3400 },   // Half day spa in the hills

  // ---------- Thailand / Phuket ----------
  'phi-phi':                   { adult: 3400, child: 2600 },   // Phi Phi islands by speedboat
  'james-bond':                { adult: 3600, child: 2800 },   // James Bond Island sea canoe
  'fantasea':                  { adult: 3300, child: 2700 },   // Phuket FantaSea show with dinner
  'old-town-phuket':           { adult: 1600, child: 1200 },   // Phuket Old Town walking tour
  'big-buddha':                { adult: 1500, child: 1200 },   // Big Buddha and Karon viewpoint
  'phuket-spa':                { adult: 3200 },   // Beachfront spa session
  'surf-lesson':               { adult: 2800 },   // Beginner surf lesson at Kata
  'patong-nightlife':          { adult: 0 },   // Patong and Bangla Road evening
  'phuket-yacht':              { adult: 12000, child: 9000 },   // Private catamaran day charter
  'phuket-cabaret':            { adult: 2400, child: 1900 },   // Simon Cabaret show

  // ---------- Thailand / Krabi ----------
  'four-islands':              { adult: 2900, child: 2300 },   // Four Islands tour by longtail
  'railay-beach':              { adult: 2200, child: 1700 },   // Railay Beach day trip
  'emerald-pool':              { adult: 2600, child: 2000 },   // Emerald Pool and hot springs
  'tiger-cave':                { adult: 1400 },   // Tiger Cave Temple climb
  'krabi-sunset-cruise':       { adult: 3100, child: 2400 },   // Sunset dinner cruise from Ao Nang
  'krabi-kayak':               { adult: 2400, child: 1900 },   // Mangrove kayaking at Ao Thalane
  'krabi-cooking':             { adult: 2500, child: 2000 },   // Southern Thai cooking class

  // ---------- Thailand / Koh Samui ----------
  'angthong':                  { adult: 3800, child: 3000 },   // Ang Thong marine park day trip
  'samui-big-buddha':          { adult: 1600, child: 1200 },   // Big Buddha and island temples
  'samui-spa':                 { adult: 3600 },   // Beachfront spa half day
  'samui-snorkel':             { adult: 4200, child: 3400 },   // Koh Tao and Koh Nang Yuan snorkelling
  'samui-fisherman':           { adult: 0, child: 0 },   // Fisherman Village night market
  'samui-safari':              { adult: 3200, child: 2600 },   // Island 4x4 jungle safari
  'samui-cooking':             { adult: 2600, child: 2100 },   // Island cooking class
  'samui-sunset-sail':         { adult: 4400 },   // Sunset catamaran sail
};

