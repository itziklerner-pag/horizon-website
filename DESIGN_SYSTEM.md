# Horizon Fuel Cell Homepage - Design System

## Overview
This homepage features a modern, conversion-focused design built for Horizon Fuel Cell North America's data center energy solutions. The design emphasizes rapid deployment messaging, trust-building, and clear value proposition communication.

## Brand Guidelines

### Color Palette
```css
/* Primary Colors */
Deep Slate: #1A2332 (Primary text, backgrounds)
Electric Cyan: #00D9E8 (Primary CTA, accents)
Platinum: #E5E8EB (Borders, subtle backgrounds)

/* Secondary Colors */
Cyan Dark: #00B8C5 (Hover states)
Cyan Light: #4DE4EF (Gradients)

/* Semantic Grays */
Gray 50: #F8FAFC (Light backgrounds)
Gray 100: #F1F5F9
Gray 200: #E2E8F0
Gray 600: #475569 (Secondary text)
```

### Typography
- **Headlines & UI**: Inter (Google Fonts)
  - Weights: 300, 400, 500, 600, 700, 800
  - Used for all headlines, body text, and UI elements

- **Technical Specs & Data**: IBM Plex Mono (Google Fonts)
  - Weights: 400, 500, 600
  - Used for metrics, statistics, technical specifications

### Typography Scale
```
Display: 56-72px (4xl-7xl) - Hero headlines
H1: 48-60px (5xl-6xl) - Page titles
H2: 36-48px (4xl-5xl) - Section headers
H3: 24-30px (2xl-3xl) - Card titles
Body: 16-20px (base-xl) - Default text
Small: 14px (sm) - Secondary text
Tiny: 12px (xs) - Captions, labels
```

## Component Architecture

### Three-Tier Token System
```css
/* Primitive Tokens (raw values) */
--deep-slate: #1A2332
--electric-cyan: #00D9E8

/* Semantic Tokens (purpose-based) */
--color-primary: var(--electric-cyan)
--color-text: var(--deep-slate)

/* Component Tokens (specific usage) */
--button-primary-bg: var(--electric-cyan)
--button-primary-text: var(--deep-slate)
```

## Homepage Sections

### 1. Hero Section
**Purpose**: Immediate impact with core value proposition
**Key Elements**:
- Full-bleed background image with gradient overlay
- Logo placement
- Main headline: "Power Your Data Center in 90 Days, Not Years"
- Dual CTA buttons (primary + secondary)
- Key metrics inline (90 days, 99.999%, 0 emissions)
- Scroll indicator

**Animations**:
- Staggered fade-in for content (200ms delays)
- Bounce animation on scroll indicator
- Hover effects on CTAs with scale and glow

### 2. Trust Indicators
**Purpose**: Build credibility with social proof and metrics
**Key Elements**:
- 4 metric cards with icons
  - 50M+ Operating Hours
  - 99.999% Uptime Record
  - 500+ MW Deployed Capacity
  - 0g CO₂ Emissions
- Customer logo placeholders
- Intersection Observer for scroll-triggered animations

**Design Pattern**: Card-based layout with hover lift effect

### 3. Value Proposition
**Purpose**: Communicate the 4 core benefits
**Key Elements**:
- 2x2 grid of benefit cards:
  1. 90-Day Deployment
  2. Five 9s Reliability
  3. Zero Emissions
  4. Lower TCO
- Each card includes icon, title, description, and stats
- Hover state reveals "Learn more" link

**Micro-interactions**:
- Card lift on hover (-4px translate)
- Icon scale (110%)
- Border color transition to cyan
- Arrow slide on "Learn more"

### 4. Solution Navigator
**Purpose**: Interactive tool to segment by facility type
**Key Elements**:
- 4 facility type selectors:
  - Enterprise Data Center
  - Colocation Facility
  - Edge Computing
  - Critical Infrastructure
- Dynamic content display based on selection
- Split layout: Details (left) + Specs (right)

**Interaction Pattern**: Tab-like selector with active state highlighting

### 5. Industry Challenges
**Purpose**: Show traditional vs Horizon comparison
**Key Elements**:
- 4 challenge comparisons in horizontal card format
- Color-coded sections:
  - Problem (dark background)
  - Traditional (red accent)
  - Horizon (cyan accent)
  - Impact (green accent)
- Bottom stats banner with cyan gradient background

**Visual Hierarchy**: Left-to-right flow showing problem → solution → benefit

### 6. ROI Calculator Preview
**Purpose**: Interactive value demonstration
**Key Elements**:
- Slider input for power requirements (1-50 MW)
- Real-time calculation display:
  - Deployment time
  - Capital savings
  - Annual savings
  - CO₂ avoided
  - Payback period
- Split layout: Input (dark) + Results (light)

**Interaction**: Range slider with custom styling (cyan accent)

### 7. Final CTA
**Purpose**: Convert visitors with strong call-to-action
**Key Elements**:
- Full-width hero treatment with background image
- Main CTA headline
- Dual action buttons
- 3 contact method cards (phone, email, chat)
- Full footer with navigation links
- Bottom bar with logo and legal links

**Background**: Gradient overlay on technology-themed image

## Animation Patterns

### Scroll-Triggered Animations
All sections use Intersection Observer API to trigger animations when scrolling into view:
```javascript
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  },
  { threshold: 0.1 }
);
```

### Animation Classes
```css
.animate-fade-up      /* Fade in with upward motion */
.animate-fade-in      /* Simple fade in */
.animate-slide-in-right /* Slide from left */
.animate-slide-in-left  /* Slide from right */
.animate-float        /* Continuous floating motion */
```

### Staggered Delays
```css
.animation-delay-200  /* 200ms */
.animation-delay-400  /* 400ms */
.animation-delay-600  /* 600ms */
.animation-delay-800  /* 800ms */
```

## Responsive Design

### Breakpoints (Tailwind defaults)
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Mobile-First Approach
All components are designed mobile-first with progressive enhancement:
- Single column layouts on mobile
- Grid layouts activate at `md:` (768px) and `lg:` (1024px)
- Typography scales responsively (text-4xl sm:text-5xl lg:text-7xl)
- Buttons stack vertically on mobile (flex-col sm:flex-row)

## Performance Optimizations

### Image Loading
- Next.js Image component for automatic optimization
- `priority` flag on hero images
- `loading="lazy"` on below-fold images
- Quality set to 90 for hero, 80 for secondary images

### CSS Performance
- Tailwind CSS for minimal bundle size
- CSS containment for complex components
- Hardware-accelerated transforms (translateY, scale)
- Will-change hints avoided (let browser decide)

### JavaScript
- Client components only where interactivity needed
- Intersection Observer for lazy animation triggers
- No heavy animation libraries (pure CSS animations)
- State management kept minimal

## Accessibility Features

### WCAG Compliance
- Minimum contrast ratio 4.5:1 for body text
- Minimum contrast ratio 3:1 for large text
- Focus states on all interactive elements
- Semantic HTML throughout

### Keyboard Navigation
- All buttons keyboard accessible
- Focus visible on range slider
- Logical tab order maintained

### Screen Readers
- Descriptive alt text on all images
- ARIA labels where needed
- Semantic heading hierarchy (h1 → h2 → h3)

## File Structure
```
/app
  ├── page.tsx           # Main homepage component
  ├── layout.tsx         # Root layout with fonts
  └── globals.css        # Global styles and animations

/components/home
  ├── HeroSection.tsx
  ├── TrustIndicators.tsx
  ├── ValueProposition.tsx
  ├── SolutionNavigator.tsx
  ├── IndustryChallenges.tsx
  ├── ROICalculatorPreview.tsx
  └── FinalCTA.tsx
```

## Implementation Notes

### Next.js 15 App Router
- All components use 'use client' directive for interactivity
- Server components used for layout
- Automatic code splitting per route
- Optimized font loading with next/font

### State Management
- React useState for component-level state
- No global state management needed
- Form state handled locally in calculator

### Browser Support
- Modern browsers (last 2 versions)
- Progressive enhancement for older browsers
- Graceful degradation of animations

## Quick Start Customization

### Changing Colors
Edit CSS variables in `/app/globals.css`:
```css
:root {
  --deep-slate: #1A2332;      /* Your dark color */
  --electric-cyan: #00D9E8;   /* Your accent color */
}
```

### Updating Content
Each component file contains hardcoded content that can be easily updated:
- Metrics in `TrustIndicators.tsx`
- Benefits in `ValueProposition.tsx`
- Facility types in `SolutionNavigator.tsx`
- Challenges in `IndustryChallenges.tsx`

### Adding Animations
Use existing animation utilities or add new ones in `globals.css`:
```css
@keyframes yourAnimation {
  from { /* start state */ }
  to { /* end state */ }
}

.animate-your-animation {
  animation: yourAnimation 0.6s ease-out forwards;
}
```

## Social Media Optimization

### Screenshot-Worthy Moments
- Hero section with bold headline
- ROI Calculator showing savings
- Industry comparison charts
- Trust metrics grid

### Aspect Ratios
- Hero optimized for 16:9 desktop screenshots
- Components work well in 9:16 mobile screenshots
- Cards photograph well individually

## Future Enhancements

### Recommended Additions
1. Form validation for lead capture
2. Video player integration for demo
3. Live chat widget integration
4. A/B testing framework
5. Analytics event tracking
6. Cookie consent banner
7. Newsletter signup component
8. Case study modal lightboxes

### Performance Monitoring
- Set up Core Web Vitals tracking
- Monitor LCP (Largest Contentful Paint) < 2.5s
- Keep FID (First Input Delay) < 100ms
- Maintain CLS (Cumulative Layout Shift) < 0.1

---

**Design Philosophy**: This homepage balances visual impact with development speed. Every design decision prioritizes conversion while maintaining implementability within rapid development cycles. The three-tier token system ensures scalability, and the mobile-first approach guarantees universal accessibility.
