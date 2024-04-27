const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        primary: "#00BA34",
      },
      colors: {
        bord: "#DADADA",
        textcol: "#555555",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
