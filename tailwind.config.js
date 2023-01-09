/** @type {import('tailwindcss').Config} */
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
            white: '#EEEBDD',
            black: '#1B1717'
        },
    },
  },
  important: true,
  plugins: [],
}
