/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#667eea",
          dark: "#764ba2",
        },
      },
      animation: {
        float: "float 20s ease-in-out infinite",
        floatSlow: "floatSlow 25s ease-in-out infinite",
        gradient: "gradient 3s ease infinite",
        gradientShift: "gradientShift 8s ease-in-out infinite",
        gradientShiftReverse: "gradientShiftReverse 12s ease-in-out infinite",
        particleFloat: "particleFloat 15s linear infinite",
        lineGlow: "lineGlow 4s ease-in-out infinite",
        fadeInUp: "fadeInUp 0.6s ease-out backwards",
        typewriter: "typewriter 2s steps(2, end) 1s both",
        glitch: "glitch 2s infinite",
        wave: "wave 2s ease-in-out infinite",
        bounceIn: "bounceIn 1.5s ease-out 0.8s both",
        pulseGlow: "pulseGlow 2s ease-in-out infinite",
        floatingLetters: "floatingLetters 3s ease-in-out infinite",
        waveText: "waveText 1.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translate(0, 0) scale(1) rotate(0deg)" },
          "25%": {
            transform: "translate(40px, -60px) scale(1.05) rotate(2deg)",
          },
          "50%": {
            transform: "translate(-30px, -30px) scale(0.95) rotate(-1deg)",
          },
          "75%": {
            transform: "translate(20px, 40px) scale(1.02) rotate(1.5deg)",
          },
        },
        gradientShift: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
            opacity: "0.7",
          },
          "50%": {
            backgroundPosition: "100% 50%",
            opacity: "1",
          },
        },
        gradientShiftReverse: {
          "0%, 100%": {
            backgroundPosition: "100% 50%",
            opacity: "0.5",
          },
          "50%": {
            backgroundPosition: "0% 50%",
            opacity: "0.8",
          },
        },
        particleFloat: {
          "0%": {
            transform: "translateY(0px) translateX(0px) scale(1)",
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
          "50%": {
            transform: "translateY(-100px) translateX(50px) scale(1.2)",
            opacity: "0.8",
          },
          "90%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(-200px) translateX(100px) scale(0.8)",
            opacity: "0",
          },
        },
        lineGlow: {
          "0%, 100%": {
            opacity: "0.3",
            transform: "scaleX(0.5)",
          },
          "50%": {
            opacity: "1",
            transform: "scaleX(1)",
          },
        },
        waveText: {
          "0%, 40%, 100%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(-8px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% center" },
          "50%": { backgroundPosition: "100% center" },
        },
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
