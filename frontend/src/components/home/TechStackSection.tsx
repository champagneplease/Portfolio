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
              <p className="text-xs sm:text-sm text-zinc-300 font-mono max-w-md sm:text-right">
                Herramientas, arquitectura y tecnologías con las que construyo y despliego software en producción.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Categories: Unboxed, Clean & Airy Rows */}
        <div className="space-y-10">
          {CATEGORIES.map((category, idx) => (
            <ScrollReveal
              key={category.number}
              direction="up"
              delay={idx * 50}
              distance={20}
              className="space-y-4 border-b border-zinc-800/60 pb-8 last:border-b-0 last:pb-0"
            >
              {/* Category Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono text-[#e0234e] font-semibold tracking-wider">
                    {category.number} //
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                  {category.isPrincipal && (
                    <span className="ml-2 px-2.5 py-0.5 rounded-full bg-[#e0234e]/15 border border-[#e0234e]/40 text-[#e0234e] text-[10px] font-mono font-bold tracking-wider uppercase">
                      Foco Principal
                    </span>
                  )}
                </div>
                <span className="text-xs font-mono text-zinc-400">
                  {category.subtitle}
                </span>
              </div>

              {/* Items Grid: Unboxed, Airy, Sleek */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3 pt-1">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-200 group select-none ${
                      item.featured
                        ? 'bg-gradient-to-r from-[#e0234e]/10 via-[#e0234e]/5 to-transparent border-l-2 border-[#e0234e] pl-2.5'
                        : 'hover:bg-zinc-900/40 border-l-2 border-transparent hover:border-zinc-700 pl-2.5'
                    }`}
                  >
                    {/* Icon */}
                    <div className="w-8 h-8 rounded-md bg-zinc-900/60 border border-zinc-800/80 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-zinc-600 transition-all">
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
                      <div className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors truncate">
                        {item.name}
                      </div>
                      <div className="text-[11px] font-mono text-zinc-400 truncate">
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
