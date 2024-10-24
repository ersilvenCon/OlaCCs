/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          brown: '#6D4C4C',
          cream: '#E8D7D1',
          light: '#F5EBE6',
          dark: '#4A3333',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}