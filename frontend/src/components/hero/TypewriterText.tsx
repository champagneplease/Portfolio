'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text?: string;
  className?: string;
}

export function TypewriterText({
  text = 'Backend Developer',
  className = 'text-[#e0234e]',
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showExclamation, setShowExclamation] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    let timeout: NodeJS.Timeout;

    // 1. Text reached full length and exclamation is NOT yet shown
    if (!isDeleting && displayedText === text && !showExclamation) {
      // Show exclamation mark immediately with blinking dot
      timeout = setTimeout(() => {
        setShowExclamation(true);
      }, 120);
    }
    // 2. Full text with exclamation is displayed -> pause to let visitor read & watch the dot blink
    else if (!isDeleting && displayedText === text && showExclamation) {
      timeout = setTimeout(() => {
        // First hide exclamation, then start backspacing
        setShowExclamation(false);
        setIsDeleting(true);
      }, 3400);
    }
    // 3. Fully deleted -> pause before typing again
    else if (isDeleting && displayedText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, 650);
    }
    // 4. Typing or backspacing in progress
    else {
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
  }, [displayedText, isDeleting, isMounted, showExclamation, text]);

  // Fallback for SSR / initial paint before hydration
  const renderedText = isMounted ? displayedText : text;
  const isComplete = isMounted ? showExclamation : true;

  return (
    <span className={`inline-flex items-center flex-wrap ${className}`}>
      {/* Screen reader announcement: reads cleanly as Backend Developer! */}
      <span className="sr-only">Backend Developer!</span>

      {/* Visual typewriter stream */}
      <span aria-hidden="true" className="tracking-tight">
        {renderedText}
      </span>

      {/* Exclamation mark with blinking bottom dot when text is complete */}
      {isComplete ? (
        <span
          aria-hidden="true"
          className="inline-flex flex-col items-center justify-between ml-1.5 sm:ml-2 h-[0.82em] w-[0.24em] select-none"
          style={{ verticalAlign: 'middle' }}
        >
          {/* Upper solid stroke */}
          <span className="w-full h-[62%] bg-[#e0234e] rounded-full shadow-[0_0_12px_rgba(224,35,78,0.6)]" />
          {/* Bottom dot: parpadeando (blinking rhythmically with glow) */}
          <span className="w-full aspect-square bg-[#e0234e] rounded-full animate-dot-blink shadow-[0_0_16px_rgba(224,35,78,1)]" />
        </span>
      ) : (
        /* While typing or deleting: smooth cursor */
        <span
          aria-hidden="true"
          className="inline-block w-[3px] sm:w-[4px] md:w-[5px] h-[0.85em] ml-1 bg-[#e0234e] animate-pulse rounded-full shadow-[0_0_12px_rgba(224,35,78,0.8)]"
          style={{ verticalAlign: '-0.05em' }}
        />
      )}
    </span>
  );
}
