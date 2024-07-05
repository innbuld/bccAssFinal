/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        roboto: ['inter', 'sans-serif'],
      },
      colors: {
        customPurple: '#9945FF',
        customBlack: 'rgba(0, 0, 0, 0.5)',
        customZinc: ' #FAFAFA',
        customAsh: ' #1E1E1E',
        customGray: '#464646',
        customGreen: '#6DFFDC',
      },
    },
  },
  plugins: [],
};
