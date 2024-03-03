/** @type {import('tailwindcss').Config} */

const config = {
  presets: [require("./utils/design-tokens-preset.js")],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      flexBasis: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
    },
  },
  variants: {
    space: ["responsive", "direction"],
  },
  plugins: [require("tailwindcss-dir")()],
};

export default config;
