import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-8 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4 relative inline-block left-1/2 -translate-x-1/2 after:content-[''] after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-600 after:rounded-sm">
          Get In Touch
        </h2>
        <p className="text-center text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Have a project in mind or want to discuss consulting opportunities?
          I'd love to hear from you!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <form
            className="bg-white/5 p-10 rounded-3xl border border-white/10"
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-gray-200 font-medium text-sm"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-base font-inherit transition-all duration-300 focus:outline-none focus:border-[#667eea] focus:bg-[#667eea]/10 focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)]"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-gray-200 font-medium text-sm"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-base font-inherit transition-all duration-300 focus:outline-none focus:border-blue-500 focus:bg-blue-600/10 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-gray-200 font-medium text-sm"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white text-base font-inherit transition-all duration-300 resize-y min-h-[120px] focus:outline-none focus:border-blue-500 focus:bg-blue-600/10 focus:shadow-[0_0_0_3px_rgba(59,130,246,0.1)]"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-blue-600 text-white border-none rounded-full text-lg font-semibold cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl active:-translate-y-0"
            >
              Send Message
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>

          <div className="flex flex-col justify-center">
            <div>
              <h3 className="text-3xl mb-8 gradient-text">Connect With Me</h3>
              <div className="grid grid-cols-1 gap-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-5 py-5 bg-white/5 border border-white/10 rounded-2xl text-gray-200 no-underline transition-all duration-300 hover:bg-blue-600/15 hover:border-blue-500/50 hover:translate-x-3 hover:text-white group"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-blue-500 transition-all duration-300 group-hover:scale-125 group-hover:text-blue-400"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="font-medium text-lg">GitHub</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-5 py-5 bg-white/5 border border-white/10 rounded-2xl text-gray-200 no-underline transition-all duration-300 hover:bg-blue-600/15 hover:border-blue-500/50 hover:translate-x-3 hover:text-white group"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-blue-500 transition-all duration-300 group-hover:scale-125 group-hover:text-blue-400"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span className="font-medium text-lg">LinkedIn</span>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 px-5 py-5 bg-white/5 border border-white/10 rounded-2xl text-gray-200 no-underline transition-all duration-300 hover:bg-blue-600/15 hover:border-blue-500/50 hover:translate-x-3 hover:text-white group"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-blue-500 transition-all duration-300 group-hover:scale-125 group-hover:text-blue-400"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                  <span className="font-medium text-lg">Twitter</span>
                </a>

                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-4 px-5 py-5 bg-white/5 border border-white/10 rounded-2xl text-gray-200 no-underline transition-all duration-300 hover:bg-blue-600/15 hover:border-blue-500/50 hover:translate-x-3 hover:text-white group"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-6 h-6 text-blue-500 transition-all duration-300 group-hover:scale-125 group-hover:text-blue-400"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span className="font-medium text-lg">Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
