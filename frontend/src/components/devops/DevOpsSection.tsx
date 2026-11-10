import { Container, Cloud, Terminal, GitBranch, Rocket, Server, Wrench } from 'lucide-react';

const DEVOPS_AREAS = [
  {
    title: 'Docker',
    status: 'Profundizando',
    badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    icon: Container,
    description: 'Containerización y ambientes reproducibles.',
    details:
      'Empaquetado de aplicaciones Node.js/NestJS y Python en contenedores Docker aislados. Multi-stage builds para optimizar peso de imágenes y Docker Compose para orquestar servicios (API + PostgreSQL) en local.',
  },
  {
    title: 'AWS',
    status: 'Primeros pasos',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    icon: Cloud,
    description: 'Trabajando con infraestructura y servicios cloud.',
    details:
      'Explorando conceptos fundamentales de la nube: instancias EC2, buckets S3 para almacenamiento estático, redes básicas (VPC/Security Groups) y buenas prácticas de IAM y credenciales.',
  },
  {
    title: 'Terraform',
    status: 'Aprendiendo',
    badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    icon: Wrench,
    description: 'Infraestructura como código y automatización de recursos.',
    details:
      'Comprendiendo la declaración declarativa de infraestructura, gestión de estado (tfstate), variables y aprovisionamiento reproducible de recursos para evitar configuraciones manuales.',
  },
  {
    title: 'Linux',
    status: 'En formación continua',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    icon: Terminal,
    description: 'Terminal, servidores y administración básica de sistemas.',
    details:
      'Manejo de línea de comandos en bash/zsh, permisos de archivos, procesos, inspección de logs con journalctl/tail, variables de entorno y configuración de servicios systemd.',
  },
  {
    title: 'Deployment & CI/CD',
    status: 'Construyendo experiencia',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    icon: Rocket,
    description: 'Comprensión del proceso que existe entre desarrollar una aplicación y llevarla a producción.',
    details:
      'Automatización de despliegues continuos mediante GitHub Actions y plataformas PaaS (Railway, Vercel), pipelines de testing básico y variables de entorno en producción.',
  },
];

export function DevOpsSection() {
  return (
    <section id="devops" className="py-20 px-4 sm:px-6 border-t border-[#161c2b] relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
            04 / Infraestructura
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
            Explorando DevOps & Cloud
          </h2>
          <div className="space-y-2 max-w-3xl text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              Mi camino profesional está comenzando a expandirse desde el desarrollo Backend hacia infraestructura y DevOps.
            </p>
            <p className="text-slate-400">
              Actualmente estoy profundizando en containerización, despliegues, infraestructura como código y servicios cloud, con el objetivo de comprender el ciclo de vida completo de una aplicación.
            </p>
          </div>
        </div>

        {/* DevOps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DEVOPS_AREAS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-xl bg-[#0d121c] border border-[#1b2336] p-6 space-y-4 hover:border-[#2b3a58] transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-[#141b2b] border border-[#1f2a42] flex items-center justify-center text-slate-200">
                      <Icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[11px] font-mono border ${item.badgeColor}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100">{item.title}</h3>

                  <p className="text-xs font-semibold text-slate-300">{item.description}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.details}</p>
                </div>

                <div className="pt-2 text-[11px] font-mono text-slate-500 border-t border-[#161f30]">
                  infra / {item.title.toLowerCase().replace(/\s+/g, '-')}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
