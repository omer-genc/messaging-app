module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      'primary': '#F3F3F3',
      'secondary': '#68B7FF',
      'danger': '#e3342f',
      'white' : '#FFFFFF',
      'gray' : '#C4C4C4'
     })
  },


  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },


  plugins: [],
}
