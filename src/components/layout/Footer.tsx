"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Heart } from "lucide-react";
import { sharedData } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  github: Github,
  instagram: Instagram,
};

export default function Footer() {
  const { name, social } = sharedData.basic_info;

  return (
    <footer className="bg-accent py-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-6">
          {social.map((network) => {
            const Icon = iconMap[network.name] || Github;
            return (
              <motion.a
                key={network.name}
                href={network.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-primary hover:text-gold-600 transition-colors"
              >
                <Icon size={24} />
              </motion.a>
            );
          })}
        </div>

        <p className="text-sm text-secondary flex items-center justify-center gap-1">
          Made with <Heart size={14} className="text-red-500 fill-red-500" /> by{" "}
          <span className="font-semibold">{name}</span> &copy;{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
