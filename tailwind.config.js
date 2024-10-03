/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cinza: {
          700: 'hsl(0, 0%, 20%)',
          800: 'hsl(0, 0%, 12%)',
          900: 'hsl(0, 0%, 8%)'
        },
        verde: {
          100: 'hsl(75, 94%, 57%)'
        },
        branco: {
          100: 'hsl(0, 0%, 100%)'
        }
      }
    },
  },
  plugins: [],
}

