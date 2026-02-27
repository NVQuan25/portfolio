"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("text-center pt-16 pb-10", className)}
    >
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold uppercase tracking-[3px]",
          light ? "text-white" : "text-primary",
        )}
      >
        {title}
      </h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "60px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="h-[3px] bg-gold-500 mx-auto mt-4 rounded-full"
      />
    </motion.div>
  );
}
