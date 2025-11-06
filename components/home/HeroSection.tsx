'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSeeHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332]/95 via-[#1A2332]/90 to-[#1A2332]/80 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop"
          alt="Horizon fuel cell system powering modern hyperscale data center with rows of servers"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
        />
        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 gradient-mesh-animated z-20" />
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          {/* Logo with bounce-in animation */}
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <div className="animate-float-slow inline-block">
              <Image
                src="https://omo-oss-image.thefastimg.com/portal-saas/pg2025022817572417030/cms/image/d2f796c2-f163-4702-a7f9-8bc1b3bddbf6.svg"
                alt="Horizon Fuel Cell North America logo"
                width={200}
                height={60}
                className="mx-auto w-auto"
                style={{ minWidth: '120px', height: 'auto' }}
                priority
              />
            </div>
          </div>

          {/* Main Headline with Kinetic Typography */}
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            From PO to Power-On in{' '}
            <span className="text-gradient-animated inline-block relative">
              90 Days
              <span className="absolute -inset-1 bg-[#00D9E8] opacity-20 blur-xl animate-pulse"></span>
            </span>
          </h1>

          {/* Subheadline with stagger effect */}
          <p className={`text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Eliminate the 18-48 month grid connection bottleneck. Deploy zero-emission fuel cell power with{' '}
            <span className="text-[#00D9E8] font-semibold">99.999% uptime</span>.
            <br className="hidden sm:block" />
            No grid delays. No diesel backup. Just reliable, clean energy.
          </p>

          {/* CTA Buttons with power-up effect */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Link
              href="/calculators/roi"
              className="group relative px-8 py-4 bg-[#00D9E8] text-[#1A2332] font-semibold rounded-lg overflow-hidden min-w-[200px] btn-power-up hover-scale-sm"
            >
              <span className="relative z-10">Power Your Facility</span>
              {/* Animated gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D9E8] via-[#4DE4EF] to-[#00D9E8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient" />
            </Link>

            <button
              onClick={handleSeeHowItWorks}
              className="group relative px-8 py-4 bg-white/10 text-white font-semibold rounded-lg backdrop-blur-md border-2 border-white/20 hover:border-[#00D9E8] transition-all duration-300 min-w-[200px] hover-lift"
            >
              <span className="flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                See How It Works
              </span>
            </button>
          </div>

          {/* Key Stats - Inline with stagger animation */}
          <div className={`mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="text-center group hover-lift">
              <div className="relative inline-block">
                <div className="text-4xl sm:text-5xl font-bold text-[#00D9E8] font-mono group-hover:scale-110 transition-transform duration-300">
                  90
                </div>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-[#00D9E8] opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-300"></div>
              </div>
              <div className="text-sm sm:text-base text-gray-100 mt-2">Days to Deploy</div>
              <div className="text-xs text-gray-300 mt-1">vs 18-48 month grid delays</div>
            </div>

            <div className="text-center group hover-lift">
              <div className="relative inline-block">
                <div className="text-4xl sm:text-5xl font-bold text-[#00D9E8] font-mono group-hover:scale-110 transition-transform duration-300">
                  99.999%
                </div>
                <div className="absolute inset-0 bg-[#00D9E8] opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-300"></div>
              </div>
              <div className="text-sm sm:text-base text-gray-100 mt-2">Uptime Guarantee</div>
            </div>

            <div className="text-center group hover-lift">
              <div className="relative inline-block">
                <div className="text-4xl sm:text-5xl font-bold text-[#00D9E8] font-mono group-hover:scale-110 transition-transform duration-300">
                  0
                </div>
                <div className="absolute inset-0 bg-[#00D9E8] opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-300"></div>
              </div>
              <div className="text-sm sm:text-base text-gray-100 mt-2">Carbon Emissions</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator with smooth bounce */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce cursor-pointer hover:text-[#00D9E8] transition-colors duration-300">
        <svg
          className="w-6 h-6 text-white/60"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
