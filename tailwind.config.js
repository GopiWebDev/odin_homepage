/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    colors: {
      primaryBlue: '#0891B2',
      maroon: '#9E1C1C',
      purple: '#7C75CA',
      green: '#5E8F4D',
      pink: '#C363B4',
      orange: '#D88F39',
      blue: '#4BA2D2',
    },
    extend: {
      fontFamily: {
        Playfair: ['Playfair Display', serif],
        Roboto: ['Roboto', sans - serif],
      },
    },
  },
  plugins: [],
};
