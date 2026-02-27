"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Search } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectModal from "@/components/ui/ProjectModal";
import { useLanguage } from "@/hooks/useLanguage";
import type { Project } from "@/types/portfolio";

export default function ProjectsSection() {
  const { resumeData, language } = useLanguage();
  const { projects, basic_info } = resumeData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const t = {
    search: language === "en" ? "Search projects..." : "Tìm kiếm dự án...",
    all: language === "en" ? "All" : "Tất cả",
    noResults:
      language === "en" ? "No projects found." : "Không tìm thấy dự án.",
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("all");

  // Extract unique years sorted ascending
  const years = useMemo(() => {
    const uniqueYears = [...new Set(projects.map((p) => p.startDate))];
    return uniqueYears.sort((a, b) => Number(a) - Number(b));
  }, [projects]);

  // Filter & sort projects
  const filteredProjects = useMemo(() => {
    return projects
      .filter((project) => {
        const matchesSearch = project.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
        const matchesYear =
          selectedYear === "all" || project.startDate === selectedYear;
        return matchesSearch && matchesYear;
      })
      .sort((a, b) => Number(a.startDate) - Number(b.startDate));
  }, [projects, searchQuery, selectedYear]);

  return (
    <section id="projects" className="bg-accent py-8 pb-16">
      <SectionTitle title={basic_info.section_name.projects} />

      <div className="max-w-7xl mx-auto px-4">
        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mb-8 max-w-2xl mx-auto">
          {/* Search input */}
          <div className="relative flex-1 w-full">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.search}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-card border border-theme text-primary text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-gold-500/50 transition-all"
            />
          </div>

          {/* Year filter chips */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <button
              onClick={() => setSelectedYear("all")}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedYear === "all"
                  ? "bg-gold-500 text-white"
                  : "bg-card border border-theme text-secondary hover:text-gold-500 hover:border-gold-500/50"
              }`}
            >
              {t.all}
            </button>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  selectedYear === year
                    ? "bg-gold-500 text-white"
                    : "bg-card border border-theme text-secondary hover:text-gold-500 hover:border-gold-500/50"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedProject(project)}
                  className="bg-card rounded-xl overflow-hidden shadow-card cursor-pointer group"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0">
                      <div className="bg-dark-400 text-white text-xs px-4 py-1.5 text-center font-medium tracking-wide">
                        {project.startDate}
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wider text-center line-clamp-1">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted py-12 text-sm"
          >
            {t.noResults}
          </motion.p>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
