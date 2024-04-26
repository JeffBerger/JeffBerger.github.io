"use client";

import { motion } from "framer-motion";

type props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export const Wiggle = ({ children, className, delay }: props) => {

  return (
    <motion.div
      animate={{ rotate: [-3, 3] }}
      transition={{ repeat: Infinity, duration: 1, repeatType: "reverse", delay: delay}}
      className={className}
    >
      {children}
    </motion.div>
  );
};