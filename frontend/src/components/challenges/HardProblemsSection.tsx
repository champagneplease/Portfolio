import { Bug, Sparkles, MessageSquare, Search } from 'lucide-react';

export function HardProblemsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 border-t border-[#161c2b] relative">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-2xl bg-[#0d121c] border border-[#1c263c] p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              08 / Mentalidad
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 flex items-center gap-3">
              Me gustan los problemas difíciles.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                Una de las partes que más disfruto del desarrollo es encontrarme con un problema que inicialmente no sé cómo resolver.
              </p>
              <p>
                Investigar, probar alternativas, equivocarme, entender qué está fallando y finalmente encontrar una solución es una de las cosas que más me motiva.
              </p>
              <p className="text-slate-400">
                También disfruto intercambiar ideas con otras personas y analizar diferentes enfoques para llegar a una solución simple, limpia y mantenible.
              </p>
            </div>

            <div className="md:col-span-4 bg-[#090c14] border border-[#162033] rounded-xl p-5 space-y-3 font-mono text-xs">
              <div className="text-slate-400 pb-2 border-b border-[#141b2c] flex items-center justify-between">
                <span>debug_flow.sh</span>
                <Bug className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div className="space-y-1.5 text-slate-400">
                <div className="text-slate-300">1. Analizar logs y trazas</div>
                <div className="text-slate-300">2. Aislar caso reproducible</div>
                <div className="text-slate-300">3. Hipótesis y pruebas</div>
                <div className="text-emerald-400">4. Solución validada ✓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

