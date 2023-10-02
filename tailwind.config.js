/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/components/images/banner.png')",
        "hero-text":
          "linear-gradient(90.79deg, #D11F1F -6.47%, rgba(0, 10, 255, 0.51) 132.16%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "regal-blue": "rgba(112, 153, 201, 0.25)",
        primary: "#0657B5",
        "fax-white": "#F9FCFF",
        secondary: "#032B5A",
        text: "#7099C9",
        box: "#EDF5FF",
      },
    },
  },
  plugins: [],
};
