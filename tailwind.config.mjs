/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#111215',
        'steel-gray': '#2A2D34',
        'light-gray': '#F5F5F5',
        'neon-green': '#6BE03F',
        'accent-blue': '#00A3FF',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      dropShadow: {
        neon: '0 0 6px rgba(50, 255, 87, 0.7)',
      },
      clipPath: {
        'cut-corner': 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)',
      },
    },
  },
  plugins: [],
} 