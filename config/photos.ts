/**
 * Photographs from Wikimedia Commons. Generated, do not hand edit.
 *
 * Attribution on anything with needsCredit is a licence condition, not a
 * courtesy. The footer renders it. Do not remove it while the image is in use.
 */
export interface PhotoCredit {
  key: string;
  file: string;
  title: string;
  license: string;
  artist: string;
  page: string;
  needsCredit: boolean;
}

export const PHOTO_CREDITS: PhotoCredit[] = [
  {
    key: 'abu-dhabi',
    file: '/images/places/abu-dhabi.jpg',
    title: 'Abu Dhabi - Corniche – Skyline - الكورنيش - الأفق - panoramio.jpg',
    license: 'CC BY 3.0',
    artist: 'giggel',
    page: 'https://commons.wikimedia.org/wiki/File:Abu_Dhabi_-_Corniche_%E2%80%93_Skyline_-_%D8%A7%D9%84%D9%83%D9%88%D8%B1%D9%86%D9%8A%D8%B4_-_%D8%A7%D9%84%D8%A3%D9%81%D9%82_-_panoramio.jpg',
    needsCredit: true,
  },
  {
    key: 'bangkok',
    file: '/images/places/bangkok.jpg',
    title: 'Grand Palace Bangkok Thailand 424.jpg',
    license: 'CC0',
    artist: 'Simon Steinberger from Germany',
    page: 'https://commons.wikimedia.org/wiki/File:Grand_Palace_Bangkok_Thailand_424.jpg',
    needsCredit: false,
  },
  {
    key: 'chiang-mai',
    file: '/images/places/chiang-mai.jpg',
    title: 'Doi Suthep Temple Chiang Mai Thailand.jpg',
    license: 'CC BY 4.0',
    artist: 'Philip Nalangan',
    page: 'https://commons.wikimedia.org/wiki/File:Doi_Suthep_Temple_Chiang_Mai_Thailand.jpg',
    needsCredit: true,
  },
  {
    key: 'dubai',
    file: '/images/places/dubai.jpg',
    title: 'Dubai 2010.JPG',
    license: 'Public domain',
    artist: 'Paul Wilhelm',
    page: 'https://commons.wikimedia.org/wiki/File:Dubai_2010.JPG',
    needsCredit: false,
  },
  {
    key: 'koh-samui',
    file: '/images/places/koh-samui.jpg',
    title: 'Koh Samui\'s most famous landmark the Big Buddha - panoramio.jpg',
    license: 'CC BY 3.0',
    artist: 'yuichiro anazawa',
    page: 'https://commons.wikimedia.org/wiki/File:Koh_Samui%27s_most_famous_landmark_the_Big_Buddha_-_panoramio.jpg',
    needsCredit: true,
  },
  {
    key: 'krabi',
    file: '/images/places/krabi.jpg',
    title: 'Railay beach, Krabi province, Thailand 2018 2.jpg',
    license: 'Public domain',
    artist: 'Karelj',
    page: 'https://commons.wikimedia.org/wiki/File:Railay_beach,_Krabi_province,_Thailand_2018_2.jpg',
    needsCredit: false,
  },
  {
    key: 'pattaya',
    file: '/images/places/pattaya.jpg',
    title: 'Ile de Koh Larn (Ile de corail).jpg',
    license: 'CC BY 2.0',
    artist: 'Jérôme Bon',
    page: 'https://commons.wikimedia.org/wiki/File:Ile_de_Koh_Larn_(Ile_de_corail).jpg',
    needsCredit: true,
  },
  {
    key: 'phuket',
    file: '/images/places/phuket.jpg',
    title: 'Phuket - Kata Beach 001.jpg',
    license: 'Public domain',
    artist: 'ADwarf',
    page: 'https://commons.wikimedia.org/wiki/File:Phuket_-_Kata_Beach_001.jpg',
    needsCredit: false,
  },
];

export const CREDITED_PHOTOS = PHOTO_CREDITS.filter((p) => p.needsCredit);

/** Maps a city name from the destination config to its photograph. */
export function cityImage(city: string): string | undefined {
  const key = city.toLowerCase().replace(/\s+/g, '-');
  return PHOTO_CREDITS.find((p) => p.key === key)?.file;
}
