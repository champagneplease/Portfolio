'use client';

import { useState, useEffect } from 'react';

interface GreetingStep {
  cmd: string;
  mobileCmd: string;
  keyword: string;
  keywordColor: string;
  text: string;
  mobileText: string;
}

const GREETINGS: GreetingStep[] = [
  {
    cmd: 'cd portfolio && npm run dev',
    mobileCmd: 'npm run dev',
    keyword: 'return',
    keywordColor: 'text-[#e0234e]',
    text: '"Hola mundo, te doy la bienvenida a mi portfolio";',
    mobileText: '"Bienvenido a mi portfolio";',
  },
  {
    cmd: 'curl -s /api/saludo',
    mobileCmd: 'curl /api/saludo',
    keyword: '200 OK',
    keywordColor: 'text-emerald-400',
    text: '{"message": "Bienvenido a mi portfolio"}',
    mobileText: '{"msg": "Bienvenido"}',
  },
  {
    cmd: 'nest start --watch backend',
    mobileCmd: 'nest start backend',
    keyword: '[Nest]',
    keywordColor: 'text-[#e0234e]',
    text: 'Servidor listo en :4000 • Bienvenido a mi portfolio',
    mobileText: 'Servidor listo :4000 • Bienvenido',
  },
  {
    cmd: 'docker compose up -d backend',
    mobileCmd: 'docker compose up -d',
    keyword: '[Docker]',
    keywordColor: 'text-sky-400',
    text: 'portfolio-backend • Healthy & listening on :4000',
    mobileText: 'backend • Healthy en :4000',
  },
];

export function DeveloperGreeting() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % GREETINGS.length);
        setFade(true);
      }, 300);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const current = GREETINGS[index];

  // SSR initial state with exact same locked height & structure to prevent layout shift during hydration
  if (!isMounted) {
    const first = GREETINGS[0];
    return (
      <div className="h-[62px] sm:h-14 flex flex-col justify-center select-none w-full max-w-xl">
        <div className="greeting-terminal-box rounded-lg border border-zinc-800/80 bg-zinc-950/90 px-3 sm:px-4 py-2 font-mono text-[11px] sm:text-xs md:text-sm shadow-sm backdrop-blur-sm space-y-1">
          <div className="flex items-center gap-1.5 sm:gap-2 text-zinc-300 min-w-0">
            <span className="text-emerald-400 font-bold shrink-0">$</span>
            <span className="text-zinc-100 font-medium truncate sm:hidden">
              {first.mobileCmd}
            </span>
            <span className="text-zinc-100 font-medium truncate hidden sm:inline">
              {first.cmd}
            </span>
            <span className="w-1.5 h-3.5 bg-zinc-500 inline-block shrink-0" />
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 pl-3 sm:pl-4 text-zinc-300 min-w-0">
            <span className="text-zinc-500 font-bold shrink-0">↳</span>
            <span className={`font-semibold shrink-0 ${first.keywordColor}`}>
              {first.keyword}
            </span>
            <span className="text-zinc-200 font-normal truncate sm:hidden">
              {first.mobileText}
            </span>
            <span className="text-zinc-200 font-normal truncate hidden sm:inline">
              {first.text}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[62px] sm:h-14 flex flex-col justify-center select-none w-full max-w-xl">
      <div
        aria-live="polite"
        className="greeting-terminal-box rounded-lg border border-zinc-800/80 bg-zinc-950/90 px-3 sm:px-4 py-2 font-mono text-[11px] sm:text-xs md:text-sm shadow-sm backdrop-blur-sm space-y-1 transition-all duration-300 ease-out"
        style={{
          opacity: fade ? 1 : 0,
          transform: fade ? 'translateY(0)' : 'translateY(-3px)',
        }}
      >
        {/* Command prompt */}
        <div className="flex items-center gap-1.5 sm:gap-2 text-zinc-300 min-w-0">
          <span className="text-emerald-400 font-bold shrink-0">$</span>
          {/* Mobile concise command */}
          <span className="text-zinc-100 font-medium truncate sm:hidden">
            {current.mobileCmd}
          </span>
          {/* Desktop full command */}
          <span className="text-zinc-100 font-medium truncate hidden sm:inline">
            {current.cmd}
          </span>
          <span className="w-1.5 h-3.5 bg-zinc-500 animate-pulse inline-block shrink-0" />
        </div>

        {/* Execution Output */}
        <div className="flex items-center gap-1.5 sm:gap-2 pl-3 sm:pl-4 text-zinc-300 min-w-0">
          <span className="text-zinc-500 font-bold shrink-0">↳</span>
          <span className={`font-semibold shrink-0 ${current.keywordColor}`}>
            {current.keyword}
          </span>
          {/* Mobile concise output */}
          <span className="text-zinc-200 font-normal truncate sm:hidden">
            {current.mobileText}
          </span>
          {/* Desktop full output */}
          <span className="text-zinc-200 font-normal truncate hidden sm:inline">
            {current.text}
          </span>
        </div>
      </div>
    </div>
  );
}
