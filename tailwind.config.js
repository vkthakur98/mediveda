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
      },
      transitionDuration: {
        'custom': '1s', // You can set this to any duration you need
      },    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwind-clip-path'),
  ],
}

