// src/sections/Contact.jsx
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    { icon: <MapPin size={20}/>, text: "Yakkala, Gampaha, Sri Lanka", link: "#" },
    { icon: <Mail size={20}/>, text: "pirunthat2003@gmail.com", link: "mailto:pirunthat2003@gmail.com" },
    { icon: <Phone size={20}/>, text: "+94 76 384 7859", link: "tel:+94763847859" },
    { icon: <Linkedin size={20}/>, text: "linkedin.com/in/thevathas-piruntha", link: "https://linkedin.com/in/thevathas-piruntha" }
  ];

  return (
    <section id="contact" className="relative bg-white dark:bg-black py-24 transition-colors duration-500 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#7B2CBF]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}>
          <h2 className="text-4xl font-extrabold mb-4 dark:text-white">Get In <span className="text-[#7B2CBF]">Touch</span></h2>
          <p className="text-slate-500 dark:text-slate-400 mb-12">I am currently seeking internship opportunities. Let's connect!</p>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info, i) => (
              <motion.a
                key={i}
                href={info.link}
                target={info.text.includes("linkedin") ? "_blank" : "_self"}
                rel="noreferrer"
                whileHover={{ y: -5, borderColor: "#7B2CBF" }}
                className="flex items-center gap-4 p-6 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl transition-all"
              >
                <div className="text-[#7B2CBF]">{info.icon}</div>
                <span className="text-sm font-medium dark:text-slate-300 truncate">{info.text}</span>
              </motion.a>
            ))}
          </div>

          <motion.div className="mt-16">
            <a 
              href="mailto:pirunthat2003@gmail.com"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#7B2CBF] text-white rounded-full font-bold shadow-xl hover:bg-[#6a25a7] transition-all"
            >
              <Send size={18} /> Say Hello
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}