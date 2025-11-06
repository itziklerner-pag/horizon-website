import type { Metadata } from 'next';
import Link from 'next/link';
import WhyHero from '@/components/why/WhyHero';
import DeploymentTimeline from './components/DeploymentTimeline';
import TimelineComparison from './components/TimelineComparison';
import CaseStudies from './components/CaseStudies';
import RiskMitigation from './components/RiskMitigation';
import InteractiveTimelineTool from './components/InteractiveTimelineTool';

export const metadata: Metadata = {
  title: '90 Days From PO to Power-On | Horizon Fuel Cell',
  description: 'Deploy data center backup power in 90 days. Learn how our proven 4-phase process accelerates your time to market.',
};

export default function TimeToMarketPage() {
  const heroStats = [
    { value: '90', label: 'Days to Deployment', suffix: '' },
    { value: '60', label: 'Faster Than Diesel', suffix: '%' },
    { value: '100', label: 'Projects Completed', suffix: '+' },
    { value: '4', label: 'Phase Process', suffix: '' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <WhyHero
        title="90 Days From PO to Power-On: How We Do It"
        subtitle="Time to Market Advantage"
        description="In an industry where speed equals competitive advantage, waiting 6-12 months for backup power is unacceptable. We deliver fully operational fuel cell systems in 90 days—guaranteed."
        stats={heroStats}
        backgroundVariant="cyan"
      />

      <TimeProblemSection />

      <DeploymentTimeline />

      <TimelineComparison />

      <InteractiveTimelineTool />

      <CaseStudies />

      <RiskMitigation />

      <FinalCTA />
    </main>
  );
}

function TimeProblemSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-6">
            The Time Problem in Data Centers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every day without reliable backup power is a day of risk. Traditional solutions take too long.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl border border-red-200 shadow-sm">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⏱️</span>
            </div>
            <h3 className="text-xl font-bold text-[#1A2332] mb-3">
              Market Pressure Intensifying
            </h3>
            <p className="text-gray-600">
              AI workloads, cloud migration, and edge computing are driving unprecedented data center growth.
              Customers need capacity NOW, not next year.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-red-200 shadow-sm">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📉</span>
            </div>
            <h3 className="text-xl font-bold text-[#1A2332] mb-3">
              Revenue Loss During Delays
            </h3>
            <p className="text-gray-600">
              Every month of delay costs millions in lost revenue. A 10MW facility at 80% utilization
              generates $500K+ monthly. Can you afford to wait?
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-red-200 shadow-sm">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🚫</span>
            </div>
            <h3 className="text-xl font-bold text-[#1A2332] mb-3">
              Traditional Barriers
            </h3>
            <p className="text-gray-600">
              Diesel generators require extensive permitting, fuel infrastructure, and environmental reviews.
              Natural gas requires utility hookups with 6-18 month wait times.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#00D9E8]/10 to-[#00D9E8]/5 border border-[#00D9E8]/20 rounded-xl p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#00D9E8] rounded-lg flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1A2332] mb-3">
                The Horizon Solution: Predictable 90-Day Deployment
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Our fuel cell systems are modular, pre-certified, and don't require utility connections.
                We've perfected a 4-phase process that eliminates traditional delays.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00D9E8]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">No utility hookups required</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00D9E8]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Pre-certified for air quality compliance</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00D9E8]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Modular scaling in 250kW increments</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00D9E8]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Guaranteed delivery timeline</span>
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
          Stop Waiting. Start Powering.
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Get a custom deployment timeline for your facility in 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#00D9E8] text-[#1A2332] font-semibold rounded-lg hover:bg-[#00c5d4] transition-colors"
          >
            Request Deployment Plan
          </Link>
          <Link
            href="/calculators/roi"
            className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
          >
            Calculate Your Savings
          </Link>
        </div>
      </div>
    </section>
  );
}
