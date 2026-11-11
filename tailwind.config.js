/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#1D5FE0', dark: '#0F3FA8', soft: '#EAF1FF', light: '#5B9BFF' },
        navy: { DEFAULT: '#071433', deep: '#040B20', mid: '#0B1F4D' },
        ink: '#06122B', cyanlight: '#F4F8FF', greylight: '#F3F6FB', muted: '#5B6578',
      },
      fontFamily: { heading: ['Poppins', 'system-ui', 'sans-serif'], body: ['Inter', 'system-ui', 'sans-serif'] },
      boxShadow: { card: '0 8px 30px rgba(6,18,43,0.07)', brand: '0 10px 30px rgba(29,95,224,0.30)' },
    },
  },
  plugins: [],
}
