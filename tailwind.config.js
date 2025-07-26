module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  screens: {
    'xs': '480px',     
    'sm': '640px',     
    'md': '768px',     
    'lg': '1024px',    
    'xl': '1280px',    
    '2xl': '1536px',   
  },
  theme: {
    extend: {
      colors: {
        creamy: {
          100: "#eeebe7",
          200: "#efd7c5",
          300: "#e6c5aa",
        },
        green: {
          100: "#d9e8d4",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
