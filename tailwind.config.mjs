/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bg-light': '#FFFFFF',
        'bg-alt': '#F5F6F8',
        'bg-dark': '#111215',
        'steel-gray': '#2A2D34',
        'light-gray': '#F5F5F5',
        'neon-green': '#6BE03F',
        'accent-blue': '#00A3FF',
        'heading': '#1A1A1A',
        'body-text': '#4A4A4A',
        'muted': '#7A7A7A',
        'border-gray': '#E5E7EB',
        'dark-footer': '#1A1A1A',
      },
      fontFamily: {
        heading: ['GeneralSans-Bold', 'sans-serif'],
        body: ['GeneralSans-Variable', 'GeneralSans-Regular', 'sans-serif'],
      },
      dropShadow: {
        neon: '0 0 6px rgba(50, 255, 87, 0.7)',
      },
      clipPath: {
        'cut-corner': 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)',
      },
      boxShadow: {
        'card': '0 2px 12px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.1)',
        'green-glow': '0 4px 20px rgba(107, 224, 63, 0.15)',
      },
    },
  },
  plugins: [],
}