import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const technicalSkillsOther = [
    "Python",
    "Java",
    "SQL",
    "React",
    "PowerShell",
    "Linux",
    "Thai & Lao",
    "Data Loss Prevention (DLP)",
    "Threat Response Auto Pull (TRAP)",
    "Proofpoint",
    "Email Protection",
    "CrowdStrike",
    "Splunk"
  ];

  const Certifications = [
    "CompTIA Security+", "Google Cybersecurity", "Cybersecurity Tools & Cyber Attacks", "Programming in Python", "Introduction to Cybersecurity"
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Hi! I’m Jason, a Senior at the University of Minnesota Twin-Cities majoring in Computer Science. As a motivated and detail-oriented cybersecurity professional, I specialize in identifying and analyzing risks, threats, and vulnerabilities.
              My mission is to ensure the confidentiality, integrity, and availability of assets, protecting organizations and individuals alike.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Technical Skills & Other</h3>
                <div className="flex flex-wrap gap-2">
                  {technicalSkillsOther.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {Certifications.map((cert, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.S. in Computer Science</strong> - University of Minnesota Twin-Cities (Sep 2022 - Dec 2025)
                </li>
                <li>
                  <strong>Dual Enrollment</strong> - Minneeapolis College (Aug 2021 - May 2022)
                </li>

                <li>
                  <strong>High School Diploma</strong> - Washburn High School (2018 - 2022)
                </li>

              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">Cyber Security Engineer Intern @ Target Corporation (Aug 2024 - May 2025)</h4>
                  <p></p>
                </div>
                <div>
                  <h4 className="font-semibold">Cyber Security Analyst Intern @ CHS Inc. (Aug 2023 - Aug 2024)</h4>
                  <p></p>
                </div>
                <div>
                  <h4 className="font-semibold">Software Engineer Intern @ Optum (Jun 2023 - Aug 2023)</h4>
                  <p></p>
                </div>
                <div>
                  <h4 className="font-semibold">Information Technology Intern @ Cargill (Aug 2021 - Aug 2022)</h4>
                  <p></p>
                </div>
              </div>
            </div>
          </div>

          {/* New Organizations Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏢 Organizations </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Member</strong> - National Society of Black Engineers (Sep 2022 – Present)
                </li>

                <li>
                  <strong>Fellow</strong> - CodePath (Feb 2025 – Present)
                </li>

                <li>
                  <strong>Member</strong> - Society of Asian Scientists and Engineers (Sep 2022 – Jan 2024)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
