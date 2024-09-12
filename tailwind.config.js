/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))',
      },
      boxShadow: {
        custom: '0px 0px 15px 0px rgba(0, 0, 0, 0.75)',
      },
      fontFamily: {
        Bebas: ['Bebas', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
