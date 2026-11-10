import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 bg-[#08080a] py-12 px-6 text-sm text-zinc-300">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-white font-bold">Nacho Miranda</p>
          <p className="text-zinc-300 font-mono text-xs mt-0.5">
            Backend Developer | NestJS + TypeScript & Python
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-zinc-300">
          <Link href="/proyectos" className="hover:text-white transition-colors">
            Proyectos
          </Link>
          <Link href="/devops" className="hover:text-white transition-colors">
            DevOps
          </Link>
          <Link href="/sobre-mi" className="hover:text-white transition-colors">
            Sobre mí
          </Link>
          <Link href="/contacto" className="hover:text-white transition-colors">
            Contacto
          </Link>
          <a
            href="https://github.com/champagneplease"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nachomirnd/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
