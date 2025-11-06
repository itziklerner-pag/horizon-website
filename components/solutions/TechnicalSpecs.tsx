'use client';

import { useEffect, useRef, useState } from 'react';

interface Spec {
  label: string;
  value: string;
  unit?: string;
}

interface TechnicalSpecsProps {
  specs: Spec[];
}

export default function TechnicalSpecs({ specs }: TechnicalSpecsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-4">
            Technical Highlights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade performance backed by proven technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-[#1A2332] to-[#2A3F56] rounded-xl p-8 text-center hover:scale-105 transition-all duration-500 shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl md:text-6xl font-bold text-[#00D9E8] mb-2">
                {spec.value}
              </div>
              {spec.unit && (
                <div className="text-lg text-[#4DE4EF] font-semibold mb-4">
                  {spec.unit}
                </div>
              )}
              <div className="text-gray-300 font-medium">
                {spec.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
