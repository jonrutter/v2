const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
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
      grey: {
        50: '#fafaff', // main bg: light
        100: '#ececf9',
        200: '#dbdbe1',
        300: '#b0b0bf', // highlight text: dark
        400: '#9a9aa7', // main body text: dark
        500: '#65647d', // main body text: light
        600: '#32314e', // highlight text: light
        700: '#232334',
        800: '#010024', // main bg: dark; heading text: dark
        900: '#01001a', // loader bg
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-family-open-sans)', ...defaultTheme.fontFamily.sans],
        serif: [
          'var(--font-family-playfair-display)',
          ...defaultTheme.fontFamily.serif,
        ],
        cursive: [
          'var(--font-family-seaweed-script)',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
