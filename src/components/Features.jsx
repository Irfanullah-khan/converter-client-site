import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FileText,
  FileType,
  ShieldCheck,
  History,
  UploadCloud,
  Download,
} from "lucide-react";
import { href } from "react-router-dom";

export default function Features() {
    const navigate = useNavigate();
  const features = [
    {
      title: "DOCX → PDF",
      desc: "Convert DOCX into clean, high-quality PDFs in seconds.",
      icon: <FileText size={38} className="text-blue-400 glow-icon" />,
      isButton: true,
    },
    {
      title: "PDF → DOCX",
      desc: "Transform PDF documents into editable DOCX format effortlessly.",
      icon: <FileType size={38} className="text-purple-400 glow-icon" />,
      isButton: true,
    },
    {
      title: "Drag & Drop Upload",
      desc: "Drop files directly into the uploader — fast & intuitive.",
      icon: <UploadCloud size={38} className="text-orange-400 glow-icon" />,
      isButton: true,
    },
    {
      title: "History Viewer",
      desc: "View your last conversions (5–10) quickly anytime.",
      icon: <History size={38} className="text-yellow-400 glow-icon" />,
      
    },

    {
      title: "AI Auto Detect",
      desc: "Auto detect file type and choose the right conversion.",
      icon: <ShieldCheck size={38} className="text-green-400 glow-icon" />,
    },
    {
      title: "Download Files",
      desc: "Quickly download your converted files with one click.",
      icon: <Download size={38} className="text-cyan-400 glow-icon" />,
      
    },
  ];

  const btnRef = useRef(null);
  const [btnTransform, setBtnTransform] = useState({ x: 0, y: 0 });
  
  // Use object to store refs by index
  const featureRefs = React.useRef({});

  useEffect(() => {
    // Apply tilt effect to all feature cards
    Object.values(featureRefs.current).forEach((el) => {
      if (!el) return;

      function handleMove(e) {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const dx = (x - cx) / cx;
        const dy = (y - cy) / cy;

        el.style.transform = `perspective(900px) rotateX(${(-dy * 8).toFixed(
          2
        )}deg) rotateY(${(dx * 10).toFixed(2)}deg)`;

        const shine = el.querySelector(".card-shine");
        if (shine) {
          shine.style.opacity = 0.18;
          shine.style.backgroundPosition = `${50 + dx * 20}% ${
            50 + dy * 20
          }%`;
        }
      }

      function handleLeave() {
        el.style.transform = "";
        const shine = el.querySelector(".card-shine");
        if (shine) shine.style.opacity = 0;
      }

      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseleave", handleLeave);

      return () => {
        el.removeEventListener("mousemove", handleMove);
        el.removeEventListener("mouseleave", handleLeave);
      };
    });
  }, []);

  useEffect(() => {
    const el = btnRef.current;
    if (!el) return;

    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const mx = e.clientX - (rect.left + rect.width / 2);
      const my = e.clientY - (rect.top + rect.height / 2);
      const dist = Math.hypot(mx, my);

      if (dist < 120) setBtnTransform({ x: mx * 0.18, y: my * 0.12 });
      else setBtnTransform({ x: 0, y: 0 });
    }

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  function createRipple(e) {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX -
      button.getBoundingClientRect().left -
      radius}px`;
    circle.style.top = `${e.clientY -
      button.getBoundingClientRect().top -
      radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);
  }

  
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <style>{`
        .glow-icon {
          filter: drop-shadow(0px 0px 10px rgba(255,255,255,0.4));
          transition: 0.3s ease;
        }
        .glow-icon:hover {
          filter: drop-shadow(0px 0px 18px rgba(255,255,255,0.8));
        }
        .float-horizontal {
          animation: sideFloat 3s ease-in-out infinite;
        }
        @keyframes sideFloat {
          0% { transform: translateX(0); }
          50% { transform: translateX(12px); }
          100% { transform: translateX(0); }
        }
        .card-shine {
          position:absolute;
          inset:0;
          background:linear-gradient(
            120deg,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.25) 50%,
            rgba(255,255,255,0) 100%
          );
          background-size:200% 200%;
          opacity:0;
          transition:0.4s ease;
        }
        .neon:hover {
          box-shadow:0 15px 45px rgba(99,102,241,0.3);
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Powerful Conversion Features
        </h2>

        {/* AUTO: 3 cards top row + 3 cards second row */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            gap-10
            justify-items-center
          "
        >
          {features.map((f, i) => {
            return (
              <motion.div
                key={i}
                ref={(el) => {
                  if (el && !featureRefs.current[i]) {
                    featureRefs.current[i] = el;
                  }
                }}
                className="w-full max-w-[340px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div
                  className="relative rounded-2xl p-[2px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"
                >
                  <div className="card-shine" />

                  <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 neon">
                    <div className="flex flex-col items-center">
                      <motion.div
                        className="float-horizontal mb-4"
                        animate={{ x: [0, 12, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        {f.icon}
                      </motion.div>

                      <h3 className="text-lg font-semibold text-gray-800">
                        {f.title}
                      </h3>

                      <p className="text-gray-600 text-sm mt-3 text-center">
                        {f.desc}
                      </p>

                      {f.isButton && (
                        <div className="mt-5 flex justify-center">
                          <motion.button
                           onClick={() => navigate("/upload")}
                            ref={btnRef}
                            onMouseDown={createRipple}
                            style={{
                              transform: `translate(${btnTransform.x}px, ${btnTransform.y}px)`,
                            }}
                            whileHover={{ scale: 1.04 }}
                            className="px-5 py-2 rounded-lg mag-btn text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
                          >
                            Convert Now ➜
                          </motion.button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
