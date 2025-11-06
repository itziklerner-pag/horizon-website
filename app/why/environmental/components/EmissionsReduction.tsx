'use client';

import StatCounter from '@/components/why/StatCounter';

export default function EmissionsReduction() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-6">
            Quantified Emissions Reductions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real data from deployed systems shows substantial environmental benefits.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <StatCounter end={50} suffix="-70%" label="CO2 Reduction vs. Diesel" color="#00C896" />
          <StatCounter end={100} suffix="%" label="NOx Elimination" color="#00D9E8" />
          <StatCounter end={25000} label="Tons CO2 Avoided (Fleet)" color="#00C896" />
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-[#1A2332] mb-8 text-center">
            Case Study: 10MW Data Center Emissions Impact
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="border-2 border-red-200 rounded-lg p-6 bg-red-50/30">
              <h4 className="text-lg font-bold text-[#1A2332] mb-4 flex items-center gap-2">
                <span className="text-2xl">⛽</span>
                Diesel Baseline
              </h4>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Annual Testing (200 hrs)</div>
                  <div className="text-2xl font-bold text-red-600 font-mono">144 tons CO2</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">NOx Emissions</div>
                  <div className="text-2xl font-bold text-red-600 font-mono">1,340 kg</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Particulate Matter</div>
                  <div className="text-2xl font-bold text-red-600 font-mono">60 kg</div>
                </div>
              </div>
            </div>

            <div className="border-2 border-[#00C896] rounded-lg p-6 bg-[#00C896]/5">
              <h4 className="text-lg font-bold text-[#1A2332] mb-4 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Horizon Fuel Cell
              </h4>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Annual Testing (200 hrs)</div>
                  <div className="text-2xl font-bold text-[#00C896] font-mono">72 tons CO2</div>
                  <div className="text-xs text-green-600 mt-1">50% reduction</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">NOx Emissions</div>
                  <div className="text-2xl font-bold text-[#00C896] font-mono">0 kg</div>
                  <div className="text-xs text-green-600 mt-1">100% reduction</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Particulate Matter</div>
                  <div className="text-2xl font-bold text-[#00C896] font-mono">0 kg</div>
                  <div className="text-xs text-green-600 mt-1">100% reduction</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#00C896]/10 to-[#00C896]/5 border border-[#00C896]/20 rounded-lg p-6">
            <h4 className="font-semibold text-[#1A2332] mb-3">Environmental Equivalents:</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-xl">🌳</span>
                <div>
                  <div className="font-semibold text-gray-700">3,200 trees planted</div>
                  <div className="text-gray-600">Annual CO2 sequestration equivalent</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-xl">🚗</span>
                <div>
                  <div className="font-semibold text-gray-700">16 cars removed</div>
                  <div className="text-gray-600">From the road for one year</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-xl">🏠</span>
                <div>
                  <div className="font-semibold text-gray-700">8 homes powered</div>
                  <div className="text-gray-600">With clean energy for one year</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
