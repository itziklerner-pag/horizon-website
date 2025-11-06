'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SearchBar from '@/components/resources/SearchBar';
import FilterBar from '@/components/resources/FilterBar';

const industryFilters = [
  { label: 'All Industries', value: 'all' },
  { label: 'Hyperscale', value: 'hyperscale' },
  { label: 'Colocation', value: 'colocation' },
  { label: 'Enterprise', value: 'enterprise' },
  { label: 'Edge', value: 'edge' },
];

const caseStudies = [
  {
    title: 'CloudScale Data Centers: Achieving 99.999% Uptime',
    company: 'CloudScale',
    industry: 'Hyperscale',
    logo: 'CS',
    description: 'How CloudScale achieved five-nines reliability while reducing power costs by 35% across their 5MW edge deployment.',
    metrics: {
      deploymentTime: '87 days',
      uptime: '99.999%',
      costSavings: '35%',
      emissionsReduction: '4,200 tons CO2/year',
    },
    challenges: [
      'Grid unreliability causing 6-8 outages per year',
      'Diesel backup maintenance costs exceeding $400K annually',
      'California zero-emission mandate compliance deadline',
    ],
    solution: '5MW fuel cell installation with hydrogen storage and smart grid integration',
    results: [
      'Zero unplanned outages in first 18 months',
      '35% reduction in total power costs',
      'Full compliance with California regulations',
      'Customer SLA performance improved from 99.9% to 99.999%',
    ],
    testimonial: {
      quote: 'Horizon delivered on every promise. The deployment was seamless, and we\'re now the most reliable edge provider in our market.',
      author: 'Sarah Martinez',
      role: 'VP of Operations, CloudScale',
    },
    href: '/resources/case-studies/cloudscale',
  },
  {
    title: 'DataVault Colocation: Premium Power Premium Pricing',
    company: 'DataVault',
    industry: 'Colocation',
    logo: 'DV',
    description: 'How DataVault differentiated their facility with clean, reliable power and achieved 20% premium pricing.',
    metrics: {
      deploymentTime: '92 days',
      uptime: '99.998%',
      costSavings: '28%',
      emissionsReduction: '2,800 tons CO2/year',
    },
    challenges: [
      'Commoditized colocation market with intense price competition',
      'Customer demands for sustainability reporting',
      'Aging diesel infrastructure requiring $2M replacement',
    ],
    solution: '3MW fuel cell system with customer-facing carbon dashboard',
    results: [
      '20% premium pricing on new contracts',
      '95% customer retention (up from 78%)',
      'Featured in 3 major sustainability reports',
      'Waitlist for available capacity',
    ],
    testimonial: {
      quote: 'The fuel cell installation transformed our business model. We went from competing on price to leading on sustainability.',
      author: 'James Chen',
      role: 'CEO, DataVault Colocation',
    },
    href: '/resources/case-studies/datavault',
  },
  {
    title: 'MetroEdge: Rapid Expansion with Modular Power',
    company: 'MetroEdge',
    industry: 'Edge',
    logo: 'ME',
    description: 'How MetroEdge deployed 15 edge sites in 6 months using Horizon\'s rapid deployment framework.',
    metrics: {
      deploymentTime: '78 days avg',
      uptime: '99.97%',
      costSavings: '42%',
      emissionsReduction: '1,200 tons CO2/year',
    },
    challenges: [
      'Aggressive expansion timeline (15 sites in 6 months)',
      'Remote locations with limited grid infrastructure',
      'Need for autonomous operation with minimal on-site staff',
    ],
    solution: 'Standardized 500kW fuel cell modules with remote monitoring',
    results: [
      'All 15 sites deployed on schedule',
      '42% lower TCO vs. diesel + battery',
      'Zero site visits required for first 6 months',
      'Market-leading edge compute density',
    ],
    testimonial: {
      quote: 'Horizon\'s modular approach was the only way we could have met our expansion targets. The remote monitoring gives us confidence.',
      author: 'Rachel Thompson',
      role: 'CTO, MetroEdge',
    },
    href: '/resources/case-studies/metroedge',
  },
  {
    title: 'TechCorp Enterprise: Data Center Decarbonization',
    company: 'TechCorp',
    industry: 'Enterprise',
    logo: 'TC',
    description: 'Fortune 500 company achieves carbon neutrality goals 3 years early with fuel cell deployment.',
    metrics: {
      deploymentTime: '95 days',
      uptime: '99.995%',
      costSavings: '31%',
      emissionsReduction: '6,500 tons CO2/year',
    },
    challenges: [
      'Board mandate for carbon neutrality by 2028',
      'Existing 8MW data center on aging grid infrastructure',
      'Stakeholder concerns about new technology risks',
    ],
    solution: '8MW fuel cell installation with phased diesel retirement',
    results: [
      'Carbon neutrality achieved in 2025 (3 years early)',
      'Featured in annual sustainability report',
      'Board approved fuel cells for 3 additional facilities',
      'ESG rating improved from B to A-',
    ],
    testimonial: {
      quote: 'This project exceeded our expectations. We got reliability, cost savings, and our sustainability goals in one solution.',
      author: 'Dr. Michael Park',
      role: 'SVP Infrastructure, TechCorp',
    },
    href: '/resources/case-studies/techcorp',
  },
  {
    title: 'NorthStar Hyperscale: 50MW Grid Independence',
    company: 'NorthStar',
    industry: 'Hyperscale',
    logo: 'NS',
    description: 'Hyperscale provider achieves complete grid independence with largest fuel cell deployment in North America.',
    metrics: {
      deploymentTime: '120 days',
      uptime: '99.999%',
      costSavings: '38%',
      emissionsReduction: '42,000 tons CO2/year',
    },
    challenges: [
      'Grid constraints limiting facility expansion',
      'Power purchase agreements expiring with 300% rate increases',
      'Regulatory pressure for zero-emission operation',
    ],
    solution: '50MW fuel cell farm with on-site hydrogen generation',
    results: [
      'Complete grid independence achieved',
      '38% cost reduction vs. projected grid rates',
      '200MW expansion now possible',
      'Industry-leading PUE of 1.08',
    ],
    testimonial: {
      quote: 'Horizon enabled us to break free from grid constraints and control our energy destiny. This is the future of hyperscale power.',
      author: 'David Liu',
      role: 'Chief Infrastructure Officer, NorthStar',
    },
    href: '/resources/case-studies/northstar',
  },
  {
    title: 'SecureData Colocation: Tier IV Certification',
    company: 'SecureData',
    industry: 'Colocation',
    logo: 'SD',
    description: 'First fuel cell-powered facility to achieve Tier IV certification, setting new reliability standards.',
    metrics: {
      deploymentTime: '110 days',
      uptime: '100%',
      costSavings: '29%',
      emissionsReduction: '3,400 tons CO2/year',
    },
    challenges: [
      'Tier IV certification requirements for concurrent maintainability',
      'Financial sector customers requiring highest reliability',
      'Space constraints in urban location',
    ],
    solution: '4MW N+2 redundant fuel cell architecture',
    results: [
      'Tier IV certification achieved',
      'Zero downtime during 18-month certification period',
      '100% contract renewal from financial services clients',
      '45% increase in price per kW',
    ],
    testimonial: {
      quote: 'Achieving Tier IV with fuel cells was groundbreaking. We\'re now the most reliable facility in the region.',
      author: 'Amanda Foster',
      role: 'President, SecureData',
    },
    href: '/resources/case-studies/securedata',
  },
];

export default function CaseStudiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [industryFilter, setIndustryFilter] = useState('all');

  const filteredCaseStudies = caseStudies.filter((study) => {
    const matchesSearch = searchQuery === '' ||
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesIndustry = industryFilter === 'all' ||
      study.industry.toLowerCase() === industryFilter.toLowerCase();

    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

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
            <span className="text-electric-cyan">Case Studies</span>
          </div>

          <h1 className="text-5xl font-bold mb-6">Success Stories</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Real-world deployments, measurable results, and customer testimonials from organizations leading the fuel cell revolution.
          </p>

          <div className="max-w-2xl mt-8">
            <SearchBar onSearch={setSearchQuery} placeholder="Search case studies..." />
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FilterBar
            filters={industryFilters}
            activeFilter={industryFilter}
            onFilterChange={setIndustryFilter}
            label="Industry"
          />
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12 bg-gradient-to-r from-electric-cyan/10 to-cyan-light/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Deployments' },
              { value: '99.98%', label: 'Average Uptime' },
              { value: '32%', label: 'Average Cost Savings' },
              { value: '60K+', label: 'Tons CO2 Reduced Annually' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-electric-cyan mb-2">{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filteredCaseStudies.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-xl text-gray-600">No case studies found</p>
              <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredCaseStudies.map((study, index) => (
                <Link
                  key={index}
                  href={study.href}
                  className="group block bg-white rounded-2xl shadow-lg overflow-hidden hover-lift border border-gray-200"
                >
                  <div className="md:flex">
                    {/* Left Column - Logo & Metrics */}
                    <div className="md:w-1/3 bg-gradient-to-br from-deep-slate to-gray-800 p-8 text-white">
                      {/* Company Logo */}
                      <div className="w-20 h-20 bg-electric-cyan rounded-xl flex items-center justify-center mb-6 text-deep-slate font-bold text-2xl">
                        {study.logo}
                      </div>

                      <h3 className="text-2xl font-bold mb-2">{study.company}</h3>
                      <p className="text-electric-cyan font-semibold mb-6">{study.industry}</p>

                      {/* Key Metrics */}
                      <div className="space-y-4">
                        <div className="border-l-4 border-electric-cyan pl-4">
                          <div className="text-3xl font-bold">{study.metrics.deploymentTime}</div>
                          <div className="text-sm text-gray-300">Deployment Time</div>
                        </div>
                        <div className="border-l-4 border-electric-cyan pl-4">
                          <div className="text-3xl font-bold">{study.metrics.uptime}</div>
                          <div className="text-sm text-gray-300">Uptime Achieved</div>
                        </div>
                        <div className="border-l-4 border-electric-cyan pl-4">
                          <div className="text-3xl font-bold">{study.metrics.costSavings}</div>
                          <div className="text-sm text-gray-300">Cost Savings</div>
                        </div>
                        <div className="border-l-4 border-electric-cyan pl-4">
                          <div className="text-3xl font-bold text-sm">{study.metrics.emissionsReduction}</div>
                          <div className="text-sm text-gray-300">Emissions Reduction</div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="md:w-2/3 p-8">
                      <h2 className="text-2xl font-bold text-deep-slate mb-4 group-hover:text-electric-cyan transition-colors">
                        {study.title}
                      </h2>

                      <p className="text-gray-600 mb-6 text-lg">
                        {study.description}
                      </p>

                      {/* Testimonial */}
                      <div className="bg-gray-50 rounded-xl p-6 mb-6 border-l-4 border-electric-cyan">
                        <p className="text-gray-700 italic mb-4">"{study.testimonial.quote}"</p>
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-electric-cyan/20 rounded-full flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-electric-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-semibold text-deep-slate">{study.testimonial.author}</div>
                            <div className="text-sm text-gray-600">{study.testimonial.role}</div>
                          </div>
                        </div>
                      </div>

                      {/* Read More Button */}
                      <div className="flex items-center text-electric-cyan font-semibold group-hover:translate-x-2 transition-transform">
                        Read Full Case Study
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-deep-slate to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of organizations achieving reliability, sustainability, and cost savings with Horizon fuel cells.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-electric-cyan text-deep-slate font-bold rounded-xl hover:bg-cyan-light transition-colors"
          >
            Schedule a Consultation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
