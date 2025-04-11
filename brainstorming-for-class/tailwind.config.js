/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Indigo-600
        accent: "#F43F5E",  // Rose-500
        bgLight: "#F9FAFB", // Gray-50
      },
      fontFamily: {
        handwritten: ["'Architects Daughter'", "cursive"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        bounceSlow: "bounce 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
