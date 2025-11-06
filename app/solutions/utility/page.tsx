import type { Metadata } from 'next';
import SolutionHero from '@/components/solutions/SolutionHero';
import ChallengeSection from '@/components/solutions/ChallengeSection';
import TimelineSection from '@/components/solutions/TimelineSection';
import TechnicalSpecs from '@/components/solutions/TechnicalSpecs';
import ComparisonTable from '@/components/solutions/ComparisonTable';
import CaseStudy from '@/components/solutions/CaseStudy';
import CTASection from '@/components/solutions/CTASection';

export const metadata: Metadata = {
  title: 'Utility-Scale Energy | Horizon Fuel Cell Solutions',
  description: 'Grid-scale hydrogen fuel cells for utilities and energy providers. Deliver clean, dispatchable power at unprecedented scale.',
};

export default function UtilityPage() {
  const heroStats = [
    { label: 'Power Output', value: '100MW+' },
    { label: 'Dispatchability', value: 'On-Demand' },
    { label: 'Efficiency', value: '60%' },
    { label: 'Capacity Factor', value: '95%+' },
  ];

  const challenges = [
    {
      icon: '🔋',
      title: 'Renewable Intermittency',
      description: 'Solar and wind are unpredictable. Grid operators need dispatchable clean energy to balance renewable generation and meet demand 24/7.',
    },
    {
      icon: '⚡',
      title: 'Peak Demand Management',
      description: 'Natural gas peaker plants are being phased out due to emissions. Utilities need clean alternatives that can ramp quickly during demand spikes.',
    },
    {
      icon: '🏭',
      title: 'Grid Modernization',
      description: 'Aging grid infrastructure can\'t handle modern demand. Distributed hydrogen power can support grid stability without massive transmission upgrades.',
    },
  ];

  const timelineSteps = [
    {
      day: 'Day 1-30',
      title: 'Grid Integration Study',
      description: 'Power systems analysis, interconnection planning, and regulatory approvals. We work with your utility and ISO/RTO to ensure seamless grid integration.',
    },
    {
      day: 'Day 31-60',
      title: 'Large-Scale Manufacturing',
      description: 'Mass production of fuel cell arrays and power electronics. Hydrogen supply infrastructure planning and long-term supply agreements.',
    },
    {
      day: 'Day 61-90',
      title: 'Site Construction & Testing',
      description: 'Civil work, electrical infrastructure, fuel cell installation, and comprehensive commissioning. Grid synchronization and load testing.',
    },
  ];

  const technicalSpecs = [
    { label: 'Power Output', value: '100+', unit: 'MW' },
    { label: 'Efficiency', value: '60%', unit: 'LHV' },
    { label: 'Ramp Rate', value: '10', unit: 'MW/min' },
    { label: 'Capacity Factor', value: '95%', unit: '' },
    { label: 'Emissions', value: 'Zero', unit: '' },
    { label: 'Dispatchability', value: '24/7', unit: '' },
  ];

  const comparisonRows = [
    {
      feature: 'Power Output',
      horizon: { value: '100+ MW per site', highlight: true },
      diesel: '50-100 MW',
      battery: '10-50 MW',
    },
    {
      feature: 'Dispatch Duration',
      horizon: { value: 'Unlimited', highlight: true },
      diesel: '24-48 hours',
      battery: '2-4 hours',
    },
    {
      feature: 'Ramp Rate',
      horizon: { value: '10 MW/min', highlight: true },
      diesel: '5 MW/min',
      battery: '50 MW/min',
    },
    {
      feature: 'Capacity Factor',
      horizon: { value: '95%+', highlight: true },
      diesel: '10-15%',
      battery: '5-10%',
    },
    {
      feature: 'Emissions',
      horizon: { value: 'Zero', highlight: true },
      diesel: 'High CO2, NOx',
      battery: 'Zero (charging varies)',
    },
    {
      feature: 'Grid Services',
      horizon: { value: 'Full ancillary support', highlight: true },
      diesel: 'Limited',
      battery: 'Frequency regulation only',
    },
    {
      feature: 'LCOE (10-year)',
      horizon: { value: '$75-95/MWh', highlight: true },
      diesel: '$150-200/MWh',
      battery: '$200-300/MWh',
    },
    {
      feature: 'Renewable Integration',
      horizon: { value: 'Perfect complement', highlight: true },
      diesel: 'Incompatible with clean goals',
      battery: 'Limited duration',
    },
  ];

  const caseStudyData = {
    company: 'Pacific Regional Utility',
    industry: 'Electric Utility Provider',
    challenge: 'A West Coast utility needed to replace 200MW of natural gas peaker capacity to meet state clean energy mandates. Battery storage couldn\'t provide the duration needed for multi-day weather events.',
    solution: 'Horizon deployed two 100MW hydrogen fuel cell plants that provide dispatchable clean power. The systems integrate with the utility\'s wind and solar portfolio, smoothing variability and providing grid stability services. Hydrogen is produced on-site using excess renewable energy.',
    results: [
      { metric: 'Clean Capacity Added', value: '200 MW' },
      { metric: 'Annual CO2 Reduction', value: '500,000 tons' },
      { metric: 'Grid Stability Events', value: '24/7' },
      { metric: 'LCOE Reduction', value: '35%' },
    ],
    quote: {
      text: 'Horizon fuel cells gave us the dispatchable clean energy we needed to meet our mandates. This is the future of grid-scale power generation.',
      author: 'Dr. Emily Thompson',
      title: 'Chief Sustainability Officer',
    },
  };

  return (
    <main>
      <SolutionHero
        title="Utility-Scale Energy"
        subtitle="Grid-Scale Power"
        description="Transform the grid with clean, dispatchable hydrogen power. Replace peaker plants and integrate renewables at unprecedented scale."
        stats={heroStats}
      />

      <ChallengeSection challenges={challenges} />

      <TimelineSection steps={timelineSteps} />

      <TechnicalSpecs specs={technicalSpecs} />

      <ComparisonTable rows={comparisonRows} />

      <CaseStudy {...caseStudyData} />

      <CTASection
        title="Modernize Your Grid Infrastructure"
        description="Partner with Horizon to deliver clean, reliable power that meets regulatory requirements and customer expectations."
        primaryCTA={{ text: 'Schedule Utility Briefing', href: '/contact' }}
        secondaryCTA={{ text: 'View Grid Integration Study', href: '/resources/utility-study' }}
      />
    </main>
  );
}
