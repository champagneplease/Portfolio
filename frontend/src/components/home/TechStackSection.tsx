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
    subtitle: 'APIs, arquitectura y servicios backend',
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
        role: 'APIs REST con Python',
        iconSrc: '/assets/icons/demo/fastapi.svg',
      },
      {
        name: 'Django',
        role: 'Backend & Web Framework',
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
    subtitle: 'Persistencia, consultas y modelado relacional / NoSQL',
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
    ],
  },
  {
    number: '06',
    title: 'Development Tools',
    subtitle: 'Herramientas de desarrollo, testing y despliegues',
    items: [
      {
        name: 'Antigravity IDE',
        role: 'AI-First IDE & Agentic Coding',
        iconSrc: '/assets/icons/demo/antigravity.svg',
      },
      {
        name: 'Postman',
        role: 'API Testing & Docs',
        iconSrc: '/assets/icons/demo/postman.svg',
      },
      {
        name: 'Vercel',
        role: 'Web & Serverless Deployment',
        iconSrc: '/assets/icons/demo/vercel.svg',
        invert: true,
      },
    ],
  },
];

export function TechStackSection() {
  return (
    <section className="border-t border-zinc-800/80 bg-black py-16 sm:py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header: Clean, Unboxed & Minimalist */}
        <ScrollReveal direction="up">
          <div className="space-y-3">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest font-semibold">
              Tecnologías & Arquitectura
            </span>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-zinc-800 pb-4">
              <div className="space-y-1">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                  Skills & Stack
                </h2>
                <div
                  aria-hidden="true"
                  className="h-1 w-12 rounded-full bg-[#e0234e]"
                />
              </div>
              <p className="text-[11px] sm:text-xs text-zinc-500 font-mono max-w-sm sm:text-right leading-relaxed opacity-75">
                Herramientas, arquitectura y tecnologías con las que construyo y despliego software en producción.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Categories: Unboxed, Clean & Airy Rows */}
        <div className="space-y-12">
          {CATEGORIES.map((category, idx) => (
            <ScrollReveal
              key={category.number}
              direction="up"
              delay={idx * 50}
              distance={20}
              className="space-y-4 border-b border-zinc-800/60 pb-10 last:border-b-0 last:pb-0"
            >
              {/* Category Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-xs sm:text-sm font-mono text-[#e0234e] font-semibold tracking-wider">
                    {category.number} //
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                  {category.isPrincipal && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e0234e]" aria-hidden="true" />
                      foco principal
                    </span>
                  )}
                </div>
                <span className="text-xs sm:text-sm font-mono text-zinc-400">
                  {category.subtitle}
                </span>
              </div>

              {/* Items Grid: Larger, Prominent & Highly Legible on Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 pt-2">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3.5 sm:gap-4 p-3 sm:p-3.5 rounded-xl hover:bg-zinc-900/50 transition-all duration-200 group select-none"
                  >
                    {/* Icon Container: Larger 44-48px size with 24-28px SVG */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-zinc-900/70 border border-zinc-800/80 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-zinc-600 transition-all shadow-sm">
                      <Image
                        src={item.iconSrc}
                        alt={item.name}
                        width={28}
                        height={28}
                        className={`w-6 h-6 sm:w-7 sm:h-7 object-contain ${
                          item.invert ? 'filter invert brightness-125' : ''
                        }`}
                      />
                    </div>

                    {/* Content: Prominent Typography */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-base sm:text-lg font-bold text-zinc-100 group-hover:text-white transition-colors truncate">
                          {item.name}
                        </span>
                        {item.featured && (
                          <span
                            title="Stack principal"
                            className="w-1.5 h-1.5 rounded-full bg-[#e0234e] shrink-0"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <div className="text-xs sm:text-sm font-mono text-zinc-400 group-hover:text-zinc-300 transition-colors truncate">
                        {item.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
