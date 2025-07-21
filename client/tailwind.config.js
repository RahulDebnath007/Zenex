/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F84565",
        "primary-dull": "#D63854",
      },
    },
  },
  plugins: [],
}
