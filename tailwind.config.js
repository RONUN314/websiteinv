/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
      primary: {
        100: '#06C2AE',
        200: '#02889B'
      },
      secondary: '#FF693A'
    }},
  },
  plugins: [],
}
