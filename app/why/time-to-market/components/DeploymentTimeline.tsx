'use client';

import { useEffect, useState, useRef } from 'react';

export default function DeploymentTimeline() {
  const [activePhase, setActivePhase] = useState<number | null>(null);
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

  const phases = [
    {
      phase: 'Phase 1',
      days: 'Months 1-2',
      title: 'Site Assessment & Design',
      icon: '📋',
      color: '#00D9E8',
      tasks: [
        'Remote site survey via video call',
        'Power requirement analysis',
        'Hydrogen delivery logistics planning',
        'Permit application submission',
        'Custom system configuration',
      ],
      deliverables: [
        'Detailed deployment plan',
        'Final pricing & contract',
        'Permit approval (if required)',
      ],
    },
    {
      phase: 'Phase 2',
      days: 'Months 2-3',
      title: 'Manufacturing & Pre-Configuration',
      icon: '🏭',
      color: '#00C896',
      tasks: [
        'Fuel cell stack assembly',
        'Power electronics integration',
        'Hydrogen storage system prep',
        'Factory acceptance testing (FAT)',
        'Quality assurance checks',
      ],
      deliverables: [
        'Fully tested system',
        'FAT report & certification',
        'Shipping schedule confirmation',
      ],
    },
    {
      phase: 'Phase 3',
      days: 'Month 3-4',
      title: 'Delivery & Installation',
      icon: '🚚',
      color: '#4DE4EF',
      tasks: [
        'Equipment delivery to site',
        'Foundation & mounting',
        'Electrical integration',
        'Hydrogen supply connection',
        'Control system setup',
      ],
      deliverables: [
        'Installed system',
        'All connections verified',
        'Safety systems tested',
      ],
    },
    {
      phase: 'Phase 4',
      days: 'Month 4',
      title: 'Commissioning & Go-Live',
      icon: '⚡',
      color: '#00D9E8',
      tasks: [
        'System startup procedures',
        'Load testing & verification',
        'Staff training',
        'Remote monitoring activation',
        'Performance optimization',
      ],
      deliverables: [
        'Fully operational system',
        'Training completion certificates',
        'Warranty activation',
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-6">
            Our Proven 4-Phase Deployment Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach refined over 100+ installations ensures predictable timelines and zero surprises.
          </p>
        </div>

        {/* Timeline Progress Bar */}
        <div className="mb-12">
          <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#00D9E8] to-[#00C896] transition-all duration-1000 ease-out"
              style={{ width: isVisible ? '100%' : '0%' }}
            />
          </div>
          <div className="flex justify-between mt-4">
            {phases.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="text-sm font-mono text-gray-500">{phase.days}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border-2 p-8 cursor-pointer transition-all duration-300 ${
                activePhase === index
                  ? 'border-[#00D9E8] shadow-lg scale-105'
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
              onClick={() => setActivePhase(activePhase === index ? null : index)}
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-3xl"
                  style={{ backgroundColor: `${phase.color}20` }}
                >
                  {phase.icon}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-mono text-gray-500 mb-1">{phase.phase}</div>
                  <h3 className="text-xl font-bold text-[#1A2332] mb-1">{phase.title}</h3>
                  <div className="text-sm font-semibold" style={{ color: phase.color }}>
                    {phase.days}
                  </div>
                </div>
              </div>

              {/* Expandable Details */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activePhase === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="border-t border-gray-200 pt-6 mt-6">
                  <h4 className="font-semibold text-[#1A2332] mb-3">Key Activities:</h4>
                  <ul className="space-y-2 mb-6">
                    {phase.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600">
                        <svg
                          className="w-5 h-5 flex-shrink-0 mt-0.5"
                          style={{ color: phase.color }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="font-semibold text-[#1A2332] mb-3">Deliverables:</h4>
                  <ul className="space-y-2">
                    {phase.deliverables.map((deliverable, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-600 font-medium"
                      >
                        <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#00C896]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-500 text-center">
                {activePhase === index ? 'Click to collapse' : 'Click to expand details'}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Summary */}
        <div className="mt-12 bg-gradient-to-r from-[#00D9E8]/10 to-[#00C896]/10 border border-[#00D9E8]/20 rounded-xl p-8">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#00D9E8] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1A2332] mb-2">
                Predictable Timeline Commitment
              </h3>
              <p className="text-gray-700">
                We work with you to establish a realistic deployment timeline based on your specific requirements.
                Over 95% of our installations are completed on or ahead of schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
