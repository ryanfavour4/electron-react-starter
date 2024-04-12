/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
    '/src/renderer/*',
    './src/renderer/index.html',
    './src/renderer/src/**/*.{svelte,js,ts,jsx,tsx}',
    './src/renderer/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#145DA0',
        secondary: '#E0F1FF',
        dark: '#3A3A38',
        black: '#1A1A1A',
        light: '#ebebeb',
        white: '#FFFFFF',
        'text-secondary-dark': '#7F7F7F',
        'text-secondary': '#BDBDBD',
      },
      translate: ['group-hover', 'hover'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
