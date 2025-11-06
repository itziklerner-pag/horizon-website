'use client';

import { useState } from 'react';

export default function CarbonCalculator() {
  const [powerCapacity, setPowerCapacity] = useState(10);
  const [operatingHours, setOperatingHours] = useState(200);
  const [currentSolution, setCurrentSolution] = useState<'diesel' | 'none'>('diesel');

  const calculateSavings = () => {
    // CO2 emissions in kg per kWh
    const dieselEmissions = 0.720;
    const fuelCellNGEmissions = 0.360;
    const fuelCellH2Emissions = 0.0;

    const totalKWh = powerCapacity * 1000 * operatingHours;

    const currentEmissions = currentSolution === 'diesel' ? dieselEmissions * totalKWh : 0;
    const fuelCellNGSavings = (currentEmissions - fuelCellNGEmissions * totalKWh) / 1000; // Convert to tons
    const fuelCellH2Savings = currentEmissions / 1000; // Full savings with H2

    // Calculate equivalents
    const treesPlanted = Math.round(fuelCellNGSavings / 0.022); // Average tree sequesters 22kg CO2/year
    const carsRemoved = Math.round(fuelCellNGSavings / 4.6); // Average car emits 4.6 tons CO2/year

    return {
      annualSavingsNG: fuelCellNGSavings,
      annualSavingsH2: fuelCellH2Savings,
      treesPlanted,
      carsRemoved,
      percentReductionNG: currentSolution === 'diesel' ? 50 : 0,
      percentReductionH2: currentSolution === 'diesel' ? 100 : 0,
    };
  };

  const savings = calculateSavings();

  return (
    <section id="carbon-calculator" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-6">
            Carbon Savings Calculator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your facility's emissions reduction potential with Horizon fuel cells.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8">
            <h3 className="text-xl font-bold text-[#1A2332] mb-6">Your Facility Details</h3>

            {/* Power Capacity */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-[#1A2332] mb-3">
                Backup Power Capacity (MW)
              </label>
              <div className="flex items-center gap-4 mb-3">
                <input
                  type="range"
                  min="1"
                  max="100"
                  step="1"
                  value={powerCapacity}
                  onChange={(e) => setPowerCapacity(Number(e.target.value))}
                  className="flex-1"
                />
                <div className="w-20 text-right">
                  <span className="text-2xl font-bold text-[#00C896] font-mono">
                    {powerCapacity}
                  </span>
                  <span className="text-gray-600 ml-1">MW</span>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>1 MW</span>
                <span>100 MW</span>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-[#1A2332] mb-3">
                Annual Operating Hours (Testing + Outages)
              </label>
              <div className="flex items-center gap-4 mb-3">
                <input
                  type="range"
                  min="50"
                  max="1000"
                  step="10"
                  value={operatingHours}
                  onChange={(e) => setOperatingHours(Number(e.target.value))}
                  className="flex-1"
                />
                <div className="w-24 text-right">
                  <span className="text-2xl font-bold text-[#00C896] font-mono">
                    {operatingHours}
                  </span>
                  <span className="text-gray-600 ml-1">hrs</span>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>50 hrs</span>
                <span>1000 hrs</span>
              </div>
            </div>

            {/* Current Solution */}
            <div>
              <label className="block text-sm font-semibold text-[#1A2332] mb-3">
                Current Backup Power Solution
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setCurrentSolution('diesel')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    currentSolution === 'diesel'
                      ? 'border-[#00C896] bg-[#00C896]/10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-semibold text-[#1A2332]">Diesel Generator</div>
                  <div className="text-sm text-gray-600 mt-1">High emissions</div>
                </button>
                <button
                  onClick={() => setCurrentSolution('none')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    currentSolution === 'none'
                      ? 'border-[#00C896] bg-[#00C896]/10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-semibold text-[#1A2332]">New Installation</div>
                  <div className="text-sm text-gray-600 mt-1">No baseline</div>
                </button>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="bg-gradient-to-br from-[#00C896]/10 to-[#00C896]/5 border border-[#00C896]/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-[#1A2332] mb-6">Your Environmental Impact</h3>

            {/* Natural Gas Results */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center text-lg">
                  ⚡
                </div>
                <h4 className="text-lg font-bold text-[#1A2332]">With Natural Gas</h4>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Annual CO2 Reduction</div>
                  <div className="text-4xl font-bold text-[#00C896] font-mono">
                    {savings.annualSavingsNG.toFixed(0)}
                  </div>
                  <div className="text-sm text-gray-600">tons per year</div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Emissions Reduction</div>
                  <div className="text-3xl font-bold text-[#00C896] font-mono">
                    {savings.percentReductionNG}%
                  </div>
                  <div className="text-sm text-gray-600">vs. diesel baseline</div>
                </div>
              </div>
            </div>

            {/* Hydrogen Results */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#00C896]/20 rounded-lg flex items-center justify-center text-lg">
                  💧
                </div>
                <h4 className="text-lg font-bold text-[#1A2332]">With Green Hydrogen (2027+)</h4>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Annual CO2 Reduction</div>
                  <div className="text-4xl font-bold text-[#00C896] font-mono">
                    {savings.annualSavingsH2.toFixed(0)}
                  </div>
                  <div className="text-sm text-gray-600">tons per year</div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Emissions Reduction</div>
                  <div className="text-3xl font-bold text-[#00C896] font-mono">
                    {savings.percentReductionH2}%
                  </div>
                  <div className="text-sm text-gray-600">Zero emissions achieved</div>
                </div>
              </div>
            </div>

            {/* Equivalents */}
            <div className="bg-gradient-to-r from-[#00C896]/20 to-[#00C896]/10 rounded-lg p-6">
              <h4 className="font-semibold text-[#1A2332] mb-4">Environmental Equivalents</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-xl">🌳</span>
                  <div>
                    <div className="font-bold text-[#1A2332]">{savings.treesPlanted.toLocaleString()}</div>
                    <div className="text-gray-600">trees planted</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-xl">🚗</span>
                  <div>
                    <div className="font-bold text-[#1A2332]">{savings.carsRemoved.toLocaleString()}</div>
                    <div className="text-gray-600">cars removed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <a
                href="/contact"
                className="block w-full px-6 py-4 bg-[#00C896] text-white font-semibold rounded-lg hover:bg-[#00b585] transition-colors text-center"
              >
                Get Detailed Impact Report
              </a>
              <p className="text-center text-sm text-gray-600 mt-3">
                Includes ESG reporting data and compliance documentation
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Calculations based on EPA emissions factors and industry-standard testing protocols. Actual results may vary based on operating conditions.
        </p>
      </div>
    </section>
  );
}
