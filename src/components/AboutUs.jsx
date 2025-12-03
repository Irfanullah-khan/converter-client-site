import { motion } from "framer-motion";
import { Shield, Zap, FileCog } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">

      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-600/10 to-pink-500/10 blur-3xl opacity-40"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-extrabold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        >
          About Us
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed"
        >
          PDFConverter is designed to make file conversion simple, fast, and reliable.
          Our goal is to remove the frustration from converting documents while 
          maintaining clean formatting and secure handling.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl p-[2px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-xl"
          >
            <div className="bg-black/70 backdrop-blur-xl rounded-2xl p-7 h-full">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 rounded-full bg-blue-600/20 border border-blue-600/40">
                  <Shield size={38} className="text-blue-400" />
                </div>

                <h3 className="text-xl font-semibold text-white">Secure & Private</h3>
                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  Your files are processed securely and never stored permanently —
                  ensuring complete privacy.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl p-[2px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-xl"
          >
            <div className="bg-black/70 backdrop-blur-xl rounded-2xl p-7 h-full">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 rounded-full bg-purple-600/20 border border-purple-600/40">
                  <Zap size={38} className="text-purple-400" />
                </div>

                <h3 className="text-xl font-semibold text-white">Fast Conversion</h3>
                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  Convert files in seconds with our optimized, high-performance engine.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative rounded-2xl p-[2px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-xl"
          >
            <div className="bg-black/70 backdrop-blur-xl rounded-2xl p-7 h-full">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 rounded-full bg-pink-600/20 border border-pink-600/40">
                  <FileCog size={38} className="text-pink-400" />
                </div>

                <h3 className="text-xl font-semibold text-white">Smart Auto-Detect</h3>
                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  Upload your file — our system detects the format and picks the right
                  conversion mode instantly.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
