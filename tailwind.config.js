/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html'],
  theme: {
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
    },colors: {
      'very-dark-grayish-blue': 'hsl(217, 19%, 35%)',
      'desaturated-dark-blue': 'hsl(214, 17%, 51%)',
      'grayish-blue': 'hsl(212, 23%, 69%)',
      'light-grayish-blue': 'hsl(210, 46%, 95%)',
      'white': 'hsl(0, 0%, 100%)',
    },
    extend: {},
  },
  plugins: [],
}