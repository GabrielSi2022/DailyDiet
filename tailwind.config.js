/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      WHITE: "#FFFFFF",

      GREEN_LIGHT: "#E5F0DB",
      GREEN_MID: "#CBE4B4",
      GREEN_DARK: "#639339",

      RED_MID: "#F3BABD",
      RED_DARK: "#BF3B44",
      RED_LIGHT: "#F4E6E7",

      GRAY_1: "#1B1D1E",
      GRAY_2: "#333638",
      GRAY_3: "#5C6265",
      GRAY_4: "#B9BBBC",
      GRAY_5: "#DDDEDF",
      GRAY_6: "#EFF0F0",
      GRAY_7: "#FAFAFA",
    },
    extend: {
      fontFamily: {
        nunito_400: ["Nunito_400Regular"],
        nunito_700: ["Nunito_700Bold"],
      },
    },
  },
  plugins: [],
};
