import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* --- GoPhish Project --- */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">GoPhish Simulator</h3>
              <p className="text-gray-400 mb-4">
                This project focuses on Social Engineering tactics, specifically phishing attacks, using the GoPhish framework. 
                It serves as a real-world simulation tool for testing and enhancing security awareness in corporate environments. <strong>Key benefits include</strong>:<br /><br />
                • Improving security awareness among employees through simulated phishing emails.<br />
                • Training users to recognize phishing attempts by encouraging attention to detail.<br />
                • Evaluating organizational vulnerabilities and strengthening cybersecurity measures.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Go", "JavaScript", "HTML", "Other"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/serjason2/gophish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* --- AI-Driven Phishing Detection & Response Tool --- */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">AI-Driven Phishing Detection & Response Tool</h3>
              <p className="text-gray-400 mb-4">
                A Social engineering-focused project technique focuses on phishing detection to help prevent users from getting phished in the digital world. This tool uses an extension.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "HTML", "Google Safe Browsing", "Social Engineering", "Cybersecurity"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/serjason2/AI-Driven-Phishing-Detection-Response-Tool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* --- Cybersecurity Repo --- */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Cybersecurity</h3>
              <p className="text-gray-400 mb-4">
                This project repository has everything related to Cybersecurity. This repository is still updated thoroughly with updates.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Cybersecurity"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/serjason2/cyber-security"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>


          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
