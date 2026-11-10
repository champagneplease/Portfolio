'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/ui/Icons';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

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

        {/* Social / External + Theme Toggle */}
        <div className="hidden md:flex items-center gap-4 text-xs font-mono">
          <ThemeToggle />
          <span className="w-px h-4 bg-zinc-800" />
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
          <a
            href="https://www.instagram.com/_nachomirnd/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5 font-medium"
            aria-label="Instagram de Nacho Miranda"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Instagram</span>
          </a>
        </div>

        {/* Mobile controls: Theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative w-10 h-10 rounded-lg flex flex-col items-center justify-center gap-1.5 text-zinc-300 hover:text-white hover:bg-zinc-900/60 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-600 cursor-pointer"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`w-5 h-[2px] rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
                mobileMenuOpen ? 'translate-y-[8px] rotate-45 bg-[#e0234e]' : 'bg-current'
              }`}
            />
            <span
              className={`w-5 h-[2px] rounded-full transition-all duration-200 ease-out origin-center ${
                mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 bg-current'
              }`}
            />
            <span
              className={`w-5 h-[2px] rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] origin-center ${
                mobileMenuOpen ? '-translate-y-[8px] -rotate-45 bg-[#e0234e]' : 'bg-current'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer with smooth unfolding transition & staggered item reveal */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] border-b ${
          mobileMenuOpen
            ? 'max-h-[460px] opacity-100 border-zinc-800 bg-[#08080a]/95 backdrop-blur-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)]'
            : 'max-h-0 opacity-0 border-transparent bg-transparent pointer-events-none'
        }`}
      >
        <div className="px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-1 text-sm">
            {NAV_ITEMS.map((item, index) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${index * 35}ms` : '0ms',
                    transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-6px)',
                    opacity: mobileMenuOpen ? 1 : 0,
                  }}
                  className={`py-2.5 px-3 rounded-lg text-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center ${
                    isActive
                      ? 'text-white font-semibold border-l-2 border-[#e0234e] bg-zinc-900/70 pl-3.5'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/30'
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div
            style={{
              transitionDelay: mobileMenuOpen ? `${NAV_ITEMS.length * 35}ms` : '0ms',
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-6px)',
              opacity: mobileMenuOpen ? 1 : 0,
            }}
            className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          >
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/champagneplease"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/nachomirnd/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/_nachomirnd/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white flex items-center gap-1.5 transition-colors"
                aria-label="Instagram de Nacho Miranda"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
            </div>

            <span className="text-zinc-500 font-mono text-[11px]">Nacho Miranda</span>
          </div>
        </div>
      </div>
    </header>
  );
}
