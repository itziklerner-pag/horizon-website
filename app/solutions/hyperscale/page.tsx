import type { Metadata } from 'next';
import SolutionHero from '@/components/solutions/SolutionHero';
import ChallengeSection from '@/components/solutions/ChallengeSection';
import TimelineSection from '@/components/solutions/TimelineSection';
import TechnicalSpecs from '@/components/solutions/TechnicalSpecs';
import ComparisonTable from '@/components/solutions/ComparisonTable';
import CaseStudy from '@/components/solutions/CaseStudy';
import CTASection from '@/components/solutions/CTASection';

export const metadata: Metadata = {
  title: 'Hyperscale Data Centers | Horizon Fuel Cell Solutions',
  description: 'Reliable, scalable backup power for hyperscale data centers. Deploy multi-megawatt fuel cell systems in 90 days with zero emissions.',
};

export default function HyperscalePage() {
  const heroStats = [
    { label: 'Power Output', value: '50MW+' },
    { label: 'Uptime', value: '99.999%' },
    { label: 'Runtime', value: 'Unlimited' },
    { label: 'Deployment', value: '90 Days' },
  ];

  const challenges = [
    {
      icon: '⚡',
      title: 'Grid Constraints',
      description: 'Utility grids struggle to deliver the massive, instantaneous power required by hyperscale facilities. Power curtailment and brownouts threaten uptime SLAs.',
    },
    {
      icon: '📊',
      title: 'Regulatory Pressure',
      description: 'Increasingly strict emissions regulations make diesel generators non-viable. ESG commitments demand clean backup power solutions.',
    },
    {
      icon: '📈',
      title: 'Exponential Growth',
      description: 'AI workloads are driving unprecedented power density increases. Traditional backup power can\'t scale fast enough to meet demand.',
    },
  ];

  const timelineSteps = [
    {
      day: 'Day 1-30',
      title: 'Site Assessment & Design',
      description: 'Our team evaluates your facility, designs the fuel cell array, and handles all permitting and regulatory approvals.',
    },
    {
      day: 'Day 31-60',
      title: 'Manufacturing & Logistics',
      description: 'Fuel cell modules are manufactured to spec and shipped to your site. Hydrogen infrastructure planning is finalized.',
    },
    {
      day: 'Day 61-90',
      title: 'Installation & Commissioning',
      description: 'Rapid deployment of fuel cell systems, integration with existing infrastructure, testing, and handoff to operations.',
    },
  ];

  const technicalSpecs = [
    { label: 'Power Output', value: '50+', unit: 'MW' },
    { label: 'Efficiency', value: '60%', unit: 'LHV' },
    { label: 'Runtime', value: '∞', unit: 'Unlimited' },
    { label: 'Response Time', value: '<1', unit: 'Second' },
    { label: 'Availability', value: '99.999%', unit: '' },
    { label: 'Scalability', value: 'Modular', unit: '' },
  ];

  const comparisonRows = [
    {
      feature: 'Power Output',
      horizon: { value: '50+ MW', highlight: true },
      diesel: '10-20 MW',
      battery: '5-10 MW',
    },
    {
      feature: 'Runtime',
      horizon: { value: 'Unlimited', highlight: true },
      diesel: '24-48 hours',
      battery: '2-4 hours',
    },
    {
      feature: 'Emissions (NOx)',
      horizon: { value: 'Zero', highlight: true },
      diesel: 'High',
      battery: 'Zero (charging varies)',
    },
    {
      feature: 'Fuel Storage',
      horizon: 'Hydrogen (on-site or pipeline)',
      diesel: 'Large diesel tanks required',
      battery: 'N/A',
    },
    {
      feature: 'Response Time',
      horizon: { value: '<1 second', highlight: true },
      diesel: '10-30 seconds',
      battery: '<1 second',
    },
    {
      feature: 'Maintenance',
      horizon: '6-month intervals',
      diesel: 'Monthly',
      battery: 'Quarterly',
    },
    {
      feature: 'Scalability',
      horizon: { value: 'Modular (MW increments)', highlight: true },
      diesel: 'Limited by site',
      battery: 'Limited by space/cost',
    },
    {
      feature: 'Total Cost of Ownership',
      horizon: { value: 'Lowest over 10 years', highlight: true },
      diesel: 'Moderate',
      battery: 'High (replacement cycles)',
    },
  ];

  const caseStudyData = {
    company: 'Global Cloud Provider',
    industry: 'Hyperscale Cloud Infrastructure',
    challenge: 'A tier-1 cloud provider needed 100MW of backup power for a new campus in a region with strict emissions standards. Diesel was prohibited, and battery storage couldn\'t provide the runtime needed for their SLAs.',
    solution: 'Horizon deployed a 100MW hydrogen fuel cell system across four data halls in just 85 days. The modular design allowed for phased deployment aligned with the facility build-out. Hydrogen is supplied via a dedicated pipeline from a nearby green hydrogen production facility.',
    results: [
      { metric: 'Power Delivered', value: '100 MW' },
      { metric: 'Deployment Time', value: '85 Days' },
      { metric: 'Emissions Reduction', value: '100%' },
      { metric: 'Annual Savings', value: '$12M' },
    ],
    quote: {
      text: 'Horizon gave us the clean, scalable backup power we needed without compromising on reliability. The deployment speed was remarkable.',
      author: 'Sarah Chen',
      title: 'VP of Infrastructure Operations',
    },
  };

  return (
    <main>
      <SolutionHero
        title="Hyperscale Data Centers"
        subtitle="Enterprise Solutions"
        description="Power the world's largest data centers with clean, reliable hydrogen fuel cells. Scale to 50MW+ with zero emissions and unlimited runtime."
        stats={heroStats}
      />

      <ChallengeSection challenges={challenges} />

      <TimelineSection steps={timelineSteps} />

      <TechnicalSpecs specs={technicalSpecs} />

      <ComparisonTable rows={comparisonRows} />

      <CaseStudy {...caseStudyData} />

      <CTASection
        title="Ready to Power Your Hyperscale Facility?"
        description="Let's discuss how Horizon can deliver clean, reliable backup power for your data center campus."
        primaryCTA={{ text: 'Schedule Consultation', href: '/contact' }}
        secondaryCTA={{ text: 'Download Spec Sheet', href: '/resources/hyperscale-specs' }}
      />
    </main>
  );
}
