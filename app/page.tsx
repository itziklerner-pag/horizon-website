import { HeroSection } from '@/components/home/HeroSection';
import { TrustIndicators } from '@/components/home/TrustIndicators';
import { ValueProposition } from '@/components/home/ValueProposition';
import { SolutionNavigator } from '@/components/home/SolutionNavigator';
import { IndustryChallenges } from '@/components/home/IndustryChallenges';
import dynamic from 'next/dynamic';

const FinalCTA = dynamic(
  () => import('@/components/home/FinalCTA').then(mod => ({ default: mod.FinalCTA })),
  {
    loading: () => (
      <div className="relative py-24 bg-[#1A2332]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="skeleton-dark h-16 w-96 mx-auto mb-4"></div>
        </div>
      </div>
    ),
    ssr: true,
  }
);

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <TrustIndicators />
      <ValueProposition />
      <SolutionNavigator />
      <IndustryChallenges />
      <FinalCTA />
    </main>
  );
}
