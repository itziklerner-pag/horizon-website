'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export function ValueProposition() {
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

  const values = [
    {
      icon: '🚀',
      title: '4-Month Deployment',
      description: 'Pre-engineered systems ship and install in weeks. Eliminate 18-48 month grid delays and start generating revenue immediately.',
      stats: ['Plug-and-play design', 'Modular scaling', 'Pre-certified'],
      gradient: 'from-purple-500 to-pink-500',
      href: '/why/time-to-market',
    },
    {
      icon: '🎯',
      title: 'Five 9s Reliability',
      description: '99.999% uptime with built-in redundancy. Proven across 50M+ operating hours without catastrophic failure.',
      stats: ['<5 min downtime/year', 'N+1 redundancy', 'Hot-swappable'],
      gradient: 'from-blue-500 to-cyan-500',
      href: '/why/reliability',
    },
    {
      icon: '🌍',
      title: 'Zero Emissions',
      description: 'Pure hydrogen fuel cells produce only electricity and water. Renewable hydrogen pathway to 100% carbon-free operations.',
      stats: ['0g CO₂', 'Silent operation', 'CARB compliant'],
      gradient: 'from-green-500 to-emerald-500',
      href: '/why/environmental',
    },
    {
      icon: '💰',
      title: 'Lower TCO',
      description: '25-35% lower total cost vs diesel+grid. At scale, operational costs target sub 10 cents per kWh, similar to lower-end grid costs.',
      stats: ['No demand charges', '20-year lifespan', 'Tax incentives'],
      gradient: 'from-orange-500 to-red-500',
      href: '/contact',
    },
    {
      icon: '🤝',
      title: 'Technical Partnership',
      description: 'Expert support from engineering to operations. We handle permitting, installation, commissioning, and ongoing maintenance.',
      stats: ['24/7 monitoring', 'Dedicated support', 'Turnkey solution'],
      gradient: 'from-indigo-500 to-purple-500',
      href: '/resources',
    },
  ];

  return (
    <section ref={sectionRef} id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #00D9E8 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1A2332] mb-4">
            Why <span className="text-gradient-animated">Horizon Fuel Cells</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Purpose-Built for Modern Data Centers
          </p>
        </div>

        {/* Value Grid with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Link
              key={value.title}
              href={value.href}
              className={`group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-[#E5E8EB] hover:border-[#00D9E8] transition-all duration-500 hover:shadow-xl relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{
                transitionDelay: `${index * 150}ms`,
                transform: isVisible ? 'translateY(0)' : 'translateY(32px)'
              }}
            >
              {/* Gradient accent bar - animates on hover */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

              {/* Energy flow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 energy-flow pointer-events-none"></div>

              {/* Icon with scale and rotate on hover */}
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 inline-block">
                  {value.icon}
                </div>

                {/* Title with gradient on hover */}
                <h3 className={`text-2xl font-bold text-[#1A2332] mb-3 group-hover:bg-gradient-to-r ${value.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {value.description}
                </p>

                {/* Stats with stagger animation */}
                <ul className="space-y-2">
                  {value.stats.map((stat, statIndex) => (
                    <li
                      key={stat}
                      className={`flex items-center text-sm text-gray-700 transform transition-all duration-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                      style={{ transitionDelay: `${(index * 150) + (statIndex * 50) + 200}ms` }}
                    >
                      <svg
                        className={`w-5 h-5 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent mr-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}
                        style={{ transitionDelay: `${statIndex * 50}ms` }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-mono">{stat}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Arrow with smooth transition */}
                <div className="mt-6 flex items-center font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                  <span className={`bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}>
                    Learn more
                  </span>
                  <svg
                    className={`w-5 h-5 ml-2 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}
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
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500 pointer-events-none`}></div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA with power-up effect */}
        <div className={`mt-16 text-center transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <Link
            href="/solutions/hyperscale"
            className="relative inline-flex items-center justify-center px-8 py-4 bg-[#1A2332] text-white font-semibold rounded-lg overflow-hidden btn-power-up hover-scale-sm group"
          >
            <span className="relative z-10 flex items-center justify-center">
              Compare Solutions
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            {/* Gradient sweep on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1A2332] via-[#00D9E8] to-[#1A2332] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}
