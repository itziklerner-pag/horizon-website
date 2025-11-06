import type { Metadata } from 'next';
import WhyHero from '@/components/why/WhyHero';
import ReliabilityArchitecture from './components/ReliabilityArchitecture';
import PredictiveMaintenance from './components/PredictiveMaintenance';
import FleetStatistics from './components/FleetStatistics';
import UptimeGuarantee from './components/UptimeGuarantee';
import CustomerTestimonials from './components/CustomerTestimonials';

export const metadata: Metadata = {
  title: '99.999% Uptime Proven Across 50M Operating Hours | Horizon',
  description: 'Industry-leading reliability with N+1 redundancy, predictive maintenance, and guaranteed uptime SLAs.',
};

export default function ReliabilityPage() {
  const heroStats = [
    { value: '99.999', label: 'Uptime Percentage', suffix: '%' },
    { value: '50M', label: 'Operating Hours', suffix: '+' },
    { value: '26', label: 'Minutes Downtime/Year', suffix: '' },
    { value: '100', label: 'Installations Active', suffix: '+' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <WhyHero
        title="99.999% Uptime: Proven Across 50 Million Operating Hours"
        subtitle="Reliability & Uptime"
        description="When your business depends on continuous power, you need more than promises—you need proven performance. Our fuel cell systems deliver five-nines reliability backed by real-world data."
        stats={heroStats}
        backgroundVariant="green"
      />

      <ReliabilityMatterSection />

      <ReliabilityArchitecture />

      <PredictiveMaintenance />

      <FleetStatistics />

      <UptimeGuarantee />

      <CustomerTestimonials />

      <FinalCTA />
    </main>
  );
}

function ReliabilityMatterSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-6">
            Why Reliability Matters More Than Ever
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In a world of always-on services, even seconds of downtime translate to lost revenue and damaged reputation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-2xl font-bold text-[#1A2332] mb-3">$9,000/Minute</h3>
            <p className="text-gray-600">
              Average cost of data center downtime according to Uptime Institute. For large facilities,
              this can exceed $100,000 per minute during peak hours.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-4xl mb-4">📉</div>
            <h3 className="text-2xl font-bold text-[#1A2332] mb-3">Customer Churn</h3>
            <p className="text-gray-600">
              73% of customers will switch providers after multiple outages. Your backup power system
              is your last line of defense against losing business.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-[#1A2332] mb-3">SLA Commitments</h3>
            <p className="text-gray-600">
              Enterprise SLAs demand 99.99%+ uptime. Your backup power must be as reliable as your
              UPS to meet contractual obligations.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#00C896]/10 to-[#00C896]/5 border border-[#00C896]/20 rounded-xl p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#00C896] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1A2332] mb-3">
                Fuel Cells: Inherently More Reliable Than Rotating Equipment
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Unlike diesel generators with hundreds of moving parts, fuel cells use an electrochemical
                process with minimal mechanical components. This fundamental design difference translates
                to superior reliability.
              </p>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00C896]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">No combustion engine to maintain</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00C896]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Fewer failure points than generators</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00C896]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Silent operation indicates system health</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00C896]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">Continuous real-time monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1A2332] to-[#2A3F56] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready for Five-Nines Reliability?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          See our reliability data and uptime guarantee details.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="px-8 py-4 bg-[#00C896] text-[#1A2332] font-semibold rounded-lg hover:bg-[#00b585] transition-colors"
          >
            Request Reliability Report
          </a>
          <a
            href="/calculators/roi"
            className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
          >
            Calculate Downtime Costs
          </a>
        </div>
      </div>
    </section>
  );
}
