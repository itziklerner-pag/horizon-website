'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SearchBar from '@/components/resources/SearchBar';
import FilterBar from '@/components/resources/FilterBar';
import VideoModal from '@/components/resources/VideoModal';

const categoryFilters = [
  { label: 'All Videos', value: 'all' },
  { label: 'Product Demos', value: 'demos' },
  { label: 'Customer Testimonials', value: 'testimonials' },
  { label: 'Technical Deep-Dives', value: 'technical' },
  { label: 'Industry Insights', value: 'insights' },
];

const videos = [
  {
    title: 'Fuel Cell Technology Deep Dive: PEM Architecture Explained',
    description: 'Comprehensive technical walkthrough of our Proton Exchange Membrane fuel cell architecture, maintenance protocols, and real-world performance data from 500+ deployments.',
    category: 'Technical Deep-Dives',
    duration: '22:15',
    views: '8.4K',
    date: 'Nov 4, 2025',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'technical',
    transcript: 'In this comprehensive technical deep-dive, we explore the fundamental architecture of Proton Exchange Membrane (PEM) fuel cells. Starting with the electrochemistry at the membrane electrode assembly, we discuss how hydrogen ions travel through the polymer electrolyte while electrons flow through an external circuit to generate electricity. We cover stack design, thermal management systems, and the balance of plant components that ensure optimal performance. Real-world data from our fleet of 500+ installations demonstrates the reliability and efficiency of this technology in demanding data center applications.',
  },
  {
    title: 'CloudScale Data Centers: Customer Success Story',
    description: 'Sarah Martinez, VP of Operations at CloudScale, shares how they achieved 99.999% uptime and 35% cost savings with Horizon fuel cells across their 5MW edge deployment.',
    category: 'Customer Testimonials',
    duration: '8:42',
    views: '12.1K',
    date: 'Nov 1, 2025',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'testimonial',
    transcript: 'We were facing serious reliability challenges with our edge infrastructure. Grid outages were causing 6-8 disruptions per year, and our diesel backup systems were costing us over $400K annually in maintenance alone. When we learned about Horizon\'s fuel cell solution, we were initially skeptical - but the team delivered on every promise. The 87-day deployment was seamless, and we\'ve had zero unplanned outages in the first 18 months. Our costs are down 35%, we\'re fully compliant with California\'s zero-emission mandates, and most importantly, our customer SLA performance improved from 99.9% to 99.999%. Horizon didn\'t just solve our power problem - they gave us a competitive advantage.',
  },
  {
    title: '90-Day Deployment: Site Preparation to Commissioning',
    description: 'Step-by-step walkthrough of our rapid deployment methodology, from initial site assessment through final commissioning and handoff. See how we achieve industry-leading installation speeds.',
    category: 'Product Demos',
    duration: '15:30',
    views: '6.8K',
    date: 'Oct 28, 2025',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'demo',
    transcript: 'Our 90-day deployment framework is the result of hundreds of installations and continuous process improvement. It starts with a comprehensive site assessment where we evaluate electrical infrastructure, hydrogen delivery logistics, and environmental factors. Pre-fabricated modules arrive on-site ready for rapid installation, minimizing disruption to your operations. Our phased approach includes parallel system testing while your existing infrastructure remains operational. The final commissioning phase includes extensive performance validation, operator training, and system integration. This proven methodology has enabled us to achieve deployment speeds 3-4 times faster than traditional power infrastructure.',
  },
  {
    title: 'The Future of Data Center Power: 2025 Industry Trends',
    description: 'Expert panel discussion on market forces driving fuel cell adoption including regulatory pressures, economic incentives, grid constraints, and sustainability mandates.',
    category: 'Industry Insights',
    duration: '42:18',
    views: '5.2K',
    date: 'Oct 25, 2025',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'insight',
    transcript: 'The data center power landscape is undergoing a fundamental transformation. Regulatory pressures, particularly in California and New York, are mandating zero-emission power sources. Grid constraints are limiting facility expansion in key markets. At the same time, hyperscale operators are demanding higher reliability than traditional utility power can provide. Our panel of industry experts discusses how these trends are accelerating fuel cell adoption and what it means for the future of data center infrastructure.',
  },
  {
    title: 'Remote Monitoring and Predictive Maintenance Demo',
    description: 'Live demonstration of our AI-powered monitoring platform that predicts maintenance needs, prevents failures, and optimizes performance across distributed deployments.',
    category: 'Product Demos',
    duration: '12:25',
    views: '4.9K',
    date: 'Oct 22, 2025',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'demo',
    transcript: 'Our remote monitoring platform provides real-time visibility into every aspect of fuel cell performance. Machine learning algorithms analyze thousands of sensor data points to detect anomalies before they impact operation. The predictive maintenance engine schedules service visits based on actual component wear rather than arbitrary time intervals, reducing maintenance costs by up to 40%. The dashboard provides instant access to performance metrics, efficiency trends, and carbon accounting data - critical information for both operations teams and sustainability reporting.',
  },
  {
    title: 'MetroEdge CTO Interview: Scaling Edge Infrastructure',
    description: 'Rachel Thompson, CTO of MetroEdge, discusses how standardized fuel cell modules enabled deployment of 15 edge sites in 6 months with autonomous operation.',
    category: 'Customer Testimonials',
    duration: '10:15',
    views: '7.3K',
    date: 'Oct 18, 2025',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'testimonial',
    transcript: 'We had an aggressive expansion timeline - 15 new edge sites in 6 months across remote locations with limited grid infrastructure. Traditional power solutions would have made this impossible. Horizon\'s modular approach was game-changing. Every 500kW module is identical, which simplified procurement, installation, and operations. The remote monitoring means we don\'t need on-site staff for routine operations. We deployed all 15 sites on schedule, and our TCO is 42% lower than diesel plus battery alternatives. The autonomous operation gives us confidence that these systems will perform reliably without constant babysitting.',
  },
  {
    title: 'Hydrogen Safety and Handling: Best Practices',
    description: 'Comprehensive safety training covering hydrogen properties, storage systems, leak detection, emergency procedures, and regulatory compliance for fuel cell operations.',
    category: 'Technical Deep-Dives',
    duration: '28:45',
    views: '3.8K',
    date: 'Oct 15, 2025',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'technical',
    transcript: 'Hydrogen safety is paramount in fuel cell operations. This comprehensive training covers the physical and chemical properties of hydrogen, proper storage and handling procedures, and multi-layered safety systems. We discuss leak detection technologies, ventilation requirements, and emergency response protocols. Our safety record across 500+ installations demonstrates that with proper engineering controls and operator training, hydrogen can be managed as safely as any other industrial fuel. We cover regulatory frameworks including NFPA 2, building codes, and insurance requirements.',
  },
  {
    title: 'TCO Calculator Walkthrough: Fuel Cells vs. Traditional Power',
    description: 'Detailed demonstration of our Total Cost of Ownership calculator, comparing fuel cells against diesel generators and grid power across 10-year lifecycle.',
    category: 'Product Demos',
    duration: '18:20',
    views: '9.1K',
    date: 'Oct 12, 2025',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'demo',
    transcript: 'Understanding the true cost of power infrastructure requires looking beyond initial capital investment. Our TCO calculator incorporates capital costs, fuel expenses, maintenance, unplanned downtime costs, and carbon pricing. We walk through real-world scenarios for hyperscale, colocation, and edge deployments. The analysis reveals that while fuel cells may have higher upfront costs, the combination of lower fuel costs, reduced maintenance, and superior reliability typically generates positive ROI within 3-5 years. Carbon pricing scenarios and renewable energy credits can further improve the financial case.',
  },
  {
    title: 'Grid Services and Revenue Stacking Opportunities',
    description: 'How fuel cell installations can participate in ancillary services markets, demand response programs, and capacity markets to generate additional revenue streams.',
    category: 'Industry Insights',
    duration: '25:35',
    views: '4.2K',
    date: 'Oct 8, 2025',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'insight',
    transcript: 'Fuel cells offer capabilities beyond baseload power generation. Their fast response times and load-following ability make them ideal for grid services. We explore how data centers can participate in frequency regulation markets, provide spinning reserves, and monetize demand response capabilities. Revenue stacking - combining multiple value streams - can significantly improve project economics. We present case studies showing how some deployments generate $50-100K annually in ancillary services revenue on top of their primary power function.',
  },
  {
    title: 'NorthStar Hyperscale: 50MW Grid Independence Journey',
    description: 'David Liu, Chief Infrastructure Officer at NorthStar, shares the story of achieving complete grid independence with North America\'s largest fuel cell deployment.',
    category: 'Customer Testimonials',
    duration: '14:52',
    views: '11.6K',
    date: 'Oct 5, 2025',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'testimonial',
    transcript: 'Grid constraints were limiting our growth. Power purchase agreements were expiring with projected rate increases of 300%. We needed a solution that would give us energy independence and cost certainty. The 50MW fuel cell deployment with on-site hydrogen generation was ambitious, but Horizon executed flawlessly. We achieved complete grid independence, costs are 38% below projected grid rates, and we can now expand by 200MW without utility constraints. Our PUE of 1.08 is industry-leading. This is absolutely the future of hyperscale power.',
  },
  {
    title: 'Carbon Accounting and ESG Reporting for Fuel Cell Systems',
    description: 'Methodology for measuring, reporting, and verifying carbon reductions from fuel cell deployments for ESG reporting, sustainability goals, and regulatory compliance.',
    category: 'Technical Deep-Dives',
    duration: '19:40',
    views: '3.5K',
    date: 'Oct 1, 2025',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'technical',
    transcript: 'Accurate carbon accounting is essential for ESG reporting and sustainability goal tracking. We cover Scope 1, 2, and 3 emissions calculations specific to fuel cell systems. Hydrogen sourcing methodology significantly impacts carbon intensity - we compare fossil-based, renewable, and green hydrogen options. The presentation includes reporting frameworks from GHG Protocol, CDP, and TCFD. Our carbon dashboard provides real-time emissions tracking and automated report generation, simplifying compliance with increasing sustainability disclosure requirements.',
  },
  {
    title: 'Installation Time-Lapse: 3MW System in 92 Days',
    description: 'Compressed time-lapse footage showing complete installation of a 3MW fuel cell system from site preparation through commissioning and final acceptance.',
    category: 'Product Demos',
    duration: '6:30',
    views: '15.8K',
    date: 'Sep 28, 2025',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'demo',
    transcript: 'Watch 92 days of installation compressed into 6 minutes. This time-lapse documents every phase of a 3MW deployment for a colocation facility including foundation work, module delivery and positioning, hydrogen infrastructure installation, electrical integration, and system commissioning. Notice the parallel work streams and minimal disruption to the operating facility. The pre-fabricated modular design enables rapid installation with consistent quality. Final acceptance testing validates all performance specifications before customer handoff.',
  },
];

interface SelectedVideo {
  title: string;
  videoUrl: string;
  transcript?: string;
}

export default function VideosPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<SelectedVideo | null>(null);
  const [showModal, setShowModal] = useState(false);

  const filteredVideos = videos.filter((video) => {
    const matchesSearch = searchQuery === '' ||
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = categoryFilter === 'all' ||
      (categoryFilter === 'demos' && video.category === 'Product Demos') ||
      (categoryFilter === 'testimonials' && video.category === 'Customer Testimonials') ||
      (categoryFilter === 'technical' && video.category === 'Technical Deep-Dives') ||
      (categoryFilter === 'insights' && video.category === 'Industry Insights');

    return matchesSearch && matchesCategory;
  });

  const handleVideoClick = (video: typeof videos[0]) => {
    setSelectedVideo({
      title: video.title,
      videoUrl: video.videoUrl,
      transcript: video.transcript,
    });
    setShowModal(true);
  };

  const getThumbnailColor = (type: string) => {
    switch (type) {
      case 'demo': return 'from-blue-500 to-blue-600';
      case 'testimonial': return 'from-green-500 to-green-600';
      case 'technical': return 'from-purple-500 to-purple-600';
      case 'insight': return 'from-orange-500 to-orange-600';
      default: return 'from-gray-500 to-gray-600';
    }
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
            <span className="text-electric-cyan">Videos</span>
          </div>

          <h1 className="text-5xl font-bold mb-6">Video Library</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Product demonstrations, customer testimonials, technical tutorials, and industry insights from Horizon's team of experts.
          </p>

          <div className="max-w-2xl mt-8">
            <SearchBar onSearch={setSearchQuery} placeholder="Search videos..." />
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FilterBar
            filters={categoryFilters}
            activeFilter={categoryFilter}
            onFilterChange={setCategoryFilter}
            label="Category"
          />
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filteredVideos.length === 0 ? (
            <div className="text-center py-12">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <p className="text-xl text-gray-600">No videos found</p>
              <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video, index) => (
                <button
                  key={index}
                  onClick={() => handleVideoClick(video)}
                  className="group block bg-white rounded-xl shadow-md overflow-hidden hover-lift border border-gray-200 text-left"
                >
                  {/* Video Thumbnail */}
                  <div className={`relative w-full h-48 bg-gradient-to-br ${getThumbnailColor(video.thumbnail)} overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-mesh opacity-30" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                        <svg className="w-10 h-10 text-electric-cyan ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                      {video.duration}
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-gray-100 text-gray-700">
                      {video.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-deep-slate mb-2 group-hover:text-electric-cyan transition-colors line-clamp-2">
                      {video.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {video.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {video.views} views
                      </span>
                      <span>{video.date}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Playlists */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-deep-slate mb-8">Featured Playlists</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Getting Started', count: 8, icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
              { name: 'Customer Stories', count: 12, icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
              { name: 'Technical Training', count: 15, icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
              { name: 'Industry Trends', count: 10, icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
            ].map((playlist, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 hover-lift cursor-pointer">
                <svg className="w-10 h-10 text-electric-cyan mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={playlist.icon} />
                </svg>
                <h3 className="text-lg font-bold text-deep-slate mb-1">{playlist.name}</h3>
                <p className="text-sm text-gray-600">{playlist.count} videos</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          videoUrl={selectedVideo.videoUrl}
          title={selectedVideo.title}
          transcript={selectedVideo.transcript}
        />
      )}

      <Footer />
    </div>
  );
}
