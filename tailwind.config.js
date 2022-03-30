module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm':	'640px',	
      'md':	'768px',	
      'lg':	'1024px',
      'xlg': '1220px',
      'xl':	'1280px',	
      'mxl':	'1470px',
      '2xl':	'1536px',
    },
    extend: {
      spacing: {
        '98': '40rem',
        '97':'28rem',
        '4.5':'4.5rem',
        '100': '46rem',
        '29%': '29%',
        '15%': '15%',
        '30.5': '30.5rem',
        '50': '50rem'
      }
    },
  },
  plugins: [],
}
