/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //bg-tasks
      backgroundImage: theme => ({
        "tasks": "url('/images/background.png')"
      })
    },
  },
  plugins: [],
}
