/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily:{
        sans: ["Roboto"]
      },
      colors: {
        'red-main': '#EF2A82',
        'dark-blue': '#172755',
        'semidark-blue': '#8794BA',
        'light-blue': '#0088F0',
        'white-main': '#EEEEF7',
        'dark': '#172755',
      }
    },
  },
  plugins: [],
}

