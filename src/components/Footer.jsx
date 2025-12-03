import { Linkedin, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-14 pb-6 mt-20">
      {/* MAIN FOOTER GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand / Intro */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-3">PDFConverter</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Convert your files instantly with fast, secure and user-friendly PDF
            & DOCX conversion tools.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Home
            </li>

            <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() =>
                document
                  .getElementById("features")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Features
            </li>

            <li className="hover:text-blue-400 cursor-pointer">
              <Link to="/upload">Upload & Convert</Link>
            </li>
            <li
              className="hover:text-blue-400 cursor-pointer"
              onClick={() =>
                document.getElementById("about").scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              About Us
            </li>
          </ul>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Tools</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-400 cursor-pointer">DOCX → PDF</li>
            <li className="hover:text-blue-400 cursor-pointer">PDF → DOCX</li>
            <li className="hover:text-blue-400 cursor-pointer"> Auto Detect Mode</li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">
            Connect With Us
          </h3>

          <div className="flex flex-col gap-3 text-sm text-gray-300">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/irfanullah-khan-802605336/"
              target="_blank"
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="p-2 rounded-full bg-gray-800 group-hover:bg-blue-600 transition-colors duration-300 shadow-md">
                <Linkedin
                  size={18}
                  className="text-white group-hover:scale-110 transition-transform"
                />
              </div>
              <span className="group-hover:text-blue-400 transition-colors">
                LinkedIn
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Irfanullah-khan"
              target="_blank"
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="p-2 rounded-full bg-gray-800 group-hover:bg-purple-600 transition-colors duration-300 shadow-md">
                <Github
                  size={18}
                  className="text-white group-hover:scale-110 transition-transform"
                />
              </div>
              <span className="group-hover:text-purple-400 transition-colors">
                GitHub
              </span>
            </a>

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&to=irfanullah137298@gmail.com"
              target="_blank"
              className="flex items-center gap-3 group cursor-pointer"
              id="contact"
            >
              <div className="p-2 rounded-full bg-gray-800 group-hover:bg-pink-600 transition-colors duration-300 shadow-md">
                <Mail
                  size={18}
                  className="text-white group-hover:scale-110 transition-transform"
                />
              </div>
              <span className="group-hover:text-pink-400 transition-colors">
                Email
              </span>
            </a>
          </div>
        </div>
      </div>{" "}
     
      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center">
        <p className="text-gray-500 text-sm font-bold">
          © {new Date().getFullYear()} PDFConverter — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
