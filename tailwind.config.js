/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        advent: ['var(--font-advent)'],
        cabin: ['var(--font-cabin)'],
      },
    },
  },
  plugins: [],
};
