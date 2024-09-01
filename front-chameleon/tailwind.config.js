/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'branco': '#FFFFFF',
        'bege': '#F0F4EF',
        'verde_c': '#B9EDB4',
        'verde_e': '#3A7D44',
        'azul_c': '#B4CDED',
        'azul_e': '#1B2733'
      }
    },
  },
  plugins: [],
}