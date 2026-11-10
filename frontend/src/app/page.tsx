import Link from 'next/link';
import { ArrowRight, ExternalLink, ArrowUpRight, Terminal, Check, Server, Shield, Layers, Smartphone, Search } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { PROJECTS_DATA } from '@/lib/projects-data';

export default function HomePage() {
  const burgerSosa = PROJECTS_DATA.find((p) => p.slug === 'burger-sosa') || PROJECTS_DATA[0];
  const secondaryProjects = PROJECTS_DATA.filter((p) => !p.featured).slice(0, 3);

  return (
    <div className="w-full">
      {/* 1. HERO SECTION (1 Screen feel, clean equal edges) */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-24 sm:pt-28 sm:pb-32 space-y-12">
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span>NACHO MIRANDA / DEV PROFILE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Backend Developer
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed">
            Estudiante de Desarrollo de Software enfocado en Backend, APIs, arquitectura y DevOps.
          </p>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed pt-1">
            Me interesa construir software que no solo funcione, sino que pueda{' '}
            <span className="text-white font-medium">crecer, desplegarse y mantenerse correctamente en producción</span>.
          </p>
        </div>

        {/* Minimal Terminal - Taste Skill Anti-Slop Style */}
        <div className="max-w-xl rounded-md border border-zinc-800 bg-[#080808] p-5 font-mono text-xs text-zinc-300 space-y-3 shadow-2xl">
          <div className="flex items-center justify-between border-b border-zinc-900 pb-2.5 text-zinc-400 text-[11px]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
              <span className="ml-2 text-zinc-400">nacho@macbook ~ %</span>
            </div>
            <span className="text-zinc-400">zsh</span>
          </div>

          <div className="space-y-2">
            <div>
              <span className="text-zinc-400">$ </span>whoami
              <div className="text-zinc-300 pl-4 mt-0.5">nacho-miranda</div>
            </div>
            <div>
              <span className="text-zinc-400">$ </span>focus --verbose
              <div className="text-zinc-300 pl-4 mt-0.5 space-y-0.5">
                <div>› backend: NestJS, Express, Python (FastAPI, Django, Flask)</div>
                <div>› infrastructure: Docker, AWS, Terraform, Linux</div>
                <div>› database: PostgreSQL, Prisma ORM, MongoDB</div>
                <div>› philosophy: código mantenible, arquitectura y criterio técnico</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link href="/proyectos" className="btn-primary">
            <span>Ver proyectos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link href="/contacto" className="btn-secondary">
            <span>Contactarme</span>
          </Link>

          <div className="flex items-center gap-4 pl-2 text-xs font-mono text-zinc-400">
            <a
              href="https://github.com/champagneplease"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span>/</span>
            <a
              href="https://linkedin.com/in/nacho-miranda"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. BURGER SOSA FEATURED SPOTLIGHT (Real Product UI, Taste Skill Style) */}
      <section className="border-t border-zinc-900 bg-[#050505] py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-zinc-900 pb-4">
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                01 / Proyecto Principal
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
                Burger Sosa
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              Producción real activa en Railway
            </span>
          </div>

          <div className="border border-zinc-800 bg-black rounded-lg p-6 sm:p-10 space-y-8">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-2.5 py-0.5 rounded border border-zinc-700 bg-zinc-900 text-white font-medium">
                  ● Software real en producción
                </span>
                <span className="text-zinc-400">
                  Full Stack / Backend / DevOps
                </span>
              </div>

              <p className="text-base sm:text-lg text-zinc-200 leading-relaxed">
                Burger Sosa fue desarrollado para resolver una necesidad operativa y comercial real de un negocio gastronómico y actualmente se encuentra desplegado y funcionando en producción.
              </p>

              <p className="text-sm text-zinc-400 leading-relaxed">
                Pasó de ser código en desarrollo a convertirse en una herramienta de uso diario: administración de productos, inventario, horarios, estados de pedidos en tiempo real, integración directa con WhatsApp y persistencia en PostgreSQL con NestJS.
              </p>
            </div>

            {/* Architecture Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="border border-zinc-800 bg-[#080808] p-5 rounded space-y-2 font-mono text-xs">
                <div className="text-zinc-400 pb-2 border-b border-zinc-900 flex items-center justify-between">
                  <span className="font-semibold text-zinc-300">Arquitectura Backend</span>
                  <span>REST API</span>
                </div>
                <div className="text-zinc-400 leading-relaxed py-1 space-y-1">
                  <div className="text-white">React / TypeScript (Client & Admin)</div>
                  <div className="pl-3">↓ HTTPS / REST</div>
                  <div className="text-white pl-3">NestJS Controllers (Validation & Guards)</div>
                  <div className="pl-6">↓ Service Layer</div>
                  <div className="text-white pl-6">Prisma ORM</div>
                  <div className="pl-9">↓ SQL Queries</div>
                  <div className="text-white pl-9">PostgreSQL (Production DB)</div>
                </div>
              </div>

              <div className="border border-zinc-800 bg-[#080808] p-5 rounded space-y-2 font-mono text-xs">
                <div className="text-zinc-400 pb-2 border-b border-zinc-900 flex items-center justify-between">
                  <span className="font-semibold text-zinc-300">Pipeline DevOps</span>
                  <span>CI/CD</span>
                </div>
                <div className="text-zinc-400 leading-relaxed py-1 space-y-1">
                  <div className="text-white">Git Version Control</div>
                  <div className="pl-3">↓ Feature Branches</div>
                  <div className="text-white pl-3">Docker Container (Multi-stage)</div>
                  <div className="pl-6">↓ Automated Build</div>
                  <div className="text-white pl-6">Railway Deployment</div>
                  <div className="pl-9">↓ Healthcheck & SSL</div>
                  <div className="text-white pl-9">Production Live</div>
                </div>
              </div>
            </div>

            {/* Three key pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-zinc-900 text-xs">
              <div className="space-y-1.5">
                <div className="font-semibold text-white">Mobile-First</div>
                <p className="text-zinc-400 leading-relaxed">
                  La aplicación fue pensada principalmente para usuarios móviles, priorizando una experiencia rápida y clara desde dispositivos celulares.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="font-semibold text-white">SEO & Indexación</div>
                <p className="text-zinc-400 leading-relaxed">
                  Además del desarrollo, trabajé en su presencia en buscadores mediante optimización SEO, sitemap XML estructurado e indexación en Google.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="font-semibold text-white">PostgreSQL & NestJS</div>
                <p className="text-zinc-400 leading-relaxed">
                  Modelado relacional estricto con Prisma ORM, DTOs validados y servicios modulares desacoplados.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-900">
              <div className="flex items-center gap-3">
                <a
                  href={burgerSosa.liveUrl || 'https://burger-sosa.up.railway.app/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Visitar sitio en producción</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/proyectos/burger-sosa"
                  className="btn-secondary"
                >
                  <span>Ver análisis técnico</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="text-xs font-mono text-zinc-400">
                Railway • Docker • PostgreSQL • NestJS • React
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MÁS ALLÁ DEL CÓDIGO (Filosofía Técnica) */}
      <section className="max-w-5xl mx-auto px-6 py-24 space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
            02 / Criterio
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Más allá del código
          </h2>
        </div>

        <div className="max-w-3xl space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
          <p>
            En una época donde las herramientas de IA forman parte cada vez más del desarrollo, considero todavía más importante comprender los fundamentos.
          </p>
          <p>
            Utilizo herramientas de IA como apoyo para investigar, acelerar tareas y explorar soluciones, pero mi objetivo es entender qué estoy construyendo, por qué funciona y qué consecuencias tiene cada decisión técnica.
          </p>
          <p className="text-white font-medium border-l-2 border-white pl-4 py-1 text-base sm:text-lg">
            Me interesa desarrollar criterio técnico, no solamente producir código.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/sobre-mi"
            className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <span>Conocer mi perfil y metodología de trabajo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 4. EXPLORANDO DEVOPS & INFRAESTRUCTURA (Preview) */}
      <section className="border-t border-zinc-900 bg-[#050505] py-24">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-zinc-900 pb-4">
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                03 / Especialización
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
                Explorando DevOps & Cloud
              </h2>
            </div>
            <Link
              href="/devops"
              className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>Ver sección DevOps completa</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
            Mi camino profesional está comenzando a expandirse desde el desarrollo Backend hacia infraestructura y DevOps. Actualmente estoy profundizando en containerización, despliegues, infraestructura como código y servicios cloud.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border border-zinc-800 bg-black p-5 rounded space-y-2 card-taste">
              <div className="text-xs font-mono text-zinc-400">01 / Docker</div>
              <div className="text-sm font-semibold text-white">Containerización</div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Ambientes reproducibles e imágenes multi-stage optimizadas.
              </p>
            </div>

            <div className="border border-zinc-800 bg-black p-5 rounded space-y-2 card-taste">
              <div className="text-xs font-mono text-zinc-400">02 / AWS</div>
              <div className="text-sm font-semibold text-white">Servicios Cloud</div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Conceptos fundamentales de cómputo, almacenamiento y redes.
              </p>
            </div>

            <div className="border border-zinc-800 bg-black p-5 rounded space-y-2 card-taste">
              <div className="text-xs font-mono text-zinc-400">03 / Terraform</div>
              <div className="text-sm font-semibold text-white">Infrastructure as Code</div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Aprovisionamiento y automatización declarativa de recursos.
              </p>
            </div>

            <div className="border border-zinc-800 bg-black p-5 rounded space-y-2 card-taste">
              <div className="text-xs font-mono text-zinc-400">04 / Deployment</div>
              <div className="text-sm font-semibold text-white">Producción</div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                El proceso de llevar código a disponibilidad real con SSL y CI/CD.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OTROS PROYECTOS */}
      <section className="max-w-5xl mx-auto px-6 py-24 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-zinc-900 pb-4">
          <div>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              04 / Portafolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
              Otros proyectos
            </h2>
          </div>
          <Link
            href="/proyectos"
            className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Ver todos los proyectos ({PROJECTS_DATA.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {secondaryProjects.map((p) => (
            <Link
              key={p.slug}
              href={`/proyectos/${p.slug}`}
              className="border border-zinc-800 bg-[#080808] p-5 rounded space-y-3 block card-taste group"
            >
              <div className="text-[11px] font-mono text-zinc-400">{p.category}</div>
              <h3 className="text-base font-semibold text-white group-hover:text-zinc-300 transition-colors flex items-center justify-between">
                <span>{p.title}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white" />
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                {p.description}
              </p>
              <div className="pt-2 text-[11px] font-mono text-zinc-400">
                {p.technologies.slice(0, 3).join(' • ')}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION FINAL */}
      <section className="border-t border-zinc-900 bg-[#050505] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            ¿Hablamos?
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-xl mx-auto">
            Si estás buscando un desarrollador Backend Junior, querés intercambiar ideas sobre un proyecto o simplemente hablar de tecnología, podés contactarme.
          </p>
          <div className="pt-4">
            <Link href="/contacto" className="btn-primary">
              <span>Ir al formulario de contacto</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
