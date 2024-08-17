module.exports = {

  
  darkMode: 'selector',


  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayNew: {
          '100': '#F8F8F8',
          '150': '#EFEFEF',
          '200': '#E0E0E0',
          '250': '#D9D9D9',
          '300': '#C8C8C8',
          '350': '#B8B8B8',
          '375': '#989898',
          '400': '#888888',
          '500': '#707070',
          '600': '#505050',
          '700': '#383838',
          '800': '#282828',
          '900': '#101010',
        },
        slate: {
          '450': '#8695A9',
        },
      }
    },
  },
 
}