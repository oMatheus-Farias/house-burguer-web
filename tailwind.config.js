/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#FCBA11",
        dark: "#212529",
        light: "#E4E4E4",
        white: "#FFFFFF",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
