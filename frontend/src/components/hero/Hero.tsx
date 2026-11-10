'use client';

import { ArrowDown, ArrowUpRight, Mail, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { TerminalSnippet } from './TerminalSnippet';

export function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 sm:px-6 overflow-hidden">
      {/* Subtle ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Core Identity */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-[#111723] border border-[#1e273a] text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Disponible para nuevos desafíos</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-emerald-400 font-mono text-sm tracking-wide">
              Hola, soy Nacho Miranda.
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100">
              Backend Developer
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-medium pt-1">
              Estudiante de Desarrollo de Software enfocado en{' '}
              <span className="text-slate-100">Backend, APIs, arquitectura y DevOps.</span>
            </p>
          </div>

          {/* Subtitle / Philosophy Statement */}
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
            Me interesa construir software que no solo funcione, sino que pueda{' '}
            <span className="text-slate-200">crecer, desplegarse y mantenerse correctamente en producción</span>.
          </p>

          {/* CTAs & Social Links */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 text-slate-950 font-semibold text-sm hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/10"
            >
              Ver proyectos
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111624] text-slate-200 font-medium text-sm border border-[#1e273a] hover:bg-[#172033] hover:text-white transition-colors"
            >
              Contactarme
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pl-2">
              <a
                href="https://github.com/champagneplease"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-400 hover:text-slate-100 hover:bg-[#121724] border border-transparent hover:border-[#1e273a] rounded-lg transition-colors"
                title="GitHub: @champagneplease"
                aria-label="GitHub de Nacho Miranda"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/nacho-miranda"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-slate-400 hover:text-slate-100 hover:bg-[#121724] border border-transparent hover:border-[#1e273a] rounded-lg transition-colors"
                title="LinkedIn: Nacho Miranda"
                aria-label="LinkedIn de Nacho Miranda"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:contactonachomiranda@gmail.com"
                className="p-2.5 text-slate-400 hover:text-slate-100 hover:bg-[#121724] border border-transparent hover:border-[#1e273a] rounded-lg transition-colors"
                title="Email: contactonachomiranda@gmail.com"
                aria-label="Enviar email a Nacho Miranda"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Terminal Detail */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <TerminalSnippet />
        </div>
      </div>
    </section>
  );
}
