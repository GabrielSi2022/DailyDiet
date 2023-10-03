/** @type {import('tailwindcss').Config} */
const colors = require('./colors')
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors,
    extend: {
      fontFamily: {
        nunito_400: ["Nunito_400Regular"],
        nunito_700: ["Nunito_700Bold"],
      },
    },
  },
  plugins: [],
};
