/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          200: "#1d1d1d",
          500: "#121212",
        },
        gray: {
          100: "#e6e6e6",
          200: "#7a7a7a",
        },
        purple: {
          100: "#bb86fc",
        },
      },
    },
  },
  plugins: [],
};
