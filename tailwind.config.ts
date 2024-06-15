import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D0FFCE",
          dark: "#3D6B3B",
        },
        secondary: {
          light: "#CEE0F0",
          DEFAULT: "#ACBECE",
          dark: "#607486",
        },
        customBlue: {
          DEFAULT: "#0F1B26",
        },
      },
    },
  },
  plugins: [],
};
export default config;
