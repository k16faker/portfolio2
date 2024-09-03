/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-purple': '#250821',
      },
    },
    fontFamily: {
      fjalla: ['Fjalla One', 'sans-serif'],
    }
  },
  plugins: [],
}

