import { Terminal, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export function Footer() {
  return (
    <footer className="border-t border-[#141b2a] bg-[#07090f] py-12 px-4 sm:px-6 text-xs text-slate-500">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Stack Info */}
        <div className="space-y-1 text-center sm:text-left">
          <div className="font-semibold text-slate-200 text-sm">
            Nacho Miranda <span className="font-normal text-slate-400">— Backend Developer</span>
          </div>
          <div className="font-mono text-[11px] text-slate-500">
            Built with Next.js + NestJS + PostgreSQL + Docker
          </div>
        </div>

        {/* Links & Copyright */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/champagneplease"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/nacho-miranda"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:contactonachomiranda@gmail.com"
            className="hover:text-slate-300 transition-colors"
          >
            Email
          </a>
          <a
            href="#top"
            className="text-emerald-400 hover:text-emerald-300 font-mono transition-colors"
          >
            ↑ Volver arriba
          </a>
        </div>
      </div>
    </footer>
  );
}
