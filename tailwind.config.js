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
        neonBlue: '#00FFFF',
        neonGreen: '#39FF14',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        acrotsrg: ['ACROTSRG', 'sans-serif'], 
      },
      
    },
  },
  plugins: [],
};

