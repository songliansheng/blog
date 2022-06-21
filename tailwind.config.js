module.exports = {
    darkMode: 'class',
    purge: ['./src/**/*.tsx'],
    theme: {
      typography: (theme) => ({}),
      extend: {},
    },
    variants: {},
    plugins: [require('@tailwindcss/typography')],
  }