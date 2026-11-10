import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export interface ProjectEntity {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string | null;
  featured: boolean;
  liveUrl: string | null;
  githubUrl: string | null;
  technologies: string[];
  architectureFlow: string | null;
  devopsFlow: string | null;
  highlights: string[];
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const STATIC_FALLBACK_PROJECTS: ProjectEntity[] = [
  {
    id: '1',
    slug: 'burger-sosa',
    title: 'Burger Sosa',
    category: 'Production Web Application / Full Stack / Backend / DevOps',
    description:
      'Aplicación web desarrollada para un local gastronómico real, actualmente desplegada y funcionando en producción.',
    longDescription:
      'Burger Sosa fue desarrollado para resolver una necesidad operativa y comercial real de un negocio gastronómico. Pasó de ser una idea en código a convertirse en software que gestiona pedidos diarios, clientes y catálogo en tiempo real. La arquitectura separa claramente el frontend cliente/admin del backend en NestJS, con persistencia en PostgreSQL mediante Prisma, empaquetado en Docker y desplegado en Railway.',
    featured: true,
    liveUrl: 'https://burger-sosa.up.railway.app/',
    githubUrl: null,
    technologies: [
      'NestJS',
      'TypeScript',
      'React',
      'PostgreSQL',
      'Prisma',
      'Docker',
      'Tailwind CSS',
      'Railway',
      'REST API',
      'WhatsApp API',
    ],
    highlights: [
      'Software real en producción resolviendo operativa diaria de negocio',
      'Frontend cliente orientado a mobile-first para pedidos rápidos',
      'Panel de administración con métricas, inventario y gestión de catálogo',
      'Gestión integral de pedidos: estados en tiempo real, delivery y retiro',
      'Integración directa con WhatsApp para confirmación de pedidos',
      'Autenticación robusta, roles y gestión de usuarios',
      'Optimización SEO completa con sitemap e indexación activa en Google',
      'Base de datos relacional PostgreSQL con modelado mediante Prisma ORM',
      'Containerización con Docker para entornos reproducibles y deploy en Railway',
    ],
    architectureFlow: `React / TypeScript (Client & Admin)
        ↓  HTTPS / REST
      API Gateway / Routes
        ↓
      NestJS (Controllers + Services + Guards)
        ↓
     Prisma ORM
        ↓
   PostgreSQL (Production DB)`,
    devopsFlow: `Git (Branching & Version Control)
        ↓
     Docker (Multi-stage Container Build)
        ↓
  Railway CI/CD (Automated Deployment & Environment Variables)
        ↓
   Production (Active & Monitored)`,
    order: 1,
    createdAt: new Date('2024-06-01'),
    updatedAt: new Date('2024-11-01'),
  },
  {
    id: '2',
    slug: 'short-url',
    title: 'Short URL',
    category: 'Backend / REST API / Persistence',
    description:
      'Servicio de acortamiento de URLs desarrollado como proyecto Backend, enfocado en APIs REST, persistencia de datos y generación de identificadores únicos.',
    longDescription:
      'Servicio backend de alto rendimiento para acortar URLs con generación determinista y segura de hashes únicos, redireccionamiento HTTP 301/302, validación de URLs maliciosas o inválidas y almacenamiento no relacional optimizado.',
    featured: false,
    liveUrl: 'https://short-url-eight-rho.vercel.app/',
    githubUrl: 'https://github.com/champagneplease/shortURL',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'REST API'],
    highlights: [
      'Generación de códigos alfanuméricos únicos y seguros',
      'Validación estricta de esquemas y formatos URL en request',
      'Redirección eficiente de peticiones con métricas de clics',
      'Indexación en MongoDB para búsquedas ultrarrápidas',
    ],
    architectureFlow: `Client Request
        ↓
      Express Route & Middleware
        ↓
      NanoID / Base62 Generator + Controller
        ↓
      Mongoose Schema
        ↓
      MongoDB Atlas`,
    devopsFlow: `Git → Vercel Deployment → Environment Config`,
    order: 2,
    createdAt: new Date('2024-04-10'),
    updatedAt: new Date('2024-05-15'),
  },
  {
    id: '3',
    slug: 'mern-task-manager',
    title: 'MERN Task Manager',
    category: 'Full Stack / Authentication / CRUD',
    description:
      'Aplicación full-stack para gestión de tareas, con autenticación, operaciones CRUD y comunicación entre frontend y API REST.',
    longDescription:
      'Sistema integral de gestión de tareas y productividad personal. Implementa autenticación con tokens JWT, protección de endpoints mediante middlewares, sanitización de payloads y sincronización con frontend React.',
    featured: false,
    liveUrl: 'https://mern-task-manager-swart.vercel.app/',
    githubUrl: 'https://github.com/champagneplease/MERN-Task-Manager',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'REST API'],
    highlights: [
      'Autenticación basada en JSON Web Tokens (JWT) y cookies seguras',
      'Operaciones CRUD completas sobre tareas con categorización y prioridades',
      'Filtros por estado, fechas de vencimiento y etiquetas',
      'Control de acceso por usuario (aislamiento de datos)',
    ],
    architectureFlow: `React SPA
        ↓  REST + Auth Headers
      Express API + Auth Middleware
        ↓
      Task Service / Controller
        ↓
      MongoDB`,
    devopsFlow: `Git → Vercel Frontend + Render/Vercel API`,
    order: 3,
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-04-01'),
  },
  {
    id: '4',
    slug: 'register-basic-with-flask',
    title: 'Register Basic with Flask',
    category: 'Backend / Python / Security Fundamentals',
    description:
      'Aplicación web orientada a comprender autenticación, rutas, validación de datos y lógica Backend utilizando Flask.',
    longDescription:
      'Implementación en Python con Flask para asimilar las bases del ciclo de vida de peticiones HTTP, sesiones, hash de contraseñas mediante librerías criptográficas, validación defensiva en formularios y renderizado dinámico con plantillas.',
    featured: false,
    liveUrl: null,
    githubUrl: 'https://github.com/champagneplease/Register-Basic-with-Flask',
    technologies: ['Python', 'Flask', 'Werkzeug', 'Jinja2', 'HTML/CSS'],
    highlights: [
      'Flujo completo de registro, inicio y cierre de sesión seguro',
      'Hashing de contraseñas con salt (Werkzeug security)',
      'Manejo de cookies de sesión firmadas criptográficamente',
      'Validación de datos en servidor previniendo inyecciones',
    ],
    architectureFlow: `HTTP Request
        ↓
      Flask App Router
        ↓
      Auth Controller & Session Manager
        ↓
      Security Hash Module`,
    devopsFlow: `Git Version Control → Local Virtualenv / Pip`,
    order: 4,
    createdAt: new Date('2023-11-15'),
    updatedAt: new Date('2023-12-01'),
  },
  {
    id: '5',
    slug: 'encrypt-decrypt',
    title: 'Encrypt / Decrypt',
    category: 'Python / Cryptography / Algorithms',
    description:
      'Proyecto orientado a experimentar con conceptos de cifrado y descifrado mediante Python.',
    longDescription:
      'Herramienta de experimentación criptográfica desarrollada en Python para comprender algoritmos de cifrado simétrico y asimétrico, manejo de claves, vectores de inicialización (IV), encoding base64 y principios de confidencialidad de datos.',
    featured: false,
    liveUrl: null,
    githubUrl: 'https://github.com/champagneplease/encrypt-decrypt',
    technologies: ['Python', 'Cryptography', 'Fernet', 'Symmetric Encryption'],
    highlights: [
      'Implementación de cifrado y descifrado seguro de mensajes y archivos',
      'Gestión segura de claves criptográficas y derivation functions',
      'Comprensión práctica de los fundamentos de seguridad de datos',
      'CLI limpia y modular para pruebas rápidas',
    ],
    architectureFlow: `Plaintext Input + Secret Key
        ↓
      Python Cryptography Engine (Fernet/AES)
        ↓
      Encrypted Ciphertext (Base64 Safe)`,
    devopsFlow: `Git Version Control → Python CLI`,
    order: 5,
    createdAt: new Date('2023-09-10'),
    updatedAt: new Date('2023-09-20'),
  },
];

@Injectable()
export class ProjectsService {
  private readonly logger = new Logger(ProjectsService.name);

  constructor(private readonly prisma: PrismaService) {}

  async findAll(featuredOnly?: boolean): Promise<ProjectEntity[]> {
    try {
      const whereClause = featuredOnly !== undefined ? { featured: featuredOnly } : {};
      const projects = await this.prisma.project.findMany({
        where: whereClause,
        orderBy: { order: 'asc' },
      });

      if (projects && projects.length > 0) {
        return projects;
      }
    } catch (error) {
      this.logger.warn(
        `Database query failed (${error instanceof Error ? error.message : 'Unknown'}). Falling back to static data.`,
      );
    }

    // Graceful fallback to static data
    if (featuredOnly !== undefined) {
      return STATIC_FALLBACK_PROJECTS.filter((p) => p.featured === featuredOnly);
    }
    return STATIC_FALLBACK_PROJECTS;
  }

  async findBySlug(slug: string): Promise<ProjectEntity> {
    try {
      const project = await this.prisma.project.findUnique({
        where: { slug },
      });

      if (project) {
        return project;
      }
    } catch (error) {
      this.logger.warn(
        `Database query failed for slug ${slug}. Checking static dataset.`,
      );
    }

    const fallbackProject = STATIC_FALLBACK_PROJECTS.find((p) => p.slug === slug);
    if (!fallbackProject) {
      throw new NotFoundException(`Project with slug "${slug}" not found`);
    }

    return fallbackProject;
  }
}

