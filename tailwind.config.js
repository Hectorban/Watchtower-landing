module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: '#9400D3',
        secondary: '#DB3A34',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
