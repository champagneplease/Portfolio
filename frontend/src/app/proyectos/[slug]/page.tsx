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
    <article className="max-w-4xl mx-auto px-6 py-16 sm:py-20 space-y-12">
      {/* Back button */}
      <div>
        <Link
          href="/proyectos"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver a proyectos</span>
        </Link>
      </div>

      {/* Header */}
      <header className="space-y-4 border-b border-zinc-900 pb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
          <span className="text-zinc-300 font-semibold">{project.category}</span>
          {project.featured && (
            <>
              <span>•</span>
              <span className="px-2 py-0.5 rounded border border-zinc-700 bg-zinc-900 text-white font-medium">
                ● En producción
              </span>
            </>
          )}
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors"
            >
              <span>Ver aplicación desplegada</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded border border-zinc-800 text-zinc-300 text-xs font-mono hover:text-white hover:border-zinc-700 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Ver código fuente</span>
            </a>
          )}
        </div>
      </header>

      {/* Overview Context */}
      <section className="space-y-4">
        <h2 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">
          Contexto y Alcance
        </h2>
        <div className="text-sm sm:text-base text-zinc-300 leading-relaxed space-y-4">
          <p>{project.longDescription || project.description}</p>
        </div>
      </section>

      {/* Architecture Flow */}
      {project.architectureFlow && (
        <section className="space-y-4">
          <h2 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">
            Flujo de Arquitectura Backend
          </h2>
          <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-5 font-mono text-xs text-zinc-300 overflow-x-auto whitespace-pre leading-relaxed">
            {project.architectureFlow}
          </div>
        </section>
      )}

      {/* DevOps Pipeline */}
      {project.devopsFlow && (
        <section className="space-y-4">
          <h2 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">
            Pipeline de Despliegue & DevOps
          </h2>
          <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-5 font-mono text-xs text-zinc-300 overflow-x-auto whitespace-pre leading-relaxed">
            {project.devopsFlow}
          </div>
        </section>
      )}

      {/* Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">
            Características Técnicas Destacadas
          </h2>
          <div className="border border-zinc-800 bg-zinc-950/40 rounded-lg p-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-300">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-zinc-500 font-mono mt-0.5">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Tech Stack */}
      <section className="space-y-4 border-t border-zinc-900 pt-8">
        <h2 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">
          Tecnologías Utilizadas
        </h2>
        <div className="flex flex-wrap gap-2 text-xs font-mono">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Bottom Navigation */}
      <div className="border-t border-zinc-900 pt-8 flex items-center justify-between">
        <Link
          href="/proyectos"
          className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver al catálogo de proyectos</span>
        </Link>
        <Link
          href="/contacto"
          className="text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
        >
          <span>Hablemos de este proyecto</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}

