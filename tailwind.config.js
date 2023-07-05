/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'yesteryear': ['Yesteryear', 'cursive'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}