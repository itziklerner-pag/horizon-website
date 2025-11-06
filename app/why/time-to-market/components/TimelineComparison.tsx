'use client';

import { useEffect, useState, useRef } from 'react';

type Solution = {
  name: string;
  color: string;
  days: number;
  phases: Array<{ name: string; duration: number; color: string }>;
} & (
  | { benefits: string[] }
  | { challenges: string[] }
);

export default function TimelineComparison() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const solutions: Solution[] = [
    {
      name: 'Horizon Fuel Cells',
      color: '#00D9E8',
      days: 90,
      phases: [
        { name: 'Assessment', duration: 30, color: '#00D9E8' },
        { name: 'Manufacturing', duration: 30, color: '#00C896' },
        { name: 'Installation', duration: 20, color: '#4DE4EF' },
        { name: 'Commission', duration: 10, color: '#00D9E8' },
      ],
      benefits: [
        'No utility connection required',
        'Modular & scalable',
        'Pre-certified systems',
        'Parallel processing',
      ],
    },
    {
      name: 'Diesel Generators',
      color: '#FFA500',
      days: 180,
      phases: [
        { name: 'Permits', duration: 60, color: '#FF8C00' },
        { name: 'Site Prep', duration: 45, color: '#FFA500' },
        { name: 'Installation', duration: 45, color: '#FFB84D' },
        { name: 'Commission', duration: 30, color: '#FFC266' },
      ],
      challenges: [
        'Extensive permitting',
        'Fuel infrastructure required',
        'Environmental reviews',
        'Sequential processes',
      ],
    },
    {
      name: 'Natural Gas',
      color: '#9B59B6',
      days: 365,
      phases: [
        { name: 'Utility Approval', duration: 180, color: '#8E44AD' },
        { name: 'Pipeline Work', duration: 120, color: '#9B59B6' },
        { name: 'Installation', duration: 45, color: '#A569BD' },
        { name: 'Commission', duration: 20, color: '#BB8FCE' },
      ],
      challenges: [
        'Utility connection delays',
        'Pipeline installation',
        'Right-of-way issues',
        'Regulatory approvals',
      ],
    },
  ];

  const maxDays = Math.max(...solutions.map(s => s.days));

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-6">
            Why We're 2-4X Faster Than Alternatives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare deployment timelines side-by-side. Time is money—every month of delay costs you revenue.
          </p>
        </div>

        {/* Comparison Chart */}
        <div className="space-y-8 mb-12">
          {solutions.map((solution, idx) => {
            const details = 'benefits' in solution ? solution.benefits.join(' • ') : solution.challenges.join(' • ');

            return (
              <div
                key={idx}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                {/* Solution Header */}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-[#1A2332]">{solution.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{details}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold font-mono" style={{ color: solution.color }}>
                      {solution.days}
                    </div>
                    <div className="text-sm text-gray-500">days</div>
                  </div>
                </div>

                {/* Timeline Bar */}
                <div className="relative h-20 bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <div className="flex h-full">
                    {solution.phases.map((phase, phaseIdx) => {
                      const width = (phase.duration / maxDays) * 100;
                      return (
                        <div
                          key={phaseIdx}
                          className={`relative flex items-center justify-center border-r border-white/30 transition-all duration-1000 group`}
                          style={{
                            width: isVisible ? `${width}%` : '0%',
                            backgroundColor: phase.color,
                            transitionDelay: `${idx * 200 + phaseIdx * 100}ms`,
                          }}
                        >
                          <div className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-center px-2">
                            <div>{phase.name}</div>
                            <div className="text-xs mt-1">{phase.duration} days</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Time Saved Callout */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-[#00D9E8]/10 to-[#00D9E8]/5 border border-[#00D9E8]/20 rounded-xl p-6">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-2xl font-bold text-[#1A2332] mb-2">
              90 Days Faster Than Diesel
            </h3>
            <p className="text-gray-700 mb-4">
              Our modular approach eliminates lengthy permitting and infrastructure buildout.
              Start generating revenue 3 months earlier.
            </p>
            <div className="text-3xl font-bold text-[#00D9E8] font-mono">
              60% Time Reduction
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#00C896]/10 to-[#00C896]/5 border border-[#00C896]/20 rounded-xl p-6">
            <div className="text-4xl mb-3">💰</div>
            <h3 className="text-2xl font-bold text-[#1A2332] mb-2">
              $1.5M+ Revenue Protected
            </h3>
            <p className="text-gray-700 mb-4">
              For a 10MW facility at 80% utilization, avoiding 9 months of delay protects
              $4.5M in potential revenue.
            </p>
            <div className="text-3xl font-bold text-[#00C896] font-mono">
              275 Days Saved
            </div>
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="mt-12 bg-white rounded-xl border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-[#1A2332] mb-6">
            What Makes Our Timeline Possible
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="w-10 h-10 bg-[#00D9E8] rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h4 className="font-bold text-[#1A2332] mb-2">Modular Design</h4>
              <p className="text-sm text-gray-600">
                Pre-configured 250kW modules scale instantly. No custom engineering for each site.
              </p>
            </div>
            <div>
              <div className="w-10 h-10 bg-[#00C896] rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-[#1A2332] mb-2">Pre-Certification</h4>
              <p className="text-sm text-gray-600">
                CARB and EPA certified. No site-by-site air quality permitting required.
              </p>
            </div>
            <div>
              <div className="w-10 h-10 bg-[#4DE4EF] rounded-lg flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-bold text-[#1A2332] mb-2">No Utility Hookup</h4>
              <p className="text-sm text-gray-600">
                Hydrogen delivery replaces gas pipeline installation. Control your timeline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
