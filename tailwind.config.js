/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#1C1C24",
        "bg-secondary": "#252D3C",
        "text-primary": "#FFFFFF",
        "text-secondary": "#97ABC0",
        "red-primary": "#E14658",
        dark: "#292932",
      },
    },
  },
  plugins: [],
};
