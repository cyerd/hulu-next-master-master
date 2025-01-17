module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./Components/**/*.{js,ts,jsx,tsx}", 
          "./node_modules/tw-elements/dist/js/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
