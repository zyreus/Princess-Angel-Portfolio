/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'bg-premium-background',
    'bg-premium-background/70',
    'bg-premium-primary',
    'bg-premium-primary/20',
    'bg-premium-primary/25',
    'bg-premium-secondary',
    'bg-premium-secondary/20',
    'bg-premium-accent',
    'bg-premium-accent/15',
    'from-premium-background',
    'via-premium-background/20',
    'text-premium-text',
    'text-premium-muted',
    'text-premium-accent',
    'border-premium-accent',
    'bg-premium-accent/15',
    'shadow-glow',
    'shadow-cyan',
  ],
  theme: {
    extend: {
      colors: {
        premium: {
          primary: '#7C3AED',
          secondary: '#A855F7',
          accent: '#06B6D4',
          background: '#0F172A',
          card: '#111827',
          text: '#F8FAFC',
          muted: '#CBD5E1',
        },
        brand: {
          /** User-provided base secondary */
          primary: '#9333EA',
          dark: '#000000',
          light: '#FFFFFF',
        },
        /**
         * Purple-violet ramp — the site's primary brand identity.
         * lilac-700 = #623B98 (Primary Purple, used for headings & accents)
         */
        lilac: {
          50: '#FAF8FD',   // Warm off-white page background
          100: '#EDE5F7',   // Soft Lavender — card bg, chips
          200: '#D9C9EE',   // Light lavender borders
          300: '#C4ADDD',   // Medium lavender
          400: '#A98BD7',   // Light Lavender accent
          500: '#8056B0',   // Medium Purple
          600: '#6B45A0',   // Between medium and primary
          700: '#623B98',   // ★ Primary Purple — buttons, active states, headings
          800: '#4D287D',   // Deep Violet — hover states
          900: '#292631',   // Dark Charcoal — main text
          950: '#1A1420',
          975: '#0D0A10',
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
        display: ['"DM Sans"', '"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', '"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 48px rgba(98, 59, 152, 0.24)',
        soft: '0 12px 36px rgba(98, 59, 152, 0.12)',
        diffuse: '0 6px 24px rgba(98, 59, 152, 0.10), 0 2px 8px rgba(98, 59, 152, 0.06)',
        'diffuse-lg': '0 16px 48px rgba(98, 59, 152, 0.14), 0 4px 14px rgba(98, 59, 152, 0.08)',
        card: '0 2px 16px rgba(98, 59, 152, 0.07)',
        'card-hover': '0 8px 28px rgba(98, 59, 152, 0.14)',
        inner: 'inset 0 1px 0 rgba(255,255,255,0.65)',
        cyan: '0 0 42px rgba(6, 182, 212, 0.2)',
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
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.65s ease-out both',
        float: 'float 5.5s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3.2s ease-in-out infinite',
        gradientShift: 'gradientShift 12s ease infinite',
        shimmer: 'shimmer 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
