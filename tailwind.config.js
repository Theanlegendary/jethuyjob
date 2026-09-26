/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0044CC',
          hover: '#003399',
          light: '#E6F0FF',
        },
        accent: {
          green: '#00B884',
          'green-light': '#E6F9F4',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#1E293B',
        },
        background: {
          DEFAULT: '#F7F9FC',
          dark: '#0F172A',
        },
        border: {
          DEFAULT: '#E4E9F2',
          dark: '#334155',
        },
        text: {
          DEFAULT: '#0F172A',
          muted: '#64748B',
          dark: '#F1F5F9',
        },
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 4px 12px rgba(15, 23, 42, 0.1), 0 2px 4px rgba(15, 23, 42, 0.06)',
      },
    },
  },
  plugins: [],
}
