/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1E5F8C', // darker blue for better contrast on light backgrounds
        secondary: '#0D3B5C', // darker blue-gray for better contrast
        accent: '#3E5641', // forest green
        background: '#F8F8F8', // lighter background
        text: '#333333', // darker text for better readability
        dark: {
          primary: '#4D9ED6', // lighter blue for better contrast on dark backgrounds
          secondary: '#A3C5E0', // lighter blue-gray for better contrast
          accent: '#5B7A5E', // lighter forest green for better visibility
          text: '#FFFFFF', // pure white for maximum contrast
          background: '#121212' // darker rich black for better contrast
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}