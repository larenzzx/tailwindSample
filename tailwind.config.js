/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        neutralGray: 'hsl(0, 0%, 41%)',
      },
    },
  },
  plugins: [],
}