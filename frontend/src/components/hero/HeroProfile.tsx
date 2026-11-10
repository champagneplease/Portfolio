import Image from 'next/image';

interface HeroProfileProps {
  imageSrc?: string;
  alt?: string;
}

export function HeroProfile({
  imageSrc = '/avatar.png',
  alt = 'Nacho Miranda — Backend Developer',
}: HeroProfileProps) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Subtle NestJS ruby ambient halo behind avatar */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#e0234e]/20 via-zinc-800/30 to-transparent blur-2xl -z-10"
      />

      {/* Outer circular bezel */}
      <div className="relative w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2 border border-zinc-800 bg-[#0c0c0e]/90 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-sm ring-1 ring-zinc-700/50">
        {/* Inner frame */}
        <div className="relative w-full h-full rounded-full overflow-hidden border border-zinc-700/60 bg-zinc-900">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            sizes="(max-width: 640px) 224px, (max-width: 768px) 288px, 320px"
            priority
            className="object-cover object-center filter contrast-[1.03]"
          />
        </div>

        {/* Small floating technical status badge */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-700 bg-zinc-900/95 text-xs font-mono text-zinc-200 shadow-lg whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-[#e0234e] animate-pulse" />
          <span>NestJS • Python • DevOps</span>
        </div>
      </div>
    </div>
  );
}
