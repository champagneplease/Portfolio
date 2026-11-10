'use client';

import { useState, useEffect } from 'react';
import { Hero } from '@/components/hero/Hero';
import { AboutSection } from '@/components/about/AboutSection';
import { PhilosophySection } from '@/components/philosophy/PhilosophySection';
import { BurgerSosaFeatured } from '@/components/projects/BurgerSosaFeatured';
import { SecondaryProjectsGrid } from '@/components/projects/SecondaryProjectsGrid';
import { DevOpsSection } from '@/components/devops/DevOpsSection';
import { TechnologiesSection } from '@/components/technologies/TechnologiesSection';
import { ProductionJourney } from '@/components/journey/ProductionJourney';
import { LookingForSection } from '@/components/seeking/LookingForSection';
import { HardProblemsSection } from '@/components/challenges/HardProblemsSection';
import { ContactSection } from '@/components/contact/ContactSection';
import { ProjectModal } from '@/components/projects/ProjectModal';
import { fetchProjects } from '@/lib/api';
import { Project } from '@/types/project';
import { PROJECTS_DATA } from '@/lib/projects-data';

export default function Home() {
  const [projects, setProjects] = useState<Project[]>(PROJECTS_DATA);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isFromApi, setIsFromApi] = useState(false);

  useEffect(() => {
    async function loadProjects() {
      const result = await fetchProjects();
      setProjects(result.projects);
      setIsFromApi(result.fromApi);
    }
    loadProjects();
  }, []);

  const featuredProject =
    projects.find((p) => p.featured) || projects[0] || PROJECTS_DATA[0];

  return (
    <div id="top" className="min-h-screen bg-[#090a0f] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      <main className="relative">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Sobre mí */}
        <AboutSection />

        {/* 3. Enfoque / Cómo pienso */}
        <PhilosophySection />

        {/* 4 & 5. Proyectos */}
        <section id="proyectos" className="py-20 px-4 sm:px-6 border-t border-[#161c2b]">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Section Header */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                  03 / Experiencia práctica
                </span>
                {isFromApi && (
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live NestJS API
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
                Proyectos
              </h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
                Desde servicios backend experimentales hasta una aplicación gastronómica completa desplegada en producción real.
              </p>
            </div>

            {/* Featured Project: Burger Sosa */}
            <BurgerSosaFeatured
              project={featuredProject}
              onSelectProject={(p) => setSelectedProject(p)}
            />

            {/* Secondary Projects Grid */}
            <SecondaryProjectsGrid
              projects={projects}
              onSelectProject={(p) => setSelectedProject(p)}
            />
          </div>
        </section>

        {/* 6. DevOps & Infraestructura */}
        <DevOpsSection />

        {/* 7. Tecnologías */}
        <TechnologiesSection />

        {/* 8. De proyectos a producción */}
        <ProductionJourney />

        {/* 9. Qué estoy buscando */}
        <LookingForSection />

        {/* 10. Retos y problemas */}
        <HardProblemsSection />

        {/* 11. Contacto */}
        <ContactSection />
      </main>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
