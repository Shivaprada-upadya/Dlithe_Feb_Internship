/*
export default {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
};  */
    
  /*
  module.exports = {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  };
  */

  module.exports = {
    plugins: [
      require('@tailwindcss/postcss'),
      require('tailwindcss'),
      require('autoprefixer'),
    ],
  };
  
  

  /*export default {
    plugins: {
      "@tailwindcss/postcss": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  };*/
  
  
  

  