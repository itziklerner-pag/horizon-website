'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SearchBar from '@/components/resources/SearchBar';
import FilterBar from '@/components/resources/FilterBar';
import ResourceCard from '@/components/resources/ResourceCard';

const topicFilters = [
  { label: 'All Topics', value: 'all' },
  { label: 'Deployment', value: 'deployment' },
  { label: 'Reliability', value: 'reliability' },
  { label: 'Sustainability', value: 'sustainability' },
  { label: 'Cost', value: 'cost' },
];

const featuredResources = [
  {
    type: 'whitepaper' as const,
    title: '90-Day Deployment Framework: A Technical Guide',
    description: 'Learn how Horizon achieves industry-leading deployment speeds with our proven methodology, site preparation checklists, and risk mitigation strategies.',
    category: 'Deployment',
    date: 'October 2025',
    readTime: '15 min read',
    href: '/resources/whitepapers/90-day-deployment',
  },
  {
    type: 'case-study' as const,
    title: 'CloudScale Data Centers: 99.999% Uptime Achievement',
    description: 'How CloudScale achieved five-nines reliability while reducing power costs by 35% across their 5MW edge deployment with Horizon fuel cells.',
    category: 'Reliability',
    date: 'November 2025',
    readTime: '8 min read',
    href: '/resources/case-studies/cloudscale',
  },
  {
    type: 'video' as const,
    title: 'Fuel Cell Technology Deep Dive',
    description: 'A comprehensive technical walkthrough of our PEM fuel cell architecture, maintenance protocols, and real-world performance data.',
    category: 'Technical education',
    date: 'November 2025',
    readTime: '22 min',
    href: '/resources/videos/technical-deep-dive',
  },
];

const categoryCards = [
  {
    title: 'Blog',
    description: 'Industry insights, technical education, and company updates',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    count: '42 articles',
    href: '/resources/blog',
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Whitepapers',
    description: 'In-depth technical guides and industry analysis',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    count: '12 papers',
    href: '/resources/whitepapers',
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Case Studies',
    description: 'Real-world success stories and deployment results',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    count: '18 studies',
    href: '/resources/case-studies',
    color: 'from-green-500 to-green-600',
  },
  {
    title: 'Videos',
    description: 'Product demos, testimonials, and technical tutorials',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    count: '24 videos',
    href: '/resources/videos',
    color: 'from-cyan-500 to-cyan-600',
  },
];

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    console.log('Searching for:', query);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-slate to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 animate-fade-up">
              Resource Library
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-up animation-delay-200">
              Expert insights, technical guides, and real-world success stories to help you make informed decisions about fuel cell power solutions.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mt-8 animate-fade-up animation-delay-400">
            <SearchBar onSearch={handleSearch} placeholder="Search whitepapers, case studies, articles..." />
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FilterBar
            filters={topicFilters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            label="Filter by topic"
          />
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-deep-slate">Featured Resources</h2>
            <div className="h-1 flex-grow ml-8 bg-gradient-to-r from-electric-cyan to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deep-slate mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">
              Explore our comprehensive collection of resources organized by content type
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoryCards.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover-lift border border-gray-200"
              >
                {/* Gradient Header */}
                <div className={`h-32 bg-gradient-to-br ${category.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
                  <div className="relative text-white transform group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-deep-slate mb-2 group-hover:text-electric-cyan transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-500">{category.count}</span>
                    <svg
                      className="w-5 h-5 text-electric-cyan transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-deep-slate to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Custom Insights?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team of experts can provide tailored analysis and recommendations for your specific use case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-electric-cyan text-deep-slate font-bold rounded-xl hover:bg-cyan-light transition-colors"
            >
              Contact Our Experts
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/calculators/roi"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-colors border border-white/20"
            >
              Try ROI Calculator
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
