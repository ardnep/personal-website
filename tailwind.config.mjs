import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      white: "#ebebeb",
      black: "#030303",
      red: "#EA4335",
      green: "#34A853",
      blue: "#4791DD",
      yellow: "#F9A826",
      gray: "#9AA0A6",
      transparent: "transparent",
      inherit: "inherit",
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
      mono: ["IBM\\ Plex\\ Mono", ...defaultTheme.fontFamily.mono],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
