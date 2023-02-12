const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,js,jsx,svelte,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["urw-din", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
