/**
 * General travel information for the landing page. Nothing here is specific
 * to one destination, and none of it tries to sell anything. It is here
 * because it is the sort of thing people ask before they are ready to book.
 */
export interface Tip {
  title: string;
  body: string;
}

export const TRAVEL_TIPS: Tip[] = [
  {
    title: 'Six months of passport validity',
    body: 'Most countries refuse entry if your passport expires within six months of your travel date, and airlines will stop you at check-in rather than at immigration. Renew before you book anything if you are close to that line.',
  },
  {
    title: 'Book the visa before the flight, not after',
    body: 'Where a visa is required, it drives the timeline. A UAE e-Visa takes three to five working days once the paperwork is right. Thailand currently needs no visa at all for an Indian passport, which is why it is often the faster trip to arrange.',
  },
  {
    title: 'Moving by two or three days changes the price',
    body: 'Airfare is the most volatile part of any trip, and mid week departures are routinely cheaper than weekend ones. If your dates are flexible at all, say so, because it is usually the single biggest saving available.',
  },
  {
    title: 'Carry two cards and some cash',
    body: 'Indian debit cards are blocked abroad more often than people expect, usually because international use was never switched on. Enable it before you fly, carry a second card from a different bank, and keep a small amount of local currency for the first day.',
  },
  {
    title: 'An eSIM is cheaper than roaming',
    body: 'International roaming from an Indian network costs several times what a local data plan does. An eSIM bought before departure works the moment you land, which matters when you need to reach your driver at two in the morning.',
  },
  {
    title: 'Insurance is not optional in practice',
    body: 'Some visas require it, and a single hospital visit abroad can cost more than the trip. It is inexpensive when bought with the booking rather than separately, and it covers cancellation as well as medical treatment.',
  },
];
