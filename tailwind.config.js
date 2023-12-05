/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#06b6d4', // teal-500
        secondary: '#64748b', //slate-500
        dark: '#0f172a', // slate-900
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

