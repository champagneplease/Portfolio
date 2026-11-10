import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { PROJECTS_DATA } from '@/lib/projects-data';

export function generateStaticParams() {
  return PROJECTS_DATA.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);
  if (!project) return { title: 'Proyecto no encontrado' };

  return {
    title: `${project.title} | Nacho Miranda`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-6 py-16 sm:py-20 space-y-12 animate-fade-in-up">
      {/* Back button */}
      <div>
        <Link
          href="/proyectos"
          className="inline-flex items-center gap-2 text-sm font-mono text-zinc-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al catálogo de proyectos</span>
        </Link>
      </div>

      {/* Header */}
      <header className="space-y-4 border-b border-zinc-800 pb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-300">
          <span className="text-white font-semibold">{project.category}</span>
          {project.featured && (
            <>
              <span className="text-zinc-600">•</span>
              <span className="px-2.5 py-0.5 rounded border border-zinc-600 bg-zinc-800 text-white font-semibold">
                ● En producción
              </span>
            </>
          )}
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-zinc-200 leading-relaxed max-w-3xl">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-4 pt-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Ver aplicación desplegada</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Ver código fuente</span>
            </a>
          )}
        </div>
      </header>

      {/* Overview Context */}
      <section className="space-y-3">
        <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
          Contexto y Solución Técnica
        </h2>
        <div className="text-base text-zinc-200 leading-relaxed space-y-4">
          <p>{project.longDescription || project.description}</p>
        </div>
      </section>

      {/* Architecture Flow */}
      {project.architectureFlow && (
        <section className="space-y-3">
          <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
            Flujo de Arquitectura Backend
          </h2>
          <div className="architecture-flow-box rounded-lg border border-zinc-700 bg-[#0c0c0e] p-6 font-mono text-xs sm:text-sm text-zinc-200 overflow-x-auto whitespace-pre leading-relaxed shadow-lg">
            {project.architectureFlow}
          </div>
        </section>
      )}

      {/* DevOps Pipeline */}
      {project.devopsFlow && (
        <section className="space-y-3">
          <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
            Pipeline de Despliegue & DevOps
          </h2>
          <div className="architecture-flow-box rounded-lg border border-zinc-700 bg-[#0c0c0e] p-6 font-mono text-xs sm:text-sm text-zinc-200 overflow-x-auto whitespace-pre leading-relaxed shadow-lg">
            {project.devopsFlow}
          </div>
        </section>
      )}

      {/* Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
            Características Técnicas Destacadas
          </h2>
          <div className="border border-zinc-700 bg-[#0c0c0e] rounded-lg p-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-zinc-200">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="text-white font-bold mt-0.5">•</span>
                  <span className="leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Tech Stack */}
      <section className="space-y-3 border-t border-zinc-800 pt-8">
        <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
          Tecnologías Utilizadas
        </h2>
        <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-200">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 rounded bg-zinc-900 border border-zinc-700 font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <div className="border-t border-zinc-800 pt-8 flex items-center justify-between">
        <Link
          href="/proyectos"
          className="text-sm font-mono text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al catálogo</span>
        </Link>
        <Link
          href="/contacto"
          className="btn-primary text-xs"
        >
          <span>Hablemos de este proyecto</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
