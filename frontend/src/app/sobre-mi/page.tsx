import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Sobre mí | Nacho Miranda',
  description:
    'Perfil profesional, filosofía de desarrollo y trayectoria técnica de Nacho Miranda, Junior Backend Developer con orientación a DevOps.',
};

const CURRENT_FOCUS = [
  'Backend y diseño de APIs',
  'Arquitectura de aplicaciones',
  'Docker y containerización',
  'Deploy y ambientes de producción',
  'AWS (fundamentos cloud)',
  'Terraform (Infraestructura como código)',
  'Buenas prácticas y código mantenible',
  'Fundamentos de infraestructura y DevOps',
];

const EVOLUTION_STEPS = [
  { step: '01', title: 'Aprender', desc: 'Fundamentos de software, lógica algorítmica y lenguajes (TypeScript, Python).' },
  { step: '02', title: 'Construir proyectos', desc: 'Desarrollar aplicaciones propias y experimentar sin atajos de tutoriales.' },
  { step: '03', title: 'APIs y bases de datos', desc: 'Diseñar contratos REST, DTOs, validaciones y modelado relacional en PostgreSQL.' },
  { step: '04', title: 'Dockerizar', desc: 'Crear imágenes multi-stage y Docker Compose para ambientes reproducibles.' },
  { step: '05', title: 'Desplegar', desc: 'Automatizar pipelines CI/CD, configuración de variables de entorno y SSL en producción.' },
  { step: '06', title: 'Resolver problemas reales', desc: 'Atender pedidos en vivo, optimización SEO y experiencia de usuario auténtica.' },
  { step: '07', title: 'Software en producción', desc: 'Aplicación operativa y estable para un negocio gastronómico diario (Burger Sosa).' },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 sm:py-20 space-y-20">
      {/* 1. Header & Bio */}
      <section className="space-y-6">
        <div className="space-y-3">
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
            Perfil Profesional
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Sobre mí
          </h1>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
          <p>
            Soy estudiante de Desarrollo de Software y desarrollador Backend en formación, con experiencia construyendo APIs, aplicaciones web y sistemas conectados a bases de datos.
          </p>
          <p>
            Mi principal enfoque está en el desarrollo Backend con <span className="text-white font-medium">Python y TypeScript</span>, trabajando con tecnologías como <span className="text-white font-medium">NestJS, Express, Django, Flask y FastAPI</span>.
          </p>
          <p>
            En paralelo, estoy profundizando en infraestructura y DevOps, especialmente en <span className="text-white font-medium">Docker, despliegue de aplicaciones, AWS y Terraform</span>.
          </p>
          <p>
            Me interesan especialmente los problemas que requieren pensar más allá del código: arquitectura, comunicación entre servicios, bases de datos, seguridad, despliegue y mantenimiento.
          </p>
          <p className="border-l-2 border-zinc-700 pl-4 py-1 text-zinc-400 italic">
            «Creo que programar no consiste solamente en escribir código, sino en entender el problema y encontrar una solución simple, mantenible y adecuada.»
          </p>
        </div>
      </section>

      {/* 2. Actualmente enfocado en */}
      <section className="space-y-4 border-t border-zinc-900 pt-10">
        <h2 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">
          Actualmente estoy enfocado en
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-300 border border-zinc-800 bg-zinc-950 p-6 rounded-lg">
          {CURRENT_FOCUS.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="text-zinc-400 font-mono">›</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Más allá del código (Filosofía frente a IA) */}
      <section className="space-y-4 border-t border-zinc-900 pt-10">
        <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
          Filosofía
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Más allá del código
        </h2>
        <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed border-l-2 border-white pl-5 py-1">
          <p>
            En una época donde las herramientas de IA forman parte cada vez más del desarrollo, considero todavía más importante comprender los fundamentos.
          </p>
          <p>
            Utilizo herramientas de IA como apoyo para investigar, acelerar tareas y explorar soluciones, pero mi objetivo es entender qué estoy construyendo, por qué funciona y qué consecuencias tiene cada decisión técnica.
          </p>
          <p className="text-white font-semibold">
            Me interesa desarrollar criterio técnico, no solamente producir código.
          </p>
        </div>
      </section>

      {/* 4. De proyectos a producción */}
      <section className="space-y-6 border-t border-zinc-900 pt-10">
        <div className="space-y-2">
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
            Evolución
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            De proyectos a producción
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            El camino que transformó conceptos teóricos en software utilizado por un negocio real.
          </p>
        </div>

        <div className="border border-zinc-800 bg-zinc-950 rounded-lg p-6 space-y-4">
          <div className="grid grid-cols-1 gap-3">
            {EVOLUTION_STEPS.map((step, idx) => (
              <div key={step.step} className="flex items-start gap-4 text-xs sm:text-sm">
                <span className="font-mono text-zinc-400 shrink-0 mt-0.5">{step.step}</span>
                <div>
                  <span className="font-semibold text-white">{step.title}: </span>
                  <span className="text-zinc-400">{step.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-900 text-xs sm:text-sm text-zinc-300 italic">
            «Uno de mis objetivos actuales es transformar el conocimiento técnico en software que realmente pueda utilizarse.»
          </div>
        </div>
      </section>

      {/* 5. Qué estoy buscando */}
      <section className="space-y-4 border-t border-zinc-900 pt-10">
        <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
          Oportunidades
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          ¿Qué estoy buscando?
        </h2>
        <div className="border border-zinc-800 bg-zinc-950 p-6 rounded-lg space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
          <p>
            Estoy buscando mi <span className="text-white font-semibold">primera oportunidad profesional como desarrollador Backend / Software Developer</span>, donde pueda seguir aprendiendo, asumir responsabilidades y aportar desde mis conocimientos actuales.
          </p>
          <p>
            Me interesan especialmente los equipos donde pueda trabajar con APIs, bases de datos, arquitectura backend, Docker, cloud o infraestructura, y donde exista espacio para aprender de desarrolladores con más experiencia.
          </p>
        </div>
      </section>

      {/* 6. Me gustan los problemas difíciles */}
      <section className="space-y-4 border-t border-zinc-900 pt-10">
        <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
          Resolución de problemas
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Me gustan los problemas difíciles.
        </h2>
        <div className="space-y-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
          <p>
            Una de las partes que más disfruto del desarrollo es encontrarme con un problema que inicialmente no sé cómo resolver.
          </p>
          <p>
            Investigar, probar alternativas, equivocarme, entender qué está fallando y finalmente encontrar una solución es una de las cosas que más me motiva.
          </p>
          <p className="text-zinc-400">
            También disfruto intercambiar ideas con otras personas y analizar diferentes enfoques para llegar a una solución.
          </p>
        </div>

        <div className="pt-6">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors"
          >
            <span>Hablemos de oportunidades</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
