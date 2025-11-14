'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function FinalCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332]/95 to-[#1A2332]/90 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=800&fit=crop"
          alt="Horizon fuel cell technology powering critical infrastructure with clean energy"
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 gradient-mesh z-20" />
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Main Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Power Your Future?
          </h2>

          <p className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto mb-12">
            Join the data center operators who are deploying faster, saving more, and eliminating emissions with Horizon fuel cells.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              href="/contact"
              className="group px-8 py-5 bg-[#00D9E8] text-[#1A2332] text-lg font-bold rounded-lg hover:bg-[#00B8C5] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 min-w-[240px]"
            >
              Get Started Today
              <svg
                className="inline-block w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>

            <Link
              href="/resources/whitepapers"
              className="px-8 py-5 bg-white/10 text-white text-lg font-bold rounded-lg backdrop-blur-md border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 min-w-[240px]"
            >
              Get Deployment Guide
            </Link>
          </div>

          {/* Contact Options */}
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className={`bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-3xl mb-3">📞</div>
              <div className="text-sm text-gray-100 mb-2">Call Us</div>
              <div className="text-lg font-bold text-white">1-800-HORIZON</div>
            </div>

            <div className={`bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-3xl mb-3">✉️</div>
              <div className="text-sm text-gray-100 mb-2">Email Us</div>
              <div className="text-lg font-bold text-white">sales@horizon.com</div>
            </div>

            <div className={`bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="text-3xl mb-3">💬</div>
              <div className="text-sm text-gray-100 mb-2">Live Chat</div>
              <div className="text-lg font-bold text-white">Available 24/7</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-30 mt-20 border-t border-white/10 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company */}
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-100 text-sm">
                <li><Link href="/about" className="hover:text-[#00D9E8] transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-[#00D9E8] transition-colors">Careers</Link></li>
                <li><Link href="/resources/blog" className="hover:text-[#00D9E8] transition-colors">News</Link></li>
                <li><Link href="/contact" className="hover:text-[#00D9E8] transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-white font-bold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-100 text-sm">
                <li><Link href="/solutions/hyperscale" className="hover:text-[#00D9E8] transition-colors">Hyperscale Data Centers</Link></li>
                <li><Link href="/solutions/colocation" className="hover:text-[#00D9E8] transition-colors">Colocation</Link></li>
                <li><Link href="/solutions/edge" className="hover:text-[#00D9E8] transition-colors">Edge Computing</Link></li>
                <li><Link href="/solutions/utility" className="hover:text-[#00D9E8] transition-colors">Utility-Scale Energy</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-100 text-sm">
                <li><Link href="/resources/case-studies" className="hover:text-[#00D9E8] transition-colors">Case Studies</Link></li>
                <li><Link href="/resources/whitepapers" className="hover:text-[#00D9E8] transition-colors">White Papers</Link></li>
                <li><Link href="/resources" className="hover:text-[#00D9E8] transition-colors">Documentation</Link></li>
                <li><Link href="/resources/videos" className="hover:text-[#00D9E8] transition-colors">Videos</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-100 text-sm">
                <li><Link href="/contact" className="hover:text-[#00D9E8] transition-colors">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-[#00D9E8] transition-colors">Service Status</Link></li>
                <li><Link href="/resources" className="hover:text-[#00D9E8] transition-colors">Training</Link></li>
                <li><Link href="/contact" className="hover:text-[#00D9E8] transition-colors">Partners</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 pb-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-100">
              <div className="mb-4 md:mb-0">
                <Image
                  src="https://omo-oss-image.thefastimg.com/portal-saas/pg2025022817572417030/cms/image/d2f796c2-f163-4702-a7f9-8bc1b3bddbf6.svg"
                  alt="Horizon Fuel Cell North America logo"
                  width={120}
                  height={36}
                  className="h-8 w-auto"
                  style={{ minWidth: '120px' }}
                  unoptimized
                />
              </div>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/privacy" className="hover:text-[#00D9E8] transition-colors">Privacy Policy</Link>
                <span>•</span>
                <Link href="/terms" className="hover:text-[#00D9E8] transition-colors">Terms of Service</Link>
                <span>•</span>
                <Link href="/privacy" className="hover:text-[#00D9E8] transition-colors">Cookie Policy</Link>
              </div>
              <div>
                &copy; 2025 Horizon Fuel Cell North America
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
