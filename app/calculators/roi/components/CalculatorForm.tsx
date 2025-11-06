'use client';

import { type CalculatorInputs } from '../utils/calculations';

const US_STATES = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' },
];

const ENERGY_SOURCES = [
  { value: 'diesel', label: 'Diesel Generator' },
  { value: 'natural-gas', label: 'Natural Gas' },
  { value: 'grid', label: 'Grid Power' },
  { value: 'battery', label: 'Battery Storage' },
] as const;

interface CalculatorFormProps {
  inputs: CalculatorInputs;
  onInputChange: (inputs: Partial<CalculatorInputs>) => void;
  onCalculate: () => void;
  hasCalculated: boolean;
}

export default function CalculatorForm({
  inputs,
  onInputChange,
  onCalculate,
  hasCalculated,
}: CalculatorFormProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Configure Your System
        </h2>
        <p className="text-sm text-slate-600">
          Adjust the parameters below to calculate your ROI
        </p>
      </div>

      {/* Power Capacity Slider */}
      <div className="space-y-3">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">
            Power Capacity
          </span>
          <div className="flex items-center justify-between mt-1">
            <span className="text-2xl font-bold text-[#00D9E8]">
              {inputs.powerCapacity} MW
            </span>
            <span className="text-xs text-slate-500">
              1-50 MW
            </span>
          </div>
        </label>

        <div className="relative pt-1">
          <input
            type="range"
            min="1"
            max="50"
            step="1"
            value={inputs.powerCapacity}
            onChange={(e) =>
              onInputChange({ powerCapacity: Number(e.target.value) })
            }
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00D9E8] slider-thumb"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>1 MW</span>
            <span>25 MW</span>
            <span>50 MW</span>
          </div>
        </div>
      </div>

      {/* Location Dropdown */}
      <div className="space-y-2">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">
            Location
          </span>
          <select
            value={inputs.location}
            onChange={(e) => onInputChange({ location: e.target.value })}
            className="mt-1 block w-full px-4 py-3 bg-white border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00D9E8] focus:border-transparent transition-all text-slate-900"
          >
            {US_STATES.map((state) => (
              <option key={state.code} value={state.code}>
                {state.name}
              </option>
            ))}
          </select>
        </label>
        <p className="text-xs text-slate-500">
          Location affects electricity rates and incentives
        </p>
      </div>

      {/* Current Energy Source */}
      <div className="space-y-2">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">
            Current Energy Source
          </span>
          <select
            value={inputs.currentEnergySource}
            onChange={(e) =>
              onInputChange({
                currentEnergySource: e.target.value as CalculatorInputs['currentEnergySource'],
              })
            }
            className="mt-1 block w-full px-4 py-3 bg-white border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00D9E8] focus:border-transparent transition-all text-slate-900"
          >
            {ENERGY_SOURCES.map((source) => (
              <option key={source.value} value={source.value}>
                {source.label}
              </option>
            ))}
          </select>
        </label>
        <p className="text-xs text-slate-500">
          We'll compare fuel cells against your current solution
        </p>
      </div>

      {/* Timeline Slider */}
      <div className="space-y-3">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">
            Analysis Timeline
          </span>
          <div className="flex items-center justify-between mt-1">
            <span className="text-2xl font-bold text-[#00D9E8]">
              {inputs.timeline} years
            </span>
            <span className="text-xs text-slate-500">
              5-25 years
            </span>
          </div>
        </label>

        <div className="relative pt-1">
          <input
            type="range"
            min="5"
            max="25"
            step="1"
            value={inputs.timeline}
            onChange={(e) =>
              onInputChange({ timeline: Number(e.target.value) })
            }
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00D9E8]"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-1">
            <span>5 years</span>
            <span>15 years</span>
            <span>25 years</span>
          </div>
        </div>
      </div>

      {/* Calculate Button */}
      <button
        onClick={onCalculate}
        className="w-full bg-[#00D9E8] hover:bg-[#00c5d4] text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
      >
        {hasCalculated ? 'Recalculate ROI' : 'Calculate ROI'}
      </button>

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start">
          <svg
            className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">Calculations include:</p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>Capital costs for all systems</li>
              <li>Operating and maintenance expenses</li>
              <li>Fuel/energy costs over time</li>
              <li>Equipment replacement cycles</li>
              <li>Environmental impact metrics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
