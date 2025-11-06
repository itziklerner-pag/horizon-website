import type { Metadata } from 'next';
import SolutionHero from '@/components/solutions/SolutionHero';
import ChallengeSection from '@/components/solutions/ChallengeSection';
import TimelineSection from '@/components/solutions/TimelineSection';
import TechnicalSpecs from '@/components/solutions/TechnicalSpecs';
import ComparisonTable from '@/components/solutions/ComparisonTable';
import CaseStudy from '@/components/solutions/CaseStudy';
import CTASection from '@/components/solutions/CTASection';

export const metadata: Metadata = {
  title: 'Colocation Facilities | Horizon Fuel Cell Solutions',
  description: 'Premium backup power for colocation providers. Deliver best-in-class uptime SLAs with clean hydrogen fuel cells.',
};

export default function ColocationPage() {
  const heroStats = [
    { label: 'Power Range', value: '5-25MW' },
    { label: 'Uptime', value: '99.999%' },
    { label: 'Space Savings', value: '40%' },
    { label: 'Tenant Premium', value: '15%+' },
  ];

  const challenges = [
    {
      icon: '🏢',
      title: 'Competitive Differentiation',
      description: 'The colo market is saturated. Enterprise customers demand sustainability credentials and premium uptime guarantees that diesel can\'t deliver.',
    },
    {
      icon: '🌍',
      title: 'Urban Emissions Restrictions',
      description: 'Many colocation facilities are in urban areas with strict noise and emissions regulations. Diesel testing and operation is increasingly limited.',
    },
    {
      icon: '💼',
      title: 'Customer ESG Requirements',
      description: 'Fortune 500 tenants require clean backup power to meet their sustainability goals. Diesel backup is a deal-breaker for many enterprises.',
    },
  ];

  const timelineSteps = [
    {
      day: 'Day 1-30',
      title: 'Tenant Impact Assessment',
      description: 'We evaluate your facility layout, plan deployment with zero tenant disruption, and design redundancy to exceed your SLA requirements.',
    },
    {
      day: 'Day 31-60',
      title: 'Staged Delivery',
      description: 'Fuel cell modules arrive in phases, allowing installation around tenant operations. Integration with existing UPS and cooling systems.',
    },
    {
      day: 'Day 61-90',
      title: 'Hot Cutover & Validation',
      description: 'Seamless transition from diesel to fuel cell backup. Comprehensive testing with simulated outages. Zero tenant downtime.',
    },
  ];

  const technicalSpecs = [
    { label: 'Power Output', value: '5-25', unit: 'MW' },
    { label: 'Efficiency', value: '60%', unit: 'LHV' },
    { label: 'Noise Level', value: '<65', unit: 'dB' },
    { label: 'Footprint Reduction', value: '40%', unit: 'vs Diesel' },
    { label: 'Maintenance Windows', value: '6', unit: 'Month Intervals' },
    { label: 'Remote Monitoring', value: '24/7', unit: '' },
  ];

  const comparisonRows = [
    {
      feature: 'Power Density',
      horizon: { value: '1.2 MW per 40ft module', highlight: true },
      diesel: '0.5 MW per generator',
      battery: '0.8 MW per container',
    },
    {
      feature: 'Runtime',
      horizon: { value: 'Unlimited', highlight: true },
      diesel: '24-72 hours',
      battery: '2-4 hours',
    },
    {
      feature: 'Noise (dB)',
      horizon: { value: '<65 dB', highlight: true },
      diesel: '85-100 dB',
      battery: '<60 dB',
    },
    {
      feature: 'Emissions',
      horizon: { value: 'Zero', highlight: true },
      diesel: 'High NOx, PM2.5',
      battery: 'Zero (charging varies)',
    },
    {
      feature: 'Testing Impact',
      horizon: { value: 'Silent, zero emissions', highlight: true },
      diesel: 'Loud, disruptive',
      battery: 'Silent',
    },
    {
      feature: 'Tenant SLA Support',
      horizon: { value: '99.999%+', highlight: true },
      diesel: '99.9%',
      battery: '99.95%',
    },
    {
      feature: 'Urban Compliance',
      horizon: { value: 'Full compliance', highlight: true },
      diesel: 'Often restricted',
      battery: 'Compliant',
    },
    {
      feature: 'Green Marketing Value',
      horizon: { value: 'Premium positioning', highlight: true },
      diesel: 'Negative perception',
      battery: 'Positive but limited runtime',
    },
  ];

  const caseStudyData = {
    company: 'MetroData Colocation',
    industry: 'Multi-Tenant Colocation Provider',
    challenge: 'A 15MW colocation facility in downtown Chicago faced diesel generator restrictions due to emissions and noise complaints. Enterprise tenants were threatening to leave without a clean backup solution.',
    solution: 'Horizon deployed a 15MW fuel cell system in a phased approach, replacing diesel generators without any tenant downtime. The system operates silently and meets all urban emissions standards. Green hydrogen is delivered weekly by truck.',
    results: [
      { metric: 'Tenant Retention', value: '100%' },
      { metric: 'New Sales Increase', value: '35%' },
      { metric: 'Pricing Premium', value: '18%' },
      { metric: 'Complaints', value: 'Zero' },
    ],
    quote: {
      text: 'Switching to Horizon fuel cells transformed our competitive position. We now lead with sustainability and our tenants love it. The 18% pricing premium more than covers the investment.',
      author: 'Michael Rodriguez',
      title: 'CEO, MetroData Colocation',
    },
  };

  return (
    <main>
      <SolutionHero
        title="Colocation Facilities"
        subtitle="Premium Colocation"
        description="Differentiate your colocation business with clean, quiet backup power that enterprise customers demand. Meet the strictest SLAs while exceeding ESG requirements."
        stats={heroStats}
      />

      <ChallengeSection challenges={challenges} />

      <TimelineSection steps={timelineSteps} />

      <TechnicalSpecs specs={technicalSpecs} />

      <ComparisonTable rows={comparisonRows} />

      <CaseStudy {...caseStudyData} />

      <CTASection
        title="Elevate Your Colocation Offering"
        description="Transform your facility with premium, clean backup power that attracts and retains enterprise tenants."
        primaryCTA={{ text: 'Request ROI Analysis', href: '/contact' }}
        secondaryCTA={{ text: 'View Case Studies', href: '/case-studies' }}
      />
    </main>
  );
}
