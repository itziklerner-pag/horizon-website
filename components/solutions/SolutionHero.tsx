'use client';

import { useEffect, useRef, useState } from 'react';

interface SolutionHeroProps {
  title: string;
  subtitle: string;
  description: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export default function SolutionHero({ title, subtitle, description, stats }: SolutionHeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#1A2332] pt-24 pb-20 md:pt-32 md:pb-28"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00D9E8] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4DE4EF] rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-[#00D9E8] font-semibold text-sm uppercase tracking-wider mb-4">
              {subtitle}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl">
              {description}
            </p>
          </div>

          {stats && stats.length > 0 && (
            <div
              className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {stats.map((stat, index) => (
                <div key={index} className="border-l-2 border-[#00D9E8] pl-4">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
