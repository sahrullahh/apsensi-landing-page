/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "plus-jakarta-sans": "'Plus Jakarta Sans', sans-serif",
        quicksand: "'Quicksand', sans-serif",
      },
      colors: {
        "primary-text": "#2A3547",
      },
    },
  },
  plugins: [],
};
