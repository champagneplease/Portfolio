import { Project } from '@/types/project';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'burger-sosa',
    slug: 'burger-sosa',
    title: 'Burger Sosa',
    category: 'Production Web Application / Full Stack / Backend / DevOps',
    description:
      'Aplicación web desarrollada para un local gastronómico real, actualmente desplegada y funcionando en producción.',
    longDescription:
      'Burger Sosa representa mi mayor experiencia práctica hasta el momento: pasó de ser código en desarrollo a convertirse en una herramienta diaria utilizada en operaciones reales por un negocio gastronómico. La solución resuelve pedidos en línea, administración de catálogo, control de horarios e inventario, con una arquitectura moderna en NestJS y PostgreSQL que garantiza confiabilidad y tiempos de respuesta rápidos.',
    featured: true,
    liveUrl: 'https://burger-sosa.up.railway.app/',
    githubUrl: null, // Private / client production repository
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
      'Panel de administración con gestión de productos, categorías, inventario y horarios',
      'Gestión de pedidos con estados en tiempo real (Pendiente, Preparación, En camino, Entregado)',
      'Opciones de delivery o retiro en local con cálculo transparente',
      'Integración directa con WhatsApp para recepción ágil y confirmación de pedidos',
      'Autenticación y control de acceso para administradores',
      'Base de datos relacional PostgreSQL modelada y gestionada con Prisma ORM',
      'Containerización con Docker para entornos consistentes de desarrollo y producción',
      'Optimización SEO completa con sitemap e indexación activa en Google',
    ],
    architectureFlow: `React / TypeScript (Client & Admin)
        ↓  HTTPS / REST Requests
      NestJS REST API Controllers
        ↓  Validation Pipes & Guards
      Service Layer (Business Logic)
        ↓  Prisma Client
   PostgreSQL (Railway Hosted DB)`,
    devopsFlow: `Git (Version Control & Feature Branches)
        ↓
     Docker (Multi-stage Container Build)
        ↓
  Railway CI/CD (Continuous Deployment & Secrets)
        ↓
   Production Environment (Active & Monitored)`,
    order: 1,
  },
  {
    id: 'short-url',
    slug: 'short-url',
    title: 'Short URL',
    category: 'Backend / REST API / Persistence',
    description:
      'Servicio de acortamiento de URLs desarrollado como proyecto Backend, enfocado en APIs REST, persistencia de datos y generación de identificadores únicos.',
    longDescription:
      'API REST desarrollada para comprender la persistencia de datos de alta frecuencia, generación de identificadores únicos no colisionables y redirecciones HTTP. Diseñada cuidando validaciones estrictas y modelado eficiente.',
    featured: false,
    liveUrl: 'https://short-url-eight-rho.vercel.app/',
    githubUrl: 'https://github.com/champagneplease/shortURL',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'REST API'],
    highlights: [
      'Generación determinista y segura de hashes alfanuméricos cortos',
      'Validación defensiva de URLs para evitar payloads maliciosos o bucles',
      'Redirecciones HTTP 301/302 eficientes',
      'Indexación por hash en MongoDB para lecturas en milisegundos',
    ],
    architectureFlow: `Client Request → Express API Route → URL Shortener Controller → Mongoose Model → MongoDB Atlas`,
    devopsFlow: `Git → Vercel Deployment → Production URL`,
    order: 2,
  },
  {
    id: 'mern-task-manager',
    slug: 'mern-task-manager',
    title: 'MERN Task Manager',
    category: 'Full Stack / Authentication / CRUD',
    description:
      'Aplicación full-stack para gestión de tareas, con autenticación, operaciones CRUD y comunicación entre frontend y API REST.',
    longDescription:
      'Aplicación interactiva de productividad que implementa el ciclo completo de autenticación con JSON Web Tokens (JWT), autorización de rutas privadas, persistencia de estados y sincronización de cambios en tiempo real.',
    featured: false,
    liveUrl: 'https://mern-task-manager-swart.vercel.app/',
    githubUrl: 'https://github.com/champagneplease/MERN-Task-Manager',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'REST API'],
    highlights: [
      'Autenticación basada en JWT con expiración y validación en middleware',
      'Operaciones CRUD completas para gestión organizada de tareas',
      'Manejo de estados en frontend con feedback visual inmediato',
      'Aislamiento estricto de tareas por usuario autenticado',
    ],
    architectureFlow: `React SPA → REST API (Express) → Auth Middleware (JWT) → Task Controller → MongoDB`,
    devopsFlow: `Git → Vercel Client & API Hosting`,
    order: 3,
  },
  {
    id: 'register-basic-with-flask',
    slug: 'register-basic-with-flask',
    title: 'Register Basic with Flask',
    category: 'Backend / Python / Security Fundamentals',
    description:
      'Aplicación web orientada a comprender autenticación, rutas, validación de datos y lógica Backend utilizando Flask.',
    longDescription:
      'Proyecto enfocado en dominar los conceptos esenciales del desarrollo backend en Python: enrutamiento, ciclo de vida de peticiones HTTP, manejo de sesiones de usuario, hash seguro de contraseñas y validación de datos del lado del servidor.',
    featured: false,
    liveUrl: null,
    githubUrl: 'https://github.com/champagneplease/Register-Basic-with-Flask',
    technologies: ['Python', 'Flask', 'Werkzeug Security', 'Jinja2', 'HTML/CSS'],
    highlights: [
      'Ciclo completo de registro, login y logout con Flask',
      'Hashing criptográfico de contraseñas con salt usando Werkzeug',
      'Manejo de cookies de sesión firmadas en el servidor',
      'Validación defensiva de inputs en formularios',
    ],
    architectureFlow: `Browser Form → Flask Route Handler → Password Hasher (Werkzeug) → Session Store`,
    devopsFlow: `Git Version Control → Local Python Environment`,
    order: 4,
  },
  {
    id: 'encrypt-decrypt',
    slug: 'encrypt-decrypt',
    title: 'Encrypt / Decrypt',
    category: 'Python / Cryptography / Algorithms',
    description:
      'Proyecto orientado a experimentar con conceptos de cifrado y descifrado mediante Python.',
    longDescription:
      'Herramienta de experimentación criptográfica desarrollada en Python para asimilar principios de seguridad informática: cifrado simétrico, generación y almacenamiento de claves criptográficas, encoding base64 y protección de la confidencialidad.',
    featured: false,
    liveUrl: null,
    githubUrl: 'https://github.com/champagneplease/encrypt-decrypt',
    technologies: ['Python', 'Cryptography Library', 'Fernet / AES', 'CLI'],
    highlights: [
      'Cifrado y descifrado seguro de cadenas de texto y ficheros',
      'Uso del estándar Fernet (AES en modo CBC con HMAC)',
      'Gestión determinista de claves criptográficas',
      'Interfaz de línea de comandos ágil para pruebas rápidas',
    ],
    architectureFlow: `Plaintext + Symmetric Key → Python Cryptography Engine → Ciphertext (URL-safe Base64)`,
    devopsFlow: `Git Version Control → Python Virtualenv`,
    order: 5,
  },
];
