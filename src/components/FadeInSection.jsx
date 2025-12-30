// src/components/FadeInSection.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FadeInSection({ children }) {
  const ref = useRef(null);
  // trigger once: true means it won't hide again when you scroll up
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Smooth cubic-bezier
      }}
    >
      {children}
    </motion.div>
  );
}