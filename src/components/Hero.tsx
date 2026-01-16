import React, { useState, useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const fullName = "An Binh";
  const indexRef = useRef(0);
  const isTypingRef = useRef(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTypingRef.current) {
        // Typing forward
        if (indexRef.current < fullName.length) {
          indexRef.current++;
          setDisplayText(fullName.slice(0, indexRef.current));
        } else {
          // Pause at full text, then start deleting
          setTimeout(() => {
            isTypingRef.current = false;
          }, 1500);
        }
      } else {
        // Deleting backward
        if (indexRef.current > 0) {
          indexRef.current--;
          setDisplayText(fullName.slice(0, indexRef.current));
        } else {
          // Pause at empty, then start typing
          setTimeout(() => {
            isTypingRef.current = true;
          }, 500);
        }
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>

        {/* Animated gradient overlays */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 animate-gradientShift"
          style={{ backgroundSize: "200% 200%" }}
        ></div>
        <div
          className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/10 to-purple-500/10 animate-gradientShiftReverse"
          style={{ backgroundSize: "200% 200%" }}
        ></div>

        {/* Large floating orbs */}
        <div className="absolute w-[400px] h-[400px] -top-24 -left-24 bg-blue-500 rounded-full blur-[80px] opacity-30 animate-floatSlow"></div>
        <div
          className="absolute w-[500px] h-[500px] -bottom-36 -right-36 bg-blue-600 rounded-full blur-[80px] opacity-30 animate-floatSlow"
          style={{ animationDelay: "5s" }}
        ></div>
        <div
          className="absolute w-[350px] h-[350px] top-1/2 right-[20%] bg-indigo-500 rounded-full blur-[80px] opacity-30 animate-floatSlow"
          style={{ animationDelay: "10s" }}
        ></div>

        {/* Smaller floating particles */}
        <div className="absolute w-2 h-2 top-[20%] left-[10%] bg-blue-400 rounded-full animate-particleFloat opacity-60"></div>
        <div
          className="absolute w-3 h-3 top-[60%] left-[15%] bg-purple-400 rounded-full animate-particleFloat opacity-50"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute w-1 h-1 top-[30%] right-[25%] bg-indigo-400 rounded-full animate-particleFloat opacity-70"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute w-2 h-2 top-[70%] right-[35%] bg-blue-300 rounded-full animate-particleFloat opacity-60"
          style={{ animationDelay: "6s" }}
        ></div>
        <div
          className="absolute w-1 h-1 top-[45%] left-[30%] bg-purple-300 rounded-full animate-particleFloat opacity-50"
          style={{ animationDelay: "8s" }}
        ></div>
        <div
          className="absolute w-3 h-3 top-[15%] right-[15%] bg-indigo-300 rounded-full animate-particleFloat opacity-40"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-2 h-2 top-[80%] left-[60%] bg-blue-200 rounded-full animate-particleFloat opacity-60"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute w-1 h-1 top-[25%] right-[45%] bg-purple-200 rounded-full animate-particleFloat opacity-50"
          style={{ animationDelay: "7s" }}
        ></div>

        {/* Animated lines/connections */}
        <div
          className="absolute top-[30%] left-[20%] w-32 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-lineGlow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-[60%] right-[30%] w-24 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-lineGlow"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-[45%] left-[50%] w-16 h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent animate-lineGlow"
          style={{ animationDelay: "5s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="text-center z-10 max-w-4xl">
        <div className="mb-4">
          <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-white animate-fadeInUp inline-block mr-2">
            Hi, I'm
          </span>
          <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-blue-400 inline-block">
            {displayText}
            <span className="animate-blink">|</span>
          </span>
        </div>
        <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 animate-fadeInUp [animation-delay:0.2s]">
          {"Full Stack Developer & Technical Consultant"
            .split("")
            .map((char, index) => (
              <span
                key={index}
                className="inline-block animate-waveText"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
        </div>
        <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-10 animate-fadeInUp [animation-delay:0.4s]">
          Transforming ideas into elegant, scalable solutions
        </p>
        <div className="flex gap-4 justify-center flex-wrap animate-fadeInUp [animation-delay:0.6s]">
          <a
            href="#projects"
            className="group px-8 py-4 rounded-full bg-blue-600 text-white font-semibold text-base shadow-lg hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 relative overflow-hidden"
            onMouseEnter={(e) => {
              e.currentTarget.style.animation = "pulseGlow 0.5s ease-in-out";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animation = "";
            }}
          >
            <span className="relative z-10 group-hover:animate-pulse">
              View My Work
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 rounded-full bg-transparent text-white border-2 border-blue-500 font-semibold text-base hover:bg-blue-500/20 hover:-translate-y-1 hover:scale-105 hover:border-purple-400 transition-all duration-300 relative overflow-hidden"
            onMouseEnter={(e) => {
              e.currentTarget.style.animation = "wave 0.5s ease-in-out";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animation = "";
            }}
          >
            <span className="relative z-10 group-hover:animate-bounce">
              Get In Touch
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
