/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    colors: {
      sienna: "#f9b49d",
      "yolk-yellow": "#ffda43",
      "dark-slate-gary": "#756382",
      "olive-yellow": "#dbb657",
      "light-slate-gray": "#9ca8b5",
      "gray-dark": "#273444",
      "tomato-red": "#e45c54",
      gray: {
        900: "#F9F9F9",
        800: "#F8F8F8",
        700: "#F7F7F7",
        600: "#F6F6F6",
        500: "#F5F5F5",
        400: "#F4F4F4",
        300: "#F3F3F3",
        200: "#F2F2F2",
        100: "#F1F1F1",
      },
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    },
    dropShadow: {
      sm: "0 2px 6px -1px rgba(0,0,0,.1),0 2px 2px -1px rgba(0,0,0,.06)",
      md: "0 6px 10px -4px rgb(0 0 0 / 15%)",
      lg: "0 4px 20px 0 rgba(0,0,0,.14),0 7px 10px -5px rgba(76,175,80,.4)",
      "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
      "4xl": [
        "0 35px 35px rgba(0, 0, 0, 0.25)",
        "0 45px 65px rgba(0, 0, 0, 0.15)",
      ],
    },
  },
  plugins: [require("flowbite/plugin")],
};
