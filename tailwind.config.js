/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#2c2c2c",
          "200": "#222",
        },
        light: "#fff",
        gainsboro: "#d9d9d9",
        dimgray: "#4f4f4f",
        black: "#000",
        seagreen: "rgba(0, 104, 74, 0.78)",
        maroon: "rgba(101, 0, 0, 0.78)",
        green: "rgba(0, 126, 5, 0.26)",
        cadetblue: "#85bcad",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "racing-sans-one": "'Racing Sans One'",
        roboto: "Roboto",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
        "8xs": "5px",
      },
    },
    fontSize: {
      lgi: "1.188rem",
      "6xl": "1.563rem",
      xl: "1.25rem",
      "45xl": "4rem",
      "19xl": "2.375rem",
      "32xl": "3.188rem",
      "4xl": "1.438rem",
      lg: "1.125rem",
      "31xl": "3.125rem",
      "11xl": "1.875rem",
      "21xl": "2.5rem",
      base: "1rem",
      inherit: "inherit",
    },
    screens: {
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
