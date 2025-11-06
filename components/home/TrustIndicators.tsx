'use client';

import { useEffect, useRef, useState } from 'react';

// Animated counter hook
function useCountUp(end: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, shouldStart]);

  return count;
}

export function TrustIndicators() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Animated counters
  const operatingHours = useCountUp(50, 2000, isVisible);
  const deployedCapacity = useCountUp(500, 2000, isVisible);

  const metrics = [
    { value: operatingHours, suffix: 'M+', label: 'Operating Hours', icon: '⚡', color: 'from-yellow-400 to-orange-500' },
    { value: '99.999', suffix: '%', label: 'Uptime Record', icon: '✓', color: 'from-green-400 to-emerald-500', fixed: true },
    { value: deployedCapacity, suffix: '+ MW', label: 'Deployed Capacity', icon: '⚙️', color: 'from-blue-400 to-cyan-500' },
    { value: '0', suffix: 'g CO₂', label: 'Emissions', icon: '🌱', color: 'from-teal-400 to-green-500', fixed: true },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badge */}
        <div className="text-center mb-12">
          <p className={`text-sm uppercase tracking-wider text-gray-500 font-semibold mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Trusted by Industry Leaders
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5E8EB] hover:border-[#00D9E8] hover-lift-lg relative overflow-hidden">
                  {/* Energy flow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 energy-flow"></div>

                  {/* Icon with bounce animation */}
                  <div className={`text-4xl mb-3 ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`} style={{ animationDelay: `${index * 150}ms` }}>
                    {metric.icon}
                  </div>

                  {/* Animated counter */}
                  <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent font-mono mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {metric.fixed ? metric.value : metric.value}
                    <span className="text-2xl">{metric.suffix}</span>
                  </div>

                  <div className="text-sm text-gray-600 relative z-10">{metric.label}</div>

                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Logos Section - FIXED: Updated placeholder text */}
        <div className={`mt-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-center text-sm uppercase tracking-wider text-gray-500 font-semibold mb-8">
            Powering Mission-Critical Infrastructure
          </p>

          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="text-center text-gray-500 text-sm italic px-8 py-6 border-2 border-dashed border-gray-300 rounded-lg">
              Customer logos available upon request
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
