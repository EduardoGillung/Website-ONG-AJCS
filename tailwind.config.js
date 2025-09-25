/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'livvic': ['Livvic', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        // Paleta suavizada da ONG
        'ong': {
          'red': '#C41E3A',      // Suavizado de #D21528
          'red-light': '#E53E3E', // Versão mais clara
          'orange': '#D97706',    // Suavizado de #C94300  
          'orange-light': '#F59E0B', // Versão mais clara
          'blue': '#2D3748',      // Suavizado de #171E37
          'blue-light': '#4A5568', // Versão mais clara
          'blue-medium': '#4A5568', // Suavizado de #222D54
          'green': '#059669',      // Suavizado de #00B91F
          'green-light': '#10B981', // Versão mais clara
          'yellow': '#F59E0B',     // Suavizado do amarelo
          'cyan': '#0891B2',       // Suavizado de #009DFF
        },
        // Tons neutros para equilíbrio
        'neutral': {
          50: '#FAFAFA',
          100: '#F5F5F5', 
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'ong': '0 4px 20px rgba(196, 30, 58, 0.15)',
      }
    },
  },
  plugins: [],
} 