module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      yellow: "#FDBE34",
      blueMain: "#10316B",
      blueSoft: "#0B409C",
      white: "white",
      black: "black",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
