# "Why Horizon" Pages Component Map

## Page Routes
- `/why/time-to-market` - 90 Days From PO to Power-On
- `/why/reliability` - 99.999% Uptime Proven
- `/why/environmental` - Zero-Emission Compliance

---

## 1. Time to Market Page Structure

```
┌─────────────────────────────────────────────────────────┐
│ WhyHero Component                                       │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│ "90 Days From PO to Power-On: How We Do It"           │
│ [90 Days] [60% Faster] [100+ Projects] [4 Phases]     │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ TimeProblemSection                                      │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│ The Time Problem in Data Centers                       │
│ [Market Pressure] [Revenue Loss] [Barriers]            │
│ → Horizon Solution: 90-Day Deployment                  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ DeploymentTimeline Component                           │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│ 4-Phase Process (Interactive Click-to-Expand)         │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐     │
│ │ Phase 1 │ │ Phase 2 │ │ Phase 3 │ │ Phase 4 │     │
│ │ Days    │ │ Days    │ │ Days    │ │ Days    │     │
│ │ 1-30    │ │ 31-60   │ │ 61-80   │ │ 81-90   │     │
│ └─────────┘ └─────────┘ └─────────┘ └─────────┘     │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ TimelineComparison Component                           │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│ Horizon:  ████████████ 90 days                        │
│ Diesel:   ████████████████████████ 180 days           │
│ Nat Gas:  ████████████████████████████████████ 365 d  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ InteractiveTimelineTool Component                      │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│ Power: [━━━━●━━━━] 10 MW                              │
│ Urgency: [Standard] [Expedited]                        │
│ Location: [Urban] [Remote]                             │
│ → Your Timeline: 85 days                               │
│ → Revenue Protected: $1.5M                             │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ CaseStudies Component (3 Studies)                      │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│ [CloudScale] [EdgeTech] [MidWest]                      │
│ Story | Timeline | Results                             │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ RiskMitigation Component (6 Risks)                     │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│ [Manufacturing] [Permitting] [Site] [H2] [Weather]    │
│ Each with mitigation strategy + guarantee              │
└─────────────────────────────────────────────────────────┘

---

## 2. Reliability Page Structure

┌─────────────────────────────────────────────────────────┐
│ WhyHero Component                                       │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│ "99.999% Uptime: Proven Across 50M Hours"             │
│ [99.999%] [50M+ Hrs] [26 min/yr] [100+ Sites]         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ ReliabilityMatterSection                                │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│ [$9K/min] [Customer Churn] [SLA Requirements]         │
│ → Fuel Cells: Inherently More Reliable                │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ ReliabilityArchitecture Component (4 Features)         │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│ Tabs: [N+1] [Failover] [Monitoring] [Isolation]       │
│ ┌──────────────────┐ ┌──────────────────┐            │
│ │ Feature Details  │ │ Architecture     │            │
│ │ + Capabilities   │ │ Diagram          │            │
│ └──────────────────┘ └──────────────────┘            │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ PredictiveMaintenance Component                        │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│ [AI Detection] [Auto Parts] [Scheduled Windows]       │
│ Reactive vs Predictive Comparison                     │
│ Real-Time Dashboard Preview                            │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ FleetStatistics Component                              │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│ Animated Counters:                                     │
│ [50M+ Hours] [99.999%] [26 min/yr] [0 Outages]       │
│ Performance Metrics Cards                              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ UptimeGuarantee Component                              │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│ ┌─────────────────┐ ┌─────────────────┐              │
│ │ 99.99% SLA      │ │ 99.999% Premium │              │
│ │ Standard        │ │ Five Nines      │              │
│ └─────────────────┘ └─────────────────┘              │
│ Coverage Details + Exclusions                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ CustomerTestimonials Component                         │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│ [DataVault] [CloudEdge] [SecureHost]                  │
│ Quote + Metrics + Installation Details                │
│ Trust Badges: 4.9/5 | 98% Recommend                   │
└─────────────────────────────────────────────────────────┘

---

## 3. Environmental Page Structure

┌─────────────────────────────────────────────────────────┐
│ WhyHero Component                                       │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│ "Zero-Emission Compliance Today, H2-Ready Tomorrow"   │
│ [50-70%] [0 NOx] [2026 H2] [100+ Sites]              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ EnvironmentalImperativeSection                         │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│ [Regulations] [ESG] [Carbon Pricing]                  │
│ → Only Path to Zero-Emission Power                    │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ RegulatoryCompliance Component                         │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│ Tabs: [CARB] [EPA] [Local]                            │
│ ┌──────────────────┐ ┌──────────────────┐            │
│ │ Requirements     │ │ Emissions        │            │
│ │ + Horizon Cert   │ │ Comparison       │            │
│ └──────────────────┘ └──────────────────┘            │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ EmissionsReduction Component                           │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│ Counters: [50-70%] [100% NOx] [25K Tons]             │
│ ┌─────────────┐ ┌─────────────┐                      │
│ │ Diesel      │ │ Fuel Cell   │                      │
│ │ 144 tons    │ │ 72 tons     │                      │
│ └─────────────┘ └─────────────┘                      │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ HydrogenRoadmap Component                              │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│ Timeline: 2024 → 2025 → 2026 → 2027+                  │
│ [Natural Gas] [20% H2] [50% H2] [100% H2]            │
│ Infrastructure scaling: $8B funding, 50+ projects     │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ CertificationBadges Component                          │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│ [CARB] [EPA] [ISO 14001] [UL 2267]                   │
│ Environmental Commitments                              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ CarbonCalculator Component                             │
│ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━│
│ Inputs: Power [━━●━━] Operating Hours [━━●━━]         │
│ Current: [Diesel] [New]                                │
│ ┌──────────────────┐ ┌──────────────────┐            │
│ │ Natural Gas      │ │ Green Hydrogen   │            │
│ │ 72 tons saved    │ │ 144 tons saved   │            │
│ └──────────────────┘ └──────────────────┘            │
│ Equivalents: Trees planted, Cars removed               │
└─────────────────────────────────────────────────────────┘

---

## Shared Components

### WhyHero
- Customizable background variant (cyan, green, slate)
- 4 stat cards with animated appearance
- Subtitle badge with icon
- Responsive grid layout

### StatCounter
- Intersection Observer triggered animation
- Easing function for smooth counting
- Configurable duration, decimals, prefix/suffix
- Color customization

### Navigation (layout.tsx)
- Sticky top navigation
- 3 page links with icons
- Mobile responsive drawer
- Contact CTA button

### Footer (layout.tsx)
- 4-column grid layout
- Why Horizon links
- Solutions links
- Company links
- Copyright notice

---

## Performance Optimizations

✅ Static generation (no server-side rendering needed)
✅ Intersection Observer for scroll animations (not constant RAF)
✅ CSS animations (hardware accelerated)
✅ Component code splitting
✅ Optimized bundle sizes
✅ Lazy loading for below-fold content

## Accessibility Features

✅ Semantic HTML (header, nav, main, section, footer)
✅ Proper heading hierarchy (H1 → H2 → H3)
✅ Focus states on interactive elements
✅ Keyboard navigation support
✅ Color contrast WCAG AA compliant
✅ Screen reader friendly labels

