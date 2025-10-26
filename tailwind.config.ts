
import type { Config } from 'tailwindcss';



const config: Config = {

  content: [

    './pages/**/*.{js,ts,jsx,tsx,mdx}',

    './components/**/*.{js,ts,jsx,tsx,mdx}',

    './app/**/*.{js,ts,jsx,tsx,mdx}',

  ],

  theme: {
    extend: {
      colors: {
        primary: '#77888C',
      },
      fontFamily: {
        pixeled: ['var(--font-pixeled)'],
        heinzHeinrich: ['var(--font-heinz-heinrich)'],
        dungeonMode: ['var(--font-dungeon-mode)'],
        satoshi: ['var(--font-satoshi)'],
      },
    },
  },

  plugins: [],

};

export default config;


