'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SearchBar from '@/components/resources/SearchBar';
import FilterBar from '@/components/resources/FilterBar';
import ResourceCard from '@/components/resources/ResourceCard';
import Pagination from '@/components/resources/Pagination';

const categoryFilters = [
  { label: 'All Posts', value: 'all' },
  { label: 'Industry Trends', value: 'industry' },
  { label: 'Technical Education', value: 'technical' },
  { label: 'Case Studies', value: 'case-studies' },
  { label: 'Sustainability', value: 'sustainability' },
  { label: 'Company News', value: 'news' },
];

// Mock blog data - 25% Industry, 25% Technical, 20% Case Studies, 15% Sustainability, 15% News
const blogPosts = [
  {
    title: 'The Future of Data Center Power: Why Fuel Cells are Gaining Momentum',
    description: 'Explore the market trends driving fuel cell adoption in the data center industry, from regulatory pressures to economic incentives and grid constraints.',
    category: 'Industry trends',
    author: 'Sarah Chen',
    date: 'Nov 5, 2025',
    readTime: '6 min read',
    href: '/resources/blog/future-data-center-power',
  },
  {
    title: 'Understanding PEM Fuel Cell Technology: A Technical Primer',
    description: 'Deep dive into Proton Exchange Membrane fuel cells, covering electrochemistry fundamentals, system architecture, and performance characteristics.',
    category: 'Technical education',
    author: 'Dr. Michael Torres',
    date: 'Nov 3, 2025',
    readTime: '12 min read',
    href: '/resources/blog/pem-fuel-cell-primer',
  },
  {
    title: 'EdgeTech Solutions: From Grid Dependence to Energy Independence',
    description: 'How a 2MW edge deployment achieved complete grid independence while maintaining 99.99% uptime and reducing operational costs.',
    category: 'Case studies',
    author: 'Jennifer Park',
    date: 'Nov 1, 2025',
    readTime: '8 min read',
    href: '/resources/blog/edgetech-case-study',
  },
  {
    title: 'Hydrogen Economy Update: Production, Storage, and Distribution',
    description: 'Current state of hydrogen infrastructure, green hydrogen production methods, and the path to cost parity with traditional fuels.',
    category: 'Industry trends',
    author: 'David Kumar',
    date: 'Oct 28, 2025',
    readTime: '10 min read',
    href: '/resources/blog/hydrogen-economy-update',
  },
  {
    title: 'Carbon Accounting for Fuel Cell Deployments: Methodology and Tools',
    description: 'Learn how to accurately measure, report, and verify carbon reductions from fuel cell power systems for ESG reporting and compliance.',
    category: 'Sustainability',
    author: 'Emily Watson',
    date: 'Oct 25, 2025',
    readTime: '7 min read',
    href: '/resources/blog/carbon-accounting',
  },
  {
    title: 'Horizon Announces 500MW Deployment Partnership with CloudNative Inc.',
    description: 'Strategic partnership will bring zero-emission power to CloudNative\'s hyperscale facilities across North America over the next 18 months.',
    category: 'Company news',
    author: 'Horizon PR Team',
    date: 'Oct 22, 2025',
    readTime: '4 min read',
    href: '/resources/blog/cloudnative-partnership',
  },
  {
    title: 'Predictive Maintenance: AI-Powered Monitoring for Fuel Cell Systems',
    description: 'How machine learning algorithms analyze sensor data to predict maintenance needs, prevent failures, and optimize performance.',
    category: 'Technical education',
    author: 'Dr. Michael Torres',
    date: 'Oct 20, 2025',
    readTime: '9 min read',
    href: '/resources/blog/predictive-maintenance',
  },
  {
    title: 'Grid Independence vs. Grid Integration: Choosing the Right Strategy',
    description: 'Compare deployment models, use cases, and economic considerations for standalone and grid-connected fuel cell systems.',
    category: 'Industry trends',
    author: 'Sarah Chen',
    date: 'Oct 18, 2025',
    readTime: '8 min read',
    href: '/resources/blog/grid-strategies',
  },
  {
    title: 'Zero-Emission Compliance: Navigating State and Federal Regulations',
    description: 'A comprehensive guide to clean energy mandates, renewable energy credits, and compliance strategies across different jurisdictions.',
    category: 'Sustainability',
    author: 'Emily Watson',
    date: 'Oct 15, 2025',
    readTime: '11 min read',
    href: '/resources/blog/emission-compliance',
  },
  {
    title: 'Thermal Management in Fuel Cell Systems: Best Practices',
    description: 'Optimize cooling systems, manage waste heat recovery, and maintain optimal operating temperatures for maximum efficiency.',
    category: 'Technical education',
    author: 'Dr. Michael Torres',
    date: 'Oct 12, 2025',
    readTime: '10 min read',
    href: '/resources/blog/thermal-management',
  },
  {
    title: 'MetroHost Data Centers: 35% Cost Reduction in Year One',
    description: 'Detailed analysis of how MetroHost achieved significant cost savings while improving reliability across their colocation portfolio.',
    category: 'Case studies',
    author: 'Jennifer Park',
    date: 'Oct 10, 2025',
    readTime: '7 min read',
    href: '/resources/blog/metrohost-case-study',
  },
  {
    title: 'Horizon Wins "Innovation of the Year" Award at Data Center Summit',
    description: 'Recognition for our 90-day deployment methodology and contributions to sustainable data center infrastructure.',
    category: 'Company news',
    author: 'Horizon PR Team',
    date: 'Oct 8, 2025',
    readTime: '3 min read',
    href: '/resources/blog/innovation-award',
  },
];

const popularPosts = [
  { title: 'The Future of Data Center Power', views: '12.5K', href: '/resources/blog/future-data-center-power' },
  { title: 'PEM Fuel Cell Technology Primer', views: '9.8K', href: '/resources/blog/pem-fuel-cell-primer' },
  { title: 'Carbon Accounting Methodology', views: '7.2K', href: '/resources/blog/carbon-accounting' },
  { title: 'Grid Independence Strategies', views: '6.9K', href: '/resources/blog/grid-strategies' },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(blogPosts.length / itemsPerPage);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter = activeFilter === 'all' ||
      (activeFilter === 'industry' && post.category === 'Industry trends') ||
      (activeFilter === 'technical' && post.category === 'Technical education') ||
      (activeFilter === 'case-studies' && post.category === 'Case studies') ||
      (activeFilter === 'sustainability' && post.category === 'Sustainability') ||
      (activeFilter === 'news' && post.category === 'Company news');

    return matchesSearch && matchesFilter;
  });

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

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
            <span className="text-electric-cyan">Blog</span>
          </div>

          <h1 className="text-5xl font-bold mb-6">Blog</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Insights, technical deep-dives, and industry analysis from Horizon's team of fuel cell experts and partners.
          </p>

          <div className="max-w-2xl mt-8">
            <SearchBar onSearch={handleSearch} placeholder="Search blog posts..." />
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FilterBar
            filters={categoryFilters}
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
            label="Category"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              {paginatedPosts.length === 0 ? (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xl text-gray-600">No blog posts found</p>
                  <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {paginatedPosts.map((post, index) => (
                      <ResourceCard key={index} {...post} type="blog" />
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={setCurrentPage}
                    />
                  )}
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Popular Posts */}
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-deep-slate mb-4 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-electric-cyan" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    Popular Posts
                  </h3>
                  <div className="space-y-4">
                    {popularPosts.map((post, index) => (
                      <Link
                        key={index}
                        href={post.href}
                        className="block group"
                      >
                        <div className="flex items-start">
                          <span className="text-2xl font-bold text-gray-300 mr-3">{index + 1}</span>
                          <div className="flex-1">
                            <h4 className="font-semibold text-deep-slate group-hover:text-electric-cyan transition-colors text-sm mb-1">
                              {post.title}
                            </h4>
                            <span className="text-xs text-gray-500">{post.views} views</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-electric-cyan to-cyan-light rounded-xl shadow-md p-6 text-deep-slate">
                  <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                  <p className="text-sm mb-4 opacity-90">
                    Get the latest insights delivered to your inbox weekly.
                  </p>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-deep-slate"
                  />
                  <button className="w-full bg-deep-slate text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    Subscribe
                  </button>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-deep-slate mb-4">Categories</h3>
                  <div className="space-y-2">
                    {[
                      { name: 'Industry Trends', count: '25%' },
                      { name: 'Technical Education', count: '25%' },
                      { name: 'Case Studies', count: '20%' },
                      { name: 'Sustainability', count: '15%' },
                      { name: 'Company News', count: '15%' },
                    ].map((category, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                        <span className="text-gray-700">{category.name}</span>
                        <span className="text-sm font-semibold text-electric-cyan">{category.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
