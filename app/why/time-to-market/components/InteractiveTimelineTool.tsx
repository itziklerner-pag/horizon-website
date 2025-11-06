'use client';

import { useState } from 'react';

export default function InteractiveTimelineTool() {
  const [powerRequirement, setPowerRequirement] = useState(5);
  const [urgency, setUrgency] = useState<'standard' | 'expedited'>('standard');
  const [location, setLocation] = useState<'urban' | 'remote'>('urban');

  const calculateTimeline = () => {
    let baseDays = 90;

    // Adjust for power requirement (minimal impact due to modularity)
    if (powerRequirement > 10) baseDays += 10;

    // Expedited option
    if (urgency === 'expedited') baseDays -= 15;

    // Remote location adds slight complexity
    if (location === 'remote') baseDays += 5;

    return baseDays;
  };

  const totalDays = calculateTimeline();
  const revenuePerDay = powerRequirement * 0.8 * 24 * 100; // Simplified calculation
  const competitorDelay = 180; // Diesel baseline
  const daysSaved = competitorDelay - totalDays;
  const revenueSaved = daysSaved * revenuePerDay;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-6">
            Calculate Your Deployment Timeline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how quickly we can get your facility operational—and how much revenue you'll protect.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8">
            <h3 className="text-xl font-bold text-[#1A2332] mb-6">Your Requirements</h3>

            {/* Power Requirement */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-[#1A2332] mb-3">
                Backup Power Needed (MW)
              </label>
              <div className="flex items-center gap-4 mb-3">
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={powerRequirement}
                  onChange={(e) => setPowerRequirement(Number(e.target.value))}
                  className="flex-1"
                />
                <div className="w-20 text-right">
                  <span className="text-2xl font-bold text-[#00D9E8] font-mono">
                    {powerRequirement}
                  </span>
                  <span className="text-gray-600 ml-1">MW</span>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>1 MW</span>
                <span>50 MW</span>
              </div>
            </div>

            {/* Urgency */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-[#1A2332] mb-3">
                Deployment Urgency
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setUrgency('standard')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    urgency === 'standard'
                      ? 'border-[#00D9E8] bg-[#00D9E8]/10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-semibold text-[#1A2332]">Standard</div>
                  <div className="text-sm text-gray-600 mt-1">90 days</div>
                </button>
                <button
                  onClick={() => setUrgency('expedited')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    urgency === 'expedited'
                      ? 'border-[#00D9E8] bg-[#00D9E8]/10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-semibold text-[#1A2332]">Expedited</div>
                  <div className="text-sm text-gray-600 mt-1">75 days</div>
                </button>
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-semibold text-[#1A2332] mb-3">
                Facility Location
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setLocation('urban')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    location === 'urban'
                      ? 'border-[#00D9E8] bg-[#00D9E8]/10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-semibold text-[#1A2332]">Urban/Suburban</div>
                  <div className="text-sm text-gray-600 mt-1">Standard access</div>
                </button>
                <button
                  onClick={() => setLocation('remote')}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    location === 'remote'
                      ? 'border-[#00D9E8] bg-[#00D9E8]/10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-semibold text-[#1A2332]">Remote</div>
                  <div className="text-sm text-gray-600 mt-1">Limited access</div>
                </button>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="bg-gradient-to-br from-[#1A2332] to-[#2A3F56] text-white rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6">Your Custom Timeline</h3>

            {/* Main Timeline */}
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 mb-6">
              <div className="text-center">
                <div className="text-6xl font-bold text-[#00D9E8] font-mono mb-2">
                  {totalDays}
                </div>
                <div className="text-lg text-gray-300">Days to Full Operation</div>
              </div>
            </div>

            {/* Breakdown */}
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <span className="text-gray-300">Assessment & Design</span>
                <span className="font-mono font-semibold text-[#00D9E8]">
                  {urgency === 'expedited' ? '20' : '30'} days
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <span className="text-gray-300">Manufacturing & Testing</span>
                <span className="font-mono font-semibold text-[#00C896]">
                  {Math.ceil(totalDays * 0.35)} days
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <span className="text-gray-300">Installation</span>
                <span className="font-mono font-semibold text-[#4DE4EF]">
                  {Math.ceil(totalDays * 0.22)} days
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white/5 rounded-lg">
                <span className="text-gray-300">Commissioning</span>
                <span className="font-mono font-semibold text-[#00D9E8]">
                  {Math.floor(totalDays * 0.13)} days
                </span>
              </div>
            </div>

            {/* Value Metrics */}
            <div className="border-t border-white/20 pt-6 space-y-4">
              <div>
                <div className="text-sm text-gray-400 mb-1">vs. Diesel Generator</div>
                <div className="text-3xl font-bold text-[#00C896] font-mono">
                  {daysSaved} Days Faster
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Revenue Protected</div>
                <div className="text-3xl font-bold text-[#00D9E8] font-mono">
                  ${(revenueSaved / 1000000).toFixed(1)}M
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="/contact"
                className="block w-full px-6 py-4 bg-[#00D9E8] text-[#1A2332] font-semibold rounded-lg hover:bg-[#00c5d4] transition-colors text-center"
              >
                Get Detailed Timeline
              </a>
              <p className="text-center text-sm text-gray-400 mt-3">
                Receive a customized deployment plan in 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Timeline estimates based on typical deployments. Actual timelines confirmed during assessment phase.
        </p>
      </div>
    </section>
  );
}
