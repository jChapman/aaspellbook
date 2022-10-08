/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dank: {
          999: "#0b0712",
          900: "#160E25",
          600: "#1c1332",
          500: "#231c41",
          300: "#2d223f",
          100: "#201a4f",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Lexend", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        glow: "glow 1s ease-in-out infinate",
      },
      keyframes: {
        glow: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
					//"text-shadow": "0 0 10px #ffd94d"
        },
      },
    },
  },
  plugins: [],
};
