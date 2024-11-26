/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      LandingbackgroundImage: {
        "landing-delivery-boy":
          "url('https://res.cloudinary.com/do9s5cxxl/image/upload/v1724788490/SwadSafari/landing_page_delivery_boy.png')",
      },
      backgroundImage: {
        "gradient-red-orange":
          "linear-gradient(88.7deg, #cd212a 10.6%, #ec5f05 90%)",
      },
      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        bounce: "bounce 1s infinite",
        fadeIn: "fadeIn 1s ease-in-out",
        slideInFromLeft: "slideInFromLeft 1s ease-out",
        slideInFromRight: "slideInFromRight 1s ease-out",
      },
    },
  },
  plugins: [],
};
