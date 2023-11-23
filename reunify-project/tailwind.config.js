/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ["Inter"],
    },
    extend: {
      colors: {
        "reunify-grey": "#2A333A",
        "reunify-white": "#E6EAF1",
        "reunify-light-blue": "#41C1BA",
        "reunify-blue": "#7C9BD9",
      },
    },
  },
  plugins: [require("daisyui")],
};
