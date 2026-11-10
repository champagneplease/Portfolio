import Link from 'next/link';
import { ArrowUpRight, ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { PROJECTS_DATA } from '@/lib/projects-data';

export const metadata = {
  title: 'Proyectos | Nacho Miranda',
  description:
    'Proyectos de desarrollo Backend, APIs REST y DevOps desarrollados por Nacho Miranda, incluyendo la aplicación en producción real Burger Sosa.',
};

export default function ProjectsPage() {
  const burgerSosa = PROJECTS_DATA.find((p) => p.slug === 'burger-sosa') || PROJECTS_DATA[0];
  const secondaryProjects = PROJECTS_DATA.filter((p) => !p.featured);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 space-y-16 animate-fade-in-up overflow-hidden">
      {/* Page Header */}
      <ScrollReveal direction="up">
        <div className="space-y-3">
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
            Portafolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Proyectos
          </h1>
          <p className="text-base sm:text-lg text-zinc-200 max-w-2xl leading-relaxed">
            Una selección de proyectos ordenados según su evolución técnica: desde servicios experimentales de APIs y persistencia hasta una aplicación gastronómica completa desplegada en producción real.
          </p>
        </div>
      </ScrollReveal>

      {/* Featured Project Showcase (Slides in from Left) */}
      <ScrollReveal direction="left" distance={36}>
        <section className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-300 border-b border-zinc-800 pb-2.5">
            <span className="font-semibold text-white">01 / PROYECTO PRINCIPAL EN PRODUCCIÓN</span>
            <span>Burger Sosa</span>
          </div>

          <div className="border border-zinc-700 bg-[#0c0c0e] rounded-xl p-5 sm:p-10 space-y-6 shadow-xl card-taste">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded border border-zinc-600 bg-zinc-800 text-white font-semibold">
                  ● En producción real
                </span>
                <span className="text-zinc-300 font-medium">{burgerSosa.category}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {burgerSosa.title}
              </h2>
              <p className="text-base sm:text-lg text-zinc-200 leading-relaxed max-w-3xl">
                {burgerSosa.longDescription}
              </p>
            </div>

            {/* Highlights checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-y border-zinc-800 py-5 text-sm text-zinc-200">
              {burgerSosa.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="text-white font-bold mt-0.5">•</span>
                  <span className="leading-snug">{h}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              <div className="flex flex-wrap items-center gap-3">
                {burgerSosa.liveUrl && (
                  <a
                    href={burgerSosa.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Visitar sitio en producción</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <Link
                  href="/proyectos/burger-sosa"
                  className="btn-secondary"
                >
                  <span>Ver arquitectura y pipeline</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-300">
                {burgerSosa.technologies.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Secondary Projects Section */}
      <section className="space-y-6 pt-4">
        <ScrollReveal direction="up">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-300 border-b border-zinc-800 pb-2.5">
            <span className="font-semibold text-white">02 / PROYECTOS SECUNDARIOS Y EXPERIMENTACIÓN</span>
            <span>{secondaryProjects.length} proyectos</span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryProjects.map((p, idx) => {
            const dir = idx % 2 === 0 ? 'left' : 'right';
            return (
              <ScrollReveal key={p.slug} direction={dir} distance={30} delay={idx * 75}>
                <div className="border border-zinc-700 bg-[#0c0c0e] rounded-xl p-6 flex flex-col justify-between space-y-5 card-taste shadow-lg h-full">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-300">
                      <span className="font-semibold text-zinc-200">{p.category}</span>
                      <div className="flex items-center gap-2">
                        {p.githubUrl && (
                          <a
                            href={p.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-300 hover:text-white p-1"
                            aria-label={`Ver código de ${p.title} en GitHub`}
                          >
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        )}
                        {p.liveUrl && (
                          <a
                            href={p.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-300 hover:text-white p-1"
                            aria-label={`Ver demo de ${p.title}`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white">
                      <Link href={`/proyectos/${p.slug}`} className="hover:underline">
                        {p.title}
                      </Link>
                    </h3>

                    <p className="text-sm text-zinc-200 leading-relaxed">
                      {p.description}
                    </p>

                    <div className="space-y-1.5 text-xs text-zinc-300 pt-3 border-t border-zinc-800">
                      {p.highlights.slice(0, 3).map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-zinc-200">
                          <span className="text-zinc-400 font-mono mt-0.5">›</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5 text-xs font-mono text-zinc-300">
                      {p.technologies.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700">
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/proyectos/${p.slug}`}
                      className="text-xs font-mono text-zinc-200 hover:text-white flex items-center gap-1 transition-colors font-medium"
                    >
                      <span>Detalles</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
