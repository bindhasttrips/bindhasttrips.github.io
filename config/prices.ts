/**
 * ACTIVITY PRICES. This is the file to edit.
 *
 * Put the price you charge per person, in rupees. `child` is optional: leave
 * it out and the adult price is used for children too. A `0` means there is
 * genuinely no ticket cost, which is different from leaving it null.
 *
 * null means "not priced yet". Those activities show no price to the customer
 * and are left out of any estimate, rather than counted as free. Fill one in
 * and it starts working immediately, with no other change anywhere.
 *
 *   'desert-safari': { adult: 3200, child: 2600 },   both set
 *   'burj-khalifa':  { adult: 3800 },                children pay the same
 *   'la-mer-beach':  { adult: 0 },                   genuinely no ticket
 *   'ain-dubai':     { adult: null },                not priced yet
 */
export interface ActivityPrice {
  adult: number | null;
  child?: number | null;
}

/**
 * Your margin, applied to the whole land estimate. 1.2 means twenty percent
 * on top of cost. This is the only place it is set.
 */
export const MARGIN = 1.2;

export const ACTIVITY_PRICES: Record<string, ActivityPrice> = {

  // ---------- UAE / Dubai ----------
  'desert-safari':             { adult: null, child: null },   // Desert safari with BBQ dinner
  'desert-camel-trek':         { adult: null, child: null },   // Sunset camel trek, no dune bashing
  'burj-khalifa':              { adult: null, child: null },   // Burj Khalifa, levels 124 and 125
  'burj-khalifa-148':          { adult: null, child: null },   // Burj Khalifa, level 148 SKY
  'palm-view':                 { adult: null, child: null },   // The View at the Palm
  'ain-dubai':                 { adult: null, child: null },   // Ain Dubai observation wheel
  'dubai-city-tour':           { adult: null, child: null },   // Half day Dubai city tour
  'old-dubai-souks':           { adult: null, child: null },   // Gold and spice souks with abra crossing
  'dubai-food-tour':           { adult: null, child: null },   // Old Dubai evening food walk
  'dhow-cruise':               { adult: null, child: null },   // Marina dhow cruise with dinner
  'museum-future':             { adult: null, child: null },   // Museum of the Future
  'dubai-frame':               { adult: null, child: null },   // Dubai Frame
  'dubai-fountain-boat':       { adult: null, child: null },   // Dubai Fountain lake ride
  'la-mer-beach':              { adult: null, child: null },   // Beach day at La Mer or Kite Beach
  'kite-watersports':          { adult: null, child: null },   // Jet ski with the Burj Al Arab behind you
  'aquaventure':               { adult: null, child: null },   // Atlantis Aquaventure waterpark
  'lost-chambers':             { adult: null, child: null },   // Lost Chambers Aquarium
  'dubai-aquarium':            { adult: null, child: null },   // Dubai Aquarium and Underwater Zoo
  'green-planet':              { adult: null, child: null },   // The Green Planet indoor rainforest
  'img-worlds':                { adult: null, child: null },   // IMG Worlds of Adventure
  'ski-dubai':                 { adult: null, child: null },   // Ski Dubai snow park
  'dubai-safari-park':         { adult: null, child: null },   // Dubai Safari Park
  'miracle-garden':            { adult: null, child: null },   // Dubai Miracle Garden
  'global-village':            { adult: null, child: null },   // Global Village
  'marina-yacht':              { adult: null, child: null },   // Shared yacht cruise on the Marina
  'balloon':                   { adult: null, child: null },   // Sunrise hot air balloon over the desert
  'skydive':                   { adult: null, child: null },   // Skydive over the Palm
  'desert-quad':               { adult: null, child: null },   // Quad biking in the desert
  'helicopter-tour':           { adult: null, child: null },   // Helicopter tour over Dubai
  'marina-brunch':             { adult: null, child: null },   // Weekend brunch at a Marina restaurant
  'nightlife-marina':          { adult: null, child: null },   // Night out at a Marina club or lounge
  'gold-souk-shopping':        { adult: null, child: null },   // Guided gold and textile shopping
  'spa-hammam':                { adult: null, child: null },   // Traditional hammam and spa session

  // ---------- UAE / Abu Dhabi ----------
  'abu-dhabi-tour':            { adult: null, child: null },   // Abu Dhabi day tour from Dubai
  'grand-mosque':              { adult: null, child: null },   // Sheikh Zayed Grand Mosque
  'louvre-abu-dhabi':          { adult: null, child: null },   // Louvre Abu Dhabi
  'qasr-al-watan':             { adult: null, child: null },   // Qasr Al Watan presidential palace
  'ferrari-world':             { adult: null, child: null },   // Ferrari World
  'warner-bros':               { adult: null, child: null },   // Warner Bros World Abu Dhabi
  'yas-waterworld':            { adult: null, child: null },   // Yas Waterworld
  'emirates-palace-tea':       { adult: null, child: null },   // Afternoon tea at Emirates Palace

  // ---------- Thailand / Bangkok ----------
  'grand-palace':              { adult: null, child: null },   // Grand Palace and Wat Pho
  'wat-arun':                  { adult: null, child: null },   // Wat Arun at sunset
  'floating-market':           { adult: null, child: null },   // Floating market and railway market
  'river-cruise':              { adult: null, child: null },   // Chao Phraya dinner cruise
  'cooking-class-bkk':         { adult: null, child: null },   // Thai cooking class in Bangkok
  'street-food-tour':          { adult: null, child: null },   // Chinatown street food walk
  'safari-world':              { adult: null, child: null },   // Safari World and Marine Park
  'ayutthaya':                 { adult: null, child: null },   // Ayutthaya day trip
  'muay-thai':                 { adult: null, child: null },   // Muay Thai at Rajadamnern
  'rooftop-bar':               { adult: null, child: null },   // Rooftop bar evening
  'chatuchak':                 { adult: null, child: null },   // Chatuchak weekend market
  'thai-massage-bkk':          { adult: null, child: null },   // Traditional Thai massage

  // ---------- Thailand / Pattaya ----------
  'coral-island':              { adult: null, child: null },   // Coral Island with lunch
  'nong-nooch':                { adult: null, child: null },   // Nong Nooch Tropical Garden
  'sanctuary-truth':           { adult: null, child: null },   // Sanctuary of Truth
  'alcazar-show':              { adult: null, child: null },   // Alcazar cabaret show
  'underwater-world':          { adult: null, child: null },   // Underwater World Pattaya
  'pattaya-floating-market':   { adult: null, child: null },   // Pattaya Floating Market
  'walking-street':            { adult: null, child: null },   // Walking Street evening
  'pattaya-speedboat-party':   { adult: null, child: null },   // Private speedboat day for a group

  // ---------- Thailand / Chiang Mai ----------
  'elephant-sanctuary-cm':     { adult: null, child: null },   // Ethical elephant sanctuary
  'doi-suthep':                { adult: null, child: null },   // Doi Suthep temple
  'chiang-mai-old-city':       { adult: null, child: null },   // Old city temple walk
  'cooking-class-cm':          { adult: null, child: null },   // Northern Thai cooking class
  'sticky-waterfall':          { adult: null, child: null },   // Bua Thong sticky waterfall
  'night-bazaar':              { adult: null, child: null },   // Chiang Mai night bazaar
  'doi-inthanon':              { adult: null, child: null },   // Doi Inthanon national park
  'lantern-release':           { adult: null, child: null },   // Lantern release evening
  'chiang-mai-spa':            { adult: null, child: null },   // Half day spa in the hills

  // ---------- Thailand / Phuket ----------
  'phi-phi':                   { adult: null, child: null },   // Phi Phi islands by speedboat
  'james-bond':                { adult: null, child: null },   // James Bond Island sea canoe
  'fantasea':                  { adult: null, child: null },   // Phuket FantaSea show with dinner
  'old-town-phuket':           { adult: null, child: null },   // Phuket Old Town walking tour
  'big-buddha':                { adult: null, child: null },   // Big Buddha and Karon viewpoint
  'phuket-spa':                { adult: null, child: null },   // Beachfront spa session
  'surf-lesson':               { adult: null, child: null },   // Beginner surf lesson at Kata
  'patong-nightlife':          { adult: null, child: null },   // Patong and Bangla Road evening
  'phuket-yacht':              { adult: null, child: null },   // Private catamaran day charter
  'phuket-cabaret':            { adult: null, child: null },   // Simon Cabaret show

  // ---------- Thailand / Krabi ----------
  'four-islands':              { adult: null, child: null },   // Four Islands tour by longtail
  'railay-beach':              { adult: null, child: null },   // Railay Beach day trip
  'emerald-pool':              { adult: null, child: null },   // Emerald Pool and hot springs
  'tiger-cave':                { adult: null, child: null },   // Tiger Cave Temple climb
  'krabi-sunset-cruise':       { adult: null, child: null },   // Sunset dinner cruise from Ao Nang
  'krabi-kayak':               { adult: null, child: null },   // Mangrove kayaking at Ao Thalane
  'krabi-cooking':             { adult: null, child: null },   // Southern Thai cooking class

  // ---------- Thailand / Koh Samui ----------
  'angthong':                  { adult: null, child: null },   // Ang Thong marine park day trip
  'samui-big-buddha':          { adult: null, child: null },   // Big Buddha and island temples
  'samui-spa':                 { adult: null, child: null },   // Beachfront spa half day
  'samui-snorkel':             { adult: null, child: null },   // Koh Tao and Koh Nang Yuan snorkelling
  'samui-fisherman':           { adult: null, child: null },   // Fisherman Village night market
  'samui-safari':              { adult: null, child: null },   // Island 4x4 jungle safari
  'samui-cooking':             { adult: null, child: null },   // Island cooking class
  'samui-sunset-sail':         { adult: null, child: null },   // Sunset catamaran sail
};

