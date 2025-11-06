'use client';

import { useState } from 'react';
import Link from 'next/link';
import SearchBar from '@/components/resources/SearchBar';
import FilterBar from '@/components/resources/FilterBar';

const topicFilters = [
  { label: 'All Topics', value: 'all' },
  { label: 'Deployment', value: 'deployment' },
  { label: 'TCO Analysis', value: 'tco' },
  { label: 'Compliance', value: 'compliance' },
  { label: 'Reliability', value: 'reliability' },
];

const industryFilters = [
  { label: 'All Industries', value: 'all' },
  { label: 'Hyperscale', value: 'hyperscale' },
  { label: 'Colocation', value: 'colocation' },
  { label: 'Enterprise', value: 'enterprise' },
  { label: 'Edge', value: 'edge' },
];

const whitepapers = [
  {
    title: '90-Day Deployment Framework: A Technical Guide',
    description: 'Comprehensive methodology for rapid fuel cell deployment including site preparation, permitting strategies, installation protocols, and commissioning procedures. Includes real-world timelines and risk mitigation strategies.',
    topic: 'Deployment',
    industry: 'All Industries',
    pages: 42,
    date: 'October 2025',
    downloads: '2.4K',
    gated: true,
  },
  {
    title: 'Total Cost of Ownership: Fuel Cells vs. Traditional Power',
    description: 'Detailed financial analysis comparing fuel cell systems to diesel generators and grid power across 10-year lifecycle. Includes capital costs, operational expenses, maintenance, fuel costs, and carbon pricing scenarios.',
    topic: 'TCO Analysis',
    industry: 'All Industries',
    pages: 38,
    date: 'September 2025',
    downloads: '3.1K',
    gated: true,
  },
  {
    title: 'Zero-Emission Compliance: State-by-State Regulatory Guide',
    description: 'Navigate the complex landscape of clean energy mandates across North America. Covers California Title 24, New York CLCPA, federal incentives, renewable energy credits, and compliance strategies.',
    topic: 'Compliance',
    industry: 'All Industries',
    pages: 56,
    date: 'August 2025',
    downloads: '1.8K',
    gated: true,
  },
  {
    title: 'Achieving Five-Nines: Reliability Engineering for Fuel Cell Systems',
    description: 'Technical deep-dive into system architecture, redundancy strategies, predictive maintenance, and failure mode analysis. Real-world uptime data from 500+ deployments.',
    topic: 'Reliability',
    industry: 'Hyperscale',
    pages: 44,
    date: 'July 2025',
    downloads: '2.7K',
    gated: true,
  },
  {
    title: 'Hyperscale Data Center Power: 100MW+ Deployment Strategy',
    description: 'Planning and execution framework for large-scale fuel cell installations. Covers phased rollouts, hydrogen infrastructure, grid integration, and operational scaling.',
    topic: 'Deployment',
    industry: 'Hyperscale',
    pages: 48,
    date: 'June 2025',
    downloads: '1.5K',
    gated: true,
  },
  {
    title: 'Colocation Economics: Maximizing Revenue per kW',
    description: 'How fuel cell power enables premium pricing, improves customer retention, and differentiates your facility. Financial modeling and market positioning strategies included.',
    topic: 'TCO Analysis',
    industry: 'Colocation',
    pages: 32,
    date: 'May 2025',
    downloads: '1.2K',
    gated: true,
  },
  {
    title: 'Edge Computing Power: Distributed Generation Architecture',
    description: 'Design patterns for powering distributed edge infrastructure with fuel cells. Covers remote monitoring, autonomous operation, and minimal maintenance requirements.',
    topic: 'Deployment',
    industry: 'Edge',
    pages: 36,
    date: 'April 2025',
    downloads: '1.9K',
    gated: true,
  },
  {
    title: 'Hydrogen Fuel Supply: Procurement Strategies and Economics',
    description: 'Comprehensive guide to hydrogen sourcing including delivered gas, on-site generation, pipeline connections, and emerging green hydrogen options. Cost analysis and supplier evaluation frameworks.',
    topic: 'TCO Analysis',
    industry: 'All Industries',
    pages: 40,
    date: 'March 2025',
    downloads: '2.2K',
    gated: true,
  },
  {
    title: 'Predictive Maintenance: AI-Driven Performance Optimization',
    description: 'Machine learning approaches to fault detection, performance degradation analysis, and maintenance scheduling. Reduce downtime by 40% with data-driven strategies.',
    topic: 'Reliability',
    industry: 'All Industries',
    pages: 34,
    date: 'February 2025',
    downloads: '1.6K',
    gated: true,
  },
  {
    title: 'Environmental Impact Assessment: Lifecycle Analysis',
    description: 'Complete carbon accounting from manufacturing through decommissioning. Includes Scope 1, 2, and 3 emissions, water usage, and circular economy considerations.',
    topic: 'Compliance',
    industry: 'All Industries',
    pages: 30,
    date: 'January 2025',
    downloads: '1.4K',
    gated: true,
  },
  {
    title: 'Enterprise Data Center Migration: Diesel to Fuel Cell Transition',
    description: 'Step-by-step playbook for replacing diesel generators with fuel cell systems. Risk management, parallel operation strategies, and stakeholder communication.',
    topic: 'Deployment',
    industry: 'Enterprise',
    pages: 38,
    date: 'December 2024',
    downloads: '1.1K',
    gated: true,
  },
  {
    title: 'Grid Services and Revenue Stacking: Beyond Baseload Power',
    description: 'How fuel cells can participate in ancillary services markets, demand response programs, and capacity markets. Revenue optimization strategies and market analysis.',
    topic: 'TCO Analysis',
    industry: 'All Industries',
    pages: 42,
    date: 'November 2024',
    downloads: '1.3K',
    gated: true,
  },
];

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  whitepaper: typeof whitepapers[0] | null;
}

function DownloadModal({ isOpen, onClose, whitepaper }: DownloadModalProps) {
  if (!isOpen || !whitepaper) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 animate-fade-in">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 animate-fade-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-electric-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-electric-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-deep-slate mb-2">Download Whitepaper</h3>
          <p className="text-gray-600 text-sm">
            {whitepaper.title}
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-electric-cyan focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
              Work Email *
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-electric-cyan focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1">
              Company *
            </label>
            <input
              type="text"
              id="company"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-electric-cyan focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-1">
              Job Title *
            </label>
            <input
              type="text"
              id="role"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-electric-cyan focus:outline-none"
            />
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="newsletter"
              className="mt-1 mr-2"
            />
            <label htmlFor="newsletter" className="text-sm text-gray-600">
              I'd like to receive updates about Horizon products and industry insights
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-electric-cyan text-deep-slate px-6 py-3 rounded-lg font-bold hover:bg-cyan-dark transition-colors"
          >
            Download Now
          </button>

          <p className="text-xs text-gray-500 text-center">
            By downloading, you agree to our Privacy Policy
          </p>
        </form>
      </div>
    </div>
  );
}

export default function WhitepapersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [topicFilter, setTopicFilter] = useState('all');
  const [industryFilter, setIndustryFilter] = useState('all');
  const [selectedWhitepaper, setSelectedWhitepaper] = useState<typeof whitepapers[0] | null>(null);
  const [showModal, setShowModal] = useState(false);

  const filteredWhitepapers = whitepapers.filter((paper) => {
    const matchesSearch = searchQuery === '' ||
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTopic = topicFilter === 'all' ||
      paper.topic.toLowerCase() === topicFilter.toLowerCase();

    const matchesIndustry = industryFilter === 'all' ||
      paper.industry.toLowerCase() === industryFilter.toLowerCase();

    return matchesSearch && matchesTopic && matchesIndustry;
  });

  const handleDownload = (paper: typeof whitepapers[0]) => {
    setSelectedWhitepaper(paper);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-slate to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/resources" className="text-gray-400 hover:text-white transition-colors">
              Resources
            </Link>
            <svg className="w-5 h-5 mx-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-electric-cyan">Whitepapers</span>
          </div>

          <h1 className="text-5xl font-bold mb-6">Technical Whitepapers</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            In-depth guides, technical analysis, and research reports to help you make informed decisions about fuel cell deployment.
          </p>

          <div className="max-w-2xl mt-8">
            <SearchBar onSearch={setSearchQuery} placeholder="Search whitepapers..." />
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-4">
          <FilterBar
            filters={topicFilters}
            activeFilter={topicFilter}
            onFilterChange={setTopicFilter}
            label="Topic"
          />
          <FilterBar
            filters={industryFilters}
            activeFilter={industryFilter}
            onFilterChange={setIndustryFilter}
            label="Industry"
          />
        </div>
      </section>

      {/* Whitepapers Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filteredWhitepapers.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-xl text-gray-600">No whitepapers found</p>
              <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWhitepapers.map((paper, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl shadow-md overflow-hidden hover-lift border border-gray-200"
                >
                  {/* Header with Icon */}
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 text-white">
                    <div className="flex items-start justify-between mb-4">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
                        {paper.pages} pages
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="bg-white/20 px-2 py-1 rounded text-xs">{paper.topic}</span>
                      <span className="bg-white/20 px-2 py-1 rounded text-xs">{paper.industry}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-deep-slate mb-3 group-hover:text-electric-cyan transition-colors">
                      {paper.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {paper.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{paper.date}</span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {paper.downloads}
                      </span>
                    </div>

                    {/* Download Button */}
                    <button
                      onClick={() => handleDownload(paper)}
                      className="w-full bg-electric-cyan text-deep-slate px-6 py-3 rounded-lg font-bold hover:bg-cyan-dark transition-colors flex items-center justify-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download PDF
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Download Modal */}
      <DownloadModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        whitepaper={selectedWhitepaper}
      />
    </div>
  );
}
