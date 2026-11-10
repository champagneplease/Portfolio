import { BookOpen, Code2, Database, Container, Rocket, Wrench, CheckCircle } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Aprender',
    desc: 'Fundamentos de ciencias de la computación, estructuras de datos, lógica algorítmica y lenguajes (TypeScript, Python).',
    icon: BookOpen,
  },
  {
    step: '02',
    title: 'Construir proyectos',
    desc: 'Escribir aplicaciones desde cero, enfrentando decisiones de arquitectura y diseño sin limitarse a tutoriales guiados.',
    icon: Code2,
  },
  {
    step: '03',
    title: 'APIs y bases de datos',
    desc: 'Diseñar contratos REST, DTOs, validaciones estrictas y modelado relacional consistente con PostgreSQL y Prisma.',
    icon: Database,
  },
  {
    step: '04',
    title: 'Dockerizar',
    desc: 'Crear Dockerfiles optimizados y Docker Compose para garantizar que el software funcione de manera idéntica en cualquier máquina.',
    icon: Container,
  },
  {
    step: '05',
    title: 'Desplegar',
    desc: 'Configurar pipelines de integración, variables de entorno seguras, certificados SSL y plataformas en la nube.',
    icon: Rocket,
  },
  {
    step: '06',
    title: 'Resolver problemas reales',
    desc: 'Atender necesidades de usuarios auténticos: tiempos de respuesta, pedidos en vivo, errores en producción y SEO.',
    icon: Wrench,
  },
  {
    step: '07',
    title: 'Software en producción',
    desc: 'Aplicación activa, estable y aportando valor concreto a un negocio gastronómico diario (Burger Sosa).',
    icon: CheckCircle,
  },
];

export function ProductionJourney() {
  return (
    <section className="py-20 px-4 sm:px-6 border-t border-[#161c2b] relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            06 / Evolución práctica
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
            De proyectos a producción
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            La trayectoria de cómo transformé conceptos teóricos en software desplegado y utilizado por usuarios reales.
          </p>
        </div>

        {/* Steps Journey Line */}
        <div className="relative border-l border-[#1f283d] ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
          {STEPS.map((s, index) => {
            const Icon = s.icon;
            const isLast = index === STEPS.length - 1;
            return (
              <div key={s.step} className="relative group">
                {/* Node indicator */}
                <div
                  className={`absolute -left-[35px] sm:-left-[43px] top-0.5 w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono border ${
                    isLast
                      ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-bold shadow-lg shadow-emerald-500/30'
                      : 'bg-[#0f1422] text-slate-400 border-[#232e46] group-hover:border-emerald-500/50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-emerald-400/80">{s.step}</span>
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final Insight Quote */}
        <div className="p-6 rounded-xl bg-[#0d121d] border border-[#1b253b] flex items-center gap-4">
          <div className="w-2 h-12 bg-emerald-500 rounded-full shrink-0" />
          <p className="text-sm sm:text-base text-slate-200 font-medium italic">
            «Uno de mis objetivos actuales es transformar el conocimiento técnico en software que realmente pueda utilizarse.»
          </p>
        </div>
      </div>
    </section>
  );
}

