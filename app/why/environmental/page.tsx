import type { Metadata } from 'next';
import WhyHero from '@/components/why/WhyHero';
import RegulatoryCompliance from './components/RegulatoryCompliance';
import EmissionsReduction from './components/EmissionsReduction';
import HydrogenRoadmap from './components/HydrogenRoadmap';
import CertificationBadges from './components/CertificationBadges';
import CarbonCalculator from './components/CarbonCalculator';

export const metadata: Metadata = {
  title: 'Zero-Emission Compliance Today, Hydrogen-Ready Tomorrow | Horizon',
  description: '50-70% emissions reduction now, with a clear path to 100% zero-emission hydrogen power.',
};

export default function EnvironmentalPage() {
  const heroStats = [
    { value: '50-70', label: 'Emissions Reduction', suffix: '%' },
    { value: '0', label: 'NOx & PM Emissions', suffix: '' },
    { value: '2026', label: 'Full H2 Transition', suffix: '' },
    { value: '100', label: 'CARB Certified Sites', suffix: '+' },
  ];

  return (
    <main className="min-h-screen bg-white">
      <WhyHero
        title="Zero-Emission Compliance Today, Hydrogen-Ready Tomorrow"
        subtitle="Environmental Benefits"
        description="Meet today's strictest air quality standards while preparing for tomorrow's hydrogen economy. Our fuel cells deliver immediate emissions reductions with a proven transition path to 100% zero-emission operation."
        stats={heroStats}
        backgroundVariant="green"
      />

      <EnvironmentalImperativeSection />

      <RegulatoryCompliance />

      <EmissionsReduction />

      <HydrogenRoadmap />

      <CertificationBadges />

      <CarbonCalculator />

      <FinalCTA />
    </main>
  );
}

function EnvironmentalImperativeSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-6">
            Why Environmental Performance Matters Now
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Data centers face unprecedented pressure to reduce emissions. Regulations are tightening, and customers demand action.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-4xl mb-4">⚖️</div>
            <h3 className="text-xl font-bold text-[#1A2332] mb-3">
              Regulatory Pressure Intensifying
            </h3>
            <p className="text-gray-600 mb-4">
              California's CARB regulations ban new diesel generators in many jurisdictions. Other states are following. Non-compliance means project delays or cancellation.
            </p>
            <div className="text-sm font-semibold text-[#00C896]">
              Fuel cells meet all current and proposed regulations
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold text-[#1A2332] mb-3">
              Corporate ESG Commitments
            </h3>
            <p className="text-gray-600 mb-4">
              Enterprise customers require Scope 2 and Scope 3 emissions reporting. Your backup power contributes to their carbon footprint and purchasing decisions.
            </p>
            <div className="text-sm font-semibold text-[#00C896]">
              Quantifiable emissions reductions for ESG reporting
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-[#1A2332] mb-3">
              Carbon Pricing & Incentives
            </h3>
            <p className="text-gray-600 mb-4">
              Clean energy incentives (IRA, state grants) offset deployment costs. Carbon pricing makes diesel increasingly expensive to operate.
            </p>
            <div className="text-sm font-semibold text-[#00C896]">
              Tax credits and grants available for fuel cell projects
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#00C896]/10 to-[#00C896]/5 border border-[#00C896]/20 rounded-xl p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#00C896] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1A2332] mb-3">
                The Only Path to Zero-Emission Backup Power
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Diesel will never be zero-emission. Batteries recharge from the grid (often fossil-powered). Only hydrogen fuel cells offer a credible path to 100% clean backup power that operates independently of the grid.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00C896]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">CARB certified zero-emission capable</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00C896]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">Hydrogen infrastructure scaling rapidly</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00C896]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">Transition path proven and deployed</span>
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
          Future-Proof Your Environmental Compliance
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Get a customized emissions reduction analysis and hydrogen transition plan.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="px-8 py-4 bg-[#00C896] text-[#1A2332] font-semibold rounded-lg hover:bg-[#00b585] transition-colors"
          >
            Request Emissions Report
          </a>
          <a
            href="#carbon-calculator"
            className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
          >
            Calculate Your Savings
          </a>
        </div>
      </div>
    </section>
  );
}
