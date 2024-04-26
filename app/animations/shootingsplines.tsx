"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import React, { useRef, useEffect } from "react";

type props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export const SlideIn = ({ children, className, delay }: props) => {
  const ref = useRef(null);
  const isInview = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInview) {
      controls.start("stop");
    }
  }, [controls, isInview]);

  return (
    <motion.div
      ref={ref}
      variants={{
        start: { opacity: 0, translateY: 10 },
        stop: { opacity: 1, translateY: 0 },
      }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: delay,
        stiffness: 0.5,
      }}
      animate={controls}
      initial="start"
      className={className}
    >
      {children}
    </motion.div>
  );
};