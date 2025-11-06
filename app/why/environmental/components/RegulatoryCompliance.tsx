'use client';

import { useState } from 'react';

export default function RegulatoryCompliance() {
  const [activeRegulation, setActiveRegulation] = useState(0);

  const regulations = [
    {
      name: 'CARB (California)',
      icon: '🏛️',
      color: '#00C896',
      status: 'Fully Compliant',
      description:
        'California Air Resources Board sets the strictest emissions standards in North America. Horizon fuel cells carry CARB Executive Order certification.',
      requirements: [
        'Zero NOx emissions during operation',
        'Zero particulate matter (PM) emissions',
        'Low greenhouse gas intensity',
        'Alternative to diesel generators',
      ],
      horizonSolution: 'CARB Executive Order #G-93-001 certified. Meets all current and proposed CARB standards for stationary fuel cells.',
    },
    {
      name: 'EPA Tier 4 (Federal)',
      icon: '🇺🇸',
      color: '#00D9E8',
      status: 'Exceeds Requirements',
      description:
        'EPA Tier 4 Final standards regulate emissions from non-road diesel engines. Fuel cells produce zero criteria pollutants, exceeding Tier 4 by orders of magnitude.',
      requirements: [
        'NOx emissions < 0.19 g/kWh',
        'PM emissions < 0.02 g/kWh',
        'CO and HC limits',
        'Durability requirements',
      ],
      horizonSolution: 'Fuel cells produce effectively zero NOx and PM. No aftertreatment systems required.',
    },
    {
      name: 'Local Air Quality',
      icon: '🏙️',
      color: '#4DE4EF',
      status: 'Permit-Ready',
      description:
        'Many jurisdictions have local air quality regulations stricter than federal standards. Pre-certification streamlines permitting.',
      requirements: [
        'Air quality impact assessments',
        'Emissions reporting',
        'Public health considerations',
        'Environmental justice compliance',
      ],
      horizonSolution: 'Pre-certified systems with template permit applications. Emissions data packages ready for submission.',
    },
  ];

  const regulation = regulations[activeRegulation];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-6">
            Regulatory Compliance: Certified and Future-Proof
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our fuel cells meet today's strictest standards and are ready for tomorrow's regulations.
          </p>
        </div>

        {/* Regulation Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {regulations.map((reg, idx) => (
            <button
              key={idx}
              onClick={() => setActiveRegulation(idx)}
              className={`px-6 py-4 rounded-lg font-semibold transition-all ${
                activeRegulation === idx
                  ? 'bg-[#00C896] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{reg.icon}</span>
                <span>{reg.name}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Regulation Details */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl"
                style={{ backgroundColor: `${regulation.color}20` }}
              >
                {regulation.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1A2332]">{regulation.name}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: regulation.color }}
                  />
                  <span className="text-sm font-semibold" style={{ color: regulation.color }}>
                    {regulation.status}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-6">{regulation.description}</p>

            <div className="mb-6">
              <h4 className="font-semibold text-[#1A2332] mb-3">Key Requirements:</h4>
              <ul className="space-y-2">
                {regulation.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600">
                    <svg
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: regulation.color }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="p-4 rounded-lg"
              style={{
                backgroundColor: `${regulation.color}10`,
                borderLeft: `4px solid ${regulation.color}`,
              }}
            >
              <div className="text-sm font-semibold text-gray-600 mb-1">Horizon Solution:</div>
              <div className="text-gray-700">{regulation.horizonSolution}</div>
            </div>
          </div>

          {/* Compliance Comparison */}
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-[#1A2332] mb-6">
              Emissions Comparison: Fuel Cells vs. Diesel
            </h3>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-700">NOx Emissions (g/kWh)</span>
                  <span className="text-xs text-gray-500">Lower is better</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">Diesel Generator</span>
                      <span className="text-red-600 font-mono">0.67</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">Horizon Fuel Cell</span>
                      <span className="text-[#00C896] font-mono">0.00</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#00C896]" style={{ width: '0%' }} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-700">Particulate Matter (g/kWh)</span>
                  <span className="text-xs text-gray-500">Lower is better</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">Diesel Generator</span>
                      <span className="text-red-600 font-mono">0.03</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">Horizon Fuel Cell</span>
                      <span className="text-[#00C896] font-mono">0.00</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#00C896]" style={{ width: '0%' }} />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-700">CO2 Emissions (kg/kWh)</span>
                  <span className="text-xs text-gray-500">Lower is better</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">Diesel Generator</span>
                      <span className="text-red-600 font-mono">0.720</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">Fuel Cell (NG)</span>
                      <span className="text-yellow-600 font-mono">0.360</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-500" style={{ width: '50%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">Fuel Cell (H2)</span>
                      <span className="text-[#00C896] font-mono">0.00</span>
                    </div>
                    <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#00C896]" style={{ width: '0%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-[#00C896]/10 to-[#00C896]/5 border border-[#00C896]/20 rounded-lg">
              <div className="text-sm font-semibold text-[#1A2332] mb-2">
                The Bottom Line
              </div>
              <p className="text-sm text-gray-700">
                Fuel cells eliminate criteria pollutants (NOx, PM) entirely and reduce CO2 by 50% on natural gas,
                with a clear path to zero emissions on hydrogen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
