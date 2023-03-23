/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
     white: '#ffffff',
     grey: {
      100: '#CCCCCC',
      200: '#A0A09F',
      300: '#605E5E',
      400: '#D6D6D6',
      500: '#AEAEAE',
      600: '#858585',
      700: '#595959',
    },
     black: {
      100: '#2F2E2E',
      200: '#2C2C2C',
    },
    blue:
    {
      100: '#BDC6D4',
      200: '#8E98A9',
      300: '#55657E',
      400: '#394354',
      500: '#1C222A',
    },
    purple:
    {
      100: '#C4C7F6',
      200: '#A4A9EC',
      300: '#5962E3',
      400: '#3B4197',
      500: '#1E214C',
      600: '#BCA3F5',
      700: '#9875EA',
      800: '#4300E0',
      900: '#2D0095',
      1000: '#16004B',

    },

    },
    extend: {},
  },
  plugins: [],
}