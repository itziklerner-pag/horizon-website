'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FileText, Menu, X } from 'lucide-react';

const originalDocuments = [
  {
    id: 'executive-strategy',
    title: 'Executive Strategy Document',
    file: 'EXECUTIVE_STRATEGY_DOCUMENT.md',
    description: 'Strategic overview for development & design teams',
    icon: '📋',
    category: 'original',
  },
  {
    id: 'competitive-analysis',
    title: 'Bloom Energy Competitive Analysis',
    file: 'bloom-energy-competitive-analysis.md',
    description: 'Deep dive on competitive differentiation strategy',
    icon: '⚡',
    category: 'original',
  },
  {
    id: 'brand-reference',
    title: 'Brand Quick Reference',
    file: 'brand_quick_reference.md',
    description: 'Quick reference for designers, developers, and marketing',
    icon: '🎨',
    category: 'original',
  },
  {
    id: 'content-strategy',
    title: 'Content Strategy',
    file: 'content-strategy.md',
    description: 'Comprehensive content strategy document',
    icon: '📝',
    category: 'original',
  },
  {
    id: 'market-research',
    title: 'Data Center Energy Market Research',
    file: 'data_center_energy_market_research_2024.md',
    description: 'Comprehensive market intelligence for fuel cell energy solutions',
    icon: '📊',
    category: 'original',
  },
];

const newStrategyDocuments = [
  {
    id: 'final-implementation-plan',
    title: 'FINAL IMPLEMENTATION PLAN',
    file: 'FINAL_IMPLEMENTATION_PLAN.md',
    description: '48-page execution guide with step-by-step instructions, code examples, and timelines',
    icon: '🚀',
    category: 'new',
    badge: 'READY TO EXECUTE',
  },
  {
    id: 'synthesis',
    title: 'Best-of-Breed Synthesis',
    file: 'SYNTHESIS_BEST_OF_BREED_RECOMMENDATIONS.md',
    description: 'Consolidated findings from all 4 agents with priority matrix',
    icon: '⭐',
    category: 'new',
    badge: 'CRITICAL',
  },
  {
    id: 'executive-strategy-updated',
    title: 'Executive Strategy (Updated)',
    file: 'Executive_Strategy_Updated.md',
    description: 'Updated strategic positioning and market approach',
    icon: '📋',
    category: 'new',
    badge: 'UPDATED',
  },
  {
    id: 'competitive-analysis-updated',
    title: 'Bloom Energy Analysis (Updated)',
    file: 'Bloom_Energy_Competitive_Analysis_Updated.md',
    description: 'Enhanced competitive intelligence and positioning',
    icon: '⚡',
    category: 'new',
    badge: 'UPDATED',
  },
  {
    id: 'market-research-updated',
    title: 'Market Research (Updated)',
    file: 'Data_Center_Energy_Market_Research_Report_Updated.md',
    description: 'Latest market data and opportunity analysis',
    icon: '📊',
    category: 'new',
    badge: 'UPDATED',
  },
];

const agentAnalysisDocuments = [
  {
    id: 'agent-01',
    title: 'Agent 1: Content Strategy Analysis',
    file: 'agent_01_content_strategy_analysis.md',
    description: '59-page analysis of messaging gaps and content recommendations',
    icon: '🤖',
    category: 'agent',
  },
  {
    id: 'agent-02',
    title: 'Agent 2: Competitive Positioning',
    file: 'agent_02_competitive_positioning_analysis.md',
    description: 'Competitive landscape and PEM vs SOFC differentiation',
    icon: '🤖',
    category: 'agent',
  },
  {
    id: 'agent-03',
    title: 'Agent 3: Market & Audience Analysis',
    file: 'agent_03_market_audience_analysis.md',
    description: 'Customer segments, personas, and journey mapping',
    icon: '🤖',
    category: 'agent',
  },
  {
    id: 'agent-04',
    title: 'Agent 4: Technical Implementation',
    file: 'agent_04_technical_implementation_analysis.md',
    description: 'Development roadmap, components, and technical specifications',
    icon: '🤖',
    category: 'agent',
  },
];

const documents = [...newStrategyDocuments, ...agentAnalysisDocuments, ...originalDocuments];

export default function SecretDocsPage() {
  const [selectedDoc, setSelectedDoc] = useState(documents[0]);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const loadDocument = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/docs/${selectedDoc.file}`);
        const text = await response.text();
        setContent(text);
      } catch (error) {
        console.error('Error loading document:', error);
        setContent('# Error Loading Document\n\nCould not load the selected document.');
      } finally {
        setLoading(false);
      }
    };

    loadDocument();
  }, [selectedDoc]);

  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#1A2332] border-b border-[#3D4551]">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-[#3D4551] rounded-lg transition-colors"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center gap-3">
              <FileText className="text-[#00D9E8]" size={28} />
              <div>
                <h1 className="text-xl font-bold">Strategy Documents</h1>
                <p className="text-sm text-gray-400">Horizon Fuel Cell North America</p>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-400">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>Confidential</span>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-80 bg-[#1A2332] border-r border-[#3D4551] transition-transform duration-300 overflow-y-auto`}
          style={{ top: '73px' }}
        >
          <div className="p-6">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">
              Table of Contents
            </h2>
            <nav className="space-y-6">
              {/* NEW STRATEGY UPDATES */}
              <div>
                <div className="flex items-center gap-2 mb-3 px-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-green-500 to-transparent"></div>
                  <span className="text-xs font-bold text-green-400 uppercase tracking-wider flex items-center gap-1">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    NEW STRATEGY UPDATES
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-l from-green-500 to-transparent"></div>
                </div>
                <div className="space-y-2">
                  {newStrategyDocuments.map((doc) => (
                    <button
                      key={doc.id}
                      onClick={() => {
                        setSelectedDoc(doc);
                        if (window.innerWidth < 1024) {
                          setSidebarOpen(false);
                        }
                      }}
                      className={`w-full text-left p-4 rounded-lg transition-all relative overflow-hidden ${
                        selectedDoc.id === doc.id
                          ? 'bg-gradient-to-r from-green-500 to-[#00D9E8] text-white shadow-lg'
                          : 'bg-[#0D1117] hover:bg-[#3D4551] text-white border border-green-500/20'
                      }`}
                    >
                      {doc.badge && (
                        <div className="absolute top-2 right-2">
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                            selectedDoc.id === doc.id
                              ? 'bg-white/20 text-white'
                              : 'bg-green-500/20 text-green-400'
                          }`}>
                            {doc.badge}
                          </span>
                        </div>
                      )}
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{doc.icon}</span>
                        <div className="flex-1 min-w-0 pr-16">
                          <h3 className="font-semibold text-sm mb-1 truncate">{doc.title}</h3>
                          <p
                            className={`text-xs ${
                              selectedDoc.id === doc.id ? 'text-white/80' : 'text-gray-400'
                            }`}
                          >
                            {doc.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* AGENT ANALYSIS REPORTS */}
              <div>
                <div className="flex items-center gap-2 mb-3 px-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-[#00D9E8] to-transparent"></div>
                  <span className="text-xs font-bold text-[#00D9E8] uppercase tracking-wider">
                    Agent Analysis Reports
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-l from-[#00D9E8] to-transparent"></div>
                </div>
                <div className="space-y-2">
                  {agentAnalysisDocuments.map((doc) => (
                    <button
                      key={doc.id}
                      onClick={() => {
                        setSelectedDoc(doc);
                        if (window.innerWidth < 1024) {
                          setSidebarOpen(false);
                        }
                      }}
                      className={`w-full text-left p-4 rounded-lg transition-all ${
                        selectedDoc.id === doc.id
                          ? 'bg-[#00D9E8] text-[#1A2332] shadow-lg'
                          : 'bg-[#0D1117] hover:bg-[#3D4551] text-white'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{doc.icon}</span>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm mb-1 truncate">{doc.title}</h3>
                          <p
                            className={`text-xs ${
                              selectedDoc.id === doc.id ? 'text-[#1A2332]/70' : 'text-gray-400'
                            }`}
                          >
                            {doc.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* ORIGINAL DOCUMENTS */}
              <div>
                <div className="flex items-center gap-2 mb-3 px-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-gray-600 to-transparent"></div>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Original Documents
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-l from-gray-600 to-transparent"></div>
                </div>
                <div className="space-y-2">
                  {originalDocuments.map((doc) => (
                    <button
                      key={doc.id}
                      onClick={() => {
                        setSelectedDoc(doc);
                        if (window.innerWidth < 1024) {
                          setSidebarOpen(false);
                        }
                      }}
                      className={`w-full text-left p-4 rounded-lg transition-all ${
                        selectedDoc.id === doc.id
                          ? 'bg-[#00D9E8] text-[#1A2332] shadow-lg'
                          : 'bg-[#0D1117] hover:bg-[#3D4551] text-white opacity-60 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{doc.icon}</span>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm mb-1 truncate">{doc.title}</h3>
                          <p
                            className={`text-xs ${
                              selectedDoc.id === doc.id ? 'text-[#1A2332]/70' : 'text-gray-400'
                            }`}
                          >
                            {doc.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto" style={{ height: 'calc(100vh - 73px)' }}>
          <div className="max-w-5xl mx-auto px-6 py-12">
            {loading ? (
              <div className="flex items-center justify-center py-24">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-[#00D9E8] border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-gray-400">Loading document...</p>
                </div>
              </div>
            ) : (
              <article className="prose prose-invert prose-lg max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ node, ...props }) => (
                      <h1 className="text-4xl font-bold text-white mb-6 mt-8 pb-4 border-b border-[#3D4551]" {...props} />
                    ),
                    h2: ({ node, ...props }) => (
                      <h2 className="text-3xl font-semibold text-white mb-4 mt-8" {...props} />
                    ),
                    h3: ({ node, ...props }) => (
                      <h3 className="text-2xl font-semibold text-white mb-3 mt-6" {...props} />
                    ),
                    h4: ({ node, ...props }) => (
                      <h4 className="text-xl font-semibold text-white mb-2 mt-4" {...props} />
                    ),
                    p: ({ node, ...props }) => (
                      <p className="text-gray-300 mb-4 leading-relaxed" {...props} />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2" {...props} />
                    ),
                    ol: ({ node, ...props }) => (
                      <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-2" {...props} />
                    ),
                    li: ({ node, ...props }) => (
                      <li className="text-gray-300 ml-4" {...props} />
                    ),
                    a: ({ node, ...props }) => (
                      <a className="text-[#00D9E8] hover:underline" {...props} />
                    ),
                    blockquote: ({ node, ...props }) => (
                      <blockquote className="border-l-4 border-[#00D9E8] pl-4 italic text-gray-400 my-4" {...props} />
                    ),
                    code: ({ node, inline, ...props }: any) =>
                      inline ? (
                        <code className="bg-[#1A2332] text-[#00D9E8] px-2 py-1 rounded text-sm" {...props} />
                      ) : (
                        <code className="block bg-[#1A2332] text-gray-300 p-4 rounded-lg overflow-x-auto my-4" {...props} />
                      ),
                    pre: ({ node, ...props }) => (
                      <pre className="bg-[#1A2332] rounded-lg overflow-hidden my-4" {...props} />
                    ),
                    table: ({ node, ...props }) => (
                      <div className="overflow-x-auto my-6">
                        <table className="min-w-full border border-[#3D4551]" {...props} />
                      </div>
                    ),
                    thead: ({ node, ...props }) => (
                      <thead className="bg-[#1A2332]" {...props} />
                    ),
                    th: ({ node, ...props }) => (
                      <th className="border border-[#3D4551] px-4 py-2 text-left font-semibold text-white" {...props} />
                    ),
                    td: ({ node, ...props }) => (
                      <td className="border border-[#3D4551] px-4 py-2 text-gray-300" {...props} />
                    ),
                    hr: ({ node, ...props }) => (
                      <hr className="border-[#3D4551] my-8" {...props} />
                    ),
                    strong: ({ node, ...props }) => (
                      <strong className="font-bold text-white" {...props} />
                    ),
                    em: ({ node, ...props }) => (
                      <em className="italic text-gray-200" {...props} />
                    ),
                  }}
                >
                  {content}
                </ReactMarkdown>
              </article>
            )}
          </div>
        </main>
      </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          style={{ top: '73px' }}
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
