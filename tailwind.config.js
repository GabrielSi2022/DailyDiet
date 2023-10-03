/** @type {import('tailwindcss').Config} */

import colors from "./colors";

export const content = ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  colors,
  extend: {
    fontFamily: {
      nunito_400: ["Nunito_400Regular"],
      nunito_700: ["Nunito_700Bold"],
    },
  },
};
export const plugins = [];
