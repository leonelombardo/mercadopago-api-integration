/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["Inter Tight", "Inter", "sans-serif", "system-ui"]
      },
      colors: {
        primary: {
          500: "#1a1a1a",
          400: "#3f3f3f",
          300: "#4a4a4a",
          100: "#6a6a6a"
        },
        secondary: {
          500: "#fff",
          400: "#f9f9f9",
          300: "#ededed",
          100: "cfcfcf"
        },
        success:{
          500: "#39b85b"
        },
        error:{
          500: "#d92e2e"
        },
        lightblue: {
          500: "#009ee3"
        },
        transparent: {
          500: "#ffffff00"
        }
      },
      boxShadow: {
        custom: "10px 10px 20px 0px #efefef"
      },
      gridTemplateColumns: {
        autofill: "repeat(auto-fill, minmax(250px, 1fr))"
      }
    },
  },
  plugins: [],
}