'use client';

import { useState, useEffect } from 'react';

interface GreetingStep {
  cmd: string;
  keyword: string;
  text: string;
}

const GREETINGS: GreetingStep[] = [
  {
    cmd: 'cd portfolio && npm run dev',
    keyword: 'return',
    text: '"Hola mundo, te doy la bienvenida a mi portfolio";',
  },
  {
    cmd: 'curl -s /api/saludo',
    keyword: 'HTTP 200',
    text: '{"message": "Hola mundo, te doy la bienvenida a mi portfolio"}',
  },
  {
    cmd: 'nest start --watch backend',
    keyword: '[Nest]',
    text: 'Servidor listo en :4000 • Bienvenido a mi portfolio',
  },
  {
    cmd: 'docker compose up -d backend',
    keyword: '[Docker]',
    text: 'portfolio-backend-1 • Healthy & listening on :4000',
  },
];

export function DeveloperGreeting() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const interval = setInterval(() => {
      // Fade out
      setFade(false);

      // Change text after fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % GREETINGS.length);
        // Fade in
        setFade(true);
      }, 300);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const current = GREETINGS[index];

  // SSR initial state with exact same locked height to prevent layout shift during hydration
  if (!isMounted) {
    return (
      <div className="h-14 flex flex-col justify-center overflow-hidden select-none font-mono text-xs sm:text-sm space-y-1.5">
        <div className="flex items-center gap-2 text-zinc-300 min-w-0">
          <span className="text-emerald-400 font-bold shrink-0">$</span>
          <span className="text-zinc-200 font-medium truncate">cd portfolio && npm run dev</span>
          <span className="w-1.5 h-3.5 bg-zinc-500 inline-block shrink-0" />
        </div>
        <div className="flex items-center gap-2 pl-4 text-zinc-300 min-w-0">
          <span className="text-zinc-500 font-bold shrink-0">↳</span>
          <span className="text-[#e0234e] font-semibold shrink-0">return</span>
          <span className="text-zinc-100 font-normal truncate">"Hola mundo, te doy la bienvenida a mi portfolio";</span>
        </div>
      </div>
    );
  }

  return (
    <div className="h-14 flex flex-col justify-center overflow-hidden select-none">
      <div
        aria-live="polite"
        className="font-mono text-xs sm:text-sm space-y-1.5 transition-all duration-300 ease-out"
        style={{
          opacity: fade ? 1 : 0,
          transform: fade ? 'translateY(0)' : 'translateY(-4px)',
        }}
      >
        {/* Command prompt */}
        <div className="flex items-center gap-2 text-zinc-300 min-w-0">
          <span className="text-emerald-400 font-bold shrink-0">$</span>
          <span className="text-zinc-200 font-medium truncate">{current.cmd}</span>
          <span className="w-1.5 h-3.5 bg-zinc-500 animate-pulse inline-block shrink-0" />
        </div>

        {/* Execution Output (Locked to single line, no wrapping or layout shift) */}
        <div className="flex items-center gap-2 pl-4 text-zinc-300 min-w-0">
          <span className="text-zinc-500 font-bold shrink-0">↳</span>
          <span className="text-[#e0234e] font-semibold shrink-0">{current.keyword}</span>
          <span className="text-zinc-100 font-normal truncate">{current.text}</span>
        </div>
      </div>
    </div>
  );
}

