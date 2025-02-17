/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoCondensed: ["Roboto Condensed", "serif"],
        sora: ["Sora", "sans-serif"],
      },
      keyframes: {
        slideBg: {
          "0%": { backgroundPosition: "150% center" },
          "50%": { backgroundPosition: "50% center" },
          "100%": { backgroundPosition: "-50% center" },
        },
      },
      animation: {
        slideBg: "slideBg 25000ms ease-in-out infinite ",
      },
    },
  },
  plugins: [],
};
