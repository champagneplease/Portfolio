'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

const NAV_ITEMS = [
  { href: '/', label: 'Inicio' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/devops', label: 'DevOps & Cloud' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/contacto', label: 'Contacto' },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-900 bg-black/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-white hover:text-zinc-300 transition-colors flex items-center gap-2"
        >
          <span>Nacho Miranda</span>
          <span className="text-xs text-zinc-400 font-mono font-normal">/ backend</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors py-1 ${
                  isActive
                    ? 'text-white font-bold border-b border-white'
                    : 'text-zinc-300 hover:text-white font-medium'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Social / External */}
        <div className="hidden md:flex items-center gap-4 text-xs font-mono">
          <a
            href="https://github.com/champagneplease"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5 font-medium"
            aria-label="GitHub de Nacho Miranda"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/nacho-miranda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5 font-medium"
            aria-label="LinkedIn de Nacho Miranda"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-zinc-400 hover:text-white p-2"
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-900 bg-black px-6 py-4 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1 text-sm ${
                  pathname === item.href
                    ? 'text-white font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-zinc-900 flex items-center gap-4 text-xs font-mono text-zinc-400">
            <a
              href="https://github.com/champagneplease"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/nacho-miranda"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
