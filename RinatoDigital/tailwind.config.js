/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Fjalla One', 'ui-sans-serif', 'system-ui'],
        // Agrega aquí tus otras fuentes o sobreescribe según lo necesites
      },
      colors: {
        'custom-black': '#484848',
        'custom-salmon': '#FF5A5F',

      },
      fontSize: {
        '10xl': '3rem',
      },
      margin: {
        '0': '0',
      },
      padding: {
        '0': '0',
      },
      height: {
        '120': '25rem',
      },
    },
  },
  plugins: [],
}

