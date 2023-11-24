/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'clothing-dashboard': "url('public/icons/clothing.png')",
      }
    },
  },
  plugins: [],
}

