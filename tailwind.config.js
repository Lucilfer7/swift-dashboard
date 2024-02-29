/** @type {import('tailwindcss').Config} */
import DefaultColors from "tailwindcss/colors";

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...DefaultColors,
      "swift-purple": {
        50: "var(--swift-purple-50)",
        100: "var(--swift-purple-100)",
        200: "var(--swift-purple-200)",
        300: "var(--swift-purple-300)",
        400: "var(--swift-purple-400)",
        500: "var(--swift-purple-500)",
        600: "var(--swift-purple-600)",
        700: "var(--swift-purple-700)",
        800: "var(--swift-purple-800)",
        900: "var(--swift-purple-900)",
        950: "var(--swift-purple-950)",
      },
      "dark-blue": {
        50: "var(--dark-blue-50)",
        100: "var(--dark-blue-100)",
        200: "var(--dark-blue-200)",
        300: "var(--dark-blue-300)",
        400: "var(--dark-blue-400)",
        500: "var(--dark-blue-500)",
        600: "var(--dark-blue-600)",
        700: "var(--dark-blue-700)",
        800: "var(--dark-blue-800)",
        900: "var(--dark-blue-900)",
        950: "var(--dark-blue-950)",
      },
      lochinvar: {
        50: "var(--lochinvar-50)",
        100: "var(--lochinvar-100)",
        200: "var(--lochinvar-200)",
        300: "var(--lochinvar-300)",
        400: "var(--lochinvar-400)",
        500: "var(--lochinvar-500)",
        600: "var(--lochinvar-600)",
        700: "var(--lochinvar-700)",
        800: "var(--lochinvar-800)",
        900: "var(--lochinvar-900)",
        950: "var(--lochinvar-950)",
      },
    },
  },
  plugins: [],
};
