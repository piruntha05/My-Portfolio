import { motion } from "framer-motion";
import { Zap, Monitor } from "lucide-react";

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <section id="skills" className="relative bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-500 py-24 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(123,44,191,0.05),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          className="text-4xl font-extrabold mb-16 text-center"
        >
          Technical <span className="text-[#7B2CBF]">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Biomedical Skills */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6 text-[#7B2CBF]">
              <Zap size={32} />
              <h3 className="text-2xl font-bold">Biomedical</h3>
            </div>
            <motion.ul variants={container} initial="hidden" whileInView="show" className="space-y-3">
              {[
                "Biomedical instrumentation basics",
                "Medical equipment handling",
                "ECG, EMG, EEG monitoring",
                "Clinical laboratory procedures",
                "Equipment safety & maintenance"
              ].map((skill) => (
                <motion.li key={skill} variants={item} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7B2CBF]" /> {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* IT Skills */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-6 text-[#7B2CBF]">
              <Monitor size={32} />
              <h3 className="text-2xl font-bold">IT & Software</h3>
            </div>
            <motion.ul variants={container} initial="hidden" whileInView="show" className="space-y-3">
              {["MS Office Suite", "Basic Data Analysis", "Medical Software Familiarity", "AutoCAD Basics"].map((skill) => (
                <motion.li key={skill} variants={item} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7B2CBF]" /> {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}