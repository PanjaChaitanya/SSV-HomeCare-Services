// components/animations/FadeInRight.jsx
"use client";
import { motion } from "framer-motion";

export default function FadeInRight({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
