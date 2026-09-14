import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './config/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: { 50: '#FDFAF6', 100: '#F8F2E9', 200: '#EFE4D4', 300: '#E2D2BA' },
        ink: { DEFAULT: '#1B1713', 700: '#3D362E', 500: '#6B6053', 300: '#9A8E7E' },
        clay: { DEFAULT: '#C4551F', 600: '#A8461A', 500: '#D96A2E', 100: '#FBEAE0' },
        sea: { DEFAULT: '#0F6B60', 600: '#0B554C', 100: '#E1F0ED' },
        wa: '#25D366',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: { content: '68rem' },
      borderRadius: { xl2: '1.25rem' },
      boxShadow: {
        card: '0 1px 2px rgba(27,23,19,0.04), 0 8px 24px -12px rgba(27,23,19,0.18)',
      },
    },
  },
  plugins: [],
};

export default config;
