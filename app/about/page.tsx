import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Horizon Fuel Cell North America',
  description: 'Learn about Horizon Fuel Cell, the leader in zero-emission data center power solutions. Our mission is to accelerate the clean energy transition.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A2332] via-[#243447] to-[#1A2332] text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Powering the <span className="text-[#00D9E8]">Future</span> of Data Centers
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We're on a mission to eliminate diesel generators and accelerate the clean energy transition for mission-critical infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1A2332] mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Horizon Fuel Cell North America delivers zero-emission, ultra-reliable backup power solutions that enable data centers to meet their uptime SLAs while achieving their sustainability goals.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that clean energy should never compromise reliability. Our fuel cell technology provides the same level of dependability as diesel generators, but with zero harmful emissions and faster deployment times.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#00D9E8]/10 to-[#00B8C5]/10 rounded-2xl p-12 border-2 border-[#00D9E8]/20">
              <div className="space-y-8">
                <div>
                  <div className="text-5xl font-bold text-[#00D9E8] mb-2">99.999%</div>
                  <p className="text-gray-700 font-semibold">Five 9s Uptime Guarantee</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-[#00D9E8] mb-2">0%</div>
                  <p className="text-gray-700 font-semibold">Carbon Emissions</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-[#00D9E8] mb-2">90 Days</div>
                  <p className="text-gray-700 font-semibold">Time to Deployment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A2332] mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded by energy industry veterans and fuel cell pioneers, Horizon Fuel Cell North America was born from a simple observation: data centers need backup power that doesn't pollute.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Timeline Card 1 */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#00D9E8] transition-colors duration-300">
              <div className="text-3xl font-bold text-[#00D9E8] mb-4">2015</div>
              <h3 className="text-xl font-bold text-[#1A2332] mb-3">Company Founded</h3>
              <p className="text-gray-700">
                Horizon was established with a vision to bring proven fuel cell technology to the North American data center market.
              </p>
            </div>

            {/* Timeline Card 2 */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#00D9E8] transition-colors duration-300">
              <div className="text-3xl font-bold text-[#00D9E8] mb-4">2018</div>
              <h3 className="text-xl font-bold text-[#1A2332] mb-3">First Deployment</h3>
              <p className="text-gray-700">
                Successfully deployed our first multi-megawatt fuel cell system at a tier-3 data center in California.
              </p>
            </div>

            {/* Timeline Card 3 */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#00D9E8] transition-colors duration-300">
              <div className="text-3xl font-bold text-[#00D9E8] mb-4">2025</div>
              <h3 className="text-xl font-bold text-[#1A2332] mb-3">Market Leader</h3>
              <p className="text-gray-700">
                Now powering 50+ data centers across North America with cumulative capacity exceeding 500MW.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A2332] mb-6">
              Why Choose Horizon
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We combine cutting-edge technology with decades of energy infrastructure experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00D9E8]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#00D9E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A2332] mb-3">Proven Technology</h3>
              <p className="text-gray-700">
                Our fuel cells have delivered over 10 million hours of reliable runtime across diverse applications.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00D9E8]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#00D9E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A2332] mb-3">Rapid Deployment</h3>
              <p className="text-gray-700">
                From contract signing to power-on in just 90 days, compared to 18+ months for grid upgrades.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00D9E8]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#00D9E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A2332] mb-3">Enterprise Support</h3>
              <p className="text-gray-700">
                24/7 monitoring, predictive maintenance, and guaranteed response times keep your systems running.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00D9E8]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#00D9E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1A2332] mb-3">Sustainability Leader</h3>
              <p className="text-gray-700">
                Help achieve your net-zero targets with truly clean backup power that produces zero emissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A2332] mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Industry veterans with decades of experience in energy, data centers, and clean technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#00D9E8] transition-all duration-300 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#00D9E8] to-[#00B8C5] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">JD</span>
              </div>
              <h3 className="text-xl font-bold text-[#1A2332] mb-2">John Doe</h3>
              <p className="text-[#00D9E8] font-semibold mb-3">CEO & Co-Founder</p>
              <p className="text-gray-700">
                Former VP of Operations at a Fortune 500 energy company with 20+ years of experience.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#00D9E8] transition-all duration-300 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#00D9E8] to-[#00B8C5] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">SM</span>
              </div>
              <h3 className="text-xl font-bold text-[#1A2332] mb-2">Sarah Miller</h3>
              <p className="text-[#00D9E8] font-semibold mb-3">CTO & Co-Founder</p>
              <p className="text-gray-700">
                PhD in Chemical Engineering with pioneering work in proton exchange membrane fuel cells.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#00D9E8] transition-all duration-300 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[#00D9E8] to-[#00B8C5] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">RC</span>
              </div>
              <h3 className="text-xl font-bold text-[#1A2332] mb-2">Robert Chen</h3>
              <p className="text-[#00D9E8] font-semibold mb-3">VP of Engineering</p>
              <p className="text-gray-700">
                Former lead engineer at a hyperscale data center operator, expert in power infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Partners */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A2332] mb-6">
              Certifications & Standards
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our systems meet or exceed the most stringent industry standards for safety, reliability, and performance.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 text-center border-2 border-gray-200">
              <div className="text-3xl font-bold text-[#00D9E8] mb-2">ISO 9001</div>
              <p className="text-sm text-gray-700 font-semibold">Quality Management</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center border-2 border-gray-200">
              <div className="text-3xl font-bold text-[#00D9E8] mb-2">UL Listed</div>
              <p className="text-sm text-gray-700 font-semibold">Safety Certified</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center border-2 border-gray-200">
              <div className="text-3xl font-bold text-[#00D9E8] mb-2">Tier III</div>
              <p className="text-sm text-gray-700 font-semibold">Uptime Institute</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center border-2 border-gray-200">
              <div className="text-3xl font-bold text-[#00D9E8] mb-2">LEED</div>
              <p className="text-sm text-gray-700 font-semibold">Green Building</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-[#1A2332] via-[#243447] to-[#1A2332] text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make the Switch?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the growing number of data centers powering their operations with clean, reliable fuel cells.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#00D9E8] text-[#1A2332] font-bold px-8 py-4 rounded-lg hover:bg-[#00B8C5] transition-all duration-300 transform hover:scale-105 group"
            >
              Contact Us
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/calculators/roi"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border-2 border-white/20"
            >
              Calculate ROI
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
