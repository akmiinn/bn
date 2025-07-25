import { Artist, Page } from './types';

export const ARTISTS: Artist[] = [
  {
    id: 1,
    stageName: 'Boni',
    realName: 'Bo Hein Khant',
    englishName: 'Boni',
    positions: ['CEO of B.N', 'Main Dancer', 'Sub Vocalist', 'Sub Rapper'],
    birthday: 'July 24, 2005',
    zodiacSign: 'Leo',
    chineseZodiacSign: 'Rooster',
    height: "170 cm (5'7\")",
    weight: '65 kg (143 lbs)',
    bloodType: 'B',
    mbti: 'INFP',
    representativeAnimal: 'Capybara 🦦',
    instagramUrl: 'https://www.instagram.com/hsu_know?igsh=MWcyb2d3ZTZsdnh6eg==',
    facebookUrl: 'https://www.facebook.com/share/1FsD2HZ21d/?mibextid=wwXIfr',
    about: 'As the CEO of B.N Entertainment and a former member of PARADISE, Boni leads with both vision and artistry. He is not only a sharp entrepreneur but also the group\'s main dancer, known for his fluid, powerful movements and captivating stage presence.',
    imageUrl: 'boni.jpg',
    releasedSongs: ["Kill This Love", "armageddon"]
  },
  {
    id: 2,
    stageName: 'Hus Pyae',
    realName: 'Hsu Pyae Mar Lar',
    englishName: 'Hsu Pyae',
    positions: ['Main Vocalist', 'Lead Rapper'],
    birthday: 'November 23, 2004',
    zodiacSign: 'Sagittarius',
    chineseZodiacSign: 'Monkey',
    height: "173 cm (5'8\")",
    weight: '48 kg (105 lbs)',
    bloodType: 'O',
    mbti: 'INFP',
    representativeAnimal: 'Lion 🦁',
    instagramUrl: 'https://www.instagram.com/hsu_know?igsh=MWcyb2d3ZTZsdnh6eg==',
    facebookUrl: 'https://www.facebook.com/share/16Wa4365Ep/?mibextid=wwXIfr',
    about: 'Formerly of the group PARADISE, Hsu Pyae is the soul of her new group as Main Vocalist. Her powerful and emotive voice carries every performance, complemented by her sharp rapping skills that bring a unique edge to their tracks.',
    imageUrl: 'hp.jpg',
    releasedSongs: ["The Boys", "Wolf", "Genie", "မပိုင်ဆိုင်ရမှန်း", "အသဲခွဲဘုရင်မ", "Gee"]
  },
  {
    id: 3,
    stageName: 'NayChi',
    realName: 'Nay Chi Lei Zaw',
    englishName: 'Yuan',
    positions: ['Lead Vocalist', 'Main Rapper'],
    birthday: 'August 6, 2005',
    zodiacSign: 'Leo',
    chineseZodiacSign: 'Rooster',
    height: "168 cm (5'6\")",
    weight: '50 kg (110 lbs)',
    bloodType: 'B',
    mbti: 'ISFP',
    representativeAnimal: 'Rabbit 🐰',
    instagramUrl: 'https://www.instagram.com/yuan_deep?igsh=dWN6ZGx1NmRpcHdw',
    facebookUrl: 'https://www.facebook.com/share/1YjAa5oPV8/?mibextid=wwXIfr',
    about: 'Yuan, a former member of PARADISE, shines as the Lead Vocalist and Main Rapper. Her clear, stable vocals provide the melodic backbone, while her confident rap verses add a powerful dynamic to the group\'s sound.',
    imageUrl: 'naychi.jpg',
    releasedSongs: ["နင်လေငါ့ကိုမချစ်ခဲ့ဘူးလား", "Beautiful", "RESONANCE", "numb"]
  },
  {
    id: 4,
    stageName: 'Syian',
    realName: 'Aung Kyaw Min',
    englishName: 'Min',
    positions: ['Lead Dancer', 'Sub Rapper', 'Producer'],
    birthday: 'July 13, 2005',
    zodiacSign: 'Cancer',
    chineseZodiacSign: 'Rooster',
    height: "183 cm (6'0\")",
    weight: '62 kg (136 lbs)',
    bloodType: 'O',
    mbti: 'INFJ',
    representativeAnimal: 'Cat 🐱',
    instagramUrl: 'https://www.instagram.com/akmiinn?igsh=MXVmaXE0Z2IwNTJraw%3D%3D&utm_source=qr',
    facebookUrl: 'https://www.facebook.com/share/1aPScxUwW2/?mibextid=wwXIfr',
    about: 'Formerly of PARADISE, Min is the group\'s thoughtful lead dancer and producer. With his INFJ personality, he crafts deep, meaningful lyrics and brings a unique, introspective flow to their music, connecting with listeners on a profound level through both his dance and rap.',
    imageUrl: 'syian.jpg',
    releasedSongs: ["What is Love?", "Talk That Talk", "As if it is your last"]
  }
];

export const NAV_ITEMS: {name: Page, id: string}[] = [
    { name: 'Home', id: 'home' },
    { name: 'Artists', id: 'artists' },
    { name: 'Activities', id: 'activities' },
    { name: 'Careers', id: 'careers' },
    { name: 'Contact', id: 'contact' },
];
