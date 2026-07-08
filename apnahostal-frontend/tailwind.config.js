/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pine: '#0F5257',      // primary - deep pine teal
        amber: '#F5A623',     // accent - warm amber
        coral: '#E85C4A',     // alert/overdue
      },
    },
  },
  plugins: [],
}

