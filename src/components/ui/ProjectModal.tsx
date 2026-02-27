"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/types/portfolio";
import Image from "next/image";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setCurrentImage(0);
  }, [project]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const nextImage = useCallback(() => {
    if (!project) return;
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  }, [project]);

  const prevImage = useCallback(() => {
    if (!project) return;
    setCurrentImage(
      (prev) => (prev - 1 + project.images.length) % project.images.length,
    );
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-modal rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto z-10"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors cursor-pointer"
            >
              <X size={20} className="text-white" />
            </button>

            {/* Image carousel */}
            <div className="relative">
              {/* Slider tab (macOS style dots) */}
              <div className="bg-card-header rounded-t-2xl px-4 py-2 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              <div className="relative bg-carousel aspect-video overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={project.images[currentImage]}
                      alt={`${project.title} screenshot ${currentImage + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Nav arrows */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors cursor-pointer"
                    >
                      <ChevronLeft size={20} className="text-white" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors cursor-pointer"
                    >
                      <ChevronRight size={20} className="text-white" />
                    </button>
                  </>
                )}

                {/* Image indicators */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImage(idx)}
                        className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                          idx === currentImage
                            ? "bg-white w-6"
                            : "bg-white/50 hover:bg-white/75"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-xl font-bold text-primary">
                  {project.title}
                </h3>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-500 hover:text-gold-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>

              <p className="text-secondary text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-4 justify-center">
                {project.technologies.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex flex-col items-center gap-1"
                  >
                    <i className={tech.class} style={{ fontSize: "2rem" }} />
                    <span className="text-xs text-muted">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
