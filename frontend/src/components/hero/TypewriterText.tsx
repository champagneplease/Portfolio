'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text?: string;
  className?: string;
  cursorClassName?: string;
}

export function TypewriterText({
  text = 'Backend Developer',
  className = 'text-[#e0234e]',
  cursorClassName = 'text-[#e0234e]',
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
      // Pause when fully typed
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 3200);
    } else if (isDeleting && displayedText === '') {
      // Pause before typing again
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 600);
    } else {
      // Typing or deleting speed
      const delay = isDeleting ? 45 : 95 + Math.random() * 35;
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
    <span className={`inline-flex items-baseline ${className}`}>
      {/* Screen reader announcement: announces complete text at once */}
      <span className="sr-only">{text}</span>

      {/* Visual typewriter stream */}
      <span aria-hidden="true">{renderedText}</span>
      <span
        aria-hidden="true"
        className={`inline-block w-[3px] h-[0.9em] ml-1 bg-current animate-pulse rounded-full ${cursorClassName}`}
        style={{ verticalAlign: '-0.05em' }}
      />
    </span>
  );
}
