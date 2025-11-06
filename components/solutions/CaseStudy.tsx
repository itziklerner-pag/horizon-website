'use client';

import { useEffect, useRef, useState } from 'react';

interface CaseStudyProps {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  quote?: {
    text: string;
    author: string;
    title: string;
  };
}

export default function CaseStudy({ company, industry, challenge, solution, results, quote }: CaseStudyProps) {
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
          <p className="text-[#00D9E8] font-semibold text-sm uppercase tracking-wider mb-2">
            Success Story
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-4">
            {company}
          </h2>
          <p className="text-xl text-gray-600">
            {industry}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Challenge & Solution */}
          <div
            className={`space-y-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold text-[#1A2332] mb-4 flex items-center">
                <span className="inline-block w-2 h-8 bg-[#00D9E8] mr-3"></span>
                The Challenge
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {challenge}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1A2332] mb-4 flex items-center">
                <span className="inline-block w-2 h-8 bg-[#00D9E8] mr-3"></span>
                The Solution
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {solution}
              </p>
            </div>

            {quote && (
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-[#00D9E8]">
                <p className="text-lg text-gray-700 italic mb-4">
                  "{quote.text}"
                </p>
                <div className="text-sm">
                  <p className="font-bold text-[#1A2332]">{quote.author}</p>
                  <p className="text-gray-600">{quote.title}</p>
                </div>
              </div>
            )}
          </div>

          {/* Results */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <h3 className="text-2xl font-bold text-[#1A2332] mb-6 flex items-center">
              <span className="inline-block w-2 h-8 bg-[#00D9E8] mr-3"></span>
              Results
            </h3>
            <div className="space-y-6">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#1A2332] to-[#2A3F56] rounded-lg p-6 hover:scale-105 transition-transform"
                >
                  <div className="text-4xl font-bold text-[#00D9E8] mb-2">
                    {result.value}
                  </div>
                  <div className="text-gray-300">
                    {result.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
