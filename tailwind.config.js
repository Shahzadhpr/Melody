/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  darkMode:"selector",
  theme: {
    extend: {
      fontFamily: {
        vazirmatn: ["Vazirmatn", "serif"],
      },
    },
    container: {
      center: true,
      padding: "1rem",
    }
  },
  plugins: [],
}

