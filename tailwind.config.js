/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}', // Include if using App Router
    ],
    theme: {
      extend: {
        fontFamily: {
          montserrat: ['Montserrat', 'sans-serif'], // Add Montserrat here
        },
      },
    },
    plugins: [],
  };