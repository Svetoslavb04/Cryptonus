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
        primary: '#FFD369',
        seconday: '#EEEEEE',
        background: '#040303',
        surface: '#191919',
        onsurface: colors.white
      }
    },
  },
  plugins: [],
}
