"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, ChevronDown } from "lucide-react";
import TypeWriter from "@/components/ui/TypeWriter";
import { sharedData } from "@/data/portfolio";

export default function HeroSection() {
  const { name, titles } = sharedData.basic_info;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-gold-400/10 blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-gold-300/10 blur-3xl"
        />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <Code2
            size={80}
            className="mx-auto mb-6 text-muted"
            strokeWidth={1.5}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-primary mb-4 tracking-tight"
        >
          {name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-12 flex items-center justify-center"
        >
          <TypeWriter
            words={titles.map((t) => t.toUpperCase())}
            className="text-xl md:text-2xl font-light text-secondary tracking-widest"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1.5 },
            y: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            },
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <Link
            href="/about"
            className="text-secondary hover:text-gold-500 transition-colors"
          >
            <ChevronDown size={32} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
