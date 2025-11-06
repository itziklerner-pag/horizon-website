'use client';

import { useState } from 'react';

export default function RiskMitigation() {
  const [expandedRisk, setExpandedRisk] = useState<number | null>(null);

  const risks = [
    {
      risk: 'Manufacturing Delays',
      icon: '🏭',
      color: '#00D9E8',
      mitigation: 'Pre-Manufactured Inventory',
      details:
        'We maintain inventory of critical long-lead components. Fuel cell stacks are pre-manufactured in our China facility and stocked in North America. Power electronics are sourced from multiple qualified suppliers.',
      actions: [
        'Rolling 3-month production forecast',
        'Safety stock of 50+ fuel cell stacks',
        'Dual-sourced power electronics',
        'Pre-tested backup modules ready to ship',
      ],
    },
    {
      risk: 'Permitting Delays',
      icon: '📋',
      color: '#00C896',
      mitigation: 'Pre-Certified Systems',
      details:
        'Our systems carry CARB and EPA certifications that are valid nationwide. We work with local permitting authorities in advance to understand requirements and have template applications ready.',
      actions: [
        'CARB Executive Order certification',
        'EPA Tier 4 compliance',
        'Template permit applications by jurisdiction',
        'Dedicated permitting coordinator',
      ],
    },
    {
      risk: 'Site Readiness Issues',
      icon: '🏗️',
      color: '#4DE4EF',
      mitigation: 'Modular Installation Approach',
      details:
        'Our systems require minimal site preparation. Foundation requirements are standardized and can be completed while modules are in manufacturing. Electrical integration follows documented procedures.',
      actions: [
        'Virtual site assessment during Phase 1',
        'Standardized foundation specifications',
        'Pre-fabricated electrical connections',
        'Parallel site prep during manufacturing',
      ],
    },
    {
      risk: 'Hydrogen Supply Coordination',
      icon: '⚡',
      color: '#00D9E8',
      mitigation: 'Supply Chain Partnerships',
      details:
        'We coordinate hydrogen delivery with major industrial gas suppliers (Air Liquide, Linde, Air Products). Supply agreements are negotiated in parallel with system design, not sequentially.',
      actions: [
        'Pre-negotiated supply agreements',
        'Backup supplier identification',
        'On-site storage sized for 7-day autonomy',
        'Delivery logistics planned in Phase 1',
      ],
    },
    {
      risk: 'Weather & Seasonal Delays',
      icon: '🌤️',
      color: '#00C896',
      mitigation: 'All-Weather Installation',
      details:
        'Modular containerized systems can be installed in most weather conditions. Critical outdoor work is scheduled based on weather forecasts with built-in buffer time.',
      actions: [
        'Weather-contingent schedules',
        'Indoor pre-assembly when possible',
        'Temporary weather protection',
        '10-day weather buffer in timeline',
      ],
    },
    {
      risk: 'Commissioning Complexity',
      icon: '⚙️',
      color: '#4DE4EF',
      mitigation: 'Factory Acceptance Testing',
      details:
        'Every system undergoes complete FAT at the factory. This catches 95% of potential issues before shipping. On-site commissioning follows a documented checklist validated across 100+ installations.',
      actions: [
        'Full FAT before shipment',
        'Standardized commissioning checklist',
        'Remote diagnostics capability',
        'Factory-trained commissioning engineers',
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-6">
            How We Guarantee the Timeline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've identified every potential delay and built mitigation strategies into our process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {risks.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-xl border-2 transition-all cursor-pointer ${
                expandedRisk === idx
                  ? 'border-[#00D9E8] shadow-lg'
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
              }`}
              onClick={() => setExpandedRisk(expandedRisk === idx ? null : idx)}
            >
              <div className="p-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1A2332] mb-2">{item.risk}</h3>
                <div className="flex items-center gap-2 text-sm font-semibold mb-3">
                  <svg
                    className="w-4 h-4"
                    style={{ color: item.color }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span style={{ color: item.color }}>{item.mitigation}</span>
                </div>

                {/* Expandable Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedRisk === idx ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 text-sm mb-4">{item.details}</p>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Mitigation Actions
                    </div>
                    <ul className="space-y-2">
                      {item.actions.map((action, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg
                            className="w-4 h-4 flex-shrink-0 mt-0.5"
                            style={{ color: item.color }}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-3 text-xs text-gray-500 text-center">
                  {expandedRisk === idx ? 'Click to collapse' : 'Click to expand'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Section */}
        <div className="bg-gradient-to-br from-[#1A2332] to-[#2A3F56] text-white rounded-xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-[#00D9E8]/20 rounded-full mb-4">
                <svg className="w-12 h-12 text-[#00D9E8]" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Timeline Guarantee</h3>
              <p className="text-xl text-gray-300">
                We put our commitment in writing with financial backing
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur">
                <div className="text-4xl font-bold text-[#00D9E8] font-mono mb-2">95%</div>
                <div className="text-sm text-gray-300">On-time delivery rate</div>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur">
                <div className="text-4xl font-bold text-[#00C896] font-mono mb-2">$10K</div>
                <div className="text-sm text-gray-300">Service credit per week of delay</div>
              </div>
              <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur">
                <div className="text-4xl font-bold text-[#4DE4EF] font-mono mb-2">0</div>
                <div className="text-sm text-gray-300">Projects canceled due to delays</div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-6">
              <p className="text-gray-300 text-center">
                Every contract includes a guaranteed deployment timeline. If we miss it due to factors
                within our control, you receive a service credit of $10,000 per week of delay, applicable
                to installation costs or future service agreements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
