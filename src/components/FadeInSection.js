// src/components/FadeInSection.js
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeInSection({ children, delay = 0 }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // make this slightly more forgiving
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
