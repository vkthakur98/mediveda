/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "verdana":"verdana",
        "cursive":"cursive"
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

