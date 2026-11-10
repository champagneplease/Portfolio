import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const viewport: Viewport = {
  themeColor: '#090a0f',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Nacho Miranda | Backend Developer & DevOps en Formación',
  description:
    'Estudiante de Desarrollo de Software enfocado en Backend, APIs, arquitectura y DevOps. Experiencia práctica construyendo y desplegando software real en producción con NestJS, TypeScript y PostgreSQL.',
  keywords: [
    'Nacho Miranda',
    'Backend Developer',
    'Junior Backend',
    'NestJS',
    'TypeScript',
    'Python',
    'PostgreSQL',
    'Docker',
    'DevOps',
    'AWS',
    'Terraform',
    'Prisma',
    'Burger Sosa',
    'APIs REST',
  ],
  authors: [{ name: 'Nacho Miranda', url: 'https://github.com/champagneplease' }],
  creator: 'Nacho Miranda',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://nachomiranda.dev',
    title: 'Nacho Miranda | Backend Developer & DevOps en Formación',
    description:
      'Estudiante de Desarrollo de Software enfocado en Backend, APIs, arquitectura y DevOps. Conoce mis proyectos y experiencia en producción real.',
    siteName: 'Nacho Miranda Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nacho Miranda | Backend Developer',
    description:
      'Backend, APIs, arquitectura y despliegue de aplicaciones en producción.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="min-h-screen bg-[#090a0f] text-slate-100 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
