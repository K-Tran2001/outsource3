/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // colors: {
      //   primary: "#005bc5",
      //   secondary:"#742365",
      //   black:"#222831",
      //   gray:"#31363F"
      // },
      // fontSize: {
      //   small: 10,
      //   medium:14,
      //   large:18,
      //   discriptionForm:20,
      //   titleForm:25,
      // },
    },
  },
  plugins: [],
}
