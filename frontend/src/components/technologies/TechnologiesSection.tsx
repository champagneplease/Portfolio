import { Server, Database, Container, Layout, Wrench } from 'lucide-react';

const TECH_CATEGORIES = [
  {
    category: 'Backend',
    subtitle: 'Principal foco técnico',
    priority: 'high',
    icon: Server,
    borderColor: 'border-emerald-500/30',
    headerBg: 'bg-emerald-500/10 text-emerald-400',
    skills: [
      { name: 'TypeScript', level: 'Foco principal' },
      { name: 'Node.js', level: 'Runtime' },
      { name: 'NestJS', level: 'Framework principal' },
      { name: 'Express', level: 'REST APIs' },
      { name: 'Python', level: 'Lenguaje secundario' },
      { name: 'FastAPI', level: 'APIs asíncronas' },
      { name: 'Flask', level: 'Fundamentos' },
      { name: 'Django', level: 'En aprendizaje' },
    ],
  },
  {
    category: 'DevOps / Infrastructure',
    subtitle: 'Crecimiento y especialización',
    priority: 'high',
    icon: Container,
    borderColor: 'border-cyan-500/30',
    headerBg: 'bg-cyan-500/10 text-cyan-400',
    skills: [
      { name: 'Docker', level: 'Containerización' },
      { name: 'AWS', level: 'Cloud básico' },
      { name: 'Terraform', level: 'IaC' },
      { name: 'Linux', level: 'Sistemas / CLI' },
      { name: 'Git', level: 'Control de versiones' },
      { name: 'CI/CD', level: 'Pipelines automáticos' },
      { name: 'Deployment', level: 'Producción PaaS/Cloud' },
    ],
  },
  {
    category: 'Databases',
    subtitle: 'Persistencia y modelado',
    priority: 'medium',
    icon: Database,
    borderColor: 'border-[#1f293d]',
    headerBg: 'bg-indigo-500/10 text-indigo-400',
    skills: [
      { name: 'PostgreSQL', level: 'Relacional principal' },
      { name: 'Prisma ORM', level: 'Modelado y queries' },
      { name: 'MongoDB', level: 'NoSQL / Documental' },
      { name: 'MySQL', level: 'Relacional' },
    ],
  },
  {
    category: 'Frontend',
    subtitle: 'Interfaces cliente y paneles de gestión',
    priority: 'low',
    icon: Layout,
    borderColor: 'border-[#1b2336]',
    headerBg: 'bg-slate-500/10 text-slate-300',
    skills: [
      { name: 'Next.js', level: 'App Router / SSR' },
      { name: 'React', level: 'Componentes' },
      { name: 'TypeScript', level: 'Tipado estricto' },
      { name: 'Tailwind CSS', level: 'Diseño utilitario' },
    ],
  },
  {
    category: 'Tools',
    subtitle: 'Entorno de trabajo y pruebas',
    priority: 'low',
    icon: Wrench,
    borderColor: 'border-[#1b2336]',
    headerBg: 'bg-slate-500/10 text-slate-300',
    skills: [
      { name: 'GitHub', level: 'Repositorios & Actions' },
      { name: 'Postman', level: 'Testing de endpoints' },
      { name: 'DataGrip', level: 'Gestión de BD' },
      { name: 'Docker Desktop', level: 'Contenedores locales' },
      { name: 'VS Code', level: 'Editor de código' },
    ],
  },
];

export function TechnologiesSection() {
  return (
    <section id="tecnologias" className="py-20 px-4 sm:px-6 border-t border-[#161c2b] bg-[#090c13] relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            05 / Stack
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
            Tecnologías y herramientas
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Organizadas por área de aplicación, con mayor protagonismo en desarrollo Backend e infraestructura.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Top Row: Backend (Col 7) and DevOps (Col 5) - High visual priority */}
          {TECH_CATEGORIES.slice(0, 2).map((cat, idx) => {
            const Icon = cat.icon;
            const isBackend = idx === 0;
            return (
              <div
                key={cat.category}
                className={`${
                  isBackend ? 'lg:col-span-7' : 'lg:col-span-5'
                } rounded-xl bg-[#0c101c] border ${cat.borderColor} p-6 space-y-5 shadow-lg`}
              >
                <div className="flex items-center justify-between pb-3 border-b border-[#1b2438]">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${cat.headerBg}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-100">{cat.category}</h3>
                      <p className="text-[11px] font-mono text-slate-400">{cat.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#121929] text-emerald-400 border border-emerald-500/20">
                    Protagonismo
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-lg bg-[#0e1322] border border-[#1b253c] hover:border-slate-500/40 transition-colors"
                    >
                      <div className="text-xs font-semibold text-slate-200">{skill.name}</div>
                      <div className="text-[10px] font-mono text-slate-400 mt-0.5">{skill.level}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Bottom Row: Databases (4), Frontend (4), Tools (4) - Secondary priority */}
          {TECH_CATEGORIES.slice(2).map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.category}
                className="lg:col-span-4 rounded-xl bg-[#0b0e17] border border-[#172033] p-5 space-y-4"
              >
                <div className="flex items-center gap-2.5 pb-2 border-b border-[#162033]">
                  <div className={`p-1.5 rounded-md ${cat.headerBg}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-200">{cat.category}</h3>
                    <p className="text-[10px] font-mono text-slate-500">{cat.subtitle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2 rounded bg-[#0e121e] border border-[#182136]"
                    >
                      <div className="text-xs text-slate-200 font-medium">{skill.name}</div>
                      <div className="text-[10px] font-mono text-slate-500">{skill.level}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
