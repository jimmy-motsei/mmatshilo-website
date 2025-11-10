import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        clay: '#8c6a5d',
        umber: '#5e463d',
        gold: '#b58500',
        indigo: '#3f4ade',
        teal: '#0f766e'
      },
      borderRadius: { '2xl': '1rem' }
    }
  },
  plugins: []
};
export default config;
