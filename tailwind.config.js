/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'lavender': {
          50: '#F8F7FF',
          100: '#F0EFFF',
          200: '#E0DEFF',
          300: '#D0CBFF',
          400: '#B8B1FF',
          500: '#A598FF',
          600: '#8B7FFF',
          700: '#7066FF',
          800: '#5D4FFF',
          900: '#4A3AFF',
        },
        'mint': {
          50: '#F0FFF0',
          100: '#E6FFE6',
          200: '#CCFFCC',
          300: '#B3FFB3',
          400: '#99FF99',
          500: '#80FF80',
          600: '#66FF66',
          700: '#4DFF4D',
          800: '#33FF33',
          900: '#1AFF1A',
        },
        'peach': {
          50: '#FFF8F0',
          100: '#FFF1E0',
          200: '#FFE5B4',
          300: '#FFD699',
          400: '#FFC766',
          500: '#FFB84D',
          600: '#FF9E1A',
          700: '#E68A00',
          800: '#CC7700',
          900: '#B36600',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};