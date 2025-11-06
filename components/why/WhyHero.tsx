'use client';

import { useEffect, useState } from 'react';

interface WhyHeroProps {
  title: string;
  subtitle: string;
  description: string;
  stats: Array<{
    value: string;
    label: string;
    suffix?: string;
  }>;
  backgroundVariant?: 'cyan' | 'green' | 'slate';
}

export default function WhyHero({
  title,
  subtitle,
  description,
  stats,
  backgroundVariant = 'cyan',
}: WhyHeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const gradientClasses = {
    cyan: 'from-[#00D9E8]/10 via-[#00D9E8]/5 to-transparent',
    green: 'from-[#00C896]/10 via-[#00C896]/5 to-transparent',
    slate: 'from-[#1A2332]/5 via-[#1A2332]/3 to-transparent',
  };

  const accentColor = {
    cyan: '#00D9E8',
    green: '#00C896',
    slate: '#1A2332',
  };

  return (
    <section className="relative bg-white pt-24 pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientClasses[backgroundVariant]}`}
      />

      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${accentColor[backgroundVariant]} 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtitle */}
        <div
          className={`text-center mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span
            className="inline-block text-sm font-semibold tracking-wider uppercase px-4 py-2 rounded-full border"
            style={{
              color: accentColor[backgroundVariant],
              borderColor: accentColor[backgroundVariant],
              backgroundColor: `${accentColor[backgroundVariant]}10`,
            }}
          >
            {subtitle}
          </span>
        </div>

        {/* Main Title */}
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2332] text-center mb-6 max-w-5xl mx-auto leading-tight transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {title}
        </h1>

        {/* Description */}
        <p
          className={`text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {description}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex items-baseline justify-center gap-1">
                <span
                  className="text-3xl md:text-4xl font-bold font-mono"
                  style={{ color: accentColor[backgroundVariant] }}
                >
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span
                    className="text-xl font-semibold"
                    style={{ color: accentColor[backgroundVariant] }}
                  >
                    {stat.suffix}
                  </span>
                )}
              </div>
              <div className="text-sm text-gray-600 mt-2 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
