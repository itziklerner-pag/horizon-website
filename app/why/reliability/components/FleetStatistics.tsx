'use client';

import StatCounter from '@/components/why/StatCounter';

export default function FleetStatistics() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-6">
            Fleet Performance: Real Numbers, Real Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our reliability claims are backed by millions of operating hours across 100+ installations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <StatCounter end={50} suffix="M+" label="Operating Hours" color="#00C896" duration={2500} />
          <StatCounter end={99.999} decimals={3} suffix="%" label="Average Uptime" color="#00D9E8" duration={2500} />
          <StatCounter end={26} label="Minutes Downtime/Year" color="#4DE4EF" duration={2000} />
          <StatCounter end={0} label="Unplanned Outages (2024)" color="#00C896" duration={1500} />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-[#00C896]/10 to-[#00C896]/5 border border-[#00C896]/20 rounded-xl p-8">
            <div className="text-4xl mb-4">🏆</div>
            <div className="text-4xl font-bold text-[#00C896] font-mono mb-2">100+</div>
            <h3 className="text-lg font-bold text-[#1A2332] mb-3">Active Installations</h3>
            <p className="text-gray-600">
              Systems operating across North America in hyperscale, colocation, edge, and utility-scale facilities.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#00D9E8]/10 to-[#00D9E8]/5 border border-[#00D9E8]/20 rounded-xl p-8">
            <div className="text-4xl mb-4">⚡</div>
            <div className="text-4xl font-bold text-[#00D9E8] font-mono mb-2">500+</div>
            <h3 className="text-lg font-bold text-[#1A2332] mb-3">Grid Interruptions Handled</h3>
            <p className="text-gray-600">
              Automatic failovers during grid outages with 100% success rate. Average takeover time: 87ms.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#4DE4EF]/10 to-[#4DE4EF]/5 border border-[#4DE4EF]/20 rounded-xl p-8">
            <div className="text-4xl mb-4">🔧</div>
            <div className="text-4xl font-bold text-[#4DE4EF] font-mono mb-2">15K+</div>
            <h3 className="text-lg font-bold text-[#1A2332] mb-3">Maintenance Events</h3>
            <p className="text-gray-600">
              98% completed during planned windows. Average service time: 1.8 hours with zero downtime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
