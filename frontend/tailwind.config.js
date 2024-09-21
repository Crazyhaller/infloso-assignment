/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-green': '#39FF14',
        'neon-pink': '#FF6EC7',
        'neon-pink-dark': '#FF1493',
        'neon-blue': '#00FFFF',
        'neon-yellow': '#FFFF33',
        'neon-yellow-dark': '#FFD700',
        'neon-red': '#FF073A',
      },
    },
  },
  variants: {},
  plugins: [],
}
