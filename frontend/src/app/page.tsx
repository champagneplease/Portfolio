import Link from 'next/link';
import { ArrowRight, ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { PROJECTS_DATA } from '@/lib/projects-data';

export default function HomePage() {
  const burgerSosa = PROJECTS_DATA.find((p) => p.slug === 'burger-sosa') || PROJECTS_DATA[0];
  const secondaryProjects = PROJECTS_DATA.filter((p) => !p.featured).slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 sm:py-24 space-y-24">
      {/* 1. HERO */}
      <section className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
            Hola, soy Nacho Miranda
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Backend Developer
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 font-normal max-w-2xl">
            Estudiante de Desarrollo de Software enfocado en Backend, APIs, arquitectura y DevOps.
          </p>
        </div>

        <p className="text-base text-zinc-400 max-w-2xl leading-relaxed">
          Me interesa construir software que no solo funcione, sino que pueda{' '}
          <span className="text-zinc-100 font-medium">crecer, desplegarse y mantenerse correctamente en producción</span>.
        </p>

        {/* Minimal Terminal Element */}
        <div className="max-w-md rounded-lg border border-zinc-800 bg-zinc-950/80 p-4 font-mono text-xs text-zinc-300 space-y-2.5">
          <div className="flex items-center justify-between text-zinc-400 border-b border-zinc-900 pb-2">
            <span>bash — terminal</span>
            <span className="text-[10px]">nacho-miranda</span>
          </div>
          <div>
            <span className="text-zinc-400">$ </span>whoami
            <div className="text-zinc-300 pl-4">nacho-miranda</div>
          </div>
          <div>
            <span className="text-zinc-400">$ </span>focus
            <div className="text-zinc-300 pl-4 space-y-0.5">
              <div>backend</div>
              <div>devops</div>
              <div>cloud</div>
              <div>architecture</div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors"
          >
            <span>Ver proyectos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-zinc-800 text-zinc-200 text-sm hover:border-zinc-600 hover:text-white transition-colors"
          >
            <span>Contactarme</span>
          </Link>

          <div className="flex items-center gap-3 pl-2 text-xs font-mono text-zinc-400">
            <a
              href="https://github.com/champagneplease"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <span>•</span>
            <a
              href="https://linkedin.com/in/nacho-miranda"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. PROYECTO DESTACADO — BURGER SOSA */}
      <section className="space-y-6 pt-8 border-t border-zinc-900">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              Proyecto Principal
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
              Burger Sosa
            </h2>
          </div>
          <Link
            href="/proyectos/burger-sosa"
            className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Ver análisis técnico</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Card Minimalista */}
        <div className="border border-zinc-800 rounded-lg p-6 sm:p-8 bg-zinc-950/60 space-y-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded border border-zinc-700 bg-zinc-900 text-zinc-200 font-semibold">
                ● Software real en producción
              </span>
              <span className="text-zinc-400">
                Full Stack / NestJS / PostgreSQL / Docker
              </span>
            </div>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Burger Sosa fue desarrollado para resolver una necesidad real de un negocio gastronómico y actualmente se encuentra desplegado y funcionando en producción. Gestiona pedidos diarios, catálogo, horarios, inventario y comunicación en tiempo real con clientes.
            </p>
          </div>

          {/* Key pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-zinc-900 py-5 text-xs text-zinc-300">
            <div className="space-y-1">
              <div className="font-semibold text-white">Mobile-First</div>
              <p className="text-zinc-400 leading-normal">
                Pensada prioritariamente para pedidos rápidos desde teléfonos celulares.
              </p>
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-white">SEO & Indexación</div>
              <p className="text-zinc-400 leading-normal">
                Optimización completa para buscadores, sitemap e indexación activa en Google.
              </p>
            </div>
            <div className="space-y-1">
              <div className="font-semibold text-white">DevOps & Cloud</div>
              <p className="text-zinc-400 leading-normal">
                Containerizada con Docker y desplegada en Railway con PostgreSQL dedicado.
              </p>
            </div>
          </div>

          {/* Links & CTA */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
            <div className="flex items-center gap-4">
              <a
                href={burgerSosa.liveUrl || 'https://burger-sosa.up.railway.app/'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded bg-white text-black hover:bg-zinc-200 transition-colors"
              >
                <span>Visitar aplicación en vivo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/proyectos/burger-sosa"
                className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
              >
                Ver arquitectura completa →
              </Link>
            </div>
            <div className="text-xs font-mono text-zinc-400">
              NestJS • TypeScript • React • Prisma • PostgreSQL
            </div>
          </div>
        </div>
      </section>

      {/* 3. MÁS ALLÁ DEL CÓDIGO (CÓMO PIENSO) */}
      <section className="space-y-4 pt-8 border-t border-zinc-900">
        <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
          Enfoque Técnico
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Más allá del código
        </h2>
        <div className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed max-w-3xl">
          <p>
            En una época donde las herramientas de IA forman parte cada vez más del desarrollo, considero todavía más importante comprender los fundamentos.
          </p>
          <p>
            Utilizo herramientas de IA como apoyo para investigar, acelerar tareas y explorar soluciones, pero mi objetivo es entender qué estoy construyendo, por qué funciona y qué consecuencias tiene cada decisión técnica.
          </p>
          <p className="text-zinc-200 font-medium border-l-2 border-zinc-600 pl-4 py-1">
            Me interesa desarrollar criterio técnico, no solamente producir código.
          </p>
        </div>
        <div className="pt-2">
          <Link
            href="/sobre-mi"
            className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Leer sobre mi perfil y trayectoria</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 4. EXPLORANDO DEVOPS & INFRAESTRUCTURA */}
      <section className="space-y-6 pt-8 border-t border-zinc-900">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              Infraestructura
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
              Explorando DevOps & Cloud
            </h2>
          </div>
          <Link
            href="/devops"
            className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Ver sección completa</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
          Mi camino profesional está comenzando a expandirse desde el desarrollo Backend hacia infraestructura y DevOps. Actualmente estoy profundizando en containerización, despliegues, infraestructura como código y servicios cloud.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-zinc-800 bg-zinc-950 p-4 rounded-lg space-y-1.5">
            <div className="text-xs font-mono text-zinc-400">01 / Docker</div>
            <div className="text-sm font-semibold text-white">Containerización</div>
            <p className="text-xs text-zinc-400 leading-normal">
              Ambientes reproducibles e imágenes multi-stage.
            </p>
          </div>

          <div className="border border-zinc-800 bg-zinc-950 p-4 rounded-lg space-y-1.5">
            <div className="text-xs font-mono text-zinc-400">02 / AWS</div>
            <div className="text-sm font-semibold text-white">Servicios Cloud</div>
            <p className="text-xs text-zinc-400 leading-normal">
              Conceptos de cómputo, almacenamiento y redes.
            </p>
          </div>

          <div className="border border-zinc-800 bg-zinc-950 p-4 rounded-lg space-y-1.5">
            <div className="text-xs font-mono text-zinc-400">03 / Terraform</div>
            <div className="text-sm font-semibold text-white">Infrastructure as Code</div>
            <p className="text-xs text-zinc-400 leading-normal">
              Automatización de recursos de manera declarativa.
            </p>
          </div>

          <div className="border border-zinc-800 bg-zinc-950 p-4 rounded-lg space-y-1.5">
            <div className="text-xs font-mono text-zinc-400">04 / Deployment</div>
            <div className="text-sm font-semibold text-white">Producción</div>
            <p className="text-xs text-zinc-400 leading-normal">
              El proceso completo entre escribir código y llevarlo a usuarios reales.
            </p>
          </div>
        </div>
      </section>

      {/* 5. OTROS PROYECTOS */}
      <section className="space-y-6 pt-8 border-t border-zinc-900">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              Portafolio
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-white mt-1">
              Otros proyectos
            </h2>
          </div>
          <Link
            href="/proyectos"
            className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Ver todos ({PROJECTS_DATA.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {secondaryProjects.map((p) => (
            <Link
              key={p.slug}
              href={`/proyectos/${p.slug}`}
              className="border border-zinc-800 bg-zinc-950 hover:border-zinc-600 rounded-lg p-5 space-y-3 transition-colors block group"
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

      {/* 6. CONTACTO CTA */}
      <section className="border border-zinc-800 rounded-lg p-8 bg-zinc-950 text-center space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          ¿Hablamos?
        </h2>
        <p className="text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
          Si estás buscando un desarrollador Backend Junior, querés intercambiar ideas sobre un proyecto o simplemente hablar de tecnología, podés contactarme.
        </p>
        <div className="pt-2">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors"
          >
            <span>Ir a la página de contacto</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
