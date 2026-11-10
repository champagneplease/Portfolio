import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-900 bg-black py-12 px-6 text-xs text-zinc-400">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-zinc-200 font-medium">Nacho Miranda</p>
          <p className="text-zinc-400 font-mono mt-0.5">
            Backend Developer | NestJS + TypeScript & Python
          </p>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs text-zinc-400">
          <Link href="/proyectos" className="hover:text-zinc-200 transition-colors">
            Proyectos
          </Link>
          <Link href="/devops" className="hover:text-zinc-200 transition-colors">
            DevOps
          </Link>
          <Link href="/sobre-mi" className="hover:text-zinc-200 transition-colors">
            Sobre mí
          </Link>
          <Link href="/contacto" className="hover:text-zinc-200 transition-colors">
            Contacto
          </Link>
          <a
            href="https://github.com/champagneplease"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-200 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
