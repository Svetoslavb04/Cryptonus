/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ffffff',
          DEFAULT: '#fafafa',
          dark: '#c7c7c7'
        },
        primaryDark: {
          light: '#484848',
          DEFAULT: '#181818',
          dark: '#000000'
        },
        secondary: {
          light: '#82f7ff',
          DEFAULT: '#40c4ff',
          dark: '#0094cc'
        },
        onPrimary: '#000000',
        onSecondary: '#000000',
        onPrimaryDark: '#ffffff',
        onSecondaryDark: '#000000',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}
