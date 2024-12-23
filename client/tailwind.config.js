/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins','sans-serif'],
        historical: ['historical','sans-serif'],
        sabon: ['sabon','sans-serif'],
        neue: ['neue','snas-serif'],
        monste: ['Montserrat','sans-serif'],
        roboto: ['Roboto','sans-serif'],
        inter: ['Inter','sans-serif'],
        raleway: ['Raleway','sans-serif'],
        outfit: ['Outfit','sans-serif'],
        host:['Host Grotesk','sans-serif'],
      },
      screens:{
        '375':'375px',
        '360':'360px',
        '695':'695px',
        '360':'360px'
      },
      colors: {
        'filter': 'hsla(0, 100%, 0%,0.5)'
      },
      
    },
  },
  plugins: [],
}

