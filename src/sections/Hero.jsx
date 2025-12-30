// src/sections/Hero.jsx
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";

/* ANIMATION VARIANTS */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  // Handle Smooth Scroll Function
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-500">
      
      {/* DYNAMIC BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(123,44,191,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(123,44,191,0.2),transparent_50%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
        
        {/* LEFT — ENHANCED IMAGE BOX */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-start order-2 md:order-1"
        >
          <div className="relative">
            {/* PURPLE GLOW BEHIND IMAGE */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#7B2CBF] to-[#9D4EDD] rounded-full blur-xl opacity-40 animate-pulse"></div>
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl">
              <img
                src="/profile.jpg" 
                alt="Piruntha Thevathas"
                className="w-full h-full object-cover"
              />
            </div>

            {/* ROTATING DECORATIVE RING */}
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
               className="absolute -inset-6 border-2 border-dashed border-[#7B2CBF]/40 rounded-full"
            />
          </div>
        </motion.div>

        {/* RIGHT — TEXT CONTENT */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center md:text-left order-1 md:order-2"
        >
          <motion.p variants={item} className="text-[#7B2CBF] font-bold tracking-[0.3em] mb-4 text-sm md:text-base">
            WELCOME TO MY PORTFOLIO
          </motion.p>
          
          <motion.h1 variants={item} className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight leading-tight">
            I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7B2CBF] to-[#9D4EDD]">Piruntha</span>
            <br />
            Thevathas
          </motion.h1>

          <motion.h2 variants={item} className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400 mb-8">
            Undergraduate <span className="text-[#7B2CBF]">|</span> Biomedical Technology
          </motion.h2>

          {/* ACTION BUTTONS */}
          <motion.div variants={item} className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/resume/Piruntha_Thevathas_Biomedical_Technology_Resume.pdf"
              download="Piruntha_Thevathas_Resume.pdf"
              className="flex items-center gap-2 px-8 py-4 bg-[#7B2CBF] text-white rounded-xl font-bold shadow-xl hover:bg-[#6a25a7] hover:-translate-y-1 transition-all"
            >
              <Download size={20} />
              DOWNLOAD CV
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-slate-200 dark:border-slate-800 rounded-xl font-bold hover:border-[#7B2CBF] dark:hover:border-[#7B2CBF] hover:-translate-y-1 transition-all"
            >
              <Mail size={20} />
              CONTACT ME
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* SCROLL DOWN INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer group"
      >
        <div className="flex flex-col items-center gap-2">
           <span className="text-[10px] tracking-[0.2em] text-[#7B2CBF] opacity-0 group-hover:opacity-100 transition-opacity uppercase font-bold">Scroll</span>
           <div className="w-6 h-10 border-2 border-[#7B2CBF] rounded-full flex justify-center p-1">
             <motion.div 
               animate={{ y: [0, 12, 0] }}
               transition={{ repeat: Infinity, duration: 2 }}
               className="w-1.5 h-1.5 bg-[#7B2CBF] rounded-full" 
             />
           </div>
        </div>
      </motion.div>
    </section>
  );
}