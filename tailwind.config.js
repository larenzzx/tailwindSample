/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        neutralGray: 'hsl(0, 0%, 41%)',
      },
    },
    fontFamily: {
      Epi: ["Epilogue", "serif"]
    },
  },
  daisyui: {
    themes: ["light", "dark", "cupcake", "dim", "luxury"],
  },
  plugins: [
    require('daisyui'),
  ],
}
