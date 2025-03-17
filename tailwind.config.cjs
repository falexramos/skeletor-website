//tailwind.config.cjs
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
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
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          },
        },
      },
      colors: {
        primary: '#2c3e50', // Azul oscuro
        secondary: '#3498db', // Azul claro
        darkbg: '#1e293b', // Fondo oscuro
        lightbg: '#f8fafc', // Fondo claro
        slate: colors.slate,
      },
      boxShadow: {
        'xl-dark': '0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 8px 10px -6px rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')({ strategy: 'class' }),
  ],
};
