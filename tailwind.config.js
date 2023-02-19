/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            primary: '#CE1212',
            secondary: '#810000',
            tertiary: '#EEEBDD',
            black: '#1B1717',
            blueish: '#00001a'
        },
    },
    screens: {
      'xs': '350px',
      ...defaultTheme.screens,
    }
  },
  plugins: [],
}
