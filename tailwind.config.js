/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/assets/fonts/font.css",
  ],
  theme: {
    fontFamily: {
      sans: "Segoe UI ,monospace",
      bds: ["bdsans", "arimo", "Segoe UI"],
      script: ["bdscript", "arimo", "Segoe UI"],
      frank: ["franklin", "Segoe UI"],
      tan: ["pearl", "Segoe UI"],
    },
    screens: {
      xs: "450px",
      sm: "640px",
      md: "768px",
      xl: "1024px",
      xxl: "1560px"

    },

    extend: {
      height: {
        screen: "100dvh",
      },

    },
  },
  plugins: [],
};
