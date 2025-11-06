'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FileText, Menu, X } from 'lucide-react';

const documents = [
  {
    id: 'executive-strategy',
    title: 'Executive Strategy Document',
    file: 'EXECUTIVE_STRATEGY_DOCUMENT.md',
    description: 'Strategic overview for development & design teams',
    icon: '📋',
  },
  {
    id: 'competitive-analysis',
    title: 'Bloom Energy Competitive Analysis',
    file: 'bloom-energy-competitive-analysis.md',
    description: 'Deep dive on competitive differentiation strategy',
    icon: '⚡',
  },
  {
    id: 'brand-reference',
    title: 'Brand Quick Reference',
    file: 'brand_quick_reference.md',
    description: 'Quick reference for designers, developers, and marketing',
    icon: '🎨',
  },
  {
    id: 'content-strategy',
    title: 'Content Strategy',
    file: 'content-strategy.md',
    description: 'Comprehensive content strategy document',
    icon: '📝',
  },
  {
    id: 'market-research',
    title: 'Data Center Energy Market Research',
    file: 'data_center_energy_market_research_2024.md',
    description: 'Comprehensive market intelligence for fuel cell energy solutions',
    icon: '📊',
  },
];

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
            <nav className="space-y-2">
              {documents.map((doc) => (
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
