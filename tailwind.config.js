
const mijin = require('mijin/dist/tailwind-preset.js');
module.exports = {
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
      'node_modules/mijin/src/components/**/*.vue',
    ],
  },
  presets: [
    mijin,
  ],
  content: [],
  theme: {
    extend: {
      colors: {
        'gilead-red': '#B91C1C',
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '2500px',
      },
      fontFamily: {
        inter: '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    themes: [
      {
        'gileadTheme': {
          'primary': '#B91C1C',
          'primary-focus': '#991B1B',
          'primary-content': '#ffffff',
          'secondary': '#f000b8',
          'secondary-focus': '#bd0091',
          'secondary-content': '#ffffff',
          'accent': '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          'neutral': '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
    ],
  },

}
