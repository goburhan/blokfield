module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '200px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1290px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    
    extend: {
      colors: {
        primary: '#3B3172',
        secondary: '#3B3172',
        hover:'#bae6de',
        nav:'rgba(0,0,50,0.25)'
      },
     
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
