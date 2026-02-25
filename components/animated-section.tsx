"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ className?: string; delay?: number; id?: string }>;

export function AnimatedSection({ children, className, delay = 0.15, id }: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
