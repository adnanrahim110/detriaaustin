"use client";

import { cn } from "@/utils/cn";
import { motion, useReducedMotion } from "framer-motion";

const variants = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "fade-up": {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
};

export const Reveal = ({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.6,
  className,
  once = true,
  amount = 0.2,
  as: Component = "div",
}) => {
  const shouldReduceMotion = useReducedMotion();
  const activeVariant = shouldReduceMotion
    ? variants.fade
    : variants[variant] || variants["fade-up"];
  const activeDuration = shouldReduceMotion ? 0.3 : duration;
  const activeDelay = shouldReduceMotion ? 0 : delay;

  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      variants={activeVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{
        duration: activeDuration,
        delay: activeDelay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={cn(className)}
    >
      {children}
    </MotionComponent>
  );
};
