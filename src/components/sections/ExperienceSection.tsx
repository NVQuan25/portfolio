"use client";

import { motion } from "framer-motion";
import { Briefcase, Clock } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/hooks/useLanguage";

export default function ExperienceSection() {
  const { resumeData } = useLanguage();
  const { experience, basic_info } = resumeData;
  const sectionName = basic_info.section_name.experience;

  if (!experience) return null;

  return (
    <section id="experience" className="bg-accent py-8 pb-16">
      <SectionTitle title={sectionName} />

      <div className="max-w-3xl mx-auto px-4">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gold-500/30" />

          {experience.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex items-start gap-4 mb-10 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center shadow-lg"
                >
                  <Briefcase size={18} className="text-white" />
                </motion.div>
              </div>

              {/* Content card */}
              <div
                className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                  }}
                  className="bg-card rounded-xl p-5 shadow-card transition-all"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {work.mainTech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-gold-500 text-white rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-base font-bold text-primary mb-1">
                    {work.title}
                  </h3>

                  <h4 className="text-sm text-secondary mb-1">
                    {work.company}
                  </h4>

                  <div className="flex items-center gap-1 text-xs text-muted mb-3">
                    <Clock size={12} />
                    <span>{work.years}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {work.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[10px] font-medium bg-tech-badge text-tech-badge rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}

          {/* End dot */}
          <div className="absolute left-5 md:left-1/2 -translate-x-1/2 bottom-0">
            <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center shadow-lg">
              <Clock size={18} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
