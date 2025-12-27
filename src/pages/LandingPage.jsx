import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Features from "../components/Features";
import { motion } from "framer-motion";
import AboutUs from "../components/AboutUs";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-b from-blue-100 to-white">
        {/* 🔵 Animated Gradient Background Blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full blur-[110px] opacity-40 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400 rounded-full blur-[120px] opacity-40 animate-pulse delay-300"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center relative z-10">
          {/* 🟣 LEFT SIDE CONTENT */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-white/40 p-6 md:p-10 rounded-2xl shadow-xl border border-white/40"
          >
            <h1 className="text-5xl font-extrabold leading-tight text-gray-800">
              Convert Your Files
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Easily & Instantly
              </span>
            </h1>

            <p className="text-lg text-gray-700 mt-4">
              Transform PDF to DOCX & DOCX to PDFI with our fast, secure & AI-powered
              tool.
            </p>

            {/* 🔥 CTA BUTTON */}
<motion.button
  onClick={() => navigate("/upload")}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  className="inline-block mt-6 px-8 py-3 rounded-lg font-semibold text-white 
             bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg 
             hover:shadow-blue-300 transition-all"
>
  Start Converting →
</motion.button>
          </motion.div>

          {/* 🟣 RIGHT SIDE IMAGE */}
          <motion.img
            src="/c2.png"
            alt="converter"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="w-[420px] mx-auto drop-shadow-2xl animate-floating"
          />
        </div>

        {/* Floating animation keyframes */}
        <style>{`
    @keyframes floating {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-12px); }
    }
    .animate-floating {
      animation: floating 4s ease-in-out infinite;
    }
  `}</style>
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <Footer />
    </>
  );
}
