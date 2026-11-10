import Image from 'next/image';

interface HeroProfileProps {
  imageSrc?: string;
  alt?: string;
}

export function HeroProfile({
  imageSrc = '/nacho-miranda.jpg',
  alt = 'Nacho Miranda — Backend Developer',
}: HeroProfileProps) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Ambient NestJS Ruby breathing halo behind avatar */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-full bg-gradient-to-br from-[#e0234e]/30 via-zinc-800/40 to-transparent blur-3xl -z-10 animate-pulse-glow"
      />

      {/* Outer circular bezel with subtle hover scale and ring accent */}
      <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-88 lg:h-88 rounded-full p-2.5 sm:p-3 border border-zinc-700/80 bg-[#0c0c0e]/95 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_-8px_rgba(224,35,78,0.3)] ring-1 ring-zinc-600/50 transition-all duration-500 hover:scale-[1.02] hover:ring-[#e0234e]/60 group">
        {/* Inner frame containing high-res photo */}
        <div className="relative w-full h-full rounded-full overflow-hidden border border-zinc-700/80 bg-zinc-950 shadow-inner">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            sizes="(max-width: 640px) 240px, (max-width: 768px) 300px, 360px"
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
  );
}
