/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "270px",
      // => @media (min-width: 390px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    fontFamily: {
      Dana: ["Dana", "sans-serif"],
      display: ["Dana", "sans-serif"],
    },
    extend: {
      animation: {
        ping: "ping 2s ease-in infinite",
      },
      colors: {
        mainPurple: "#C95DFF",
        lightPurple: "#F7E7FF",
        showBlue: "#33D6FF",
        mainBlue: "#14EDFF",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
