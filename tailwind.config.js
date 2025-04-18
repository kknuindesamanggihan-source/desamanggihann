/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        primary: "#5d0d0d",
        secondary: "#fff0c2",
        light:"#f5f5f5",
        lightBlue: "#903f40",
        lightYellow:"#FEFCE8",
        bgBlue:"#A7C7E7",
        dark: "#333333",
        dark2: "#838383",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          "xxs": "0.5rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spin: 'spin 1s linear infinite', // Menambahkan animasi spin
      },
    },
  },
  plugins: [],
};
