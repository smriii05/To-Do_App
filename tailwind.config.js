/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "#1a202c", // Custom dark background color
        primaryText: "#ffffff", // Custom white text color
        completedText: "#718096", // Gray for completed tasks
        danger: "#e53e3e", // Red for delete button
        lightBlue: "#78dcdd",
      },
      fontFamily: {
        helvetica: ['Helvetica', 'Arial', 'sans-serif'], // Add Helvetica with fallbacks
      },
    },
  },
  plugins: [],
};
