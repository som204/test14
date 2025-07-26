import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#E0E7FF",
        accent: "#2DD4BF",
        textLightMode: "#1F2937",
        textDarkMode: "#F3F4F6",
        backgroundLightMode: "#FFFFFF",
        backgroundDarkMode: "#18181B",
        surfaceLightMode: "#F9FAFB",
        surfaceDarkMode: "#27272A",
        error: "#EF4444",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      },
    },
  },
  plugins: [],
};

export default config;