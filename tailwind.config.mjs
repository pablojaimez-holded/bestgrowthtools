/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#F9F7F4',
        'cream-dark': '#F0EDE8',
        accent: '#E94560',
        'accent-light': '#FF6B81',
        violet: '#7C3AED',
        rating: '#E8A317',
        'pro-green': '#0D9F61',
        'pro-bg': '#E8F8F0',
        'con-red': '#E94560',
        'con-bg': '#FFF5F5',
        'text-primary': '#1A1A2E',
        'text-secondary': '#4A4A68',
        'text-muted': '#8A8AA3',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'card': '20px',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.12)',
        'glow-accent': '0 0 80px rgba(233, 69, 96, 0.15)',
        'glow-violet': '0 0 80px rgba(124, 58, 237, 0.15)',
      },
    },
  },
  plugins: [],
};
