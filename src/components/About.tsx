import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-8 bg-slate-800 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-12 relative inline-block left-1/2 -translate-x-1/2 after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600 after:rounded-sm">
          About Me
        </h2>
        <div className="flex gap-12 items-center">
          <div className="flex-1">
            <p className="text-lg leading-relaxed text-gray-300 mb-6">
              I'm a passionate Full Stack Developer and Technical Consultant
              with a proven track record of delivering innovative solutions for
              businesses of all sizes.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 mb-6">
              With expertise spanning frontend and backend technologies, I
              specialize in building scalable web applications that drive real
              business value. My consulting approach combines technical
              excellence with strategic thinking to help clients achieve their
              goals.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 mb-6">
              I thrive on solving complex problems, optimizing performance, and
              creating seamless user experiences. Whether it's architecting a
              new system from scratch or modernizing legacy applications, I
              bring dedication and expertise to every project.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 bg-blue-600/10 rounded-2xl border border-blue-500/20 transition-all duration-300 hover:-translate-y-2 hover:bg-blue-600/15 hover:shadow-lg">
                <span className="block text-5xl font-bold gradient-text mb-2">
                  3+
                </span>
                <span className="block text-sm text-gray-400 uppercase tracking-wider">
                  Years Experience
                </span>
              </div>
              <div className="text-center p-6 bg-blue-600/10 rounded-2xl border border-blue-500/20 transition-all duration-300 hover:-translate-y-2 hover:bg-blue-600/15 hover:shadow-lg">
                <span className="block text-5xl font-bold gradient-text mb-2">
                  10+
                </span>
                <span className="block text-sm text-gray-400 uppercase tracking-wider">
                  Projects Completed
                </span>
              </div>
              <div className="text-center p-6 bg-blue-600/10 rounded-2xl border border-blue-500/20 transition-all duration-300 hover:-translate-y-2 hover:bg-blue-600/15 hover:shadow-lg">
                <span className="block text-5xl font-bold gradient-text mb-2">
                  5+
                </span>
                <span className="block text-sm text-gray-400 uppercase tracking-wider">
                  Happy Clients
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
