/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '380px',
      ...defaultTheme.screens,
      'max-xs': {'max': '380px'},
      'max-sm': {'max': '640px'},
      'max-md': {'max': '768px'},
      'max-lg': {'max': '1024px'},
      'max-xl': {'max': '1280px'},
      'max-2xl': {'max': '1536px'},
      'max-3xl': {'max': '1760px'},
      'max-4xl': {'max': '1920px'},
      'max-5xl': {'max': '2100px'},
    },
    extend: {
      transitionProperty: {
        'height': 'height',
      },
      screens: {
        '3xl': '1760px',
        '4xl': '1920px',
        '5xl': '2100px',
      },
      colors: {
        primary: {
          light: '#ffffff',
          DEFAULT: '#fafafa',
          dark: '#c7c7c7'
        },
        primaryDark: {
          light: '#484848',
          DEFAULT: '#181818',
          dark: '#111111'
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
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}
