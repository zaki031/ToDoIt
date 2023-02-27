/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg': "url('../public/bg.jpg')",
        'bg2' : "url('../public/bg2.jpg')",
      },
      colors: {
        'main': '#DA7534',
        'moin': '#e49d71',
        'muoin': "#ed7a32",
      },
    }
  },
  plugins: [],
}
