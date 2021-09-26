const colors = require('tailwindcss/colors');

const primaryColor = colors.rose;
const secondaryColor = colors.teal;
const errorColor = colors.red;
const gray = colors.blueGray;

module.exports = {
  purge: ['./src/**/*.vue'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          dark: primaryColor[700],
          main: primaryColor[500],
          light: primaryColor[400],
        },
        secondary: {
          dark: secondaryColor[700],
          main: secondaryColor[500],
          light: secondaryColor[400],
        },
        background: {
          body: gray[50],
          paper: colors.white,
        },
        text: {
          main: 'rgba(0, 0, 0, 0.87)',
          light: 'rgba(0, 0, 0, 0.54)',
          lighter: 'rgba(0, 0, 0, 0.38)',
          contrast: 'rgba(255, 255, 255, 0.87)',
        },
        error: {
          dark: errorColor[700],
          main: errorColor[500],
          light: errorColor[400],
          lighter: errorColor[100],
        },
        overlay: {
          main: gray[300],
          light: gray[200],
        },
        dark: {
          primary: {
            dark: primaryColor[700],
            main: primaryColor[500],
            light: primaryColor[400],
          },
          secondary: {
            dark: secondaryColor[700],
            main: secondaryColor[500],
            light: secondaryColor[400],
          },
          background: {
            body: gray[600],
            paper: gray[700],
          },
          text: {
            main: 'rgba(255, 255, 255, 0.87)',
            light: 'rgba(255, 255, 255, 0.54)',
            lighter: 'rgba(255, 255, 255, 0.38)',
            contrast: 'rgba(0, 0, 0, 0.87)',
          },
          overlay: {
            main: gray[400],
            light: gray[500],
          },
        },
      },
      gridTemplateColumns: {
        'autofill-min-8': 'repeat(auto-fill, minmax(8rem, 1fr))',
        'autofill-min-10': 'repeat(auto-fill, minmax(10rem, 1fr))',
      },
      spacing: {
        full: '100%',
        '3/2': '150%',
        // https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale
        'app-header': `${12 * 0.25}rem`,
      },
    },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
    },
  },
};
