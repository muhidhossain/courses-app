/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xsm: '480',
      sm: '640px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      primary: '#475dff',
      secondary: '#d3449e',
      footerBg: '#e4edf4',
      info: '#757da2',
      cardBg: '#8322d0',
      cardBottomBg: '#eceeff',
      cardTitle: '#354895',
    },
    extend: {},
  },
  plugins: [],
};
