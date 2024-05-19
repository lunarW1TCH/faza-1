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
    screens: {
      'sm-down': { max: '640px' },
      'md-down': { max: '768px' },
      'lg-down': { max: '1024px' },
      'xl-down': { max: '1280px' },
      '2xl-down': { max: '1536px' },
    },
  },
  plugins: [parkwindPlugin],
  darkMode: ['class'],
};
