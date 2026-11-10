import { Target, Users, BookOpen, ShieldCheck } from 'lucide-react';

export function LookingForSection() {
  return (
    <section className="py-20 px-4 sm:px-6 border-t border-[#161c2b] bg-[#0b0e16]/60 relative">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
            07 / Oportunidad
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
            ¿Qué estoy buscando?
          </h2>
        </div>

        {/* Narrative & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 bg-[#0f1422] border border-[#1b253b] rounded-2xl p-6 sm:p-8 space-y-5 flex flex-col justify-between">
            <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
                Estoy buscando mi <span className="text-slate-100 font-semibold">primera oportunidad profesional como desarrollador Backend / Software Developer</span>, donde pueda seguir aprendiendo, asumir responsabilidades y aportar desde mis conocimientos actuales.
              </p>
              <p>
                Me interesan especialmente los equipos donde pueda trabajar con <span className="text-emerald-300 font-medium">APIs, bases de datos, arquitectura backend, Docker, cloud o infraestructura</span>, y donde exista espacio para aprender de desarrolladores con más experiencia.
              </p>
            </div>

            <div className="pt-4 border-t border-[#192338] flex items-center gap-3 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Disponibilidad inmediata para roles Junior / Trainee</span>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            <div className="bg-[#0d121d] border border-[#1b2336] rounded-xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                <Users className="w-4 h-4" />
                <span>Mentoría y trabajo en equipo</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                Aprender buenas prácticas, patrones de diseño y code reviews colaborativos junto a desarrolladores senior.
              </p>
            </div>

            <div className="bg-[#0d121d] border border-[#1b2336] rounded-xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold">
                <Target className="w-4 h-4" />
                <span>Desafíos técnicos reales</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400">
                Construir sistemas confiables que resuelvan necesidades operativas de producto o negocio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
