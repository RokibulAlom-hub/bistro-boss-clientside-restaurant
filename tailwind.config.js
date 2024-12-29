/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gold-600": "#b78a28", // Gold color for price
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

