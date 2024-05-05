const { parkwindPlugin } = require('@park-ui/tailwind-plugin');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      transitionTimingFunction: {
        default: 'cubic-bezier(0.2, 0.0, 0, 1.0)',
      },
    },
  },
  plugins: [parkwindPlugin],
  darkMode: ['class'],
};
