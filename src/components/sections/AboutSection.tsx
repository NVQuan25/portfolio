"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/hooks/useLanguage";
import { sharedData } from "@/data/portfolio";

export default function AboutSection() {
  const { resumeData } = useLanguage();
  const { description_header, description, section_name } =
    resumeData.basic_info;
  const { image } = sharedData.basic_info;

  return (
    <section id="about" className="bg-primary py-8 overflow-hidden">
      <SectionTitle title={section_name.about} />

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="bg-card shadow-card rounded-lg p-4 rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <Image
                  src={`/images/${image}`}
                  alt="Ngo Van Quan"
                  width={200}
                  height={250}
                  className="rounded-sm object-cover"
                  priority
                />
                <div className="flex justify-center gap-3 mt-3 text-3xl text-primary">
                  <i className="devicon-react-original" />
                  <i className="devicon-nodejs-plain" />
                  <i className="devicon-nextjs-original-wordmark" />
                </div>
              </div>
              <div className="absolute -inset-2 -z-10 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-lg blur-lg" />
            </div>
          </motion.div>

          {/* About text card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 max-w-2xl"
          >
            <div className="bg-card shadow-card rounded-xl overflow-hidden">
              <div className="bg-card-header px-4 py-2 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="p-6 md:p-8">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl mb-4"
                >
                  <span className="inline-block">{description_header} 👋</span>
                </motion.p>
                <p className="text-secondary leading-relaxed text-base">
                  {description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
