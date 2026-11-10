import Link from 'next/link';
import { ArrowRight, Terminal } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const metadata = {
  title: 'DevOps & Infraestructura | Nacho Miranda',
  description:
    'Ruta de aprendizaje y experiencia práctica de Nacho Miranda en Docker, AWS, Terraform, Linux y despliegues en producción.',
};

const DEVOPS_TRACKS = [
  {
    name: 'Docker',
    status: 'Profundizando',
    concept: 'Containerización y ambientes reproducibles.',
    description:
      'Empaquetado de aplicaciones Node.js/NestJS y Python en contenedores aislados. Uso de multi-stage builds para minimizar el tamaño final de las imágenes y Docker Compose para orquestar servicios dependientes (API + PostgreSQL) en entornos de desarrollo local idénticos al entorno de despliegue.',
    sample: `# Multi-stage Dockerfile para backend NestJS
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
USER node
COPY --from=builder /app/dist ./dist
CMD ["node", "dist/src/main.js"]`,
  },
  {
    name: 'AWS',
    status: 'Primeros pasos',
    concept: 'Infraestructura y servicios cloud fundamentales.',
    description:
      'Comprendiendo los servicios núcleo de computación, almacenamiento y redes: aprovisionamiento de instancias EC2, almacenamiento estático en S3, configuración de redes virtuales (VPC, subnets públicas/privadas, security groups) y administración de accesos e identidades seguras con AWS IAM.',
    sample: `# Conceptos clave en exploración:
- IAM: Principio de menor privilegio y roles para servicios
- S3: Almacenamiento de objetos, buckets y políticas de acceso
- EC2 / Networking: Security Groups y balanceo de tráfico`,
  },
  {
    name: 'Terraform',
    status: 'Aprendiendo',
    concept: 'Infraestructura como código y automatización de recursos.',
    description:
      'Entendiendo la filosofía declarativa de Infraestructura como Código (IaC). Declaración de recursos reproducibles, gestión segura del estado (tfstate), variables y módulos para evitar dependencias manuales en consolas web.',
    sample: `# Definición declarativa básica
resource "aws_s3_bucket" "app_storage" {
  bucket = "portfolio-storage-assets"
  tags = {
    Environment = "production"
    ManagedBy   = "terraform"
  }
}`,
  },
  {
    name: 'Linux',
    status: 'En formación continua',
    concept: 'Terminal, servidores y administración básica de sistemas.',
    description:
      'Uso diario de línea de comandos en bash/zsh: gestión de permisos y usuarios (chmod, chown), inspección de procesos y consumo de recursos (ps, top, htop), variables de entorno, análisis de registros con journalctl/tail y configuración de servicios systemd.',
    sample: `$ uname -a
Linux ip-10-0-1-42 6.1.0 #1 SMP Debian
$ systemctl status nestjs-api.service
● nestjs-api.service - NestJS Production API
   Active: active (running) since Mon 2026-11-09`,
  },
  {
    name: 'Deployment & CI/CD',
    status: 'Construyendo experiencia',
    concept: 'El proceso entre desarrollar código y llevarlo a producción.',
    description:
      'Automatización de pruebas y compilación mediante GitHub Actions, despliegue continuo hacia plataformas PaaS y Cloud (Railway, Vercel), gestión segura de variables de entorno y certificados SSL/TLS automáticos.',
    sample: `Git commit / PR
       ↓
GitHub Actions (Lint + TypeCheck + Test)
       ↓
Docker Build & Push
       ↓
Production Deploy (Railway / Cloud)`,
  },
];

export default function DevOpsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20 space-y-16 animate-fade-in-up">
      {/* Header */}
      <ScrollReveal direction="up">
        <div className="space-y-4">
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
            Orientación Técnica
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Explorando DevOps & Cloud
          </h1>
          <div className="space-y-3 max-w-3xl text-base sm:text-lg text-zinc-200 leading-relaxed">
            <p>
              Mi camino profesional está comenzando a expandirse desde el desarrollo Backend hacia infraestructura y DevOps.
            </p>
            <p className="text-zinc-300">
              Actualmente estoy profundizando en containerización, despliegues, infraestructura como código y servicios cloud, con la convicción de que un buen desarrollador backend debe entender cómo vive su código en producción.
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Tracks Grid (Alternating smooth lateral entrances) */}
      <div className="space-y-8">
        {DEVOPS_TRACKS.map((t, idx) => {
          const dir = idx % 2 === 0 ? 'left' : 'right';
          return (
            <ScrollReveal key={t.name} direction={dir} distance={36} duration={800}>
              <div className="border border-zinc-700 bg-[#0c0c0e] rounded-xl p-6 sm:p-8 space-y-5 shadow-lg card-taste">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-zinc-400 font-semibold">0{idx + 1}</span>
                    <h2 className="text-2xl font-bold text-white">{t.name}</h2>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded border border-zinc-600 bg-zinc-800 text-white font-medium">
                    {t.status}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="text-base font-semibold text-white">{t.concept}</div>
                  <p className="text-sm sm:text-base text-zinc-200 leading-relaxed max-w-3xl">
                    {t.description}
                  </p>
                </div>

                {t.sample && (
                  <div className="pt-2">
                    <div className="text-xs font-mono text-zinc-300 mb-1.5 font-medium">Snippet ilustrativo:</div>
                    <pre className="code-snippet-pre font-mono text-xs sm:text-sm text-zinc-100 bg-black p-5 rounded-lg border border-zinc-800 overflow-x-auto whitespace-pre leading-relaxed shadow-inner">
                      {t.sample}
                    </pre>
                  </div>
                )}
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* CTA Box */}
      <div className="border border-zinc-700 bg-[#0c0c0e] p-8 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
        <div>
          <h3 className="text-lg font-bold text-white">
            ¿Querés ver cómo apliqué esto en un caso real?
          </h3>
          <p className="text-sm text-zinc-300 mt-1">
            Conocé cómo desplegué Burger Sosa en Railway usando Docker y PostgreSQL.
          </p>
        </div>
        <Link
          href="/proyectos/burger-sosa"
          className="btn-primary"
        >
          <span>Ver caso Burger Sosa</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
