/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        Cuscyan: '#1AA6B7',
        white: "#fff",
        gray: {
          "100": "rgba(0, 0, 0, 0.72)",
          "200": "rgba(0, 0, 0, 0.8)",
        },
        gold: "rgba(236, 212, 68, 0.49)",
        pink: "#ffcbcb",
        cadetblue: "rgba(26, 166, 183, 0.36)",
        mediumaquamarine: "rgba(84, 189, 149, 0.68)",
        black: "#000",
        
      },

    }
    
  },
  plugins: [],
}

