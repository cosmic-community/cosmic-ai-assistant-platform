/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          dark: '#0a0e1a',
          darker: '#050810',
          navy: '#0f172a',
          purple: '#8b5cf6',
          indigo: '#6366f1',
          blue: '#3b82f6',
          magenta: '#d946ef',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cosmic-glow': 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15), transparent 70%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'gradient-slow': 'gradient 20s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        glow: {
          '0%': {
            opacity: '0.5',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}