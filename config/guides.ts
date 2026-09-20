import type { DestinationGuide } from './guide-types';

const thailand: DestinationGuide = {
  slug: 'thailand',
  intro:
    'Thailand is three different trips wearing one name. Bangkok is a dense, fast, food obsessed capital. The north around Chiang Mai is cooler, slower and mountainous. The south is two separate island coasts with opposite weather. Most first trips try to do all three in a week and end up spending two days of it in transit.',

  whenToGo: {
    summary:
      'November to February is the safe answer for most of the country: dry, cooler and busy. March to May is hot enough to change what you can do outdoors. June to October is the rainy season, which is cheaper and usually means short heavy afternoon downpours rather than lost days.',
    keyInsight:
      'The two island coasts have opposite monsoons, and almost nobody tells you this before you book. The Andaman side (Phuket, Krabi, Phi Phi) is at its best November to April and rough from May to October. The Gulf side (Koh Samui, Koh Phangan, Koh Tao) is the other way round: good from February to September, and wettest in October, November and December. If you are travelling in October, going to Samui instead of Phuket is the difference between a holiday and a week indoors.',
    bands: [
      {
        label: 'Cool and dry',
        months: [11, 12, 1, 2],
        weather: 'Warm days, comfortable evenings, very little rain in Bangkok and the north.',
        crowds: 'Peak. Christmas and New Year book out months ahead and cost the most.',
        verdict: 'best',
      },
      {
        label: 'Hot season',
        months: [3, 4, 5],
        weather: 'Consistently over 35C and humid. Temples and markets become hard work by midday.',
        crowds: 'Quieter, except Songkran in mid April, which is the busiest week of the year.',
        verdict: 'mixed',
      },
      {
        label: 'Green season',
        months: [6, 7, 8, 9, 10],
        weather: 'Rain most days, usually a heavy hour in the afternoon rather than all day.',
        crowds: 'Lowest prices of the year and the islands are genuinely quiet.',
        verdict: 'good',
      },
    ],
  },

  howLong: {
    minimum: '7 nights, and only if you pick two places.',
    ideal: '10 to 12 nights for a city, an island and one more thing.',
    note:
      'Thailand is longer than it looks. Bangkok to Phuket is a two hour flight, and Bangkok to Chiang Mai is another hour in the opposite direction. A week split three ways leaves you with roughly four usable days. Two bases in seven nights, or three bases in eleven, is the honest arithmetic.',
  },

  cities: [
    {
      name: 'Bangkok',
      nights: '2 to 3',
      why: 'The temples, the food and the only place in the country where everything is open late. Also the hub: almost every domestic route starts here.',
      dontMiss: [
        'Grand Palace and Wat Pho first thing, before 9am, for the heat as much as the crowds',
        'Wat Arun from the far riverbank at sunset, which is where the photograph actually is',
        'Yaowarat, the Chinatown food street, after dark on a weekday',
        'Chatuchak weekend market, but only if your dates include a Saturday or Sunday',
      ],
      overrated:
        'Khao San Road, unless you are 22 and looking for exactly that. The Floating Market at Damnoen Saduak is a two hour drive each way for something largely staged; Amphawa on a weekend evening is the better version.',
    },
    {
      name: 'Chiang Mai',
      nights: '3',
      why: 'Old walled city, a hundred and more temples, cooking schools, and the mountains starting twenty minutes out of town. Cooler and considerably calmer than Bangkok.',
      dontMiss: [
        'Doi Suthep at sunrise, before the tour buses arrive',
        'A full day cooking class, which usually starts at a market and is the best value day in Thailand',
        'An elephant sanctuary that does not offer riding or bathing with tourists',
        'Sunday Walking Street, if your dates allow it',
      ],
      overrated:
        'The White Temple is not in Chiang Mai. It is in Chiang Rai, three hours away each way, and a great many people book it as a half day and lose their whole day.',
    },
    {
      name: 'Phuket',
      nights: '3 to 4',
      why: 'The biggest island, the best flight connections, and the base for the Phi Phi and Phang Nga day trips.',
      dontMiss: [
        'Phi Phi and Maya Bay, on an early boat rather than the standard departure',
        'Phang Nga Bay by longtail with sea canoeing',
        'Phuket Old Town, Sino Portuguese shophouses and the best coffee on the island',
        'Kata or Karon for the beach, rather than Patong',
      ],
      overrated:
        'Patong Beach itself. Loud, crowded and the least pleasant water on the island. Fine for one night out, poor as a base.',
    },
    {
      name: 'Krabi',
      nights: '3',
      why: 'The limestone scenery people picture when they picture Thailand, with a calmer, cheaper feel than Phuket.',
      dontMiss: [
        'Railay, which is reachable only by boat and has the best beach in the country',
        'The Four Islands tour by longtail rather than speedboat',
        'Emerald Pool and the hot springs inland',
      ],
    },
    {
      name: 'Koh Samui',
      nights: '3 to 4',
      why: 'The Gulf coast alternative, and the answer when your dates fall in the Andaman monsoon.',
      dontMiss: [
        'Ang Thong Marine Park by boat',
        'The Friday fisherman village market at Bophut',
        'Na Muang waterfalls inland',
      ],
      overrated:
        'Chaweng is the Patong of Samui. Lamai or Bophut are better bases for anyone not there for the nightlife.',
    },
    {
      name: 'Pattaya',
      nights: '1 to 2',
      why: 'Two hours from Bangkok, so it works as a short beach add on when there is no time to fly south.',
      dontMiss: ['Koh Larn for the day', 'Sanctuary of Truth', 'Alcazar cabaret'],
      overrated:
        'The beach. Pattaya is a convenience stop, not a destination, and anyone with four spare days should fly south instead.',
    },
  ],

  routes: [
    {
      name: 'City and sand',
      nights: 7,
      stops: 'Bangkok 3, Phuket or Krabi 4',
      suits: 'A first trip, a couple, or anyone with only a week.',
    },
    {
      name: 'North and south',
      nights: 10,
      stops: 'Bangkok 2, Chiang Mai 3, Krabi 5',
      suits: 'Seeing the two halves of the country without rushing either.',
    },
    {
      name: 'Two coasts',
      nights: 12,
      stops: 'Bangkok 2, Khao Sok 2, Krabi 4, Koh Samui 4',
      suits: 'A longer trip, and the only way to see both island coasts properly.',
    },
    {
      name: 'Islands only',
      nights: 8,
      stops: 'Phuket 4, Koh Phi Phi 2, Krabi 2',
      suits: 'Honeymoons, and anyone who has already done Bangkok.',
    },
  ],

  gettingThere:
    'Direct flights from Delhi, Mumbai, Kolkata, Chennai and Bengaluru to Bangkok, usually four to four and a half hours. Kolkata and Chennai are consistently the cheapest departure points. Phuket and Krabi also take some direct traffic from India, which is worth checking if you are going straight to the islands, because it saves a domestic leg and a night in Bangkok.',

  gettingAround: [
    {
      label: 'Two Bangkok airports',
      detail:
        'Suvarnabhumi (BKK) handles most international flights. Don Mueang (DMK) handles most budget domestic ones, including AirAsia, Nok Air and Thai Lion. They are an hour apart in traffic. Booking a domestic connection with a short gap between the two is the single most common and most expensive planning mistake made in Thailand.',
    },
    {
      label: 'Domestic flights',
      detail:
        'Cheap and frequent. Bangkok to Phuket, Krabi or Chiang Mai is roughly an hour and often costs less than the train. Budget carriers charge for checked bags, and it is far cheaper to add them when booking than at the airport. Bangkok Airways holds the Samui airport, so Samui flights cost noticeably more than comparable routes.',
    },
    {
      label: 'The overnight train',
      detail:
        'Bangkok to Chiang Mai in a second class air conditioned sleeper is one of the better train journeys in Asia, saves a hotel night, and costs a fraction of a flight. Book the lower berth, which has a window. It needs booking well ahead in high season.',
    },
    {
      label: 'Ferries between islands',
      detail:
        'Phuket, Phi Phi and Krabi are connected by frequent ferries. Gulf islands run from Chumphon and Surat Thani. Crossings are cancelled in rough weather, so never plan an island transfer on the same day as an international flight home.',
    },
    {
      label: 'In the cities',
      detail:
        'Use Grab, not street taxis: the price is fixed before you get in and there is no meter argument. Bolt is cheaper in Bangkok where it operates. The BTS Skytrain and MRT beat any road transport in Bangkok at rush hour. In Chiang Mai the red songthaew trucks are a flat 30 baht within the old city, and you flag them down and state your destination.',
    },
    {
      label: 'Scooters',
      detail:
        'Cheap, everywhere, and the most common way travellers get hurt. You legally need an International Driving Permit carried with your licence. Police checkpoints on the islands fine tourists without one routinely, and more seriously, most travel insurance will not pay a hospital bill if you were riding unlicensed. That applies to the policy in your package too.',
    },
  ],

  connectivity: [
    {
      label: 'Which network',
      detail:
        'AIS has the best coverage on the islands and in the north. TrueMove is comparable in cities and slightly cheaper. Either is fine if you are staying in Bangkok and one beach.',
    },
    {
      label: 'What to buy',
      detail:
        'A tourist SIM with unlimited data for eight to fifteen days costs roughly 300 to 600 baht, which is 700 to 1,400 rupees. Buy it at the airport arrivals kiosk: the price is close to the shop price and they register and activate it for you.',
    },
    {
      label: 'Registration is the law',
      detail:
        'Every Thai SIM must be registered against a passport. A SIM bought from a stall that does not ask for your passport can stop working without warning a few days later.',
    },
    {
      label: 'eSIM',
      detail:
        'Works on any recent iPhone or flagship Android and means you land connected. Usually slightly more expensive than a physical tourist SIM, and worth it on a short trip or if you want to keep your Indian number active for OTPs.',
    },
  ],

  money: [
    {
      label: 'The ATM fee nobody mentions',
      detail:
        'Every Thai ATM charges a flat 220 baht per withdrawal to a foreign card, on top of anything your own bank charges. It is unavoidable and it is the same at every bank. Withdraw large amounts infrequently: five small withdrawals waste over 1,000 baht in fees alone.',
    },
    {
      label: 'Where to change cash',
      detail:
        'Airport and hotel exchange counters give poor rates. SuperRich and Vasu, both easy to find in Bangkok, are consistently among the best in the country and the difference on a trip budget is meaningful. Carry clean, unmarked notes.',
    },
    {
      label: 'Always pay in baht',
      detail:
        'When a card machine offers to charge you in rupees, decline it and choose baht. That conversion is set by the terminal and is always worse than your bank rate. This one costs people three to five percent on every card payment.',
    },
    {
      label: 'Cash still matters',
      detail:
        'Malls, hotels and chains take cards. Street food, markets, songthaews, longtail boats and most massage shops do not. 7-Eleven is on every corner and takes cards, which makes it a useful fallback.',
    },
  ],

  mistakes: [
    'Booking three bases in seven nights and spending a third of the trip in airports.',
    'Flying into Suvarnabhumi and out of Don Mueang with a two hour gap, then missing the domestic flight.',
    'Going to Phuket in October, when the Andaman coast is at its roughest, instead of Samui.',
    'Booking Chiang Mai in March without knowing about the burning season.',
    'Treating the Grand Palace dress code as a suggestion, then queueing to rent trousers in 35 degree heat.',
    'Renting a scooter without an International Driving Permit and voiding the travel insurance.',
    'Planning an island ferry on the morning of the flight home.',
  ],

  insider: [
    'Chiang Mai has a burning season. From late February to early April the surrounding farmland is burned and the air quality in the city regularly reaches levels that would close schools in India. Mountain views disappear. If you or anyone travelling with you has asthma, go in a different month, and if that is the only month you have, go somewhere else.',
    'Tap water is not drinkable, but the ice is fine. Commercially produced ice in Thailand is made from treated water and is the cylindrical kind with a hole through the middle. Almost every restaurant and bar uses it.',
    'If a tuk tuk driver tells you the Grand Palace is closed today for a ceremony, he is lying. It is a long running routine that ends at a gem shop paying him commission. The palace is open every day.',
    'In Bangkok a metered taxi or a Grab is usually cheaper than a tuk tuk, despite the tuk tuk looking like the budget option.',
    'Alcohol cannot legally be sold in shops between 2pm and 5pm, or after midnight. This catches people out on the way to a beach afternoon.',
    'Songkran, the water festival around 13 to 15 April, is genuinely fun and also shuts much of the country. Transport books out, prices rise and you will be soaked in the street whether you joined in or not.',
    'The Full Moon Party on Koh Phangan triples accommodation prices on the surrounding islands for several days. Check the lunar calendar before fixing island dates.',
    'Maya Bay reopened with restrictions after being closed to recover. You can visit, but swimming off the beach itself is not allowed, and boats moor at the back of the island.',
    'Many places calling themselves elephant sanctuaries still offer riding, or bathing sessions where dozens of tourists scrub the same animal all day. The better ones have no riding, limited contact and small groups.',
    'Buying a Buddha image larger than a small souvenir requires an export permit. Airport customs do check.',
  ],

  etiquette: [
    'Shoulders and knees covered at every temple, for men and women. Leggings are usually refused at the Grand Palace.',
    'Shoes off before entering a temple building, and often before entering a shop or home.',
    'Never point your feet at a person or at a Buddha image, and do not touch anyone on the head.',
    'Do not criticise the monarchy, even casually. Thailand enforces lese majeste laws and the penalties are severe.',
    'Women should not touch a monk or hand anything directly to one.',
    'Tipping is not expected. Rounding up a bill or leaving twenty baht is generous.',
  ],

  safety: [
    'Thailand is a low crime country for visitors. Almost all trouble involves scooters, alcohol or water.',
    'The jet ski damage claim is a known scam in Pattaya and parts of Phuket. Film the machine on your phone before you take it out, from every side.',
    'Do not feed or approach monkeys. Rabies is present and a bite means ending your trip in a hospital for a vaccine course.',
    'Rip currents on Andaman beaches in monsoon months are lethal and red flags are posted for a reason.',
    'Dengue exists year round and increases in the rainy season. Repellent in the evening is the whole precaution.',
  ],

  visaNote:
    'Indian passport holders currently enter Thailand without a visa for stays of up to 60 days. There is nothing to apply for and no fee. You will need a passport valid for at least six months, a confirmed return ticket and a hotel booking, all of which are part of your package, and an arrival card that we complete and submit for you. Visa free entry is a policy governments change, so we confirm the rule actually in force on your travel dates before you pay anything.',
};


const vietnam: DestinationGuide = {
  slug: 'vietnam',
  intro:
    'Vietnam is 1,650 kilometres of coastline with three distinct countries stacked along it. Hanoi in the north is old, dense and cool in winter. The centre around Hoi An and Da Nang is beaches and a preserved trading port. Ho Chi Minh City in the south is loud, hot and commercial. The mistake is treating them as one destination with one climate.',

  whenToGo: {
    summary:
      'There is no single best month for the whole country, because the north and south are on different systems. February to April and August to October are the safest bets if you are covering more than one region.',
    keyInsight:
      'Vietnam does not have one season, it has three. The north (Hanoi, Ha Long, Sapa) has a genuine winter: December to February is 15 to 20C, often grey and drizzly, and Ha Long Bay can be too misty to see. The centre (Hoi An, Da Nang) floods between September and November, when typhoons come ashore. The south (Ho Chi Minh, Mekong) is hot all year and simply has a wet season from May to October. A December trip that works beautifully in Saigon can be cold and colourless in Hanoi.',
    bands: [
      {
        label: 'Spring',
        months: [2, 3, 4],
        weather: 'The one window when all three regions are reliably pleasant at once.',
        crowds: 'Busy, and Tet in late January or February shuts much of the country for a week.',
        verdict: 'best',
      },
      {
        label: 'Autumn',
        months: [9, 10],
        weather: 'Good in the north and south. The centre can flood, so check before fixing Hoi An dates.',
        crowds: 'Moderate, and prices are lower than spring.',
        verdict: 'good',
      },
      {
        label: 'Summer',
        months: [5, 6, 7, 8],
        weather: 'Hot and humid everywhere, with afternoon rain in the south. Best beach weather in the centre.',
        crowds: 'Domestic peak. Da Nang and Nha Trang are at their busiest.',
        verdict: 'mixed',
      },
      {
        label: 'Northern winter',
        months: [11, 12, 1],
        weather: 'Cool and often grey in Hanoi, warm in Saigon. Ha Long haze is common.',
        crowds: 'Quiet and cheap, and the south is at its best.',
        verdict: 'mixed',
      },
    ],
  },

  howLong: {
    minimum: '7 nights for one region.',
    ideal: '10 to 14 nights to do north to south properly.',
    note:
      'Hanoi to Ho Chi Minh City is a two hour flight, not a drive. Trying to see both ends plus the centre in a week means three internal flights and very little else. Two regions in ten nights is the comfortable version.',
  },

  cities: [
    {
      name: 'Hanoi',
      nights: '2 to 3',
      why: 'The old capital. Tight streets, colonial buildings, lake temples and the best street food culture in the country.',
      dontMiss: [
        'The Old Quarter on foot, ideally with a food guide in the evening',
        'Train Street, from a cafe with a booked table rather than standing on the rails',
        'Hoan Kiem lake at 6am, when the whole city is exercising around it',
        'Water puppet theatre, which is far better than it sounds',
      ],
      overrated:
        'The Ho Chi Minh Mausoleum queue, which is long, strictly controlled and over in ninety seconds.',
    },
    {
      name: 'Ha Long Bay',
      nights: '1 to 2',
      why: 'Sixteen hundred limestone islands. Worth the detour, and only if you sleep on the water.',
      dontMiss: [
        'An overnight cruise rather than a day trip, which is four hours of coach for three hours of boat',
        'Kayaking into the caves at Luon or Dark and Bright lagoon',
        'Sunrise on the top deck before the fleet moves',
      ],
      overrated:
        'The cheapest cruises. This is one place where the bottom tier is genuinely unpleasant, and Lan Ha Bay is quieter than Ha Long proper for similar money.',
    },
    {
      name: 'Hoi An and Da Nang',
      nights: '3',
      why: 'A preserved trading port of lantern lit streets, next to a modern beach city with the best flight connections in central Vietnam.',
      dontMiss: [
        'Hoi An old town after dark, when the lanterns are lit and cars are banned',
        'A tailor, if you have two days: a made to measure suit or dress in 24 hours',
        'Ba Na Hills and the Golden Bridge, early, before the cable car queue builds',
        'My Son sanctuary at sunrise, a Cham temple complex an hour inland',
      ],
      overrated:
        'The Marble Mountains at midday in summer, which is a lot of hot stairs for a moderate view.',
    },
    {
      name: 'Ho Chi Minh City',
      nights: '2',
      why: 'Commercial, fast and flat. The war history here is the most affecting in the country.',
      dontMiss: [
        'War Remnants Museum, which is confronting and the single most worthwhile thing in the city',
        'Cu Chi tunnels as a half day, not a full one',
        'A Mekong Delta day trip by sampan',
        'Banh mi and ca phe sua da from a street cart, not a cafe',
      ],
    },
    {
      name: 'Sapa',
      nights: '2',
      why: 'Rice terraces and hill tribe villages in the far north. Only worth it if you will actually walk.',
      dontMiss: [
        'A guided village trek with a homestay night',
        'Fansipan by cable car if the weather is clear',
      ],
      overrated:
        'Sapa town itself, which has been built up hard. The value is in the valleys outside it.',
    },
  ],

  routes: [
    { name: 'The north', nights: 6, stops: 'Hanoi 3, Ha Long 1, Sapa 2', suits: 'A short first trip, or anyone who wants mountains and a cruise.' },
    { name: 'North and centre', nights: 9, stops: 'Hanoi 3, Ha Long 1, Hoi An 4, Da Nang 1', suits: 'The best balance of city, water and beach.' },
    { name: 'End to end', nights: 12, stops: 'Hanoi 3, Ha Long 1, Hoi An 3, Ho Chi Minh 3, Mekong 2', suits: 'Seeing the whole country once, properly.' },
    { name: 'South and beach', nights: 8, stops: 'Ho Chi Minh 3, Mekong 1, Phu Quoc 4', suits: 'Warm weather in the northern winter months.' },
  ],

  gettingThere:
    'Direct flights from Delhi, Mumbai and Kolkata to Hanoi and Ho Chi Minh City, roughly four and a half to five and a half hours. VietJet and Vietnam Airlines both fly the route, and Kolkata is usually the cheapest departure. Flying into one end and out of the other saves an internal flight and a day, and costs very little more.',

  gettingAround: [
    { label: 'Internal flights', detail: 'Hanoi to Da Nang or Ho Chi Minh takes 75 to 120 minutes and often costs under 2,500 rupees if booked ahead. VietJet is cheapest and least punctual; Vietnam Airlines includes baggage and runs closer to schedule. On a two week trip, two internal flights is normal.' },
    { label: 'The reunification train', detail: 'The overnight sleeper from Hanoi to Hue or Da Nang is a genuine experience and saves a hotel night. Book a soft sleeper, four berths, and bring your own food. It is slow: sixteen hours for a journey a plane does in eighty minutes.' },
    { label: 'Grab is everywhere', detail: 'Grab covers both cars and motorbikes in every city, and a GrabBike across Hanoi costs less than a hundred rupees. Metered taxis are fine if the meter is running; Mai Linh and Vinasun are the reputable names.' },
    { label: 'Crossing the road', detail: 'This is a genuine skill in Hanoi and Saigon. Walk at a slow, constant pace and do not stop or run. Traffic flows around you. Standing still waiting for a gap that never comes is how people get stuck in the middle of the road for ten minutes.' },
    { label: 'Scooter hire', detail: 'Cheap and tempting. You need an International Driving Permit with a motorcycle endorsement, and without one your insurance will not cover a hospital bill. Vietnamese traffic is not the place to learn.' },
  ],

  connectivity: [
    { label: 'Which network', detail: 'Viettel has the widest coverage including the mountains and the Mekong. Vinaphone and Mobifone are fine in cities. For Sapa or Ha Giang, take Viettel.' },
    { label: 'What to buy', detail: 'A tourist SIM with generous data for a week or two costs roughly 150,000 to 300,000 dong, which is about 500 to 1,000 rupees. Vietnam is one of the cheapest countries in Asia for mobile data.' },
    { label: 'Buy at the airport', detail: 'Airport counters register the SIM against your passport and activate it before you leave the terminal, which is worth the small premium over a street shop.' },
    { label: 'eSIM', detail: 'Widely supported and the simplest option if your phone takes one. You land connected and keep your Indian number live for OTPs.' },
  ],

  money: [
    { label: 'The zeros are the problem', detail: 'The dong runs to hundreds of thousands. 500,000 dong is about 1,600 rupees. The 20,000 and 500,000 notes are similar colours and are the most commonly confused pair in the country. Check the zeros every time before handing a note over.' },
    { label: 'ATM limits are low', detail: 'Most machines cap a withdrawal at two or three million dong, which is roughly 6,500 to 10,000 rupees, and charge a fee each time. TPBank and HSBC machines allow larger withdrawals and are worth seeking out.' },
    { label: 'Cash country', detail: 'Cards work in hotels, malls and mid range restaurants. Street food, markets, GrabBike, boats and most small shops are cash only. Keep small notes: nobody has change for a 500,000.' },
    { label: 'Always pay in dong', detail: 'If a card machine offers to bill you in rupees, refuse and pay in dong. The terminal rate is always worse than your bank rate.' },
  ],

  mistakes: [
    'Booking Hanoi and Ha Long in December and expecting the postcard weather, then finding grey mist.',
    'Doing Ha Long as a day trip from Hanoi: eight hours in a coach for three hours on the water.',
    'Booking Hoi An in October, the peak of the central flood season.',
    'Trying to cover Hanoi, Hoi An and Saigon in seven nights.',
    'Arriving during Tet without checking, when much of the country closes for a week.',
    'Not carrying the printed e-visa approval, which immigration does ask to see.',
  ],

  insider: [
    'Tet, the lunar new year in late January or February, is the single most important thing to check before fixing dates. Shops, restaurants and family run hotels close for up to a week, domestic transport sells out months ahead, and prices rise sharply. It is a fascinating time to be there and a terrible time to try to do anything.',
    'Lan Ha Bay sits next to Ha Long, has the same limestone scenery and a fraction of the boats. Most operators offer it and almost nobody asks.',
    'Hoi An tailors need two fittings to produce something good. A suit promised in four hours will look like a suit made in four hours. Give it two days.',
    'Egg coffee in Hanoi sounds wrong and is excellent. So is the coconut coffee in the south.',
    'The e-visa approval must be printed or downloadable offline. Airport wifi at 6am is not the moment to discover your email will not load.',
    'A GrabBike is faster than a car in Hanoi and Saigon traffic, costs about a third as much, and comes with a helmet.',
    'Street food stalls with tiny plastic stools and a queue of locals are the ones to eat at. An empty restaurant with an English menu and photographs is not.',
    'Ha Giang in the far north is the best motorbike loop in Asia and is almost entirely absent from Indian itineraries. It needs four days and is worth them.',
  ],

  etiquette: [
    'Shoes off before entering a home, a temple and many small shops.',
    'Shoulders and knees covered at pagodas and temples.',
    'Pass and receive things, especially money, with both hands where you can.',
    'Bargaining is expected in markets and not in shops with marked prices.',
    'Tipping is not customary, though it is increasingly welcome in tourist areas.',
  ],

  safety: [
    'Vietnam is safe for visitors. The main risks are traffic and bag snatching.',
    'Phone snatching from moving motorbikes is common in Ho Chi Minh City. Do not stand at the kerb using your phone, and do not hold it loosely while walking.',
    'Cyclo and taxi overcharging: agree a price before getting in, or use Grab and avoid the conversation.',
    'Traffic is the genuine danger. Look both ways even on a one way street, because motorbikes use both.',
    'Tap water is not drinkable. Bottled water is cheap and everywhere.',
  ],

  visaNote:
    'Indian passport holders need a Vietnam e-visa, valid for up to 90 days, single or multiple entry. It is approved in roughly three to seven working days and costs about 2,200 rupees for single entry, which is included in your package. We complete the application, pay the fee and send you the approved visa as a PDF to carry printed. Your passport needs at least six months validity from the date you arrive.',
};

const sriLanka: DestinationGuide = {
  slug: 'sri-lanka',
  intro:
    'Sri Lanka packs beaches, hill country, ancient cities and a genuine leopard safari into an island the size of Kerala. Nothing is more than a few hours from anything else, which makes it the rare destination where a week is genuinely enough to see several different things.',

  whenToGo: {
    summary:
      'December to March for the west and south coasts, which is where most first trips go. The hill country is pleasant nearly all year and cold at night.',
    keyInsight:
      'Sri Lanka has two monsoons hitting opposite coasts at opposite times, which means there is no bad month, only a wrong coast. The southwest monsoon soaks the west and south from May to September, while the east coast around Trincomalee and Arugam Bay is dry and beautiful. From October to January it reverses. Almost every itinerary sold to Indian travellers goes south regardless of season, when a July trip should be heading east.',
    bands: [
      {
        label: 'South coast season',
        months: [12, 1, 2, 3],
        weather: 'Dry and hot on the west and south. The classic beach window.',
        crowds: 'Peak, and Christmas to mid January is the most expensive fortnight of the year.',
        verdict: 'best',
      },
      {
        label: 'East coast season',
        months: [5, 6, 7, 8, 9],
        weather: 'Dry and calm in Trincomalee, Nilaveli and Arugam Bay while the south is wet.',
        crowds: 'Quiet, cheap, and almost unknown to Indian itineraries.',
        verdict: 'good',
      },
      {
        label: 'Between monsoons',
        months: [4, 10, 11],
        weather: 'Unpredictable on both coasts, with heavy short bursts. The hill country stays fine.',
        crowds: 'Lowest prices. April brings Sinhala and Tamil New Year, when much of the island closes.',
        verdict: 'mixed',
      },
    ],
  },

  howLong: {
    minimum: '5 nights, enough for the cultural triangle or the south coast, not both.',
    ideal: '8 to 10 nights for a proper loop.',
    note:
      'Distances are short but the roads are slow. Colombo to Ella looks like nothing on a map and takes six to seven hours by car. Budget travel time generously and use the train where it exists, because the train is faster and far more pleasant than the road.',
  },

  cities: [
    {
      name: 'Colombo',
      nights: '0 to 1',
      why: 'The arrival point. Pleasant enough, but not the reason anybody comes.',
      dontMiss: ['Pettah market and the Red Mosque', 'Galle Face Green at sunset for street food'],
      overrated:
        'Staying here at all. Most people are better off driving straight out on arrival and spending the night somewhere they actually want to be.',
    },
    {
      name: 'Sigiriya and the cultural triangle',
      nights: '2',
      why: 'A palace on top of a two hundred metre rock, plus Dambulla cave temples and Polonnaruwa nearby.',
      dontMiss: [
        'Sigiriya rock at 7am, before both the heat and the coach parties',
        'Pidurangala rock opposite, which is cheaper, quieter and has the better view because Sigiriya is in it',
        'Dambulla cave temples on the way through',
        'Minneriya or Kaudulla for wild elephants in the late afternoon',
      ],
    },
    {
      name: 'Kandy',
      nights: '1 to 2',
      why: 'The last royal capital, the Temple of the Tooth, and the gateway to the hill country.',
      dontMiss: [
        'Temple of the Tooth at evening puja, around 6:30pm, which is when it comes alive',
        'The botanical gardens at Peradeniya',
        'A Kandyan dance performance, touristy and genuinely good',
      ],
    },
    {
      name: 'Ella and the hill country',
      nights: '2',
      why: 'Tea estates, waterfalls and cool air. The part of the island that surprises people most.',
      dontMiss: [
        'The Kandy to Ella train, seven hours and the best rail journey in Asia',
        'Nine Arches Bridge, timed for a train crossing',
        'Little Adams Peak at sunrise, a gentle forty minute walk',
        'A working tea factory tour with a tasting',
      ],
      overrated:
        'Nuwara Eliya as a base. It is colder, wetter and duller than Ella, and works better as a stop on the way through.',
    },
    {
      name: 'Yala or Udawalawe',
      nights: '1',
      why: 'The highest density of leopards anywhere in the world, and elephants in the open.',
      dontMiss: ['A dawn game drive rather than an afternoon one', 'Udawalawe if elephants matter more than leopards'],
      overrated:
        'Yala in peak season, when block one can have eighty jeeps chasing one sighting. Udawalawe or Wilpattu are calmer.',
    },
    {
      name: 'Galle and the south coast',
      nights: '2 to 3',
      why: 'A Dutch walled fort on a headland, with the beaches either side of it.',
      dontMiss: [
        'Galle Fort walls at sunset',
        'Mirissa for whale watching between December and April',
        'Hiriketiya or Talalla for a quieter beach than Unawatuna',
      ],
      overrated:
        'The stilt fishermen at Koggala, who now largely pose for paid photographs rather than fish.',
    },
  ],

  routes: [
    { name: 'The classic loop', nights: 8, stops: 'Sigiriya 2, Kandy 1, Ella 2, Yala 1, Galle 2', suits: 'A first trip that sees everything the island is known for.' },
    { name: 'Culture and hills', nights: 6, stops: 'Sigiriya 2, Kandy 2, Ella 2', suits: 'Skipping the beach for temples, tea and trains.' },
    { name: 'Beach and safari', nights: 6, stops: 'Galle 3, Yala 1, Mirissa 2', suits: 'A short, low effort trip in the southern season.' },
    { name: 'The east coast', nights: 7, stops: 'Sigiriya 2, Trincomalee 3, Kandy 2', suits: 'May to September, when the south is wet and nobody else is going east.' },
  ],

  gettingThere:
    'Under ninety minutes from Chennai, around three hours from Mumbai and Delhi, into Colombo Bandaranaike. It is the shortest international flight available on an Indian passport to somewhere that feels genuinely different, and fares from the south are consistently low.',

  gettingAround: [
    { label: 'A car and driver is the norm', detail: 'For a loop covering several stops, a car with a driver for the whole trip is the standard arrangement and costs far less than it would in India. The driver waits, knows the roads and doubles as a fixer. Self driving is legal but not advisable.' },
    { label: 'Take the train where it exists', detail: 'Kandy to Ella is the famous one and should be booked in reserved second class, ideally seats on the right heading south. Colombo to Galle along the coast is also lovely. Unreserved carriages are standing room only in season.' },
    { label: 'Tuk tuks and apps', detail: 'PickMe is the local ride app and works like Grab. In towns without it, agree the fare before getting in. A metered tuk tuk is cheap: most short town hops are under 200 rupees Sri Lankan.' },
    { label: 'Roads are slower than they look', detail: 'Average speed on most routes is 35 to 40 kilometres an hour. A 150 kilometre transfer is a four hour day. Two long transfers back to back will ruin an itinerary.' },
  ],

  connectivity: [
    { label: 'Which network', detail: 'Dialog has the best coverage, particularly in the hill country and the east. Mobitel is a close second and slightly cheaper.' },
    { label: 'What to buy', detail: 'A tourist SIM with a generous data bundle runs about 1,000 to 1,500 Sri Lankan rupees, roughly 300 to 450 Indian rupees. Among the cheapest data anywhere.' },
    { label: 'Arrival counters', detail: 'Dialog and Mobitel both have desks in the arrivals hall at Colombo, open for every flight. They register the SIM and set it up before you leave.' },
  ],

  money: [
    { label: 'Two currencies with the same name', detail: 'Prices are in Sri Lankan rupees, worth roughly a third of an Indian rupee. A 5,000 rupee dinner sounds alarming and is about 1,400 Indian rupees. Confirm which rupee anyone is quoting.' },
    { label: 'Cash outside the cities', detail: 'Cards work in Colombo, Galle and larger hotels. Guesthouses, tuk tuks, entry tickets and roadside food are cash. Withdraw in Colombo before heading inland.' },
    { label: 'Entry fees add up', detail: 'Foreigner ticket prices at the major sites are significant. Sigiriya alone is around 30 US dollars a head, and a cultural triangle itinerary can run to 100 dollars per person in entry fees. These are in your quote, and they surprise people who budget only for hotels.' },
  ],

  mistakes: [
    'Going to the south coast in July, when the southwest monsoon is on it and the east is perfect.',
    'Spending the first night in Colombo out of habit rather than driving on.',
    'Booking the Kandy to Ella train unreserved and standing for seven hours.',
    'Planning two long road transfers on consecutive days.',
    'Budgeting for hotels and forgetting entry fees, which are high for foreigners.',
    'Climbing Sigiriya at midday in March.',
  ],

  insider: [
    'Pidurangala is the rock opposite Sigiriya. It costs a fraction as much, takes half the time, and gives you the view of Sigiriya that Sigiriya itself cannot. Serious photographers do Pidurangala at sunrise and skip the main rock entirely.',
    'The east coast season is the inverse of the south. Trincomalee and Nilaveli in July are calm, hot and empty, while everyone else is getting rained on in Galle.',
    'On the Kandy to Ella train sit on the right hand side heading south for the tea estate views, and expect people to hang out of the doorways. It is normal and largely safe.',
    'Whale watching from Mirissa runs roughly December to April. Outside that window the boats still go out and the whales have gone.',
    'Sinhala and Tamil New Year in mid April closes shops, transport and many hotels for several days. It is not mentioned on most booking sites.',
    'Ayurvedic treatment here is genuine and inexpensive compared with Kerala, and most hill country hotels have a proper practitioner rather than a spa menu.',
    'Tuk tuk drivers will offer to be your driver for the whole loop. It works out cheaper than a car but is a long way to sit in an open vehicle in the rain.',
  ],

  etiquette: [
    'Shoes and hats off at every temple, and shoulders and knees covered.',
    'Never turn your back on a Buddha statue for a photograph. It is treated as a serious insult and tourists have been detained for it.',
    'Tattoos of the Buddha are a real problem at immigration and have caused deportations. Cover them.',
    'Ask before photographing people, particularly monks.',
    'Public displays of affection are frowned on outside Colombo.',
  ],

  safety: [
    'Sri Lanka is safe and the recent political instability has settled. Normal precautions are enough.',
    'The sea is the main hazard. Rip currents on the south coast are strong and many beaches have no lifeguard.',
    'Wild elephants cross roads at dusk in the national park areas. This is a real reason not to drive at night.',
    'Dengue is present year round, particularly after rain. Repellent at dawn and dusk.',
    'Tap water is not drinkable anywhere on the island.',
  ],

  visaNote:
    'As of May 2026 the Sri Lankan tourist ETA is free for Indian passport holders, valid for 30 days with double entry. There is no fee at all, though the authorisation still has to be applied for and approved before you fly. We complete and submit it for you and send the approval. Your passport needs six months validity. Free entry is a policy that can be withdrawn, so we confirm the rule in force on your travel dates before you pay.',
};

const bali: DestinationGuide = {
  slug: 'bali',
  intro:
    'Bali is one island with several entirely different holidays on it. Ubud inland is rice terraces, temples and yoga. The southwest strip from Seminyak to Canggu is beach clubs and cafes. Uluwatu in the south is cliffs and surf. The east and north are quiet and barely visited. Choosing wrong is the main way people come back disappointed.',

  whenToGo: {
    summary:
      'April to October is the dry season and the reliable window. November to March is wetter, cheaper and still perfectly workable if you accept an afternoon downpour.',
    keyInsight:
      'The rain is not the reason to avoid the wet season. The real issue is that from roughly December to March the southwest beaches collect monsoon debris carried in on the current, and Kuta, Legian and Seminyak can have visible rubbish on the sand in the mornings. The east coast beaches and Nusa Penida are largely unaffected. If your dates fall in that window, base yourself in Ubud or Sanur rather than paying beachfront prices for a beach you will not use.',
    bands: [
      {
        label: 'Dry season',
        months: [4, 5, 6, 9, 10],
        weather: 'Warm, dry and less humid. The best all round conditions.',
        crowds: 'Busy but manageable. Best value within the good weather window.',
        verdict: 'best',
      },
      {
        label: 'Peak dry',
        months: [7, 8],
        weather: 'Dry and breezy, and the best surf on the west coast.',
        crowds: 'European summer holidays. Villas double and Canggu traffic is genuinely bad.',
        verdict: 'good',
      },
      {
        label: 'Wet season',
        months: [11, 12, 1, 2, 3],
        weather: 'Humid with heavy afternoon rain. Mornings are usually clear.',
        crowds: 'Cheapest, apart from Christmas and New Year which spike hard.',
        verdict: 'mixed',
      },
    ],
  },

  howLong: {
    minimum: '6 nights, split between two bases.',
    ideal: '8 to 10 nights for Ubud, a beach and one of the Nusa islands.',
    note:
      'Bali is small and its roads are terrible. Ubud to Canggu is 25 kilometres and takes an hour and a half in the afternoon. Never plan more than one long transfer in a day, and never plan a transfer and an activity in the same afternoon.',
  },

  cities: [
    {
      name: 'Ubud',
      nights: '3',
      why: 'Inland, green and cooler. Rice terraces, temples, waterfalls and the best food on the island.',
      dontMiss: [
        'Tegallalang rice terraces before 8am, when they are quiet and the light is right',
        'Tirta Empul water temple for the purification ritual, with a guide who can explain it',
        'A waterfall morning at Tibumana or Kanto Lampo, which are far less crowded than Tegenungan',
        'A Balinese cooking class starting at a morning market',
      ],
      overrated:
        'The Bali Swing and the various Instagram platforms, which are queues of twenty minutes for a photograph that everybody already has. The Monkey Forest is fine but the macaques will take your sunglasses.',
    },
    {
      name: 'Seminyak and Canggu',
      nights: '3',
      why: 'Beach clubs, restaurants and the busiest, most built up part of the island.',
      dontMiss: [
        'A sunset beach club, booked ahead, with the minimum spend understood before you go',
        'Tanah Lot temple at sunset, ideally on the way in or out rather than a special trip',
        'Surf lessons at Batu Bolong, where the break is forgiving',
      ],
      overrated:
        'Kuta. It is the oldest, most crowded and least pleasant part of the strip, and it survives mostly on reputation and cheap rooms.',
    },
    {
      name: 'Uluwatu and the Bukit',
      nights: '2',
      why: 'Clifftop temples, dramatic beaches at the bottom of long staircases, and the best sunsets on the island.',
      dontMiss: [
        'Uluwatu temple with the Kecak fire dance at sunset',
        'Padang Padang or Bingin beach, both down steep steps and worth them',
        'A clifftop bar at golden hour',
      ],
    },
    {
      name: 'Nusa Penida',
      nights: '1 to 2',
      why: 'The cliffs and lagoons in every Bali photograph are mostly here, not on the main island.',
      dontMiss: [
        'Kelingking, the T-Rex shaped cliff, early before the tour boats land',
        'Angels Billabong and Broken Beach',
        'Snorkelling with manta rays at Manta Point, conditions permitting',
      ],
      overrated:
        'Doing it as a day trip. The fast boat each way plus rough island roads leaves about four hours on land, and the roads are genuinely bad. One night on the island turns it from an ordeal into a highlight.',
    },
    {
      name: 'Sanur or Amed',
      nights: '2',
      why: 'The calm east coast. Sanur for a gentle family beach, Amed for diving and black sand quiet.',
      dontMiss: ['Sunrise over Lombok from Sanur beach', 'The USAT Liberty wreck dive at Tulamben, from shore'],
    },
  ],

  routes: [
    { name: 'First trip', nights: 7, stops: 'Ubud 3, Seminyak or Canggu 4', suits: 'A couple or friends seeing the two sides of the island.' },
    { name: 'Island and cliffs', nights: 9, stops: 'Ubud 3, Nusa Penida 2, Uluwatu 4', suits: 'The version with the scenery people actually came for.' },
    { name: 'Family', nights: 8, stops: 'Ubud 3, Sanur 5', suits: 'Calm water, short transfers and no beach club minimums.' },
    { name: 'Honeymoon', nights: 10, stops: 'Ubud 4, Uluwatu 3, Gili or Nusa Lembongan 3', suits: 'Private pool villas and one boat trip.' },
  ],

  gettingThere:
    'Direct flights from Mumbai, Delhi, Chennai and Bengaluru to Denpasar take roughly five and a half to seven hours. There are also plentiful one stop options through Kuala Lumpur and Singapore that are often cheaper. Denpasar airport is in the south, twenty minutes from Kuta and ninety minutes from Ubud in traffic.',

  gettingAround: [
    { label: 'Hire a car with a driver', detail: 'The standard arrangement, and about 700,000 rupiah a day, roughly 3,700 Indian rupees, for eight to ten hours including fuel. Cheaper than several taxis, and the driver waits at every stop. This is how most trips should be run.' },
    { label: 'Grab and Gojek, with caveats', detail: 'Both work and are cheap, but many areas have local transport cartels that physically prevent app drivers from picking up. Ubud centre, parts of Canggu and the Nusa islands are the worst for it. You will see signs banning them. Apps work fine for drop off, less reliably for pick up.' },
    { label: 'Scooters', detail: 'The way locals move and the way tourists get hurt. You need an International Driving Permit with a motorcycle endorsement. Police checkpoints target tourists, and without the right licence your insurance will not cover a hospital bill. Bali road accidents involving tourists are common enough that hospitals have dedicated wards.' },
    { label: 'Fast boats to the islands', detail: 'Nusa Penida is thirty to forty minutes from Sanur. Gili and Lombok are ninety minutes to two hours. Crossings are cancelled in rough seas, so never book one on the day of an international flight home.' },
    { label: 'Traffic is the constraint', detail: 'There are no motorways. A 20 kilometre transfer can take ninety minutes between four and seven in the evening. Plan around it rather than being surprised by it.' },
  ],

  connectivity: [
    { label: 'Which network', detail: 'Telkomsel has by far the best coverage, including Nusa Penida and the north. Indosat and XL are cheaper and adequate in the south.' },
    { label: 'What to buy', detail: 'A tourist SIM with 20 to 50GB for a month costs around 150,000 to 250,000 rupiah, roughly 800 to 1,300 Indian rupees. Buy from an official Telkomsel outlet or the airport counter, not a street kiosk.' },
    { label: 'Registration', detail: 'Indonesian SIMs must be registered against a passport. Kiosks that skip this sell SIMs that stop working within days.' },
  ],

  money: [
    { label: 'More zeros', detail: 'The rupiah runs to hundreds of thousands. 100,000 rupiah is about 530 Indian rupees. Prices are often written as 100k or even 100, so confirm what a number means before agreeing to it.' },
    { label: 'Use bank ATMs only', detail: 'Stick to machines in bank branches or inside malls. Freestanding street ATMs in tourist areas have a long history of card skimming. Most machines dispense 50,000 or 100,000 notes and cap withdrawals around 2.5 million rupiah.' },
    { label: 'Never use a street money changer', detail: 'The sleight of hand short change routine at unauthorised changers is the most common tourist scam on the island. Use an authorised changer with a permanent shopfront and a posted licence, count in front of them, and walk away from anyone offering a rate noticeably better than everyone else.' },
    { label: 'The tourist levy', detail: 'Bali charges a tourist levy of 150,000 rupiah per person, about 800 Indian rupees, payable online before arrival or at the airport. It is separate from the visa and is easy to miss.' },
  ],

  mistakes: [
    'Basing the whole trip in one place and then spending three hours a day in a car.',
    'Doing Nusa Penida as a day trip and seeing it through a car window.',
    'Booking beachfront in Seminyak in January, when the monsoon brings debris onto that stretch.',
    'Renting a scooter without an International Driving Permit and voiding the insurance.',
    'Changing money at a street changer with an unusually good rate.',
    'Forgetting the tourist levy, which is checked on arrival.',
  ],

  insider: [
    'Nyepi, the Balinese day of silence in March, shuts the entire island for 24 hours. The airport closes completely, nobody may leave their accommodation, lights must be off after dark and even the internet is switched off. It is extraordinary if you plan for it and a disaster if you do not.',
    'Ubud is not near a beach. It is an hour and a half inland. A surprising number of people book it expecting to swim.',
    'The famous Tegallalang terraces have individual landowners who collect a small donation at each viewpoint. Carry small notes and expect several.',
    'Temple dress requires a sarong and sash. They are lent at the entrance to every major temple, so there is no need to buy one.',
    'Menstruating women are traditionally asked not to enter temple grounds. Signs state it plainly and it is taken seriously.',
    'Beach clubs have minimum spends that are not always obvious when booking. A sunbed at a well known club can carry a spend of 500,000 rupiah or more per person.',
    'The Gili islands are in Lombok, not Bali, and have no motor vehicles at all. Gili Trawangan parties, Gili Air is balanced, Gili Meno is empty.',
    'Book a villa with a private pool rather than a resort room. In Bali it often costs the same and is the whole point of going.',
  ],

  etiquette: [
    'Sarong and sash at every temple, lent at the gate.',
    'Do not step on the small palm leaf offerings on pavements and doorsteps. Walk around them.',
    'Use your right hand to give and receive. The left is considered unclean.',
    'Do not touch anyone on the head, including children.',
    'Nudity and topless sunbathing are illegal and locally offensive, whatever other tourists are doing.',
  ],

  safety: [
    'Bali is safe. The dangers are the road, the sea and the monkeys, in that order.',
    'Scooter accidents are the leading cause of tourist hospitalisation. Helmets are compulsory and enforced.',
    'Rip currents on the west coast beaches are strong. Swim between the flags where they exist.',
    'Do not carry food, bags or sunglasses loosely near the Monkey Forest or Uluwatu. The macaques are practised thieves and a bite means a rabies vaccine course.',
    'Methanol poisoning from counterfeit spirits has killed tourists in Indonesia. Drink beer, wine or spirits at established venues, and be wary of very cheap cocktails.',
    'Bali belly is common. Bottled water only, and be sensible about ice outside established places.',
  ],

  visaNote:
    'Indian passport holders get a visa on arrival for Indonesia, valid 30 days and extendable once by a further 30. The fee is around 2,700 rupees and is included in your package. We apply for the electronic version before you travel so you skip the airport payment queue and walk straight to immigration with a QR code. Separately, Bali charges a tourist levy of about 800 rupees per person, which we also handle. Your passport needs six months validity.',
};

const malaysia: DestinationGuide = {
  slug: 'malaysia',
  intro:
    'Malaysia is the most underrated country in South East Asia for Indian travellers, largely because it is treated as a stopover. Kuala Lumpur is a genuinely good city, the food is the best argument for going, and the islands on both coasts are quieter and cheaper than Thailand.',

  whenToGo: {
    summary:
      'Malaysia is equatorial, so it is hot and humid all year and it rains in short bursts in every month. The question is not when to go but which coast to be on.',
    keyInsight:
      'The peninsula has two coasts with opposite monsoons, and this decides where your beach should be. The east coast islands, Perhentian, Redang and Tioman, are at their best from March to October and most of them literally close from November to February, when the northeast monsoon makes the crossings unsafe. The west coast, Langkawi and Penang, is the other way round and is best from November to March. Booking Perhentian in December is booking a closed island.',
    bands: [
      {
        label: 'West coast season',
        months: [12, 1, 2, 3],
        weather: 'Driest for Langkawi, Penang and Kuala Lumpur.',
        crowds: 'Peak, and Chinese New Year in late January or February fills everything.',
        verdict: 'best',
      },
      {
        label: 'East coast season',
        months: [4, 5, 6, 7, 8, 9],
        weather: 'The window for Perhentian, Redang and Tioman. Calm, clear water.',
        crowds: 'Moderate. The islands are genuinely quiet midweek.',
        verdict: 'good',
      },
      {
        label: 'Northeast monsoon',
        months: [10, 11],
        weather: 'Heavy rain on the east coast, where most island resorts close entirely.',
        crowds: 'Cheapest. Fine for a city and west coast trip.',
        verdict: 'mixed',
      },
    ],
  },

  howLong: {
    minimum: '5 nights for Kuala Lumpur and one more place.',
    ideal: '8 to 10 nights for a city, an island and Penang.',
    note:
      'Malaysia is well connected and easy to move around, which means a week goes further here than in most of the region. Internal flights are an hour and cheap, and the roads are the best in South East Asia.',
  },

  cities: [
    {
      name: 'Kuala Lumpur',
      nights: '3',
      why: 'A real city rather than a tourist strip. Towers, caves, colonial districts and food from three cultures.',
      dontMiss: [
        'Petronas Towers skybridge, booked in advance for a sunset slot',
        'Batu Caves early morning, before the heat hits the 272 steps',
        'Jalan Alor for street food after dark',
        'KL Bird Park, which is the largest free flight aviary in the world and genuinely good with children',
      ],
      overrated:
        'Bukit Bintang shopping, unless you specifically want malls. The Menara KL tower view is broadly the same as the Petronas one for more money.',
    },
    {
      name: 'Penang',
      nights: '2 to 3',
      why: 'The food capital of Malaysia and a UNESCO listed old town you can walk in an afternoon.',
      dontMiss: [
        'George Town street art and the clan jetties on foot',
        'A hawker crawl at Gurney Drive or New Lane, which is the actual reason to come',
        'Kek Lok Si temple, lit up at night around Chinese New Year',
        'Penang Hill by funicular for the view and the cooler air',
      ],
      overrated:
        'Batu Ferringhi beach, which is not why anyone should come to Penang.',
    },
    {
      name: 'Langkawi',
      nights: '3',
      why: 'The west coast island. Duty free, good beaches, and cheaper than equivalent Thai islands.',
      dontMiss: [
        'The SkyCab cable car and curved sky bridge, ideally first thing before cloud sets in',
        'Island hopping to Dayang Bunting and the eagle feeding',
        'Sunset on Cenang beach',
        'A mangrove tour through the Kilim geoforest park',
      ],
    },
    {
      name: 'Malacca',
      nights: '1',
      why: 'Portuguese, Dutch and British layers in one small riverside town, two hours from KL.',
      dontMiss: ['Jonker Street night market on a weekend', 'The river walk after dark', 'Nyonya food, which exists nowhere else'],
    },
    {
      name: 'Perhentian or Redang',
      nights: '3',
      why: 'The east coast islands. Clear water, excellent snorkelling, very little development.',
      dontMiss: ['Snorkelling with turtles', 'Long Beach on Perhentian Kecil'],
      overrated:
        'Nothing, but check your dates. These islands are effectively shut from November to February.',
    },
  ],

  routes: [
    { name: 'City and island', nights: 7, stops: 'Kuala Lumpur 3, Langkawi 4', suits: 'A first trip, or a short one with easy logistics.' },
    { name: 'Food and beach', nights: 8, stops: 'Kuala Lumpur 2, Penang 3, Langkawi 3', suits: 'Anyone who travels mainly to eat.' },
    { name: 'Twin cities', nights: 9, stops: 'Kuala Lumpur 3, Malacca 1, Singapore 3, Langkawi 2', suits: 'Combining both countries, which is the common way to do it.' },
    { name: 'East coast', nights: 8, stops: 'Kuala Lumpur 2, Perhentian 4, Penang 2', suits: 'April to September only, when the east coast is open.' },
  ],

  gettingThere:
    'Direct flights from Chennai, Bengaluru, Delhi, Mumbai, Hyderabad and Kochi to Kuala Lumpur, four and a half to five and a half hours. AirAsia, Batik Air and Malaysia Airlines all fly it and fares from the southern cities are among the lowest of any international route out of India.',

  gettingAround: [
    { label: 'Two KL airports', detail: 'KLIA handles full service carriers and KLIA2 handles AirAsia and other budget airlines. They are connected by a free shuttle and a train, but they are not the same building. Check which terminal your domestic connection leaves from.' },
    { label: 'Grab works properly here', detail: 'Malaysia is the easiest country in the region for ride hailing. Grab is cheap, reliable and used by everyone. There is essentially no reason to take a street taxi.' },
    { label: 'The KLIA Ekspres', detail: 'Twenty eight minutes from the airport to KL Sentral, against an hour or more by road in traffic. Considerably more expensive than a Grab and worth it at rush hour.' },
    { label: 'Internal flights and trains', detail: 'KL to Penang or Langkawi is an hour in the air and often under 2,000 rupees. The ETS train to Penang takes four hours, is comfortable, and is the better choice if you dislike airports.' },
    { label: 'Driving is genuinely easy', detail: 'Malaysia has the best roads in South East Asia, drives on the left like India, and signage is in English. It is one of the few countries in the region where self drive is a reasonable option.' },
  ],

  connectivity: [
    { label: 'Which network', detail: 'Maxis has the best coverage overall. CelcomDigi is comparable in cities and cheaper. Either is fine for a standard itinerary.' },
    { label: 'What to buy', detail: 'A tourist SIM with a large data allowance runs around 30 to 50 ringgit, roughly 600 to 1,000 Indian rupees. Airport counters at both KLIA terminals sell and register them.' },
    { label: 'Coverage on the islands', detail: 'Langkawi is well covered. The Perhentians have patchy signal and several resorts have no wifi at all, which is either a problem or the point.' },
  ],

  money: [
    { label: 'The ringgit is simple', detail: 'About 19 to 20 Indian rupees to one ringgit, so a 20 ringgit meal is roughly 400 rupees. Easy mental arithmetic compared with the rest of the region.' },
    { label: 'Cards are widely accepted', detail: 'Malaysia is much more card friendly than Thailand, Vietnam or Indonesia. Hawker stalls and small shops are still cash, and many now take QR payments.' },
    { label: 'ATM fees are modest', detail: 'Most banks charge a small fixed fee, far less than Thailand. Maybank and CIMB machines are everywhere.' },
    { label: 'Langkawi is duty free', detail: 'The whole island is a duty free zone, which makes alcohol and chocolate noticeably cheaper than the mainland.' },
  ],

  mistakes: [
    'Booking an east coast island between November and February, when most of them are closed.',
    'Treating Malaysia as a two day stopover on the way to somewhere else.',
    'Arriving at KLIA for a flight departing from KLIA2.',
    'Going to Penang and eating in restaurants rather than at hawker centres.',
    'Not filing the digital arrival card, which is required before departure.',
  ],

  insider: [
    'The Malaysia Digital Arrival Card must be submitted online at least three days before you fly. It is free, it takes five minutes, and people are turned away at check in without it. We file it for you, but it is the single most common Malaysia admin failure.',
    'Visa free entry for Indian passport holders currently runs to 31 December 2026. It has been extended twice, and it may be extended again, but it is a policy with an end date rather than a permanent arrangement. Worth knowing if you are planning far ahead.',
    'Penang hawker stalls largely close on different days, and many shut Mondays or Tuesdays. Check before making a special trip for one dish.',
    'Malaysia is a Muslim majority country and alcohol is taxed heavily on the mainland, so a beer costs more than in Thailand. Langkawi is duty free and roughly a third of the price.',
    'Friday afternoon is prayer time and many government offices and some businesses close from around midday to 2:30pm.',
    'The Petronas skybridge sells a limited number of tickets per slot and the sunset slots go first. Booking on the day usually means a midday slot in glare.',
    'Ramadan bazaars, in the evenings during the fasting month, are the best food markets of the year and almost no tourist itinerary mentions them.',
    'Kuala Lumpur to Singapore is a five hour drive or a one hour flight, and combining the two countries is common and easy. The land border at Johor is very slow at weekends.',
  ],

  etiquette: [
    'Shoes off before entering homes, mosques and many small shops.',
    'Cover shoulders and knees at mosques; robes are provided at the main ones.',
    'Use your right hand for eating, giving and receiving.',
    'Do not offer alcohol to a Malay Muslim acquaintance without knowing them well.',
    'Public displays of affection are best avoided outside the city centres.',
  ],

  safety: [
    'Malaysia is one of the safest countries in the region for visitors.',
    'Bag snatching from passing motorbikes happens in parts of KL. Carry bags on the side away from the road.',
    'Jellyfish appear on east coast beaches at certain times of year; check locally before swimming.',
    'Tap water is treated but most people still drink bottled.',
    'Penalties for drug offences are extreme and include the death penalty. This is not a formality and it is enforced.',
  ],

  visaNote:
    'Indian passport holders currently enter Malaysia without a visa for stays of up to 30 days, under an exemption that runs to 31 December 2026. There is no visa fee. What is required is the Malaysia Digital Arrival Card, submitted online at least three days before departure, plus a passport valid six months, a confirmed onward ticket and accommodation. We file the arrival card and provide the bookings. Because the exemption has a stated end date, we confirm it is still in force for your travel dates before you pay.',
};

export const GUIDES: DestinationGuide[] = [
  thailand, vietnam, sriLanka, bali, malaysia,
];

export function getGuide(slug: string): DestinationGuide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
