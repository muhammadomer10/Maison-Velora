import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#FFF9FA',
          100: '#FFF5F7',
          200: '#FDE4EA',
          300: '#F9CBD6',
        },
        rose: {
          accent: '#C9566F',
          hover: '#B2455D',
          dark: '#93354B',
        },
        gold: {
          accent: '#B98A4E',
          light: '#D4AF37',
          pale: '#E5C583',
          border: 'rgba(185, 138, 78, 0.25)',
        },
        plum: {
          dark: '#4A2330',
          muted: '#7A5261',
          light: '#653847',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-jost)', 'sans-serif'],
      },
      boxShadow: {
        'rose-soft': '0 10px 30px -5px rgba(201, 86, 111, 0.08)',
        'rose-hover': '0 15px 35px -5px rgba(201, 86, 111, 0.16)',
        'gold-glow': '0 0 20px rgba(185, 138, 78, 0.2)',
      },
      aspectRatio: {
        '4/5': '4 / 5',
      },
    },
  },
  plugins: [],
};

export default config;
