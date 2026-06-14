/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FF4B00",
        "orange-light": "#ff6a2f",
        ink: "#0a0a0a",
        coal: "#1a1a1a",
        muted: "#888888",
      },
      fontFamily: {
        // Heavy condensed display for big titles + logo
        display: ['"Anton"', "Impact", "sans-serif"],
        // Condensed sans for nav, labels, body
        sans: ['"Oswald"', '"Arial Narrow"', "Arial", "sans-serif"],
      },
      maxWidth: {
        container: "1300px",
      },
      keyframes: {
        "scroll-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
      animation: {
        "scroll-bounce": "scroll-bounce 2s infinite",
      },
    },
  },
  plugins: [],
};
