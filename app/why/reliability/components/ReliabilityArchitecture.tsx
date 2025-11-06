'use client';

import { useState } from 'react';

export default function ReliabilityArchitecture() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: 'N+1 Redundancy',
      icon: '🔄',
      color: '#00C896',
      description:
        'Every critical component has backup redundancy. If any single module fails, the system continues operating at full capacity without interruption.',
      details: [
        'Multiple fuel cell stacks per system',
        'Redundant power electronics',
        'Dual hydrogen supply lines',
        'Backup control systems',
        'Automatic failover in <100ms',
      ],
      benefit: '100% uptime during component maintenance',
    },
    {
      title: 'Automatic Failover',
      icon: '⚡',
      color: '#00D9E8',
      description:
        'Advanced control algorithms detect anomalies and automatically switch to backup modules before failures occur. No manual intervention required.',
      details: [
        'Real-time health monitoring',
        'Predictive fault detection',
        'Seamless module switching',
        'Load balancing across stacks',
        'Automatic notification to operations',
      ],
      benefit: 'Zero human response time required',
    },
    {
      title: 'Continuous Monitoring',
      icon: '📊',
      color: '#4DE4EF',
      description:
        'Every system parameter is monitored 24/7 with AI-driven analytics that identify potential issues before they impact performance.',
      details: [
        '500+ sensor data points',
        'Cloud-based analytics platform',
        'Anomaly detection algorithms',
        'Historical trend analysis',
        'Remote diagnostics capability',
      ],
      benefit: '95% of issues detected before failure',
    },
    {
      title: 'Modular Isolation',
      icon: '🔧',
      color: '#00C896',
      description:
        'Individual modules can be isolated for maintenance without affecting overall system output. Service during operation is standard.',
      details: [
        'Hot-swappable modules',
        'Independent fuel cell stacks',
        'Isolated electrical circuits',
        'Parallel hydrogen feeds',
        'No system shutdown required',
      ],
      benefit: 'Maintenance without downtime',
    },
  ];

  const feature = features[activeFeature];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-6">
            Reliability Architecture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four layers of protection ensure continuous operation even during component failures.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Feature Tabs */}
          <div>
            <div className="space-y-4">
              {features.map((f, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFeature(idx)}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                    activeFeature === idx
                      ? 'border-[#00C896] bg-[#00C896]/5 shadow-lg'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-2xl"
                      style={{ backgroundColor: `${f.color}20` }}
                    >
                      {f.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-[#1A2332] mb-1">{f.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{f.description}</p>
                    </div>
                    <svg
                      className={`w-6 h-6 text-[#00C896] transition-transform ${
                        activeFeature === idx ? 'rotate-90' : ''
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Feature Details */}
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8">
            <div
              className="inline-block p-4 rounded-xl mb-6"
              style={{ backgroundColor: `${feature.color}20` }}
            >
              <div className="text-4xl">{feature.icon}</div>
            </div>

            <h3 className="text-2xl font-bold text-[#1A2332] mb-4">{feature.title}</h3>
            <p className="text-lg text-gray-700 mb-6">{feature.description}</p>

            <div className="mb-6">
              <h4 className="font-semibold text-[#1A2332] mb-3">Key Capabilities:</h4>
              <ul className="space-y-3">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: feature.color }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="p-4 rounded-lg"
              style={{ backgroundColor: `${feature.color}10`, borderLeft: `4px solid ${feature.color}` }}
            >
              <div className="text-sm font-semibold text-gray-600 mb-1">Primary Benefit:</div>
              <div className="text-lg font-bold text-[#1A2332]">{feature.benefit}</div>
            </div>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">
            Redundancy Layer Diagram
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white border-2 border-[#00C896] rounded-lg p-6 mb-3 h-32 flex items-center justify-center">
                <div>
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="text-sm font-semibold text-[#1A2332]">Stack A</div>
                </div>
              </div>
              <div className="text-xs text-gray-600">Primary Stack</div>
            </div>

            <div className="text-center">
              <div className="bg-white border-2 border-[#00D9E8] border-dashed rounded-lg p-6 mb-3 h-32 flex items-center justify-center">
                <div>
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="text-sm font-semibold text-[#1A2332]">Stack B</div>
                </div>
              </div>
              <div className="text-xs text-gray-600">Backup Stack</div>
            </div>

            <div className="text-center">
              <div className="bg-white border-2 border-[#4DE4EF] rounded-lg p-6 mb-3 h-32 flex items-center justify-center">
                <div>
                  <div className="text-3xl mb-2">🔄</div>
                  <div className="text-sm font-semibold text-[#1A2332]">Auto Switch</div>
                </div>
              </div>
              <div className="text-xs text-gray-600">Failover Control</div>
            </div>

            <div className="text-center">
              <div className="bg-white border-2 border-[#00C896] rounded-lg p-6 mb-3 h-32 flex items-center justify-center">
                <div>
                  <div className="text-3xl mb-2">📊</div>
                  <div className="text-sm font-semibold text-[#1A2332]">Monitor</div>
                </div>
              </div>
              <div className="text-xs text-gray-600">24/7 Oversight</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
