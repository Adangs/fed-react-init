/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        '200-px': '200px'
      }
    },
  },
  plugins: [],
  corePlugins:{
    preflight: false
  }
}

