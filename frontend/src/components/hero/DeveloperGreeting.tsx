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
    cmd: 'curl -s https://nachomiranda.dev/api/saludo',
    keyword: 'HTTP 200',
    text: '{ "message": "Hola mundo, te doy la bienvenida a mi portfolio" }',
  },
  {
    cmd: 'nest start --watch backend',
    keyword: '[NestFactory]',
    text: 'Iniciando servidor • ¡Bienvenido a mi portfolio!',
  },
  {
    cmd: 'docker compose up -d backend',
    keyword: '[Container]',
    text: 'portfolio-backend-1: Ready & Listening on port 4000',
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
      }, 350);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const current = GREETINGS[index];

  // SSR initial state
  if (!isMounted) {
    return (
      <div className="font-mono text-xs sm:text-sm space-y-1 select-none">
        <div className="flex items-center gap-2 text-zinc-300">
          <span className="text-emerald-400 font-bold">$</span>
          <span>cd portfolio && npm run dev</span>
        </div>
        <div className="flex items-center gap-2 pl-4 text-zinc-300">
          <span className="text-zinc-500 font-bold">↳</span>
          <span className="text-[#e0234e] font-semibold">return</span>
          <span className="text-zinc-200">"Hola mundo, te doy la bienvenida a mi portfolio";</span>
        </div>
      </div>
    );
  }

  return (
    <div
      aria-live="polite"
      className="font-mono text-xs sm:text-sm space-y-1.5 select-none min-h-[3rem] transition-all duration-350 ease-out"
      style={{
        opacity: fade ? 1 : 0,
        transform: fade ? 'translateY(0)' : 'translateY(-6px)',
      }}
    >
      {/* Command prompt */}
      <div className="flex items-center gap-2 text-zinc-300">
        <span className="text-emerald-400 font-bold">$</span>
        <span className="text-zinc-200 font-medium">{current.cmd}</span>
        <span className="w-1.5 h-3.5 bg-zinc-500 animate-pulse inline-block" />
      </div>

      {/* Execution Output */}
      <div className="flex items-center gap-2 pl-4 text-zinc-300 flex-wrap">
        <span className="text-zinc-500 font-bold">↳</span>
        <span className="text-[#e0234e] font-semibold">{current.keyword}</span>
        <span className="text-zinc-100 font-normal">{current.text}</span>
      </div>
    </div>
  );
}

