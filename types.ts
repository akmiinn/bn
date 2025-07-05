
export interface Artist {
  id: number;
  stageName: string;
  realName: string;
  englishName?: string;
  positions: string[];
  birthday: string;
  zodiacSign: string;
  chineseZodiacSign: string;
  height: string;
  weight: string;
  bloodType: string;
  mbti: string;
  representativeAnimal: string;
  instagramUrl: string;
  facebookUrl?: string;
  about: string;
  imageUrl: string;
  releasedSongs: string[];
}

export type Page = 'Home' | 'Artists' | 'Activities' | 'Contact' | 'Careers';