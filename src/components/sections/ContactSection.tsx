"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Github } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/hooks/useLanguage";
import { sharedData } from "@/data/portfolio";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    getValue: () => sharedData.basic_info.phone,
    getHref: () => `tel:${sharedData.basic_info.phone}`,
  },
  {
    icon: Mail,
    label: "Mail",
    getValue: () => sharedData.basic_info.email,
    getHref: () => `mailto:${sharedData.basic_info.email}`,
  },
  {
    icon: Github,
    label: "Github",
    getValue: () => sharedData.basic_info.github,
    getHref: () => sharedData.basic_info.github,
    external: true,
  },
];

export default function ContactSection() {
  const { resumeData } = useLanguage();
  const sectionName = resumeData.basic_info.section_name.contact;

  return (
    <section id="contact" className="bg-dark-section py-8 pb-16">
      <SectionTitle title={sectionName} light />

      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.getHref()}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(174, 148, 79, 0.2)",
                }}
                className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-gold-500/50 transition-all cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/30 transition-colors">
                  <Icon
                    size={24}
                    className="text-gold-400 group-hover:text-gold-300 transition-colors"
                  />
                </div>

                <span className="text-sm font-semibold text-white">
                  {item.label}
                </span>

                <span className="text-xs text-white/60 group-hover:text-gold-400 transition-colors text-center break-all">
                  {item.getValue()}
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
