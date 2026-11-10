import { Brain, Compass, Terminal, Shield, CheckCircle } from 'lucide-react';

export function PhilosophySection() {
  return (
    <section id="como-pienso" className="py-20 px-4 sm:px-6 border-t border-[#161c2b] bg-[#0b0e15]/50 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
            02 / Enfoque técnico
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
            Más allá del código
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Criterio técnico, fundamentos sólidos y comprensión profunda frente a la generación acelerada de código.
          </p>
        </div>

        {/* Narrative Box with Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          <div className="md:col-span-7 bg-[#0f1422] border border-[#1b253b] rounded-2xl p-6 sm:p-8 space-y-5 flex flex-col justify-between">
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                En una época donde las herramientas de IA forman parte cada vez más del desarrollo, considero todavía más importante <span className="text-slate-100 font-medium">comprender los fundamentos</span>.
              </p>
              <p>
                Utilizo herramientas de IA como apoyo para investigar, acelerar tareas y explorar soluciones, pero mi objetivo es <span className="text-emerald-300 font-medium">entender qué estoy construyendo</span>, por qué funciona y qué consecuencias tiene cada decisión técnica.
              </p>
              <div className="pt-2 text-base sm:text-lg font-medium text-slate-100 border-l-2 border-cyan-500 pl-4">
                «Me interesa desarrollar criterio técnico, no solamente producir código.»
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded bg-[#161f33] border border-[#233152]">Fundamentos &gt; Atajos</span>
              <span className="px-2.5 py-1 rounded bg-[#161f33] border border-[#233152]">Análisis de Trade-offs</span>
              <span className="px-2.5 py-1 rounded bg-[#161f33] border border-[#233152]">Mantenibilidad</span>
            </div>
          </div>

          {/* Three Pillar Cards */}
          <div className="md:col-span-5 grid grid-cols-1 gap-4">
            <div className="bg-[#0d121c] border border-[#1b2336] rounded-xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                <Compass className="w-4 h-4" />
                <span>Criterio y arquitectura</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Evaluar estructura de carpetas, separación de responsabilidades y flujo de datos antes de escribir la primera línea.
              </p>
            </div>

            <div className="bg-[#0d121c] border border-[#1b2336] rounded-xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">
                <Brain className="w-4 h-4" />
                <span>IA como copiloto, no piloto ciego</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Utilizar modelos para explorar alternativas, pero validar exhaustivamente qué ejecuta cada función y qué dependencias introduce.
              </p>
            </div>

            <div className="bg-[#0d121c] border border-[#1b2336] rounded-xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-indigo-400 text-sm font-semibold">
                <Shield className="w-4 h-4" />
                <span>Operatividad real</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Pensar en logs, manejo de errores, variables de entorno, consistencia en base de datos y comportamiento en producción.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
