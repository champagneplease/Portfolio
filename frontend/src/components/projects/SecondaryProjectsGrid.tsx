'use client';

import { ExternalLink, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { Project } from '@/types/project';

interface SecondaryProjectsGridProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export function SecondaryProjectsGrid({
  projects,
  onSelectProject,
}: SecondaryProjectsGridProps) {
  // Exclude featured project (Burger Sosa)
  const secondaryProjects = projects.filter((p) => !p.featured);

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100">
          Otros proyectos y experimentación
        </h3>
        <p className="text-sm text-slate-400">
          Proyectos desarrollados para profundizar en APIs REST, persistencia, autenticación y seguridad en Python y Node.js.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {secondaryProjects.map((project) => (
          <div
            key={project.id}
            className="group relative rounded-xl bg-[#0c101b] border border-[#1b2438] hover:border-[#2b3a59] transition-all p-6 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              {/* Category & Links */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 font-medium">{project.category}</span>
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-slate-400 hover:text-slate-100 hover:bg-[#161f33] rounded transition-colors"
                      title="Ver repositorio en GitHub"
                      aria-label={`Ver código fuente de ${project.title} en GitHub`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-emerald-400 hover:text-emerald-300 hover:bg-[#161f33] rounded transition-colors"
                      title="Ver demo en vivo"
                      aria-label={`Ver demo en vivo de ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title */}
              <h4 className="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h4>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Tags & Detail Button */}
            <div className="pt-3 border-t border-[#172033] flex items-center justify-between gap-2">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#111726] text-slate-400 border border-[#1b253b]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onSelectProject(project)}
                className="text-xs font-mono text-slate-400 hover:text-emerald-400 flex items-center gap-1 transition-colors shrink-0"
              >
                <span>Detalles</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
