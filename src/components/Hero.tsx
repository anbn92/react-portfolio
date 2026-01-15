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
      {/* Clean Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-slate-900"></div>
        <div className="absolute w-[400px] h-[400px] -top-24 -left-24 bg-blue-500 rounded-full blur-[80px] opacity-20 animate-float"></div>
        <div className="absolute w-[500px] h-[500px] -bottom-36 -right-36 bg-blue-600 rounded-full blur-[80px] opacity-20 animate-float [animation-delay:5s]"></div>
        <div className="absolute w-[350px] h-[350px] top-1/2 right-[20%] bg-indigo-500 rounded-full blur-[80px] opacity-20 animate-float [animation-delay:10s]"></div>
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
        <div className="floating-letters text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 animate-fadeInUp [animation-delay:0.2s]">
          <span>F</span>
          <span>u</span>
          <span>l</span>
          <span>l</span>
          <span> </span>
          <span>S</span>
          <span>t</span>
          <span>a</span>
          <span>c</span>
          <span>k</span>
          <span> </span>
          <span>D</span>
          <span>e</span>
          <span>v</span>
          <span>e</span>
          <span>l</span>
          <span>o</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>
          <span> </span>
          <span>&</span>
          <span> </span>
          <span>T</span>
          <span>e</span>
          <span>c</span>
          <span>h</span>
          <span>n</span>
          <span>i</span>
          <span>c</span>
          <span>a</span>
          <span>l</span>
          <span> </span>
          <span>C</span>
          <span>o</span>
          <span>n</span>
          <span>s</span>
          <span>u</span>
          <span>l</span>
          <span>t</span>
          <span>a</span>
          <span>n</span>
          <span>t</span>
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
