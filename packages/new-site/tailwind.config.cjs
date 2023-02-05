/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,js,jsx,svelte,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
