import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "highlight-green": "#ceff65",
        "bg-white": "#ffffff",
      },
      container: {
        // Container System
        center: true, // Center containers by default
        padding: {
          DEFAULT: "1rem", // Default container padding
          sm: "2rem", // Small screens
          lg: "3rem", // Large screens
          xl: "4rem", // Extra large screens
        },
        screens: {
          sm: "640px", // Small screen width
          md: "768px", // Medium screen width
          lg: "1024px", // Large screen width
          xl: "1280px", // Extra large screen width
          "2xl": "1536px", // 2x large screen width
        },
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "1rem",
        xl: "2rem",
      },
      maxWidth: {
        container: "1200px", // Maximum container width
        "content-sm": "640px", // Small content width
        "content-lg": "960px", // Large content width
        "content-xl": "1200px", // Extra large content width
      },

      fontFamily: {
        satoshi: ["Satoshi", "sans"],
        coolvetica: ["Coolvetica", "sans-serif"],
      },
      fontSize: {
        sm: "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
        base: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
        lg: "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
        label: "clamp(1rem, 1vw + 1.31rem, 1.2rem)",
        "sub-title": "clamp(1rem, 1.56vw + 1.56rem, 1.25rem)",
        title: "clamp(2.44rem, 2.38vw + 1.85rem, 2.8rem)",
        features: "clamp(3.05rem, 3.54vw + 2.17rem, 5rem)",
        section: "clamp(3.81rem, 5.18vw + 2.52rem, 4rem)",
        hero: "clamp(4rem, 7.48vw + 5rem, 12rem)",
      },
      translate: {
        "hidden-menu": "-100%", // For hiding the menu
        "visible-menu": "0%", // For showing the menu
      },
    },
  },
  plugins: [],
} satisfies Config;
