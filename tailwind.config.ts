import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        satoshi: ["Satoshi", "sans"],
        coolvetica: ["Coolvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
