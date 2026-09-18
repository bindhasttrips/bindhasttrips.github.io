# -*- coding: utf-8 -*-
"""
Generates the new destination objects for config/destinations.ts.

Deliberately lean: a few cities and six activities each, because the owner
edits them anyway. Everything shared (inclusions, exclusions, visa boilerplate)
comes from defaults applied at export rather than being repeated 16 times.
"""
import re, io

# slug, name, country, tier, tagline, summary, bestMonths, flightTime,
# currency code, INR per unit, cities
D = [
 ("malaysia","Malaysia","Malaysia","none",
  "Visa free, cheap, and easy to combine with Singapore.",
  "Kuala Lumpur for the city and the food, Langkawi for the beaches. Indian food is everywhere and English is widely spoken, which makes it one of the easiest first trips out of India.",
  "May to July and December to February are driest.",
  "4h 30m from Chennai, 5h 30m from Mumbai","MYR",19.5,["Kuala Lumpur","Langkawi","Penang"]),

 ("maldives","Maldives","Maldives","none",
  "No visa, short flight, and the beaches everyone has seen.",
  "A free 30 day permit on arrival. Resort islands are all inclusive and expensive; guesthouse islands like Maafushi cost a fraction and are where most Indian travellers actually stay.",
  "November to April is dry season. May to October is cheaper and wetter.",
  "1h 30m from Kochi, 3h from Mumbai","MVR",5.6,["Male","Maafushi","Resort island"]),

 ("nepal","Nepal","Nepal","none",
  "No visa at all, and the cheapest mountains you will ever see.",
  "Indian passport holders need no visa and can even travel on a voter ID. Kathmandu for temples, Pokhara for the lakes and paragliding, and treks that start from a bus stop.",
  "October to November and March to April are clearest.",
  "1h 45m from Delhi, 1h from Varanasi","NPR",0.63,["Kathmandu","Pokhara","Chitwan"]),

 ("mauritius","Mauritius","Mauritius","none",
  "Free entry, and a beach island that is not the Maldives.",
  "Sixty days free on arrival. Beaches, a volcanic interior and a large Indian origin population, so the food and the language are familiar.",
  "May to December is drier and cooler.",
  "6h from Mumbai, 6h 30m from Delhi","MUR",1.9,["Port Louis","Flic en Flac","Grand Baie"]),

 ("vietnam","Vietnam","Vietnam","evisa",
  "Cheap, fast growing, and an e-visa that is approved in days.",
  "The best value in South East Asia right now. Hanoi and Ha Long in the north, Da Nang and Hoi An in the middle, Ho Chi Minh in the south. Street food is the reason to go.",
  "February to April and August to October avoid both extremes.",
  "5h from Kolkata, 5h 30m from Delhi","VND",0.0033,["Hanoi","Ha Long","Da Nang","Ho Chi Minh City"]),

 ("sri-lanka","Sri Lanka","Sri Lanka","evisa",
  "Under four hours, and a full country in a week.",
  "Beaches, hill country tea estates, ancient cities and safari, all within short drives. The ETA is applied for online and approved almost immediately.",
  "December to March for the west and south coasts.",
  "1h 30m from Chennai, 3h from Mumbai","LKR",0.28,["Colombo","Kandy","Ella","Galle"]),

 ("bali","Bali","Indonesia","evisa",
  "Visa on arrival, villas for the price of a hotel room.",
  "Ubud for rice terraces and temples, Seminyak and Canggu for beach clubs, Nusa Penida for the cliffs. A private villa with a pool costs less than a mid range hotel in Dubai.",
  "April to October is dry season.",
  "5h 30m from Chennai, 7h from Delhi","IDR",0.0052,["Ubud","Seminyak","Nusa Penida"]),

 ("azerbaijan","Azerbaijan","Azerbaijan","evisa",
  "Three hours from Delhi, and nothing like anywhere else nearby.",
  "Baku is a Caspian seafront city with medieval walls and modern architecture side by side. Outside it there are mud volcanoes, fire temples and mountain villages.",
  "April to June and September to October are mildest.",
  "3h 30m from Delhi, 5h from Mumbai","AZN",48.0,["Baku","Gabala","Quba"]),

 ("georgia","Georgia","Georgia","evisa",
  "Mountains, wine and a currency that favours the rupee.",
  "Tbilisi is compact and walkable, Kazbegi has the mountains, and Kakheti is where the wine comes from. Costs are low and the scenery is disproportionate to the flight time.",
  "May to June and September to October.",
  "5h from Delhi via a hub","GEL",31.0,["Tbilisi","Kazbegi","Batumi"]),

 ("uzbekistan","Uzbekistan","Uzbekistan","evisa",
  "Silk Road cities, and an e-visa that takes two days.",
  "Samarkand, Bukhara and Khiva are among the best preserved Islamic architecture anywhere. Direct flights from Delhi and Mumbai, and prices well below Turkey.",
  "April to May and September to October.",
  "3h from Delhi","UZS",0.0067,["Tashkent","Samarkand","Bukhara"]),

 ("egypt","Egypt","Egypt","evisa",
  "The pyramids, the Nile, and a visa applied for online.",
  "Cairo for the pyramids and the museum, Luxor and Aswan for the temples, and a Nile cruise between them. Hurghada adds the Red Sea if you want beach time.",
  "October to April. Summer inland is extreme.",
  "5h 30m from Mumbai, 6h from Delhi","EGP",1.7,["Cairo","Luxor","Aswan","Hurghada"]),

 ("oman","Oman","Oman","evisa",
  "The Gulf without the crowds, and wadis instead of malls.",
  "Muscat is calm and low rise, and an hour out there are wadis, desert camps and a coastline with almost nobody on it. A good alternative for anyone who found Dubai too busy.",
  "October to April.",
  "3h from Mumbai, 3h 30m from Delhi","OMR",216.0,["Muscat","Nizwa","Wahiba Sands"]),

 ("singapore","Singapore","Singapore","embassy",
  "Expensive, spotless, and the easiest city in Asia with children.",
  "Small enough to cover in three days, with Universal Studios, Gardens by the Bay and the zoo. Often paired with Malaysia to bring the average cost down.",
  "February to April is least wet.",
  "4h from Chennai, 5h 30m from Mumbai","SGD",65.0,["Singapore"]),

 ("japan","Japan","Japan","embassy",
  "The trip people save for, and it earns it.",
  "Tokyo, Kyoto and Osaka in ten days is the standard first route. Trains make it effortless. Costs are high but less than Europe, and cherry blossom season books out a year ahead.",
  "March to May and October to November.",
  "7h 30m from Delhi","JPY",0.56,["Tokyo","Kyoto","Osaka"]),

 ("south-korea","South Korea","South Korea","embassy",
  "Seoul, and a country most Indian travellers skip.",
  "Seoul is late night food, shopping and palaces. Busan adds beaches, and Jeju is the domestic island break. Still uncrowded by Indian visitors, which is part of the appeal.",
  "April to June and September to November.",
  "7h from Delhi","KRW",0.062,["Seoul","Busan","Jeju"]),

 ("turkey","Turkey","Turkiye","embassy",
  "Istanbul and Cappadocia, in one week.",
  "Istanbul spans two continents and rewards slow walking. Cappadocia is the balloon photographs. Antalya adds the coast if you have longer.",
  "April to June and September to November.",
  "6h from Delhi, 7h from Mumbai","TRY",2.3,["Istanbul","Cappadocia","Antalya"]),
]

# slug -> visa details
VISA = {
 "malaysia": (False,"Visa free entry for Indian passport holders, currently up to 30 days","Nothing to apply for. You clear immigration on arrival.",0,
   "There is no visa to process. We still complete your arrival card and brief you on what immigration will ask.",
   "Visa free entry is a policy governments change. We confirm the rule in force on your travel dates before you pay."),
 "maldives": (False,"Free 30 day visa on arrival","Issued at the airport, no application needed.",0,
   "Nothing to apply for. We confirm your hotel booking and return ticket, which is all immigration asks to see.",None),
 "nepal": (False,"No visa required for Indian passport holders","Nothing at all. A passport or voter ID is enough.",0,
   "No visa, no arrival card, no fee. We brief you on which identity document to carry.",None),
 "mauritius": (False,"Free 60 day entry permit on arrival","Issued at the airport.",0,
   "Nothing to apply for. We provide the confirmed hotel booking and return ticket that immigration asks for.",None),
 "vietnam": (True,"Vietnam e-visa, 90 days, single or multiple entry","3 to 5 working days once we have your documents",2400,
   "You send your documents on WhatsApp. We complete the application, pay the fee and send the approved e-visa as a PDF.",None),
 "sri-lanka": (True,"Sri Lanka ETA, 30 days","Usually approved within 24 to 48 hours",4200,
   "Applied for online. We complete it and send the approval, which you carry printed or on your phone.",None),
 "bali": (True,"Indonesia visa on arrival, 30 days, extendable once","Issued at the airport, or applied for online before you fly",3200,
   "We apply for the e-VOA before departure so you skip the airport queue, and send you the QR code to scan on arrival.",None),
 "azerbaijan": (True,"ASAN e-visa, 30 days, single entry","3 working days, or 3 hours on the urgent option",2800,
   "Applied for entirely online. We complete it, pay the fee and send the approved visa.",None),
 "georgia": (True,"Georgia e-visa, 30 days","5 to 10 working days",2600,
   "Applied for online. Holders of a valid US, UK or Schengen visa may enter without one, and we will tell you if that applies to you.",None),
 "uzbekistan": (True,"Uzbekistan e-visa, 30 days, single entry","2 to 3 working days",2200,
   "Applied for online. We complete the form, pay the fee and send the approved visa.",None),
 "egypt": (True,"Egypt e-visa, 30 days, single entry","5 to 7 working days",2600,
   "Applied for online. We complete it and send the approval. A visa on arrival also exists but the queue is long.",None),
 "oman": (True,"Oman e-visa, 10 or 30 days","2 to 4 working days",2300,
   "Applied for through the Royal Oman Police portal. We complete it and send the approved visa.",None),
 "singapore": (True,"Singapore visa, applied through an authorised agent, 30 days","5 to 7 working days",3400,
   "Applied through an authorised agent, which is the only route for an Indian passport. We assemble the documents and submit on your behalf.",
   "Bank statements and proof of employment are required. We will tell you exactly what to send before you commit to dates."),
 "japan": (True,"Japan tourist visa, single entry","5 to 8 working days once documents are complete",3600,
   "We prepare the itinerary, schedule and document set Japan requires, and submit through the authorised centre.",
   "Japan asks for a day by day itinerary and proof of funds. This one needs a few days of preparation before it can be filed."),
 "south-korea": (True,"South Korea tourist visa, single entry","7 to 10 working days",4800,
   "We assemble the document set and file it at the visa centre on your behalf.",
   "Proof of employment and bank statements are required, and processing is slower than most."),
 "turkey": (True,"Turkiye e-visa or sticker visa depending on your documents","3 to 10 working days",3800,
   "Holders of a valid US, UK or Schengen visa qualify for the quick e-visa. Everyone else needs the full application, which we handle.",
   "Which route applies depends on what other visas you hold. We check this before quoting a timeline."),
}

# slug -> (perNight, childFactor, fixedPerPerson, flightLow, flightHigh, flightNote)
RATES = {
 "malaysia": (5200,.55,5500,18000,32000,"Return economy from Chennai or Mumbai."),
 "maldives": (11000,.6,7000,22000,42000,"Return economy from Kochi, Bengaluru or Mumbai."),
 "nepal": (3800,.5,3500,12000,24000,"Return economy from Delhi, Varanasi or Kolkata."),
 "mauritius": (9500,.6,8000,38000,68000,"Return economy from Mumbai or Delhi."),
 "vietnam": (4800,.55,6500,24000,44000,"Return economy from Kolkata, Delhi or Mumbai."),
 "sri-lanka": (4600,.55,5000,14000,28000,"Return economy from Chennai, Mumbai or Delhi."),
 "bali": (6200,.55,7000,32000,58000,"Return economy from Chennai, Mumbai or Delhi."),
 "azerbaijan": (6000,.6,7000,26000,48000,"Return economy from Delhi or Mumbai."),
 "georgia": (5800,.6,7000,30000,55000,"Usually one stop from Delhi or Mumbai."),
 "uzbekistan": (5400,.6,6500,26000,46000,"Direct from Delhi, one stop from Mumbai."),
 "egypt": (6400,.6,7500,34000,62000,"Return economy from Mumbai or Delhi."),
 "oman": (7200,.6,7500,18000,34000,"Return economy from Mumbai, Delhi or Kochi."),
 "singapore": (11500,.65,8500,26000,48000,"Return economy from Chennai, Mumbai or Delhi."),
 "japan": (13000,.7,11000,48000,88000,"Return economy from Delhi or Mumbai."),
 "south-korea": (11000,.7,10500,42000,78000,"Return economy from Delhi, usually one stop."),
 "turkey": (8500,.65,9000,36000,66000,"Return economy from Delhi or Mumbai."),
}

# slug -> seasons {peak, shoulder, off} as (months, multiplier)
SEASONS = {
 "malaysia": ([12,1,2,6,7],1.18,[3,4,5,8],1.03,[9,10,11],0.86),
 "maldives": ([12,1,2,3],1.3,[4,11],1.05,[5,6,7,8,9,10],0.8),
 "nepal": ([10,11,3,4],1.2,[2,5,12],1.03,[6,7,8,9],0.82),
 "mauritius": ([11,12,1],1.25,[5,6,9,10],1.04,[2,3,4,7,8],0.87),
 "vietnam": ([12,1,2,3],1.2,[4,8,9,10],1.04,[5,6,7,11],0.85),
 "sri-lanka": ([12,1,2,3],1.22,[4,7,8],1.04,[5,6,9,10,11],0.83),
 "bali": ([7,8,12],1.28,[4,5,6,9],1.05,[1,2,3,10,11],0.85),
 "azerbaijan": ([5,6,9,10],1.2,[4,7,8],1.04,[11,12,1,2,3],0.82),
 "georgia": ([6,7,8,9],1.22,[5,10],1.05,[11,12,1,2,3,4],0.8),
 "uzbekistan": ([4,5,9,10],1.22,[3,6,11],1.04,[7,8,12,1,2],0.82),
 "egypt": ([11,12,1,2,3],1.22,[4,10],1.05,[5,6,7,8,9],0.8),
 "oman": ([11,12,1,2,3],1.24,[4,10],1.05,[5,6,7,8,9],0.82),
 "singapore": ([6,7,12],1.2,[2,3,4,5],1.04,[1,8,9,10,11],0.88),
 "japan": ([3,4,10,11],1.35,[5,6,9],1.06,[1,2,7,8,12],0.85),
 "south-korea": ([4,5,10,11],1.28,[6,9],1.05,[1,2,3,7,8,12],0.84),
 "turkey": ([6,7,8,9],1.25,[4,5,10],1.05,[11,12,1,2,3],0.82),
}

# slug -> [(id, name, description, city, tags, audience, hours, intensity)]
ACT = {
"malaysia":[("my-petronas","Petronas Towers skybridge","The bridge and observation deck, booked for a sunset slot.","Kuala Lumpur","sightseeing","both",2,"low"),
 ("my-batu","Batu Caves","272 painted steps to a cave temple. Go early before the heat.","Kuala Lumpur","culture,sightseeing","both",3,"moderate"),
 ("my-kl-food","Jalan Alor street food walk","An evening eating through the city's best known food street.","Kuala Lumpur","food","both",3,"low"),
 ("my-island-hop","Langkawi island hopping","Speedboat to Dayang Bunting and the eagle feeding point.","Langkawi","adventure,relaxed","both",5,"moderate"),
 ("my-skycab","Langkawi SkyCab and sky bridge","Cable car to the ridge and a curved bridge over the rainforest.","Langkawi","sightseeing,family","both",3,"low"),
 ("my-penang-heritage","Penang George Town walk","Street art, clan houses and the best food in the country.","Penang","culture,food","both",4,"low")],

"maldives":[("mv-sandbank","Sandbank picnic","A boat to a strip of sand with nothing on it, for a few hours.","Maafushi","relaxed","both",4,"low"),
 ("mv-snorkel","Coral reef snorkelling trip","Guided snorkel over a house reef, gear included.","Maafushi","adventure","both",4,"moderate"),
 ("mv-dolphin","Sunset dolphin cruise","Spinner dolphins, most evenings, from a dhoni.","Maafushi","relaxed,family","both",3,"low"),
 ("mv-resort-day","Resort day pass","A day on a private resort island with lunch and pool access.","Maafushi","relaxed","both",8,"low"),
 ("mv-male-walk","Male city walk","The old Friday mosque, the fish market and the presidential palace.","Male","culture","both",3,"low"),
 ("mv-seaplane","Seaplane transfer","Worth doing once for the view alone, if your island needs one.","Resort island","sightseeing","both",1,"low")],

"nepal":[("np-kathmandu-durbar","Kathmandu Durbar Square and Swayambhu","The old royal square and the monkey temple above the valley.","Kathmandu","culture,sightseeing","both",5,"moderate"),
 ("np-pashupatinath","Pashupatinath and Boudhanath","The riverside temple complex and the largest stupa in Nepal.","Kathmandu","culture","both",4,"low"),
 ("np-paragliding","Paragliding over Pokhara","Twenty to thirty minutes off Sarangkot with the lake below.","Pokhara","adventure","adult",3,"high"),
 ("np-phewa","Phewa Lake and Peace Pagoda","A rowboat across and a short climb to the white stupa.","Pokhara","relaxed,sightseeing","both",4,"moderate"),
 ("np-sarangkot","Sarangkot sunrise","Annapurna turning gold. A very early start.","Pokhara","sightseeing","both",4,"moderate"),
 ("np-chitwan","Chitwan jeep safari","Rhino, deer and if you are lucky a sloth bear.","Chitwan","adventure,family","both",5,"moderate")],

"mauritius":[("mu-catamaran","Catamaran to Ile aux Cerfs","A day sailing to the island with lunch on board.","Flic en Flac","relaxed,adventure","both",8,"moderate"),
 ("mu-chamarel","Chamarel coloured earth and waterfall","Seven colours of volcanic sand and the tallest waterfall on the island.","Port Louis","sightseeing","both",5,"low"),
 ("mu-dolphin-swim","Swimming with dolphins","Early boat out to the west coast pods.","Flic en Flac","adventure","both",4,"moderate"),
 ("mu-port-louis","Port Louis market and waterfront","The central market, the Aapravasi Ghat and the Caudan waterfront.","Port Louis","culture,shopping","both",4,"low"),
 ("mu-underwater","Undersea walk","A helmet walk on the seabed. No swimming needed.","Grand Baie","adventure,family","both",3,"moderate"),
 ("mu-botanical","Pamplemousses botanical garden","Giant water lilies and a very old banyan.","Grand Baie","relaxed","both",3,"low")],

"vietnam":[("vn-halong","Ha Long Bay overnight cruise","A night on a junk among the limestone islands, with kayaking.","Ha Long","sightseeing,adventure","both",24,"moderate"),
 ("vn-hanoi-street","Hanoi old quarter food walk","An evening through the old quarter eating standing up.","Hanoi","food,culture","both",3,"low"),
 ("vn-cuchi","Cu Chi tunnels","The tunnel network outside Ho Chi Minh City. Not for the claustrophobic.","Ho Chi Minh City","culture,adventure","both",5,"moderate"),
 ("vn-mekong","Mekong Delta day trip","Sampan through the canals, a floating market and a fruit orchard.","Ho Chi Minh City","culture,relaxed","both",9,"moderate"),
 ("vn-hoian","Hoi An old town and lantern evening","A preserved trading port, best after dark when the lanterns are lit.","Da Nang","culture,sightseeing","both",4,"low"),
 ("vn-bana","Ba Na Hills and the Golden Bridge","Cable car to the hill station and the hands holding the bridge.","Da Nang","sightseeing,family","both",8,"moderate")],

"sri-lanka":[("lk-sigiriya","Sigiriya rock fortress","1,200 steps to a palace on top of a rock. Start at dawn.","Kandy","adventure,culture","both",5,"high"),
 ("lk-tooth","Temple of the Tooth, Kandy","The most important Buddhist site in the country, at evening puja.","Kandy","culture","both",3,"low"),
 ("lk-train","Kandy to Ella train","Seven hours through tea country. The best train ride in Asia.","Ella","sightseeing,relaxed","both",7,"low"),
 ("lk-tea","Tea plantation and factory tour","How the leaf becomes the cup, with a tasting.","Ella","culture,food","both",3,"low"),
 ("lk-yala","Yala safari","The best chance of a leopard anywhere in the world.","Galle","adventure,family","both",6,"moderate"),
 ("lk-galle","Galle Fort walk","A Dutch walled town on the sea, best in the late afternoon.","Galle","culture,relaxed","both",3,"low")],

"bali":[("id-ubud-terraces","Tegallalang rice terraces and swing","The terraces, and the swing if you want the photograph.","Ubud","sightseeing","both",4,"low"),
 ("id-monkey-temple","Sacred Monkey Forest and Ubud palace","Temple complex in a forest full of macaques.","Ubud","culture,family","both",3,"low"),
 ("id-nusa-penida","Nusa Penida day trip","Fast boat across for Kelingking cliff and Angel's Billabong.","Nusa Penida","adventure,sightseeing","both",10,"high"),
 ("id-beach-club","Beach club day in Canggu","A daybed, a pool and the sunset. Minimum spend applies.","Seminyak","nightlife,relaxed","adult",6,"low"),
 ("id-waterfalls","Tegenungan and Tibumana waterfalls","Two swimmable waterfalls in one morning.","Ubud","adventure,relaxed","both",5,"moderate"),
 ("id-cooking","Balinese cooking class","A market visit, then cook and eat five dishes.","Ubud","food,culture","both",5,"low")],

"azerbaijan":[("az-old-city","Baku old city and Maiden Tower","The walled city, the palace of the Shirvanshahs and the tower.","Baku","culture,sightseeing","both",4,"low"),
 ("az-mud-volcano","Mud volcanoes and Gobustan","Petroglyphs and bubbling grey mud, an hour out of the city.","Baku","sightseeing,adventure","both",6,"moderate"),
 ("az-fire","Ateshgah fire temple and Yanar Dag","A temple built over a natural gas vent, and a hillside that burns.","Baku","culture","both",4,"low"),
 ("az-gabala","Gabala cable car and Tufandag","Up into the Caucasus, snow at the top most of the year.","Gabala","sightseeing,adventure","both",7,"moderate"),
 ("az-quba","Quba and Khinalug village","A mountain village at 2,300 metres, reached on a hard road.","Quba","adventure,culture","both",9,"high"),
 ("az-boulevard","Baku boulevard and Flame Towers by night","The seafront promenade when the towers are lit.","Baku","relaxed,sightseeing","both",2,"low")],

"georgia":[("ge-old-tbilisi","Old Tbilisi and the sulphur baths","The old town on foot, then a private bath house room.","Tbilisi","culture,relaxed","both",4,"low"),
 ("ge-kazbegi","Kazbegi and Gergeti Trinity church","A church on a ridge under a 5,000 metre peak. Long drive, worth it.","Kazbegi","sightseeing,adventure","both",11,"moderate"),
 ("ge-wine","Kakheti wine day","Three cellars, a qvevri tasting and a long lunch.","Tbilisi","food,culture","adult",9,"low"),
 ("ge-mtskheta","Mtskheta and Jvari monastery","The old capital, half an hour from Tbilisi.","Tbilisi","culture","both",4,"low"),
 ("ge-batumi","Batumi seafront and botanical garden","The Black Sea coast, the boulevard and the garden above it.","Batumi","relaxed,sightseeing","both",6,"low"),
 ("ge-paragliding","Paragliding over Gudauri","Off the ridge above the ski resort, summer or winter.","Kazbegi","adventure","adult",3,"high")],

"uzbekistan":[("uz-registan","Registan square, Samarkand","Three madrasas facing a single square. Best at night, lit.","Samarkand","culture,sightseeing","both",3,"low"),
 ("uz-shah-zinda","Shah-i-Zinda necropolis","A corridor of tiled tombs. The best tilework in Central Asia.","Samarkand","culture","both",2,"low"),
 ("uz-bukhara-old","Bukhara old town walk","Poi Kalyan, the ark and the trading domes, all walkable.","Bukhara","culture,sightseeing","both",5,"moderate"),
 ("uz-plov","Tashkent plov centre and bazaar","Where the city eats plov, plus the Chorsu bazaar.","Tashkent","food,culture","both",3,"low"),
 ("uz-metro","Tashkent metro station tour","Soviet era stations built like ballrooms. Photography now allowed.","Tashkent","culture,sightseeing","both",2,"low"),
 ("uz-silk","Silk and paper workshop, Samarkand","How the paper and the ikat are still made by hand.","Samarkand","culture,shopping","both",2,"low")],

"egypt":[("eg-pyramids","Giza pyramids and Sphinx","The plateau with a guide, and a camel if you want one.","Cairo","sightseeing,culture","both",5,"moderate"),
 ("eg-museum","Grand Egyptian Museum","Tutankhamun's collection under one roof. Half a day minimum.","Cairo","culture","both",4,"low"),
 ("eg-nile-cruise","Nile cruise, Luxor to Aswan","Three nights on the river with the temples along the way.","Luxor","relaxed,culture","both",72,"low"),
 ("eg-valley-kings","Valley of the Kings","Three tombs included, Tutankhamun's costs extra.","Luxor","culture,sightseeing","both",5,"moderate"),
 ("eg-abu-simbel","Abu Simbel","Ramses II, moved stone by stone when the dam flooded the valley.","Aswan","culture,sightseeing","both",8,"moderate"),
 ("eg-red-sea","Red Sea snorkelling, Hurghada","Some of the clearest water and healthiest reef in the region.","Hurghada","adventure,relaxed","both",6,"moderate")],

"oman":[("om-grand-mosque","Sultan Qaboos Grand Mosque","The second largest hand woven carpet in the world. Modest dress required.","Muscat","culture,sightseeing","both",3,"low"),
 ("om-wadi-shab","Wadi Shab","A walk, a swim and a waterfall inside a cave. The best day in Oman.","Muscat","adventure","both",7,"high"),
 ("om-desert-camp","Wahiba Sands desert night","Dune drive, a camp under the stars and sunrise on the ridge.","Wahiba Sands","adventure,relaxed","both",20,"moderate"),
 ("om-nizwa","Nizwa fort and Friday goat market","A 17th century fort and a livestock market that still runs.","Nizwa","culture","both",5,"low"),
 ("om-dolphin","Muscat dolphin watching","Early boat along the coast, spinner pods most mornings.","Muscat","family,relaxed","both",3,"low"),
 ("om-mutrah","Mutrah souq and corniche","The old market and the seafront, best at dusk.","Muscat","shopping,culture","both",3,"low")],

"singapore":[("sg-universal","Universal Studios Singapore","A full day on Sentosa. Book ahead for weekends.","Singapore","family,adventure","both",9,"high"),
 ("sg-gardens","Gardens by the Bay and Cloud Forest","The supertrees and the indoor waterfall. Go for the light show.","Singapore","sightseeing,family","both",4,"low"),
 ("sg-zoo","Singapore Zoo and River Wonders","Open enclosures, and the best zoo in Asia by some distance.","Singapore","family","both",6,"moderate"),
 ("sg-marina","Marina Bay Sands SkyPark","The view from the top of the boat, at sunset.","Singapore","sightseeing","both",2,"low"),
 ("sg-hawker","Hawker centre food tour","Michelin listed stalls at a few dollars a plate.","Singapore","food","both",3,"low"),
 ("sg-night-safari","Night Safari","A tram through nocturnal enclosures after dark.","Singapore","family,adventure","both",4,"low")],

"japan":[("jp-shibuya","Tokyo: Shibuya, Shinjuku and Asakusa","The crossing, the neon and the oldest temple in the city.","Tokyo","sightseeing,culture","both",8,"moderate"),
 ("jp-fuji","Mount Fuji and Hakone day trip","The lake, the ropeway and the mountain if it is clear.","Tokyo","sightseeing","both",11,"moderate"),
 ("jp-fushimi","Fushimi Inari and Kyoto temples","Ten thousand torii gates. Go at first light to have them to yourself.","Kyoto","culture,sightseeing","both",6,"high"),
 ("jp-arashiyama","Arashiyama bamboo grove and monkey park","The grove early, then the climb to the macaques.","Kyoto","sightseeing,family","both",5,"moderate"),
 ("jp-dotonbori","Osaka: Dotonbori and street food","The canal, the neon and takoyaki cooked in front of you.","Osaka","food,nightlife","both",4,"low"),
 ("jp-nara","Nara day trip","The great Buddha and the deer that bow for biscuits.","Osaka","culture,family","both",6,"moderate")],

"south-korea":[("kr-palace","Gyeongbokgung palace and hanbok","Free entry if you wear a hanbok, which most people do.","Seoul","culture,family","both",4,"moderate"),
 ("kr-dmz","DMZ tour","The border, the observation post and a tunnel. Passport required.","Seoul","culture,sightseeing","both",8,"moderate"),
 ("kr-myeongdong","Myeongdong night market and skincare run","Street food and the cosmetics everyone comes back with.","Seoul","food,shopping","both",4,"low"),
 ("kr-nami","Nami Island and Petite France","A river island of tree lined avenues, an hour out of Seoul.","Seoul","relaxed,family","both",9,"moderate"),
 ("kr-haeundae","Busan: Haeundae beach and Gamcheon village","A beach city and a hillside painted every colour.","Busan","relaxed,sightseeing","both",6,"moderate"),
 ("kr-jeju","Jeju: Seongsan Ilchulbong sunrise","A volcanic crater rising straight out of the sea.","Jeju","adventure,sightseeing","both",4,"high")],

"turkey":[("tr-hagia","Hagia Sophia, Blue Mosque and Topkapi","Three of the four great sights, walkable in one morning.","Istanbul","culture,sightseeing","both",6,"moderate"),
 ("tr-bosphorus","Bosphorus cruise","Two continents from the water, best in the late afternoon.","Istanbul","relaxed,sightseeing","both",3,"low"),
 ("tr-grand-bazaar","Grand Bazaar and spice market","Four thousand shops. Bargaining expected, tea offered.","Istanbul","shopping,culture","both",4,"low"),
 ("tr-balloon","Cappadocia hot air balloon at sunrise","The reason most people come. Weather dependent, book two days spare.","Cappadocia","adventure,sightseeing","both",4,"moderate"),
 ("tr-goreme","Goreme open air museum and underground city","Rock cut churches and a city carved eight levels down.","Cappadocia","culture,sightseeing","both",6,"moderate"),
 ("tr-antalya","Antalya old town and Duden falls","A Roman harbour town and a waterfall straight into the sea.","Antalya","relaxed,sightseeing","both",5,"low")],
}

def q(s):
    return "'" + str(s).replace("\\", "\\\\").replace("'", "\\'") + "'"

out = io.StringIO()
for (slug,name,country,tier,tagline,summary,best,flight,ccode,inr,cities) in D:
    req,vtype,vtime,vfee,vhandled,vcaveat = VISA[slug]
    out.write(f"\nconst {slug.replace('-','_')}: DestinationSource = {{\n")
    out.write(f"  slug: {q(slug)},\n  name: {q(name)},\n  country: {q(country)},\n")
    out.write(f"  visaTier: {q(tier)},\n  tagline: {q(tagline)},\n")
    out.write(f"  heroImage: '/images/places/{slug}.jpg',\n")
    out.write(f"  heroAlt: {q(name)},\n  cardImage: '/images/places/{slug}.jpg',\n")
    out.write(f"  summary: {q(summary)},\n  bestMonthsSummary: {q(best)},\n")
    out.write(f"  flightTimeSummary: {q(flight)},\n")
    out.write("  cities: [" + ", ".join(q(c) for c in cities) + "],\n")
    out.write(f"  currency: {{ code: {q(ccode)}, symbol: {q(ccode)}, approxInrPerUnit: {inr} }},\n")
    out.write("  visa: {\n")
    out.write(f"    required: {'true' if req else 'false'},\n    type: {q(vtype)},\n")
    out.write(f"    timeline: {q(vtime)},\n    feeInr: {vfee},\n")
    out.write("    documents: DEFAULT_VISA_DOCS,\n")
    out.write(f"    handledByUs: {q(vhandled)},\n")
    if vcaveat:
        out.write(f"    caveat: {q(vcaveat)},\n")
    out.write("  },\n")
    out.write("  costSamplesNote: 'Day to day costs are confirmed with your quote.',\n")
    out.write("  costSamples: [],\n  tiers: [],\n")
    out.write("  activities: [\n")
    for (aid,aname,adesc,acity,atags,aaud,ahrs,aint) in ACT[slug]:
        tags = ", ".join(q(t) for t in atags.split(","))
        out.write(f"    {{ id: {q(aid)}, name: {q(aname)}, description: {q(adesc)},"
                  f" indicativePrice: null, audience: {q(aaud)}, durationHours: {ahrs},"
                  f" tags: [{tags}], city: {q(acity)}, intensity: {q(aint)} }},\n")
    out.write("  ],\n")
    pn,cf,fx,fl,fh,fnote = RATES[slug]
    pk,pkm,sh,shm,off,offm = SEASONS[slug]
    out.write("  pricingCopy: {\n")
    out.write(f"    flightNote: {q(fnote)},\n")
    out.write("    seasonNotes: {\n")
    out.write("      peak: 'Best weather, highest rates.',\n")
    out.write("      shoulder: 'Still good, noticeably cheaper.',\n")
    out.write("      off: 'Cheapest, with some weather trade off.',\n")
    out.write("    },\n  },\n")
    out.write("  brochure: '',\n  enabled: true,\n  bookable: false,\n};\n")

open('/tmp/new_destinations.ts','w').write(out.getvalue())
print('generated', len(D), 'destinations,', sum(len(v) for v in ACT.values()), 'activities')

# Rate cards + prices, for splicing into config/prices.ts
rc = io.StringIO()
for slug,(pn,cf,fx,fl,fh,_) in RATES.items():
    pk,pkm,sh,shm,off,offm = SEASONS[slug]
    rc.write(f"  '{slug}': {{\n    landPerPersonPerNight: {pn},\n    childFactor: {cf},\n")
    rc.write(f"    fixedPerPerson: {fx},\n    flight: {{ low: {fl}, high: {fh} }},\n")
    rc.write("    seasons: {\n")
    rc.write(f"      peak: {{ months: {list(pk)}, multiplier: {pkm} }},\n")
    rc.write(f"      shoulder: {{ months: {list(sh)}, multiplier: {shm} }},\n")
    rc.write(f"      off: {{ months: {list(off)}, multiplier: {offm} }},\n")
    rc.write("    },\n  },\n")
open('/tmp/new_ratecards.ts','w').write(rc.getvalue())

ap = io.StringIO()
for (slug,name,*_rest) in D:
    ap.write(f"\n  // ---------- {name} ----------\n")
    for (aid,aname,*_r) in ACT[slug]:
        pad = ' ' * max(1, 26 - len(aid))
        ap.write(f"  '{aid}':{pad}{{ adult: null, child: null }},   // {aname}\n")
open('/tmp/new_prices.ts','w').write(ap.getvalue())
print('rate cards and price slots ready')
