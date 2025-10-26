
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pixeled: ['var(--font-pixeled)'],
        heinzHeinrich: ['var(--font-heinz-heinrich)'],
        dungeonMode: ['var(--font-dungeon-mode)'],
        satoshi: ['var(--font-satoshi)'],
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        'strong': { 
          fontFamily: theme('fontFamily.satoshi'),
          fontWeight: '700',
          color: '#77888C',
        },
      });
    },
  ],
};
export default config;
