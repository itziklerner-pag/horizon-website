'use client';

export default function HydrogenRoadmap() {
  const phases = [
    {
      year: '2024',
      title: 'Natural Gas Operation',
      status: 'Current State',
      color: '#00D9E8',
      description: 'Systems operate on natural gas with 50% CO2 reduction vs. diesel',
      capabilities: [
        'CARB certified for natural gas',
        '50-70% emissions reduction',
        'Immediate deployment',
        'Established fuel infrastructure',
      ],
    },
    {
      year: '2025',
      title: 'Blended Hydrogen (20%)',
      status: 'Available Now',
      color: '#00C896',
      description: 'Introducing hydrogen blend capability without system modifications',
      capabilities: [
        'Drop-in hydrogen blending',
        'No hardware changes required',
        '60-75% emissions reduction',
        'Utility hydrogen programs',
      ],
    },
    {
      year: '2026',
      title: 'High-Blend Hydrogen (50%+)',
      status: 'In Development',
      color: '#4DE4EF',
      description: 'Majority hydrogen operation with minor system upgrades',
      capabilities: [
        'Field-upgradable systems',
        'Advanced fuel management',
        '80-90% emissions reduction',
        'Green hydrogen partnerships',
      ],
    },
    {
      year: '2027+',
      title: '100% Green Hydrogen',
      status: 'Roadmap Target',
      color: '#00C896',
      description: 'Complete zero-emission operation on renewable hydrogen',
      capabilities: [
        'True zero-emission power',
        'Renewable hydrogen sources',
        'Complete decarbonization',
        'Ultimate environmental goal',
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-6">
            Hydrogen Transition Roadmap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven, phased approach to zero-emission backup power. Start today, reach zero emissions tomorrow.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#00D9E8] via-[#00C896] to-[#4DE4EF] hidden lg:block" />

          <div className="grid lg:grid-cols-4 gap-8">
            {phases.map((phase, idx) => (
              <div key={idx} className="relative">
                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute top-[88px] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white items-center justify-center z-10" style={{ backgroundColor: phase.color }}>
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white border-2 rounded-xl p-6 hover:shadow-lg transition-shadow" style={{ borderColor: phase.color }}>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold font-mono mb-2" style={{ color: phase.color }}>
                      {phase.year}
                    </div>
                    <h3 className="text-lg font-bold text-[#1A2332] mb-1">{phase.title}</h3>
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: `${phase.color}20`, color: phase.color }}>
                      {phase.status}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">{phase.description}</p>

                  <ul className="space-y-2">
                    {phase.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-700">
                        <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: phase.color }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hydrogen Infrastructure */}
        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-[#1A2332] mb-6 text-center">
            Hydrogen Infrastructure Is Scaling Rapidly
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">🏭</div>
              <div className="text-3xl font-bold text-[#00C896] font-mono mb-2">$8B</div>
              <div className="text-sm text-gray-600">Federal hydrogen hub funding (IRA)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <div className="text-3xl font-bold text-[#00D9E8] font-mono mb-2">50+</div>
              <div className="text-sm text-gray-600">Green hydrogen projects in development</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🚛</div>
              <div className="text-3xl font-bold text-[#4DE4EF] font-mono mb-2">2026</div>
              <div className="text-sm text-gray-600">Cost parity with diesel projected</div>
            </div>
          </div>
        </div>

        {/* Investment Protection */}
        <div className="bg-gradient-to-r from-[#00C896]/10 to-[#00C896]/5 border border-[#00C896]/20 rounded-xl p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#00C896] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1A2332] mb-3">
                Future-Proof Your Investment
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Every Horizon fuel cell system is designed for hydrogen from day one. As hydrogen infrastructure
                becomes available in your region, you can transition without replacing equipment.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00C896]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">No equipment replacement needed</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00C896]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">Field-upgradable fuel management</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00C896]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">Phased transition at your pace</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00C896]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">Hydrogen supply coordination included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
