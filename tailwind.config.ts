import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#273617',
          cream: '#F2EBD1',
          red: '#C9371E',
          orange: '#FF5F21',
          brown: '#8B4513',
          dark: '#191D15',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        card: '0 18px 45px rgba(0,0,0,0.08)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          md: '2rem',
          lg: '3rem',
        },
      },
    },
  },
  plugins: [],
}

export default config

