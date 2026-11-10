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

        {/* Desktop Navigation: Unboxed, loose with active relief indicator */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 group transition-colors duration-200 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-zinc-400 hover:text-zinc-100 font-medium'
                }`}
              >
                <span>{item.label}</span>
                {/* Relief indicator underneath */}
                {isActive ? (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] rounded-full bg-gradient-to-r from-[#e0234e] via-[#ff4d6d] to-[#e0234e] shadow-[0_2px_10px_rgba(224,35,78,0.85),0_0_2px_rgba(255,255,255,0.7)]"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1.5 left-0 right-0 h-[1.5px] rounded-full bg-zinc-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  />
                )}
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
            href="https://www.linkedin.com/in/nachomirnd/"
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
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-1.5 text-sm transition-colors ${
                    isActive
                      ? 'text-white font-semibold pl-2.5 border-l-2 border-[#e0234e]'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
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
              href="https://www.linkedin.com/in/nachomirnd/"
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
