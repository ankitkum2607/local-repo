/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: '#0f172a',
        accent: '#0ea5e9'
      },
      boxShadow: {
        premium: '0 20px 45px -25px rgba(15, 23, 42, 0.35)'
      }
    }
  },
  plugins: []
};
