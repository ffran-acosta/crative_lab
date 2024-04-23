/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        customBlack: '#1a1a1a',
        customViolet: '#8e5e9a',
        customWhite: '#efebdb',
      },
    },
  },
  plugins: [],
}

