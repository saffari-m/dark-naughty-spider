// Telewebion Web Tv Design Tokens
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "rgba(0, 0, 0)", //#000000
        secondary: "rgba(27,28,29)", //#1B1C1D
        tertiary: "rgba(45,46,47)", //#2D2E2F
        inverted: "rgba(255, 255, 255)", //#ffffff
        surface: {
          primary: {
            low: "rgba(171, 172, 174)", //#ABACAE
            medium: "rgba(195, 196, 197)", //#C3C4C5
            high: "rgba(220, 220, 221)", //#DCDCDD
            extra: "rgba(245, 245, 244)", //#F5F5F4
            ultra: "rgba(255, 255, 255)", //#FFFFFF
          },
          secondary: {
            low: "rgba(255 255 255 / 0.6)", //#FFFFFF0F
            medium: "rgba(255, 255, 255, 0.1)", //#FFFFFF1A
            high: "rgba(255, 255, 255, 0.18)", //#FFFFFF2E
            extra: "rgba(255, 255, 255, 0.28)", //#FFFFFF47
            ultra: "rgba(255, 255, 255, 0.42)", //#FFFFFF6B
          },
          accent: {
            low: "rgba(252, 171, 170)", //#FCABAA
            medium: "rgba(204, 1, 36)", //#CC0124
            high: "rgba(162, 0, 26)", //#A2001A
            extra: "rgba(126, 1, 18)", //#7E0112
            ultra: "rgba(92, 0, 10)", //#5C000A
          },
          success: {
            low: "rgba(133, 251, 146)", //#85FB92
            medium: "rgba(1, 127, 39)", //#017F27
            high: "rgba(0, 104, 30)", //#00681E
            extra: "rgba(2, 80, 22)", //#025016
            ultra: "rgba(0, 57, 13)", //#00390D
          },
          info: {
            low: "rgba(206, 221, 250)", //#CEDDFA
            medium: "rgba(17, 76, 255)", //#114CFF
            high: "rgba(0, 41, 235)", //#0029EB
            extra: "rgba(0, 34, 204)", //#0022CC
            ultra: "rgba(0, 19, 136)", //
          },
          dim: {
            low: "rgba(0, 0, 0, 0.28)", //#00000047
            medium: "rgba(0, 0, 0, 0.42)", //#0000006B
            high: "rgba(0, 0, 0, 0.69)", //#000000B0
            extra: "rgba(0, 0, 0, 0.80)", //#000000CC
            ultra: "rgba(0, 0, 0, 0.92)", //#000000EB
          },
        },
        icon: {
          "success-invert": "rgba(0, 36, 6)", //#002406
          "link-invert": "rgba(0, 9, 90)", //#00095A
          "accent-invert": "rgba(162, 0, 26)", //#A2001A
          invert: "rgba(0, 0, 0, 0.88)", //#000000E0
          success: "rgba(1, 153, 49)", //#019931
          link: "rgba(93, 143, 255)", //#5D8FFF
          accent: "rgba(236, 3, 44)", //#EC032C
          extra: "rgba(255, 255, 255, 0.88)", //#FFFFFFE0
          high: "rgba(255, 255, 255, 0.80)", //#FFFFFFCC
          medium: "rgba(255, 255, 255, 0.42)", //#FFFFFF6B
          low: "rgba(255, 255, 255, 0.28)", //#FFFFFF47
        },
        border: {
          focus: "rgba(255, 255, 255)", //#FFFFFF
          success: "rgba(1, 153, 49)", //#019931
          info: "rgba(56, 113, 255)", //#3871FF
          accent: "rgba(236, 3, 44)", //#EC032C
          invert: "rgba(0, 0, 0, 0.88)", //#000000E0
          ultra: "rgba(255, 255, 255, 0.42)", //#FFFFFF6B
          extra: "rgba(255, 255, 255, 0.28)", //#FFFFFF47
          high: "rgba(255, 255, 255, 0.18)", //#FFFFFF2E
          medium: "rgba(255, 255, 255, 0.10)", //#FFFFFF1A
          low: "rgba(255, 255, 255, 0.6)", //#FFFFFF0F
        },
      },
      fontSize: {
        caption: "10px",
      },
      boxShadow: {
        card: "0px_24px_80px_0px_rgba(0, 0, 0, 0.8)",
        image: "0px_0px_2px_0px_rgba(0, 0, 0)",
        paragraph: "0px_0px_8px_0px_rgba(0, 0, 0, 0.6)",
        title: "0px_0px_8px_0px_rgba(0, 0, 0, 0.4)",
        "extra-low": "0px_0px_4px_0px_rgba(0, 0, 0, 0.4)",
      },
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
  plugins: [],
};
