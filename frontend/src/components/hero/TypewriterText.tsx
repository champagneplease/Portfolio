'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text?: string;
  className?: string;
}

export function TypewriterText({
  text = 'Backend Developer!',
  className = 'text-[#e0234e]',
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText === text) {
      // Pause when fully typed so visitor can read comfortably
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 3400);
    } else if (isDeleting && displayedText === '') {
      // Pause before typing again
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 650);
    } else {
      // Natural fluid typing cadence
      const delay = isDeleting ? 38 : 85 + Math.random() * 30;
      timeout = setTimeout(() => {
        setDisplayedText((prev) => {
          if (isDeleting) {
            return prev.slice(0, -1);
          } else {
            return text.slice(0, prev.length + 1);
          }
        });
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, isMounted, text]);

  // Fallback for SSR / initial paint before hydration
  const renderedText = isMounted ? displayedText : text;

  return (
    <span className={`inline-flex items-center ${className}`}>
      {/* Screen reader announcement */}
      <span className="sr-only">{text}</span>

      {/* Visual typewriter stream with native font glyphs */}
      <span aria-hidden="true" className="tracking-tight">
        {renderedText}
      </span>

      {/* Blinking cursor with ruby glow matching typography */}
      <span
        aria-hidden="true"
        className="inline-block w-[3px] sm:w-[4px] md:w-[5px] h-[0.85em] ml-1 sm:ml-1.5 bg-[#e0234e] animate-pulse rounded-full shadow-[0_0_12px_rgba(224,35,78,0.85)]"
        style={{ verticalAlign: '-0.05em' }}
      />
    </span>
  );
}
