module.exports = {
  important: true,
  prefix: '',
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  corePlugins: {
    preflight: false,
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        fit: 'fit-content',
        min: 'min-content',
        max: 'max-content',
      },
      padding: {
        '4.5': '1.125rem'
      }
    },
    screens: {
      'sm': { 'min': '600px' },
      'md': { 'min': '960px' },
      'lg': { 'min': '1280px' },
      'xl': { 'min': '1920px' },
    }
  },
  variants: {
    extend: {},
  },
}