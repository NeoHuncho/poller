/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "landing-pattern": "url('~/src/assets/images/landing-pattern.jpeg')",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
