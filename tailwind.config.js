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
        gradient: "gradient 3s ease infinite",
        fadeInUp: "fadeInUp 0.6s ease-out backwards",
        typewriter: "typewriter 2s steps(2, end) 1s both",
        glitch: "glitch 2s infinite",
        wave: "wave 2s ease-in-out infinite",
        bounceIn: "bounceIn 1.5s ease-out 0.8s both",
        pulseGlow: "pulseGlow 2s ease-in-out infinite",
        floatingLetters: "floatingLetters 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
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
