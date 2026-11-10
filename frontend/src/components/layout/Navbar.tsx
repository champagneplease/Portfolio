'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Terminal, Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#090a0f]/90 backdrop-blur-md border-b border-[#1b2233]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-slate-100 font-medium tracking-tight hover:text-emerald-400 transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-[#101522] border border-[#1e2638] flex items-center justify-center text-emerald-400">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="font-semibold text-sm sm:text-base">nacho.miranda</span>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Backend Jr.
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-400">
          <a href="#sobre-mi" className="hover:text-slate-100 transition-colors">
            Sobre mí
          </a>
          <a href="#como-pienso" className="hover:text-slate-100 transition-colors">
            Más allá del código
          </a>
          <a href="#proyectos" className="hover:text-slate-100 transition-colors">
            Proyectos
          </a>
          <a href="#devops" className="hover:text-slate-100 transition-colors">
            DevOps & Cloud
          </a>
          <a href="#tecnologias" className="hover:text-slate-100 transition-colors">
            Tecnologías
          </a>
          <a href="#contacto" className="hover:text-slate-100 transition-colors">
            Contacto
          </a>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/champagneplease"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-slate-100 hover:bg-[#151b29] rounded-lg transition-colors"
            aria-label="GitHub de Nacho Miranda"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/nacho-miranda"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-slate-100 hover:bg-[#151b29] rounded-lg transition-colors"
            aria-label="LinkedIn de Nacho Miranda"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
          >
            Contactarme
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-slate-100 hover:bg-[#151b29] rounded-lg"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#090a0f]/98 border-b border-[#1b2233] px-6 py-5 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm text-slate-300">
            <a
              href="#sobre-mi"
              onClick={() => setIsOpen(false)}
              className="py-1 hover:text-emerald-400 transition-colors"
            >
              Sobre mí
            </a>
            <a
              href="#como-pienso"
              onClick={() => setIsOpen(false)}
              className="py-1 hover:text-emerald-400 transition-colors"
            >
              Más allá del código
            </a>
            <a
              href="#proyectos"
              onClick={() => setIsOpen(false)}
              className="py-1 hover:text-emerald-400 transition-colors"
            >
              Proyectos
            </a>
            <a
              href="#devops"
              onClick={() => setIsOpen(false)}
              className="py-1 hover:text-emerald-400 transition-colors"
            >
              DevOps & Cloud
            </a>
            <a
              href="#tecnologias"
              onClick={() => setIsOpen(false)}
              className="py-1 hover:text-emerald-400 transition-colors"
            >
              Tecnologías
            </a>
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="py-1 hover:text-emerald-400 transition-colors"
            >
              Contacto
            </a>
          </nav>

          <div className="pt-3 border-t border-[#1b2233] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/champagneplease"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-slate-100 rounded-lg hover:bg-[#151b29]"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/nacho-miranda"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-slate-100 rounded-lg hover:bg-[#151b29]"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="text-xs font-medium px-3.5 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition-colors"
            >
              Contactarme
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
