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
        monste: ['Montserrat','sans-serif']
      }
    },
  },
  plugins: [],
}

