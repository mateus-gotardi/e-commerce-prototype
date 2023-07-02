/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'accents': '#F9D9AA',
      'accents-2': '#F6EBDA',
      'primary':'#FF902B',
      'secondary':'#2F2105',
      'tertiary': '#F4AE26',
      'glass':'#FFFFFF',
      'light':'#7E7D7A',
      'lowprimary':'#FFD28F',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

    },
  },
  plugins: [],
}
