module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          base: "#e17787",
          light: "#ffb1c8",
        },
        dark: "#22272e",
      },
    },
  },
  plugins: [],
};
