'use client';

import { useState } from 'react';
import CalculatorForm from './components/CalculatorForm';
import ResultsDisplay from './components/ResultsDisplay';
import LeadCaptureModal from './components/LeadCaptureModal';
import { calculateROI, type CalculatorInputs, type ROIResults } from './utils/calculations';

export default function ROICalculatorPage() {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    powerCapacity: 5,
    location: 'CA',
    currentEnergySource: 'diesel',
    timeline: 15,
  });

  const [results, setResults] = useState<ROIResults | null>(null);
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);

  const handleInputChange = (newInputs: Partial<CalculatorInputs>) => {
    const updatedInputs = { ...inputs, ...newInputs };
    setInputs(updatedInputs);

    // Automatically recalculate when inputs change
    if (hasCalculated) {
      const newResults = calculateROI(updatedInputs);
      setResults(newResults);
    }
  };

  const handleCalculate = () => {
    const newResults = calculateROI(inputs);
    setResults(newResults);
    setHasCalculated(true);
  };

  const handleDownloadReport = () => {
    setShowLeadCapture(true);
  };

  const handleLeadSubmit = (email: string, name: string) => {
    // In a real application, this would send the lead to your CRM/backend
    console.log('Lead captured:', { email, name, inputs, results });

    // Generate and download PDF report
    alert('Thank you! Your detailed ROI report will be sent to your email shortly.');
    setShowLeadCapture(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-slate-900">
            Fuel Cell ROI Calculator
          </h1>
          <p className="mt-2 text-slate-600">
            Calculate your total cost of ownership and environmental impact
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 h-fit">
            <CalculatorForm
              inputs={inputs}
              onInputChange={handleInputChange}
              onCalculate={handleCalculate}
              hasCalculated={hasCalculated}
            />
          </div>

          {/* Right Column - Results */}
          <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
            {results ? (
              <ResultsDisplay
                results={results}
                inputs={inputs}
                onDownloadReport={handleDownloadReport}
              />
            ) : (
              <div className="flex items-center justify-center h-full min-h-[500px]">
                <div className="text-center">
                  <svg
                    className="mx-auto h-24 w-24 text-slate-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <h3 className="mt-4 text-lg font-medium text-slate-900">
                    Ready to Calculate
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Enter your parameters and click Calculate ROI to see your results
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6 lg:p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Why Choose Horizon Fuel Cells?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#00D9E8] text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-slate-900">Lower Operating Costs</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Up to 40% reduction in energy costs compared to traditional diesel generators
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#00D9E8] text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-slate-900">Zero Emissions</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Eliminate carbon emissions and meet your sustainability goals
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#00D9E8] text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-slate-900">Long Lifespan</h3>
                <p className="mt-2 text-sm text-slate-600">
                  20+ year operational life with minimal maintenance requirements
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Lead Capture Modal */}
      {showLeadCapture && (
        <LeadCaptureModal
          onClose={() => setShowLeadCapture(false)}
          onSubmit={handleLeadSubmit}
        />
      )}
    </div>
  );
}
