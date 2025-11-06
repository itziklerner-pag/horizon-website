# Quick Reference Card - Horizon Homepage

## At a Glance

### Project Info
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter (UI) + IBM Plex Mono (technical)
- **Total Components**: 7 homepage sections

### File Locations
```
📁 /app
   ├── page.tsx          ← Main homepage
   ├── layout.tsx        ← Root layout with fonts
   └── globals.css       ← Styles & animations

📁 /components/home
   ├── HeroSection.tsx           ← Hero + CTA
   ├── TrustIndicators.tsx       ← Metrics & logos
   ├── ValueProposition.tsx      ← 4 benefits
   ├── SolutionNavigator.tsx     ← Facility selector
   ├── IndustryChallenges.tsx    ← Comparison table
   ├── ROICalculatorPreview.tsx  ← Calculator
   └── FinalCTA.tsx              ← CTA + footer
```

## Brand Colors (Copy-Paste Ready)

```css
/* Primary */
--deep-slate: #1A2332      /* Dark backgrounds, text */
--electric-cyan: #00D9E8   /* CTAs, accents */
--platinum: #E5E8EB        /* Borders, subtle BG */

/* Secondary */
--cyan-dark: #00B8C5       /* Hover states */
--cyan-light: #4DE4EF      /* Gradients */

/* Tailwind Classes */
bg-[#1A2332]    /* Deep slate */
bg-[#00D9E8]    /* Electric cyan */
text-[#1A2332]  /* Dark text */
text-[#00D9E8]  /* Cyan text */
border-[#E5E8EB] /* Platinum border */
```

## Common Patterns

### Section Template
```tsx
'use client';
import { useEffect, useRef, useState } from 'react';

export function YourSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {/* Your content */}
        </div>
      </div>
    </section>
  );
}
```

### Responsive Grid
```tsx
{/* Mobile: 1 col, Tablet: 2 col, Desktop: 4 col */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {/* Items */}
</div>
```

### Card with Hover
```tsx
<div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
  {/* Card content */}
</div>
```

### Gradient Button
```tsx
<button className="px-8 py-4 bg-[#00D9E8] text-[#1A2332] font-semibold rounded-lg hover:bg-[#00B8C5] transition-all duration-300 hover:scale-105 hover:shadow-2xl">
  Click Me
</button>
```

## Animation Classes

```css
/* Fade animations */
.animate-fade-up        /* Fade in + move up */
.animate-fade-in        /* Simple fade in */
.animate-slide-in-right /* Slide from left */
.animate-slide-in-left  /* Slide from right */

/* Delays */
.animation-delay-200    /* 200ms delay */
.animation-delay-400    /* 400ms delay */
.animation-delay-600    /* 600ms delay */
.animation-delay-800    /* 800ms delay */

/* Hover effects */
.hover-lift             /* Lift on hover */
.hover:scale-105        /* Grow on hover */

/* Custom effects */
.text-gradient          /* Cyan gradient text */
.gradient-overlay       /* Dark gradient overlay */
.glass-effect           /* Glass morphism */
```

## Typography Scale

```tsx
{/* Display - Hero headlines */}
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">

{/* H1 - Page titles */}
<h1 className="text-4xl sm:text-5xl font-bold">

{/* H2 - Section headers */}
<h2 className="text-3xl sm:text-4xl font-bold">

{/* H3 - Card titles */}
<h3 className="text-2xl font-bold">

{/* Body - Default */}
<p className="text-base sm:text-lg">

{/* Small - Secondary */}
<p className="text-sm">

{/* Mono - Technical specs */}
<span className="font-mono text-2xl">99.999%</span>
```

## Spacing System

```css
/* Padding/Margin scale */
p-4   → 1rem (16px)
p-6   → 1.5rem (24px)
p-8   → 2rem (32px)
p-12  → 3rem (48px)
p-16  → 4rem (64px)
p-24  → 6rem (96px)

/* Section padding */
py-16 → Small section
py-24 → Standard section
py-32 → Large section

/* Container */
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```

## Common Component Snippets

### Metric Card
```tsx
<div className="bg-white rounded-2xl p-8 shadow-lg">
  <div className="text-4xl mb-3">⚡</div>
  <div className="text-3xl font-bold text-[#1A2332] font-mono">
    99.999%
  </div>
  <div className="text-sm text-gray-600">Uptime Record</div>
</div>
```

### CTA Button Pair
```tsx
<div className="flex flex-col sm:flex-row gap-4">
  <button className="px-8 py-4 bg-[#00D9E8] text-[#1A2332] font-semibold rounded-lg hover:bg-[#00B8C5] transition-all">
    Primary Action
  </button>
  <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all">
    Secondary Action
  </button>
</div>
```

### Feature List
```tsx
<ul className="space-y-3">
  {features.map((feature) => (
    <li key={feature} className="flex items-center text-gray-700">
      <svg className="w-5 h-5 text-[#00D9E8] mr-3" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      {feature}
    </li>
  ))}
</ul>
```

## Image Guidelines

### Hero Background
```tsx
<Image
  src="https://images.unsplash.com/photo-[id]?w=1920&h=1080"
  alt="Description"
  fill
  className="object-cover"
  priority      // ← For above-fold images
  quality={90}  // ← High quality for hero
/>
```

### Logo
```tsx
<Image
  src="/logo.svg"
  alt="Company Name"
  width={200}
  height={60}
  className="h-12 w-auto"
  priority
/>
```

### Below-fold Images
```tsx
<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  loading="lazy"  // ← Lazy load
  quality={80}    // ← Standard quality
/>
```

## State Management Cheat Sheet

```tsx
// Simple boolean toggle
const [isOpen, setIsOpen] = useState(false);
<button onClick={() => setIsOpen(!isOpen)}>

// Selector state
const [selected, setSelected] = useState('option1');
<button onClick={() => setSelected('option2')}>

// Number input
const [value, setValue] = useState(10);
<input
  type="range"
  value={value}
  onChange={(e) => setValue(Number(e.target.value))}
/>

// Computed values
const calculated = useMemo(() => {
  return value * 2;
}, [value]);
```

## Responsive Breakpoints

```tsx
{/* Mobile first approach */}
className="
  text-3xl          {/* Mobile (all screens) */}
  sm:text-4xl       {/* Tablet: 640px+ */}
  md:text-5xl       {/* Medium: 768px+ */}
  lg:text-6xl       {/* Large: 1024px+ */}
  xl:text-7xl       {/* XL: 1280px+ */}
"

{/* Grid columns */}
className="
  grid
  grid-cols-1       {/* Mobile: 1 column */}
  md:grid-cols-2    {/* Tablet: 2 columns */}
  lg:grid-cols-4    {/* Desktop: 4 columns */}
"

{/* Flex direction */}
className="
  flex
  flex-col          {/* Mobile: stack */}
  sm:flex-row       {/* Tablet+: horizontal */}
"

{/* Visibility */}
className="
  hidden            {/* Hidden on mobile */}
  lg:block          {/* Visible on desktop */}
"
```

## Common CSS Utilities

```css
/* Shadows */
shadow-sm     → Subtle
shadow-lg     → Medium
shadow-2xl    → Large
shadow-none   → Remove

/* Rounded corners */
rounded-lg    → 8px
rounded-xl    → 12px
rounded-2xl   → 16px
rounded-full  → Circle/pill

/* Backdrop effects */
backdrop-blur-sm  → Subtle blur
backdrop-blur-md  → Medium blur
backdrop-blur-lg  → Strong blur

/* Transitions */
transition-all duration-300    → Standard
transition-colors duration-200 → Fast colors
transition-transform          → Transforms only
```

## Git Commands (Quick Deploy)

```bash
# Commit changes
git add .
git commit -m "Update homepage content"
git push

# Deploy to Vercel (auto-deploys on push)
# Or manually:
vercel --prod
```

## Build Commands

```bash
# Development
npm run dev          # Start dev server (localhost:3000)

# Production
npm run build        # Build for production
npm run start        # Start production server

# Utilities
npm run lint         # Run ESLint
```

## Debugging Quick Fixes

```bash
# Port already in use
kill -9 $(lsof -ti:3000)  # Kill process on port 3000

# Clear Next.js cache
rm -rf .next
npm run dev

# TypeScript errors
npm run build  # Shows all errors at once

# Tailwind not working
# Check tailwind.config.js includes correct paths
# Restart dev server
```

## Performance Checklist

```
✓ Images use Next.js Image component
✓ Hero images have priority flag
✓ Below-fold images use loading="lazy"
✓ Fonts use next/font (automatic optimization)
✓ No inline styles (use Tailwind)
✓ Animations use CSS (not JavaScript)
✓ Components use 'use client' only when needed
✓ No console.log in production code
```

## Accessibility Checklist

```
✓ All images have alt text
✓ Buttons have descriptive text
✓ Color contrast meets WCAG AA (4.5:1)
✓ Focus states visible
✓ Heading hierarchy (h1 → h2 → h3)
✓ Interactive elements keyboard accessible
✓ ARIA labels where needed
```

## Common Gotchas

1. **Images not loading**: Add domain to next.config.mjs
2. **Fonts not loading**: Check Google Fonts import in layout.tsx
3. **Animations not working**: Ensure 'use client' directive at top
4. **TypeScript errors**: Check import paths use @/* alias
5. **Styles not applying**: Restart dev server after globals.css changes
6. **Build fails**: Run `npm run build` to see all errors

## Support & Resources

- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs
- Icons: Use emojis or https://heroicons.com
- Images: https://unsplash.com (free stock photos)
- Fonts: https://fonts.google.com

---

**Pro Tip**: Keep this file open in a second tab while developing. Use Cmd/Ctrl+F to quickly find what you need.
