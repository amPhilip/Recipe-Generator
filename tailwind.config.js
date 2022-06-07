module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        fancy: ['Dancing Script'],
     }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
