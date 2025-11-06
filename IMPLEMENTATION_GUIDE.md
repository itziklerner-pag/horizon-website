# Horizon Fuel Cell Homepage - Implementation Guide

## Quick Start

### 1. Install Dependencies (if not already done)
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit `http://localhost:3000` to see the homepage.

## What's Included

### Core Files
✅ `/app/page.tsx` - Main homepage component
✅ `/app/layout.tsx` - Root layout with fonts (Inter + IBM Plex Mono)
✅ `/app/globals.css` - Global styles, animations, brand tokens

### Homepage Components
✅ `/components/home/HeroSection.tsx` - Hero with CTA
✅ `/components/home/TrustIndicators.tsx` - Metrics & social proof
✅ `/components/home/ValueProposition.tsx` - 4 core benefits
✅ `/components/home/SolutionNavigator.tsx` - Interactive facility selector
✅ `/components/home/IndustryChallenges.tsx` - Traditional vs Horizon comparison
✅ `/components/home/ROICalculatorPreview.tsx` - Interactive calculator
✅ `/components/home/FinalCTA.tsx` - Final CTA + footer

## Component Customization

### Updating Hero Headline
File: `/home/mm/dev/horizon/horizon-website/components/home/HeroSection.tsx`

```tsx
<h1 className="...">
  Power Your Data Center in{' '}
  <span className="text-gradient inline-block">90 Days</span>
  <br />
  Not Years
</h1>
```

### Changing Metrics
File: `/home/mm/dev/horizon/horizon-website/components/home/TrustIndicators.tsx`

```tsx
const metrics = [
  { value: '50M+', label: 'Operating Hours', icon: '⚡' },
  { value: '99.999%', label: 'Uptime Record', icon: '✓' },
  { value: '500+ MW', label: 'Deployed Capacity', icon: '⚙️' },
  { value: '0g', label: 'CO₂ Emissions', icon: '🌱' },
];
```

### Updating Value Propositions
File: `/home/mm/dev/horizon/horizon-website/components/home/ValueProposition.tsx`

```tsx
const values = [
  {
    icon: '🚀',
    title: '90-Day Deployment',
    description: 'Pre-engineered systems ship and install in weeks, not years...',
    stats: ['Plug-and-play design', 'Modular scaling', 'Pre-certified'],
  },
  // ... add or modify as needed
];
```

### Customizing Facility Types
File: `/home/mm/dev/horizon/horizon-website/components/home/SolutionNavigator.tsx`

```tsx
const facilityTypes = [
  {
    id: 'enterprise',
    name: 'Enterprise Data Center',
    icon: '🏢',
    power: '5-50 MW',
    features: ['N+1 redundancy', 'Modular expansion', 'Grid-independent'],
    description: 'Purpose-built for hyperscale operations',
  },
  // ... modify or add new facility types
];
```

### Adjusting ROI Calculations
File: `/home/mm/dev/horizon/horizon-website/components/home/ROICalculatorPreview.tsx`

```tsx
const calculations = {
  deployment: powerNeeded * 9,        // days (adjust multiplier)
  capitalSavings: powerNeeded * 150000,  // USD (adjust per MW cost)
  annualSavings: powerNeeded * 80000,    // USD per year
  co2Avoided: powerNeeded * 1200,        // tons per year
  paybackPeriod: 3.2,                    // years
};
```

## Styling Customization

### Brand Colors
File: `/home/mm/dev/horizon/horizon-website/app/globals.css`

```css
:root {
  /* Change these to your brand colors */
  --deep-slate: #1A2332;      /* Primary dark */
  --electric-cyan: #00D9E8;   /* Primary accent */
  --platinum: #E5E8EB;        /* Light gray */
  --cyan-dark: #00B8C5;       /* Hover states */
  --cyan-light: #4DE4EF;      /* Gradients */
}
```

### Typography
File: `/home/mm/dev/horizon/horizon-website/app/layout.tsx`

To change fonts, import different Google Fonts:
```tsx
import { YourFont, YourMonoFont } from "next/font/google";

const yourFont = YourFont({
  subsets: ['latin'],
  variable: '--font-your-font',
  weight: ['400', '600', '700'],
});
```

### Animation Speed
File: `/home/mm/dev/horizon/horizon-website/app/globals.css`

```css
/* Adjust duration values */
.animate-fade-up {
  animation: fadeUp 0.6s ease-out forwards; /* Change 0.6s to your preference */
}
```

## Image Replacement

### Hero Background
File: `/home/mm/dev/horizon/horizon-website/components/home/HeroSection.tsx`

```tsx
<Image
  src="YOUR_IMAGE_URL_HERE"  // Replace with your image
  alt="Data center infrastructure"
  fill
  className="object-cover"
  priority
  quality={90}
/>
```

### Logo
Replace the logo URL in:
- `HeroSection.tsx` (line ~30)
- `FinalCTA.tsx` (footer section)

```tsx
<Image
  src="YOUR_LOGO_URL_HERE"
  alt="Horizon Fuel Cell"
  width={200}
  height={60}
/>
```

### Customer Logos
File: `/home/mm/dev/horizon/horizon-website/components/home/TrustIndicators.tsx`

Replace placeholder divs with actual logo images:
```tsx
<Image
  src="/path/to/customer-logo.png"
  alt="Customer Name"
  width={128}
  height={48}
  className="opacity-60 hover:opacity-100 transition-opacity"
/>
```

## Adding New Sections

### 1. Create Component File
Create `/components/home/YourNewSection.tsx`:

```tsx
'use client';

import { useEffect, useRef, useState } from 'react';

export function YourNewSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Your content here */}
        </div>
      </div>
    </section>
  );
}
```

### 2. Add to Homepage
File: `/home/mm/dev/horizon/horizon-website/app/page.tsx`

```tsx
import { YourNewSection } from '@/components/home/YourNewSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <TrustIndicators />
      <YourNewSection />  {/* Add your section */}
      {/* ... rest of sections */}
    </main>
  );
}
```

## Performance Optimization

### Image Optimization Checklist
- [ ] Use Next.js Image component for all images
- [ ] Add `priority` to above-the-fold images
- [ ] Use `loading="lazy"` for below-fold images
- [ ] Optimize image dimensions (don't use oversized images)
- [ ] Use appropriate quality settings (90 for hero, 80 for others)

### Code Splitting
Next.js 15 automatically code-splits by route. To further optimize:

```tsx
// Lazy load heavy components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

### CSS Performance
- Tailwind automatically purges unused CSS in production
- Avoid inline styles where possible
- Use CSS variables for dynamic theming

## Accessibility Checklist

- [ ] All images have descriptive `alt` text
- [ ] Color contrast ratios meet WCAG AA standards
- [ ] Interactive elements are keyboard accessible
- [ ] Focus states are visible
- [ ] Heading hierarchy is logical (h1 → h2 → h3)
- [ ] Form inputs have associated labels
- [ ] ARIA labels used where semantic HTML isn't sufficient

## Testing

### Manual Testing Checklist
- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on mobile devices (iOS Safari, Chrome Android)
- [ ] Test with keyboard navigation only
- [ ] Test with screen reader (VoiceOver, NVDA)
- [ ] Test scroll animations on different screen sizes
- [ ] Verify all links and buttons work
- [ ] Check form validation (if added)

### Performance Testing
Use Chrome DevTools:
1. Open DevTools → Lighthouse
2. Run audit for Performance, Accessibility, Best Practices, SEO
3. Aim for scores above 90 in all categories

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

## Deployment

### Build for Production
```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Environment Variables (if needed)
Create `.env.local` file:
```
NEXT_PUBLIC_API_URL=https://your-api.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Vercel Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
The site is a standard Next.js 15 app and can be deployed to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Cloudflare Pages
- Self-hosted (Docker, PM2, etc.)

## Common Issues & Solutions

### Issue: Fonts not loading
**Solution**: Check that Google Fonts are properly imported in `layout.tsx` and CSS variables are set correctly.

### Issue: Images not showing
**Solution**:
1. Check image URLs are accessible
2. Add domains to `next.config.mjs` if using external images:
```js
images: {
  domains: ['your-image-domain.com'],
},
```

### Issue: Animations not triggering
**Solution**: Ensure component has `'use client'` directive and Intersection Observer is properly configured.

### Issue: TypeScript errors on build
**Solution**: Check that all component imports match file paths and `@/*` alias is working.

### Issue: Slow page load
**Solution**:
1. Optimize images (reduce file size)
2. Check that below-fold images use `loading="lazy"`
3. Remove unused dependencies
4. Run `npm run build` and check bundle size

## File Paths Reference

All absolute file paths for easy reference:

```
Homepage Files:
/home/mm/dev/horizon/horizon-website/app/page.tsx
/home/mm/dev/horizon/horizon-website/app/layout.tsx
/home/mm/dev/horizon/horizon-website/app/globals.css

Component Files:
/home/mm/dev/horizon/horizon-website/components/home/HeroSection.tsx
/home/mm/dev/horizon/horizon-website/components/home/TrustIndicators.tsx
/home/mm/dev/horizon/horizon-website/components/home/ValueProposition.tsx
/home/mm/dev/horizon/horizon-website/components/home/SolutionNavigator.tsx
/home/mm/dev/horizon/horizon-website/components/home/IndustryChallenges.tsx
/home/mm/dev/horizon/horizon-website/components/home/ROICalculatorPreview.tsx
/home/mm/dev/horizon/horizon-website/components/home/FinalCTA.tsx

Documentation:
/home/mm/dev/horizon/horizon-website/DESIGN_SYSTEM.md
/home/mm/dev/horizon/horizon-website/IMPLEMENTATION_GUIDE.md
```

## Next Steps

1. **Content Review**: Replace all placeholder content with actual copy
2. **Image Assets**: Replace placeholder images with professional photography
3. **Brand Assets**: Add real customer logos to Trust Indicators section
4. **Forms**: Add lead capture forms with validation
5. **Analytics**: Integrate Google Analytics or your preferred analytics platform
6. **SEO**: Add meta tags, Open Graph images, schema markup
7. **Testing**: Run through full QA checklist above
8. **Deploy**: Push to production hosting platform

## Support Resources

- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- React Documentation: https://react.dev
- Web.dev Performance: https://web.dev/performance
- WCAG Guidelines: https://www.w3.org/WAI/WCAG21/quickref/

---

**Need Help?** All components are fully documented with comments. Each section uses consistent patterns making it easy to understand and modify.
