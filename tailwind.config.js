/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      height: {
        heightMinusHeader: "calc(100vh - 80px)",
      },
      colors: {
        primary: "#FCBA11",
        dark: "#212529",
        light: "#E4E4E4",
        white: "#FFFFFF",
        black: "#000000",
        blackTransparent: "rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [],
};
