/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace']
      },
      colors: {
        dark: {
          950: '#090d16',
          900: '#0f172a',
          850: '#15203b',
          800: '#1e293b',
          700: '#334155',
          600: '#475569'
        },
        brand: {
          emerald: '#10b981',
          teal: '#14b8a6',
          cyan: '#06b6d4',
          blue: '#2563eb'
        }
      }
    },
  },
  plugins: [],
}
