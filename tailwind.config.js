/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      keyframes: {
        horizontalAutoScrollRight: {
          "0%": { transform: "translateX(0%)" },
          "5%": { transform: "translateX(0%)" },
          "13%": { transform: "translateX(-355%)" },
          "23%": { transform: "translateX(-710%)" },
          "33%": { transform: "translateX(-1065%)" },
          "45%": { transform: "translateX(-1420%)" },
          "50%": { transform: "translateX(-1420%)" },
        },
        horizontalAutoScrollLeft: {
          "0%": { transform: "translateX(0%)" },
          "5%": { transform: "translateX(0%)" },
          "13%": { transform: "translateX(355%)" },
          "23%": { transform: "translateX(710%)" },
          "33%": { transform: "translateX(1065%)" },
          "45%": { transform: "translateX(1420%)" },
          "50%": { transform: "translateX(1420%)" },
        },

        topComingUpcoming: {
          from: { transform: "translateY(0);", opacity: 0 },
          to: { transform: "translateY(-100px);", opacity: 1 },
        },
        topComingTopRated: {
          from: { transform: "translateY(0);", opacity: 0 },
          to: { transform: "translateY(-200px);", opacity: 1 },
        },
      },
      animation: {
        // 'spin-slow-30': 'spin 30s linear infinite',
        // 'spin-slow-25': 'spin 25s linear infinite',
        // 'spin-slow-10': 'spin 10s linear infinite',
        "horizontalAutoScrollRight-infinite":
          "horizontalAutoScrollRight 20s linear infinite 1000ms",
        "horizontalAutoScrollLeft-infinite":
          "horizontalAutoScrollLeft 20s linear infinite 1000ms",
        topComingUpcoming: "topComingUpcoming 0.5s ease-in-out forwards 500ms",
        topComingTopRated: "topComingTopRated 0.5s ease-in-out forwards 500ms",
      },
    },
  },
  plugins: [],
};
