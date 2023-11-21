// @type {import('tailwindcss').Config}
import plugin from 'tailwindcss/plugin'
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      colors: {
        orange: '#ee4d2d'
      },
      backgroundImage: {
        'custom-image': "url('/src/img/sg-11134004-7rblb-ln6wjyytbe3w27.png')"
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth: theme('columns.7xl'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('.spacing-4')
        }
      })
    })
  ]
}
