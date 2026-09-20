/**
 * The destination guide. One object per destination.
 *
 * Written to be genuinely useful to someone who has not booked yet, because
 * that is what earns the enquiry. Two rules:
 *
 *  1. No visa how-to. Timelines, cost and what we need from you, nothing
 *     more. Publishing a step by step guide to the thing we charge for is
 *     paying to lose the customer.
 *  2. Nothing vague. "Go in winter" is worthless. "The Andaman and the Gulf
 *     coasts have opposite monsoons" is why someone trusts us with money.
 */

export interface SeasonBand {
  label: string;
  /** 1 = January through 12 = December. */
  months: number[];
  weather: string;
  crowds: string;
  verdict: 'best' | 'good' | 'mixed' | 'avoid';
}

export interface GuideCity {
  name: string;
  nights: string;
  why: string;
  /** The things that justify the stop. */
  dontMiss: string[];
  /** Said plainly, because everyone else is too polite to. */
  overrated?: string;
}

export interface GuideRoute {
  name: string;
  nights: number;
  stops: string;
  suits: string;
}

export interface LabelledNote {
  label: string;
  detail: string;
}

export interface DestinationGuide {
  slug: string;
  /** Two or three sentences. What this place actually is. */
  intro: string;

  whenToGo: {
    summary: string;
    bands: SeasonBand[];
    /** The single most useful timing fact, which most guides bury. */
    keyInsight?: string;
  };

  howLong: {
    minimum: string;
    ideal: string;
    note: string;
  };

  cities: GuideCity[];
  routes: GuideRoute[];

  gettingThere: string;
  gettingAround: LabelledNote[];
  connectivity: LabelledNote[];
  money: LabelledNote[];

  /** Things people get wrong, stated as the mistake. */
  mistakes: string[];
  /** Things that are not obvious and are not in most guides. */
  insider: string[];
  etiquette: string[];
  safety: string[];

  /** Timeline and cost only. Never a how-to. */
  visaNote: string;
}
