
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        '0%' : {transform: 'translateY(20px)', opacity: '0'},
        '100%' : {transform: 'translateY(0)', opacity: '1'},
      },
      animation: {
        'slide-in-up': 'slideInUp 0.5s ease-out forwards'
      }
    },
  },
  plugins: [],
}