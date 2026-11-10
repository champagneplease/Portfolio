import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  ArrowUpRight,
  Terminal,
  Server,
  Shield,
  Layers,
  Smartphone,
  Search,
  Database,
  Mail,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { DeveloperGreeting } from "@/components/hero/DeveloperGreeting";
import { TypewriterText } from "@/components/hero/TypewriterText";
import { NetworkBackground } from "@/components/hero/NetworkBackground";
import { HeroProfile } from "@/components/hero/HeroProfile";
import { PROJECTS_DATA } from "@/lib/projects-data";

export default function HomePage() {
  const burgerSosa =
    PROJECTS_DATA.find((p) => p.slug === "burger-sosa") || PROJECTS_DATA[0];
  const secondaryProjects = PROJECTS_DATA.filter((p) => !p.featured).slice(
    0,
    3,
  );

  return (
    <div className="w-full">
      {/* 1. HERO SECTION (Inspired by Devfolio layout + NestJS Red Accent) */}
      <section className="relative w-full border-b border-zinc-800/80 overflow-hidden">
        {/* Geometric Network background */}
        <NetworkBackground />

        <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 space-y-12 animate-fade-in-up">
          {/* Main Grid: Presentation left / Profile circle right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column (Greeting, Name, Real-time Typewriter in NestJS Red) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Dynamic Developer Terminal Greeting (No static box/pill) */}
              <DeveloperGreeting />

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                  Nacho Miranda
                </h1>

                {/* Real-time Typewriter in NestJS Ruby Red (Locked on a single line, no wrapping or layout shift) */}
                <div className="text-[clamp(1.65rem,4.4vw,3.6rem)] sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight min-h-[1.2em] flex items-center leading-none whitespace-nowrap overflow-visible">
                  <TypewriterText
                    text="Backend Developer!"
                    className="text-[#e0234e] drop-shadow-[0_0_32px_rgba(224,35,78,0.55)] font-extrabold tracking-tight whitespace-nowrap"
                  />
                </div>
              </div>

              <p className="text-lg sm:text-xl text-zinc-200 font-medium leading-relaxed">
                Estudiante de Desarrollo de Software enfocado en Backend, APIs,
                arquitectura y DevOps.
              </p>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
                Me interesa construir software que no solo funcione, sino que
                pueda{" "}
                <strong className="text-white font-semibold">
                  crecer, desplegarse y mantenerse correctamente en producción
                </strong>
                .
              </p>

              {/* Action Buttons & Social Icons */}
              <div className="space-y-5 pt-2">
                <div className="flex flex-wrap items-center gap-4">
                  <Link href="/proyectos" className="btn-primary">
                    <span>Ver proyectos</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link href="/contacto" className="btn-secondary">
                    <span>Contactarme</span>
                  </Link>
                </div>

                {/* Social circular buttons matching inspiration layout */}
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href="https://github.com/champagneplease"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub de Nacho Miranda"
                    title="GitHub"
                    className="w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900/80 hover:bg-zinc-800 hover:border-zinc-500 hover:text-white transition-all flex items-center justify-center text-zinc-300 shadow-md group"
                  >
                    <GithubIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>

                  <a
                    href="https://linkedin.com/in/nacho-miranda"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn de Nacho Miranda"
                    title="LinkedIn"
                    className="w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900/80 hover:bg-zinc-800 hover:border-zinc-500 hover:text-white transition-all flex items-center justify-center text-zinc-300 shadow-md group"
                  >
                    <LinkedinIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>

                  <a
                    href="mailto:nachomirnd@gmail.com"
                    aria-label="Enviar correo a Nacho Miranda"
                    title="Email: nachomirnd@gmail.com"
                    className="w-10 h-10 rounded-full border border-zinc-700 bg-zinc-900/80 hover:bg-zinc-800 hover:border-zinc-500 hover:text-white transition-all flex items-center justify-center text-zinc-300 shadow-md group"
                  >
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>

                  <span className="text-xs font-mono text-zinc-400 pl-2">
                    nachomirnd@gmail.com
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column (Circular Profile Picture with high-res photo and NestJS halo) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <HeroProfile
                imageSrc="/nacho-miranda.jpg"
                alt="Nacho Miranda — Backend Developer"
              />
            </div>
          </div>

          {/* Minimal Terminal Card */}
          <div className="max-w-2xl rounded-lg border border-zinc-700 bg-[#0c0c0e]/95 p-5 font-mono text-xs sm:text-sm text-zinc-200 space-y-3 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5 text-zinc-400 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
                <span className="ml-2 text-zinc-300 font-medium">
                  nacho@macbook ~
                </span>
              </div>
              <span className="text-zinc-400">bash</span>
            </div>

            <div className="space-y-3">
              <div>
                <div className="text-zinc-400 flex items-center gap-1.5">
                  <span className="text-white font-bold">$</span>
                  <span className="text-white">whoami</span>
                </div>
                <div className="text-zinc-100 pl-4 font-semibold mt-0.5">
                  nacho-miranda
                </div>
              </div>

              <div>
                <div className="text-zinc-400 flex items-center gap-1.5">
                  <span className="text-white font-bold">$</span>
                  <span className="text-white">focus</span>
                </div>
                <div className="text-zinc-200 pl-4 mt-0.5 space-y-1">
                  <div>
                    • backend (NestJS, Express, Python, PostgreSQL, Prisma)
                  </div>
                  <div>• devops & cloud (Docker, AWS, Terraform, Linux)</div>
                  <div>• arquitectura y software real en producción</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BURGER SOSA FEATURED SPOTLIGHT */}
      <section className="border-t border-zinc-800 bg-[#08080a] py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-zinc-800 pb-4">
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                01 / Proyecto Principal
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white mt-1">
                Burger Sosa
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-300">
              Desplegado y activo en Railway
            </span>
          </div>

          <div className="border border-zinc-700 bg-[#0c0c0e] rounded-xl p-6 sm:p-10 space-y-8 shadow-xl">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded border border-zinc-600 bg-zinc-800 text-white font-semibold">
                  ● Software real en producción
                </span>
                <span className="text-zinc-300 font-medium">
                  Full Stack / NestJS / PostgreSQL / Docker
                </span>
              </div>

              <p className="text-lg sm:text-xl text-white font-medium leading-relaxed">
                Burger Sosa fue desarrollado para resolver una necesidad
                operativa y comercial real de un negocio gastronómico y
                actualmente se encuentra desplegado y funcionando en producción.
              </p>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                Pasó de ser código en desarrollo a convertirse en una
                herramienta de uso diario: administración de productos,
                inventario, horarios, estados de pedidos en tiempo real,
                integración directa con WhatsApp y persistencia en PostgreSQL
                con NestJS.
              </p>
            </div>

            {/* Architecture Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-zinc-700 bg-black p-5 rounded-lg space-y-3 font-mono text-xs sm:text-sm">
                <div className="text-white font-semibold pb-2 border-b border-zinc-800 flex items-center justify-between">
                  <span>Arquitectura Backend</span>
                  <span className="text-zinc-400 text-xs">REST API</span>
                </div>
                <div className="text-zinc-300 leading-relaxed py-1 space-y-1.5">
                  <div className="text-white font-medium">
                    React / TypeScript (Client & Admin)
                  </div>
                  <div className="text-zinc-400 pl-4">↓ HTTPS / REST</div>
                  <div className="text-white font-medium pl-4">
                    NestJS Controllers (Validation & Guards)
                  </div>
                  <div className="text-zinc-400 pl-8">↓ Service Layer</div>
                  <div className="text-white font-medium pl-8">Prisma ORM</div>
                  <div className="text-zinc-400 pl-12">↓ SQL Queries</div>
                  <div className="text-emerald-300 font-semibold pl-12">
                    PostgreSQL (Production DB)
                  </div>
                </div>
              </div>

              <div className="border border-zinc-700 bg-black p-5 rounded-lg space-y-3 font-mono text-xs sm:text-sm">
                <div className="text-white font-semibold pb-2 border-b border-zinc-800 flex items-center justify-between">
                  <span>Pipeline DevOps</span>
                  <span className="text-zinc-400 text-xs">CI/CD</span>
                </div>
                <div className="text-zinc-300 leading-relaxed py-1 space-y-1.5">
                  <div className="text-white font-medium">
                    Git Version Control
                  </div>
                  <div className="text-zinc-400 pl-4">↓ Feature Branches</div>
                  <div className="text-white font-medium pl-4">
                    Docker Container (Multi-stage)
                  </div>
                  <div className="text-zinc-400 pl-8">↓ Automated Build</div>
                  <div className="text-white font-medium pl-8">
                    Railway Deployment
                  </div>
                  <div className="text-zinc-400 pl-12">↓ Healthcheck & SSL</div>
                  <div className="text-emerald-300 font-semibold pl-12">
                    Production Live
                  </div>
                </div>
              </div>
            </div>

            {/* Three key pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-zinc-800 text-sm">
              <div className="space-y-1.5">
                <div className="font-semibold text-white">Mobile-First</div>
                <p className="text-zinc-300 leading-relaxed text-xs sm:text-sm">
                  La aplicación fue pensada principalmente para usuarios
                  móviles, priorizando una experiencia rápida y clara desde
                  dispositivos celulares.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="font-semibold text-white">SEO & Indexación</div>
                <p className="text-zinc-300 leading-relaxed text-xs sm:text-sm">
                  Además del desarrollo, trabajé en su presencia en buscadores
                  mediante optimización SEO, sitemap XML estructurado e
                  indexación en Google.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="font-semibold text-white">
                  PostgreSQL & NestJS
                </div>
                <p className="text-zinc-300 leading-relaxed text-xs sm:text-sm">
                  Modelado relacional estricto con Prisma ORM, DTOs validados y
                  servicios modulares desacoplados.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-zinc-800">
              <div className="flex items-center gap-3">
                <a
                  href={
                    burgerSosa.liveUrl || "https://burger-sosa.up.railway.app/"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Visitar sitio en producción</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Link href="/proyectos/burger-sosa" className="btn-secondary">
                  <span>Ver análisis técnico</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="text-xs font-mono text-zinc-300">
                Railway • Docker • PostgreSQL • NestJS • React
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MÁS ALLÁ DEL CÓDIGO */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
            02 / Criterio
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Más allá del código
          </h2>
        </div>

        <div className="max-w-3xl space-y-4 text-zinc-200 text-base leading-relaxed">
          <p>
            En una época donde las herramientas de IA forman parte cada vez más
            del desarrollo, considero todavía más importante comprender los
            fundamentos.
          </p>
          <p>
            Utilizo herramientas de IA como apoyo para investigar, acelerar
            tareas y explorar soluciones, pero mi objetivo es entender qué estoy
            construyendo, por qué funciona y qué consecuencias tiene cada
            decisión técnica.
          </p>
          <div className="text-white font-semibold border-l-2 border-white pl-4 py-2 text-lg">
            «Me interesa desarrollar criterio técnico, no solamente producir
            código.»
          </div>
        </div>

        <div className="pt-2">
          <Link
            href="/sobre-mi"
            className="text-sm font-mono text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors font-medium"
          >
            <span>Conocer mi perfil y metodología de trabajo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. EXPLORANDO DEVOPS & INFRAESTRUCTURA */}
      <section className="border-t border-zinc-800 bg-[#08080a] py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-zinc-800 pb-4">
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                03 / Especialización
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white mt-1">
                Explorando DevOps & Cloud
              </h2>
            </div>
            <Link
              href="/devops"
              className="text-sm font-mono text-zinc-300 hover:text-white flex items-center gap-1 transition-colors font-medium"
            >
              <span>Ver sección DevOps completa</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-base text-zinc-300 max-w-2xl leading-relaxed">
            Mi camino profesional está comenzando a expandirse desde el
            desarrollo Backend hacia infraestructura y DevOps. Actualmente estoy
            profundizando en containerización, despliegues, infraestructura como
            código y servicios cloud.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="border border-zinc-700 bg-[#0c0c0e] p-5 rounded-lg space-y-2 card-taste">
              <div className="text-xs font-mono text-zinc-400 font-semibold">
                01 / Docker
              </div>
              <div className="text-base font-bold text-white">
                Containerización
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Ambientes reproducibles e imágenes multi-stage optimizadas.
              </p>
            </div>

            <div className="border border-zinc-700 bg-[#0c0c0e] p-5 rounded-lg space-y-2 card-taste">
              <div className="text-xs font-mono text-zinc-400 font-semibold">
                02 / AWS
              </div>
              <div className="text-base font-bold text-white">
                Servicios Cloud
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Conceptos fundamentales de cómputo, almacenamiento y redes.
              </p>
            </div>

            <div className="border border-zinc-700 bg-[#0c0c0e] p-5 rounded-lg space-y-2 card-taste">
              <div className="text-xs font-mono text-zinc-400 font-semibold">
                03 / Terraform
              </div>
              <div className="text-base font-bold text-white">
                Infrastructure as Code
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                Aprovisionamiento y automatización declarativa de recursos.
              </p>
            </div>

            <div className="border border-zinc-700 bg-[#0c0c0e] p-5 rounded-lg space-y-2 card-taste">
              <div className="text-xs font-mono text-zinc-400 font-semibold">
                04 / Deployment
              </div>
              <div className="text-base font-bold text-white">Producción</div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                El proceso de llevar código a disponibilidad real con SSL y
                CI/CD.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OTROS PROYECTOS */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-zinc-800 pb-4">
          <div>
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
              04 / Portafolio
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white mt-1">
              Otros proyectos
            </h2>
          </div>
          <Link
            href="/proyectos"
            className="text-sm font-mono text-zinc-300 hover:text-white flex items-center gap-1 transition-colors font-medium"
          >
            <span>Ver todos los proyectos ({PROJECTS_DATA.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {secondaryProjects.map((p) => (
            <Link
              key={p.slug}
              href={`/proyectos/${p.slug}`}
              className="border border-zinc-700 bg-[#0c0c0e] p-6 rounded-lg space-y-3 block card-taste group"
            >
              <div className="text-xs font-mono text-zinc-400 font-medium">
                {p.category}
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-zinc-200 transition-colors flex items-center justify-between">
                <span>{p.title}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white" />
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {p.description}
              </p>
              <div className="pt-2 text-xs font-mono text-zinc-400 border-t border-zinc-800">
                {p.technologies.slice(0, 3).join(" • ")}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION FINAL */}
      <section className="border-t border-zinc-800 bg-[#08080a] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-5">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            ¿Hablamos?
          </h2>
          <p className="text-base text-zinc-300 leading-relaxed max-w-xl mx-auto">
            Si estás buscando un desarrollador Backend Junior, querés
            intercambiar ideas sobre un proyecto o simplemente hablar de
            tecnología, podés contactarme.
          </p>
          <div className="pt-2">
            <Link href="/contacto" className="btn-primary text-sm px-6 py-3">
              <span>Ir al formulario de contacto</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
