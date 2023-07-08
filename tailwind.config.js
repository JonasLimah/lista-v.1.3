/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#40FF1F",
        "secundary":"#94006A ",
        "primary100":"#179401",
        "primary200":"#25E104",
        "gray":{
          "100":"#87C782",
          "200":"#649460",
          "300":"#9EB8A3"
        },
        "white":"#fff",
        "black":"#000"

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
