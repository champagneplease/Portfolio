'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme');
      const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      const initial = saved === 'light' || saved === 'dark' ? saved : (systemPrefersLight ? 'light' : 'dark');
      
      setTheme(initial);
      applyTheme(initial);
    } catch {
      setTheme('dark');
    }
    setMounted(true);

    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'theme' && (e.newValue === 'light' || e.newValue === 'dark')) {
        setTheme(e.newValue);
        applyTheme(e.newValue);
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const applyTheme = (newTheme: 'dark' | 'light') => {
    const root = document.documentElement;
    root.classList.toggle('dark', newTheme === 'dark');
    root.classList.toggle('light', newTheme === 'light');
    
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) {
      meta.setAttribute('content', newTheme);
    }
    
    try {
      localStorage.setItem('theme', newTheme);
    } catch {}
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className={`w-9 h-9 rounded-lg flex items-center justify-center text-zinc-400 border border-zinc-800 bg-zinc-900/60 transition-colors ${className}`}
        aria-label="Cambiar tema de color"
      >
        <span className="w-4 h-4" />
      </button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e0234e] cursor-pointer ${
        isDark
          ? 'text-zinc-300 hover:text-white border border-zinc-800 bg-[#0e0e12] hover:bg-zinc-800/80 hover:border-zinc-700'
          : 'text-zinc-700 hover:text-black border border-zinc-200 bg-white hover:bg-zinc-100 hover:border-zinc-300 shadow-sm'
      } ${className}`}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {/* Sun icon: shown in dark mode */}
        <Sun
          className={`w-4 h-4 transition-all duration-300 absolute inset-0 ${
            isDark
              ? 'opacity-100 rotate-0 scale-100 text-amber-300'
              : 'opacity-0 -rotate-90 scale-50 text-zinc-400'
          }`}
        />
        {/* Moon icon: shown in light mode */}
        <Moon
          className={`w-4 h-4 transition-all duration-300 absolute inset-0 ${
            isDark
              ? 'opacity-0 rotate-90 scale-50 text-zinc-400'
              : 'opacity-100 rotate-0 scale-100 text-zinc-800'
          }`}
        />
      </div>
    </button>
  );
}

