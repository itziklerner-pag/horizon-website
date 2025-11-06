'use client';

import Link from 'next/link';
import Image from 'next/image';

interface ResourceCardProps {
  title: string;
  description: string;
  category: string;
  image?: string;
  date?: string;
  author?: string;
  readTime?: string;
  href: string;
  type: 'blog' | 'whitepaper' | 'case-study' | 'video';
}

export default function ResourceCard({
  title,
  description,
  category,
  image,
  date,
  author,
  readTime,
  href,
  type,
}: ResourceCardProps) {
  const categoryColors: Record<string, string> = {
    'Industry trends': 'bg-blue-100 text-blue-700',
    'Technical education': 'bg-purple-100 text-purple-700',
    'Case studies': 'bg-green-100 text-green-700',
    'Sustainability': 'bg-emerald-100 text-emerald-700',
    'Company news': 'bg-cyan-100 text-cyan-700',
    'Deployment': 'bg-orange-100 text-orange-700',
    'Reliability': 'bg-red-100 text-red-700',
    'Cost': 'bg-yellow-100 text-yellow-700',
  };

  const defaultColor = 'bg-gray-100 text-gray-700';

  return (
    <Link
      href={href}
      className="group block bg-white rounded-xl shadow-md overflow-hidden hover-lift border border-gray-200"
    >
      {/* Image */}
      {image && (
        <div className="relative w-full h-48 bg-gradient-to-br from-deep-slate to-gray-700 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-electric-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {type === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-electric-cyan ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${categoryColors[category] || defaultColor}`}>
          {category}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold text-deep-slate mb-2 group-hover:text-electric-cyan transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            {author && (
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {author}
              </span>
            )}
            {date && <span>{date}</span>}
          </div>
          {readTime && (
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {readTime}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
