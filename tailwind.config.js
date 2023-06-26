/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bottomHeader: "url('/src/img/123.png')",
        blockFirst: "url('/src/img/nyanya2.png')",
        blockThirty: "url('/src/img/3.jpg')",
        BlockLyuda: "url('/src/img/block1.jpg')",
        sliderOne: "url('/src/assets/slide1.png')",
        sliderTwo: "url('/src/assets/slide2.jpg')",
        sliderThree: "url('/src/assets/slide4.jpg')",
      }
    },
    screens: {

      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '773px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
      lp: { max: '320px' },

      gg: { max: '360px' },
    },
    colors: {
      'main': '#e09a8e',
      'white': '#fff',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      transparent: 'transparent',
      white: 'white',
      black: '#272727',
      beige: '#e0e0e0',
      orange: {
        400: '#facc15',
        500: '#eab308',
        600: '#d97706',
      },
      green: {
        400: 'rgb(163 230 530);',
        500: 'rgb(132 204 22)',
        600: 'rgb(101 163 13)',
      },
      gray: {
        400: '#A3A3A3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        900: '#464646',
      },
    },
    fontFamily: {
      main: ['Montserrat', 'sans-serif', 'Inter'],      // ExtraLight 200,Light 300 ,Medium 500 ,SemiBold 600 ,Bold 700 ,ExtraBold 800 ,Black 900 
      second: ['Inter', 'sans-serif'],
    },

  },
  plugins: [],
}