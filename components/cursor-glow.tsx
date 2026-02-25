"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { PropsWithChildren, useEffect } from "react";

export function CursorGlow({ children }: PropsWithChildren) {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { damping: 35, stiffness: 280 });
  const smoothY = useSpring(y, { damping: 35, stiffness: 280 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      x.set(event.clientX - 80);
      y.set(event.clientY - 80);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <div className="relative">
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-20 h-40 w-40 rounded-full bg-accent/20 blur-2xl"
        style={{ x: smoothX, y: smoothY }}
      />
      {children}
    </div>
  );
}
