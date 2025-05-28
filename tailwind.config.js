/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'opensans': ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        // Royal color palette
        midnight: '#2C3E50',
        royal: {
          DEFAULT: '#8E44AD',
          light: '#9B59B6',
          dark: '#6C3483',
        },
        gold: {
          DEFAULT: '#F1C40F',
          light: '#F4D03F',
          dark: '#D4AC0D',
        },
        charcoal: {
          DEFAULT: '#34495E',
          light: '#5D6D7E',
          dark: '#2C3E50',
        },
        light: {
          DEFAULT: '#ECF0F1',
          dark: '#BDC3C7',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};