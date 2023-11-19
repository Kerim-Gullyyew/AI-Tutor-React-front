/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      desktop: "900px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      animation: {
        bounce200: "bounce 1s infinite 200ms",
        bounce400: "bounce 1s infinite 400ms",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        colorSidebar: "#0F0139",
        colorBackground: "#F6F4FF",
        colorText: "#3F3E3E",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // [require("tw-elements/dist/plugin.cjs")],
  ],
};
