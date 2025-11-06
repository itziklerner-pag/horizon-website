import type { Metadata } from 'next';
import SolutionHero from '@/components/solutions/SolutionHero';
import ChallengeSection from '@/components/solutions/ChallengeSection';
import TimelineSection from '@/components/solutions/TimelineSection';
import TechnicalSpecs from '@/components/solutions/TechnicalSpecs';
import ComparisonTable from '@/components/solutions/ComparisonTable';
import CaseStudy from '@/components/solutions/CaseStudy';
import CTASection from '@/components/solutions/CTASection';

export const metadata: Metadata = {
  title: 'Edge Data Centers | Horizon Fuel Cell Solutions',
  description: 'Compact, reliable backup power for edge computing. Deploy fuel cells in remote locations with minimal infrastructure.',
};

export default function EdgePage() {
  const heroStats = [
    { label: 'Power Range', value: '250kW-5MW' },
    { label: 'Footprint', value: 'Minimal' },
    { label: 'Remote Operation', value: 'Full' },
    { label: 'Deployment', value: '60 Days' },
  ];

  const challenges = [
    {
      icon: '📍',
      title: 'Remote Locations',
      description: 'Edge sites are often in areas with limited infrastructure. Diesel delivery is expensive and unreliable. Grid power is inconsistent or unavailable.',
    },
    {
      icon: '🔧',
      title: 'Limited On-Site Staff',
      description: 'Edge facilities typically operate with minimal or no on-site personnel. Backup power must be reliable, autonomous, and remotely manageable.',
    },
    {
      icon: '⏱️',
      title: 'Fast Deployment Required',
      description: '5G, IoT, and autonomous vehicles demand rapid edge deployment. Traditional power infrastructure takes too long to install.',
    },
  ];

  const timelineSteps = [
    {
      day: 'Day 1-20',
      title: 'Rapid Assessment',
      description: 'Remote site evaluation, containerized system design, and hydrogen supply planning. Minimal site preparation required.',
    },
    {
      day: 'Day 21-40',
      title: 'Pre-Configured Delivery',
      description: 'Fuel cell modules arrive pre-configured and tested. Hydrogen storage integrated into the same container for maximum simplicity.',
    },
    {
      day: 'Day 41-60',
      title: 'Plug-and-Play Installation',
      description: 'Quick installation with minimal civil work. Remote commissioning and monitoring setup. Immediate operation capability.',
    },
  ];

  const technicalSpecs = [
    { label: 'Power Output', value: '250kW-5', unit: 'MW' },
    { label: 'Container Size', value: '40', unit: 'ft Standard' },
    { label: 'Runtime', value: '72+', unit: 'Hours' },
    { label: 'Remote Control', value: 'Full', unit: '' },
    { label: 'Maintenance', value: 'Annual', unit: '' },
    { label: 'Ambient Range', value: '-40 to +50', unit: '°C' },
  ];

  const comparisonRows = [
    {
      feature: 'Deployment Speed',
      horizon: { value: '60 days', highlight: true },
      diesel: '90-120 days',
      battery: '45-60 days',
    },
    {
      feature: 'Runtime',
      horizon: { value: '72+ hours', highlight: true },
      diesel: '24-48 hours',
      battery: '2-4 hours',
    },
    {
      feature: 'Remote Location Suitability',
      horizon: { value: 'Excellent', highlight: true },
      diesel: 'Moderate (fuel delivery)',
      battery: 'Limited (short runtime)',
    },
    {
      feature: 'Extreme Weather Operation',
      horizon: { value: '-40°C to +50°C', highlight: true },
      diesel: '-20°C to +40°C',
      battery: '-10°C to +35°C',
    },
    {
      feature: 'Refueling Frequency',
      horizon: 'Weekly to monthly',
      diesel: 'Weekly',
      battery: 'N/A (grid recharge)',
    },
    {
      feature: 'On-Site Maintenance',
      horizon: { value: 'Annual', highlight: true },
      diesel: 'Monthly',
      battery: 'Quarterly',
    },
    {
      feature: 'Space Efficiency',
      horizon: { value: 'Single 40ft container', highlight: true },
      diesel: 'Generator + fuel tanks',
      battery: 'Multiple containers',
    },
    {
      feature: 'Total Cost (5 years)',
      horizon: { value: 'Lowest', highlight: true },
      diesel: 'High (fuel, maintenance)',
      battery: 'Moderate',
    },
  ];

  const caseStudyData = {
    company: '5G Network Operator',
    industry: 'Telecommunications Edge Infrastructure',
    challenge: 'A national telecom provider needed backup power for 50 remote 5G edge sites across varied terrain. Diesel was cost-prohibitive due to delivery logistics, and the grid was unreliable in many locations.',
    solution: 'Horizon deployed containerized 500kW fuel cell systems across all 50 sites in just 8 months. Each unit includes integrated hydrogen storage for 72+ hours of runtime. Remote monitoring allows centralized management from headquarters.',
    results: [
      { metric: 'Sites Deployed', value: '50' },
      { metric: 'Avg Deployment Time', value: '55 Days' },
      { metric: 'Uptime Achievement', value: '99.98%' },
      { metric: 'Operating Cost Reduction', value: '45%' },
    ],
    quote: {
      text: 'Horizon enabled our aggressive edge rollout. The containerized solution was perfect for our remote sites, and the operational cost savings were beyond our projections.',
      author: 'James Park',
      title: 'Director of Network Infrastructure',
    },
  };

  return (
    <main>
      <SolutionHero
        title="Edge Data Centers"
        subtitle="Edge Computing"
        description="Deploy reliable backup power to the furthest edge. Containerized fuel cell systems designed for remote operation with minimal infrastructure."
        stats={heroStats}
      />

      <ChallengeSection challenges={challenges} />

      <TimelineSection steps={timelineSteps} />

      <TechnicalSpecs specs={technicalSpecs} />

      <ComparisonTable rows={comparisonRows} />

      <CaseStudy {...caseStudyData} />

      <CTASection
        title="Power Your Edge Network"
        description="Bring reliable, clean backup power to your most challenging locations."
        primaryCTA={{ text: 'Discuss Your Edge Deployment', href: '/contact' }}
        secondaryCTA={{ text: 'Download Edge Solution Brief', href: '/resources/edge-brief' }}
      />
    </main>
  );
}
