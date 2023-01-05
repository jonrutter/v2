const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/scenes/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      pink: {
        50: '#FFEBF5',
        100: '#FEC8E4',
        200: '#FD8BC6',
        300: '#E963A8',
        400: '#DB4391',
        500: '#D62982',
        600: '#BC2473',
        700: '#A51861',
        800: '#8E1051',
        900: '#760F44',
      },
      neon: {
        50: '#FAFEFF',
        100: '#C8F1FE',
        200: '#8BE3FD',
        300: '#4FD4FC',
        400: '#19C6FA',
        500: '#0ABEF5',
        600: '#06A9DB',
        700: '#098CB3',
        800: '#0D7291',
        900: '#0F5E76',
      },
      indigo: {
        50: '#FAFAFF',
        100: '#CFCDFE',
        200: '#BCBAF7',
        300: '#9794F0',
        400: '#5E59E8',
        500: '#322EB8',
        600: '#2C297A',
        700: '#1E1C54',
        800: '#0F0D3F',
        900: '#010024',
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
        serif: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
        cursive: ['"Seaweed Script"'],
      },
    },
  },
  plugins: [],
};
