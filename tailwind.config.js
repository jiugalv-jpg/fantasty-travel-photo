/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFB6C1',
        secondary: '#FF69B4',
        accent: '#FF1493',
      },
    },
  },
  plugins: [],
}
