import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "33%": { opacity: "0.8" },
          "66%": { opacity: "1" },
          "80%": { opacity: "0.4" },
        },
        rgbCycle: {
          "0%": {
            filter:
              "hue-rotate(0deg) drop-shadow(0 0 10px rgba(0, 240, 255, 0.6))",
          },
          "33%": {
            filter:
              "hue-rotate(120deg) drop-shadow(0 0 10px rgba(255, 0, 255, 0.6))",
          },
          "66%": {
            filter:
              "hue-rotate(240deg) drop-shadow(0 0 10px rgba(0, 255, 100, 0.6))",
          },
          "100%": {
            filter:
              "hue-rotate(360deg) drop-shadow(0 0 10px rgba(0, 240, 255, 0.6))",
          },
        },
        textGlitch: {
          "0%, 100%": { opacity: "1" },
          "1%": { opacity: "0.2" },
          "2%": { opacity: "1" },
          "10%": { opacity: "1" },
          "11%": { opacity: "0.1" },
          "12%": { opacity: "1" },
        },
      },
      animation: {
        colorFlickerGlow:
          "rgbCycle 6s linear infinite, flicker 3s linear infinite",
        textGlitchSlow: "textGlitch 15s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
