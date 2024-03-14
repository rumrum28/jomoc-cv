import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      colors: {
        lightBrown: '#f3e3d3',
        skinLightBrown: '#efcead',
        primaryBrown: '#9b6b43',
        skinDarkBrown: '#8e5431',
        darkBrown: '#744c24',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        xs: '450px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
