import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ROI Calculator - Horizon Fuel Cell',
  description: 'Calculate your return on investment and total cost of ownership for Horizon Fuel Cell systems. Compare fuel cells against diesel, battery, and other energy sources.',
};

export default function ROICalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
