'use client';

import { useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight, CheckCircle2, Server, Smartphone, Search, Database, Container, Activity } from 'lucide-react';
import { Project } from '@/types/project';

interface BurgerSosaFeaturedProps {
  project: Project;
  onSelectProject: (project: Project) => void;
}

export function BurgerSosaFeatured({ project, onSelectProject }: BurgerSosaFeaturedProps) {
  return (
    <div className="relative rounded-2xl bg-gradient-to-b from-[#0e1424] to-[#0a0d16] border border-[#1e2942] p-6 sm:p-10 space-y-8 shadow-2xl overflow-hidden">
      {/* Glow accent */}
      <div
        className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      {/* Header & Badges */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1c263c] pb-6">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Software real en producción
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#162035] text-slate-300 border border-[#22304f]">
              {project.category}
            </span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white flex items-center gap-3">
            {project.title}
          </h3>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm transition-colors shadow-lg shadow-emerald-500/20"
            >
              <span>Ver proyecto en vivo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <button
            onClick={() => onSelectProject(project)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#141c2e] hover:bg-[#1a253d] text-slate-200 border border-[#23314f] text-xs sm:text-sm transition-colors"
          >
            Ver arquitectura
          </button>
        </div>
      </div>

      {/* Description & Impact Quote */}
      <div className="space-y-4">
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
          {project.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {/* Card 1: Producción Real */}
          <div className="bg-[#0b0f1a] border border-[#1b253c] rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider">
              <Activity className="w-4 h-4" />
              <span>Producción real</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Desarrollado para resolver una necesidad comercial genuina, gestionando catálogo, pedidos diarios e inventario en vivo.
            </p>
          </div>

          {/* Card 2: Mobile-First */}
          <div className="bg-[#0b0f1a] border border-[#1b253c] rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider">
              <Smartphone className="w-4 h-4" />
              <span>Mobile-First</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pensado principalmente para usuarios móviles, priorizando una experiencia rápida, intuitiva y fluida desde dispositivos celulares.
            </p>
          </div>

          {/* Card 3: SEO e Indexación */}
          <div className="bg-[#0b0f1a] border border-[#1b253c] rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono uppercase tracking-wider">
              <Search className="w-4 h-4" />
              <span>SEO & Indexación</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Optimización completa para buscadores mediante meta-etiquetas semánticas, sitemap XML estructurado e indexación activa en Google.
            </p>
          </div>
        </div>
      </div>

      {/* Visual Diagrams: Backend & DevOps flows */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {/* Backend Architecture Diagram */}
        <div className="bg-[#0b0f19] border border-[#1b253c] rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between border-b border-[#182236] pb-2.5">
            <div className="flex items-center gap-2 text-slate-200 text-xs font-mono font-semibold">
              <Server className="w-4 h-4 text-emerald-400" />
              <span>Arquitectura Backend</span>
            </div>
            <span className="text-[11px] font-mono text-slate-500">Request Flow</span>
          </div>
          <div className="font-mono text-xs text-slate-300 py-2 leading-relaxed bg-[#080b12] rounded-lg p-3 border border-[#141b2b]">
            <div className="text-slate-200 font-semibold">React / TypeScript</div>
            <div className="text-emerald-400 pl-4">↓ HTTPS / REST</div>
            <div className="text-slate-300 pl-4 font-semibold">API Controllers</div>
            <div className="text-emerald-400 pl-8">↓ Validation & Guards</div>
            <div className="text-cyan-400 pl-8 font-semibold">NestJS Services</div>
            <div className="text-emerald-400 pl-12">↓ Prisma ORM</div>
            <div className="text-indigo-300 pl-12 font-semibold">PostgreSQL</div>
          </div>
        </div>

        {/* DevOps & Deployment Flow Diagram */}
        <div className="bg-[#0b0f19] border border-[#1b253c] rounded-xl p-5 space-y-3">
          <div className="flex items-center justify-between border-b border-[#182236] pb-2.5">
            <div className="flex items-center gap-2 text-slate-200 text-xs font-mono font-semibold">
              <Container className="w-4 h-4 text-cyan-400" />
              <span>DevOps / Deployment</span>
            </div>
            <span className="text-[11px] font-mono text-slate-500">Pipeline Flow</span>
          </div>
          <div className="font-mono text-xs text-slate-300 py-2 leading-relaxed bg-[#080b12] rounded-lg p-3 border border-[#141b2b]">
            <div className="text-slate-200 font-semibold">Git (Version Control)</div>
            <div className="text-cyan-400 pl-4">↓ Multi-stage Build</div>
            <div className="text-slate-300 pl-4 font-semibold">Docker Container</div>
            <div className="text-cyan-400 pl-8">↓ CI / Automated Build</div>
            <div className="text-emerald-400 pl-8 font-semibold">Deployment (Railway)</div>
            <div className="text-cyan-400 pl-12">↓ Healthcheck & SSL</div>
            <div className="text-emerald-400 pl-12 font-semibold">Production Live</div>
          </div>
        </div>
      </div>

      {/* Highlights Checklist */}
      <div className="space-y-3 pt-2">
        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
          Características destacadas
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs text-slate-300">
          {project.highlights.map((highlight, idx) => (
            <div key={idx} className="flex items-start gap-2 bg-[#0c101c] p-2.5 rounded-lg border border-[#182338]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Pills */}
      <div className="pt-2 border-t border-[#1c263c] flex flex-wrap items-center gap-2">
        <span className="text-xs font-mono text-slate-500 mr-2">Stack:</span>
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#111726] text-slate-300 border border-[#1e2a44]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
