/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.tsx'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        galaxy: "url('/background_galaxy.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 27.08%, #43E7AD 33.94%, #E1D55D 40.57%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
        'slider-gradient-right': 'linear-gradient(90deg, rgba(2,0,36,0) 0%, rgba(0,0,0,0.7189250700280112) 35%, rgba(0,0,0,1) 100%)',
        'slider-gradient-left': 'linear-gradient(270deg, rgba(2,0,36,0) 0%, rgba(0,0,0,0.7189250700280112) 35%, rgba(0,0,0,1) 100%)',
      }
    },
  },
  plugins: [],
}
