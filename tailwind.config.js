/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        redHat: ['Red Hat Text', 'sans-serif']
      },
      colors: {
        grayishBlue: 'hsl(237, 18%, 59%)',
        softRed: 'hsl(345, 95%, 68%)',
        White: 'hsl(0, 0%, 100%)',
        darkDesaturatedBlue: 'hsl(236, 21%, 26%)',
        veryDarkBlue: 'hsl(235, 16%, 14%)',
        veryDarkBlackBlue: 'hsl(234, 17%, 12%)',
      },
      backgroundImage: {
        starsBg:'url(../images/bg-stars.svg)',
        background: 'linear-gradient(180deg, #1D1E28 0.12%, #261C2D 94.84%, #261A2D 100%)';
      }

    },
  },
  plugins: [],
}

