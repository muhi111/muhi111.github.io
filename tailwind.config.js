/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        typing: 'typing 2s steps(30), blink .3s step-end infinite alternate',
      },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '100%' }
        },
        blink: {
          '50%': { borderColor: 'transparent' }
        }
      },
    },
  },
  plugins: [],
}

