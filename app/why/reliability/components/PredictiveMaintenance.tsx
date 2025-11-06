'use client';

export default function PredictiveMaintenance() {
  const maintenanceFeatures = [
    {
      title: 'AI-Powered Anomaly Detection',
      icon: '🤖',
      description:
        'Machine learning algorithms analyze 500+ data points per second to identify patterns that precede failures.',
      metrics: ['95% failure prediction accuracy', '7-14 days advance warning', '200+ failure modes detected'],
    },
    {
      title: 'Automated Parts Ordering',
      icon: '📦',
      description:
        'When predictive analysis identifies a component nearing end-of-life, replacement parts are automatically ordered and scheduled.',
      metrics: ['Zero stockouts', 'Just-in-time delivery', '40% reduction in spare parts inventory'],
    },
    {
      title: 'Scheduled Maintenance Windows',
      icon: '📅',
      description:
        'Maintenance is performed during planned windows when grid power is stable, eliminating emergency service calls.',
      metrics: ['98% planned maintenance', '2-hour service windows', 'No unexpected downtime'],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-6">
            Predictive Maintenance: Fix It Before It Breaks
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional reactive maintenance waits for failures. We predict and prevent them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {maintenanceFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#00C896]/20 to-[#00C896]/10 rounded-xl flex items-center justify-center text-3xl mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1A2332] mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <div className="space-y-2">
                {feature.metrics.map((metric, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-[#00C896]" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Comparison: Reactive vs. Predictive */}
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">
            Reactive vs. Predictive Maintenance
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Reactive */}
            <div className="border-2 border-red-200 rounded-lg p-6 bg-red-50/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-xl">❌</span>
                </div>
                <h4 className="text-xl font-bold text-[#1A2332]">Reactive Approach</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Wait for failure before acting</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Emergency service calls at premium cost</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Unpredictable downtime windows</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Spare parts expedited shipping</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Cascading failures from neglected issues</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-red-200">
                <div className="text-2xl font-bold text-red-600 font-mono">98.5%</div>
                <div className="text-sm text-gray-600">Typical diesel generator uptime</div>
              </div>
            </div>

            {/* Predictive */}
            <div className="border-2 border-[#00C896] rounded-lg p-6 bg-[#00C896]/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#00C896]/20 rounded-lg flex items-center justify-center">
                  <span className="text-xl">✅</span>
                </div>
                <h4 className="text-xl font-bold text-[#1A2332]">Predictive Approach</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Address issues before they cause failures</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Scheduled maintenance at standard rates</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Planned windows during low-risk periods</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Parts ordered in advance at best pricing</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <span className="text-[#00C896] mt-1">•</span>
                  <span>Comprehensive system health monitoring</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-[#00C896]">
                <div className="text-2xl font-bold text-[#00C896] font-mono">99.999%</div>
                <div className="text-sm text-gray-600">Horizon fuel cell uptime</div>
              </div>
            </div>
          </div>
        </div>

        {/* Monitoring Dashboard Preview */}
        <div className="mt-12 bg-gradient-to-br from-[#1A2332] to-[#2A3F56] rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Real-Time Monitoring Dashboard</h3>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-[#00C896] font-mono mb-2">100%</div>
              <div className="text-sm text-gray-300">System Health</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-[#00D9E8] font-mono mb-2">0</div>
              <div className="text-sm text-gray-300">Active Alerts</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-[#4DE4EF] font-mono mb-2">14</div>
              <div className="text-sm text-gray-300">Days to Next Service</div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-[#00C896] font-mono mb-2">24/7</div>
              <div className="text-sm text-gray-300">Remote Support</div>
            </div>
          </div>
          <p className="text-center text-gray-300">
            Every customer receives access to our cloud-based monitoring platform with mobile alerts and historical analytics.
          </p>
        </div>
      </div>
    </section>
  );
}
