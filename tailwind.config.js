/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      gradient: {
        bluegreen: 'linear-gradient(to right, #54BD95, #1AA6B7)',
      },
    },
  },
  plugins: [],
}
