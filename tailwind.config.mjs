/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'whiteish': '#f8f8f8',
        'blackish': '#111111',
      },
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

