/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
    },
    colors: {
      customBlue: '#02274F',
      customWhite: '#FAFAFA',
    },
  },
};
export const plugins = [];
