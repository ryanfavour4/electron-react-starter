/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    './src/**/**/*.{js,ts,jsx,tsx,mdx}',
    '/src/renderer/*',
    './src/renderer/index.html',
    './src/renderer/src/**/*.{svelte,js,ts,jsx,tsx}',
    './src/renderer/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E2E45',
        secondary: '#9A9162',
        dark: '#3A3A38',
        black: '#1A1A1A',
        light: '#E8E9E1',
        white: '#FFFFFF',
      },
      translate: ['group-hover', 'hover'],
    },
  },
  plugins: [],
}
