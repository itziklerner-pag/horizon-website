'use client';

import { useEffect, useRef, useState } from 'react';

interface TimelineStep {
  day: string;
  title: string;
  description: string;
}

interface TimelineSectionProps {
  steps: TimelineStep[];
}

export default function TimelineSection({ steps }: TimelineSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [animateConnector, setAnimateConnector] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Delay connector animation slightly after content
            setTimeout(() => setAnimateConnector(true), 400);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-[#1A2332] relative overflow-hidden">
      {/* Animated background mesh */}
      <div className="absolute inset-0 opacity-20 gradient-mesh-animated"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Horizon Solution
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            From contract signing to full operation in just 90 days
          </p>
          <div className="inline-block bg-gradient-to-r from-[#00D9E8] to-[#4DE4EF] text-[#1A2332] px-8 py-3 rounded-full font-bold text-lg animate-gradient hover-scale-sm cursor-pointer">
            90-Day Deployment Timeline
          </div>
        </div>

        <div className="relative">
          {/* Animated connection line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00D9E8]/30 to-transparent">
            <div
              className={`h-full bg-gradient-to-r from-[#00D9E8] to-[#4DE4EF] transition-all duration-1500 ease-out ${
                animateConnector ? 'w-full' : 'w-0'
              }`}
            ></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot with pulse animation */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00D9E8] to-[#4DE4EF] flex items-center justify-center shadow-lg shadow-[#00D9E8]/50 hover:shadow-2xl hover:shadow-[#00D9E8]/70 transition-all duration-300 hover:scale-110 animate-gradient cursor-pointer group">
                      <span className="text-[#1A2332] font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                        {step.day}
                      </span>
                    </div>
                    {/* Pulsing ring effect */}
                    <div className="absolute inset-0 rounded-full bg-[#00D9E8] opacity-20 animate-pulse"></div>
                  </div>
                </div>

                {/* Card with energy flow */}
                <div className="group bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-[#00D9E8]/50 hover-lift relative overflow-hidden">
                  {/* Energy flow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 energy-flow pointer-events-none"></div>

                  <h3 className="text-xl font-bold text-white mb-3 relative z-10 group-hover:text-[#00D9E8] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed relative z-10">
                    {step.description}
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden relative z-10">
                    <div
                      className={`h-full bg-gradient-to-r from-[#00D9E8] to-[#4DE4EF] transition-all duration-1000 ease-out ${
                        isVisible ? 'w-full' : 'w-0'
                      }`}
                      style={{ transitionDelay: `${(index * 150) + 500}ms` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional timeline indicators for visual interest */}
          <div className="hidden md:flex justify-center mt-12 space-x-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 bg-[#00D9E8] rounded-full transition-all duration-500 ${
                  isVisible ? 'w-16 opacity-100' : 'w-0 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
