const baseUnit = 16;
const goldenRatio = 1.618;
const spacingSmall = baseUnit / goldenRatio; // Approximately 9.89px
const spacingMedium = baseUnit; // 16px
const spacingLarge = baseUnit * goldenRatio; // Approximately 25.89px
const spacingExtraLarge = baseUnit * goldenRatio ** 2; // Approximately 41.89px

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        sm: `${spacingSmall}px`,
        md: `${spacingMedium}px`,
        lg: `${spacingLarge}px`,
        xl: `${spacingExtraLarge}px`,
      },
      colors: {
        lime: {
          300: "#ECF87F",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
