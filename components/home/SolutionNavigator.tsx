'use client';

import { useState, useEffect, useRef } from 'react';

export function SolutionNavigator() {
  const [selectedType, setSelectedType] = useState('enterprise');
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

  const facilityTypes = [
    {
      id: 'enterprise',
      name: 'Enterprise Data Center',
      icon: '🏢',
      power: '5-50 MW',
      features: ['N+1 redundancy', 'Modular expansion', 'Grid-independent'],
      description: 'Purpose-built for hyperscale operations',
    },
    {
      id: 'colocation',
      name: 'Colocation Facility',
      icon: '🏭',
      power: '1-10 MW',
      features: ['Multi-tenant ready', 'Flexible scaling', 'SLA-backed uptime'],
      description: 'Reliable power for shared infrastructure',
    },
    {
      id: 'edge',
      name: 'Edge Computing',
      icon: '📡',
      power: '100kW-2MW',
      features: ['Compact footprint', 'Rapid deployment', 'Remote monitoring'],
      description: 'Distributed power for edge locations',
    },
    {
      id: 'critical',
      name: 'Critical Infrastructure',
      icon: '🏥',
      power: '500kW-20MW',
      features: ['Healthcare grade', 'Mission critical', 'Instant failover'],
      description: 'Ultimate reliability for essential services',
    },
  ];

  const selectedFacility = facilityTypes.find((f) => f.id === selectedType);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1A2332] mb-4">
            Find Your Perfect Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select your facility type to see tailored power solutions
          </p>
        </div>

        {/* Facility Type Selector */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {facilityTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`p-6 rounded-xl transition-all duration-300 text-left ${
                selectedType === type.id
                  ? 'bg-[#00D9E8] text-[#1A2332] shadow-xl scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-lg hover:scale-102'
              }`}
            >
              <div className="text-3xl mb-3">{type.icon}</div>
              <div className="font-bold text-lg mb-1">{type.name}</div>
              <div className="text-sm font-mono opacity-80">{type.power}</div>
            </button>
          ))}
        </div>

        {/* Selected Solution Details */}
        {selectedFacility && (
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: Details */}
              <div className="p-12">
                <div className="flex items-center mb-6">
                  <span className="text-5xl mr-4">{selectedFacility.icon}</span>
                  <div>
                    <h3 className="text-3xl font-bold text-[#1A2332]">
                      {selectedFacility.name}
                    </h3>
                    <p className="text-gray-600 mt-1">{selectedFacility.description}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Power Range
                    </div>
                    <div className="text-2xl font-bold text-[#00D9E8] font-mono">
                      {selectedFacility.power}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Key Features
                    </div>
                    <ul className="space-y-3">
                      {selectedFacility.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-700">
                          <svg
                            className="w-5 h-5 text-[#00D9E8] mr-3 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
                    <button className="w-full sm:w-auto px-8 py-4 bg-[#00D9E8] text-[#1A2332] font-semibold rounded-lg hover:bg-[#00B8C5] transition-all duration-300 hover:scale-105 hover:shadow-xl">
                      Get Custom Quote
                    </button>
                  </div>
                </div>
              </div>

              {/* Right: Visual/Specs */}
              <div className="bg-gradient-to-br from-[#1A2332] to-[#2A3F56] p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-7xl mb-6">{selectedFacility.icon}</div>
                  <div className="space-y-4 font-mono text-sm">
                    <div className="flex justify-between items-center bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <span className="text-gray-300">Deployment Time:</span>
                      <span className="text-[#00D9E8] font-bold">90 days</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <span className="text-gray-300">Uptime SLA:</span>
                      <span className="text-[#00D9E8] font-bold">99.999%</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <span className="text-gray-300">Emissions:</span>
                      <span className="text-[#00D9E8] font-bold">Zero</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
