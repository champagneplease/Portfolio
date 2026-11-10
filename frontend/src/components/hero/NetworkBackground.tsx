export function NetworkBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none"
    >
      {/* Radial fade to keep the network subtle and focused behind the content */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#09090b_85%)]" />

      <svg
        className="h-full w-full opacity-35"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="net-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#71717a" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#e0234e" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#3f3f46" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Network connections */}
        <g stroke="url(#net-line-grad)" strokeWidth="1" strokeDasharray="none">
          {/* Cluster Left (Greeting / Text side) */}
          <line x1="80" y1="120" x2="210" y2="180" />
          <line x1="210" y1="180" x2="150" y2="310" />
          <line x1="150" y1="310" x2="60" y2="280" />
          <line x1="60" y1="280" x2="80" y2="120" />
          <line x1="210" y1="180" x2="320" y2="240" />
          <line x1="320" y1="240" x2="280" y2="390" />
          <line x1="280" y1="390" x2="150" y2="310" />
          <line x1="320" y1="240" x2="440" y2="170" />
          <line x1="440" y1="170" x2="520" y2="280" />
          <line x1="520" y1="280" x2="390" y2="360" />
          <line x1="390" y1="360" x2="280" y2="390" />
          <line x1="280" y1="390" x2="340" y2="520" />
          <line x1="340" y1="520" x2="210" y2="580" />
          <line x1="210" y1="580" x2="110" y2="470" />
          <line x1="110" y1="470" x2="150" y2="310" />

          {/* Cluster Center / Bridge */}
          <line x1="520" y1="280" x2="650" y2="230" />
          <line x1="650" y1="230" x2="590" y2="380" />
          <line x1="590" y1="380" x2="520" y2="280" />
          <line x1="590" y1="380" x2="490" y2="510" />
          <line x1="490" y1="510" x2="340" y2="520" />
          <line x1="650" y1="230" x2="780" y2="160" />

          {/* Cluster Right (Avatar Halo side) */}
          <line x1="780" y1="160" x2="900" y2="130" />
          <line x1="900" y1="130" x2="1010" y2="210" />
          <line x1="1010" y1="210" x2="960" y2="330" />
          <line x1="960" y1="330" x2="840" y2="290" />
          <line x1="840" y1="290" x2="780" y2="160" />
          <line x1="960" y1="330" x2="1100" y2="380" />
          <line x1="1100" y1="380" x2="1050" y2="520" />
          <line x1="1050" y1="520" x2="930" y2="460" />
          <line x1="930" y1="460" x2="960" y2="330" />
          <line x1="840" y1="290" x2="750" y2="410" />
          <line x1="750" y1="410" x2="590" y2="380" />
          <line x1="750" y1="410" x2="810" y2="540" />
          <line x1="810" y1="540" x2="930" y2="460" />
          <line x1="810" y1="540" x2="700" y2="640" />
          <line x1="700" y1="640" x2="570" y2="610" />
          <line x1="570" y1="610" x2="490" y2="510" />
          <line x1="1050" y1="520" x2="1140" y2="620" />
          <line x1="1140" y1="620" x2="990" y2="680" />
          <line x1="990" y1="680" x2="870" y2="660" />
          <line x1="870" y1="660" x2="810" y2="540" />
        </g>

        {/* Nodes (Dots) */}
        <g fill="#a1a1aa">
          <circle cx="80" cy="120" r="2.5" />
          <circle cx="210" cy="180" r="3.5" />
          <circle cx="150" cy="310" r="3" />
          <circle cx="60" cy="280" r="2.5" />
          <circle cx="320" cy="240" r="3.5" />
          <circle cx="280" cy="390" r="3" />
          <circle cx="440" cy="170" r="2.5" />
          <circle cx="520" cy="280" r="3" />
          <circle cx="390" cy="360" r="2.5" />
          <circle cx="340" cy="520" r="3" />
          <circle cx="210" cy="580" r="2.5" />
          <circle cx="110" cy="470" r="2.5" />

          {/* Bridge nodes */}
          <circle cx="650" cy="230" r="3" />
          <circle cx="590" cy="380" r="3.5" fill="#e0234e" fillOpacity="0.8" />
          <circle cx="490" cy="510" r="2.5" />
          <circle cx="570" cy="610" r="3" />
          <circle cx="700" cy="640" r="2.5" />

          {/* Avatar side nodes */}
          <circle cx="780" cy="160" r="3" />
          <circle cx="900" cy="130" r="2.5" />
          <circle cx="1010" cy="210" r="3.5" />
          <circle cx="960" cy="330" r="3" />
          <circle cx="840" cy="290" r="3.5" />
          <circle cx="750" cy="410" r="3" />
          <circle cx="810" cy="540" r="3.5" fill="#e0234e" fillOpacity="0.8" />
          <circle cx="930" cy="460" r="3" />
          <circle cx="1050" cy="520" r="3.5" />
          <circle cx="1100" cy="380" r="2.5" />
          <circle cx="1140" cy="620" r="2.5" />
          <circle cx="990" cy="680" r="3" />
          <circle cx="870" cy="660" r="2.5" />
        </g>
      </svg>
    </div>
  );
}
