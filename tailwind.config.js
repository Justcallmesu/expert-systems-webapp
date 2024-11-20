/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        exo2: ['"Exo 2"', "sans-serif"]
      },
      backgroundImage: {
        "hero-image": "url('./hero.jpg')"
      },
      colors: {
        "text": '#3C3D37',
        primary: "#228BE6",
        secondary: "#FF9D3D"

      }
    },
  },
  plugins: [],
}

