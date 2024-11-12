/** @type {import('tailwindcss').Config} */
import path from 'path';

export default {
  content: [
    "./index.php",
    "./MainProject/**/*.php",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        text: 'var(--color-text)',
        primary: 'var(--color-primary)',
        'background-light': 'var(--color-background-light)',
        'arrow-color': 'var(--arrow-color)',
        // Добавьте другие цвета при необходимости
      },
      height: {
        'header-height': 'var(--header-height)',
        10: '2.5rem', // h-10
        40: '10rem',   // h-40 (если необходимо)
      },
      spacing: {
        small: '0.5rem',      // px-spacing-small: 2px
        medium: '1rem',       // px-spacing-medium: 4px
        large: '1.5rem',      // space-x-spacing-large: 6px
        'spacing-small': '0.5rem',  // var(--spacing-small)
        'spacing-medium': '1rem',   // var(--spacing-medium)
        'spacing-large': '1.5rem',  // var(--spacing-large)
      },
      borderRadius: {
        DEFAULT: 'var(--border-radius)',
      },
      transitionTimingFunction: {
        'cubic-bezier': 'cubic-bezier(0.25, 0.8, 0.25, 1)',
      },
      transitionDuration: {
        300: '300ms',
        200: '200ms',
      },
      zIndex: {
        1000: '1000',
        1002: '1002',
      },
    },
  },
  plugins: [],
};

