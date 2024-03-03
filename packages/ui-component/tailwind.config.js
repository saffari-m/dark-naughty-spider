/** @type {import('tailwindcss').Config} */

const config = {
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "iran-dotted": "url('/assets/images/iran-dotted.png')",
        "blue-wave": "url('/assets/images/header-curve.png')",
        "gray-wave": "url('/assets/images/card-curve.png')",
      },
      colors: {
        primary: "rgba(0, 0, 0)", //#000000
        secondary: "rgba(27,28,29)", // #1B1C1D
        tertiary: "rgba(45,46,47)", //#2D2E2F
        inverted: "rgba(255, 255, 255)", // #ffffff
        surface: {
          primary: {
            low: "rgba(171, 172, 174)",
            medium: "rgba(195, 196, 197)",
            high: "rgba(220, 220, 221)",
            extra: "rgba(245, 245, 244)",
            ultra: "rgba(255, 255, 255)",
          },
          secondary: {
            low: "rgba(255, 255, 255, 6)",
            medium: "rgba(255, 255, 255, 10)",
            high: "rgba(255, 255, 255, 18)",
            extra: "rgba(255, 255, 255, 28)",
            ultra: "rgba(255, 255, 255, 42)",
          },
          accent: {
            low: "",
            medium: "",
            high: "",
            extra: "",
            ultra: "",
          },
          success: {
            low: "",
            medium: "",
            high: "",
            extra: "",
            ultra: "",
          },
          info: {
            low: "",
            medium: "",
            high: "",
            extra: "",
            ultra: "",
          },
          dim: {
            low: "",
            medium: "",
            high: "",
            extra: "",
            ultra: "",
          },
        },
      },
      fontSize: {
        caption: "10px",
      },
      flexBasis: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
      boxShadow: {},
      borderRadius: {
        none: "0",
        "3xs": "0.25rem",
        "2xs": "0.5rem",
        xs: "0.75rem",
        DEFAULT: "1rem",
        md: "1.25rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "2.5rem",
        "3xl": "4rem",
        full: "9999px",
      },
    },
  },
  variants: {
    space: ["responsive", "direction"],
  },
  plugins: [require("tailwindcss-dir")()],
};

export default config;
