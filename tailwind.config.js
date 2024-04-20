/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  darkMode: 'class',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dev: {
          '100': '#FFD990',
          '300': '#FFBF43',
          '500': '#FFA800',
        }
      }
    },
    screens: {
      o: "1px",
       xs: "614px",
       s: "769px",
       sm: "1002px",
       md: "1022px",
       lg: "1092px",
       xl: "1280px"
    }
  },
  plugins: [require('@tailwindcss/forms')],
}

