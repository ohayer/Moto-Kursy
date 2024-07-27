/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        wmain: "#F6F2EA",
      },
    },
  },
  plugins: [require("daisyui")],
};
