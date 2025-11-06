'use client';

import { useState } from 'react';

export default function CaseStudies() {
  const [activeStudy, setActiveStudy] = useState(0);

  const caseStudies = [
    {
      company: 'CloudScale Data Centers',
      industry: 'Hyperscale Colocation',
      location: 'Phoenix, AZ',
      challenge:
        'CloudScale needed 15MW of backup power for a new hyperscale facility opening in Q4. Their natural gas provider quoted 12-14 months for pipeline installation, putting the entire project timeline at risk.',
      solution:
        'Horizon deployed 60 x 250kW fuel cell modules in just 85 days. The modular approach allowed parallel installation while the facility was being constructed. No utility connection required.',
      timeline: {
        assessment: 25,
        manufacturing: 35,
        installation: 18,
        commissioning: 7,
      },
      results: [
        { metric: 'Deployment Time', value: '85 days', highlight: true },
        { metric: 'Time vs. Natural Gas', value: '275 days faster', highlight: true },
        { metric: 'Revenue Protected', value: '$4.1M', highlight: true },
        { metric: 'Systems Installed', value: '60 modules' },
      ],
      quote: {
        text: 'Horizon saved our project. Without their 90-day deployment, we would have missed our go-live date and lost major customers. The fuel cell solution let us open on schedule.',
        author: 'Sarah Chen',
        title: 'VP of Operations, CloudScale',
      },
    },
    {
      company: 'EdgeTech Networks',
      industry: '5G Edge Computing',
      location: 'Multi-site Deployment',
      challenge:
        'EdgeTech needed backup power for 25 remote 5G edge sites across the Southwest. Diesel was prohibitively expensive due to delivery logistics, and grid reliability was inconsistent.',
      solution:
        'Containerized 500kW fuel cell systems deployed to all 25 sites in 6 months (average 72 days per site). Remote monitoring enabled centralized management without on-site staff.',
      timeline: {
        assessment: 20,
        manufacturing: 30,
        installation: 15,
        commissioning: 7,
      },
      results: [
        { metric: 'Average Deployment', value: '72 days', highlight: true },
        { metric: 'Sites Deployed', value: '25 locations', highlight: true },
        { metric: 'Uptime Achievement', value: '99.97%', highlight: true },
        { metric: 'Operating Cost Savings', value: '42% vs diesel' },
      ],
      quote: {
        text: 'The containerized approach was perfect for our remote sites. Horizon deployed faster than anyone else could, and the operational savings have exceeded our projections.',
        author: 'Marcus Williams',
        title: 'Director of Network Infrastructure',
      },
    },
    {
      company: 'MidWest Data Solutions',
      industry: 'Enterprise Colocation',
      location: 'Chicago, IL',
      challenge:
        'Existing diesel generators failing emissions compliance. Had 90 days to replace before regulatory shutdown. Traditional replacement timeline was 6+ months.',
      solution:
        'Emergency deployment of 5MW fuel cell system in 78 days. Horizon expedited manufacturing and coordinated with local authorities for accelerated permitting.',
      timeline: {
        assessment: 15,
        manufacturing: 35,
        installation: 20,
        commissioning: 8,
      },
      results: [
        { metric: 'Deployment Time', value: '78 days', highlight: true },
        { metric: 'Compliance Deadline Met', value: '12 days early', highlight: true },
        { metric: 'Downtime Risk Avoided', value: '$2.8M', highlight: true },
        { metric: 'Emissions Reduction', value: '100%' },
      ],
      quote: {
        text: 'We were facing a catastrophic shutdown. Horizon responded with an expedited deployment that met our impossible deadline. They literally saved our business.',
        author: 'Robert Patterson',
        title: 'Facility Director',
      },
    },
  ];

  const study = caseStudies[activeStudy];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-6">
            Real Deployments, Real Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've accelerated time to market for data centers across North America.
          </p>
        </div>

        {/* Study Selector */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {caseStudies.map((cs, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStudy(idx)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeStudy === idx
                  ? 'bg-[#00D9E8] text-[#1A2332] shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cs.company}
            </button>
          ))}
        </div>

        {/* Case Study Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Story */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-[#00D9E8]/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🏢</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1A2332]">{study.company}</h3>
                  <p className="text-gray-600 mt-1">
                    {study.industry} • {study.location}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[#1A2332] mb-2 flex items-center gap-2">
                    <span className="text-lg">⚠️</span>
                    The Challenge
                  </h4>
                  <p className="text-gray-700">{study.challenge}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#1A2332] mb-2 flex items-center gap-2">
                    <span className="text-lg">✅</span>
                    The Solution
                  </h4>
                  <p className="text-gray-700">{study.solution}</p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-br from-[#00D9E8]/10 to-[#00D9E8]/5 border border-[#00D9E8]/20 rounded-xl p-6">
              <div className="text-4xl text-[#00D9E8] mb-3">"</div>
              <p className="text-lg text-gray-700 italic mb-4">{study.quote.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00D9E8] rounded-full flex items-center justify-center text-white font-bold">
                  {study.quote.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-[#1A2332]">{study.quote.author}</div>
                  <div className="text-sm text-gray-600">{study.quote.title}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Timeline & Results */}
          <div className="space-y-6">
            {/* Timeline Visualization */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h4 className="text-xl font-bold text-[#1A2332] mb-6">
                Deployment Timeline
              </h4>

              <div className="space-y-4">
                {Object.entries(study.timeline).map(([phase, days], idx) => {
                  const phaseNames: Record<string, string> = {
                    assessment: 'Assessment & Design',
                    manufacturing: 'Manufacturing & Testing',
                    installation: 'Installation',
                    commissioning: 'Commissioning',
                  };
                  const colors = ['#00D9E8', '#00C896', '#4DE4EF', '#00D9E8'];
                  const totalDays = Object.values(study.timeline).reduce((a, b) => a + b, 0);
                  const width = (days / totalDays) * 100;

                  return (
                    <div key={phase}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-gray-700">
                          {phaseNames[phase]}
                        </span>
                        <span className="text-sm font-mono text-gray-600">{days} days</span>
                      </div>
                      <div className="h-8 bg-gray-100 rounded-lg overflow-hidden">
                        <div
                          className="h-full flex items-center justify-end px-3 transition-all duration-1000"
                          style={{
                            width: `${width}%`,
                            backgroundColor: colors[idx],
                          }}
                        >
                          <span className="text-white text-xs font-semibold">
                            {days}d
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-[#1A2332]">Total Timeline</span>
                  <span className="text-3xl font-bold text-[#00D9E8] font-mono">
                    {Object.values(study.timeline).reduce((a, b) => a + b, 0)} days
                  </span>
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h4 className="text-xl font-bold text-[#1A2332] mb-6">Results Achieved</h4>
              <div className="grid grid-cols-2 gap-4">
                {study.results.map((result, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg ${
                      result.highlight
                        ? 'bg-gradient-to-br from-[#00D9E8]/10 to-[#00D9E8]/5 border border-[#00D9E8]/20'
                        : 'bg-gray-50'
                    }`}
                  >
                    <div
                      className={`text-2xl font-bold font-mono mb-1 ${
                        result.highlight ? 'text-[#00D9E8]' : 'text-gray-700'
                      }`}
                    >
                      {result.value}
                    </div>
                    <div className="text-sm text-gray-600">{result.metric}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
