'use client';

import { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

export function TerminalSnippet() {
  const [copied, setCopied] = useState(false);

  const commandText = `$ whoami\nnacho-miranda\n\n$ focus\nbackend\ndevops\ncloud\narchitecture`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(commandText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-md mx-auto lg:mx-0 rounded-xl bg-[#0b0e14] border border-[#1b2233] shadow-2xl shadow-black/60 overflow-hidden font-mono text-xs sm:text-[13px] transition-all hover:border-[#273248]">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#0e121a] border-b border-[#1b2233]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2a3449]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#2a3449]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#2a3449]" />
          <span className="ml-2 text-[11px] text-slate-400 flex items-center gap-1">
            <Terminal className="w-3 h-3 text-slate-500" />
            bash ~ dev-profile
          </span>
        </div>
        <button
          onClick={copyToClipboard}
          className="p-1 text-slate-500 hover:text-slate-300 rounded transition-colors"
          title="Copiar contenido"
          aria-label="Copiar texto de terminal"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-400" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-4 space-y-3 text-slate-300">
        <div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-emerald-400 font-bold">$</span>
            <span className="text-slate-200">whoami</span>
          </div>
          <div className="pl-4 mt-1 text-slate-400">
            nacho-miranda
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-emerald-400 font-bold">$</span>
            <span className="text-slate-200">focus</span>
          </div>
          <div className="pl-4 mt-1 space-y-0.5 text-slate-400">
            <div className="flex items-center gap-1.5 text-emerald-400/90">
              <span className="text-[10px] text-slate-600">›</span> backend
            </div>
            <div className="flex items-center gap-1.5 text-cyan-400/90">
              <span className="text-[10px] text-slate-600">›</span> devops
            </div>
            <div className="flex items-center gap-1.5 text-sky-400/90">
              <span className="text-[10px] text-slate-600">›</span> cloud
            </div>
            <div className="flex items-center gap-1.5 text-indigo-400/90">
              <span className="text-[10px] text-slate-600">›</span> architecture
            </div>
          </div>
        </div>

        <div className="pt-1 flex items-center gap-2 text-slate-500 text-[11px]">
          <span className="text-emerald-400 font-bold">$</span>
          <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
