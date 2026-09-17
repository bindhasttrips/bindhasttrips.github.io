/**
 * General travel information, shown as a swipeable deck. Keep each one to a
 * sentence or two: this is a card people flick past, not an article.
 */
export interface Tip {
  title: string;
  body: string;
}

export const TRAVEL_TIPS: Tip[] = [
  {
    title: 'Six months on your passport',
    body: 'Most countries refuse entry inside that window, and airlines stop you at check-in rather than immigration.',
  },
  {
    title: 'Visa first, flights second',
    body: 'Where a visa is needed it sets the timeline. UAE takes three to five working days. Thailand needs none right now.',
  },
  {
    title: 'Flexible dates save the most',
    body: 'Mid week departures are routinely cheaper than weekends. Moving by two days is usually the single biggest saving available.',
  },
  {
    title: 'Carry two cards',
    body: 'Indian cards get blocked abroad more often than people expect. Switch on international use before you fly and bring a backup.',
  },
  {
    title: 'eSIM beats roaming',
    body: 'A local data plan costs a fraction of Indian roaming and works the moment you land.',
  },
  {
    title: 'Insurance is not optional',
    body: 'Some visas require it, and one hospital visit abroad can cost more than the trip.',
  },
  {
    title: 'Check baggage before you pack',
    body: 'Budget carriers to both destinations often sell cabin-only fares. Checked bags bought at the airport cost several times more.',
  },
  {
    title: 'Book activities before you go',
    body: 'The popular ones sell out. Burj Khalifa at sunset and Maya Bay both go weeks ahead in season.',
  },
];
