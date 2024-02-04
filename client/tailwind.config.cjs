/* eslint-disable quote-props */
/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */

const { matrixPallet } = require('./src/styles');

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: matrixPallet.black,
        secondary: '#aaa6c3',
        tertiary: '#151030',
        white: '#eeeeee',
        'black-100': '#100d25',
        'black-200': '#090325',
        'green-100': '##295f48',
        'green-200': '#204c39',
        'green-300': '#18392b',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '430px',
      },
      backgroundImage: {
        'hero-pattern': 'url(\'/src/assets/layered-waves-haikei.png\')',
        'after-hero': 'url(\'/src/assets/wave-haikei.png\')',
      },
      transitionProperty: {
        'opacity': 'opacity',
      },
    },
  },
  plugins: [],
};