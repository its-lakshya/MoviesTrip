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
          to: { transform: "translateY(-180px);", opacity: 1 },
        },

        topComingTopRated: {
          from: { transform: "translateY(0);", opacity: 0 },
          to: { transform: "translateY(-280px);", opacity: 1 },
        },

        topComingTranding: {
          from: { transform: "translateY(0);", opacity: 0 },
          to: { transform: "translateY(-380px);", opacity: 1 },
        },

        trandingBgChange: {
          from:{ background: "transparent"},
          to:{ background:'rgba(255, 0, 0, 0.15)',},
        },

        trandingCard: {
          from:{ transform: 'scale(1)'},
          to:{ transform: 'scale(1.2)',},
        },

        popularMovies: {
          '0%' : { opacity:0 },
          '10%' : { opacity:0},
          '50%' : { opacity:1 },
          '90%' : { opacity:1 },
          '100%' : { opacity:0 },
        }

      },
      animation: {
        // 'spin-slow-30': 'spin 30s linear infinite',
        // 'spin-slow-25': 'spin 25s linear infinite',
        // 'spin-slow-10': 'spin 10s linear infinite',
        popularMovies: "popularMovies 4.98s ease-in-out infinite forwards",
        "horizontalAutoScrollRight-infinite":
          "horizontalAutoScrollRight 60s linear infinite 1000ms",
        "horizontalAutoScrollLeft-infinite":
          "horizontalAutoScrollLeft 60s linear infinite 1000ms",
        topComingUpcoming: "topComingUpcoming 0.6s ease-in-out forwards 500ms",
        topComingTopRated: "topComingTopRated 0.8s ease-in-out forwards 500ms",
        topComingTranding: "topComingTranding 0.8s ease-in-out forwards 500ms",
        trandingBgChange: "trandingBgChange 0.6s ease-in-out forwards 500ms",
        trandingCard: "trandingCard 0.2s ease-in-out forwards 100ms",
      },
    },
  },
  plugins: [],
};
