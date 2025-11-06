'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [whyDropdownOpen, setWhyDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const solutions = [
    { name: 'Hyperscale Data Centers', href: '/solutions/hyperscale', icon: '🏢' },
    { name: 'Colocation Facilities', href: '/solutions/colocation', icon: '🔌' },
    { name: 'Edge Data Centers', href: '/solutions/edge', icon: '📡' },
    { name: 'Utility-Scale Energy', href: '/solutions/utility', icon: '⚡' },
  ];

  const whyHorizon = [
    { name: '90-Day Time to Market', href: '/why/time-to-market', icon: '🚀' },
    { name: 'Five 9s Reliability', href: '/why/reliability', icon: '🎯' },
    { name: 'Zero Emissions', href: '/why/environmental', icon: '🌍' },
  ];

  const resources = [
    { name: 'Resource Library', href: '/resources', icon: '📚' },
    { name: 'Blog', href: '/resources/blog', icon: '📝' },
    { name: 'Whitepapers', href: '/resources/whitepapers', icon: '📄' },
    { name: 'Case Studies', href: '/resources/case-studies', icon: '✓' },
    { name: 'Videos', href: '/resources/videos', icon: '🎥' },
  ];

  return (
    <nav className="bg-[#1A2332] border-b border-gray-800 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Horizon branding */}
          <Link href="/" className="flex items-center group">
            <Image
              src="https://omo-oss-image.thefastimg.com/portal-saas/pg2025022817572417030/cms/image/d2f796c2-f163-4702-a7f9-8bc1b3bddbf6.svg"
              alt="Horizon Fuel Cell"
              width={140}
              height={40}
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Solutions Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <button className="text-gray-300 hover:text-white font-medium transition-colors duration-200 flex items-center group">
                Solutions
                <svg
                  className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${solutionsDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu with smooth animation */}
              <div className={`absolute left-0 mt-2 w-64 transition-all duration-300 ${
                solutionsDropdownOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="bg-white rounded-lg shadow-2xl py-2 mt-2 border border-gray-100 overflow-hidden">
                  {solutions.map((solution, index) => (
                    <Link
                      key={solution.href}
                      href={solution.href}
                      className={`group/item block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#00D9E8]/10 hover:to-transparent hover:text-[#00D9E8] transition-all duration-200 transform hover:translate-x-1 ${
                        solutionsDropdownOpen ? 'animate-fade-in' : ''
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="flex items-center">
                        <span className="text-xl mr-3 group-hover/item:scale-110 transition-transform duration-200">
                          {solution.icon}
                        </span>
                        <span className="font-medium">{solution.name}</span>
                      </span>
                      {/* Hover indicator */}
                      <div className="h-0.5 bg-gradient-to-r from-[#00D9E8] to-[#4DE4EF] transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-left mt-1"></div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Why Horizon Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setWhyDropdownOpen(true)}
              onMouseLeave={() => setWhyDropdownOpen(false)}
            >
              <button className="text-gray-300 hover:text-white font-medium transition-colors duration-200 flex items-center group">
                Why Horizon
                <svg
                  className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${whyDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute left-0 mt-2 w-64 transition-all duration-300 ${
                whyDropdownOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="bg-white rounded-lg shadow-2xl py-2 mt-2 border border-gray-100 overflow-hidden">
                  {whyHorizon.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`group/item block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#00D9E8]/10 hover:to-transparent hover:text-[#00D9E8] transition-all duration-200 transform hover:translate-x-1 ${
                        whyDropdownOpen ? 'animate-fade-in' : ''
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="flex items-center">
                        <span className="text-xl mr-3 group-hover/item:scale-110 transition-transform duration-200">
                          {item.icon}
                        </span>
                        <span className="font-medium">{item.name}</span>
                      </span>
                      <div className="h-0.5 bg-gradient-to-r from-[#00D9E8] to-[#4DE4EF] transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-left mt-1"></div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setResourcesDropdownOpen(true)}
              onMouseLeave={() => setResourcesDropdownOpen(false)}
            >
              <button className="text-gray-300 hover:text-white font-medium transition-colors duration-200 flex items-center group">
                Resources
                <svg
                  className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${resourcesDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute left-0 mt-2 w-64 transition-all duration-300 ${
                resourcesDropdownOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="bg-white rounded-lg shadow-2xl py-2 mt-2 border border-gray-100 overflow-hidden">
                  {resources.map((resource, index) => (
                    <Link
                      key={resource.href}
                      href={resource.href}
                      className={`group/item block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-[#00D9E8]/10 hover:to-transparent hover:text-[#00D9E8] transition-all duration-200 transform hover:translate-x-1 ${
                        resourcesDropdownOpen ? 'animate-fade-in' : ''
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <span className="flex items-center">
                        <span className="text-xl mr-3 group-hover/item:scale-110 transition-transform duration-200">
                          {resource.icon}
                        </span>
                        <span className="font-medium">{resource.name}</span>
                      </span>
                      <div className="h-0.5 bg-gradient-to-r from-[#00D9E8] to-[#4DE4EF] transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-300 origin-left mt-1"></div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/about" className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D9E8] group-hover:w-full transition-all duration-300"></span>
            </Link>

            <Link href="/contact" className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D9E8] group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* CTA Button with power-up effect */}
            <Link
              href="/calculators/roi"
              className="relative bg-[#00D9E8] text-[#1A2332] px-6 py-2.5 rounded-lg font-semibold overflow-hidden btn-power-up hover-scale-sm group"
            >
              <span className="relative z-10 flex items-center">
                Calculate ROI
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile menu button with animated icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors duration-200 relative w-8 h-8"
            aria-label="Toggle menu"
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6">
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
              }`}></span>
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile menu with slide animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-gray-800">
            <div className="space-y-1">
              {/* Solutions */}
              <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Solutions
              </p>
              {solutions.map((solution, index) => (
                <Link
                  key={solution.href}
                  href={solution.href}
                  className={`group flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 transform ${
                    mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-200">
                    {solution.icon}
                  </span>
                  {solution.name}
                </Link>
              ))}

              {/* Why Horizon */}
              <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mt-4">
                Why Horizon
              </p>
              {whyHorizon.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 transform ${
                    mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(solutions.length + index) * 50}ms` }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </span>
                  {item.name}
                </Link>
              ))}

              {/* Resources */}
              <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mt-4">
                Resources
              </p>
              {resources.map((resource, index) => (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className={`group flex items-center px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 transform ${
                    mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${(solutions.length + whyHorizon.length + index) * 50}ms` }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-200">
                    {resource.icon}
                  </span>
                  {resource.name}
                </Link>
              ))}

              {/* Other Links */}
              <Link
                href="/about"
                className={`block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 ${
                  mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${(solutions.length + whyHorizon.length + resources.length) * 50}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200 ${
                  mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${(solutions.length + whyHorizon.length + resources.length + 1) * 50}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className={`px-4 pt-4 transition-all duration-300 ${
                mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`} style={{ transitionDelay: `${(solutions.length + whyHorizon.length + resources.length + 2) * 50}ms` }}>
                <Link
                  href="/calculators/roi"
                  className="block text-center bg-[#00D9E8] text-[#1A2332] px-6 py-2.5 rounded-lg font-semibold hover:bg-[#00B8C5] transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Calculate ROI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
