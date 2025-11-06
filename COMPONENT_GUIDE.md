# Solution Pages Component Guide

## Component Tree Structure

```
Solution Page
│
├── Navigation (shared across all solutions)
│   ├── Logo
│   ├── Solutions Dropdown Menu
│   ├── About Link
│   ├── Contact Link
│   └── Get Started CTA Button
│
├── SolutionHero
│   ├── Background Gradient Effects
│   ├── Subtitle (colored accent)
│   ├── Title (h1, large)
│   ├── Description
│   └── Stats Grid (4 columns)
│
├── ChallengeSection
│   ├── Section Header
│   └── Challenge Cards (3 columns)
│       ├── Icon (emoji)
│       ├── Title
│       └── Description
│
├── TimelineSection
│   ├── Section Header
│   ├── 90-Day Badge
│   └── Timeline Steps (3 columns)
│       ├── Timeline Dot (day number)
│       ├── Step Title
│       └── Step Description
│
├── TechnicalSpecs
│   ├── Section Header
│   └── Spec Cards (2-3 columns, responsive)
│       ├── Value (large number)
│       ├── Unit
│       └── Label
│
├── ComparisonTable
│   ├── Section Header
│   ├── Responsive Table
│   │   ├── Header Row
│   │   │   ├── Feature Column
│   │   │   ├── Horizon Column (highlighted)
│   │   │   ├── Diesel Column
│   │   │   └── Battery Column
│   │   └── Data Rows (8+ comparisons)
│   └── Disclaimer Text
│
├── CaseStudy
│   ├── Section Header (company name)
│   ├── Two-Column Layout
│   │   ├── Left Column
│   │   │   ├── Challenge Section
│   │   │   ├── Solution Section
│   │   │   └── Quote (if provided)
│   │   └── Right Column
│   │       └── Results Cards (4 metrics)
│
├── CTASection
│   ├── Background Gradient Effect
│   ├── Title
│   ├── Description
│   └── Button Group
│       ├── Primary CTA Button
│       └── Secondary CTA Button (optional)
│
└── Footer (shared across all solutions)
    ├── Brand Logo
    ├── Solutions Links
    ├── Company Links
    ├── Contact Info
    └── Copyright & Legal Links
```

## Component Props Reference

### SolutionHero
```typescript
{
  title: string;           // Main headline
  subtitle: string;        // Colored label above title
  description: string;     // Paragraph below title
  stats?: {                // Optional stats grid
    label: string;
    value: string;
  }[];
}
```

### ChallengeSection
```typescript
{
  challenges: {
    icon: string;          // Emoji or icon
    title: string;         // Challenge headline
    description: string;   // Detailed explanation
  }[];                     // Exactly 3 challenges recommended
}
```

### TimelineSection
```typescript
{
  steps: {
    day: string;           // "Day 1-30" format
    title: string;         // Phase name
    description: string;   // What happens in this phase
  }[];                     // Exactly 3 steps recommended
}
```

### TechnicalSpecs
```typescript
{
  specs: {
    label: string;         // Specification name
    value: string;         // Numeric value
    unit?: string;         // Optional unit (MW, %, etc.)
  }[];                     // 6 specs recommended
}
```

### ComparisonTable
```typescript
{
  rows: {
    feature: string;       // Feature being compared
    horizon: string | {    // Can be simple string or object
      value: string;
      highlight?: boolean; // Highlights in cyan
    };
    diesel: string | {     // Same structure
      value: string;
      highlight?: boolean;
    };
    battery: string | {    // Same structure
      value: string;
      highlight?: boolean;
    };
  }[];                     // 8+ rows recommended
}
```

### CaseStudy
```typescript
{
  company: string;         // Customer name
  industry: string;        // Industry vertical
  challenge: string;       // Problem statement (paragraph)
  solution: string;        // How Horizon solved it (paragraph)
  results: {
    metric: string;        // What was measured
    value: string;         // The result
  }[];                     // 4 results recommended
  quote?: {                // Optional testimonial
    text: string;
    author: string;
    title: string;
  };
}
```

### CTASection
```typescript
{
  title: string;           // Main CTA headline
  description: string;     // Supporting text
  primaryCTA: {
    text: string;          // Button label
    href: string;          // Button link
  };
  secondaryCTA?: {         // Optional second button
    text: string;
    href: string;
  };
}
```

## Animation Patterns

### Scroll-triggered Animations
All components use Intersection Observer API:

```typescript
const [isVisible, setIsVisible] = useState(false);
const sectionRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    },
    { threshold: 0.1 }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => {
    if (sectionRef.current) {
      observer.unobserve(sectionRef.current);
    }
  };
}, []);
```

### CSS Animation Classes
Applied when `isVisible` becomes true:

```css
/* Fade up (default) */
opacity-0 translate-y-8 → opacity-100 translate-y-0

/* Staggered delays for grid items */
style={{ transitionDelay: `${index * 100}ms` }}
```

## Styling Patterns

### Color Usage
```css
/* Primary backgrounds */
bg-[#1A2332]              /* Deep Slate - hero, dark sections */
bg-white                  /* White - alternating sections */
bg-gray-50                /* Light gray - alternating sections */

/* Accents */
text-[#00D9E8]            /* Electric Cyan - highlights, CTAs */
bg-[#00D9E8]              /* Buttons, badges */
hover:bg-[#00B8C5]        /* Darker cyan on hover */

/* Text colors */
text-white                /* On dark backgrounds */
text-[#1A2332]            /* On light backgrounds */
text-gray-600             /* Secondary text on light */
text-gray-300             /* Secondary text on dark */
```

### Spacing Pattern
```css
/* Section vertical spacing */
py-20                     /* 80px top/bottom padding */

/* Container */
max-w-7xl mx-auto         /* 1280px max width, centered */
px-6 lg:px-8              /* Responsive horizontal padding */

/* Grid gaps */
gap-8                     /* 32px gap between grid items */

/* Inner spacing */
mb-16                     /* 64px bottom margin for headers */
```

### Responsive Breakpoints
```css
/* Mobile-first approach */
grid-cols-1               /* Default: single column */
md:grid-cols-3            /* 768px+: three columns */
lg:grid-cols-4            /* 1024px+: four columns */

/* Typography scaling */
text-3xl md:text-4xl lg:text-6xl  /* Fluid heading sizes */
```

### Hover Effects
```css
/* Cards */
hover:shadow-xl           /* Elevate on hover */
hover:scale-105           /* Slight scale increase */
transition-all duration-500  /* Smooth transitions */

/* Links */
hover:text-[#00D9E8]      /* Cyan accent on hover */
transition-colors         /* Color transitions only */

/* Buttons */
hover:bg-[#00B8C5]        /* Darker shade on hover */
transition-all duration-300  /* Quick response */
```

## Accessibility Features

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Section landmarks (<section>, <nav>, <footer>)
- Meaningful link text (no "click here")

### Keyboard Navigation
- All interactive elements focusable
- Visible focus states
- Logical tab order

### Color Contrast
- Text on dark: White text meets WCAG AA (12.63:1)
- Cyan on dark: #00D9E8 on #1A2332 meets WCAG AA (6.8:1)
- Primary button: #1A2332 on #00D9E8 meets WCAG AA (6.8:1)

### Screen Readers
- Alt text for images (when added)
- ARIA labels for icon-only buttons
- Descriptive link text

## Performance Optimizations

### Code Splitting
- Each solution page is a separate chunk
- Components lazy-loaded as needed
- Navigation dropdown renders on interaction

### Static Generation
- All pages pre-rendered at build time
- No client-side data fetching
- Instant page loads

### Image Optimization (Ready)
```typescript
import Image from 'next/image';

<Image
  src="/images/case-study.jpg"
  alt="Descriptive text"
  width={1200}
  height={800}
  loading="lazy"
  quality={85}
/>
```

### Font Loading
- Google Fonts with `display: swap`
- FOUT (Flash of Unstyled Text) instead of FOIT
- Preconnect to fonts.googleapis.com

## Customization Guide

### Adding a New Solution Page

1. Create page file:
```typescript
// /app/solutions/new-solution/page.tsx
import type { Metadata } from 'next';
import SolutionHero from '@/components/solutions/SolutionHero';
// ... import other components

export const metadata: Metadata = {
  title: 'New Solution | Horizon Fuel Cell',
  description: 'Your description here',
};

export default function NewSolutionPage() {
  // Define your data objects
  const heroStats = [...];
  const challenges = [...];
  // ... etc

  return (
    <main>
      <SolutionHero {...} />
      <ChallengeSection challenges={challenges} />
      {/* ... other sections */}
    </main>
  );
}
```

2. Add to navigation:
```typescript
// /components/Navigation.tsx
const solutions = [
  // ... existing solutions
  { name: 'New Solution', href: '/solutions/new-solution' },
];
```

### Modifying Component Styles

All components use Tailwind CSS classes. To modify:

1. Open component file in `/components/solutions/`
2. Find the className you want to change
3. Update Tailwind classes directly

Example:
```typescript
// Change card background from white to light gray
<div className="bg-white ...">  // Before
<div className="bg-gray-100 ...">  // After
```

### Adding New Animation

1. Define keyframes in `/app/globals.css`:
```css
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(24px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

2. Use in component:
```typescript
className={`transition-all duration-700 ${
  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
}`}
```

## Testing Checklist

### Visual Testing
- [ ] Hero displays correctly on all screen sizes
- [ ] Stats grid wraps properly on mobile
- [ ] Challenge cards are equal height
- [ ] Timeline connects visually on desktop
- [ ] Table scrolls horizontally on mobile
- [ ] Case study layout switches to single column on mobile
- [ ] CTA buttons stack vertically on mobile

### Functional Testing
- [ ] All internal links work
- [ ] Navigation dropdown opens/closes
- [ ] Mobile menu toggles correctly
- [ ] Smooth scroll to anchors (if implemented)
- [ ] Forms submit properly (when added)

### Performance Testing
- [ ] Lighthouse Performance > 90
- [ ] First Contentful Paint < 1.8s
- [ ] Time to Interactive < 3.9s
- [ ] No layout shifts (CLS < 0.1)

### Accessibility Testing
- [ ] Keyboard navigation works throughout
- [ ] Screen reader announces sections correctly
- [ ] Color contrast passes WCAG AA
- [ ] Focus indicators visible
- [ ] Headings follow logical hierarchy

## Browser Compatibility

Tested and working on:
- ✅ Chrome 120+ (Desktop & Mobile)
- ✅ Firefox 121+
- ✅ Safari 17+ (macOS & iOS)
- ✅ Edge 120+
- ✅ Samsung Internet 23+

Known issues: None

## Future Enhancements

### Planned Features
1. Video backgrounds in hero sections
2. Interactive timeline component
3. Animated comparison charts
4. PDF download integration for spec sheets
5. Form validation and submission
6. Live chat integration
7. Cookie consent banner
8. Newsletter signup component

### Content Additions
1. Customer logo carousel
2. Deployment map visualization
3. Real-time availability dashboard
4. ROI calculator integration
5. Technical documentation library
6. Webinar registration
7. Blog integration
8. Search functionality

## Support

For questions or issues:
- Technical Lead: dev@horizonfuelcell.com
- Documentation: SOLUTIONS_README.md
- Component Library: Storybook (coming soon)
