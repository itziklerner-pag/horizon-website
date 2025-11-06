import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | Horizon Fuel Cell North America',
  description: 'Get in touch with Horizon Fuel Cell experts. Schedule a consultation to discuss your data center power needs.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A2332] via-[#243447] to-[#1A2332] text-white py-20">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Get in <span className="text-[#00D9E8]">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Ready to power your data center with zero-emission fuel cells? Our team of experts is here to help you find the perfect solution.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 md:p-12 hover:border-[#00D9E8] transition-colors duration-300">
                <h2 className="text-3xl font-bold text-[#1A2332] mb-2">
                  Send us a message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#00D9E8] focus:ring-2 focus:ring-[#00D9E8]/20 transition-colors duration-200 outline-none"
                        placeholder="John Smith"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#00D9E8] focus:ring-2 focus:ring-[#00D9E8]/20 transition-colors duration-200 outline-none"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#00D9E8] focus:ring-2 focus:ring-[#00D9E8]/20 transition-colors duration-200 outline-none"
                        placeholder="Acme Corporation"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#00D9E8] focus:ring-2 focus:ring-[#00D9E8]/20 transition-colors duration-200 outline-none"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Solution Interest */}
                  <div>
                    <label htmlFor="solution" className="block text-sm font-semibold text-gray-700 mb-2">
                      Solution Interest
                    </label>
                    <select
                      id="solution"
                      name="solution"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#00D9E8] focus:ring-2 focus:ring-[#00D9E8]/20 transition-colors duration-200 outline-none bg-white"
                    >
                      <option value="">Select a solution...</option>
                      <option value="hyperscale">Hyperscale Data Centers</option>
                      <option value="colocation">Colocation Facilities</option>
                      <option value="edge">Edge Data Centers</option>
                      <option value="utility">Utility-Scale Energy</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#00D9E8] focus:ring-2 focus:ring-[#00D9E8]/20 transition-colors duration-200 outline-none resize-none"
                      placeholder="Tell us about your project and power requirements..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#00D9E8] hover:bg-[#00B8C5] text-[#1A2332] font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center group"
                  >
                    Send Message
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact Info Card */}
              <div className="bg-gradient-to-br from-[#1A2332] to-[#243447] text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#00D9E8]/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-[#00D9E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Phone</p>
                      <a href="tel:+18005550123" className="text-lg font-semibold hover:text-[#00D9E8] transition-colors">
                        1-800-555-0123
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#00D9E8]/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-[#00D9E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Email</p>
                      <a href="mailto:info@horizonfuelcell.com" className="text-lg font-semibold hover:text-[#00D9E8] transition-colors break-words">
                        info@horizonfuelcell.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#00D9E8]/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-[#00D9E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Headquarters</p>
                      <p className="text-lg font-semibold">
                        123 Innovation Drive<br />
                        San Francisco, CA 94105<br />
                        United States
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#00D9E8]/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-[#00D9E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Business Hours</p>
                      <p className="text-lg font-semibold">
                        Mon - Fri: 8:00 AM - 6:00 PM PST<br />
                        24/7 Emergency Support
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links Card */}
              <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                <h3 className="text-xl font-bold text-[#1A2332] mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/calculators/roi" className="flex items-center text-gray-700 hover:text-[#00D9E8] transition-colors group">
                      <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      Calculate ROI
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources" className="flex items-center text-gray-700 hover:text-[#00D9E8] transition-colors group">
                      <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Resource Library
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/case-studies" className="flex items-center text-gray-700 hover:text-[#00D9E8] transition-colors group">
                      <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="flex items-center text-gray-700 hover:text-[#00D9E8] transition-colors group">
                      <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      About Horizon
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#00D9E8] to-[#00B8C5] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-4">
            Ready to Schedule a Consultation?
          </h2>
          <p className="text-xl text-[#1A2332]/80 mb-8 max-w-2xl mx-auto">
            Speak with our fuel cell experts to discuss your specific power requirements and deployment timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+18005550123"
              className="inline-flex items-center bg-[#1A2332] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#243447] transition-all duration-300 transform hover:scale-105 group"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us Now
            </a>
            <a
              href="mailto:info@horizonfuelcell.com"
              className="inline-flex items-center bg-white text-[#1A2332] font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 group"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
