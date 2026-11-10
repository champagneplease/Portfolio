'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface TechItem {
  name: string;
  role: string;
  iconSrc: string;
  invert?: boolean;
  featured?: boolean;
}

interface StackCategory {
  number: string;
  title: string;
  subtitle: string;
  isPrincipal?: boolean;
  items: TechItem[];
}

const CATEGORIES: StackCategory[] = [
  {
    number: '01',
    title: 'Backend Development',
    subtitle: 'APIs, arquitectura y desarrollo de servicios',
    isPrincipal: true,
    items: [
      {
        name: 'NestJS',
        role: 'Backend TypeScript',
        iconSrc: '/assets/icons/demo/nestjs.svg',
        featured: true,
      },
      {
        name: 'Node.js',
        role: 'Runtime JavaScript',
        iconSrc: '/assets/icons/demo/nodejs.svg',
      },
      {
        name: 'FastAPI',
        role: 'APIs con Python',
        iconSrc: '/assets/icons/demo/fastapi.svg',
      },
      {
        name: 'Django',
        role: 'Backend Python',
        iconSrc: '/assets/icons/demo/django.svg',
      },
    ],
  },
  {
    number: '02',
    title: 'DevOps & Cloud',
    subtitle: 'Infraestructura, contenedores y despliegues',
    isPrincipal: true,
    items: [
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
        role: 'Cloud (EC2, S3)',
        iconSrc: '/assets/icons/demo/aws.svg',
        invert: true,
      },
      {
        name: 'Nginx',
        role: 'Reverse Proxy & Web Server',
        iconSrc: '/assets/icons/demo/nginx.svg',
      },
      {
        name: 'Terraform',
        role: 'Infrastructure as Code',
        iconSrc: '/assets/icons/demo/terraform.svg',
      },
      {
        name: 'Railway',
        role: 'PaaS & Producción',
        iconSrc: '/assets/icons/demo/railway.svg',
        invert: true,
      },
      {
        name: 'Render',
        role: 'Cloud Deployment',
        iconSrc: '/assets/icons/demo/render.svg',
        invert: true,
      },
    ],
  },
  {
    number: '03',
    title: 'Databases & Data Management',
    subtitle: 'Persistencia, consultas y gestión de datos',
    items: [
      {
        name: 'PostgreSQL',
        role: 'Base de datos relacional',
        iconSrc: '/assets/icons/demo/postgres.svg',
      },
      {
        name: 'MySQL',
        role: 'Base de datos relacional',
        iconSrc: '/assets/icons/demo/mysql.svg',
      },
      {
        name: 'MongoDB',
        role: 'Base de datos NoSQL',
        iconSrc: '/assets/icons/demo/mongodb.svg',
      },
      {
        name: 'Supabase',
        role: 'Backend-as-a-Service',
        iconSrc: '/assets/icons/demo/supabase.svg',
      },
      {
        name: 'SQL & DB Tools',
        role: 'Queries & Schemas',
        iconSrc: '/assets/icons/demo/sql.svg',
        invert: true,
      },
    ],
  },
  {
    number: '04',
    title: 'CI/CD & Version Control',
    subtitle: 'Automatización y control de versiones',
    items: [
      {
        name: 'Git',
        role: 'Control de versiones',
        iconSrc: '/assets/icons/demo/git.svg',
      },
      {
        name: 'GitHub',
        role: 'Alojamiento de código',
        iconSrc: '/assets/icons/demo/github.svg',
        invert: true,
      },
      {
        name: 'GitHub Actions',
        role: 'Pipelines CI/CD',
        iconSrc: '/assets/icons/demo/github-actions.svg',
      },
    ],
  },
  {
    number: '05',
    title: 'Frontend Development',
    subtitle: 'Desarrollo de interfaces y aplicaciones web',
    items: [
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
    ],
  },
  {
    number: '06',
    title: 'Development Tools',
    subtitle: 'Herramientas de desarrollo y productividad',
    items: [
      {
        name: 'Postman',
        role: 'API Testing & Docs',
        iconSrc: '/assets/icons/demo/postman.svg',
      },
      {
        name: 'VS Code',
        role: 'Editor de código',
        iconSrc: '/assets/icons/demo/visual-studio-code.svg',
      },
      {
        name: 'Antigravity',
        role: 'AI-Assisted Development',
        iconSrc: '/assets/icons/demo/antigravity.svg',
      },
      {
        name: 'Vercel',
        role: 'Web Deployment',
        iconSrc: '/assets/icons/demo/vercel.svg',
        invert: true,
      },
      {
        name: 'Netlify',
        role: 'Web Deployment',
        iconSrc: '/assets/icons/demo/netlify.svg',
      },
    ],
  },
];

function CategoryPanel({ category }: { category: StackCategory }) {
  return (
    <div className="card-taste border border-zinc-800/80 bg-[#0c0c0e]/95 rounded-xl p-5 sm:p-6 space-y-4 shadow-md transition-all duration-300 hover:border-zinc-700">
      {/* Panel Header */}
      <div className="flex items-start justify-between gap-3 border-b border-zinc-800/80 pb-3.5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-zinc-400 font-semibold">
              {category.number} /
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {category.title}
            </h3>
          </div>
          <p className="text-xs text-zinc-400 font-mono mt-1">
            {category.subtitle}
          </p>
        </div>

        {category.isPrincipal && (
          <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-[#e0234e]/15 border border-[#e0234e]/40 text-[#e0234e] text-[10px] font-mono font-bold tracking-wider uppercase">
            Principal
          </span>
        )}
      </div>

      {/* Compact Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {category.items.map((item) => (
          <div
            key={item.name}
            className={`group flex items-center gap-2.5 p-2.5 rounded-lg border transition-all duration-200 select-none ${
              item.featured
                ? 'border-[#e0234e]/50 bg-gradient-to-r from-[#e0234e]/10 to-zinc-900/60 shadow-[0_0_12px_rgba(224,35,78,0.15)] hover:border-[#e0234e]'
                : 'border-zinc-800/80 bg-zinc-900/50 hover:bg-zinc-800/60 hover:border-zinc-700'
            }`}
          >
            {/* Compact Icon */}
            <div className="w-8 h-8 rounded-md bg-zinc-900/90 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src={item.iconSrc}
                alt={item.name}
                width={20}
                height={20}
                className={`w-5 h-5 object-contain ${
                  item.invert ? 'filter invert brightness-125' : ''
                }`}
              />
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <div className="text-xs sm:text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors truncate">
                {item.name}
              </div>
              <div className="text-[10px] sm:text-[11px] font-mono text-zinc-400 truncate">
                {item.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechStackSection() {
  const leftColumn = [CATEGORIES[0], CATEGORIES[2], CATEGORIES[4]]; // 01 Backend, 03 Databases, 05 Frontend
  const rightColumn = [CATEGORIES[1], CATEGORIES[3], CATEGORIES[5]]; // 02 DevOps, 04 CI/CD, 06 Tools

  return (
    <section className="border-t border-zinc-800/80 bg-black py-16 sm:py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-2.5">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest font-semibold">
              Tecnologías & Arquitectura
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Skills & Stack
            </h2>
            {/* Center accent underline bar */}
            <div
              aria-hidden="true"
              className="mx-auto mt-2 h-1 w-14 rounded-full bg-[#e0234e] shadow-[0_0_14px_rgba(224,35,78,0.85)]"
            />
            <p className="text-sm sm:text-base text-zinc-300 max-w-xl mx-auto pt-1 leading-relaxed">
              Herramientas, arquitectura y tecnologías con las que construyo y despliego software en producción.
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left Column: Backend, Databases, Frontend */}
          <div className="space-y-6">
            {leftColumn.map((category, idx) => (
              <ScrollReveal
                key={category.number}
                direction="left"
                delay={idx * 75}
                distance={30}
              >
                <CategoryPanel category={category} />
              </ScrollReveal>
            ))}
          </div>

          {/* Right Column: DevOps & Cloud, CI/CD, Development Tools */}
          <div className="space-y-6">
            {rightColumn.map((category, idx) => (
              <ScrollReveal
                key={category.number}
                direction="right"
                delay={idx * 75}
                distance={30}
              >
                <CategoryPanel category={category} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
