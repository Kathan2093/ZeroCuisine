/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-white": "#E9F1F7",
        "custom-purple": "#5A0B4D",
        "custom-blue": "#DAEBF8",
      },
      fontFamily: {
        fira_sans: ["Fira_sans-Light", "Helvetica"],
        fira_sans_regular: ["Fira_sans-Regular", "Helvetica"],
        fira_sans_medium: ["Fira_sans-Medium", "Helvetica"],
        space_Grotesk: ["space_Grotesk-Medium", "Helvetica"],
        space_Grotesk_regular: ["space_Grotesk-Regular", "Helvetica"],
        playwrite: ["Playwrite IT Moderna", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
