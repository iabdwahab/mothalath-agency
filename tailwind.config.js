/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#244441',
        'main-placeholder': '#0006EA0D',
        supporter: '#42AA8E',
        background: '#A7FFBC',
        'light-green': '#79FD73',
        black: '#000005',
        white: 'white',
        'half-white': '#FFFFFF4D',
      },
      transitionDuration: {
        slow: '100ms',
        medium: '150ms',
      },
      padding: {
        section: '40px',
      },
      margin: {
        'section-title': '30px',
      },
      gap: {
        cards: '24px',
        section: '56px',
        'question-card': '16px',
      },
      gridTemplateColumns: {
        'question-card': '28px 1fr 28px',
      },
    },
  },
  plugins: [],
};
