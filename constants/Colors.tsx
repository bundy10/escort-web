const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

interface ColorsType {
  primary: string;
  primaryDark: string;
  primaryLite: string;
  black: string;
  white: string;
  accent: string;
  green: string;
  green2: string;
  gray: string;
  red: string;
  lightRed: string;
  darkRed: string;
  purple: string;
  skyBlue: string;
  yellow: string;
  pink: string;
  gold: string;
  line: string;
  darkHeaderColor: string;
  powderBlue: string;
  steelBlue: string;
  lightGreen: string;
  orange: string;
  blue: string;
  darkGray: string;
  darkGray2: string;
  darkOverlayColor: string;
  darkOverlayColor2: string;
  lightOverlayColor: string;
  primaryAlpha: string;
  redAlpha: string;
  greenAlpha: string;
  purpleAlpha: string;
  bag1Bg: string;
  bag2Bg: string;
  bag3Bg: string;
  bag4Bg: string;
  bag5Bg: string;
  bag6Bg: string;
  bag7Bg: string;
  bag8Bg: string;
  bag9Bg: string;
  bag10Bg: string;
  bag11Bg: string;
  light: {
    text: string;
    background: string;
    tint: string;
    icon: string;
    tabIconDefault: string;
    tabIconSelected: string;
  };
  dark: {
    text: string;
    background: string;
    tint: string;
    icon: string;
    tabIconDefault: string;
    tabIconSelected: string;
  };
}

export const Colors: ColorsType = {
  primary: '#637aff',
  primaryDark: '#2759ff',
  primaryLite: '#637aff99',
  black: '#000',
  white: 'white',
  accent: '#112233',
  green: '#60c5a8',
  green2: '#039a83',
  gray: '#CCCCCC',
  red: '#ff2f68',
  lightRed: '#ff4f7e',
  darkRed: '#d9365e',
  purple: '#8f06e4',
  skyBlue: 'skyblue',
  yellow: '#f8c907',
  pink: '#ff4c98',
  gold: 'gold',
  line: '#282C35',
  darkHeaderColor: '#0e1616',
  powderBlue: 'powderblue',
  steelBlue: 'steelblue',
  lightGreen: '#aaffaa',
  orange: '#FF886B',
  blue: '#0984FF',
  darkGray: '#22313a',
  darkGray2: '#718096',
  darkOverlayColor: 'rgba(0, 0, 0, 0.4)',
  darkOverlayColor2: 'rgba(0, 0, 0, 0.8)',
  lightOverlayColor: 'rgba(255, 255, 255, 0.6)',
  primaryAlpha: 'rgba(99, 122, 255, 0.15)',
  redAlpha: 'rgba(255, 84, 84, 0.15)',
  greenAlpha: 'rgba(96, 197, 168, 0.15)',
  purpleAlpha: 'rgba(146, 6, 228, 0.15)',
  bag1Bg: '#ea7a72',
  bag2Bg: '#c2c5d1',
  bag3Bg: '#82a7c9',
  bag4Bg: '#d49d8f',
  bag5Bg: '#ccd9c6',
  bag6Bg: '#767676',
  bag7Bg: '#d1c8c3',
  bag8Bg: '#dca47f',
  bag9Bg: '#eb849c',
  bag10Bg: '#979dc1',
  bag11Bg: '#c7d3c0',
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};