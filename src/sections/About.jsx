// src/sections/About.jsx
import { motion } from "framer-motion";
import { User, GraduationCap, Microscope, Rocket } from "lucide-react";

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(123,44,191,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_70%,rgba(123,44,191,0.12),transparent_50%)]" />

      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#7B2CBF]/10 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                className="h-1 bg-[#7B2CBF] rounded-full" 
              />
              <span className="text-[#7B2CBF] font-bold tracking-widest text-sm uppercase">About Me</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Bridging Technology <br />
              & <span className="text-[#7B2CBF]">Healthcare</span>
            </h2>

            <div className="grid grid-cols-2 gap-4 mt-12 opacity-50">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="h-24 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-800 flex items-center justify-center"
              >
                <Microscope className="text-[#7B2CBF]" size={32} />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="h-24 rounded-2xl bg-[#7B2CBF]/5 flex items-center justify-center"
              >
                <Rocket className="text-[#7B2CBF]" size={32} />
              </motion.div>
            </div>
          </motion.div>

          <div className="lg:col-span-3 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed italic border-l-4 border-[#7B2CBF] pl-6">
                "Driven by the intersection of engineering and life sciences, I am dedicated to exploring how modern technology can transform patient care."
              </p>
              
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
               I am an undergraduate **Biomedical Technology** student with a strong interest in medical devices, 
                diagnostic systems, and healthcare technology. Currently gaining deep theoretical knowledge 
                and hands-on laboratory experience, I focus on understanding the mechanics behind life-saving innovations.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              {[
                { icon: <GraduationCap size={28}/>, title: "Education", desc: "BSc in Biomedical Technology" },
                { icon: <User size={28}/>, title: "Focus", desc: "Medical Diagnostic Systems" }
              ].map((card, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-[#7B2CBF] transition-all group shadow-sm"
                >
                  <div className="text-[#7B2CBF] mb-4 group-hover:scale-110 transition-transform">{card.icon}</div>
                  <h4 className="font-bold mb-1 dark:text-white">{card.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}