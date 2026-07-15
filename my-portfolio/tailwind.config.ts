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
          "0%, 100%": { opacity: 1 },
          "33%": { opacity: 0.8 },
          "66%": { opacity: 1 },
          "80%": { opacity: 0.4 },
        },
        colorCycle: {
          "0%, 100%": { "-webkit-text-stroke-color": "#00F0FF" },
          "25%": { "-webkit-text-stroke-color": "#FF00FF" },
          "50%": { "-webkit-text-stroke-color": "#FFFF00" },
          "75%": { "-webkit-text-stroke-color": "#00FF00" },
        },
        glow: {
          "0%, 100%": {
            filter:
              "drop-shadow(0 0 5px rgba(0, 240, 255, 0.6)) drop-shadow(0 0 10px rgba(0, 240, 255, 0.4))",
          },
          "50%": {
            filter:
              "drop-shadow(0 0 10px rgba(0, 240, 255, 0.8)) drop-shadow(0 0 20px rgba(0, 240, 255, 0.6))",
          },
        },
        textGlitch: {
          "0%, 100%": { opacity: 1 },
          "1%": { opacity: 0.2 },
          "2%": { opacity: 1 },
          "10%": { opacity: 1 },
          "11%": { opacity: 0.1 },
          "12%": { opacity: 1 },
        },
      },
      animation: {
        colorFlickerGlow:
          "colorCycle 8s linear infinite, flicker 3s linear infinite, glow 2s ease-in-out infinite",
        textGlitchSlow: "textGlitch 15s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
