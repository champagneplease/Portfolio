# Nacho Miranda — Personal Portfolio & Technical Platform

> **Estudiante de Desarrollo de Software | Backend Developer | Python & TypeScript**  
> _Backend, APIs, arquitectura y despliegue de aplicaciones en producción._

Este repositorio contiene la arquitectura completa de mi portfolio personal profesional, diseñado y construido con una separación limpia entre **Frontend en Next.js + TypeScript** y **Backend en NestJS + TypeScript + PostgreSQL**, orquestado con **Docker & Docker Compose**.

---

## 🏛️ Arquitectura del Proyecto

```text
portfolio/
├── frontend/                     # Aplicación Next.js (App Router, Tailwind CSS, TypeScript)
│   ├── src/
│   │   ├── app/                  # Rutas App Router (multi-página), layout, SEO, robots & sitemap
│   │   │   ├── page.tsx          # Home: Hero, Terminal, Spotlight Burger Sosa, DevOps & Filosofía
│   │   │   ├── proyectos/        # Catálogo técnico de proyectos
│   │   │   │   ├── page.tsx      # Listado completo de proyectos
│   │   │   │   └── [slug]/       # Páginas dinámicas de caso de estudio
│   │   │   ├── devops/           # Sección dedicada a Docker, AWS, Terraform, Linux y CI/CD
│   │   │   ├── sobre-mi/         # Biografía, trayectoria, fundamentos vs IA y búsqueda activa
│   │   │   ├── contacto/         # Canales directos y formulario funcional con honeypot
│   │   │   ├── layout.tsx        # Shell global, fuentes (Host Grotesk, JetBrains Mono) y Navbar
│   │   │   ├── globals.css       # Tokens de diseño Taste-skill, paleta monocromática y tipografía
│   │   │   ├── robots.ts         # Generación dinámica de robots.txt
│   │   │   └── sitemap.ts        # Generación dinámica de sitemap.xml
│   │   ├── components/           # Componentes modulares y accesibles
│   │   │   ├── layout/           # Navbar sticky activo y Footer minimalista
│   │   │   └── ui/               # Iconos SVG nativos (GitHub, LinkedIn)
│   │   ├── lib/                  # Cliente API con fallback resiliente y dataset estático tipado
│   │   └── types/                # Definiciones de tipos TypeScript estrictos
│   ├── Dockerfile                # Multi-stage build con salida standalone y usuario non-root
│   └── package.json
│
├── backend/                      # API REST NestJS (TypeScript, Prisma ORM, PostgreSQL)
│   ├── src/
│   │   ├── common/               # Filtros globales de excepción e interceptores
│   │   │   ├── filters/          # AllExceptionsFilter (manejo centralizado de errores)
│   │   │   └── interceptors/     # TransformInterceptor (formato uniforme) y Logging
│   │   ├── modules/
│   │   │   ├── prisma/           # PrismaService y conexión de base de datos
│   │   │   ├── projects/         # Controller, Service, DTOs y tests unitarios de proyectos
│   │   │   ├── contact/          # Controller, Service, DTOs con validación y tests unitarios
│   │   │   └── health/           # Healthcheck endpoint (/api/health)
│   │   ├── app.module.ts         # Orquestación con ThrottlerModule y ConfigModule
│   │   └── main.ts               # Bootstrap con Helmet, CORS y ValidationPipe
│   ├── prisma/
│   │   ├── schema.prisma         # Modelos Project y ContactMessage
│   │   └── seed.ts               # Semilla con datos reales de proyectos y Burger Sosa
│   ├── Dockerfile                # Multi-stage build optimizado para producción
│   └── package.json
│
├── .github/workflows/ci.yml      # Pipeline CI automatizado (lint, build y tests)
├── docker-compose.yml            # Orquestación de PostgreSQL 16 + Backend + Frontend
├── .env.example                  # Plantilla de variables de entorno
└── README.md
```

---

## 🚀 Tecnologías Implementadas

### Backend

- **NestJS 11 + TypeScript**: Arquitectura modular basada en inyección de dependencias, controladores, servicios y DTOs fuertemente tipados.
- **PostgreSQL 16**: Base de datos relacional para persistencia de proyectos y mensajes de contacto.
- **Prisma ORM**: Modelado de esquema, migraciones declarativas y generación de cliente tipado.
- **Seguridad**:
  - `helmet`: Cabeceras HTTP seguras.
  - `@nestjs/throttler`: Rate limiting para mitigar abusos y ataques de fuerza bruta en endpoints sensibles (ej. formulario de contacto).
  - `class-validator` & `class-transformer`: Validación y sanitización estricta de payloads entrantes (`whitelist: true`, `forbidNonWhitelisted: true`).
- **Resiliencia técnica**: En caso de indisponibilidad temporal de la base de datos, los servicios backend entran en modo fallback sin colapsar el proceso del servidor.

### Frontend

- **Next.js 16 (App Router) + React 19 + TypeScript**: Renderizado híbrido rápido y seguro.
- **Tailwind CSS v4**: Sistema de diseño dark mode con paleta técnica minimalista, espacio negativo generoso y bordes sutiles.
- **SEO & Accesibilidad**:
  - Open Graph y Twitter Cards configurados.
  - Generación dinámica de `sitemap.xml` y `robots.txt`.
  - Atributos semánticos ARIA, navegación por teclado y contraste accesible.
- **Formularios robustos**: Trampa honeypot invisible contra bots spam y validación contextual posterior a la interacción (`:user-invalid`).

### DevOps e Infraestructura

- **Multi-stage Dockerfiles**: Imágenes ligeras basadas en Alpine Linux con ejecución segura bajo usuarios no privilegiados (`node` y `nextjs`).
- **Docker Compose**: Entorno local reproducible con healthcheck en PostgreSQL (`pg_isready`) y redes internas aisladas.

---

## 📦 Puesta en Marcha Local

### Opción A: Con Docker Compose (Recomendado)

Requisitos: Tener instalado [Docker](https://www.docker.com/) y Docker Compose.

```bash
# 1. Clonar el repositorio
git clone https://github.com/champagneplease/portfolio.git
cd portfolio

# 2. Levantar toda la infraestructura (PostgreSQL + NestJS + Next.js)
docker compose up --build
```

Una vez levantado:

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:4000/api
- **Health check**: http://localhost:4000/api/health
- **PostgreSQL**: `localhost:5432`

---

### Opción B: Desarrollo Local Sin Docker

#### 1. Backend (NestJS)

```bash
cd backend

# Copiar variables de entorno
cp .env.example .env

# Instalar dependencias
npm install

# Generar cliente de Prisma
npx prisma generate

# (Opcional) Si cuentas con PostgreSQL local:
# npx prisma migrate dev --name init
# npm run prisma:seed

# Compilar e iniciar en modo desarrollo
npm run start:dev
```

El servidor API correrá en `http://localhost:4000/api`.

#### 2. Frontend (Next.js)

En otra terminal:

```bash
cd frontend

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación web estará disponible en `http://localhost:3000`.

---

### Ejecución de Pruebas y Linters

```bash
# Backend: Tests unitarios con Jest (Projects & Contact)
cd backend && npm test

# Backend: Verificación de compilación TypeScript
cd backend && npm run build

# Frontend: Compilación estática Next.js (App Router)
cd frontend && npm run build

# Frontend: Control de pautas anti-slop y tono técnico
node .agents/skills/design-taste-frontend/scripts/copy-lint.mjs frontend/src/app/page.tsx --kind software
```

---

## 🚀 Despliegue en Producción (Railway / Vercel)

El proyecto está diseñado para desplegarse como un sistema desacoplado y resiliente:

### 1. Base de Datos & Backend (Railway)
- **PostgreSQL**: Provisionado con el plugin oficial de Railway.
- **Backend (NestJS)**:
  - **Root Directory**: `backend`
  - **Variables de Entorno**:
    - `DATABASE_URL`: `${{Postgres.DATABASE_URL}}`
    - `NODE_ENV`: `production`
    - `CORS_ORIGIN`: `https://tu-frontend.vercel.app, https://tu-dominio.com`
  - **Migraciones automáticas**: Al iniciar el contenedor, ejecuta `npx prisma migrate deploy` antes de levantar el servidor HTTP.

### 2. Frontend (Vercel o Railway)
- **Root Directory**: `frontend`
- **Variables de Entorno**:
  - `NEXT_PUBLIC_API_URL`: `https://tu-backend.up.railway.app/api`
  - `NEXT_PUBLIC_SITE_URL`: `https://tu-frontend.vercel.app`

---

## 🔌 Endpoints de la API REST

| Método | Endpoint              | Descripción                                             | Rate Limit  |
| :----- | :-------------------- | :------------------------------------------------------ | :---------- |
| `GET`  | `/api/health`         | Estado del servicio, uptime y conexión a base de datos  | Estándar    |
| `GET`  | `/api/projects`       | Listado completo de proyectos (admite `?featured=true`) | Estándar    |
| `GET`  | `/api/projects/:slug` | Detalle técnico y flujo de arquitectura de un proyecto  | Estándar    |
| `POST` | `/api/contact`        | Recepción y validación de mensajes con trampa honeypot  | 5 req / min |

---

## 🍔 Proyecto Destacado — Burger Sosa

- **Categoría**: Production Web Application / Full Stack / Backend / DevOps
- **Estado**: Desplegado y funcionando en producción real
- **URL**: [https://burger-sosa.up.railway.app/](https://burger-sosa.up.railway.app/)
- **Arquitectura**:
  ```text
  React / TypeScript (Client & Admin)
          ↓  HTTPS / REST Requests
        API Controllers
          ↓  Validation & Guards
        NestJS Services
          ↓  Prisma ORM
     PostgreSQL (Production DB)
  ```
- **Pipeline de Despliegue**:
  ```text
  Git (Feature Branches)
   ↓
  Docker (Multi-stage Build)
   ↓
  Railway CI/CD (Secrets & Automated Deploy)
   ↓
  Production Live (SSL & Uptime Monitoring)
  ```

---

## 👤 Contacto

- **Nombre**: Nacho Miranda
- **Rol**: Estudiante de Desarrollo de Software / Junior Backend Developer
- **Email**: [nachomirnd@gmail.com](mailto:nachomirnd@gmail.com)
- **LinkedIn**: [linkedin.com/in/nachomirnd](https://www.linkedin.com/in/nachomirnd/)
- **Instagram**: [@_nachomirnd](https://www.instagram.com/_nachomirnd/)
- **GitHub**: [github.com/champagneplease](https://github.com/champagneplease)
