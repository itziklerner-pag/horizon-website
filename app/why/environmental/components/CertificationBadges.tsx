export default function CertificationBadges() {
  const certifications = [
    {
      name: 'CARB Certified',
      logo: '🏛️',
      description: 'California Air Resources Board Executive Order certification',
      status: 'Active',
      color: '#00C896',
    },
    {
      name: 'EPA Compliant',
      logo: '🇺🇸',
      description: 'Exceeds EPA Tier 4 Final emissions standards',
      status: 'Active',
      color: '#00D9E8',
    },
    {
      name: 'ISO 14001',
      logo: '🌍',
      description: 'Environmental Management System certification',
      status: 'Active',
      color: '#4DE4EF',
    },
    {
      name: 'UL 2267',
      logo: '✅',
      description: 'Safety certification for stationary fuel cell power systems',
      status: 'Active',
      color: '#00C896',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2332] mb-6">
            Certifications & Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to environmental excellence is validated by industry-leading certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border-2 p-6 hover:shadow-lg transition-all"
              style={{ borderColor: cert.color }}
            >
              <div className="text-center mb-4">
                <div
                  className="inline-flex w-20 h-20 rounded-full items-center justify-center text-4xl mb-4"
                  style={{ backgroundColor: `${cert.color}20` }}
                >
                  {cert.logo}
                </div>
                <h3 className="text-lg font-bold text-[#1A2332] mb-2">{cert.name}</h3>
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: `${cert.color}20`, color: cert.color }}
                >
                  {cert.status}
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-[#1A2332] mb-6 text-center">
            Additional Environmental Commitments
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="font-semibold text-[#1A2332] mb-2">Transparent Reporting</h4>
              <p className="text-sm text-gray-600">
                Real-time emissions data available through customer portal. Annual sustainability reports published.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">♻️</div>
              <h4 className="font-semibold text-[#1A2332] mb-2">Circular Economy</h4>
              <p className="text-sm text-gray-600">
                95% of fuel cell components recyclable. End-of-life take-back program ensures proper disposal.
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🌱</div>
              <h4 className="font-semibold text-[#1A2332] mb-2">Carbon Neutral Operations</h4>
              <p className="text-sm text-gray-600">
                Manufacturing facilities carbon neutral since 2023. Supply chain emissions reduction targets set.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
