/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['"Source Serif 4"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Source Serif 4"', 'Georgia', 'serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#7c3a16',
          50:  '#fdf6f0',
          100: '#fbecdc',
          200: '#f4d2ad',
          300: '#e8b07b',
          400: '#d8884f',
          500: '#c2693a',
          600: '#a8532e',
          700: '#7c3a16',
          800: '#5e2c10',
          900: '#3f1d0a',
        },
      },
    },
  },
  plugins: [],
};
