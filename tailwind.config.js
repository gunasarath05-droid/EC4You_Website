/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#ff6633',
          secondary: '#99cccc',
          tertiary: '#669999',
          accent: '#ff9966',
          neutral: '#333333',
          bg: '#fff5ee',
        }
      },
      keyframes: {
        newsletterFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(-3deg)' },
        },
        floatFast: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-18px) rotate(4deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-2deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(25px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(25px) rotate(-360deg)' },
        }
      },
      animation: {
        'newsletter-float': 'newsletterFloat 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-fast': 'floatFast 4s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'orbit': 'orbit 8s linear infinite',
      },
    },
  },
  plugins: [],
}
