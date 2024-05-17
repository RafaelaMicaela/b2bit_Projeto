/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
    },
    boxShadow: {
      'shadow-login': '0px 0px 64px rgba(0, 0, 0, 0.25)', // Exemplo de sombra personalizada
      'shadow-profile': '0px 2px 10px rgba(0, 0, 0.10',
    },
    colors: {
      customBlue: '#02274F',
      customWhite: '#FDFDFD',
      customBg: '#F1F5F9',
      customWhite2: '#F4F4F4',
    },
  },
};
export const plugins = [];
