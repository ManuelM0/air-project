module.exports = {
    content: ["**/*.{html,js,php}"],
    theme: {
        colors: {
          'blue': '#1fb6ff',
          'purple': '#7e5bef',
          'pink': '#ff49db',
          'orange': '#ff7849',
          'green': '#13ce66',
          'yellow': '#ffc82c',
          'gray-dark': '#273444',
          'gray': '#8492a6',
          'gray-light': '#d3dce6',
        },
        fontFamily: {
            'heading': ['Quicksand', 'sans-serif', 'modern'],
            'flow': ['Quicksand', 'sans-serif'],
        },
        extend: {         
          spacing: {
            '8xl': '96rem',
            '9xl': '128rem',
          },
          borderRadius: {
            '4xl': '2rem',
          }
        }
    },
    corePlugins: {
      aspectRatio: false,
    },
    plugins: [
      require('@tailwindcss/line-clamp'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('tailwind-scrollbar-hide')
    ],
  }
