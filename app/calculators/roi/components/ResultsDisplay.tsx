'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { type ROIResults, type CalculatorInputs, formatCurrency, formatNumber } from '../utils/calculations';

// Lazy load heavy Recharts components
const BarChart = dynamic(() => import('recharts').then(mod => mod.BarChart) as any, { ssr: false });
const Bar = dynamic(() => import('recharts').then(mod => mod.Bar) as any, { ssr: false });
const XAxis = dynamic(() => import('recharts').then(mod => mod.XAxis) as any, { ssr: false });
const YAxis = dynamic(() => import('recharts').then(mod => mod.YAxis) as any, { ssr: false });
const CartesianGrid = dynamic(() => import('recharts').then(mod => mod.CartesianGrid) as any, { ssr: false });
const Tooltip = dynamic(() => import('recharts').then(mod => mod.Tooltip) as any, { ssr: false });
const Legend = dynamic(() => import('recharts').then(mod => mod.Legend) as any, { ssr: false });
const ResponsiveContainer = dynamic(() => import('recharts').then(mod => mod.ResponsiveContainer) as any, { ssr: false });
const LineChart = dynamic(() => import('recharts').then(mod => mod.LineChart) as any, { ssr: false });
const Line = dynamic(() => import('recharts').then(mod => mod.Line) as any, { ssr: false });

interface ResultsDisplayProps {
  results: ROIResults;
  inputs: CalculatorInputs;
  onDownloadReport: () => void;
}

// Animated counter hook
function useCountUp(end: number, duration: number = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(end * easeOutQuart);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return count;
}

export default function ResultsDisplay({ results, inputs, onDownloadReport }: ResultsDisplayProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [chartsLoaded, setChartsLoaded] = useState(false);

  // Animated counters for key metrics
  const savingsAnimated = useCountUp(results.savings.vsDiesel);
  const co2Animated = useCountUp(results.emissions.co2Avoided);
  const treesAnimated = useCountUp(results.emissions.equivalentTrees);

  useEffect(() => {
    // Trigger entrance animations
    setIsVisible(true);
    // Delay chart loading slightly
    setTimeout(() => setChartsLoaded(true), 300);
  }, []);

  // Prepare data for TCO comparison chart
  const tcoData = [
    {
      name: 'Initial Cost',
      'Fuel Cell': results.fuelCell.initialCost,
      'Diesel': results.diesel.initialCost,
      'Battery': results.battery.initialCost,
    },
    {
      name: 'Annual Operating',
      'Fuel Cell': results.fuelCell.annualOperating,
      'Diesel': results.diesel.annualOperating,
      'Battery': results.battery.annualOperating,
    },
    {
      name: `${inputs.timeline}-Year Total`,
      'Fuel Cell': results.fuelCell.totalCost,
      'Diesel': results.diesel.totalCost,
      'Battery': results.battery.totalCost,
    },
  ];

  // Sample data points for cumulative cost chart
  const cumulativeData = results.yearlyBreakdown.filter((_, i) =>
    i === 0 || i === 4 || i === 9 || i === 14 || i === results.yearlyBreakdown.length - 1
  );

  return (
    <div className="space-y-6">
      {/* Header with fade-in */}
      <div className={`border-b border-slate-200 pb-4 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <h2 className="text-2xl font-bold text-slate-900">Your Results</h2>
        <p className="text-sm text-slate-600 mt-1">
          {inputs.powerCapacity} MW system over {inputs.timeline} years in {inputs.location}
        </p>
      </div>

      {/* Key Metrics Cards with staggered entrance */}
      <div className="grid grid-cols-2 gap-4">
        {/* Total Savings */}
        <div className={`bg-gradient-to-br from-[#00D9E8] to-[#00b8c5] rounded-lg p-4 text-white relative overflow-hidden group hover-lift transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Energy flow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 energy-flow"></div>

          <div className="text-sm font-medium opacity-90 relative z-10">Total Savings vs Diesel</div>
          <div className="text-3xl font-bold mt-1 relative z-10 group-hover:scale-105 transition-transform duration-300">
            {formatCurrency(savingsAnimated)}
          </div>
          <div className="text-xs opacity-75 mt-1 relative z-10">Over {inputs.timeline} years</div>

          {/* Animated progress bar */}
          <div className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden relative z-10">
            <div
              className={`h-full bg-white transition-all duration-1000 ease-out ${
                isVisible ? 'w-full' : 'w-0'
              }`}
              style={{ transitionDelay: '300ms' }}
            ></div>
          </div>
        </div>

        {/* Payback Period */}
        <div className={`bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-4 text-white relative overflow-hidden group hover-lift transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 energy-flow"></div>

          <div className="text-sm font-medium opacity-90 relative z-10">Payback Period</div>
          <div className="text-3xl font-bold mt-1 relative z-10 group-hover:scale-105 transition-transform duration-300 animate-bounce-in">
            {results.paybackPeriod} <span className="text-xl">years</span>
          </div>
          <div className="text-xs opacity-75 mt-1 relative z-10">Break-even point</div>

          <div className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden relative z-10">
            <div
              className={`h-full bg-white transition-all duration-1000 ease-out ${
                isVisible ? 'w-full' : 'w-0'
              }`}
              style={{ transitionDelay: '400ms' }}
            ></div>
          </div>
        </div>

        {/* CO2 Avoided */}
        <div className={`bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg p-4 text-white relative overflow-hidden group hover-lift transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 energy-flow"></div>

          <div className="text-sm font-medium opacity-90 relative z-10">CO2 Avoided</div>
          <div className="text-3xl font-bold mt-1 relative z-10 group-hover:scale-105 transition-transform duration-300">
            {formatNumber(co2Animated)}
          </div>
          <div className="text-xs opacity-75 mt-1 relative z-10">Tons of CO2</div>

          <div className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden relative z-10">
            <div
              className={`h-full bg-white transition-all duration-1000 ease-out ${
                isVisible ? 'w-full' : 'w-0'
              }`}
              style={{ transitionDelay: '500ms' }}
            ></div>
          </div>
        </div>

        {/* Tree Equivalent */}
        <div className={`bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg p-4 text-white relative overflow-hidden group hover-lift transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 energy-flow"></div>

          <div className="text-sm font-medium opacity-90 relative z-10">Equivalent Impact</div>
          <div className="text-3xl font-bold mt-1 relative z-10 group-hover:scale-105 transition-transform duration-300">
            {formatNumber(treesAnimated)}
          </div>
          <div className="text-xs opacity-75 mt-1 relative z-10">Trees planted</div>

          <div className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden relative z-10">
            <div
              className={`h-full bg-white transition-all duration-1000 ease-out ${
                isVisible ? 'w-full' : 'w-0'
              }`}
              style={{ transitionDelay: '600ms' }}
            ></div>
          </div>
        </div>
      </div>

      {/* TCO Comparison Chart with fade-in */}
      {chartsLoaded && (
        <div className={`bg-slate-50 rounded-lg p-6 hover:shadow-lg transition-all duration-700 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Total Cost of Ownership Comparison
          </h3>
          {/* @ts-ignore - Recharts ResponsiveContainer type issue */}
          <ResponsiveContainer width="100%" height={300}>
            {/* @ts-ignore */}
            <BarChart data={tcoData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#64748b" fontSize={12} />
              <YAxis
                stroke="#64748b"
                fontSize={12}
                tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
              />
              <Tooltip
                formatter={(value: number) => formatCurrency(value)}
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Legend />
              <Bar dataKey="Fuel Cell" fill="#00D9E8" radius={[8, 8, 0, 0]} animationDuration={1000} />
              <Bar dataKey="Diesel" fill="#f97316" radius={[8, 8, 0, 0]} animationDuration={1000} animationBegin={200} />
              <Bar dataKey="Battery" fill="#8b5cf6" radius={[8, 8, 0, 0]} animationDuration={1000} animationBegin={400} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Cumulative Cost Over Time with fade-in */}
      {chartsLoaded && (
        <div className={`bg-slate-50 rounded-lg p-6 hover:shadow-lg transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Cumulative Cost Over Time
          </h3>
          {/* @ts-ignore - Recharts ResponsiveContainer type issue */}
          <ResponsiveContainer width="100%" height={250}>
            {/* @ts-ignore */}
            <LineChart data={cumulativeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis
                dataKey="year"
                stroke="#64748b"
                fontSize={12}
                label={{ value: 'Year', position: 'insideBottom', offset: -5, fill: '#64748b' }}
              />
              <YAxis
                stroke="#64748b"
                fontSize={12}
                tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
              />
              <Tooltip
                formatter={(value: number) => formatCurrency(value)}
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '12px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="fuelCell"
                stroke="#00D9E8"
                strokeWidth={3}
                name="Fuel Cell"
                dot={{ fill: '#00D9E8', r: 5 }}
                animationDuration={1500}
              />
              <Line
                type="monotone"
                dataKey="diesel"
                stroke="#f97316"
                strokeWidth={3}
                name="Diesel"
                dot={{ fill: '#f97316', r: 5 }}
                animationDuration={1500}
                animationBegin={300}
              />
              <Line
                type="monotone"
                dataKey="battery"
                stroke="#8b5cf6"
                strokeWidth={3}
                name="Battery"
                dot={{ fill: '#8b5cf6', r: 5 }}
                animationDuration={1500}
                animationBegin={600}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Detailed Breakdown with fade-in */}
      <div className={`bg-slate-50 rounded-lg p-6 hover:shadow-lg transition-all duration-700 delay-600 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h3 className="text-lg font-semibold text-slate-900 mb-4">
          Cost Breakdown
        </h3>
        <div className="space-y-4">
          <div className="grid grid-cols-4 gap-4 text-sm font-medium text-slate-600 pb-2 border-b border-slate-300">
            <div>Technology</div>
            <div className="text-right">Initial Cost</div>
            <div className="text-right">Annual Operating</div>
            <div className="text-right">Total ({inputs.timeline}yr)</div>
          </div>

          {/* Fuel Cell Row */}
          <div className="grid grid-cols-4 gap-4 text-sm group hover:bg-white p-2 rounded-lg transition-colors duration-200">
            <div className="font-medium text-slate-900 flex items-center">
              <span className="w-3 h-3 bg-[#00D9E8] rounded-full mr-2 group-hover:scale-125 transition-transform duration-300"></span>
              Fuel Cell
            </div>
            <div className="text-right text-slate-700">
              {formatCurrency(results.fuelCell.initialCost)}
            </div>
            <div className="text-right text-slate-700">
              {formatCurrency(results.fuelCell.annualOperating)}
            </div>
            <div className="text-right font-semibold text-slate-900">
              {formatCurrency(results.fuelCell.totalCost)}
            </div>
          </div>

          {/* Diesel Row */}
          <div className="grid grid-cols-4 gap-4 text-sm group hover:bg-white p-2 rounded-lg transition-colors duration-200">
            <div className="font-medium text-slate-900 flex items-center">
              <span className="w-3 h-3 bg-orange-500 rounded-full mr-2 group-hover:scale-125 transition-transform duration-300"></span>
              Diesel
            </div>
            <div className="text-right text-slate-700">
              {formatCurrency(results.diesel.initialCost)}
            </div>
            <div className="text-right text-slate-700">
              {formatCurrency(results.diesel.annualOperating)}
            </div>
            <div className="text-right font-semibold text-slate-900">
              {formatCurrency(results.diesel.totalCost)}
            </div>
          </div>

          {/* Battery Row */}
          <div className="grid grid-cols-4 gap-4 text-sm group hover:bg-white p-2 rounded-lg transition-colors duration-200">
            <div className="font-medium text-slate-900 flex items-center">
              <span className="w-3 h-3 bg-violet-500 rounded-full mr-2 group-hover:scale-125 transition-transform duration-300"></span>
              Battery
            </div>
            <div className="text-right text-slate-700">
              {formatCurrency(results.battery.initialCost)}
            </div>
            <div className="text-right text-slate-700">
              {formatCurrency(results.battery.annualOperating)}
            </div>
            <div className="text-right font-semibold text-slate-900">
              {formatCurrency(results.battery.totalCost)}
            </div>
          </div>
        </div>
      </div>

      {/* Environmental Impact with fade-in */}
      <div className={`bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6 hover:shadow-lg transition-all duration-700 delay-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h3 className="text-lg font-semibold text-slate-900 mb-3">
          Environmental Impact
        </h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-slate-600">CO2 Emissions Avoided</div>
            <div className="text-2xl font-bold text-green-700 mt-1 animate-bounce-in">
              {formatNumber(results.emissions.co2Avoided)} tons
            </div>
          </div>
          <div>
            <div className="text-slate-600">Equivalent Trees Planted</div>
            <div className="text-2xl font-bold text-green-700 mt-1 animate-bounce-in" style={{ animationDelay: '200ms' }}>
              {formatNumber(results.emissions.equivalentTrees)} trees
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-600 mt-4">
          Based on zero-emission hydrogen fuel cells vs. diesel generators over {inputs.timeline} years
        </p>
      </div>

      {/* CTA Button with power-up effect */}
      <button
        onClick={onDownloadReport}
        className={`w-full bg-[#00D9E8] hover:bg-[#00c5d4] text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl btn-power-up hover-scale-sm flex items-center justify-center group transition-all duration-700 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <svg
          className="w-5 h-5 mr-2 group-hover:animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        Download Detailed PDF Report
      </button>

      <p className={`text-xs text-center text-slate-500 transition-all duration-700 delay-900 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        Get a comprehensive analysis with financing options and implementation timeline
      </p>
    </div>
  );
}
