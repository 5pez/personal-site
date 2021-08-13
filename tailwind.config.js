module.exports = {
  purge: {
    enabled: true,
    content: [
      "./pages/**/*.js",
      "./pages/**/*.ts",
      "./pages/**/*.jsx",
      "./pages/**/*.tsx",
      "./src/components/**/*.js",
      "./src/components/**/*.ts",
      "./src/components/**/*.jsx",
      "./src/components/**/*.tsx",
    ],
  },
  presets: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
