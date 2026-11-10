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
                {/* Slim relief indicator underneath with fluid entrance animation */}
                {isActive ? (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] rounded-full bg-gradient-to-r from-[#e0234e] via-[#ff5376] to-[#e0234e] shadow-[0_1px_8px_rgba(224,35,78,0.75)] animate-nav-line"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] rounded-full bg-zinc-600/40 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-250 ease-out"
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
                  className={`relative py-1.5 text-sm transition-colors ${
                    isActive
                      ? 'text-white font-semibold pl-3'
                      : 'text-zinc-400 hover:text-zinc-200 pl-3'
                  }`}
                >
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-1 bottom-1 w-[2px] rounded-full bg-gradient-to-b from-[#e0234e] to-[#ff5376] shadow-[0_0_8px_rgba(224,35,78,0.7)] animate-nav-mobile"
                    />
                  )}
                  <span>{item.label}</span>
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
