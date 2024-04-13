"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

type props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export const Wiggle = ({ children, className, delay }: props) => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      animate={{ rotate: [-3, 3] }}
      transition={{ repeat: Infinity, duration: 1, repeatType: "reverse", delay: delay}}
      className={className}
    >
      {children}
    </motion.div>
  );
};