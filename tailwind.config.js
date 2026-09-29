/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream:   '#FAF8F4',
        brown:   '#8B0000',
        'brown-dark': '#6B0000',
        olive:   '#4A6741',
        'warm-text':  '#2C1A0F',
        'muted':      '#6B5D52',
        'warm-border':'#DDD0C4',
      },
      fontFamily: {
        serif:   ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:    ['var(--font-noto)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
