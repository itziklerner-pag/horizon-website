'use client';

import { useEffect, useState, useRef } from 'react';

interface StatCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  color?: string;
}

export default function StatCounter({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
  decimals = 0,
  label,
  color = '#00D9E8',
}: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = Date.now();
          const startValue = 0;
          const endValue = end;

          const animate = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = startValue + (endValue - startValue) * easeOutQuart;

            setCount(currentValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={elementRef} className="text-center">
      <div className="flex items-baseline justify-center gap-1">
        {prefix && (
          <span className="text-2xl font-semibold" style={{ color }}>
            {prefix}
          </span>
        )}
        <span className="text-5xl md:text-6xl font-bold font-mono" style={{ color }}>
          {count.toFixed(decimals)}
        </span>
        {suffix && (
          <span className="text-2xl font-semibold" style={{ color }}>
            {suffix}
          </span>
        )}
      </div>
      <div className="text-gray-600 mt-3 font-medium">{label}</div>
    </div>
  );
}
