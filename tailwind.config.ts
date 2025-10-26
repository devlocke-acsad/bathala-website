
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
        pixeled: ['var(--font-pixeled)', 'sans-serif'],
        heinzHeinrich: ['var(--font-heinzHeinrich)', 'sans-serif'],
        dungeonMode: ['var(--font-dungeonMode)', 'sans-serif'],
        satoshi: ['var(--font-satoshi)', 'sans-serif'],
      },
    },
  },

  plugins: [],

};

export default config;


