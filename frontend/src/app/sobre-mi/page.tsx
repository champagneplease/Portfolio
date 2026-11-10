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
    <div className="max-w-4xl mx-auto px-6 py-16 sm:py-20 space-y-16">
      {/* 1. Header & Bio */}
      <section className="space-y-6">
        <div className="space-y-3">
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
            Perfil Profesional
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Sobre mí
          </h1>
        </div>

        <div className="space-y-4 text-base sm:text-lg text-zinc-200 leading-relaxed">
          <p>
            Soy estudiante de Desarrollo de Software y desarrollador Backend en formación, con experiencia construyendo APIs, aplicaciones web y sistemas conectados a bases de datos.
          </p>
          <p>
            Mi principal enfoque está en el desarrollo Backend con <strong className="text-white">Python y TypeScript</strong>, trabajando con tecnologías como <strong className="text-white">NestJS, Express, Django, Flask y FastAPI</strong>.
          </p>
          <p>
            En paralelo, estoy profundizando en infraestructura y DevOps, especialmente en <strong className="text-white">Docker, despliegue de aplicaciones, AWS y Terraform</strong>.
          </p>
          <p>
            Me interesan especialmente los problemas que requieren pensar más allá del código: arquitectura, comunicación entre servicios, bases de datos, seguridad, despliegue y mantenimiento.
          </p>
          <div className="border-l-2 border-white pl-4 py-2 text-zinc-100 font-medium italic text-lg bg-zinc-900/40 rounded-r">
            «Creo que programar no consiste solamente en escribir código, sino en entender el problema y encontrar una solución simple, mantenible y adecuada.»
          </div>
        </div>
      </section>

      {/* 2. Actualmente enfocado en */}
      <section className="space-y-4 border-t border-zinc-800 pt-10">
        <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
          Actualmente estoy enfocado en
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-zinc-100 border border-zinc-700 bg-[#0c0c0e] p-6 rounded-xl shadow-lg">
          {CURRENT_FOCUS.map((item) => (
            <div key={item} className="flex items-center gap-2.5">
              <span className="text-white font-bold font-mono">›</span>
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Más allá del código (Filosofía frente a IA) */}
      <section className="space-y-4 border-t border-zinc-800 pt-10">
        <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
          Filosofía
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Más allá del código
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-zinc-200 leading-relaxed border-l-2 border-white pl-5 py-2">
          <p>
            En una época donde las herramientas de IA forman parte cada vez más del desarrollo, considero todavía más importante comprender los fundamentos.
          </p>
          <p>
            Utilizo herramientas de IA como apoyo para investigar, acelerar tareas y explorar soluciones, pero mi objetivo es entender qué estoy construyendo, por qué funciona y qué consecuencias tiene cada decisión técnica.
          </p>
          <p className="text-white font-semibold text-xl">
            Me interesa desarrollar criterio técnico, no solamente producir código.
          </p>
        </div>
      </section>

      {/* 4. De proyectos a producción */}
      <section className="space-y-6 border-t border-zinc-800 pt-10">
        <div className="space-y-2">
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
            Evolución
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white">
            De proyectos a producción
          </h2>
          <p className="text-sm sm:text-base text-zinc-300">
            El camino que transformó conceptos teóricos en software utilizado por un negocio real.
          </p>
        </div>

        <div className="border border-zinc-700 bg-[#0c0c0e] rounded-xl p-6 sm:p-8 space-y-5 shadow-lg">
          <div className="grid grid-cols-1 gap-4">
            {EVOLUTION_STEPS.map((step) => (
              <div key={step.step} className="flex items-start gap-4 text-sm sm:text-base">
                <span className="font-mono text-white font-bold shrink-0 mt-0.5">{step.step}</span>
                <div>
                  <span className="font-bold text-white">{step.title}: </span>
                  <span className="text-zinc-200">{step.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-5 border-t border-zinc-800 text-sm sm:text-base text-white font-medium italic">
            «Uno de mis objetivos actuales es transformar el conocimiento técnico en software que realmente pueda utilizarse.»
          </div>
        </div>
      </section>

      {/* 5. Qué estoy buscando */}
      <section className="space-y-4 border-t border-zinc-800 pt-10">
        <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
          Oportunidades
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-white">
          ¿Qué estoy buscando?
        </h2>
        <div className="border border-zinc-700 bg-[#0c0c0e] p-6 sm:p-8 rounded-xl space-y-4 text-base sm:text-lg text-zinc-200 leading-relaxed shadow-lg">
          <p>
            Estoy buscando mi <strong className="text-white">primera oportunidad profesional como desarrollador Backend / Software Developer</strong>, donde pueda seguir aprendiendo, asumir responsabilidades y aportar desde mis conocimientos actuales.
          </p>
          <p>
            Me interesan especialmente los equipos donde pueda trabajar con APIs, bases de datos, arquitectura backend, Docker, cloud o infraestructura, y donde exista espacio para aprender de desarrolladores con más experiencia.
          </p>
        </div>
      </section>

      {/* 6. Me gustan los problemas difíciles */}
      <section className="space-y-4 border-t border-zinc-800 pt-10">
        <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
          Resolución de problemas
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Me gustan los problemas difíciles.
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-zinc-200 leading-relaxed">
          <p>
            Una de las partes que más disfruto del desarrollo es encontrarme con un problema que inicialmente no sé cómo resolver.
          </p>
          <p>
            Investigar, probar alternativas, equivocarme, entender qué está fallando y finalmente encontrar una solución es una de las cosas que más me motiva.
          </p>
          <p className="text-zinc-300">
            También disfruto intercambiar ideas con otras personas y analizar diferentes enfoques para llegar a una solución.
          </p>
        </div>

        <div className="pt-6">
          <Link
            href="/contacto"
            className="btn-primary"
          >
            <span>Hablemos de oportunidades</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
