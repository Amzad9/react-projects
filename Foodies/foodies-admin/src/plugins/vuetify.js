// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";
// const myCustomLightTheme = {
//   dark: false,
//   colors: {
//     background: "#FFFFFF",
//     surface: "#FFFFFF",
//     primary: "#6200EE",
//     "primary-darken-1": "#3700B3",
//     secondary: "#03DAC6",
//     "secondary-darken-1": "#018786",
//     error: "#B00020",
//     info: "#2196F3",
//     success: "#4CAF50",
//     warning: "#FB8C00",
//   },
// };
import colors from "vuetify/lib/util/colors";
export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#F9B13E", // #3eb650
          secondary: "#5C6E58", // #FFCDD
          light: "#ffffff",
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: "#F2D349", // #3eb650
          secondary: "#5C6E58", // #FFCDD
          light: "#4a4a4a",
        },
      },
    },
  },
  icons: {
    defaultSet: "mdi",
  },
});
