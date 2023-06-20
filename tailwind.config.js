/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      'sm': '425px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1440px',
    },
    extend: {},
  },
  plugins: [],
}

