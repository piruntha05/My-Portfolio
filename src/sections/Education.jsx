// src/sections/Education.jsx
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export default function Education() {
  const subjects = ["Human Biology", "Anatomy & Physiology", "Biomedical Instrumentation", "Chemical Sensors", "Digital Electronics", "AutoCAD"];

  return (
    <section id="education" className="relative min-h-screen flex items-center bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-500 overflow-hidden py-24">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#7B2CBF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-extrabold inline-block relative">
            Education
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              className="absolute -bottom-2 left-0 h-1 bg-[#7B2CBF] rounded-full" 
            />
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative pl-8 border-l-2 border-[#7B2CBF]/30"
        >
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#7B2CBF] shadow-[0_0_10px_#7B2CBF]" />

          <div className="bg-slate-50 dark:bg-slate-900/40 backdrop-blur-sm p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl hover:shadow-purple-500/10 transition-all">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#7B2CBF]">BHSc (Hons) in Biomedical Technology</h3>
                <div className="flex items-center gap-2 mt-2 text-slate-500 dark:text-slate-400">
                  <MapPin size={16} />
                  <span>Gampaha Wickramarachchi University, Sri Lanka</span>
                </div>
              </div>
              <div className="px-4 py-2 bg-[#7B2CBF]/10 text-[#7B2CBF] rounded-full text-sm font-bold flex items-center gap-2">
                <Calendar size={14} />
                2023 – 2027 (Expected)
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Currently in my 2nd year, focusing on the integration of engineering principles with biological sciences.
            </p>

            <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400 mb-4">Core Focus Areas</h4>
            <div className="flex flex-wrap gap-3">
              {subjects.map((subject, i) => (
                <motion.span
                  key={subject}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="px-4 py-2 rounded-xl text-sm font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
                >
                  {subject}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}