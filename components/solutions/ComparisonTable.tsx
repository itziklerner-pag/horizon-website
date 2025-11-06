'use client';

import { useEffect, useRef, useState } from 'react';

interface ComparisonRow {
  feature: string;
  horizon: string | { value: string; highlight?: boolean };
  diesel: string | { value: string; highlight?: boolean };
  battery: string | { value: string; highlight?: boolean };
}

interface ComparisonTableProps {
  rows: ComparisonRow[];
}

export default function ComparisonTable({ rows }: ComparisonTableProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getCellValue = (cell: string | { value: string; highlight?: boolean }) => {
    return typeof cell === 'string' ? cell : cell.value;
  };

  const isHighlighted = (cell: string | { value: string; highlight?: boolean }) => {
    return typeof cell === 'object' && cell.highlight;
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-4">
            Why Horizon Outperforms
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive comparison with traditional backup power solutions
          </p>
        </div>

        <div
          className={`overflow-x-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow-lg rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#1A2332]">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-[#00D9E8] uppercase tracking-wider bg-[#1A2332]/80">
                      Horizon Fuel Cell
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-white uppercase tracking-wider">
                      Diesel Generator
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-white uppercase tracking-wider">
                      Battery Storage
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {rows.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {row.feature}
                      </td>
                      <td
                        className={`px-6 py-4 text-sm text-center font-semibold whitespace-nowrap ${
                          isHighlighted(row.horizon)
                            ? 'text-[#00D9E8] bg-[#00D9E8]/5'
                            : 'text-gray-900'
                        }`}
                      >
                        {getCellValue(row.horizon)}
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-600 whitespace-nowrap">
                        {getCellValue(row.diesel)}
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-600 whitespace-nowrap">
                        {getCellValue(row.battery)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div
          className={`mt-8 text-center transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sm text-gray-500">
            * Performance metrics based on standard operating conditions. Actual results may vary.
          </p>
        </div>
      </div>
    </section>
  );
}
