import { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const primaryColor = colors.rose;
const secondaryColor = colors.teal;
const errorColor = colors.red;
const gray = colors.slate;

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
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
          main: colors.neutral[900],
          light: colors.neutral[600],
          lighter: colors.neutral[400],
          contrast: colors.neutral[50],
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
          background: {
            body: gray[800],
            paper: gray[900],
          },
          text: {
            main: colors.neutral[50],
            light: colors.neutral[300],
            lighter: colors.neutral[400],
            contrast: colors.neutral[900],
          },
          overlay: {
            main: gray[600],
            light: gray[700],
          },
        },
      },
      gridTemplateColumns: {
        'autofill-min-8': 'repeat(auto-fill, minmax(8rem, 1fr))',
        'autofill-min-10': 'repeat(auto-fill, minmax(10rem, 1fr))',
      },
      spacing: {
        'app-header': `theme(spacing.12)`,
        'app-px': 'theme(spacing.3)',
        'app-px-md': 'theme(spacing.5)',
        'app-py': 'theme(spacing.2)',
        'app-py-md': 'theme(spacing.4)',
      },
    },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
    },
  },
} satisfies Config;
