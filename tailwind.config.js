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
      'brown-light': "#FFCB7C",
      'brown-lighter': "#FFD390"
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/hero-pattern.svg')",
        'newsletter': "url('https://images.unsplash.com/photo-1620807773206-49c1f2957417')",
      }

    },
  },
  plugins: [],
}
