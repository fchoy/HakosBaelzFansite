/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'twitter-blue' : '#1da1f2',
        'youtube-red' : '#FF0000',
        'youtube-black' : '#282828',
      }
    },
  },
  plugins: [],
}

