/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#071f33',
          900: '#0b2a42',
          800: '#123c58',
          700: '#28536d',
          600: '#527286',
          500: '#7790a0',
          400: '#9bb0bd',
          300: '#c3d1d9',
          200: '#dce6eb',
          100: '#edf3f6',
        },
        fence: {
          50: '#f3fbff',
          100: '#dff4ff',
          200: '#b9e8ff',
          300: '#82d7ff',
          400: '#46c0f4',
          500: '#16a5e1',
          600: '#0785be',
          700: '#086a99',
          800: '#0c597e',
          900: '#0e4a69',
        },
      },
      fontFamily: {
        display: ['Arial', 'Helvetica', 'sans-serif'],
        body: ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
