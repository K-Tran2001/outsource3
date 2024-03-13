/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#14532d",
        secondary:"#fb923c",
        gray_800:"#111827",
        gray_400:"#9ca3af",
        gray_500:"#71717a",
        gray_200:"#e4e4e7",
        gray_100:"#f3f4f6",
        focus:"#3b82f6",
        danger:"#ef4444"
      },
      fontSize: {
        small: 10,
        medium:14,
        large:18,
        discriptionForm:20,
        titleForm:25,
      }, 
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'body': ['"Open Sans"'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
    },
  },
  plugins: [],
}
