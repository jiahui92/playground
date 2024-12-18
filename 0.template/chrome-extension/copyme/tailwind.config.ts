import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./popup/**/*.{js,ts,jsx,tsx,mdx}",
    "./options/**/*.{js,ts,jsx,tsx,mdx}",
    "./newtab/**/*.{js,ts,jsx,tsx,mdx}",
    "./sidepanel/**/*.{js,ts,jsx,tsx,mdx}",
    "./devtools/**/*.{js,ts,jsx,tsx,mdx}",
    "./tabs/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
