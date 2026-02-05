/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      extend: {
        colors: {
          dark: '#050505',
          light: '#ffffff',
          accent: '#3b82f6',
          muted: '#71717a',
          card: '#111111',
          border: '#1f2937',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          display: ['Outfit', 'sans-serif'],
        },
        letterSpacing: {
          tighter: '-0.05em',
          tight: '-0.025em',
        },
        boxShadow: {
          '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.5)',
          '2xl-accent': '0 25px 50px -12px rgba(59, 130, 246, 0.25)',
        },
        animation: {
          'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }

      },
    },
    plugins: [],
  }


  