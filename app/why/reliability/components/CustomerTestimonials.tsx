'use client';

import { useState } from 'react';

export default function CustomerTestimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "We've operated Horizon fuel cells for 3 years with zero unplanned downtime. When the grid went down during the winter storm, our customers didn't even notice. That's the reliability we need.",
      author: 'Michael Rodriguez',
      title: 'VP of Operations',
      company: 'DataVault Colocation',
      metric: { value: '99.997%', label: 'Uptime Achieved' },
      installation: '10MW hyperscale facility, Dallas, TX',
    },
    {
      quote: "Predictive maintenance is a game-changer. We used to have monthly emergency calls with our diesel generators. With Horizon, everything is scheduled and there are no surprises.",
      author: 'Jennifer Kim',
      title: 'Facility Director',
      company: 'CloudEdge Networks',
      metric: { value: '0', label: 'Emergency Service Calls' },
      installation: '25 edge sites, Southwest region',
    },
    {
      quote: "The 99.999% SLA seemed ambitious, but Horizon has exceeded it. Our Tier IV certification audit went smoothly because the fuel cell reliability data was so comprehensive.",
      author: 'David Thompson',
      title: 'Chief Technology Officer',
      company: 'SecureHost Data Centers',
      metric: { value: '18', label: 'Months Without Incident' },
      installation: '50MW enterprise facility, Phoenix, AZ',
    },
  ];

  const testimonial = testimonials[activeTestimonial];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reliability is measured in uptime, not promises. Here's what operators report.
          </p>
        </div>

        {/* Testimonial Selector */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {testimonials.map((t, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTestimonial(idx)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all text-sm ${
                activeTestimonial === idx
                  ? 'bg-[#00C896] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {t.company}
            </button>
          ))}
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-12">
            <div className="text-6xl text-[#00C896] mb-6">"</div>
            <p className="text-2xl text-gray-700 italic mb-8 leading-relaxed">
              {testimonial.quote}
            </p>

            <div className="flex items-center justify-between flex-wrap gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00C896] to-[#00D9E8] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-lg text-[#1A2332]">{testimonial.author}</div>
                  <div className="text-gray-600">{testimonial.title}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-4xl font-bold text-[#00C896] font-mono mb-1">
                  {testimonial.metric.value}
                </div>
                <div className="text-sm text-gray-600">{testimonial.metric.label}</div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-sm text-gray-500">
                <span className="font-semibold">Installation:</span> {testimonial.installation}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg">
            <div className="text-3xl mb-3">⭐</div>
            <div className="text-2xl font-bold text-[#1A2332] mb-1">4.9/5</div>
            <div className="text-sm text-gray-600">Customer Satisfaction</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg">
            <div className="text-3xl mb-3">🏆</div>
            <div className="text-2xl font-bold text-[#1A2332] mb-1">98%</div>
            <div className="text-sm text-gray-600">Would Recommend</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg">
            <div className="text-3xl mb-3">🔄</div>
            <div className="text-2xl font-bold text-[#1A2332] mb-1">85%</div>
            <div className="text-sm text-gray-600">Repeat Customers</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg">
            <div className="text-3xl mb-3">💬</div>
            <div className="text-2xl font-bold text-[#1A2332] mb-1">24hr</div>
            <div className="text-sm text-gray-600">Support Response</div>
          </div>
        </div>
      </div>
    </section>
  );
}
