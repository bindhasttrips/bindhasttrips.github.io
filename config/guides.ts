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

export const GUIDES: DestinationGuide[] = [thailand];

export function getGuide(slug: string): DestinationGuide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
