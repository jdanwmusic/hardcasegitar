/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0f0f12',
        surface: '#17171a',
        card: '#1e1e22',
        cream: '#F2EFEA',
        amber: '#C8A24A',
        amberLight: '#E0C07A',
        muted: '#A8A6A0',
        border: '#2A2A2E',
      },
      fontFamily: {
        display: ['Georgia', 'Playfair Display', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
