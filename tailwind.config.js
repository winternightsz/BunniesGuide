/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
    './src/data/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neonPink: '#FF007F',
        chosenBlue: '#7c96ff',
        chosenBlueHover: '#5d78e4',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        acrotsrg: ['ACROTSRG', 'sans-serif'], 
      },
      
    },
  },
  plugins: [],
};

