const { parkwindPlugin } = require('@park-ui/tailwind-plugin')


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [parkwindPlugin],
  darkMode: ['class'],
};
