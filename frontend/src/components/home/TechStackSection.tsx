'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface TechItem {
  name: string;
  role: string;
  iconSrc: string;
  invert?: boolean;
  featured?: boolean;
  badge?: string;
}

const BACKEND_STACK: TechItem[] = [
  {
    name: 'NestJS',
    role: 'Framework MVC & OOP',
    iconSrc: '/assets/icons/demo/nestjs.svg',
    featured: true,
    badge: 'Foco Principal',
  },
  {
    name: 'Node.js',
    role: 'Runtime Environment',
    iconSrc: '/assets/icons/demo/nodejs.svg',
  },
  {
    name: 'TypeScript',
    role: 'Tipado estricto',
    iconSrc: '/assets/icons/demo/typescript.svg',
  },
  {
    name: 'Python',
    role: 'Backend & Scripting',
    iconSrc: '/assets/icons/demo/python.svg',
  },
  {
    name: 'Express.js',
    role: 'APIs RESTful',
    iconSrc: '/assets/icons/demo/express.svg',
    invert: true,
  },
  {
    name: 'PostgreSQL',
    role: 'Base de datos RDBMS',
    iconSrc: '/assets/icons/demo/postgres.svg',
  },
  {
    name: 'Prisma ORM',
    role: 'Modelado & Migraciones',
    iconSrc: '/assets/icons/demo/prisma.svg',
    invert: true,
  },
  {
    name: 'REST APIs',
    role: 'Arquitectura & Endpoints',
    iconSrc: '/assets/icons/demo/openapi.svg',
  },
];

const DEVOPS_STACK: TechItem[] = [
  {
    name: 'Docker',
    role: 'Contenedores aislados',
    iconSrc: '/assets/icons/demo/docker.svg',
  },
  {
    name: 'Docker Compose',
    role: 'Orquestación de servicios',
    iconSrc: '/assets/icons/demo/docker.svg',
  },
  {
    name: 'Linux & Bash',
    role: 'Servidores & CLI',
    iconSrc: '/assets/icons/demo/bash.svg',
    invert: true,
  },
  {
    name: 'AWS',
    role: 'Cloud (S3, EC2)',
    iconSrc: '/assets/icons/demo/aws.svg',
    invert: true,
  },
  {
    name: 'Railway',
    role: 'PaaS & Producción',
    iconSrc: '/assets/icons/demo/railway.svg',
    invert: true,
  },
  {
    name: 'GitHub Actions',
    role: 'Pipelines CI/CD',
    iconSrc: '/assets/icons/demo/github-actions.svg',
  },
  {
    name: 'Git & GitHub',
    role: 'Control de versiones',
    iconSrc: '/assets/icons/demo/git.svg',
  },
];

const TOOLS_STACK: TechItem[] = [
  {
    name: 'Next.js',
    role: 'App Router & SSR',
    iconSrc: '/assets/icons/demo/nextjs.svg',
    invert: true,
  },
  {
    name: 'React',
    role: 'Interfaces reactivas',
    iconSrc: '/assets/icons/demo/react.svg',
  },
  {
    name: 'Tailwind CSS',
    role: 'Diseño utilitario',
    iconSrc: '/assets/icons/demo/tailwindcss.svg',
  },
  {
    name: 'Postman',
    role: 'Testing de APIs',
    iconSrc: '/assets/icons/demo/postman.svg',
  },
  {
    name: 'VS Code',
    role: 'Entorno de desarrollo',
    iconSrc: '/assets/icons/demo/visual-studio-code.svg',
  },
  {
    name: 'SQL & DB Tools',
    role: 'Queries & Schemas',
    iconSrc: '/assets/icons/demo/sql.svg',
    invert: true,
  },
];

function TechCard({ item }: { item: TechItem }) {
  const isFeatured = item.featured;

  return (
    <div
      className={`relative rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 transition-all duration-300 hover:scale-[1.03] shadow-md group ${
        isFeatured
          ? 'bg-gradient-to-br from-[#e0234e]/12 via-[#0c0c0e] to-[#0c0c0e] border border-[#e0234e]/50 ring-1 ring-[#e0234e]/30 shadow-[0_0_24px_-4px_rgba(224,35,78,0.3)] hover:border-[#e0234e]'
          : 'bg-[#0c0c0e]/95 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900/60 hover:shadow-xl'
      }`}
    >
      {/* Featured Badge */}
      {item.badge && (
        <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-[#e0234e] text-[10px] font-mono font-bold text-white shadow-sm tracking-wide uppercase">
          {item.badge}
        </span>
      )}

      {/* Tech Icon Container */}
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center p-2 shrink-0 border transition-colors ${
          isFeatured
            ? 'bg-zinc-900/90 border-[#e0234e]/40 group-hover:border-[#e0234e]'
            : 'bg-zinc-900 border-zinc-800 group-hover:border-zinc-700'
        }`}
      >
        <Image
          src={item.iconSrc}
          alt={item.name}
          width={28}
          height={28}
          className={`w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-110 ${
            item.invert ? 'filter invert brightness-125' : ''
          }`}
        />
      </div>

      {/* Label & Role */}
      <div className="min-w-0 flex-1">
        <h4 className="text-sm font-semibold text-white tracking-tight truncate group-hover:text-white transition-colors">
          {item.name}
        </h4>
        <p className="text-xs font-mono text-zinc-400 truncate mt-0.5">
          {item.role}
        </p>
      </div>
    </div>
  );
}

export function TechStackSection() {
  return (
    <section className="border-t border-zinc-800/80 bg-black py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header (Inspired by reference My Skills + Underline relief) */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
              Stack & Habilidades
            </span>
            <div className="inline-block relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Tecnologías & Stack
              </h2>
              {/* Active relief underline bar matching navbar style */}
              <div
                aria-hidden="true"
                className="mx-auto mt-2.5 h-[2px] w-24 rounded-full bg-gradient-to-r from-[#e0234e] via-[#ff5376] to-[#e0234e] shadow-[0_2px_10px_rgba(224,35,78,0.85)]"
              />
            </div>
            <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto pt-1 leading-relaxed">
              Herramientas y tecnologías con las que construyo APIs, diseño bases de datos y despliego infraestructura en producción.
            </p>
          </div>
        </ScrollReveal>

        {/* 1. Backend Development Group */}
        <ScrollReveal direction="up" delay={100} className="space-y-5">
          <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#e0234e] shadow-[0_0_8px_#e0234e]" />
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Backend Development
            </h3>
            <span className="text-xs font-mono text-zinc-400 ml-auto hidden sm:inline">
              Foco principal
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {BACKEND_STACK.map((tech) => (
              <TechCard key={tech.name} item={tech} />
            ))}
          </div>
        </ScrollReveal>

        {/* 2. DevOps & Cloud Infrastructure Group */}
        <ScrollReveal direction="up" delay={150} className="space-y-5">
          <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-2.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              DevOps & Cloud
            </h3>
            <span className="text-xs font-mono text-zinc-400 ml-auto hidden sm:inline">
              Infraestructura & Contenedores
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {DEVOPS_STACK.map((tech) => (
              <TechCard key={tech.name} item={tech} />
            ))}
          </div>
        </ScrollReveal>

        {/* 3. Tools & Frontend Group */}
        <ScrollReveal direction="up" delay={200} className="space-y-5">
          <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Herramientas & Frontend
            </h3>
            <span className="text-xs font-mono text-zinc-400 ml-auto hidden sm:inline">
              Entorno & Desarrollo
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {TOOLS_STACK.map((tech) => (
              <TechCard key={tech.name} item={tech} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
