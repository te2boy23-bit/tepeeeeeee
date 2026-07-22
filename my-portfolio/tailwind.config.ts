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
        // 色をより大きく派手に動かすグラデーションアニメーション
        rgbCycle: {
          "0%": {
            filter:
              "hue-rotate(0deg) drop-shadow(0 0 20px rgba(0, 240, 255, 0.9))",
            "background-position": "0% 50%",
          },
          "50%": {
            filter:
              "hue-rotate(180deg) drop-shadow(0 0 25px rgba(255, 0, 255, 0.9))",
            "background-position": "100% 50%",
          },
          "100%": {
            filter:
              "hue-rotate(360deg) drop-shadow(0 0 20px rgba(0, 240, 255, 0.9))",
            "background-position": "0% 50%",
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
          "rgbCycle 4s ease infinite, flicker 2s linear infinite",
        textGlitchSlow: "textGlitch 15s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
