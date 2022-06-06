module.exports = {
  prefix: '',
  content: [
    "./src/**/*.{html,ts}",
  ],
  important: false,
  separator: ':',
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      xxl: '1900px',
    },
    colors: {
      'white': '#FFFFFF',
      'black': '#000000',
      'light_blue': '#E1ECF4',
      'blue': '#939EB4',
      'dark_blue': '#6F7E9B',
      'red': '#9D1107'
    },
    extend: {
      width: {
        10: '10%',
        20: '20%',
        30: '30%',
        40: '40%',
        45: '45%',
        50: '50%',
        60: '60%',
        70: '70%',
        80: '80%',
        90: '90%',
      },
    },
  },
  plugins: [],
}