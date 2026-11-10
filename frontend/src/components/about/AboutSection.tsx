import { CheckCircle2, Layers, Server, ShieldCheck, Cpu } from 'lucide-react';

const CURRENT_FOCUS = [
  'Backend y diseño de APIs',
  'Arquitectura de aplicaciones',
  'Docker y containerización',
  'Deploy y ambientes de producción',
  'AWS (servicios cloud fundamentales)',
  'Terraform (Infrastructure as Code)',
  'Buenas prácticas y código mantenible',
  'Fundamentos de infraestructura y DevOps',
];

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 border-t border-[#161c2b] relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            01 / Perfil
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
            Sobre mí
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Estudiante de Desarrollo de Software y desarrollador Backend en formación, orientado a infraestructura y buenas prácticas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Bio Text */}
          <div className="lg:col-span-7 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              Soy estudiante de Desarrollo de Software y desarrollador Backend en formación, con experiencia construyendo APIs, aplicaciones web y sistemas conectados a bases de datos.
            </p>
            <p>
              Mi principal enfoque está en el desarrollo Backend con <span className="text-emerald-300 font-medium">Python y TypeScript</span>, trabajando con tecnologías como <span className="text-slate-100">NestJS, Express, Django, Flask y FastAPI</span>.
            </p>
            <p>
              En paralelo, estoy profundizando en infraestructura y DevOps, especialmente en <span className="text-cyan-300 font-medium">Docker, despliegue de aplicaciones, AWS y Terraform</span>.
            </p>
            <p>
              Me interesan especialmente los problemas que requieren pensar más allá del código: <span className="text-slate-100">arquitectura, comunicación entre servicios, bases de datos, seguridad, despliegue y mantenimiento</span>.
            </p>
            <p className="pt-2 text-slate-400 italic border-l-2 border-emerald-500/40 pl-4">
              «Creo que programar no consiste solamente en escribir código, sino en entender el problema y encontrar una solución simple, mantenible y adecuada.»
            </p>
          </div>

          {/* Currently Focused On Box */}
          <div className="lg:col-span-5 bg-[#0d121c] border border-[#1b2336] rounded-xl p-6 space-y-5">
            <div className="flex items-center gap-2.5 pb-2 border-b border-[#1b2336]">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Cpu className="w-3.5 h-3.5" />
              </div>
              <h3 className="text-sm font-semibold tracking-wide text-slate-100 uppercase font-mono">
                Actualmente enfocado en
              </h3>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {CURRENT_FOCUS.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-emerald-400 mt-0.5 text-sm">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

