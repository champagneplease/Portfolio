import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const viewport: Viewport = {
  themeColor: '#000000',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Nacho Miranda | Backend Developer',
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
    'Burger Sosa',
  ],
  authors: [{ name: 'Nacho Miranda', url: 'https://github.com/champagneplease' }],
  creator: 'Nacho Miranda',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://nachomiranda.dev',
    title: 'Nacho Miranda | Backend Developer',
    description:
      'Backend, APIs, arquitectura y despliegue de aplicaciones en producción.',
    siteName: 'Nacho Miranda',
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
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      data-radius="sharp"
      data-type="software"
      className="dark"
    >
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="page-type" content="software" />
        <meta name="site-kind" content="software" />
        {/* Google Fonts: Host Grotesk + JetBrains Mono */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-black text-white antialiased flex flex-col justify-between">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
