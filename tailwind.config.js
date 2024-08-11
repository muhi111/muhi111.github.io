/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0ch" },
          "100%": { width: "21ch" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "black" },
        },
      },
      animation: {
        typing: "typing 4s steps(21, end), blink 0.75s steps(6, end)",
      },
    },
  },
  plugins: [],
};
