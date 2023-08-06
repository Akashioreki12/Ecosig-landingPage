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
        bluegreen: 'linear-gradient(to right, #68d391, #4fd1c5)',
      },
    },
  },
  plugins: [],
}
