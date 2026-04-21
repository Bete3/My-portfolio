"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
} & MotionProps;

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  ...props
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.22 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
