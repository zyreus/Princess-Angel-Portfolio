/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          /** User-provided base secondary */
          primary: '#9333EA',
          dark: '#000000',
          light: '#FFFFFF',
        },
        /**
         * Exact user-provided monochromatic secondary ramp.
         * Keeps existing `lilac-*` class names across the site.
         */
        lilac: {
          50: '#FFFFFF',
          100: '#E6E6FF',
          200: '#D1CCFA',
          300: '#BD99F5',
          400: '#A866F0',
          500: '#9333EA',
          600: '#8040C0',
          700: '#663399',
          800: '#4D2673',
          900: '#331A4D',
          950: '#1A0D26',
          975: '#000000',
        },
        accent: {
          pink: '#fce7f3',
          'pink-deep': '#fbcfe8',
          sky: '#e0f2fe',
          'sky-deep': '#bae6fd',
          butter: '#fef9c3',
        },
      },
      fontFamily: {
        display: ['"Quicksand"', '"Comfortaa"', 'ui-rounded', 'system-ui', 'sans-serif'],
        sans: ['"Lato"', '"Open Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 14px 40px rgba(147, 51, 234, 0.14)',
        diffuse:
          '0 8px 32px rgba(147, 51, 234, 0.12), 0 2px 12px rgba(132, 29, 218, 0.07)',
        'diffuse-lg':
          '0 20px 48px rgba(147, 51, 234, 0.16), 0 4px 16px rgba(132, 29, 218, 0.09)',
        inner: 'inset 0 1px 0 rgba(255, 255, 255, 0.6)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.9' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.65s ease-out both',
        float: 'float 5.5s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
