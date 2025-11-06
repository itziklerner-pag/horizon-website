'use client';

import { useEffect, useRef, useState } from 'react';

export function IndustryChallenges() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const challenges = [
    {
      problem: 'Grid Connection Delays',
      traditional: '18-48 months wait time',
      horizon: 'Deploy in 90 days',
      impact: 'Start revenue immediately',
      icon: '⏱️',
    },
    {
      problem: 'Diesel Backup Costs',
      traditional: '$2M+ annual fuel & maintenance',
      horizon: 'Zero diesel required',
      impact: 'Predictable operating costs',
      icon: '⛽',
    },
    {
      problem: 'Carbon Emissions',
      traditional: '1000+ tons CO₂/year',
      horizon: '0g emissions',
      impact: 'Meet ESG commitments',
      icon: '🌍',
    },
    {
      problem: 'Reliability Concerns',
      traditional: '99.9% uptime (8.7 hrs downtime)',
      horizon: '99.999% (5 min downtime)',
      impact: '$500K+ savings on SLA penalties',
      icon: '⚡',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - FIXED: Shortened headline to max 8 words */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1A2332] mb-4">
            Traditional Power vs Horizon
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fuel cells solve data center challenges
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="space-y-8">
          {challenges.map((challenge, index) => (
            <div
              key={challenge.problem}
              className={`bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="grid md:grid-cols-12 gap-0">
                {/* Icon & Problem */}
                <div className="md:col-span-3 bg-gradient-to-br from-[#1A2332] to-[#2A3F56] p-8 flex flex-col justify-center">
                  <div className="text-5xl mb-4">{challenge.icon}</div>
                  <h3 className="text-xl font-bold text-white">{challenge.problem}</h3>
                </div>

                {/* Traditional Solution */}
                <div className="md:col-span-3 p-8 bg-red-50 border-l-4 border-red-300">
                  <div className="text-xs uppercase tracking-wider text-red-600 font-semibold mb-2">
                    Traditional Approach
                  </div>
                  <div className="text-lg text-gray-800 font-semibold">
                    {challenge.traditional}
                  </div>
                </div>

                {/* Horizon Solution */}
                <div className="md:col-span-3 p-8 bg-cyan-50 border-l-4 border-[#00D9E8]">
                  <div className="text-xs uppercase tracking-wider text-[#00B8C5] font-semibold mb-2">
                    Horizon Solution
                  </div>
                  <div className="text-lg text-[#1A2332] font-bold">
                    {challenge.horizon}
                  </div>
                </div>

                {/* Business Impact */}
                <div className="md:col-span-3 p-8 bg-green-50 border-l-4 border-green-400">
                  <div className="text-xs uppercase tracking-wider text-green-600 font-semibold mb-2">
                    Business Impact
                  </div>
                  <div className="text-lg text-gray-800 font-semibold">
                    {challenge.impact}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className={`mt-16 bg-gradient-to-r from-[#00D9E8] to-[#4DE4EF] rounded-2xl p-12 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#1A2332] font-mono mb-2">25-35%</div>
              <div className="text-[#1A2332] font-semibold">Lower TCO vs Traditional</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1A2332] font-mono mb-2">100%</div>
              <div className="text-[#1A2332] font-semibold">Clean Energy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1A2332] font-mono mb-2">24/7</div>
              <div className="text-[#1A2332] font-semibold">Support & Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
