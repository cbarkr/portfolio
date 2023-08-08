/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    }, 
    screens: {
      'xs': '30em',
      'sm': '48em',
      'md': '64em',
      'lg': '85.375em',
      'xl': '120em',
      '2xl': '160em',
    },
  },
  plugins: [],
}

