/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Montserrat': ["Montserrat", 'sans-serif' ],
      'Roboto': ["Roboto",  'sans-serif' ],
      'Merienda': ["Merienda",  'cursive' ],
      'Poppins': ["Poppins",  'sans-serif' ],
    },
    
    colors:{
        'primary': "#ffbf00",
        transparent: 'transparent',
        white: '#ffffff',
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121'
        },
        brand:{
          100: '#faf4e6'
        }
    },
    extend: {},
  },
  plugins: [],
}
