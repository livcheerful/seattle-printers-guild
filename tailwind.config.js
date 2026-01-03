/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/*.{html}",
    "./mdx-components.js",
    "./node_modules/@zach.codes/react-calendar/dist/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        spg: ["SPG", "sans-serif"],
      },
      colors: {
        "spg-yellow": "#FCC94C",
      },
    },
  },
  plugins: [],
};
