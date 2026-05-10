import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', md: '2rem', lg: '2.5rem' },
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        ink: 'var(--color-ink)',
        primary: 'var(--color-primary)',
        'primary-soft': 'var(--color-primary-soft)',
        accent: 'var(--color-accent)',
        'accent-soft': 'var(--color-accent-soft)',
        'accent-deep': 'var(--color-accent-deep)',
        surface: 'var(--color-surface)',
        warm: 'var(--color-warm)',
        muted: 'var(--color-muted)',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tight2: '-0.5px',
        tight3: '-1px',
        tight4: '-1.5px',
      },
      borderRadius: {
        pill: '100px',
        card: '16px',
        soft: '12px',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      maxWidth: {
        '8xl': '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
