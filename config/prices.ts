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
  'malaysia': {
    landPerPersonPerNight: 5200,
    childFactor: 0.55,
    fixedPerPerson: 5500,
    flight: { low: 18000, high: 32000 },
    seasons: {
      peak: { months: [12, 1, 2, 6, 7], multiplier: 1.18 },
      shoulder: { months: [3, 4, 5, 8], multiplier: 1.03 },
      off: { months: [9, 10, 11], multiplier: 0.86 },
    },
  },
  'maldives': {
    landPerPersonPerNight: 11000,
    childFactor: 0.6,
    fixedPerPerson: 7000,
    flight: { low: 22000, high: 42000 },
    seasons: {
      peak: { months: [12, 1, 2, 3], multiplier: 1.3 },
      shoulder: { months: [4, 11], multiplier: 1.05 },
      off: { months: [5, 6, 7, 8, 9, 10], multiplier: 0.8 },
    },
  },
  'nepal': {
    landPerPersonPerNight: 3800,
    childFactor: 0.5,
    fixedPerPerson: 3500,
    flight: { low: 12000, high: 24000 },
    seasons: {
      peak: { months: [10, 11, 3, 4], multiplier: 1.2 },
      shoulder: { months: [2, 5, 12], multiplier: 1.03 },
      off: { months: [6, 7, 8, 9], multiplier: 0.82 },
    },
  },
  'mauritius': {
    landPerPersonPerNight: 9500,
    childFactor: 0.6,
    fixedPerPerson: 8000,
    flight: { low: 38000, high: 68000 },
    seasons: {
      peak: { months: [11, 12, 1], multiplier: 1.25 },
      shoulder: { months: [5, 6, 9, 10], multiplier: 1.04 },
      off: { months: [2, 3, 4, 7, 8], multiplier: 0.87 },
    },
  },
  'vietnam': {
    landPerPersonPerNight: 4800,
    childFactor: 0.55,
    fixedPerPerson: 6500,
    flight: { low: 24000, high: 44000 },
    seasons: {
      peak: { months: [12, 1, 2, 3], multiplier: 1.2 },
      shoulder: { months: [4, 8, 9, 10], multiplier: 1.04 },
      off: { months: [5, 6, 7, 11], multiplier: 0.85 },
    },
  },
  'sri-lanka': {
    landPerPersonPerNight: 4600,
    childFactor: 0.55,
    fixedPerPerson: 5000,
    flight: { low: 14000, high: 28000 },
    seasons: {
      peak: { months: [12, 1, 2, 3], multiplier: 1.22 },
      shoulder: { months: [4, 7, 8], multiplier: 1.04 },
      off: { months: [5, 6, 9, 10, 11], multiplier: 0.83 },
    },
  },
  'bali': {
    landPerPersonPerNight: 6200,
    childFactor: 0.55,
    fixedPerPerson: 7000,
    flight: { low: 32000, high: 58000 },
    seasons: {
      peak: { months: [7, 8, 12], multiplier: 1.28 },
      shoulder: { months: [4, 5, 6, 9], multiplier: 1.05 },
      off: { months: [1, 2, 3, 10, 11], multiplier: 0.85 },
    },
  },
  'azerbaijan': {
    landPerPersonPerNight: 6000,
    childFactor: 0.6,
    fixedPerPerson: 7000,
    flight: { low: 26000, high: 48000 },
    seasons: {
      peak: { months: [5, 6, 9, 10], multiplier: 1.2 },
      shoulder: { months: [4, 7, 8], multiplier: 1.04 },
      off: { months: [11, 12, 1, 2, 3], multiplier: 0.82 },
    },
  },
  'georgia': {
    landPerPersonPerNight: 5800,
    childFactor: 0.6,
    fixedPerPerson: 7000,
    flight: { low: 30000, high: 55000 },
    seasons: {
      peak: { months: [6, 7, 8, 9], multiplier: 1.22 },
      shoulder: { months: [5, 10], multiplier: 1.05 },
      off: { months: [11, 12, 1, 2, 3, 4], multiplier: 0.8 },
    },
  },
  'uzbekistan': {
    landPerPersonPerNight: 5400,
    childFactor: 0.6,
    fixedPerPerson: 6500,
    flight: { low: 26000, high: 46000 },
    seasons: {
      peak: { months: [4, 5, 9, 10], multiplier: 1.22 },
      shoulder: { months: [3, 6, 11], multiplier: 1.04 },
      off: { months: [7, 8, 12, 1, 2], multiplier: 0.82 },
    },
  },
  'egypt': {
    landPerPersonPerNight: 6400,
    childFactor: 0.6,
    fixedPerPerson: 7500,
    flight: { low: 34000, high: 62000 },
    seasons: {
      peak: { months: [11, 12, 1, 2, 3], multiplier: 1.22 },
      shoulder: { months: [4, 10], multiplier: 1.05 },
      off: { months: [5, 6, 7, 8, 9], multiplier: 0.8 },
    },
  },
  'oman': {
    landPerPersonPerNight: 7200,
    childFactor: 0.6,
    fixedPerPerson: 7500,
    flight: { low: 18000, high: 34000 },
    seasons: {
      peak: { months: [11, 12, 1, 2, 3], multiplier: 1.24 },
      shoulder: { months: [4, 10], multiplier: 1.05 },
      off: { months: [5, 6, 7, 8, 9], multiplier: 0.82 },
    },
  },
  'singapore': {
    landPerPersonPerNight: 11500,
    childFactor: 0.65,
    fixedPerPerson: 8500,
    flight: { low: 26000, high: 48000 },
    seasons: {
      peak: { months: [6, 7, 12], multiplier: 1.2 },
      shoulder: { months: [2, 3, 4, 5], multiplier: 1.04 },
      off: { months: [1, 8, 9, 10, 11], multiplier: 0.88 },
    },
  },
  'japan': {
    landPerPersonPerNight: 13000,
    childFactor: 0.7,
    fixedPerPerson: 11000,
    flight: { low: 48000, high: 88000 },
    seasons: {
      peak: { months: [3, 4, 10, 11], multiplier: 1.35 },
      shoulder: { months: [5, 6, 9], multiplier: 1.06 },
      off: { months: [1, 2, 7, 8, 12], multiplier: 0.85 },
    },
  },
  'south-korea': {
    landPerPersonPerNight: 11000,
    childFactor: 0.7,
    fixedPerPerson: 10500,
    flight: { low: 42000, high: 78000 },
    seasons: {
      peak: { months: [4, 5, 10, 11], multiplier: 1.28 },
      shoulder: { months: [6, 9], multiplier: 1.05 },
      off: { months: [1, 2, 3, 7, 8, 12], multiplier: 0.84 },
    },
  },
  'turkey': {
    landPerPersonPerNight: 8500,
    childFactor: 0.65,
    fixedPerPerson: 9000,
    flight: { low: 36000, high: 66000 },
    seasons: {
      peak: { months: [6, 7, 8, 9], multiplier: 1.25 },
      shoulder: { months: [4, 5, 10], multiplier: 1.05 },
      off: { months: [11, 12, 1, 2, 3], multiplier: 0.82 },
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

  // ---------- Malaysia ----------
  'my-petronas':               { adult: null, child: null },   // Petronas Towers skybridge
  'my-batu':                   { adult: null, child: null },   // Batu Caves
  'my-kl-food':                { adult: null, child: null },   // Jalan Alor street food walk
  'my-island-hop':             { adult: null, child: null },   // Langkawi island hopping
  'my-skycab':                 { adult: null, child: null },   // Langkawi SkyCab and sky bridge
  'my-penang-heritage':        { adult: null, child: null },   // Penang George Town walk

  // ---------- Maldives ----------
  'mv-sandbank':               { adult: null, child: null },   // Sandbank picnic
  'mv-snorkel':                { adult: null, child: null },   // Coral reef snorkelling trip
  'mv-dolphin':                { adult: null, child: null },   // Sunset dolphin cruise
  'mv-resort-day':             { adult: null, child: null },   // Resort day pass
  'mv-male-walk':              { adult: null, child: null },   // Male city walk
  'mv-seaplane':               { adult: null, child: null },   // Seaplane transfer

  // ---------- Nepal ----------
  'np-kathmandu-durbar':       { adult: null, child: null },   // Kathmandu Durbar Square and Swayambhu
  'np-pashupatinath':          { adult: null, child: null },   // Pashupatinath and Boudhanath
  'np-paragliding':            { adult: null, child: null },   // Paragliding over Pokhara
  'np-phewa':                  { adult: null, child: null },   // Phewa Lake and Peace Pagoda
  'np-sarangkot':              { adult: null, child: null },   // Sarangkot sunrise
  'np-chitwan':                { adult: null, child: null },   // Chitwan jeep safari

  // ---------- Mauritius ----------
  'mu-catamaran':              { adult: null, child: null },   // Catamaran to Ile aux Cerfs
  'mu-chamarel':               { adult: null, child: null },   // Chamarel coloured earth and waterfall
  'mu-dolphin-swim':           { adult: null, child: null },   // Swimming with dolphins
  'mu-port-louis':             { adult: null, child: null },   // Port Louis market and waterfront
  'mu-underwater':             { adult: null, child: null },   // Undersea walk
  'mu-botanical':              { adult: null, child: null },   // Pamplemousses botanical garden

  // ---------- Vietnam ----------
  'vn-halong':                 { adult: null, child: null },   // Ha Long Bay overnight cruise
  'vn-hanoi-street':           { adult: null, child: null },   // Hanoi old quarter food walk
  'vn-cuchi':                  { adult: null, child: null },   // Cu Chi tunnels
  'vn-mekong':                 { adult: null, child: null },   // Mekong Delta day trip
  'vn-hoian':                  { adult: null, child: null },   // Hoi An old town and lantern evening
  'vn-bana':                   { adult: null, child: null },   // Ba Na Hills and the Golden Bridge

  // ---------- Sri Lanka ----------
  'lk-sigiriya':               { adult: null, child: null },   // Sigiriya rock fortress
  'lk-tooth':                  { adult: null, child: null },   // Temple of the Tooth, Kandy
  'lk-train':                  { adult: null, child: null },   // Kandy to Ella train
  'lk-tea':                    { adult: null, child: null },   // Tea plantation and factory tour
  'lk-yala':                   { adult: null, child: null },   // Yala safari
  'lk-galle':                  { adult: null, child: null },   // Galle Fort walk

  // ---------- Bali ----------
  'id-ubud-terraces':          { adult: null, child: null },   // Tegallalang rice terraces and swing
  'id-monkey-temple':          { adult: null, child: null },   // Sacred Monkey Forest and Ubud palace
  'id-nusa-penida':            { adult: null, child: null },   // Nusa Penida day trip
  'id-beach-club':             { adult: null, child: null },   // Beach club day in Canggu
  'id-waterfalls':             { adult: null, child: null },   // Tegenungan and Tibumana waterfalls
  'id-cooking':                { adult: null, child: null },   // Balinese cooking class

  // ---------- Azerbaijan ----------
  'az-old-city':               { adult: null, child: null },   // Baku old city and Maiden Tower
  'az-mud-volcano':            { adult: null, child: null },   // Mud volcanoes and Gobustan
  'az-fire':                   { adult: null, child: null },   // Ateshgah fire temple and Yanar Dag
  'az-gabala':                 { adult: null, child: null },   // Gabala cable car and Tufandag
  'az-quba':                   { adult: null, child: null },   // Quba and Khinalug village
  'az-boulevard':              { adult: null, child: null },   // Baku boulevard and Flame Towers by night

  // ---------- Georgia ----------
  'ge-old-tbilisi':            { adult: null, child: null },   // Old Tbilisi and the sulphur baths
  'ge-kazbegi':                { adult: null, child: null },   // Kazbegi and Gergeti Trinity church
  'ge-wine':                   { adult: null, child: null },   // Kakheti wine day
  'ge-mtskheta':               { adult: null, child: null },   // Mtskheta and Jvari monastery
  'ge-batumi':                 { adult: null, child: null },   // Batumi seafront and botanical garden
  'ge-paragliding':            { adult: null, child: null },   // Paragliding over Gudauri

  // ---------- Uzbekistan ----------
  'uz-registan':               { adult: null, child: null },   // Registan square, Samarkand
  'uz-shah-zinda':             { adult: null, child: null },   // Shah-i-Zinda necropolis
  'uz-bukhara-old':            { adult: null, child: null },   // Bukhara old town walk
  'uz-plov':                   { adult: null, child: null },   // Tashkent plov centre and bazaar
  'uz-metro':                  { adult: null, child: null },   // Tashkent metro station tour
  'uz-silk':                   { adult: null, child: null },   // Silk and paper workshop, Samarkand

  // ---------- Egypt ----------
  'eg-pyramids':               { adult: null, child: null },   // Giza pyramids and Sphinx
  'eg-museum':                 { adult: null, child: null },   // Grand Egyptian Museum
  'eg-nile-cruise':            { adult: null, child: null },   // Nile cruise, Luxor to Aswan
  'eg-valley-kings':           { adult: null, child: null },   // Valley of the Kings
  'eg-abu-simbel':             { adult: null, child: null },   // Abu Simbel
  'eg-red-sea':                { adult: null, child: null },   // Red Sea snorkelling, Hurghada

  // ---------- Oman ----------
  'om-grand-mosque':           { adult: null, child: null },   // Sultan Qaboos Grand Mosque
  'om-wadi-shab':              { adult: null, child: null },   // Wadi Shab
  'om-desert-camp':            { adult: null, child: null },   // Wahiba Sands desert night
  'om-nizwa':                  { adult: null, child: null },   // Nizwa fort and Friday goat market
  'om-dolphin':                { adult: null, child: null },   // Muscat dolphin watching
  'om-mutrah':                 { adult: null, child: null },   // Mutrah souq and corniche

  // ---------- Singapore ----------
  'sg-universal':              { adult: null, child: null },   // Universal Studios Singapore
  'sg-gardens':                { adult: null, child: null },   // Gardens by the Bay and Cloud Forest
  'sg-zoo':                    { adult: null, child: null },   // Singapore Zoo and River Wonders
  'sg-marina':                 { adult: null, child: null },   // Marina Bay Sands SkyPark
  'sg-hawker':                 { adult: null, child: null },   // Hawker centre food tour
  'sg-night-safari':           { adult: null, child: null },   // Night Safari

  // ---------- Japan ----------
  'jp-shibuya':                { adult: null, child: null },   // Tokyo: Shibuya, Shinjuku and Asakusa
  'jp-fuji':                   { adult: null, child: null },   // Mount Fuji and Hakone day trip
  'jp-fushimi':                { adult: null, child: null },   // Fushimi Inari and Kyoto temples
  'jp-arashiyama':             { adult: null, child: null },   // Arashiyama bamboo grove and monkey park
  'jp-dotonbori':              { adult: null, child: null },   // Osaka: Dotonbori and street food
  'jp-nara':                   { adult: null, child: null },   // Nara day trip

  // ---------- South Korea ----------
  'kr-palace':                 { adult: null, child: null },   // Gyeongbokgung palace and hanbok
  'kr-dmz':                    { adult: null, child: null },   // DMZ tour
  'kr-myeongdong':             { adult: null, child: null },   // Myeongdong night market and skincare run
  'kr-nami':                   { adult: null, child: null },   // Nami Island and Petite France
  'kr-haeundae':               { adult: null, child: null },   // Busan: Haeundae beach and Gamcheon village
  'kr-jeju':                   { adult: null, child: null },   // Jeju: Seongsan Ilchulbong sunrise

  // ---------- Turkey ----------
  'tr-hagia':                  { adult: null, child: null },   // Hagia Sophia, Blue Mosque and Topkapi
  'tr-bosphorus':              { adult: null, child: null },   // Bosphorus cruise
  'tr-grand-bazaar':           { adult: null, child: null },   // Grand Bazaar and spice market
  'tr-balloon':                { adult: null, child: null },   // Cappadocia hot air balloon at sunrise
  'tr-goreme':                 { adult: null, child: null },   // Goreme open air museum and underground city
  'tr-antalya':                { adult: null, child: null },   // Antalya old town and Duden falls
};

