export default {
  font: {
    family: 'Manrope, sans-serif',
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700
    },
    sizes: {
      xsmall: '1.2rem', // 12px
      small: '1.3rem',
      medium: '1.5rem',
      large: '2rem' // 20px
    }
  },
  colors: {
    primary: '#D87D4A',
    lightPrimary: '#FBAF85',
    black: '#000000',
    lightBlack: '#191919',
    mediumBlack: '#141414',
    white: '#ffffff',
    gray: '#979797',
    lighterGray: '#f1f1f1',
    lightGray: '#fafafa'
  },
  containers: {
    mobile: '32.7rem' //375 - 48 = 327px
  }
} as const
