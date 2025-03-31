/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],  // Add Fraunces here
        hkgrotesk: ['HKGrotesk', 'serif'],  // Add Fraunces here
      },
      fontWeight: {
        normal: 400,
        bold: 700,
        light: 300,
        lightItalic: 300,
      },
      backgroundImage: {
        'white-to-gray': 'linear-gradient(to bottom, #FFFFFF, #F3F4F6)', // Custom gradient
      },
      colors: {
        primaryLight: '#FFFFFF',
        primaryDark: '#121212',
        grayLight: '#EEEEEE',
        multicolor1: '#0000FF',
        foundationGreyDarker: '#181818',
        foundationGrayLight: '#ECECEC',
        grayDark: '#667085',
        primaryBg: "#FAFBFC",
        primaryDarkBg: "#222222",
        pendingStatus: "#E0921E",
        completedStatus: "#2FA81F",
        bodyText: "#4C4D4F",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },

  },
  plugins: [],
};