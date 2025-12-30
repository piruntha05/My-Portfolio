// src/sections/Projects.jsx
import { motion } from "framer-motion";
import { Activity, BookOpen } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Bio-Signal Monitoring System",
      desc: "Developed a heart rate, EEG, and EMG monitoring system using sensor integration and data observation techniques.",
      icon: <Activity className="text-[#7B2CBF]" />
    },
    {
      title: "Equipment Study Project",
      desc: "Detailed study on working principles of ECG and pulse oximeters, including technical documentation.",
      icon: <BookOpen className="text-[#7B2CBF]" />
    }
  ];

  return (
    <section id="projects" className="relative bg-white dark:bg-black py-24 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-12 text-center dark:text-white">Academic <span className="text-[#7B2CBF]">Projects</span></h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg"
            >
              <div className="mb-4 p-3 bg-[#7B2CBF]/10 w-fit rounded-2xl">{p.icon}</div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{p.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}