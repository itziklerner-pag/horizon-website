# Quick Performance Guide - Horizon Fuel Cell Website

## Common Tasks & Best Practices

### Adding New Images

**Always use Next.js Image component:**

```tsx
import Image from 'next/image';

// For hero/above-fold images
<Image
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  width={1920}
  height={1080}
  priority  // Load immediately
  quality={85}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>

// For below-fold images
<Image
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  loading="lazy"  // Load when scrolled into view
  quality={80}
/>
```

**Generate blur placeholder:**
```bash
# Use https://blurred.dev/ or
npx plaiceholder generate image.jpg
```

### Adding Heavy Components

**Use dynamic imports:**

```tsx
import dynamic from 'next/dynamic';

// With loading state
const HeavyComponent = dynamic(
  () => import('./HeavyComponent'),
  {
    loading: () => <SkeletonLoader />,
    ssr: true,  // Enable server-side rendering
  }
);

// Client-side only (for charts, maps)
const ClientOnlyComponent = dynamic(
  () => import('./ClientComponent'),
  { ssr: false }
);
```

### Adding External Libraries

**Before installing, check:**
1. Bundle size: `npm view package-name dist.unpackedSize`
2. Tree-shakeable: Check if ES modules supported
3. Alternatives: Lighter-weight options?

**Optimize imports:**
```tsx
// ❌ Don't import entire library
import _ from 'lodash';

// ✅ Import only what you need
import debounce from 'lodash/debounce';
```

### Performance Checklist for New Features

```
□ Images use Next.js Image component
□ Heavy components are lazy-loaded
□ No console.log in production code
□ Proper loading states for async content
□ Animations use transform/opacity (GPU accelerated)
□ No layout shifts (CLS)
□ Proper TypeScript types
□ Accessibility attributes (alt, aria-label)
□ Mobile-responsive design
□ Bundle impact < 50KB
```

## Performance Testing Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Analyze bundle size
npm run build
# Then check .next/analyze/client.html

# Lighthouse audit
npx lighthouse http://localhost:3000 --view

# Check Core Web Vitals
npx web-vitals --url http://localhost:3000
```

## Common Performance Pitfalls to Avoid

### ❌ Don't Do This

```tsx
// Large images without optimization
<img src="large-image.jpg" />

// Importing entire libraries
import _ from 'lodash';

// Inline styles causing re-renders
<div style={{ width: dynamicWidth }}>

// useEffect without dependencies
useEffect(() => { /* ... */ });

// Blocking the main thread
const result = heavyComputation();
```

### ✅ Do This Instead

```tsx
// Optimized images
<Image src="image.jpg" width={800} height={600} />

// Tree-shakeable imports
import debounce from 'lodash/debounce';

// CSS classes or useMemo for styles
const styles = useMemo(() => ({ width: dynamicWidth }), [dynamicWidth]);

// Proper dependencies
useEffect(() => { /* ... */ }, [dependency]);

// Web Workers or async
const result = await heavyComputationAsync();
```

## Animation Performance

**Use GPU-accelerated properties:**
```css
/* ✅ Fast - GPU accelerated */
transform: translateX(100px);
opacity: 0.5;

/* ❌ Slow - triggers layout */
left: 100px;
width: 50%;
```

**Optimize animations:**
```tsx
// Use will-change sparingly
<div className="hover:scale-105 will-change-transform">

// Prefer CSS animations over JS
<div className="animate-fade-in">

// Use requestAnimationFrame for JS animations
requestAnimationFrame(() => {
  // animation code
});
```

## Bundle Size Budget

| Resource Type | Budget | Alert If |
|---------------|--------|----------|
| Initial JS    | 200KB  | >250KB   |
| Page JS       | 100KB  | >150KB   |
| CSS           | 30KB   | >50KB    |
| Images/page   | 800KB  | >1MB     |

## Core Web Vitals Quick Reference

```
LCP (Largest Contentful Paint)
  Good: < 2.5s
  Needs Improvement: 2.5s - 4.0s
  Poor: > 4.0s

  Fix: Optimize images, remove render-blocking resources

FID (First Input Delay) / INP (Interaction to Next Paint)
  Good: < 100ms (FID) / < 200ms (INP)
  Needs Improvement: 100-300ms / 200-500ms
  Poor: > 300ms / > 500ms

  Fix: Code splitting, minimize JavaScript, use web workers

CLS (Cumulative Layout Shift)
  Good: < 0.1
  Needs Improvement: 0.1 - 0.25
  Poor: > 0.25

  Fix: Set image dimensions, reserve space for ads, avoid inserting content
```

## Emergency Performance Fixes

### If LCP is slow:
1. Check if hero image has `priority` flag
2. Verify image is optimized (WebP/AVIF)
3. Remove render-blocking CSS/JS
4. Enable CDN caching

### If JavaScript is too large:
1. Run bundle analyzer
2. Look for large dependencies
3. Implement code splitting
4. Remove unused code

### If CLS is high:
1. Set explicit width/height on images
2. Reserve space for dynamic content
3. Avoid inserting content above existing content
4. Use CSS aspect-ratio

## File Size Limits

```
Image files:
  Hero images:     < 500KB (compressed)
  Thumbnails:      < 100KB
  Icons/logos:     < 50KB

Code files:
  Component:       < 20KB
  Page:            < 50KB
  Utility:         < 10KB

Total page weight:
  Initial load:    < 1MB
  Lazy loaded:     < 500KB
```

## Monitoring Checklist

**Before each deployment:**
```
□ npm run build succeeds
□ No console errors in browser
□ Lighthouse score > 90
□ LCP < 2.5s
□ CLS < 0.1
□ Bundle size within budget
□ All images optimized
□ Mobile testing passed
```

**After deployment:**
```
□ Production URL tested
□ Core Web Vitals checked
□ Error monitoring active
□ Performance alerts configured
```

## Quick Wins for Performance

1. **Enable compression** - Already configured in next.config.ts
2. **Use CDN** - For static assets
3. **Optimize images** - Always use Next.js Image
4. **Code splitting** - Dynamic imports for heavy components
5. **Lazy loading** - Below-fold content
6. **Font optimization** - Already using font-display: swap
7. **Remove unused code** - Regular dependency audits
8. **Cache effectively** - 1-year cache for static assets
9. **Minimize JavaScript** - Already enabled in production
10. **Preload critical assets** - Use `priority` flag

## Resources & Tools

**Performance Testing:**
- Lighthouse: Built into Chrome DevTools
- WebPageTest: https://webpagetest.org
- PageSpeed Insights: https://pagespeed.web.dev

**Bundle Analysis:**
- Next.js Bundle Analyzer: npm run build
- Bundlephobia: https://bundlephobia.com

**Image Optimization:**
- Squoosh: https://squoosh.app
- Sharp: Already used by Next.js
- Placeholder generator: https://blurred.dev

**Learning:**
- Web.dev Performance: https://web.dev/performance
- Next.js Optimization: https://nextjs.org/docs/app/building-your-application/optimizing

## Need Help?

1. Check PERFORMANCE_OPTIMIZATION_REPORT.md for detailed info
2. Review PERFORMANCE_CHECKLIST.md for implementation status
3. Read PERFORMANCE_SUMMARY.md for metrics overview
4. Consult Next.js docs: https://nextjs.org/docs

---

**Remember:** Every millisecond counts. Prioritize performance in every feature.
