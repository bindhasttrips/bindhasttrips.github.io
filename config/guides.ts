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


const maldives: DestinationGuide = {
  slug: 'maldives',
  intro:
    'The Maldives is 1,200 islands, and the trip you get depends entirely on which kind you book. A resort island is a private island you cannot leave, with everything at resort prices. A local island is a working Muslim village with guesthouses at a tenth of the cost and rules to match. Most disappointment here comes from booking one while imagining the other.',

  whenToGo: {
    summary:
      'November to April is the dry northeast monsoon and the reliable window. May to October is wetter, considerably cheaper, and still has plenty of sun between showers.',
    keyInsight:
      'The single decision that shapes the whole trip is resort island versus local island, and it is not mainly about money. A resort island is private, so bikinis, alcohol and pork are all normal. A local island is inhabited by Maldivians under Islamic law: alcohol cannot be sold at all, and swimwear is only permitted on a designated bikini beach, not on the village shore. People book Maafushi because it is a tenth of the price, then discover they cannot get a drink and cannot sunbathe where they expected. Both are good trips. They are not the same trip.',
    bands: [
      {
        label: 'Dry season',
        months: [12, 1, 2, 3, 4],
        weather: 'Sunny, calm seas, excellent visibility for diving and snorkelling.',
        crowds: 'Peak. Christmas and New Year are the most expensive dates in the Indian Ocean.',
        verdict: 'best',
      },
      {
        label: 'Shoulder',
        months: [11],
        weather: 'The changeover. Mostly dry with occasional squalls.',
        crowds: 'Good value before the December spike.',
        verdict: 'good',
      },
      {
        label: 'Wet season',
        months: [5, 6, 7, 8, 9, 10],
        weather: 'Humid with rain and wind, often in bursts rather than all day. Rougher crossings.',
        crowds: 'Half the price of peak, and manta and whale shark sightings are at their best.',
        verdict: 'mixed',
      },
    ],
  },

  howLong: {
    minimum: '4 nights, because a day is lost at each end to transfers.',
    ideal: '5 to 7 nights on one island, or split between a local island and a resort.',
    note:
      'Nobody island hops in the Maldives the way they do in Thailand. Transfers are by speedboat or seaplane, they run to a schedule and they are expensive. One base, or at most two, is the sensible structure.',
  },

  cities: [
    {
      name: 'Male and Hulhumale',
      nights: '0 to 1',
      why: 'The capital and the airport island. Worth a few hours, not a holiday.',
      dontMiss: ['The old Friday mosque with its coral stone walls', 'The fish market in the late afternoon'],
      overrated:
        'Staying here at all, unless a late arrival or early departure makes it unavoidable. Hulhumale is convenient for exactly that.',
    },
    {
      name: 'Maafushi and the local islands',
      nights: '3 to 4',
      why: 'Guesthouses, a bikini beach, and excursions at a fraction of resort prices. The way to do the Maldives on a normal budget.',
      dontMiss: [
        'A sandbank picnic, which is a boat to a strip of sand with nothing on it',
        'Snorkelling at a house reef or a nearby wreck',
        'A resort day pass, which buys you a resort island for a day at a tiny fraction of staying',
        'Sunset fishing, which almost every guesthouse runs',
      ],
    },
    {
      name: 'A resort island',
      nights: '3 to 5',
      why: 'The overwater villa, the private beach, the house reef outside your door. The picture everyone has in their head.',
      dontMiss: [
        'The house reef, which on a good resort is better than any excursion',
        'A sunset dolphin cruise',
        'Half board at minimum, because à la carte on a resort island is punishing',
      ],
      overrated:
        'The overwater villa itself, if you have children or cannot swim. A beach villa with direct sand access is usually the better room, and cheaper.',
    },
    {
      name: 'Addu or Baa Atoll',
      nights: '3 to 4',
      why: 'Further out and quieter. Baa is a UNESCO biosphere and the best place in the country for manta rays.',
      dontMiss: ['Hanifaru Bay between May and November for manta aggregations', 'Diving on the outer atolls'],
    },
  ],

  routes: [
    { name: 'Budget week', nights: 5, stops: 'Maafushi 5, with a resort day pass', suits: 'A first Maldives trip without resort prices.' },
    { name: 'Split trip', nights: 6, stops: 'Local island 3, resort island 3', suits: 'The best of both, and how we would usually book it.' },
    { name: 'Honeymoon', nights: 5, stops: 'One resort island, half board', suits: 'Nothing to organise and nowhere to go.' },
    { name: 'Diving', nights: 8, stops: 'Baa or Ari Atoll 8, or a liveaboard', suits: 'Certified divers, ideally May to November for mantas.' },
  ],

  gettingThere:
    'Ninety minutes from Kochi and Thiruvananthapuram, around three hours from Mumbai and Bengaluru, into Velana International at Male. It is the shortest flight to a genuinely different country available on an Indian passport, and southern departures are meaningfully cheaper.',

  gettingAround: [
    { label: 'Transfers are the hidden cost', detail: 'Your resort transfer is a separate, significant and usually non refundable charge. A speedboat is 100 to 250 US dollars per person return. A seaplane is 350 to 600. Always ask what the transfer costs before falling for a room rate.' },
    { label: 'Seaplanes only fly in daylight', detail: 'This is the constraint nobody plans for. If your international flight lands after about 3pm, you cannot reach a seaplane resort that day and must overnight in Male at your own cost. Check the transfer window against your flight before booking.' },
    { label: 'Public ferries are very cheap', detail: 'The government ferry between Male and the local islands costs a few dollars against 25 to 40 for a speedboat. It is slow, runs only on certain days, and does not run on Fridays. Fine if your dates are flexible, useless if they are not.' },
    { label: 'Nothing runs on Friday morning', detail: 'Friday is the holy day. Ferries, shops and many excursions stop until after midday prayers.' },
  ],

  connectivity: [
    { label: 'Which network', detail: 'Dhiraagu and Ooredoo both cover the inhabited islands and most resort atolls. Coverage at sea between islands is patchy.' },
    { label: 'What to buy', detail: 'A tourist SIM with a data bundle is around 20 to 30 US dollars at the airport. Expensive by regional standards but cheaper than resort wifi charges used to be.' },
    { label: 'Resort wifi', detail: 'Now almost always free and usually good. A SIM matters more if you are on local islands or taking public ferries.' },
  ],

  money: [
    { label: 'Use dollars', detail: 'The rufiyaa exists but resorts, guesthouses and excursions all quote and accept US dollars. There is no need to change money at all for a normal trip.' },
    { label: 'The taxes are not small', detail: 'Expect around 16 percent GST plus a green tax of 6 to 12 dollars per person per night, and most resorts add a 10 percent service charge. That is roughly a third on top of a quoted room rate. Our quotes include it; many booking sites show it only at the final screen.' },
    { label: 'Cards everywhere on resorts', detail: 'Resorts run on room charges settled by card at the end. Local islands are more cash based, and small guesthouses may add a card fee.' },
  ],

  mistakes: [
    'Booking a local island guesthouse expecting to drink and sunbathe on the village beach.',
    'Booking a seaplane resort with an afternoon arrival, then paying for an unplanned night in Male.',
    'Comparing room rates without comparing transfer costs, which can differ by 400 dollars a couple.',
    'Booking room only on a resort island, where a single dinner can cost more than a night in Male.',
    'Planning to island hop, which is slow and expensive here.',
    'Arriving without a prepaid booking at a registered property, which immigration asks to see.',
  ],

  insider: [
    'A resort day pass is the best value thing in the country. From Maafushi you can spend a full day on a nearby resort island, usually with lunch and pool access, for 60 to 100 dollars. It buys the resort experience without the resort bill.',
    'Alcohol cannot legally be sold on inhabited islands. On local islands the workaround is a floating bar, a boat moored offshore in international style waters. Guesthouses will arrange it. There is no bar on the island itself.',
    'Swimwear on a local island is confined to a marked bikini beach. Elsewhere on the island, shoulders and knees covered for both men and women. This is law, not a suggestion.',
    'Half board on a resort island is almost always worth the upgrade. À la carte dinner at resort prices is 80 to 150 dollars a head before drinks.',
    'The wet season is the best time for manta rays and whale sharks, not the worst. Hanifaru Bay in Baa Atoll between May and November is one of the great wildlife spectacles and the rooms are half price.',
    'A beach villa with direct sand access is usually a better room than an overwater villa for families, and costs less. Overwater villas have deep water below, no beach, and are hot in the afternoon.',
    'Ramadan changes the rhythm on local islands: restaurants close during daylight and the pace shifts entirely. Resorts are unaffected.',
    'Reef shoes matter. Coral cuts get infected quickly in warm water and are the most common reason people see a doctor here.',
  ],

  etiquette: [
    'Outside resorts the Maldives is a conservative Muslim country. Cover shoulders and knees in villages.',
    'Do not bring alcohol or pork into the country. Bags are screened on arrival and it will be confiscated.',
    'Public displays of affection are not acceptable on inhabited islands.',
    'Do not photograph people, particularly women, without asking.',
    'Friday prayers pause most activity from late morning to early afternoon.',
  ],

  safety: [
    'The Maldives is very safe. The risks are the sea and the sun, not people.',
    'Currents between islands and at channel entrances are strong. Snorkel where the guesthouse or resort says, not where it looks nice.',
    'Coral cuts infect fast. Clean and cover them properly the same day.',
    'Sun here is more intense than it feels in the sea breeze. Reef safe sunscreen, and many resorts now require it.',
    'Medical facilities outside Male are limited, and a serious problem means evacuation. This is one destination where travel insurance genuinely matters.',
  ],

  visaNote:
    'Indian passport holders get a free 30 day visa on arrival in the Maldives. There is nothing to apply for and no fee. What immigration does require is a confirmed onward ticket and a prepaid booking at a registered property, which is why booking through us rather than arriving to find a room matters here more than most places. Your passport needs six months validity.',
};

const nepal: DestinationGuide = {
  slug: 'nepal',
  intro:
    'Nepal is the cheapest international trip an Indian passport can take, and the only one that needs no visa and no passport. Kathmandu is temples and chaos, Pokhara is a lake under the Annapurnas, and the mountains start closer to the road than most people expect.',

  whenToGo: {
    summary:
      'October and November are the best months of the year: clear skies after the monsoon, warm days, cold nights. March and April are the second window, with rhododendron in bloom and hazier views.',
    keyInsight:
      'The mountain views are the whole point, and they are only reliable in two windows. From October to early December the post monsoon air is washed clean and Annapurna and Everest are visible almost every morning. By late February dust and agricultural burning build a haze across the valley that can hide the mountains completely for weeks, and it worsens through April. People book Pokhara in March, wait three days at Sarangkot for a sunrise that never clears, and leave thinking they were unlucky. They were not unlucky; they booked the wrong month.',
    bands: [
      {
        label: 'Post monsoon',
        months: [10, 11],
        weather: 'The clearest air of the year. Warm days, cold nights, almost no rain.',
        crowds: 'Peak trekking season. Book teahouses and flights well ahead.',
        verdict: 'best',
      },
      {
        label: 'Spring',
        months: [3, 4],
        weather: 'Warm and in bloom, with increasing haze. Good for trekking, less reliable for views.',
        crowds: 'Second peak. Everest Base Camp is busy.',
        verdict: 'good',
      },
      {
        label: 'Winter',
        months: [12, 1, 2],
        weather: 'Cold but often crystal clear at lower altitudes. High passes closed by snow.',
        crowds: 'Quiet and cheap. Kathmandu and Pokhara are perfectly comfortable.',
        verdict: 'mixed',
      },
      {
        label: 'Monsoon',
        months: [6, 7, 8, 9],
        weather: 'Heavy rain, landslides on mountain roads, leeches on trails, clouded peaks.',
        crowds: 'Almost empty. Upper Mustang stays dry in its rain shadow.',
        verdict: 'avoid',
      },
    ],
  },

  howLong: {
    minimum: '5 nights for Kathmandu and Pokhara.',
    ideal: '8 to 10 nights to add Chitwan or a short trek.',
    note:
      'Kathmandu to Pokhara is 200 kilometres and takes six to seven hours by road, or 25 minutes by air. The flight costs about 8,000 rupees and saves most of a day in each direction, which on a short trip is the difference between seeing Pokhara and driving to it.',
  },

  cities: [
    {
      name: 'Kathmandu',
      nights: '2 to 3',
      why: 'Three medieval city squares, the largest stupa in Nepal, and a valley of temples in a small area.',
      dontMiss: [
        'Boudhanath at dusk, walking the kora with the pilgrims',
        'Pashupatinath, where open air cremations take place on the riverbank',
        'Patan Durbar Square, which is better preserved and quieter than Kathmandu Durbar',
        'Swayambhunath at sunrise for the valley view',
      ],
      overrated:
        'Thamel as anything other than a place to sleep and buy trekking gear. It is a tourist bazaar and not representative of the city.',
    },
    {
      name: 'Pokhara',
      nights: '3',
      why: 'A lake with the Annapurna range behind it. The base for paragliding, short treks and doing nothing.',
      dontMiss: [
        'Sarangkot for sunrise, ideally in October or November',
        'Paragliding off Sarangkot, which is among the best and cheapest tandem flying anywhere',
        'A rowboat on Phewa Lake to the island temple',
        'The World Peace Pagoda, on foot up through the forest rather than by taxi',
      ],
    },
    {
      name: 'Chitwan',
      nights: '2',
      why: 'Lowland jungle with one horned rhino, and a complete change from the hills.',
      dontMiss: ['A dawn jeep safari', 'A canoe on the Rapti river', 'A Tharu village walk'],
      overrated:
        'Elephant back safaris, which are still sold here and which no reputable operator should offer. Jeep and walking safaris see more anyway.',
    },
    {
      name: 'Nagarkot or Dhulikhel',
      nights: '1',
      why: 'Ridge villages an hour from Kathmandu with a Himalayan panorama at sunrise and no effort required.',
      dontMiss: ['Sunrise from the ridge', 'The walk down to Changu Narayan'],
    },
    {
      name: 'A short trek',
      nights: '3 to 5',
      why: 'You do not need three weeks to walk in the Himalaya. Poon Hill and the Mardi Himal ridge are both short and spectacular.',
      dontMiss: ['Poon Hill sunrise over Dhaulagiri and Annapurna', 'Teahouse nights, which are the real experience'],
    },
  ],

  routes: [
    { name: 'The short trip', nights: 5, stops: 'Kathmandu 2, Pokhara 3', suits: 'A first visit, flying between the two.' },
    { name: 'Hills and jungle', nights: 8, stops: 'Kathmandu 2, Chitwan 2, Pokhara 3, Nagarkot 1', suits: 'Variety without walking.' },
    { name: 'Short trek', nights: 9, stops: 'Kathmandu 2, Pokhara 2, Poon Hill trek 4, Pokhara 1', suits: 'Anyone reasonably fit who wants the mountains properly.' },
    { name: 'Everest view', nights: 10, stops: 'Kathmandu 2, Lukla and Namche 6, Kathmandu 2', suits: 'Altitude, weather delays and the best mountains on earth.' },
  ],

  gettingThere:
    'Under two hours from Delhi, Varanasi, Lucknow and Kolkata to Kathmandu, and there are direct flights from Mumbai and Bengaluru. It is also the one country you can reach overland, through Sunauli or Kakarbhitta, which is slow and cheap and occasionally chaotic.',

  gettingAround: [
    { label: 'Fly Kathmandu to Pokhara', detail: 'Twenty five minutes against seven hours on a mountain road. On a trip of a week or less this is not an extravagance, it is the difference between two destinations and one.' },
    { label: 'Tourist buses are fine', detail: 'If you are driving, take a tourist coach rather than a local bus. They leave early, stop for lunch and take six to seven hours. The road is being upgraded and conditions vary.' },
    { label: 'Domestic flights are weather dependent', detail: 'Mountain airstrips, Lukla above all, cancel routinely in cloud. Never schedule an international departure the day after a mountain flight. Build a buffer day, always.' },
    { label: 'In the cities', detail: 'Pathao and InDrive both work in Kathmandu for cars and bikes and are far cheaper than negotiating with a taxi. Kathmandu traffic is slow and the air is poor; a mask on a bad day is not paranoid.' },
  ],

  connectivity: [
    { label: 'Which network', detail: 'Ncell has the better tourist packages and city coverage. Nepal Telecom reaches further into the mountains and is the choice if you are trekking.' },
    { label: 'What to buy', detail: 'A tourist SIM with a reasonable data bundle is 500 to 1,000 Nepali rupees, roughly 300 to 600 Indian rupees. Buy at the airport with your passport.' },
    { label: 'Indian roaming is unusually cheap here', detail: 'Several Indian operators price Nepal far below other international destinations, and for a short trip a home roaming pack can undercut buying a local SIM. Worth checking before you land.' },
  ],

  money: [
    { label: 'The note rule that catches everyone', detail: 'Indian notes of 200, 500 and 2,000 rupees are not legal in Nepal and cannot be exchanged or spent. Only 100 rupee notes and below are accepted. People arrive with a wallet of 500s and cannot use any of it. Carry 100s, or take cards and withdraw Nepali rupees.' },
    { label: 'The exchange rate is fixed', detail: 'The Nepali rupee is pegged at 1.6 to the Indian rupee. 1,000 Nepali rupees is 625 Indian rupees. The rate does not move, so there is no point shopping around.' },
    { label: 'Cash country', detail: 'Cards work in Kathmandu and Pokhara hotels and larger restaurants. Teahouses, trails, taxis and most shops are cash. ATMs charge around 500 Nepali rupees per withdrawal and cap at 35,000.' },
    { label: 'Trekking is cash only', detail: 'There are no ATMs on the trails. Work out the whole trek budget and carry it, with a margin for a bad weather day.' },
  ],

  mistakes: [
    'Going in March or April for the mountain views and finding haze.',
    'Driving Kathmandu to Pokhara on a five night trip and losing two days to the road.',
    'Carrying 500 rupee Indian notes, which cannot be used or exchanged.',
    'Booking an international flight the day after returning from Lukla.',
    'Ascending too fast on a trek and getting altitude sickness at 3,500 metres.',
    'Booking an elephant back safari in Chitwan.',
  ],

  insider: [
    'No visa and no passport. Indian citizens may enter Nepal on a passport or an Election Commission voter ID card. It remains the only country in the world where that is true, and many Indians do not know it.',
    'The mountain flight is the best hour in Nepal for anyone not trekking. A scenic flight from Kathmandu runs along the Himalaya past Everest, every passenger gets a window, and it costs less than a good dinner in Delhi.',
    'Altitude sickness begins around 2,500 metres and is about rate of ascent, not fitness. Young, fit trekkers get it more often because they go up faster. Diamox helps; descending is the only cure.',
    'Kathmandu air quality in winter and spring is genuinely poor, regularly worse than Delhi. Anyone with asthma should plan around October and November.',
    'Tipping is expected for trekking guides and porters and is a meaningful part of their income. Budget it in from the start rather than being surprised at the end.',
    'Beef is not eaten and is not on most menus. Buffalo is, and is what a Nepali momo usually contains.',
    'Everest Base Camp is a viewpoint on a glacier, not the summit, and you cannot see Everest properly from it. Kala Patthar next door is where the photograph is taken.',
    'Load shedding has largely ended but power cuts still happen outside the cities. Carry a power bank on any trek.',
  ],

  etiquette: [
    'Shoes off before entering temples and homes.',
    'Walk clockwise around stupas and mani walls, keeping them on your right.',
    'Do not touch anyone on the head or point your feet at a person or shrine.',
    'Ask before photographing cremations at Pashupatinath. Many visitors do not and it is deeply resented.',
    'Public affection is uncommon, though holding hands between friends of the same sex is normal.',
  ],

  safety: [
    'Nepal is safe and Nepali hospitality is genuine. Crime against visitors is rare.',
    'Road accidents are the real risk. Night buses on mountain roads have a poor record; travel in daylight.',
    'Altitude is the other real risk. Ascend slowly, sleep low, and turn back if symptoms worsen.',
    'Trekking alone is now restricted in some areas and is unwise in any case. A licensed guide is the right call.',
    'Tap water is not drinkable. Boiled or filtered water is available everywhere and avoids plastic on the trails.',
    'Earthquakes are a genuine risk in this region. Know your hotel exit.',
  ],

  visaNote:
    'There is no visa. Indian citizens may enter Nepal freely under the 1950 treaty, on either a valid passport or an Election Commission voter ID card. There is no fee, no form and no arrival card. We still advise carrying a passport, because a passport is required for domestic flights, for hotel registration and for buying a SIM.',
};

const uae: DestinationGuide = {
  slug: 'uae',
  intro:
    'The UAE is two cities ninety minutes apart with different characters. Dubai is dense, fast and built for spectacle. Abu Dhabi is quieter, wealthier and better for culture and theme parks. Almost every trip should include both, because the drive between them is shorter than crossing either city at rush hour.',

  whenToGo: {
    summary:
      'November to March is the season. Everything outdoors works, evenings are pleasant, and the city is designed around it. May to September is genuinely extreme heat.',
    keyInsight:
      'Summer here is not simply hot, it is a different trip. From June to September daytime temperatures sit between 42 and 48C with high humidity near the coast, and outdoor attractions, desert safaris and beach time become unpleasant or unsafe in the middle of the day. The counterintuitive part is that summer can still be a good trip, because hotel rates halve and everything worth doing indoors, the malls, the aquariums, Ski Dubai, the museums and the indoor theme parks, is world class. A summer UAE trip planned entirely around indoor attractions at a five star hotel for a three star price is a genuinely good deal. A summer trip planned like a winter one is miserable.',
    bands: [
      {
        label: 'Peak season',
        months: [11, 12, 1, 2, 3],
        weather: '24 to 30C, low humidity, perfect for everything outdoors.',
        crowds: 'Busiest and most expensive, particularly Christmas, New Year and the shopping festival in January.',
        verdict: 'best',
      },
      {
        label: 'Shoulder',
        months: [4, 10],
        weather: 'Warm to hot, 32 to 38C. Still fine early and late in the day.',
        crowds: 'Noticeably cheaper than peak with most of the benefit.',
        verdict: 'good',
      },
      {
        label: 'Summer',
        months: [5, 6, 7, 8, 9],
        weather: 'Extreme. 42 to 48C, humid near the coast, and the desert safari season effectively pauses.',
        crowds: 'Lowest hotel prices of the year, by a wide margin.',
        verdict: 'mixed',
      },
    ],
  },

  howLong: {
    minimum: '4 nights for Dubai alone.',
    ideal: '6 to 7 nights for Dubai and Abu Dhabi without rushing.',
    note:
      'Dubai rewards a slower pace than people give it. Most itineraries stack three paid attractions into a day and spend two hours of it in traffic on Sheikh Zayed Road. Two things a day is the right density.',
  },

  cities: [
    {
      name: 'Dubai',
      nights: '4 to 5',
      why: 'The towers, the desert on the doorstep, the beaches and the malls. The reason most people come.',
      dontMiss: [
        'Burj Khalifa at sunset, booked weeks ahead because that slot sells out first',
        'A desert safari with dune bashing and a camp dinner, which is the best half day in the country',
        'Old Dubai: the gold and spice souks, crossing the creek by abra for one dirham',
        'The fountain show at Dubai Mall, free, every half hour after dark',
      ],
      overrated:
        'The Dubai Frame, which is a short lift for a view you get better from several free hotel bars. Global Village is fun but is essentially a large outdoor market and eats an entire evening.',
    },
    {
      name: 'Abu Dhabi',
      nights: '2',
      why: 'Calmer, greener and where the serious culture and the best theme parks are.',
      dontMiss: [
        'Sheikh Zayed Grand Mosque, ideally at dusk when the white marble turns blue',
        'Louvre Abu Dhabi, which is a genuinely good museum in a remarkable building',
        'Ferrari World or Warner Bros World on Yas Island',
        'Qasr Al Watan, the presidential palace, which most people skip and should not',
      ],
    },
    {
      name: 'Ras Al Khaimah or Fujairah',
      nights: '1 to 2',
      why: 'Mountains and an empty coastline, ninety minutes from Dubai and almost entirely absent from Indian itineraries.',
      dontMiss: ['Jebel Jais, the longest zipline in the world', 'The east coast beaches, which face the Gulf of Oman and are calmer'],
    },
  ],

  routes: [
    { name: 'Dubai only', nights: 4, stops: 'Dubai 4', suits: 'A short first trip or a long weekend.' },
    { name: 'The standard', nights: 6, stops: 'Dubai 4, Abu Dhabi 2', suits: 'Most trips, most groups.' },
    { name: 'With children', nights: 7, stops: 'Dubai 4, Abu Dhabi 3', suits: 'Three theme parks and a waterpark without a death march.' },
    { name: 'Beyond the cities', nights: 7, stops: 'Dubai 4, Ras Al Khaimah 2, Abu Dhabi 1', suits: 'Anyone who has done Dubai and wants the mountains.' },
  ],

  gettingThere:
    'Three to four hours from almost every Indian metro, with more frequency than any other international route out of India. Dubai, Abu Dhabi and Sharjah all take direct flights. Sharjah is usually the cheapest and is about forty minutes from central Dubai, which is worth factoring into the saving.',

  gettingAround: [
    { label: 'The Metro is excellent and underused', detail: 'Clean, cheap, air conditioned and it runs along Sheikh Zayed Road past most of what visitors want. A Nol card costs a few dirhams. There is a Gold class carriage at the front and a women and children carriage. At rush hour it beats any taxi.' },
    { label: 'Careem over taxis', detail: 'Careem is the local app, owned by Uber and more widely used. Taxis are metered, honest and plentiful, so either works, but the app avoids the fare conversation entirely.' },
    { label: 'Dubai to Abu Dhabi', detail: 'Ninety minutes by road. A private transfer is straightforward, and there is a frequent intercity coach for around 25 dirhams. Do not attempt it as a day trip if you want to see the mosque and a theme park; it becomes a fourteen hour day.' },
    { label: 'Everything is further than it looks', detail: 'Dubai is long and thin. Marina to Downtown is 25 kilometres and can be 45 minutes at the wrong time. Group your days by area rather than by attraction.' },
  ],

  connectivity: [
    { label: 'Which network', detail: 'Etisalat and du both have complete coverage. Etisalat has the edge outside the cities and in the desert.' },
    { label: 'What to buy', detail: 'Tourist SIMs are sold at the airport from around 50 to 100 dirhams, roughly 1,200 to 2,400 rupees. More expensive than most of Asia. Etisalat often gives arriving visitors a free starter SIM with a small data allowance.' },
    { label: 'WhatsApp calling is blocked', detail: 'This surprises almost every Indian visitor. Voice and video calls over WhatsApp, FaceTime and Messenger are blocked on UAE networks. Messaging works normally. Hotel wifi is often the same. Plan to call home over a normal phone line or a service that still works locally.' },
  ],

  money: [
    { label: 'The dirham is pegged', detail: 'Fixed at roughly 22 to 23 rupees, and it does not move. A 50 dirham meal is about 1,150 rupees.' },
    { label: 'Cards everywhere', detail: 'The UAE is effectively cashless. Cards and phone payments work everywhere including taxis. Small cash is useful only for the abra and the souks.' },
    { label: 'The tourism dirham', detail: 'Hotels charge a per room per night tourism fee of 10 to 20 dirhams, collected at check in and not included in most online room rates. It is small but it is a surprise at the desk.' },
    { label: 'Souk prices are negotiable', detail: 'Gold is priced by weight against a daily rate with a making charge on top, and the making charge is where the negotiation happens. In the spice and textile souks, expect to pay about half the opening price.' },
  ],

  mistakes: [
    'Booking the Burj Khalifa on the day and getting a midday slot in glare.',
    'Doing Abu Dhabi as a day trip from Dubai and seeing it through a coach window.',
    'Planning a desert safari in July.',
    'Assuming WhatsApp calls will work.',
    'Booking Sharjah flights without allowing for the transfer time into Dubai.',
    'Stacking three ticketed attractions in one day at opposite ends of the city.',
  ],

  insider: [
    'A hotel with a Metro station within walking distance will save more time and money over a week than almost any other booking decision.',
    'The abra across Dubai Creek costs one dirham, about 23 rupees, and is the best value experience in the city.',
    'Many beach clubs and hotel pools sell day passes that include a food and drink credit, which for a family is often cheaper than a waterpark ticket and considerably more relaxing.',
    'Alcohol is served in hotel bars and licensed restaurants, not in ordinary cafes or shops. Public drunkenness is an arrestable offence and is treated seriously.',
    'During Ramadan, eating, drinking and smoking in public during daylight is prohibited for everyone, including visitors. Restaurants screen off or close until sunset. Iftar buffets after dark are one of the best food experiences of the year, and hotel rates are low.',
    'Friday is a working day since the UAE moved to a Saturday and Sunday weekend, so Friday traffic behaves like a weekday.',
    'The desert safari sold at 200 dirhams and the one sold at 600 are not the same product. The cheap version is a shared 4x4 with a crowded camp. The difference is worth paying.',
    'Certain common prescription medicines, including some containing codeine or tramadol, are controlled substances in the UAE and require prior approval. Carry prescriptions for anything you bring.',
    'Public displays of affection, rude gestures and swearing are prosecutable offences here, including online. This is not theoretical; tourists are arrested for it every year.',
  ],

  etiquette: [
    'Dress modestly in malls, souks and public buildings: shoulders and knees covered. Swimwear is for the beach and pool only.',
    'At the Grand Mosque, women must cover hair, arms and legs; abayas are lent free at the entrance.',
    'Do not photograph people, particularly local women, without permission. It is an offence.',
    'Use the right hand for greetings and eating.',
    'Never criticise the rulers or the country publicly or on social media.',
  ],

  safety: [
    'The UAE has among the lowest crime rates in the world. Personal safety is genuinely not a concern.',
    'The law is the thing to be careful about. Offences that are minor elsewhere, including public affection, gestures and social media posts, carry real penalties.',
    'Heat is the physical risk. In summer, outdoors between 11am and 4pm is dangerous, not merely uncomfortable.',
    'Dune bashing is rough. Anyone pregnant, with a back or neck problem, or prone to motion sickness should say so and sit it out.',
    'Tap water is desalinated and safe, though most people drink bottled by preference.',
  ],

  visaNote:
    'Indian passport holders need a UAE tourist visa, normally the 30 day single entry e-visa. It is issued in roughly three to five working days once we have your documents, costs around 7,500 rupees and is included in your package. We complete the application, pay the fee, follow it up and send you the approved visa as a PDF. There is no centre to visit. Holders of a valid US, UK or Schengen visa or residence permit may qualify for a visa on arrival instead, and we will tell you if that applies to you.',
};

const mauritius: DestinationGuide = {
  slug: 'mauritius',
  intro:
    'Mauritius is a volcanic island the size of Goa with a coral reef around almost all of it, which is why the water is calm and turquoise nearly everywhere. Roughly two thirds of the population is of Indian origin, so the food, the festivals and often the language are familiar in a way no other beach destination is.',

  whenToGo: {
    summary:
      'May to December is the dry, cooler half of the year and the better window. January to April is hot, humid and the cyclone season.',
    keyInsight:
      'Mauritius sits below the equator, so its seasons are inverted from India, and the practical consequence is that the Indian summer holidays in May and June fall in the best Mauritian weather while the winter holidays in December and January fall at the start of cyclone season. The other half of the insight is that the island has distinct microclimates: the east and the central plateau are wetter and windier, the west and north are drier and calmer. A rainy week on the east coast is often a sunny one at Flic en Flac, twenty five kilometres away.',
    bands: [
      {
        label: 'Dry season',
        months: [5, 6, 7, 8, 9, 10],
        weather: '22 to 27C, low humidity, little rain. The most comfortable months.',
        crowds: 'July and August are European holidays and the busiest. May, June and September are the sweet spot.',
        verdict: 'best',
      },
      {
        label: 'Warm shoulder',
        months: [11, 12],
        weather: 'Warming up, some rain, sea at its most swimmable.',
        crowds: 'Rising into the Christmas peak.',
        verdict: 'good',
      },
      {
        label: 'Cyclone season',
        months: [1, 2, 3, 4],
        weather: 'Hot, humid, heavy rain and a real cyclone risk from January to March.',
        crowds: 'Cheapest, and most days are still fine. The risk is a bad week, not a bad day.',
        verdict: 'mixed',
      },
    ],
  },

  howLong: {
    minimum: '5 nights.',
    ideal: '7 nights, which is the standard and about right.',
    note:
      'The island is 65 kilometres across. Everything is reachable from anywhere, so one base works for the whole trip. Splitting between two coasts is only worth it on ten nights or more.',
  },

  cities: [
    {
      name: 'Flic en Flac and the west',
      nights: '3 to 4',
      why: 'The driest coast, the longest beach and the best sunsets. The most reliable base for a first trip.',
      dontMiss: [
        'Catamaran day out to Ile aux Benitiers with a barbecue on board',
        'Dolphin watching at Tamarin, early, before the boats crowd the bay',
        'Chamarel seven coloured earths and the waterfall',
        'Black River Gorges, which is the only real forest left on the island',
      ],
    },
    {
      name: 'Grand Baie and the north',
      nights: '3',
      why: 'The busiest and most developed part of the island, with the most restaurants and the calmest water.',
      dontMiss: [
        'Ile aux Cerfs by catamaran, the picture everyone has seen',
        'An undersea walk, a helmet walk on the seabed that needs no swimming',
        'Pamplemousses botanical garden and its giant water lilies',
        'Cap Malheureux and its red roofed church',
      ],
      overrated:
        'Grand Baie beach itself, which is small and busy. The village is the draw, not the sand.',
    },
    {
      name: 'The south and southeast',
      nights: '2 to 3',
      why: 'Wilder, greener and far less developed. Cliffs, sugar cane and almost nobody.',
      dontMiss: [
        'Le Morne, the UNESCO listed mountain, and the beach beneath it',
        'La Vanille nature park, with giant tortoises, which is excellent with children',
        'Gris Gris, where the reef ends and the open ocean hits the cliffs directly',
      ],
    },
    {
      name: 'Port Louis',
      nights: '0 to 1',
      why: 'The capital, and a half day rather than a stay.',
      dontMiss: ['Central market for street food and spices', 'Aapravasi Ghat, where indentured Indian labourers first landed', 'Caudan waterfront'],
      overrated:
        'Staying overnight. It is a working port city and everything closes early.',
    },
  ],

  routes: [
    { name: 'One base', nights: 7, stops: 'Flic en Flac 7, with day trips', suits: 'Most trips. Simple, and nothing is more than an hour away.' },
    { name: 'North and west', nights: 8, stops: 'Grand Baie 4, Flic en Flac 4', suits: 'Two different atmospheres without much moving.' },
    { name: 'Honeymoon', nights: 7, stops: 'Le Morne or the southwest 7', suits: 'The most dramatic scenery and the quietest beaches.' },
    { name: 'Island and city', nights: 9, stops: 'Grand Baie 4, south coast 4, Port Louis 1', suits: 'Seeing the whole island properly.' },
  ],

  gettingThere:
    'Six to six and a half hours direct from Mumbai and Delhi, into Sir Seewoosagur Ramgoolam airport in the southeast. Air Mauritius and Indian carriers both fly it. The airport is about an hour from the west coast resorts, so factor the transfer into arrival day.',

  gettingAround: [
    { label: 'Hire a car', detail: 'This is the one Indian Ocean island where self drive genuinely makes sense. They drive on the left, signage is clear, roads are good and the whole island is an hour across. A small car is around 1,500 to 2,500 rupees a day and transforms the trip.' },
    { label: 'An International Driving Permit is required', detail: 'An Indian licence alone is not sufficient for most rental companies or for insurance. Arrange the permit before you travel; it takes days, not minutes, at an RTO.' },
    { label: 'Taxis are expensive', detail: 'There is no Uber or Grab. Taxis are metered in theory and negotiated in practice, and a cross island trip can cost 2,000 to 3,000 rupees. Over a week this adds up to more than a hire car.' },
    { label: 'Buses are cheap and slow', detail: 'The network covers the island for very little money and takes roughly twice as long as driving. Fine for one trip to Port Louis, impractical as your main transport.' },
  ],

  connectivity: [
    { label: 'Which network', detail: 'Emtel and my.t both cover the island fully. Either is fine.' },
    { label: 'What to buy', detail: 'A tourist SIM with a data bundle is around 500 to 800 Mauritian rupees, roughly 950 to 1,500 Indian rupees. Both operators have desks in the arrivals hall.' },
    { label: 'Free public wifi', detail: 'Mauritius has an unusually good free public wifi network across beaches, bus stops and town centres, which fills most gaps.' },
  ],

  money: [
    { label: 'Another rupee', detail: 'The Mauritian rupee is worth about 1.9 Indian rupees. A 500 rupee meal is around 950 Indian rupees. Confirm which rupee is being quoted.' },
    { label: 'Cards widely accepted', detail: 'Hotels, restaurants and supermarkets all take cards. Markets, buses and small beach vendors are cash.' },
    { label: 'Change money in town, not at the hotel', detail: 'Airport and hotel rates are noticeably worse than town exchange offices or bank ATMs.' },
    { label: 'It is not a cheap destination', detail: 'Mauritius costs more than South East Asia. Restaurant meals, alcohol and excursions are closer to European prices, and imported goods are expensive.' },
  ],

  mistakes: [
    'Booking January or February without knowing it is cyclone season.',
    'Basing on the east coast for a windsurfing holiday you did not want, since it is the windy side.',
    'Relying on taxis for a week and spending more than a hire car would have cost.',
    'Not arranging an International Driving Permit before leaving India.',
    'Expecting South East Asian prices.',
    'Booking Ile aux Cerfs on a standard boat rather than a catamaran with lunch, which is the version worth doing.',
  ],

  insider: [
    'The east coast is the windy side. This is excellent if you want kitesurfing at Le Morne or Belle Mare, and a permanent nuisance if you wanted a still beach and a book.',
    'Roughly seventy percent of Mauritians are of Indian origin, mostly Bhojpuri speaking, and Diwali, Holi and Maha Shivaratri are national holidays. Ganga Talao, a crater lake, is the largest Hindu pilgrimage site outside India.',
    'Vegetarian food is genuinely easy here in a way it is not in Thailand or Vietnam, and Indian food is not a tourist concession, it is what people eat.',
    'The underwater waterfall at Le Morne is an optical illusion caused by sand moving off a shelf, visible only from the air. Seaplane and helicopter operators sell the trip, and it is the one aerial photograph worth paying for.',
    'Dolphin watching at Tamarin has become crowded and some operators chase pods aggressively. Book an early departure with an operator that keeps its distance; the experience is completely different.',
    'Tap water is treated and safe in most of the island, unlike most beach destinations, though many visitors still prefer bottled.',
    'Sunday is a genuine family beach day for Mauritians. Public beaches fill with barbecues and music, and it is the best day to see the island as it actually is.',
    'Duty free shopping on departure is genuinely competitive for rum and jewellery, and island rum is one of the few things here that is cheap.',
  ],

  etiquette: [
    'Beachwear is for the beach. Cover up in villages, shops and restaurants.',
    'Remove shoes before entering temples, and cover shoulders and knees.',
    'Creole and French are the everyday languages; English is official and widely understood, and Bhojpuri is common.',
    'Tipping is not obligatory. Ten percent in restaurants is generous.',
    'Nudity and topless sunbathing are illegal on public beaches.',
  ],

  safety: [
    'Mauritius is safe, with low violent crime. Petty theft from beaches and parked cars is the main issue.',
    'Do not leave anything in a hire car, particularly at trailheads and viewpoints.',
    'The reef makes most beaches calm, but where the reef breaks, at Gris Gris and parts of the south, the sea is lethal and unswimmable. Obey the signs.',
    'Stonefish exist on the reef. Reef shoes are sensible where you are walking on rock or coral.',
    'Cyclone season runs January to March. Warnings are well organised and hotels are built for it, but a class three warning shuts the island.',
  ],

  visaNote:
    'Indian passport holders enter Mauritius without a visa for stays of up to 90 days. There is no application and no fee. Immigration will ask for a passport valid six months, a confirmed return ticket, proof of accommodation and evidence of sufficient funds, all of which are part of your package. We also complete the arrival declaration for you.',
};


const azerbaijan: DestinationGuide = {
  slug: 'azerbaijan',
  intro:
    'Baku is three and a half hours from Delhi and looks like nowhere else within that radius: a medieval walled city on the Caspian with glass towers behind it. Outside the capital there are mud volcanoes, fire temples and mountain villages, and the whole country costs a fraction of Europe.',
  whenToGo: {
    summary:
      'April to June and September to October are the comfortable months. July and August are hot in Baku, and the winter is cold but clear.',
    keyInsight:
      'Almost every Indian itinerary here is three or four nights in Baku, which sells the country short. Baku itself needs two days. The things that make Azerbaijan memorable, the mud volcanoes at Gobustan, the burning hillside at Yanar Dag, the cable car into the Caucasus at Gabala and the mountain village of Khinalug at 2,300 metres, are all day trips out of the city. A trip built around Baku plus three day trips is a completely different holiday from a trip built around Baku alone, and costs almost the same.',
    bands: [
      { label: 'Spring and autumn', months: [4, 5, 6, 9, 10], weather: '18 to 26C, dry and clear. The best light and the best walking weather.', crowds: 'Moderate. Gulf visitors peak in summer, not now.', verdict: 'best' },
      { label: 'Summer', months: [7, 8], weather: 'Hot and humid in Baku, pleasant in the mountains.', crowds: 'Peak season for Gulf tourism and the most expensive.', verdict: 'mixed' },
      { label: 'Winter', months: [11, 12, 1, 2, 3], weather: 'Cold, windy on the Caspian, snow in the mountains. Clear and dramatic.', crowds: 'Cheapest by a distance. Shahdag skiing opens.', verdict: 'mixed' },
    ],
  },
  howLong: { minimum: '4 nights.', ideal: '6 nights for Baku plus two proper day trips or a night in the mountains.', note: 'Everything worth seeing is within four hours of Baku, so one base works for the whole trip. Gabala and Quba justify an overnight if you want to slow down.' },
  cities: [
    { name: 'Baku', nights: '3 to 4', why: 'A walled old city, a seafront promenade and modern architecture, all walkable.', dontMiss: ['Icherisheher, the walled old city, and the Maiden Tower', 'Flame Towers lit after dark, seen from the Highland Park steps', 'Heydar Aliyev Centre, a Zaha Hadid building worth seeing for itself', 'The boulevard along the Caspian in the evening'], overrated: 'Little Venice in the park, which is a small canal with boats.' },
    { name: 'Gobustan and Absheron', nights: 'day trip', why: 'Prehistoric petroglyphs, bubbling mud volcanoes and natural gas fires, in one half day.', dontMiss: ['The mud volcano field, reached by an old Lada over broken ground', 'Ateshgah fire temple, built by Indian merchants who worshipped the flame', 'Yanar Dag, a hillside that has burned continuously for decades'] },
    { name: 'Gabala and Sheki', nights: '1 to 2', why: 'The Caucasus foothills, three to four hours inland. Green, cool and completely different from the coast.', dontMiss: ['Tufandag cable car', 'Sheki Khan Palace and its stained glass', 'Nohur lake'] },
    { name: 'Quba and Khinalug', nights: '1', why: 'A mountain village at 2,300 metres, one of the highest continuously inhabited places in Europe.', dontMiss: ['The drive itself, which is the attraction', 'Candy Cane Mountains on the way'] },
  ],
  routes: [
    { name: 'Long weekend', nights: 4, stops: 'Baku 4, with Gobustan and Absheron as day trips', suits: 'A short first trip.' },
    { name: 'City and mountains', nights: 6, stops: 'Baku 4, Gabala 2', suits: 'The version that actually shows you the country.' },
    { name: 'Full circuit', nights: 8, stops: 'Baku 4, Sheki 2, Quba 2', suits: 'Anyone who prefers driving to sitting.' },
  ],
  gettingThere: 'Direct from Delhi in about three and a half hours and from Mumbai in five, into Heydar Aliyev airport. Azerbaijan Airlines and IndiGo both fly it. The airport is twenty five minutes from the old city.',
  gettingAround: [
    { label: 'Baku is walkable', detail: 'The old city, the boulevard and the main shopping streets are all within a twenty minute walk of each other. You will not need transport for most of a Baku day.' },
    { label: 'Bolt, not taxis', detail: 'Bolt works throughout Baku and is very cheap. Street taxis, particularly the purple London style cabs, charge several times more and rarely use a meter.' },
    { label: 'Day trips need a driver', detail: 'Gobustan, Gabala and Quba are not practical by public transport. A car with a driver for a full day is roughly 4,000 to 6,000 rupees, split between the group.' },
    { label: 'The metro is cheap and limited', detail: 'Three lines, a flat fare of 40 qepik, and a BakiKart needed to enter. Useful for a couple of journeys, not for sightseeing.' },
  ],
  connectivity: [
    { label: 'Which network', detail: 'Azercell has the widest coverage including the mountain roads. Bakcell is fine in the city.' },
    { label: 'What to buy', detail: 'A tourist SIM is around 15 to 25 manat, roughly 750 to 1,250 rupees. More expensive than South East Asia. Buy at the airport, where they register it for you.' },
  ],
  money: [
    { label: 'The manat is strong', detail: 'One manat is around 48 to 52 rupees, so numbers look small and are not. A 30 manat dinner is about 1,500 rupees.' },
    { label: 'Cash for the old city', detail: 'Cards work in hotels, restaurants and malls. Carpet shops, markets and mountain villages are cash. ATMs are plentiful in Baku and scarce outside it.' },
    { label: 'Carpets need paperwork', detail: 'Exporting a handmade carpet over a certain size or age requires a certificate from the Ministry of Culture. Any reputable dealer arranges it. Buying from a market stall without one risks losing it at the airport.' },
  ],
  mistakes: ['Booking only Baku and never leaving the city.', 'Taking a purple street taxi instead of Bolt and paying five times the fare.', 'Visiting in July and August and finding Caspian humidity.', 'Buying a carpet without the export certificate.', 'Assuming everything is walkable, when the best sights are two hours out.'],
  insider: [
    'Ateshgah, the fire temple on the Absheron peninsula, was built and used by Indian Hindu and Sikh merchants travelling the trade routes, and the inscriptions are in Sanskrit and Punjabi. Almost no Indian visitor knows this before arriving, and it is the most surprising thing in the country.',
    'The Caspian is not really swimmable near Baku. It is a working oil coast. The clean beaches are north of the city at Nabran, ninety minutes away.',
    'Azerbaijani tea comes with jam rather than milk, served in a pear shaped armudu glass, and refusing a second is mildly impolite.',
    'Novruz in March is the biggest holiday of the year and much of the country closes for a week.',
    'Azerbaijan is secular in practice and alcohol is freely available, which surprises people who expect otherwise in a Muslim majority country.',
    'Baku is one of the windiest cities in the world. The name is thought to mean city of winds, and a jacket is useful even in summer evenings.',
    'Armenian passport holders cannot enter, and evidence of travel to Nagorno-Karabakh causes problems at immigration. Irrelevant to most, serious if it applies.',
  ],
  etiquette: ['Shoes off in homes and mosques.', 'Cover shoulders and knees at mosques; scarves are lent.', 'Toasting is taken seriously at dinner and the host toasts first.', 'Accept tea when offered. Refusing outright is read as unfriendly.'],
  safety: ['Azerbaijan is very safe with low crime and a visible police presence.', 'The land borders with Armenia are closed and the surrounding regions should not be approached.', 'Mountain roads in winter need a driver who knows them, not a hire car.', 'Tap water is chlorinated but most people drink bottled.'],
  visaNote: 'Indian passport holders need an ASAN e-visa, valid 30 days single entry. It is entirely online, approved in about three working days with an urgent option in three hours, and costs around 2,800 rupees including the service fee, which is in your package. We complete the application and send you the approved visa to carry printed. Your passport needs six months validity.',
};

const georgia: DestinationGuide = {
  slug: 'georgia',
  intro:
    'Georgia sits where Europe and Asia argue about the border, and it feels like both. Tbilisi is a walkable old city of wooden balconies and sulphur baths, the Caucasus behind it are genuinely high mountains, and the wine has been made the same way for eight thousand years. It is also among the cheapest countries an Indian traveller can reach.',
  whenToGo: {
    summary:
      'May to June and September to October are the best months. July and August are hot in Tbilisi but are the only reliable window for the high mountains.',
    keyInsight:
      'Before applying for anything, check what is already in your passport. Georgia allows visa free entry of up to 90 days to anyone holding a valid visa or residence permit from the Schengen area, the United States, the United Kingdom, Canada, Japan, Australia or the Gulf states. A great many Indian travellers already hold one of these and pay for a Georgian e-visa they did not need. We check this first, and if it applies, that part of the cost disappears.',
    bands: [
      { label: 'Late spring', months: [5, 6], weather: 'Green, mild and everything open. Mountain passes clearing.', crowds: 'Moderate and good value.', verdict: 'best' },
      { label: 'Early autumn', months: [9, 10], weather: 'Warm days, cool nights, and the wine harvest in Kakheti.', crowds: 'Busy in the wine regions, quiet elsewhere.', verdict: 'best' },
      { label: 'Summer', months: [7, 8], weather: 'Hot in Tbilisi at 35C. The high Caucasus is at its best and Batumi is packed.', crowds: 'Peak, mostly regional visitors.', verdict: 'mixed' },
      { label: 'Winter', months: [11, 12, 1, 2, 3, 4], weather: 'Cold, grey in the lowlands, excellent snow at Gudauri. Mountain roads often closed.', crowds: 'Cheapest outside the ski resorts.', verdict: 'mixed' },
    ],
  },
  howLong: { minimum: '5 nights.', ideal: '8 nights for Tbilisi, the mountains and the wine country.', note: 'Georgia is small but mountainous, and the drive to Kazbegi takes three hours each way on a road that closes in bad weather. Day trips from Tbilisi cover most of the country, but two nights outside the capital make the trip.' },
  cities: [
    { name: 'Tbilisi', nights: '3 to 4', why: 'A compact old city of carved balconies, a fortress above, sulphur bath houses below and one of the best food scenes in the region.', dontMiss: ['The sulphur baths in Abanotubani, in a private room rather than the public hall', 'Narikala fortress by cable car and walking down', 'The Dry Bridge flea market for Soviet ephemera', 'A supra, the traditional feast, which is the point of Georgian food'], overrated: 'Rustaveli Avenue as a sight. It is a road. The old town on the other side of the river is where the city is.' },
    { name: 'Kazbegi and the military highway', nights: '1 to 2', why: 'The road north to Gergeti Trinity Church, a small stone church on a ridge under a 5,000 metre peak.', dontMiss: ['Gergeti church, ideally walking up rather than taking a 4x4', 'Ananuri fortress on the reservoir on the way', 'The Russia–Georgia Friendship Monument viewpoint'] },
    { name: 'Kakheti', nights: '1 to 2', why: 'The wine region. Qvevri wine is fermented in clay vessels buried in the ground, a method that is UNESCO listed.', dontMiss: ['A family run marani rather than a commercial winery', 'Sighnaghi, a walled hill town over the Alazani valley', 'Bodbe monastery'] },
    { name: 'Batumi', nights: '2', why: 'The Black Sea coast. Odd, brash and a complete change of register from the mountains.', dontMiss: ['The seafront boulevard and botanical garden', 'The moving Ali and Nino sculpture at sunset'], overrated: 'The beach, which is pebbles rather than sand.' },
  ],
  routes: [
    { name: 'Tbilisi and the mountains', nights: 6, stops: 'Tbilisi 4, Kazbegi 2', suits: 'A first trip with the best of both.' },
    { name: 'Wine and peaks', nights: 8, stops: 'Tbilisi 3, Kakheti 2, Kazbegi 2, Tbilisi 1', suits: 'Food, wine and scenery at a civilised pace.' },
    { name: 'Coast to coast', nights: 10, stops: 'Tbilisi 3, Kazbegi 2, Kutaisi 2, Batumi 3', suits: 'Seeing the whole country, ideally with a hire car.' },
  ],
  gettingThere: 'There are no direct flights from India. The usual routings are through Dubai, Sharjah, Doha or Istanbul, and the total journey is around eight to eleven hours. Kutaisi is served by budget carriers from the Gulf and is often meaningfully cheaper than Tbilisi.',
  gettingAround: [
    { label: 'Bolt is everywhere and absurdly cheap', detail: 'A cross city ride in Tbilisi costs 5 to 10 lari, around 150 to 300 rupees. There is no reason to use anything else in town.' },
    { label: 'Marshrutkas for intercity', detail: 'Shared minibuses run everywhere, cost very little and leave when full rather than on a timetable. Cheap and uncomfortable over three hours.' },
    { label: 'A driver for the mountains', detail: 'The military highway to Kazbegi is best done with a driver, who will stop at the viewpoints and knows when the pass is closed. Around 4,000 to 6,000 rupees for the day.' },
    { label: 'Self drive is feasible', detail: 'Roads in the lowlands are decent and an International Driving Permit is accepted. Georgian driving is assertive and mountain roads in winter need snow tyres and experience.' },
  ],
  connectivity: [
    { label: 'Which network', detail: 'Magti has the best coverage, particularly in the mountains. Geocell and Beeline are cheaper and fine in cities.' },
    { label: 'What to buy', detail: 'A tourist SIM with generous data is around 20 to 30 lari, roughly 600 to 900 rupees, and the airport kiosks sell them on arrival.' },
  ],
  money: [
    { label: 'The lari', detail: 'One lari is roughly 31 rupees. Georgia is cheap: a good dinner with wine is 40 to 60 lari, around 1,200 to 1,900 rupees.' },
    { label: 'Cards work well', detail: 'Tbilisi and Batumi are largely cashless. Village guesthouses, marshrutkas and family wineries want cash.' },
    { label: 'ATMs are easy', detail: 'TBC and Bank of Georgia machines are everywhere with reasonable fees and English menus.' },
  ],
  mistakes: ['Paying for an e-visa when an existing US, UK or Schengen visa already allows visa free entry.', 'Driving to Kazbegi in winter without checking whether the Jvari pass is open.', 'Booking Svaneti on a short trip, when it is a full day of driving each way.', 'Expecting a sandy beach at Batumi.', 'Treating a supra as a normal dinner. It is several hours and a great deal of toasting.'],
  insider: [
    'Georgian wine is fermented in qvevri, clay vessels buried underground, and the amber wines made this way taste like nothing produced in Europe. Family wineries in Kakheti will open several and charge almost nothing.',
    'The sulphur baths in Tbilisi are best booked as a private room for an hour. The public halls are cheaper and much less pleasant for a first visit.',
    'Khinkali, the soup dumpling, is eaten by hand, holding the twisted top, which you do not eat. The stack of tops on your plate is the score.',
    'Georgia has a large and growing Indian community, particularly students in Tbilisi and Batumi, and Indian restaurants are easy to find.',
    'Svaneti in the high northwest is the most spectacular part of the country and needs three days minimum. It does not work as a side trip.',
    'Mountain roads to Kazbegi and Svaneti close without warning in winter. Always have a fallback day.',
    'Tipping is not traditional, though ten percent is now common in Tbilisi restaurants that add no service charge.',
  ],
  etiquette: ['Toasts at a supra are led by a tamada and are not interrupted. Wait your turn.', 'Cover shoulders and knees in churches, and women are expected to cover their heads; scarves are provided.', 'Do not clink glasses when toasting to the departed.', 'Georgian hospitality can be overwhelming. Refusing food repeatedly reads as rejection.'],
  safety: ['Georgia is very safe with low crime and a reformed, visible police force.', 'The breakaway regions of Abkhazia and South Ossetia are not under Georgian control and must not be approached.', 'Stray dogs are common in Tbilisi. Tagged ones are vaccinated and harmless.', 'Mountain weather changes fast. Do not walk to Gergeti in trainers in poor conditions.', 'Tap water in Tbilisi is genuinely good and comes from mountain springs.'],
  visaNote: 'Indian passport holders normally need a Georgian e-visa, valid 30 days, approved in about five to ten working days for roughly 2,600 rupees. Before we apply, we check your passport, because holders of a valid US, UK, Schengen, Canadian, Japanese or Gulf visa or residence permit may enter visa free for up to 90 days, and in that case there is nothing to pay at all.',
};

const uzbekistan: DestinationGuide = {
  slug: 'uzbekistan',
  intro:
    'Uzbekistan holds the best preserved Islamic architecture on the Silk Road, and it is three hours from Delhi. Samarkand, Bukhara and Khiva are the reason to go, and the country has quietly become one of the easiest and cheapest places in Central Asia to travel.',
  whenToGo: {
    summary: 'April to May and September to October. The summer is genuinely brutal and the winter is genuinely cold.',
    keyInsight: 'This is a desert country with a continental climate, which means the shoulder seasons are not merely preferable, they are the only comfortable ones. July and August regularly exceed 40C in Bukhara and Khiva, where the sightseeing is entirely outdoors across open stone courtyards with no shade at all. January drops below freezing. The usable windows are roughly six weeks in spring and six in autumn, and they book out accordingly.',
    bands: [
      { label: 'Spring', months: [4, 5], weather: '20 to 28C, everything green before the heat arrives.', crowds: 'Peak, and Navruz in March fills the country.', verdict: 'best' },
      { label: 'Autumn', months: [9, 10], weather: '18 to 27C, clear, and the melon and grape harvest.', crowds: 'Peak and the best food of the year.', verdict: 'best' },
      { label: 'Shoulder', months: [3, 6, 11], weather: 'Variable. March can be cold, June already hot, November crisp.', crowds: 'Quieter and cheaper.', verdict: 'mixed' },
      { label: 'Extremes', months: [7, 8, 12, 1, 2], weather: 'Over 40C in summer, below freezing in winter.', crowds: 'Empty and very cheap.', verdict: 'avoid' },
    ],
  },
  howLong: { minimum: '6 nights.', ideal: '8 to 10 nights for Tashkent, Samarkand, Bukhara and Khiva.', note: 'The cities are far apart but the high speed train makes it easy. Khiva is the outlier and adds two days, so a short trip should drop it rather than rush all four.' },
  cities: [
    { name: 'Tashkent', nights: '1 to 2', why: 'The modern capital. Rebuilt after the 1966 earthquake, so it is Soviet rather than Silk Road, and worth a day.', dontMiss: ['The metro stations, which are built like ballrooms and were a state secret until 2018', 'Chorsu bazaar under its blue dome', 'The plov centre at lunchtime, where the city eats', 'Hazrati Imam complex and the Uthman Quran'], overrated: 'Staying longer than two nights. The Silk Road cities are why you came.' },
    { name: 'Samarkand', nights: '2 to 3', why: 'The Registan, three madrasas facing one square, is the single most impressive sight in Central Asia.', dontMiss: ['The Registan at night, lit, when the crowds have gone', 'Shah-i-Zinda, a corridor of tiled tombs and the best tilework in the country', 'Gur-e-Amir, Timur\'s mausoleum', 'Bibi-Khanym mosque and the bazaar beside it'] },
    { name: 'Bukhara', nights: '2', why: 'A living old town rather than a set of monuments. Compact, walkable and atmospheric after dark.', dontMiss: ['Poi Kalyan, the minaret Genghis Khan reportedly refused to destroy', 'The Ark fortress', 'Lyab-i-Hauz, the pool square, in the evening', 'The trading domes, which are still working markets'] },
    { name: 'Khiva', nights: '1 to 2', why: 'A walled desert city, almost entirely intact, that feels like a film set because it very nearly is one.', dontMiss: ['The walls at sunset from the west gate', 'Kalta Minor, the fat turquoise minaret that was never finished', 'Staying inside the walls overnight, when the day visitors leave'] },
  ],
  routes: [
    { name: 'The essentials', nights: 6, stops: 'Tashkent 1, Samarkand 3, Bukhara 2', suits: 'A first trip by high speed train.' },
    { name: 'The full Silk Road', nights: 9, stops: 'Tashkent 1, Samarkand 3, Bukhara 3, Khiva 2', suits: 'All three great cities, properly.' },
    { name: 'Slow and deep', nights: 12, stops: 'Tashkent 2, Samarkand 3, Bukhara 3, Khiva 2, Nukus 2', suits: 'Adding the Aral Sea and the Savitsky collection.' },
  ],
  gettingThere: 'Direct from Delhi in about three hours and from Mumbai in four and a half, into Tashkent. Uzbekistan Airways and IndiGo both fly it, and fares are consistently low for the distance.',
  gettingAround: [
    { label: 'The Afrosiyob high speed train', detail: 'The single best thing about travelling here. Tashkent to Samarkand takes just over two hours, Samarkand to Bukhara about ninety minutes, and tickets cost a few hundred rupees. Book ahead in spring and autumn, when they sell out days in advance.' },
    { label: 'Khiva is the awkward one', detail: 'Bukhara to Khiva is six hours by road across desert, or there is a slower overnight train to nearby Urgench. Domestic flights also connect it. This is the leg that decides whether Khiva is in your itinerary.' },
    { label: 'Yandex Go in the cities', detail: 'The local ride app, cheap and reliable in Tashkent and Samarkand. Unofficial taxis are everywhere and negotiated; agree the price first.' },
    { label: 'The old cities are walkable', detail: 'Bukhara and Khiva old towns are entirely on foot. Samarkand is more spread out and needs a taxi between sites.' },
  ],
  connectivity: [
    { label: 'Which network', detail: 'Ucell and Beeline both cover the tourist cities. Data is inexpensive but speeds are modest outside Tashkent.' },
    { label: 'What to buy', detail: 'A tourist SIM is around 50,000 to 100,000 som, roughly 350 to 700 rupees. Registration against your passport is required.' },
    { label: 'VPN habits', detail: 'Some services are intermittently restricted. A VPN installed before arrival saves frustration.' },
  ],
  money: [
    { label: 'Enormous numbers', detail: 'One rupee is roughly 150 som, so everything runs into the hundreds of thousands and millions. A 500,000 som dinner is about 3,300 rupees. Bring a calculator or use one.' },
    { label: 'Cash is still king outside Tashkent', detail: 'Cards work in hotels and larger restaurants in the capital. Bazaars, taxis, craftsmen and small guesthouses are cash only. Withdraw in the cities, not the villages.' },
    { label: 'Registration slips matter', detail: 'Every hotel issues a small registration slip for each night. Keep all of them. They are occasionally asked for on departure, and gaps can cause questions.' },
  ],
  mistakes: ['Going in July or August, when the outdoor sightseeing is unbearable.', 'Booking the Afrosiyob on arrival in peak season and finding it sold out.', 'Trying to add Khiva to a six night trip.', 'Discarding hotel registration slips.', 'Assuming cards work outside Tashkent.'],
  insider: [
    'The Registan is worth seeing twice, once in daylight for the detail and once after dark when it is lit and almost empty. Most itineraries do it once, in the middle of the day, which is the worst of both.',
    'Uzbekistan has visible Indian heritage: Babur, founder of the Mughal empire, was born in the Fergana valley, and his mausoleum garden in Andijan is a pilgrimage site for very few Indian visitors.',
    'Plov is regional and different in every city, and Sunday is when families eat it. The Tashkent plov centre cooks in cauldrons the size of a car and runs out by early afternoon.',
    'Staying inside the walls at Khiva changes the place completely. The day visitors leave around five and the walled city becomes yours.',
    'Suzani embroidery and Bukhara silk carpets are genuinely good value, and haggling is expected and good natured.',
    'Nukus, far out in the desert, holds the Savitsky collection of Soviet avant garde art that was banned and hidden. It is one of the great improbable museums and takes real effort to reach.',
    'Navruz on 21 March is the biggest celebration of the year and the country is at its most festive and most fully booked.',
  ],
  etiquette: ['Shoes off in mosques and homes. Women cover their heads in active mosques.', 'Bread is respected: never place it upside down or throw it away in public.', 'Accept tea when offered, and expect your cup to be refilled constantly.', 'Photography inside some mausoleums carries a small fee. Ask first.'],
  safety: ['Uzbekistan is very safe, with low crime and a strong police presence.', 'Summer heat is the genuine hazard. Water, hats and a midday break are not optional in July.', 'Tap water is not drinkable anywhere.', 'Unofficial taxis are normal and generally fine, but agree the fare before getting in and avoid empty streets late at night.'],
  visaNote: 'Indian passport holders need an Uzbekistan e-visa, valid 30 days single entry. It is entirely online, usually approved in two to three working days, and costs around 2,200 rupees including the service fee, which is in your package. We complete the application and send you the approved visa to carry printed. Passport validity of at least three months beyond your stay is required.',
};

const egypt: DestinationGuide = {
  slug: 'egypt',
  intro:
    'Egypt is five thousand years of monuments strung along one river. The pyramids are at the edge of Cairo, the great temples are six hundred kilometres south around Luxor and Aswan, and the Red Sea is a third direction again. Getting the geography right is most of getting the trip right.',
  whenToGo: {
    summary: 'October to April. Summer in Upper Egypt is dangerous heat rather than uncomfortable heat.',
    keyInsight:
      'The single best structural decision is to do the temples as a Nile cruise rather than as day trips. Luxor to Aswan by boat over three or four nights puts you at Edfu and Kom Ombo at dawn, moves your hotel while you sleep, and removes four road transfers in 40 degree heat. The same itinerary done from a fixed hotel means three long round trips and considerably more money. Almost every disappointing Egypt trip is a hotel based one.',
    bands: [
      { label: 'Peak season', months: [11, 12, 1, 2], weather: '20 to 26C in Luxor, cooler in Cairo, perfect for ruins.', crowds: 'Busiest and most expensive, especially Christmas and New Year.', verdict: 'best' },
      { label: 'Shoulder', months: [3, 4, 10], weather: 'Warm to hot, 28 to 35C. Still workable with early starts.', crowds: 'Good value and noticeably quieter.', verdict: 'good' },
      { label: 'Summer', months: [5, 6, 7, 8, 9], weather: '40 to 48C in Luxor and Aswan. Sites open at dawn and close by noon.', crowds: 'Cheapest by far. The Red Sea remains viable.', verdict: 'avoid' },
    ],
  },
  howLong: { minimum: '7 nights.', ideal: '9 to 11 nights for Cairo, a Nile cruise and Abu Simbel.', note: 'Cairo needs two full days. The cruise is three or four nights. Adding the Red Sea needs three more. Trying to do all of it in a week means internal flights every other day.' },
  cities: [
    { name: 'Cairo and Giza', nights: '3', why: 'The pyramids, the Sphinx and the greatest collection of Egyptian antiquities in the world.', dontMiss: ['Giza plateau at opening time, before both the heat and the coaches', 'The Grand Egyptian Museum, which needs half a day at minimum', 'Islamic Cairo and Khan el-Khalili in the late afternoon', 'Coptic Cairo and the hanging church'], overrated: 'The sound and light show at the pyramids, which is dated. A camel at sunset from the desert side is the better evening.' },
    { name: 'Luxor', nights: '2, or the cruise start', why: 'The largest open air museum in the world, split between the temples on the east bank and the tombs on the west.', dontMiss: ['Valley of the Kings early, with the Tutankhamun tomb as a paid extra', 'Karnak, which is vast and needs two hours minimum', 'Hatshepsut temple against its cliff', 'A hot air balloon over the west bank at sunrise'] },
    { name: 'The Nile cruise', nights: '3 to 4', why: 'Luxor to Aswan with Edfu and Kom Ombo along the way, sleeping on board.', dontMiss: ['Edfu at dawn, the best preserved temple in Egypt', 'Kom Ombo on the riverbank at sunset', 'Watching the bank go by from the sun deck, which is the actual point'] },
    { name: 'Aswan', nights: '1 to 2', why: 'Softer, slower and more Nubian than the rest of the country.', dontMiss: ['Philae temple, moved island by island when the dam flooded it', 'A felucca at sunset around Elephantine Island', 'Abu Simbel as a long day trip or a short flight'] },
    { name: 'Hurghada or Marsa Alam', nights: '3', why: 'The Red Sea. Genuinely world class reef, and an easy decompression after the temples.', dontMiss: ['Snorkelling or diving on the house reef', 'A day boat to Giftun island'], overrated: 'Hurghada town itself, which is a resort strip. Marsa Alam and El Gouna are better.' },
  ],
  routes: [
    { name: 'Classic Egypt', nights: 8, stops: 'Cairo 3, Nile cruise 4, Aswan 1', suits: 'The trip most people should take.' },
    { name: 'With the Red Sea', nights: 11, stops: 'Cairo 3, cruise 4, Hurghada 4', suits: 'Monuments then a beach, which is a good rhythm.' },
    { name: 'Short and sharp', nights: 6, stops: 'Cairo 3, Luxor 3', suits: 'A week, without the cruise.' },
  ],
  gettingThere: 'Direct from Mumbai and Delhi to Cairo in around five and a half to six hours with EgyptAir and Air India. One stop routings through the Gulf are often cheaper and add three to four hours.',
  gettingAround: [
    { label: 'Fly the long legs', detail: 'Cairo to Luxor or Aswan is an hour in the air against ten by road or train. Domestic flights on EgyptAir are frequent and reasonably priced, and on a short trip they are not optional.' },
    { label: 'The sleeper train', detail: 'Cairo to Luxor or Aswan overnight in a private cabin is a genuine option, saves a hotel night and costs around 8,000 rupees. Slow but characterful, and better than a day on the road.' },
    { label: 'Uber works in Cairo', detail: 'Uber and Careem both operate and are far easier than negotiating with street taxis, who rarely use meters. Cairo traffic is severe; allow double what a map suggests.' },
    { label: 'A guide is worth it here', detail: 'More than almost anywhere else. The sites are enormous, largely unlabelled and meaningless without context, and a licensed Egyptologist turns a pile of stones into the reason you came.' },
  ],
  connectivity: [
    { label: 'Which network', detail: 'Vodafone Egypt has the best coverage, including along the Nile and in the Red Sea resorts. Orange and Etisalat are comparable in cities.' },
    { label: 'What to buy', detail: 'A tourist SIM with a data bundle is around 300 to 500 Egyptian pounds, roughly 550 to 900 rupees. Buy at the airport with your passport.' },
    { label: 'On the cruise', detail: 'Mobile data along the Nile is patchy between towns and boat wifi is usually slow and charged. Expect to be offline for stretches.' },
  ],
  money: [
    { label: 'Carry small notes constantly', detail: 'Tipping, known as baksheesh, is woven into daily life and is expected for almost every small service. Carry a thick stack of 5, 10 and 20 pound notes. Not having small change is the most common daily frustration in Egypt.' },
    { label: 'Cash over cards', detail: 'Hotels and larger restaurants take cards. Sites, guides, drivers, markets and tips are cash. ATMs are common in cities and unreliable at smaller Nile towns.' },
    { label: 'Agree every price first', detail: 'Camels, carriages, felucca rides, photographs with anyone in costume: fix the price before, and be clear whether it is per person or total. A great many disputes are manufactured out of this ambiguity.' },
  ],
  mistakes: ['Visiting Luxor in July, when the tombs are 45C.', 'Doing the temples from a fixed hotel instead of a cruise, and spending the trip in a van.', 'Taking a camel or a photograph without agreeing the price, then being asked for ten times what was implied.', 'Arriving at the pyramids at midday with the coaches.', 'Underestimating Cairo traffic and missing a domestic flight.', 'Not carrying small notes for baksheesh.'],
  insider: [
    'Baksheesh is not a scam, it is the economy. Small tips for the man who opens a gate, points at a carving or shows you a shortcut are normal and expected. Budget roughly 200 to 400 rupees a day per person in small notes, and the whole country becomes far less stressful.',
    'The Tutankhamun tomb in the Valley of the Kings requires a separate ticket and is small and relatively plain. Seti I costs much more and is extraordinary. If you are only paying for one extra tomb, make it Seti I.',
    'A dawn hot air balloon over the Luxor west bank is one of the best hours available anywhere in the country and costs less than the same flight in Cappadocia.',
    'Abu Simbel by road is a three hour drive each way from Aswan, leaving around 4am in convoy. The forty minute flight costs more and returns half a day to your trip.',
    'Photography passes are charged separately inside several tombs and museums. Ask before lifting a phone, because fines are enforced.',
    'Egypt is a conservative Muslim country outside the resorts. Women travelling here report significantly more unwanted attention than in South East Asia, and dressing modestly reduces but does not remove it.',
    'Friday is the holy day and many sites open later. Ramadan shifts opening hours across the whole country.',
    'The Grand Egyptian Museum has replaced much of what people remember from the old Tahrir museum. Check which one your itinerary means.',
  ],
  etiquette: ['Cover shoulders and knees at mosques and Coptic churches; women cover their heads in mosques.', 'Ask before photographing people. Many will then ask for baksheesh, which is fair.', 'Use the right hand for eating and giving.', 'Public affection is not acceptable outside resorts.', 'Alcohol is available in hotels and licensed restaurants, not generally in public.'],
  safety: ['Tourist areas are heavily policed and serious crime against visitors is rare.', 'Persistent hawking and touting at major sites is the main irritation. A firm no and continuing to walk is the only effective response.', 'Do not accept an unsolicited guide inside a site who is not yours. They will attach themselves and then demand payment.', 'Stomach upsets are very common. Bottled water only, including for brushing teeth, and be careful with salads and ice.', 'Avoid the Sinai interior and the western desert border regions entirely.'],
  visaNote: 'Indian passport holders need an Egypt e-visa, valid 30 days single entry, approved in roughly five to seven working days for about 2,600 rupees, which is included in your package. We complete the application and send you the approval to carry printed. A visa on arrival also exists but means queueing at a bank counter before immigration, and holders of a valid US, UK, Schengen or Japanese visa may qualify for simplified entry, which we check for you.',
};

const oman: DestinationGuide = {
  slug: 'oman',
  intro:
    'Oman is the Gulf without the skyline. Muscat is low rise and white by law, the interior has wadis and canyons, and there is a desert of orange dunes two hours inland. It is the answer for anyone who found Dubai too loud and still wants three hours of flying and total safety.',
  whenToGo: {
    summary: 'October to April. Summer inland is as hot as anywhere on earth and the coast is humid on top of it.',
    keyInsight:
      'The far south behaves completely differently from the rest of the country. From roughly late June to early September, the khareef monsoon turns Salalah in Dhofar green: mist, waterfalls and 25C while Muscat is at 45C. It is the only place in Arabia that does this, it is the peak season for Gulf visitors, and it is almost entirely absent from Indian itineraries, which write off the whole country in summer.',
    bands: [
      { label: 'Cool season', months: [11, 12, 1, 2, 3], weather: '22 to 30C, dry and clear. Everything outdoors works.', crowds: 'Peak, and still quiet compared with the UAE.', verdict: 'best' },
      { label: 'Shoulder', months: [4, 10], weather: 'Hot, 33 to 38C. Early starts required for wadis and forts.', crowds: 'Quieter and cheaper.', verdict: 'good' },
      { label: 'Summer', months: [5, 6, 7, 8, 9], weather: '45C plus inland and humid on the coast. Salalah is the exception and is green.', crowds: 'Very cheap in the north, peak in Salalah.', verdict: 'mixed' },
    ],
  },
  howLong: { minimum: '5 nights.', ideal: '7 nights for Muscat, the mountains, a wadi and a desert night.', note: 'Oman is large and the distances are real. Muscat to Wahiba Sands is three hours, Nizwa an hour and a half, Salalah is a two hour flight. A week covers the north comfortably; Salalah needs its own trip.' },
  cities: [
    { name: 'Muscat', nights: '2 to 3', why: 'A calm, low rise capital between mountains and sea, with the best mosque in the region.', dontMiss: ['Sultan Qaboos Grand Mosque, mornings only for non Muslims, with the enormous hand woven carpet', 'Mutrah souq and the corniche at dusk', 'Royal Opera House, architecturally and as a performance', 'A dhow cruise along the coast at sunset'], overrated: 'Muscat beaches, which are pleasant and not the reason to come. The wadis are.' },
    { name: 'Nizwa and the interior', nights: '1 to 2', why: 'Forts, date plantations and the old capital of the interior, plus the mountain road up Jebel Akhdar.', dontMiss: ['Nizwa fort and the Friday morning goat market, which is a genuine working auction', 'Jebel Akhdar for rose terraces and cool air', 'Bahla fort, UNESCO listed', 'Misfat al Abriyeen, a mud brick village with falaj water channels'] },
    { name: 'Wahiba Sands', nights: '1', why: 'Orange dunes and a desert camp. The best night of an Oman trip.', dontMiss: ['Dune driving at sunset', 'A night at a camp with no light pollution', 'Sunrise from the top of a dune'] },
    { name: 'Wadi Shab and the east coast', nights: '1 to 2', why: 'A forty minute walk, a swim through a canyon and a waterfall inside a cave. The single best day in Oman.', dontMiss: ['Wadi Shab, taking the dry bag seriously', 'Bimmah sinkhole on the way', 'Turtle watching at Ras al Jinz, which needs a night booking'] },
    { name: 'Salalah', nights: '3 to 4', why: 'The far south, tropical and green during the khareef, with frankincense country behind it.', dontMiss: ['Wadi Darbat waterfalls in monsoon', 'The frankincense souq', 'Empty Quarter edge trips'] },
  ],
  routes: [
    { name: 'Northern loop', nights: 6, stops: 'Muscat 3, Nizwa 1, Wahiba 1, Wadi Shab area 1', suits: 'The standard trip and the right one.' },
    { name: 'Short break', nights: 4, stops: 'Muscat 3, Wahiba 1', suits: 'A long weekend from an Indian metro.' },
    { name: 'Salalah in monsoon', nights: 6, stops: 'Muscat 2, Salalah 4', suits: 'July and August only, when the south is green.' },
  ],
  gettingThere: 'Two and a half to three and a half hours from Mumbai, Delhi, Kochi and Bengaluru into Muscat. Oman Air, IndiGo and SalamAir all fly it, and fares from Kerala are particularly low given the large Indian community.',
  gettingAround: [
    { label: 'Hire a car', detail: 'Oman is the easiest country in the Middle East to drive in. Roads are excellent, signage is bilingual, fuel is cheap and traffic is light outside Muscat. A 2WD covers everything except the dunes and some mountain tracks.' },
    { label: 'You need a 4WD for two things', detail: 'Wahiba Sands and the Jebel Akhdar and Jebel Shams mountain roads require a 4WD, and it is legally enforced at the Jebel Akhdar checkpoint. Most trips hire a 2WD and take a guided 4WD for those days.' },
    { label: 'No ride hailing worth using', detail: 'Otaxi exists but coverage is thin. Muscat taxis are unmetered and negotiated. Over a week a hire car is both cheaper and far more practical.' },
    { label: 'Distances are deceptive', detail: 'The country is larger than Italy with a fraction of the population. Muscat to Salalah is a thousand kilometres. Fly it.' },
  ],
  connectivity: [
    { label: 'Which network', detail: 'Omantel has the widest coverage including the wadis and desert roads. Ooredoo is fine in the cities.' },
    { label: 'What to buy', detail: 'A tourist SIM is around 3 to 6 rial, roughly 650 to 1,300 rupees. Airport counters register and activate them.' },
    { label: 'WhatsApp calls', detail: 'Voice and video calling over internet apps has historically been restricted in Oman as in the UAE. Messaging works. Assume calls home need a normal line.' },
  ],
  money: [
    { label: 'The rial is heavy', detail: 'One Omani rial is around 215 to 220 rupees, one of the strongest currencies in the world. A 10 rial meal is about 2,200 rupees. The small numbers are misleading.' },
    { label: 'Cards in the cities', detail: 'Muscat is card friendly. Souks, small towns, desert camps and fuel stations in the interior often want cash.' },
    { label: 'Not a budget destination', detail: 'Oman costs more than South East Asia and roughly what the UAE does, without the range of cheap options Dubai offers.' },
  ],
  mistakes: ['Going inland between May and September.', 'Booking a 2WD and then trying to reach Jebel Akhdar, where you will be turned back at the checkpoint.', 'Doing Wadi Shab without a dry bag and ruining a phone.', 'Arriving at the Grand Mosque in the afternoon, when non Muslim visiting hours have ended.', 'Trying to add Salalah to a northern week by road.'],
  insider: [
    'Wadi Shab is not a viewpoint, it is an activity. Forty minutes of walking, then swimming through three pools, then squeezing through a narrow gap in the rock to reach a waterfall inside a cave. Bring a dry bag, wear shoes you can swim in, and allow half a day.',
    'The Grand Mosque admits non Muslims only in the morning, roughly 8am to 11am, and is closed to visitors on Fridays. A great many itineraries schedule it for an afternoon.',
    'Oman is far more conservative than Dubai. Women should cover shoulders and knees everywhere outside a hotel pool, and this is social expectation rather than tourist advice.',
    'Desert camps range from a mattress in a tent to something close to a hotel. The difference in price is large and so is the difference in sleep. Ask specifically about air conditioning and private bathrooms.',
    'Ras al Jinz turtle reserve has green turtles nesting year round, with the peak between June and September. Viewing is strictly managed at night with no flash, and the visit must be booked ahead.',
    'Fuel is among the cheapest in the world, which makes a hire car far better value than it first appears.',
    'Omanis are notably reserved and courteous, and hard selling is close to absent even in the souk. Bargaining is gentle here, not theatrical.',
    'Friday and Saturday are the weekend. Government offices and many shops close Friday morning for prayers.',
  ],
  etiquette: ['Dress modestly in public: shoulders and knees covered for everyone.', 'Women cover hair, arms and legs at the Grand Mosque; abayas are available at the entrance.', 'Ask before photographing anyone, particularly women.', 'Do not eat or drink in public during Ramadan daylight hours.', 'Alcohol is served only in hotels and licensed restaurants.'],
  safety: ['Oman is one of the safest countries in the world for visitors, including for women travelling alone by regional standards.', 'Wadis flash flood. Never enter one when rain is forecast anywhere upstream, and never drive through moving water.', 'Summer heat inland is lethal, not merely unpleasant. Carry far more water than feels necessary.', 'Mountain roads are steep with sharp drops and no barriers. Descend in low gear.', 'Tap water is desalinated and safe; bottled is the norm.'],
  visaNote: 'Indian passport holders need an Oman e-visa, either 10 or 30 days. It is applied for online through the Royal Oman Police portal, approved in roughly two to four working days, and costs about 2,300 rupees for the 30 day version, which is in your package. Holders of a valid US, UK, Schengen, Canadian, Australian or Japanese visa may be eligible for a simplified route, and we check that first. Passport validity of six months is required.',
};

const singapore: DestinationGuide = {
  slug: 'singapore',
  intro:
    'Singapore is a city, a country and an island, small enough to cross in an hour. It is expensive, spotlessly organised and the easiest place in Asia to travel with children or with parents. Three or four days covers it properly, which is why it is so often paired with Malaysia or Bali.',
  whenToGo: {
    summary: 'Singapore sits almost on the equator, so it is 26 to 32C and humid every single day of the year. There is no season, only wetter and drier months.',
    keyInsight:
      'Since the weather is effectively constant, the calendar decides the trip rather than the climate. The Formula One night race in September and the year end holidays fill hotels and double rates. The haze from Sumatran fires, which used to blanket the city between June and September, still recurs in some years and can make outdoor days unpleasant. The most useful piece of timing is the Great Singapore Sale around June and July, and the fact that late January or February brings Chinese New Year, when Chinatown is spectacular and many small businesses close for days.',
    bands: [
      { label: 'Drier months', months: [2, 3, 4, 5, 6, 7, 8], weather: 'Hot and humid with shorter afternoon storms.', crowds: 'June and July are regional school holidays and busy.', verdict: 'best' },
      { label: 'Wetter months', months: [11, 12, 1], weather: 'The northeast monsoon. More rain, often prolonged, still warm.', crowds: 'December is peak and expensive.', verdict: 'mixed' },
      { label: 'Event months', months: [9, 10], weather: 'Hot, with possible haze in some years.', crowds: 'The F1 night race in September doubles hotel rates city wide.', verdict: 'mixed' },
    ],
  },
  howLong: { minimum: '3 nights.', ideal: '4 nights, or 3 as half of a longer trip.', note: 'Singapore is genuinely small and very efficient. Beyond four nights most people run out of things they want to pay for, which is why it works best combined with Malaysia, Bali or Thailand.' },
  cities: [
    { name: 'Marina Bay and the civic district', nights: 'base here', why: 'The waterfront, the gardens and most of the landmarks, all walkable or one MRT stop apart.', dontMiss: ['Gardens by the Bay, with the Cloud Forest dome and the free Supertree light show after dark', 'Marina Bay Sands SkyPark at sunset', 'The Merlion and the bay loop on foot in the evening', 'National Gallery, in the old Supreme Court'], overrated: 'The Singapore Flyer, which is slow and costs more than the SkyPark for a similar view.' },
    { name: 'Sentosa', nights: 'day trip', why: 'The resort island, and where the theme parks are.', dontMiss: ['Universal Studios, a full day, booked ahead for weekends', 'SEA Aquarium', 'Skyline Luge, which is better than it sounds'], overrated: 'Sentosa beaches, which are artificial and face a container port.' },
    { name: 'Chinatown, Little India and Kampong Glam', nights: 'half day each', why: 'The three heritage quarters, each walkable and each with the best cheap food in the city.', dontMiss: ['Maxwell or Chinatown Complex hawker centre', 'Sri Mariamman and Buddha Tooth Relic temples on the same street', 'Haji Lane and the Sultan Mosque', 'Tekka Centre in Little India'] },
    { name: 'The zoo and the north', nights: 'day trip', why: 'Genuinely among the best zoos in the world, with open enclosures rather than cages.', dontMiss: ['Singapore Zoo, the morning', 'Night Safari after dark, which is a separate ticket and worth it', 'Breakfast with orangutans if travelling with children'] },
  ],
  routes: [
    { name: 'The city', nights: 4, stops: 'Singapore 4', suits: 'A short first trip or a stopover made into a holiday.' },
    { name: 'With Malaysia', nights: 9, stops: 'Singapore 3, Kuala Lumpur 3, Langkawi 3', suits: 'The standard pairing, and it balances the cost.' },
    { name: 'Family week', nights: 5, stops: 'Singapore 5', suits: 'Universal, the zoo, the gardens and the aquarium without rushing.' },
  ],
  gettingThere: 'Four to five and a half hours direct from most Indian metros into Changi, which is consistently rated the best airport in the world and is worth arriving early for. Singapore Airlines, Scoot, IndiGo and Air India all fly it.',
  gettingAround: [
    { label: 'The MRT is the answer', detail: 'Clean, fast, air conditioned and it reaches everything a visitor wants. Tap in with any contactless bank card or phone, no separate ticket needed. A day of travel costs a few hundred rupees.' },
    { label: 'Grab for the rest', detail: 'Taxis are metered and honest, Grab is marginally cheaper and avoids the conversation. Both are expensive by Asian standards.' },
    { label: 'Walking is underrated', detail: 'The city is small and much of the centre is connected by covered walkways and air conditioned malls, which matters in this humidity.' },
    { label: 'Changi is an attraction', detail: 'Jewel with its indoor waterfall is landside and open to anyone, including on a layover. Allow an extra hour on departure for it rather than treating it as dead time.' },
  ],
  connectivity: [
    { label: 'Which network', detail: 'Singtel, StarHub and M1 all have complete coverage on an island this size. Any is fine.' },
    { label: 'What to buy', detail: 'A tourist SIM with a large data allowance is around 12 to 30 Singapore dollars, roughly 750 to 1,900 rupees. Available at Changi on arrival.' },
    { label: 'Free wifi is genuinely everywhere', detail: 'Wireless@SG covers malls, MRT stations and public areas. For a three night trip you may not need a SIM at all.' },
  ],
  money: [
    { label: 'It is expensive', detail: 'One Singapore dollar is around 63 to 66 rupees. A restaurant meal is 20 to 40 dollars a head, though a hawker centre meal is 5 to 8. The gap between those two numbers is where a Singapore budget is won or lost.' },
    { label: 'Completely cashless', detail: 'Cards and phones work everywhere including hawker stalls and the MRT. There is little need to carry cash at all.' },
    { label: 'Alcohol is heavily taxed', detail: 'A beer in a bar is 12 to 18 dollars, roughly 800 to 1,200 rupees. This surprises people more than any other price here.' },
    { label: 'GST refund on departure', detail: 'Tourists can claim back the 9 percent goods and services tax on purchases above a threshold at Changi. Keep receipts and allow time at the airport.' },
  ],
  mistakes: ['Eating in restaurants rather than hawker centres and doubling the food budget.', 'Booking during the September F1 weekend without realising it.', 'Buying an MRT ticket when a contactless bank card already works.', 'Spending five or six nights here when three or four is the natural length.', 'Treating Sentosa beaches as real beaches.'],
  insider: [
    'Hawker centres are the point of Singapore, not a budget compromise. Several stalls hold Michelin recognition and charge under 500 rupees. Look for the longest queue of office workers and join it.',
    'Any contactless bank card or phone taps straight into the MRT and buses. Tourists routinely queue to buy a separate travel card they do not need.',
    'The Supertree light show at Gardens by the Bay runs twice nightly and is completely free, as is walking the gardens themselves. Only the two domes are ticketed.',
    'Chewing gum cannot be sold and littering, jaywalking and eating on the MRT all carry real fines that are actually issued.',
    'Drug offences carry the death penalty, and this is enforced for quantities that would be minor elsewhere. There is no discretion and no tourist exception.',
    'Changi has a free city tour for travellers with a long layover, plus gardens, a cinema and a swimming pool inside the terminals.',
    'Singapore pairs naturally with Malaysia: Kuala Lumpur is an hour by air or five by road, and it brings the average daily cost down considerably.',
    'Hotel rooms here are small by Indian standards for the price. A four star room in Singapore is often physically smaller than a three star in Bangkok.',
  ],
  etiquette: ['Queue properly and do not jump. It matters here more than almost anywhere.', 'No eating or drinking on public transport, including water.', 'Remove shoes at temples and mosques; cover shoulders and knees.', 'Tipping is not customary and service charge is usually included.', 'Keep your voice down on public transport.'],
  safety: ['Singapore is among the safest cities in the world at any hour.', 'The laws are the thing to respect. Fines for littering, jaywalking and smoking outside designated areas are issued to tourists routinely.', 'Drug penalties are capital and non negotiable. Know exactly what is in any medication you carry.', 'Heat and humidity are the physical risk. Plan indoor breaks in the middle of the day.', 'Tap water is safe to drink straight from the tap, which is unusual in the region.'],
  visaNote: 'Indian passport holders need a Singapore visa, which for an Indian passport can only be filed through an authorised visa agent rather than directly. It takes roughly five to seven working days and costs about 3,400 rupees including fees, which is in your package. Bank statements and proof of employment are part of the document set, and we tell you exactly what to send before you commit to dates. Passport validity of six months is required.',
};

const japan: DestinationGuide = {
  slug: 'japan',
  intro:
    'Japan is the trip people save for, and it earns it. Tokyo, Kyoto and Osaka in ten days is the standard first route and works because the trains make it effortless. It costs more than anywhere else in Asia and less than Europe, and almost nobody comes back disappointed.',
  whenToGo: {
    summary: 'Late March to May and October to November. Cherry blossom and autumn colour are the two reasons the country has a peak season at all.',
    keyInsight:
      'Cherry blossom is a moving target and a week long window, not a month. It starts in the far south in mid March and reaches Tokyo and Kyoto around late March to early April, but the exact date shifts by up to two weeks year to year and the bloom lasts roughly seven to ten days. Hotels for that window are booked a year ahead at double rates. If the blossom is the reason for the trip, accept that you are gambling; if it is not, going in late April after the crowds leave gives you the same country for far less money. Autumn colour in November is more predictable and almost as beautiful.',
    bands: [
      { label: 'Spring', months: [3, 4, 5], weather: 'Mild and lovely. Blossom late March to early April, then warm and clear.', crowds: 'The busiest and most expensive weeks of the year during blossom.', verdict: 'best' },
      { label: 'Autumn', months: [10, 11], weather: 'Crisp, dry and the best colour of the year in the second half of November.', crowds: 'Busy but more predictable than blossom.', verdict: 'best' },
      { label: 'Winter', months: [12, 1, 2], weather: 'Cold, dry and clear in the cities. Excellent snow in Hokkaido and the Alps.', crowds: 'Quiet and good value outside New Year.', verdict: 'good' },
      { label: 'Summer', months: [6, 7, 8, 9], weather: 'The rainy season in June, then hot and very humid. Typhoons possible through September.', crowds: 'Cheapest, with excellent festivals.', verdict: 'mixed' },
    ],
  },
  howLong: { minimum: '7 nights.', ideal: '10 to 12 nights for Tokyo, Kyoto, Osaka and a day trip or two.', note: 'Japan is far enough and expensive enough to reach that a short trip is poor value. The Tokyo to Kyoto shinkansen takes about two and a quarter hours, so moving between bases is fast; the time goes on the cities themselves.' },
  cities: [
    { name: 'Tokyo', nights: '4 to 5', why: 'Not one city but a dozen districts with different personalities, plus the best food density on earth.', dontMiss: ['Shibuya crossing and the view from Shibuya Sky', 'Senso-ji at Asakusa early, before the crowds', 'Tsukiji outer market for breakfast', 'Shinjuku at night, Omoide Yokocho and Golden Gai', 'A day trip to Hakone or Nikko'], overrated: 'The Robot Restaurant style shows and, for most people, Tokyo Skytree, which is further out and no better than Shibuya Sky.' },
    { name: 'Kyoto', nights: '3 to 4', why: 'Sixteen hundred temples, the geisha districts and the Japan people picture before they arrive.', dontMiss: ['Fushimi Inari at sunrise, which is the only way to have the torii gates to yourself', 'Arashiyama bamboo grove before 8am for the same reason', 'Kiyomizu-dera and the lanes below it', 'Gion in the early evening', 'Nishiki market'], overrated: 'Kyoto in the middle of the day at any major site. The city is extraordinary at dawn and unbearable at noon.' },
    { name: 'Osaka', nights: '2', why: 'Louder, friendlier and the best street food in the country. Also the base for Nara and Himeji.', dontMiss: ['Dotonbori after dark', 'Kuromon market', 'Osaka castle', 'Universal Studios Japan if travelling with children'] },
    { name: 'Nara', nights: 'day trip', why: 'The great bronze Buddha and a park full of deer that bow for biscuits.', dontMiss: ['Todai-ji', 'Kasuga Taisha lantern paths'] },
    { name: 'Hakone or Mount Fuji', nights: '1', why: 'Hot springs, a lake and Fuji itself if the weather cooperates.', dontMiss: ['A ryokan with an onsen and a kaiseki dinner', 'Chureito pagoda for the classic Fuji photograph'] },
  ],
  routes: [
    { name: 'The golden route', nights: 10, stops: 'Tokyo 4, Hakone 1, Kyoto 3, Osaka 2', suits: 'A first trip, and the right one.' },
    { name: 'Short but complete', nights: 7, stops: 'Tokyo 4, Kyoto 3', suits: 'A week, without trying to add a third city.' },
    { name: 'Deeper', nights: 14, stops: 'Tokyo 4, Hakone 1, Kanazawa 2, Kyoto 4, Osaka 2, Hiroshima 1', suits: 'A second visit, or anyone with a fortnight.' },
  ],
  gettingThere: 'Direct from Delhi and Mumbai to Tokyo in about seven and a half to nine hours, with Japan Airlines, ANA and Air India. One stop routings through Singapore, Bangkok or the Gulf are often cheaper. Tokyo has two airports: Narita is further out, Haneda is far more convenient.',
  gettingAround: [
    { label: 'Do the maths on the rail pass', detail: 'The Japan Rail Pass rose sharply in price and is no longer automatically worth buying. For a simple Tokyo, Kyoto, Osaka trip, individual shinkansen tickets are usually cheaper. It pays off only if you are covering long distances, such as adding Hiroshima or Hokkaido.' },
    { label: 'Get an IC card immediately', detail: 'Suica or Pasmo, now available in digital form on most phones, taps you onto every train, subway and bus in the country and pays at convenience stores. It removes almost all ticketing friction.' },
    { label: 'Luggage forwarding is the secret', detail: 'Takkyubin services send your suitcase from hotel to hotel overnight for roughly 1,200 to 1,800 rupees. You travel between cities with a day bag instead of dragging a case through Tokyo station. Almost no first time visitor knows this exists and everyone who uses it does so again.' },
    { label: 'Reserve shinkansen seats in blossom season', detail: 'Unreserved carriages fill completely at peak times. Reservations cost little and guarantee a seat with your luggage.' },
  ],
  connectivity: [
    { label: 'What to buy', detail: 'A tourist data SIM or eSIM for two weeks is around 3,000 to 5,000 yen, roughly 1,700 to 2,800 rupees. Data only SIMs are the norm; voice is rarely included.' },
    { label: 'Pocket wifi', detail: 'Rented at the airport and shared across a group, often cheaper than several SIMs for a family. Needs charging daily.' },
    { label: 'Free wifi is patchy', detail: 'Better than it was but still inconsistent outside stations and convenience stores. Do not rely on it for navigation.' },
  ],
  money: [
    { label: 'Less cash than it used to need', detail: 'Japan was famously cash only and has changed fast. Cards and IC cards now work almost everywhere in the cities. Small restaurants, shrines, rural buses and some markets remain cash.' },
    { label: 'Use 7-Eleven ATMs', detail: 'Many Japanese bank ATMs reject foreign cards outright. The machines inside 7-Eleven and at post offices accept them reliably and have English menus. This one fact prevents a lot of panic.' },
    { label: 'Tipping is not done', detail: 'Leaving money on a table is confusing and mildly rude. Service is included and excellent regardless.' },
    { label: 'Tax free shopping', detail: 'Shops display tax free for purchases over a threshold with a passport. Worth carrying it when shopping properly.' },
  ],
  mistakes: ['Buying a Japan Rail Pass without checking whether individual tickets are cheaper.', 'Booking a blossom trip and discovering hotels doubled a year ago.', 'Arriving at Fushimi Inari or Arashiyama at midday.', 'Dragging suitcases between cities instead of forwarding them.', 'Assuming every ATM takes a foreign card.', 'Booking Narita when Haneda was available for a similar fare.'],
  insider: [
    'Luggage forwarding, takkyubin, is the single change that most improves a Japan trip. Hand your case to the hotel front desk before 10am and it is at the next hotel by evening.',
    'Convenience stores here are genuinely good food. A 7-Eleven egg sandwich or a Lawson onigiri is a legitimate meal, not a compromise, and costs a few hundred rupees.',
    'Vegetarian food is harder than expected. Dashi, a fish stock, is in most broths and sauces including many vegetable dishes. Jain and strict vegetarian travellers should plan restaurants in advance rather than improvising, and we do this for you.',
    'Many onsen refuse entry to anyone with visible tattoos. Private family baths, kashikiri, are the workaround and can be booked at most ryokan.',
    'Shinkansen platforms have marked positions for each carriage, and the train stops exactly there, to the second. Standing at the right marker is the difference between boarding calmly and running.',
    'Golden Week in late April and early May is a national holiday cluster when the whole country travels at once. Avoid it unless you have booked far ahead.',
    'Shrine and temple admission is usually small, a few hundred yen, but adds up across a Kyoto day. Budget for it.',
    'Sumo tournaments run six times a year, fifteen days each, and tickets are affordable. If your dates coincide it is a far better evening than most paid attractions.',
  ],
  etiquette: ['Do not eat while walking, and do not talk on the phone on trains.', 'Shoes off where there is a step up and slippers waiting. Separate slippers exist for toilets.', 'Do not stick chopsticks upright in rice or pass food chopstick to chopstick; both are funerary.', 'Queue at marked positions and let passengers off before boarding.', 'Wash thoroughly before entering an onsen. The bath is for soaking, not cleaning.'],
  safety: ['Japan is among the safest countries in the world. Lost wallets are routinely returned intact.', 'The real risks are natural: earthquakes and typhoons. Hotels have instructions, and the national warning system reaches phones automatically.', 'Summer heat in Tokyo and Kyoto is severe and heatstroke is a genuine hospital risk in July and August.', 'Tap water is excellent everywhere.', 'Carry your passport. Police may ask foreign visitors for it and are entitled to.'],
  visaNote: 'Indian passport holders need a Japan tourist visa. It is submitted through the authorised visa centre and now issued electronically rather than as a passport sticker, with processing of roughly five to ten working days once the documents are complete. The fee is about 3,600 rupees including service charges and is in your package. Japan asks for a day by day itinerary, proof of funds and employment details, which is more preparation than most destinations, so this one needs starting three to four weeks before departure.',
};

const southKorea: DestinationGuide = {
  slug: 'south-korea',
  intro:
    'South Korea is late night food, mountains inside the cities, and a country most Indian travellers still skip. Seoul is the reason to go, Busan adds a coastline, and Jeju is the island break. It costs less than Japan and is easier to move around than almost anywhere.',
  whenToGo: {
    summary: 'April to June and September to November. The summer is hot, humid and monsoonal, and the winter is properly cold.',
    keyInsight:
      'Korea has four genuinely distinct seasons, unlike most of the places Indians travel to, and the difference between them is extreme rather than mild. Seoul in January sits around minus 5C with wind, which for most Indian visitors means buying clothing they do not own. July and August bring the monsoon and 30C with 80 percent humidity. The two shoulder windows are short and are what everyone means when they praise Korean weather: cherry blossom in early April and the autumn foliage through late October and November, which is more reliable and arguably better than Japan.',
    bands: [
      { label: 'Spring', months: [4, 5, 6], weather: 'Mild and bright. Blossom in early April, then warm and clear.', crowds: 'Busy in blossom week, comfortable after.', verdict: 'best' },
      { label: 'Autumn', months: [9, 10, 11], weather: 'Crisp and dry with outstanding foliage from mid October.', crowds: 'Peak domestic travel in foliage season.', verdict: 'best' },
      { label: 'Winter', months: [12, 1, 2], weather: 'Cold, often below freezing, dry and clear. Ski season.', crowds: 'Quiet and cheap outside the ski resorts.', verdict: 'mixed' },
      { label: 'Summer', months: [7, 8], weather: 'Monsoon rain, heat and humidity. Typhoons possible in August.', crowds: 'Cheapest, and Korean holidays fill the beaches.', verdict: 'mixed' },
    ],
  },
  howLong: { minimum: '6 nights.', ideal: '8 to 10 nights for Seoul, Busan and a day trip.', note: 'Seoul alone justifies four or five nights. The KTX to Busan takes two and a half hours, so adding the coast costs half a day of travel, not a whole one.' },
  cities: [
    { name: 'Seoul', nights: '4 to 5', why: 'Palaces, mountains, markets and nightlife in one very large, very efficient city.', dontMiss: ['Gyeongbokgung palace, free if you arrive in a hanbok, which most visitors rent', 'Bukchon hanok village in the morning', 'Myeongdong for street food and cosmetics', 'Namsan and the N Seoul Tower at dusk', 'A DMZ tour, which needs booking days ahead and a passport'], overrated: 'Gangnam as a sight. It is an expensive business district, and the song is the only reason anyone goes.' },
    { name: 'Busan', nights: '2 to 3', why: 'Korea\'s second city, on the coast, with beaches, a vast fish market and a hillside village painted every colour.', dontMiss: ['Gamcheon culture village', 'Haeundae and Gwangalli beaches at night', 'Jagalchi fish market', 'Haedong Yonggungsa, a temple on the rocks above the sea'] },
    { name: 'Jeju', nights: '3', why: 'A volcanic island of craters, waterfalls and coastal walks. Korea\'s own holiday destination.', dontMiss: ['Seongsan Ilchulbong crater at sunrise', 'Manjanggul lava tube', 'A section of the Olle coastal trail', 'Hallasan if you are a serious walker'] },
    { name: 'Gyeongju', nights: '1 to 2', why: 'The old Silla capital, an open air museum of burial mounds and temples, an hour from Busan.', dontMiss: ['Bulguksa temple', 'The royal tomb complex at dusk'] },
  ],
  routes: [
    { name: 'Seoul and the coast', nights: 8, stops: 'Seoul 5, Busan 3', suits: 'A first trip, on the KTX.' },
    { name: 'City and island', nights: 9, stops: 'Seoul 5, Jeju 4', suits: 'Urban then outdoors, with a short domestic flight.' },
    { name: 'The full circuit', nights: 12, stops: 'Seoul 5, Gyeongju 2, Busan 3, Jeju 2', suits: 'A fortnight and a proper look at the country.' },
  ],
  gettingThere: 'Direct from Delhi to Seoul Incheon in around seven hours with Korean Air and Air India. One stop routings through Hong Kong, Singapore or the Gulf are common from other Indian cities. Incheon is an hour from central Seoul by express train.',
  gettingAround: [
    { label: 'The Seoul subway is world class', detail: 'Enormous, cheap, entirely signed in English and with platform screen doors throughout. Get a T-money card at any convenience store and tap onto subways, buses and taxis.' },
    { label: 'KTX between cities', detail: 'Seoul to Busan in two and a half hours for roughly 3,500 to 4,500 rupees. Reserve in advance during holiday periods.' },
    { label: 'Kakao T, not Uber', detail: 'Uber barely operates. Kakao T is the local taxi app and works well, though the interface is partly Korean. Taxis are metered, plentiful and cheap by developed country standards.' },
    { label: 'Naver Map or Kakao Map, not Google', detail: 'Google Maps walking and transit directions are legally restricted in Korea and are unreliable. Download Naver Map or Kakao Map before you arrive. This single thing causes more visitor frustration than anything else in the country.' },
  ],
  connectivity: [
    { label: 'What to buy', detail: 'A tourist SIM or eSIM for ten days is around 25,000 to 40,000 won, roughly 1,600 to 2,500 rupees. Counters at Incheon sell them around the clock.' },
    { label: 'Pocket wifi', detail: 'Widely rented and good value for a family. Korea has among the fastest mobile networks in the world.' },
    { label: 'Wifi is genuinely everywhere', detail: 'Free public wifi covers subways, buses, cafes and most public spaces.' },
  ],
  money: [
    { label: 'The won', detail: 'Roughly 16 won to one rupee, so 10,000 won is about 620 rupees. Korea is meaningfully cheaper than Japan for food and transport, similar for hotels.' },
    { label: 'Cards everywhere', detail: 'Korea is close to cashless and cards work almost universally, including in taxis and markets.' },
    { label: 'Some ATMs reject foreign cards', detail: 'Look for machines marked Global or those in convenience stores and airports.' },
    { label: 'Tax refund', detail: 'Immediate tax refunds are offered at many shops for purchases over a threshold, with the passport shown at the till.' },
  ],
  mistakes: ['Relying on Google Maps for directions, which does not work properly in Korea.', 'Going in July or August and meeting the monsoon.', 'Underestimating the January cold and arriving without a proper coat.', 'Booking a DMZ tour on arrival, when they require several days notice and a passport.', 'Assuming K-ETA applies to an Indian passport, when it does not.'],
  insider: [
    'Jeju Island can be visited visa free for up to 30 days on a direct flight, while mainland Korea requires a full visa. This is a genuine and little known option for an island trip without the visa process, though it only works if you fly directly to Jeju and do not enter the mainland.',
    'Renting a hanbok for a few hours gets you free entry into the main palaces and is what most visitors, Korean and foreign, actually do. Shops cluster around Gyeongbokgung.',
    'Korean food is heavily meat and seafood based, and vegetarian travellers need planning. Temple food, sacred vegetarian cuisine, is excellent and bookable, and bibimbap without egg or meat is widely understood.',
    'Korean barbecue is cooked at the table by you, not by staff, and the side dishes, banchan, are free and endlessly refilled.',
    'Jjimjilbang, the 24 hour bathhouse and sauna complex, is a genuine cultural institution and costs a few hundred rupees. Many are open all night and are used as cheap accommodation by locals.',
    'Convenience stores are a food culture in themselves, and most have seating and hot water for instant noodles.',
    'Chuseok in September or October and Seollal in January or February are the two major holidays, when the entire country travels home and transport books out completely.',
    'Seoul has mountains inside the city. Bukhansan is a national park reachable by subway, and Koreans hike it in serious gear on any weekend.',
  ],
  etiquette: ['Receive and give with two hands, especially to anyone older.', 'Shoes off in homes, temples, guesthouses and many restaurants with floor seating.', 'Do not start eating before the eldest person at the table.', 'Pour drinks for others, not yourself, and turn away slightly when drinking with elders.', 'Tipping is not practised and can cause confusion.'],
  safety: ['South Korea is extremely safe, including for women alone at night in the cities.', 'The DMZ is a controlled tourist environment and entirely safe on an organised tour. Independent approach is not possible.', 'Summer monsoon flooding and typhoons can disrupt travel in July and August.', 'Winter pavements ice over and are genuinely slippery.', 'Tap water is safe, though most Koreans drink filtered by preference.'],
  visaNote: 'Indian passport holders need a full South Korean tourist visa, filed at the visa application centre. K-ETA, the online authorisation, is not available to Indian passports. Processing is roughly seven to ten working days and the fee is about 4,800 rupees including service charges, which is in your package. Bank statements and proof of employment are required. Jeju Island is a separate case and can be entered without a visa for up to 30 days on a direct flight, and we will tell you whether that suits your plan.',
};

const turkey: DestinationGuide = {
  slug: 'turkey',
  intro:
    'Türkiye spans two continents and about three thousand years of empires. Istanbul is the reason most people come, Cappadocia is the balloon photograph, and the Mediterranean coast is a third trip again. A week covers the first two properly.',
  whenToGo: {
    summary: 'April to June and September to November. July and August are hot and extremely crowded; winter is cold but Cappadocia in snow is exceptional.',
    keyInsight:
      'The balloons are the reason most people book Cappadocia, and they are cancelled far more often than anyone expects. Flights only go in calm, clear conditions, and across a year roughly a quarter to a third of scheduled mornings are grounded, rising sharply in winter. The only defence is time: book the balloon for your first morning and keep a second and ideally third morning in Cappadocia as backup. An itinerary with a single night there is a coin toss, and people fly home having paid for a flight that never left.',
    bands: [
      { label: 'Spring', months: [4, 5, 6], weather: 'Mild, green and clear. The best balloon conditions of the year.', crowds: 'Busy and rising through June.', verdict: 'best' },
      { label: 'Autumn', months: [9, 10, 11], weather: 'Warm days, cool evenings, and the sea still swimmable into October.', crowds: 'Peak in September, easing through November.', verdict: 'best' },
      { label: 'Summer', months: [7, 8], weather: 'Hot, 35C plus inland, and Istanbul is humid.', crowds: 'The busiest and most expensive weeks of the year.', verdict: 'mixed' },
      { label: 'Winter', months: [12, 1, 2, 3], weather: 'Cold, with snow in Cappadocia which is genuinely beautiful. More balloon cancellations.', crowds: 'Cheapest and quietest.', verdict: 'mixed' },
    ],
  },
  howLong: { minimum: '6 nights.', ideal: '8 to 10 nights for Istanbul, Cappadocia and the coast.', note: 'Istanbul needs three full days minimum and rewards four. Cappadocia needs three nights because of the balloon weather. Adding Antalya or Pamukkale means another internal flight.' },
  cities: [
    { name: 'Istanbul', nights: '3 to 4', why: 'Byzantine and Ottoman capitals layered on each other, split by a strait, with the best food in the country.', dontMiss: ['Hagia Sophia and the Blue Mosque, early, and check prayer times', 'Topkapi Palace and the harem, which is a separate ticket and worth it', 'The Basilica Cistern, underground and atmospheric', 'A Bosphorus ferry to the Asian side, which costs almost nothing', 'Kadikoy on the Asian side for food, which is where Istanbul actually eats'], overrated: 'The tourist Bosphorus dinner cruises. The public ferry gives you the same water for a fraction of the price.' },
    { name: 'Cappadocia', nights: '2 to 3', why: 'Volcanic rock carved into churches, houses and entire underground cities, with balloons over it at dawn.', dontMiss: ['A sunrise balloon flight, booked for your first available morning', 'Goreme open air museum and its rock cut churches', 'Derinkuyu or Kaymakli underground city', 'Sunset at Red Valley or Love Valley', 'A cave hotel, which is the right place to stay here'] },
    { name: 'Pamukkale', nights: '1', why: 'White travertine terraces filled with warm mineral water, and a Roman city on top of them.', dontMiss: ['Walking the terraces barefoot, which is compulsory', 'Hierapolis and its theatre', 'Cleopatra pool, swimming among fallen columns'] },
    { name: 'Antalya and the coast', nights: '3', why: 'A Roman harbour town with a Mediterranean coastline either side of it.', dontMiss: ['Kaleici old town', 'Duden waterfalls, which drop straight into the sea', 'A boat day along the Lycian coast', 'Olympos and the eternal flames at Chimaera'] },
  ],
  routes: [
    { name: 'The classic', nights: 7, stops: 'Istanbul 4, Cappadocia 3', suits: 'A first trip, and the right structure.' },
    { name: 'Add the terraces', nights: 9, stops: 'Istanbul 4, Cappadocia 3, Pamukkale 2', suits: 'Three very different landscapes.' },
    { name: 'With the coast', nights: 11, stops: 'Istanbul 4, Cappadocia 3, Antalya 4', suits: 'History then a beach, in the right order.' },
  ],
  gettingThere: 'Direct from Delhi and Mumbai to Istanbul in about six to seven hours with Turkish Airlines and IndiGo. Istanbul has two airports: the new Istanbul Airport on the European side for most international flights, and Sabiha Gokcen on the Asian side for many budget and domestic routes. They are two hours apart in traffic.',
  gettingAround: [
    { label: 'Two Istanbul airports', detail: 'Check which one your domestic flight to Cappadocia leaves from. Getting between IST and SAW can take two hours in traffic and has caught out a great many itineraries.' },
    { label: 'Fly to Cappadocia', detail: 'Istanbul to Kayseri or Nevsehir is about ninety minutes and cheap. The overnight bus takes eleven hours and is a poor use of a short trip.' },
    { label: 'Get an Istanbulkart', detail: 'One card for the trams, metro, buses and the Bosphorus ferries. Buy it at any station kiosk and top it up. Istanbul is best covered by tram and ferry rather than by taxi.' },
    { label: 'Taxis and apps', detail: 'BiTaksi and Uber both hail licensed taxis in Istanbul. Insist on the meter; refusing to run it is a known problem with street pickups around Sultanahmet.' },
  ],
  connectivity: [
    { label: 'What to buy', detail: 'A tourist SIM is around 600 to 1,000 lira, roughly 1,400 to 2,300 rupees, which is expensive by regional standards. Turkcell has the best coverage.' },
    { label: 'Phone registration rule', detail: 'A foreign phone used with a Turkish SIM is blocked after roughly 120 days unless registered and taxed. Irrelevant for a holiday, important if you return often on the same handset.' },
    { label: 'eSIM is usually easier', detail: 'Often cheaper than a local tourist SIM and avoids the registration question entirely.' },
  ],
  money: [
    { label: 'The lira moves', detail: 'Turkish inflation has been high and the rate shifts noticeably. Prices quoted in lira months ahead may not hold. Agree major costs in advance or expect movement.' },
    { label: 'Change money in the city', detail: 'Exchange offices in Eminonu and the Grand Bazaar give considerably better rates than the airport or hotels. Compare two or three; the spread between them is real.' },
    { label: 'Cards widely accepted', detail: 'Restaurants, shops and hotels take cards. Markets, small cafes, ferries and taxis prefer cash.' },
    { label: 'Always pay in lira', detail: 'Card machines will offer to charge in rupees. Decline it; the terminal rate is worse than your bank rate.' },
  ],
  mistakes: ['Booking one night in Cappadocia and losing the balloon to weather.', 'Arriving at the wrong Istanbul airport for a domestic connection.', 'Taking a street taxi in Sultanahmet without the meter running.', 'Visiting mosques during Friday prayers and finding them closed to visitors.', 'Buying a carpet without understanding what was agreed or how it ships.'],
  insider: [
    'Book the balloon for your first morning in Cappadocia, not your last. If it is cancelled you still have another attempt, and operators prioritise rebooking those already grounded.',
    'The public Bosphorus ferry between Europe and Asia costs the price of a bus ticket and gives you the same skyline as a cruise that costs fifty times more.',
    'Kadikoy and Moda on the Asian side are where Istanbul residents eat and drink. Almost no first time itinerary crosses the water, and it is twenty minutes on a ferry.',
    'Mosques close to visitors during the five daily prayers and particularly around Friday midday. Check times before planning a morning around Hagia Sophia and the Blue Mosque together.',
    'The carpet shop routine usually begins with an extremely friendly stranger who practises excellent English, asks where you are from and eventually suggests tea with his cousin. The carpets are often genuine; the pressure is intense and the prices are not fixed.',
    'A Turkish bath, hamam, is best at a historic one with a fixed published price. Scrub and foam is the standard service and is considerably rougher than a spa massage.',
    'Cappadocia cave hotels vary enormously. A room genuinely carved into rock is a different experience from a modern building with stone cladding; ask before booking.',
    'Turkish breakfast, kahvalti, is an enormous spread and a meal in its own right. Book a proper one at least once rather than eating at the hotel buffet.',
  ],
  etiquette: ['Shoes off and shoulders, knees and for women hair covered in mosques; scarves are provided.', 'Do not walk in front of someone praying.', 'Bargaining is expected in bazaars and not in shops with fixed prices.', 'Tipping around ten percent is normal in restaurants.', 'Alcohol is widely available but public drunkenness is frowned upon.'],
  safety: ['Türkiye is generally safe for visitors and tourist areas are well policed.', 'The main risks are commercial: overcharging taxis, carpet pressure selling and the drink scam where a friendly local invites you to a bar and an enormous bill follows.', 'Avoid the southeastern border regions with Syria and Iraq entirely.', 'Türkiye is seismically active. Know your hotel exit.', 'Tap water is chlorinated but is not generally drunk; bottled is universal.'],
  visaNote: 'This one depends on what is already in your passport. Indian passport holders who hold a valid visa or residence permit from the Schengen area, the United States, the United Kingdom or Ireland qualify for the simple online e-visa, approved in a day or two. Everyone else needs the full sticker visa through the consulate, which takes roughly ten working days and more documentation. The fee is around 3,800 rupees including service charges and is in your package. We check which route applies to you before quoting a timeline, because the difference is a week.',
};

export const GUIDES: DestinationGuide[] = [
  thailand, vietnam, sriLanka, bali, malaysia,
  uae, maldives, nepal, mauritius,
  azerbaijan, georgia, uzbekistan, egypt, oman,
  singapore, japan, southKorea, turkey,
];

export function getGuide(slug: string): DestinationGuide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
