/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#7fd8e0",
        "secondary": "#e04d2b",
        "secondary-light": "#fa923d",
      },
      backgroundImage: (theme) => ({
        "boat": "url('/src/assets/images/boat.svg')",
      }),
      backgroundSize: {
        "50": "50%",
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("prettier-plugin-tailwindcss")
  ],
};
