/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.ejs', // Include all EJS files in the "views" folder and its subdirectories
    './public/**', // Include HTML files in the "public" folder (or any other folder where your HTML files might be)
    // Add other file paths as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}

