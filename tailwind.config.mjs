/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hsg: {
          red: "#A62F1B",
          dark: "#1A1D1F",
          gray: "#F8F9FA",
        },
      },
    },
  },
  plugins: [],
};