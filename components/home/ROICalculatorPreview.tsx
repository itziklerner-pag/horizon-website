'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export function ROICalculatorPreview() {
  const [powerNeeded, setPowerNeeded] = useState(10);
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

  // Simple ROI calculations (these would be more complex in production)
  const calculations = {
    deployment: powerNeeded * 9, // days
    capitalSavings: powerNeeded * 150000, // USD
    annualSavings: powerNeeded * 80000, // USD per year
    co2Avoided: powerNeeded * 1200, // tons per year
    paybackPeriod: 3.2, // years
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1A2332] mb-4">
            Calculate Your Savings
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See your ROI from switching to Horizon fuel cells
          </p>
        </div>

        {/* Calculator Card */}
        <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Input Section */}
            <div className="lg:col-span-2 bg-gradient-to-br from-[#1A2332] to-[#2A3F56] p-12">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-6">Your Requirements</h3>

                <div className="mb-8">
                  <label className="block text-sm font-semibold mb-4 text-gray-100">
                    Power Needed (MW)
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={powerNeeded}
                    onChange={(e) => setPowerNeeded(Number(e.target.value))}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#00D9E8]"
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-100">
                    <span>1 MW</span>
                    <span className="text-3xl font-bold text-[#00D9E8] font-mono">
                      {powerNeeded} MW
                    </span>
                    <span>50 MW</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between py-3 border-b border-white/10">
                    <span className="text-gray-100">Current Solution:</span>
                    <span className="font-mono">Grid + Diesel</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-white/10">
                    <span className="text-gray-100">Location Type:</span>
                    <span className="font-mono">Enterprise DC</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-gray-100">Operating Hours:</span>
                    <span className="font-mono">24/7/365</span>
                  </div>
                </div>

                <Link
                  href="/calculators/roi"
                  className="block w-full mt-8 px-6 py-3 bg-[#00D9E8] text-[#1A2332] text-center font-semibold rounded-lg hover:bg-[#00B8C5] transition-all duration-300"
                >
                  Get Custom ROI Analysis
                </Link>
              </div>
            </div>

            {/* Results Section */}
            <div className="lg:col-span-3 p-12">
              <h3 className="text-2xl font-bold text-[#1A2332] mb-8">Your Projected Savings</h3>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-6 border-2 border-[#00D9E8]">
                  <div className="text-sm text-gray-600 mb-2">Deployment Time</div>
                  <div className="text-3xl font-bold text-[#1A2332] font-mono">
                    {calculations.deployment} days
                  </div>
                  <div className="text-xs text-gray-500 mt-2">vs 18-48 month grid delays</div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-400">
                  <div className="text-sm text-gray-600 mb-2">Capital Cost Savings</div>
                  <div className="text-3xl font-bold text-[#1A2332] font-mono">
                    {formatCurrency(calculations.capitalSavings)}
                  </div>
                  <div className="text-xs text-gray-500 mt-2">vs grid connection</div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-400">
                  <div className="text-sm text-gray-600 mb-2">Annual Operating Savings</div>
                  <div className="text-3xl font-bold text-[#1A2332] font-mono">
                    {formatCurrency(calculations.annualSavings)}
                  </div>
                  <div className="text-xs text-gray-500 mt-2">per year</div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-400">
                  <div className="text-sm text-gray-600 mb-2">CO₂ Emissions Avoided</div>
                  <div className="text-3xl font-bold text-[#1A2332] font-mono">
                    {formatNumber(calculations.co2Avoided)}
                  </div>
                  <div className="text-xs text-gray-500 mt-2">tons per year</div>
                </div>
              </div>

              {/* Payback Period */}
              <div className="bg-gradient-to-r from-[#00D9E8] to-[#4DE4EF] rounded-xl p-8 text-center">
                <div className="text-sm font-semibold text-[#1A2332] mb-2">
                  ESTIMATED PAYBACK PERIOD
                </div>
                <div className="text-5xl font-bold text-[#1A2332] font-mono mb-2">
                  {calculations.paybackPeriod} years
                </div>
                <div className="text-sm text-[#1A2332]/80">
                  Including tax incentives and carbon credits
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-6 text-center">
                * Estimates based on industry averages. Actual savings may vary based on location,
                usage patterns, and local utility rates.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className={`mt-12 text-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-gray-600 mb-4">
            Want a detailed financial analysis for your specific facility?
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 border-2 border-[#1A2332] text-[#1A2332] font-semibold rounded-lg hover:bg-[#1A2332] hover:text-white transition-all duration-300"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
