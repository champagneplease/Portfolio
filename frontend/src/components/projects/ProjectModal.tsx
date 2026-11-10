'use client';

import { useEffect } from 'react';
import { X, ExternalLink, Server, Container, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { Project } from '@/types/project';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0d121d] border border-[#1e2a42] rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-[#1b253b] pb-4">
          <div className="space-y-1">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
              {project.category}
            </span>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-[#18233a] transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Long Description */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase text-slate-400">Contexto y solución técnica</h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Architecture Flow */}
        {project.architectureFlow && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300 font-semibold">
              <Server className="w-3.5 h-3.5 text-emerald-400" />
              <span>Flujo de Arquitectura</span>
            </div>
            <pre className="font-mono text-xs text-slate-300 bg-[#080b12] p-4 rounded-xl border border-[#162033] overflow-x-auto whitespace-pre leading-relaxed">
              {project.architectureFlow}
            </pre>
          </div>
        )}

        {/* DevOps Pipeline */}
        {project.devopsFlow && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300 font-semibold">
              <Container className="w-3.5 h-3.5 text-cyan-400" />
              <span>Pipeline DevOps / Deployment</span>
            </div>
            <pre className="font-mono text-xs text-slate-300 bg-[#080b12] p-4 rounded-xl border border-[#162033] overflow-x-auto whitespace-pre leading-relaxed">
              {project.devopsFlow}
            </pre>
          </div>
        )}

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase text-slate-400">Puntos Clave</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div className="space-y-2 pt-2 border-t border-[#1b253b]">
          <h4 className="text-xs font-mono uppercase text-slate-400">Tecnologías</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded text-xs font-mono bg-[#121929] text-slate-300 border border-[#1f2d47]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#1b253b]">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#141d2f] hover:bg-[#1a263d] text-slate-200 border border-[#22304d] text-xs font-medium transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Ver código</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-semibold transition-colors"
            >
              <span>Ver proyecto</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
