/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mission-color': '#E43434',   // Custom color for 'our mission'
        'vision-color': '#01AFD2',    // Custom color for 'our vision'
        'goal-color': '#1D374E',      // Custom color for 'goals'
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
      },
      
    },
  },
  plugins: [],
}

