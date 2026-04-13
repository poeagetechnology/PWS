/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {

      /* ---------- FONT ---------- */

      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },

      /* ---------- ANIMATIONS ---------- */

      animation: {
        cloudDrift: "cloudDrift 60s linear infinite",
      },

      keyframes: {
        cloudDrift: {
          "0%": { transform: "translateX(-50vw)" },
          "100%": { transform: "translateX(100vw)" },
        },
      },

    },
  },

  plugins: [],
};