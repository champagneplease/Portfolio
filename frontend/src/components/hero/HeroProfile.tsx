import Image from 'next/image';
import { Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

interface HeroProfileProps {
  imageSrc?: string;
  alt?: string;
  email?: string;
  location?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

export function HeroProfile({
  imageSrc = '/nacho-miranda.jpg',
  alt = 'Nacho Miranda — Backend Developer',
  email = 'nachomirnd@gmail.com',
  location = 'Catamarca, Argentina',
  githubUrl = 'https://github.com/champagneplease',
  linkedinUrl = 'https://linkedin.com/in/nacho-miranda',
}: HeroProfileProps) {
  return (
    <div className="flex flex-col items-center">
      {/* Avatar Container with glowing halo */}
      <div className="relative flex items-center justify-center">
        {/* Ambient NestJS Ruby breathing halo behind avatar */}
        <div
          aria-hidden="true"
          className="absolute -inset-6 rounded-full bg-gradient-to-br from-[#e0234e]/30 via-zinc-800/40 to-transparent blur-3xl -z-10 animate-pulse-glow"
        />

        {/* Outer circular bezel with subtle hover scale and ring accent */}
        <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-2.5 sm:p-3 border border-zinc-700/80 bg-[#0c0c0e]/95 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_-8px_rgba(224,35,78,0.3)] ring-1 ring-zinc-600/50 transition-all duration-500 hover:scale-[1.02] hover:ring-[#e0234e]/60 group">
          {/* Inner frame containing high-res photo */}
          <div className="relative w-full h-full rounded-full overflow-hidden border border-zinc-700/80 bg-zinc-950 shadow-inner">
            <Image
              src={imageSrc}
              alt={alt}
              fill
              sizes="(max-width: 640px) 210px, (max-width: 768px) 260px, 320px"
              quality={100}
              priority
              style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
              className="filter contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Floating status pill */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-700 bg-zinc-900/95 text-xs font-mono text-zinc-100 shadow-xl backdrop-blur-md whitespace-nowrap transition-transform duration-300 group-hover:scale-105">
            <span className="w-2 h-2 rounded-full bg-[#e0234e] animate-pulse shadow-[0_0_8px_#e0234e]" />
            <span>NestJS • Python • DevOps</span>
          </div>
        </div>
      </div>

      {/* Profile Details directly below the circle (Inspired by user's reference) */}
      <div className="mt-8 flex flex-col items-center gap-2.5 text-center select-none">
        {/* Email link */}
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-300 hover:text-white transition-colors group"
          title={`Email: ${email}`}
        >
          <Mail className="w-4 h-4 text-zinc-400 group-hover:text-[#e0234e] transition-colors shrink-0" />
          <span>{email}</span>
        </a>

        {/* Location: Catamarca, Argentina */}
        <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-zinc-400">
          <MapPin className="w-4 h-4 text-[#e0234e] shrink-0" />
          <span>{location}</span>
        </div>

        {/* Social Icons (GitHub, LinkedIn) */}
        <div className="flex items-center justify-center gap-3 pt-1.5">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Nacho Miranda"
            title="GitHub: @champagneplease"
            className="w-9 h-9 rounded-full border border-zinc-700 bg-zinc-900/90 hover:bg-zinc-800 hover:border-zinc-500 hover:text-white transition-all flex items-center justify-center text-zinc-300 shadow-md hover:scale-110"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Nacho Miranda"
            title="LinkedIn: Nacho Miranda"
            className="w-9 h-9 rounded-full border border-zinc-700 bg-zinc-900/90 hover:bg-zinc-800 hover:border-zinc-500 hover:text-white transition-all flex items-center justify-center text-zinc-300 shadow-md hover:scale-110"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
