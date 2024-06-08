/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ppgosha: ['PPGoshaSans', 'sans-serif'],
      },
      colors: {
        'light-yellow': '#FFFFB6',
        'blue-dark': '#0000FF',
        'dark-green': '#2D712A',
        'violet-light': '#FEE6FF',
        'blue600': '#0000FF',
        'red200': '#FFE0DB',
        'grey900': '#000000',
        'red700': '#FF4500',
      },
    },
  },
  plugins: [],
};
