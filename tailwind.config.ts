/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayNew: {
          '100': '#F8F8F8',
          '150': '#EFEFEF',
          '200': '#E0E0E0',
          '250': '#D9D9D9',
          '275': '#cccccc',
          '300': '#C8C8C8',
          '325': '#BBBBBB',
          '350': '#B8B8B8',
          '375': '#989898',
          '400': '#888888',
          '500': '#707070',
          '550': '#606060',
          '600': '#505050',
          '650': '#404040',
          '700': '#383838',
          '800': '#282828',
          '825': '#222222',
          '850': '#1c1c1c',
          '875': '#181818',
          '900': '#101010',
          '950': '#090909',
        },
        slateNew: {
          '300': '#C8C8E3',
          '400': '#9898c3',
          '500': '#555566',
          '700': '#38383F',
          '800': '#28282F',
          '950': '#09090C',
        },

        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "1dark-grey": "#000000,"
      
    },},},
    
  plugins: [],
  darkMode: 'selector',
  

}