"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Server, Cloud, Database, Wrench } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/hooks/useLanguage";

interface SkillItem {
  name: string;
  class: string;
}

interface SkillCategory {
  labelEn: string;
  labelVn: string;
  icon: React.ElementType;
  skills: SkillItem[];
  direction: "left" | "right";
}

const skillCategories: SkillCategory[] = [
  {
    labelEn: "Frontend",
    labelVn: "Frontend",
    icon: Code2,
    direction: "left",
    skills: [
      { name: "React", class: "devicon-react-original colored" },
      { name: "Next.js", class: "devicon-nextjs-original-wordmark" },
      { name: "TypeScript", class: "devicon-typescript-plain colored" },
      { name: "JavaScript", class: "devicon-javascript-plain colored" },
      { name: "HTML 5", class: "devicon-html5-plain colored" },
      { name: "CSS 3", class: "devicon-css3-plain colored" },
      { name: "TailwindCSS", class: "devicon-tailwindcss-original colored" },
      { name: "Sass", class: "devicon-sass-original colored" },
      { name: "Bootstrap", class: "devicon-bootstrap-plain colored" },
      { name: "Redux", class: "devicon-redux-original colored" },
    ],
  },
  {
    labelEn: "Backend",
    labelVn: "Backend",
    icon: Server,
    direction: "right",
    skills: [
      { name: "Node.js", class: "devicon-nodejs-plain colored" },
      { name: "NestJS", class: "devicon-nestjs-plain colored" },
      { name: "Express", class: "devicon-express-original-wordmark" },
      { name: "Prisma", class: "devicon-prisma-original" },
    ],
  },
  {
    labelEn: "Database",
    labelVn: "Cơ sở dữ liệu",
    icon: Database,
    direction: "left",
    skills: [
      { name: "PostgreSQL", class: "devicon-postgresql-plain colored" },
      { name: "MongoDB", class: "devicon-mongodb-plain colored" },
      { name: "SQL", class: "devicon-azuresqldatabase-plain colored" },
    ],
  },
  {
    labelEn: "DevOps & Tools",
    labelVn: "DevOps & Công cụ",
    icon: Cloud,
    direction: "right",
    skills: [
      { name: "Docker", class: "devicon-docker-plain colored" },
      { name: "GitHub", class: "devicon-github-original" },
      { name: "Figma", class: "devicon-figma-plain colored" },
    ],
  },
];

function MarqueeRow({
  skills,
  direction,
}: {
  skills: SkillItem[];
  direction: "left" | "right";
}) {
  // Duplicate skills for seamless loop
  const duplicated = [...skills, ...skills];

  return (
    <div className="overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-dark-section to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-dark-section to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          duration: skills.length * 3,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicated.map((skill, idx) => (
          <motion.div
            key={`${skill.name}-${idx}`}
            whileHover={{ scale: 1.08, y: -4 }}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] hover:border-gold-500/40 hover:bg-white/[0.1] transition-all duration-300 cursor-default group"
          >
            <i className={skill.class} style={{ fontSize: "1.4rem" }} />
            <span className="text-sm font-medium text-white/80 group-hover:text-gold-400 transition-colors whitespace-nowrap">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default function SkillsSection() {
  const { resumeData, language } = useLanguage();
  const sectionName = resumeData.basic_info.section_name.skills;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="bg-dark-section py-8 pb-16">
      <SectionTitle title={sectionName} light />

      <div ref={ref} className="max-w-6xl mx-auto px-4 space-y-10">
        {skillCategories.map((category, catIndex) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.labelEn}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.15 }}
              className="space-y-4"
            >
              {/* Category label */}
              <div className="flex items-center gap-2 pl-2">
                <Icon size={16} className="text-gold-500" />
                <span className="text-xs font-semibold uppercase tracking-[3px] text-gold-500/80">
                  {language === "en" ? category.labelEn : category.labelVn}
                </span>
                <div className="flex-1 h-px bg-white/[0.06]" />
              </div>

              {/* Marquee row */}
              <MarqueeRow
                skills={category.skills}
                direction={category.direction}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
