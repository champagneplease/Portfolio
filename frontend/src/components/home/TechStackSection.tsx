'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface TechItem {
  name: string;
  iconSrc: string;
  invert?: boolean;
  featured?: boolean;
  badge?: string;
}

interface TechCategory {
  title: string;
  items: TechItem[];
}

const CATEGORIES: TechCategory[] = [
  {
    title: 'Backend Development',
    items: [
      {
        name: 'NestJS',
        iconSrc: '/assets/icons/demo/nestjs.svg',
        featured: true,
        badge: 'Foco Principal',
      },
      {
        name: 'Node.js',
        iconSrc: '/assets/icons/demo/nodejs.svg',
      },
      {
        name: 'TypeScript',
        iconSrc: '/assets/icons/demo/typescript.svg',
      },
      {
        name: 'Python',
        iconSrc: '/assets/icons/demo/python.svg',
      },
      {
        name: 'Express.js',
        iconSrc: '/assets/icons/demo/express.svg',
        invert: true,
      },
      {
        name: 'PostgreSQL',
        iconSrc: '/assets/icons/demo/postgres.svg',
      },
      {
        name: 'Prisma ORM',
        iconSrc: '/assets/icons/demo/prisma.svg',
        invert: true,
      },
      {
        name: 'MongoDB',
        iconSrc: '/assets/icons/demo/mongodb.svg',
      },
    ],
  },
  {
    title: 'DevOps & Cloud',
    items: [
      {
        name: 'Docker',
        iconSrc: '/assets/icons/demo/docker.svg',
      },
      {
        name: 'Docker Compose',
        iconSrc: '/assets/icons/demo/docker.svg',
      },
      {
        name: 'AWS',
        iconSrc: '/assets/icons/demo/aws.svg',
        invert: true,
      },
      {
        name: 'Railway',
        iconSrc: '/assets/icons/demo/railway.svg',
        invert: true,
      },
      {
        name: 'Linux & Bash',
        iconSrc: '/assets/icons/demo/bash.svg',
        invert: true,
      },
      {
        name: 'GitHub Actions',
        iconSrc: '/assets/icons/demo/github-actions.svg',
      },
      {
        name: 'Git',
        iconSrc: '/assets/icons/demo/git.svg',
      },
      {
        name: 'REST APIs',
        iconSrc: '/assets/icons/demo/openapi.svg',
      },
    ],
  },
  {
    title: 'Frontend Development',
    items: [
      {
        name: 'HTML5',
        iconSrc: '/assets/icons/demo/html.svg',
      },
      {
        name: 'CSS3',
        iconSrc: '/assets/icons/demo/css.svg',
      },
      {
        name: 'JavaScript',
        iconSrc: '/assets/icons/demo/js.svg',
      },
      {
        name: 'React',
        iconSrc: '/assets/icons/demo/react.svg',
      },
      {
        name: 'Next.js',
        iconSrc: '/assets/icons/demo/nextjs.svg',
        invert: true,
      },
      {
        name: 'Tailwind CSS',
        iconSrc: '/assets/icons/demo/tailwindcss.svg',
      },
      {
        name: 'Bootstrap',
        iconSrc: '/assets/icons/demo/bootstrap.svg',
      },
      {
        name: 'Responsive Design',
        iconSrc: '/assets/icons/demo/ui-smartphone.svg',
        invert: true,
      },
    ],
  },
  {
    title: 'Tools & Technologies',
    items: [
      {
        name: 'GitHub',
        iconSrc: '/assets/icons/demo/github.svg',
        invert: true,
      },
      {
        name: 'Postman',
        iconSrc: '/assets/icons/demo/postman.svg',
      },
      {
        name: 'CLI',
        iconSrc: '/assets/icons/demo/ui-terminal.svg',
        invert: true,
      },
      {
        name: 'VS Code',
        iconSrc: '/assets/icons/demo/visual-studio-code.svg',
      },
      {
        name: 'MySQL',
        iconSrc: '/assets/icons/demo/mysql.svg',
      },
      {
        name: 'SQL',
        iconSrc: '/assets/icons/demo/sql.svg',
        invert: true,
      },
      {
        name: 'Linux Tux',
        iconSrc: '/assets/icons/demo/linux-tux.svg',
      },
      {
        name: 'JSON / DTOs',
        iconSrc: '/assets/icons/demo/json.svg',
      },
    ],
  },
];

function TechCard({ item }: { item: TechItem }) {
  const isFeatured = item.featured;

  return (
    <div
      className={`group relative rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 cursor-default select-none ${
        isFeatured
          ? 'bg-gradient-to-b from-[#e0234e]/12 via-[#0e0e12] to-[#0e0e12] border border-[#e0234e]/60 shadow-[0_4px_24px_-4px_rgba(224,35,78,0.25)] hover:border-[#e0234e] hover:shadow-[0_12px_32px_rgba(224,35,78,0.4)]'
          : 'bg-[#0e0e12] border border-zinc-800/90 shadow-md hover:border-zinc-600 hover:bg-zinc-900/70 hover:shadow-[0_12px_28px_-6px_rgba(0,0,0,0.6)]'
      }`}
    >
      {/* Featured Badge */}
      {item.badge && (
        <span className="absolute -top-2.5 px-2.5 py-0.5 rounded-full bg-[#e0234e] text-[10px] font-mono font-bold text-white shadow-md tracking-wider uppercase">
          {item.badge}
        </span>
      )}

      {/* Tech Icon Container */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-3.5 transition-transform duration-300 group-hover:scale-110">
        <Image
          src={item.iconSrc}
          alt={item.name}
          width={48}
          height={48}
          className={`w-10 h-10 sm:w-12 sm:h-12 object-contain ${
            item.invert ? 'filter invert brightness-125' : ''
          }`}
        />
      </div>

      {/* Tech Label */}
      <span className="text-sm sm:text-base font-semibold text-zinc-100 group-hover:text-white transition-colors tracking-tight">
        {item.name}
      </span>
    </div>
  );
}

export function TechStackSection() {
  return (
    <section className="border-t border-zinc-800/80 bg-black py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Section Header (Inspired by reference My Skills + Underline relief) */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-2.5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              My Skills
            </h2>
            {/* Center accent underline matching DevFolioX reference */}
            <div
              aria-hidden="true"
              className="mx-auto mt-2 h-1 w-14 rounded-full bg-[#e0234e] shadow-[0_0_14px_rgba(224,35,78,0.85)]"
            />
          </div>
        </ScrollReveal>

        {/* Categories Stack */}
        <div className="space-y-16">
          {CATEGORIES.map((category, idx) => (
            <ScrollReveal
              key={category.title}
              direction="up"
              delay={idx * 80}
              className="space-y-6"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white text-center tracking-tight">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
                {category.items.map((tech) => (
                  <TechCard key={tech.name} item={tech} />
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
