/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        almostWhite: '#fafafa',
        mediumGray: '#696969',
        almostBlack: '#141414'
      },
      fontFamily: {
        'sans': ['Epilogue', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
