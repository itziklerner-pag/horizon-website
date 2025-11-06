# Brand Quick Reference Guide
## Horizon Power - North American Data Center Energy

**For designers, developers, and marketing teams**

---

## Color Palette At-a-Glance

### Primary Colors

| Color Name | Hex | RGB | Usage |
|---|---|---|---|
| **Deep Slate** | `#1A2332` | `rgb(26, 35, 50)` | Headlines, primary text, logos, dark backgrounds |
| **Electric Cyan** | `#00D9E8` | `rgb(0, 217, 232)` | CTAs, accents, data visualization highlights |
| **Platinum** | `#E5E8EB` | `rgb(229, 232, 235)` | Backgrounds, dividers, subtle accents |

### Gradients

```css
/* Energy Gradient - Hero sections, premium elements */
background: linear-gradient(135deg, #1A2332 0%, #004D5C 50%, #00D9E8 100%);

/* Overlay Gradient - Text readability over images */
background: linear-gradient(180deg, rgba(26, 35, 50, 0) 0%, rgba(26, 35, 50, 0.6) 100%);
```

### Functional Colors

| Purpose | Color Name | Hex | When to Use |
|---|---|---|---|
| Success | Hydrogen Green | `#00C896` | Confirmations, positive metrics, green hydrogen references |
| Warning | Amber Alert | `#FF9F1C` | Warnings, important notices, system alerts |
| Error | Critical Red | `#E63946` | Errors, failures, urgent issues |
| Info | Data Blue | `#457B9D` | Informational messages, tips, links |

### Gray Scale

| Name | Hex | Usage |
|---|---|---|
| Gray-50 | `#F8F9FA` | Page backgrounds, alternating sections |
| Gray-100 | `#E5E8EB` | Dividers, disabled backgrounds |
| Gray-200 | `#CED4DA` | Borders, separators |
| Gray-300 | `#ADB5BD` | Placeholder text, disabled text |
| Gray-400 | `#868E96` | Icons, tertiary text |
| Gray-500 | `#495057` | Secondary text, labels |
| Gray-800 | `#1A2332` | Body text, primary content |
| Gray-900 | `#0D1117` | Maximum contrast text |

---

## Typography System

### Font Families

```css
/* Headlines, UI, Navigation */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Technical specs, code, data */
font-family: 'IBM Plex Mono', 'Courier New', monospace;
```

**Font Licenses:**
- Inter: SIL Open Font License (free)
- IBM Plex Mono: SIL Open Font License (free)

### Type Scale

| Element | Size | Line Height | Weight | Usage |
|---|---|---|---|---|
| **Display** | 64px | 1.1 | 700 | Homepage hero only |
| **H1** | 48px | 1.2 | 700 | Page titles |
| **H2** | 32px | 1.3 | 600 | Section headers |
| **H3** | 24px | 1.4 | 600 | Subsections, card titles |
| **H4** | 20px | 1.5 | 600 | Content headers |
| **Body Large** | 18px | 1.6 | 400 | Intro paragraphs, subheadings |
| **Body** | 16px | 1.6 | 400 | Default body text |
| **Body Small** | 14px | 1.5 | 400 | Captions, secondary info |
| **Caption** | 12px | 1.4 | 500 | Labels, metadata |
| **Monospace** | 14px | 1.6 | 400 | Technical specs, data |

### Font Weight Reference

- **400 (Regular)**: Body text, general content
- **500 (Medium)**: Subtle emphasis, labels
- **600 (Semi-Bold)**: Subheadings, important UI
- **700 (Bold)**: Headlines, primary CTAs
- **800 (Extra Bold)**: Display text only (use sparingly)

---

## Common Layouts

### Hero Section (Homepage)

```
┌─────────────────────────────────────────┐
│                                         │
│  [Full-bleed background image/video]   │
│  + Energy gradient overlay (60%)       │
│                                         │
│    HEADLINE (64px, white, bold)        │
│    Subheading (18px, white 90%)        │
│                                         │
│    [Electric Cyan CTA Button]          │
│                                         │
│    Currently Powering: 847 MW          │
│    (IBM Plex Mono, 14px)               │
│                                         │
└─────────────────────────────────────────┘
```

### Content Section (Standard)

```
┌─────────────────────────────────────────┐
│                                         │
│  Section Headline (H2, 32px)           │
│  ────────────────                      │  ← 80px cyan line
│                                         │
│  ┌──────────┐  ┌──────────┐           │
│  │  Card 1  │  │  Card 2  │           │
│  │          │  │          │           │
│  │  [Icon]  │  │  [Icon]  │           │
│  │  Title   │  │  Title   │           │
│  │  Text    │  │  Text    │           │
│  └──────────┘  └──────────┘           │
│                                         │
└─────────────────────────────────────────┘

White background cards on Gray-50 section background
OR Gray-50 cards on white section background (alternate)
```

### Data Display Card

```
┌─────────────────────────┐
│                         │
│  99.999%                │ ← 48px, IBM Plex Mono, Bold
│  UPTIME                 │ ← 12px, caps, Gray-500
│                         │
│  ▓▓▓▓▓▓▓▓▓▓░░           │ ← Cyan progress bar
│                         │
│  Real-time monitoring   │ ← 14px, Gray-600
│                         │
└─────────────────────────┘

Shadow: shadow-md
Radius: radius-lg (16px)
Padding: 32px
```

---

## Component Specifications

### Primary CTA Button

**Default State:**
```css
background: #00D9E8; /* Electric Cyan */
color: #1A2332; /* Deep Slate text for contrast */
padding: 16px 32px;
border-radius: 8px;
font-size: 16px;
font-weight: 600;
box-shadow: 0 4px 6px rgba(0, 217, 232, 0.15);
transition: all 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
```

**Hover State:**
```css
background: #00BFD1; /* Darker cyan */
transform: translateY(-2px);
box-shadow: 0 8px 16px rgba(0, 217, 232, 0.25);
```

**Active State:**
```css
background: #00A6B8;
transform: translateY(0);
```

**Disabled State:**
```css
background: #CED4DA; /* Gray-200 */
color: #868E96; /* Gray-400 */
cursor: not-allowed;
box-shadow: none;
```

### Secondary CTA Button

```css
background: transparent;
border: 2px solid #1A2332; /* Deep Slate */
color: #1A2332;
padding: 14px 30px; /* Slightly less to account for border */
/* Other properties same as primary */
```

**Hover:**
```css
background: #1A2332;
color: #FFFFFF;
```

### Card Component

```css
background: #FFFFFF;
border-radius: 16px; /* radius-lg */
box-shadow: 0 4px 6px rgba(26, 35, 50, 0.10), 0 2px 4px rgba(26, 35, 50, 0.06);
padding: 32px;
transition: box-shadow 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
```

**Hover:**
```css
box-shadow: 0 10px 15px rgba(26, 35, 50, 0.10), 0 4px 6px rgba(26, 35, 50, 0.05);
transform: translateY(-4px);
```

### Form Input

```css
height: 48px; /* Touch-friendly */
padding: 12px 16px;
border: 2px solid #CED4DA; /* Gray-200 */
border-radius: 8px;
font-size: 16px; /* Prevents iOS zoom */
color: #1A2332;
background: #FFFFFF;
transition: border-color 200ms ease;
```

**Focus State:**
```css
border-color: #00D9E8; /* Electric Cyan */
box-shadow: 0 0 0 4px rgba(0, 217, 232, 0.1); /* Cyan glow */
outline: none;
```

**Error State:**
```css
border-color: #E63946; /* Error red */
```

---

## Spacing Quick Reference

| Token | Size | Common Use Cases |
|---|---|---|
| `space-xs` | 4px | Inline icon spacing, tight groups |
| `space-sm` | 8px | Input padding, related items |
| `space-md` | 16px | Standard spacing, card padding start |
| `space-lg` | 24px | Section separation, card padding |
| `space-xl` | 32px | Large card padding, major sections |
| `space-2xl` | 48px | Hero section padding |
| `space-3xl` | 64px | Page sections (vertical) |
| `space-4xl` | 96px | Landing page dramatic spacing |

**Rule of Thumb:**
- Use 8px increments for consistency
- Vertical spacing usually larger than horizontal
- Mobile: Reduce spacing by 25-50%

---

## Accessibility Checklist

**Before Publishing ANY Design:**

- [ ] Text contrast ratio minimum 4.5:1 (7:1 for AAA)
- [ ] All interactive elements minimum 44x44px (touch target)
- [ ] Color not the only indicator (use icons/text too)
- [ ] Alt text for all meaningful images
- [ ] Form labels visible (not just placeholder text)
- [ ] Focus states clearly visible
- [ ] Tested with keyboard navigation
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Heading hierarchy logical (don't skip levels)
- [ ] Link text descriptive (no "click here")

**Contrast Ratios (Pre-Approved Combinations):**

| Foreground | Background | Ratio | Grade | Usage |
|---|---|---|---|---|
| Deep Slate | White | 14.5:1 | AAA | Body text, headlines |
| Gray-500 | White | 8.9:1 | AAA | Secondary text |
| Electric Cyan | Deep Slate | 4.8:1 | AA Large | Large text (20px+) only |
| White | Deep Slate | 14.5:1 | AAA | Reversed text |

**NEVER USE (Fails Contrast):**
- Electric Cyan text on white background (3.1:1 - FAIL)
- Gray-300 text on white (4.1:1 - borderline, avoid for body text)
- Electric Cyan as small text on anything but Deep Slate

---

## Photography Direction

### What to Shoot

**Facilities (25% of library):**
- Data center exteriors, modern architecture
- Fuel cell installations prominently featured
- Dusk/dawn lighting preferred
- Show environmental context (not isolated buildings)

**Technology (35% of library):**
- Fuel cell stacks (macro detail)
- Control panels, monitoring systems
- Cable management, infrastructure
- LED indicators (naturally incorporates cyan/blue light)
- Vapor/steam effects from hydrogen processes

**People (15% of library):**
- Technicians actively working (not posed)
- Data center NOC operators
- Diverse representation
- Safety gear naturally present
- Focus on expertise and precision

**Data Visualization (25% of library):**
- Dashboards showing real-time metrics
- Graphs, charts, performance data
- Animated versions for digital

### Photography Style

**Technical Specs:**
- Resolution: Minimum 2400px wide (hero images)
- Format: WebP with JPEG fallback
- Aspect ratios: 16:9 (hero), 3:2 (content), 1:1 (social)

**Color Grading:**
- Cool-toned (blue/cyan shift, not warm/golden)
- Slightly desaturated (technical, not lifestyle)
- Even lighting, avoid heavy vignettes
- Contrast: Medium-high for clarity

**Composition:**
- Rule of thirds
- Leading lines emphasizing scale/precision
- Negative space for text overlay
- Sharp focus (no shallow depth-of-field for "artsy" effect)

**AVOID:**
- Generic stock photography
- Over-saturated colors
- Lens flares, excessive bokeh
- People looking at camera (candid preferred)
- Overly staged corporate scenes

---

## Animation Guidelines

### Timing Reference

| Duration Token | Time | Usage |
|---|---|---|
| `duration-instant` | 100ms | Hover states, immediate feedback |
| `duration-fast` | 200ms | Micro-interactions, tooltips |
| `duration-base` | 300ms | Standard transitions (default) |
| `duration-slow` | 500ms | Page transitions, reveals |
| `duration-slower` | 700ms | Hero animations, complex transitions |

**NEVER exceed 1 second** (except continuous background effects)

### Easing Functions

```css
/* Standard - Most common, all-purpose */
transition-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);

/* Decelerate - Elements entering screen */
transition-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);

/* Accelerate - Elements leaving screen */
transition-timing-function: cubic-bezier(0.4, 0.0, 1, 1);

/* Bounce - Use sparingly, special emphasis only */
transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Common Animations

**Button Hover (Power-Up Effect):**
```css
.cta-button {
  transition: all 300ms cubic-bezier(0.4, 0.0, 0.2, 1);
  background: linear-gradient(90deg, #00D9E8 0%, #00D9E8 100%);
  background-size: 200% 100%;
  background-position: 100% 0;
}

.cta-button:hover {
  background-position: 0% 0;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 217, 232, 0.25);
}
```

**Counter Animation (for metrics):**
```javascript
// Count up from 0 to target value over 1000ms
function animateCounter(element, target, duration = 1000) {
  const start = 0;
  const increment = target / (duration / 16); // 60fps
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target.toFixed(3);
      clearInterval(timer);
    } else {
      element.textContent = current.toFixed(3);
    }
  }, 16);
}
```

**Fade-Up on Scroll:**
```css
.fade-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 400ms cubic-bezier(0.0, 0.0, 0.2, 1),
              transform 400ms cubic-bezier(0.0, 0.0, 0.2, 1);
}

.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**IMPORTANT - Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Logo Usage

### Clear Space

**Minimum clear space = height of "H" in HORIZON**

```
        [H]
   ┌─────────────┐
   │             │
[H]│   HORIZON   │[H]
   │   ─────     │
   │   POWER     │
   │             │
   └─────────────┘
        [H]
```

### Minimum Sizes

- **Print:** 24mm width (at actual size)
- **Digital:** 120px width
- **Favicon:** 32x32px (use simplified mark)
- **Social Avatar:** 400x400px (square format)

### Color Variations

**1. Primary (Default):**
- Logo: Deep Slate (#1A2332)
- Background: White or light (Gray-50 to Gray-100)

**2. Reversed:**
- Logo: White (#FFFFFF)
- Background: Deep Slate, dark imagery, or gradient

**3. Accent (Digital Premium):**
- Logo: Electric Cyan (#00D9E8)
- Background: Deep Slate or dark photography
- Use sparingly (hero sections, premium content)

**4. Monochrome (Special Applications):**
- Single color to match context
- Maintain contrast ratio minimum 4.5:1

### Logo Don'ts

**NEVER:**
- ❌ Rotate, skew, or distort
- ❌ Apply gradients directly to logo
- ❌ Outline or add drop shadows/glows
- ❌ Change typography or spacing
- ❌ Place on busy backgrounds (use overlay)
- ❌ Recreate or redraw logo
- ❌ Use below minimum size
- ❌ Ignore clear space requirements

---

## File Formats & Export Settings

### Logos

**SVG (Preferred):**
- Infinite scalability
- Small file size
- Use for: Web, print (if supported)

**PNG (Fallback):**
- Transparent background
- Export sizes: 500px, 1000px, 2000px, 4000px widths
- Use for: Email, PowerPoint, legacy systems

**Color Profiles:**
- Digital: sRGB
- Print: CMYK (convert from RGB, provide both)

### Photography

**Web:**
- Format: WebP (primary), JPEG (fallback)
- Compression: 80-85% quality
- Max width: 2400px (hero), 1200px (content)
- Progressive encoding (JPEG)

**Print:**
- Format: TIFF or high-quality JPEG
- Resolution: 300 DPI at final size
- Color profile: Adobe RGB or CMYK

### Color Swatches

**Provided Formats:**
- Adobe Swatch Exchange (.ase)
- Sketch Palette (.sketchpalette)
- Figma (link to shared library)
- CSS Variables (see design tokens)
- Tailwind config (available on request)

---

## Brand Compliance Checklist

**Before Launching ANY Marketing Material:**

### Visual Elements
- [ ] Logo used correctly (size, clear space, approved color)
- [ ] Colors match exact hex values (no approximations)
- [ ] Typography uses Inter or IBM Plex Mono only
- [ ] Spacing follows 8px increment system
- [ ] Photography matches style guide (or approved stock)
- [ ] Icons from approved library
- [ ] Shadows/radius match design tokens

### Content
- [ ] Headlines bold, concise (max 8 words)
- [ ] Technical specs in IBM Plex Mono
- [ ] CTAs use action verbs
- [ ] Tone aligns with brand voice (confident, precise, partnering)
- [ ] No jargon without explanation
- [ ] Numbers specific, not vague

### Accessibility
- [ ] Contrast ratios meet WCAG AA minimum
- [ ] Alt text for images
- [ ] Heading hierarchy logical
- [ ] Focus states visible
- [ ] Touch targets 44x44px minimum
- [ ] Keyboard navigable
- [ ] Captions/transcripts for video

### Technical
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Page load under 3 seconds
- [ ] Images optimized (WebP + JPEG fallback)
- [ ] Fonts loaded efficiently (subset if possible)
- [ ] Analytics tracking implemented
- [ ] SEO metadata complete

---

## Quick-Start Templates

### Email Signature

```
[Your Name]
[Title]
Horizon Power
A Horizon Fuel Cell Company

[Phone] | [Email]
power.horizonfuelcell.com
```

**Styling:**
- Font: Arial or system sans-serif (email-safe)
- Name: Bold
- Company name: Regular
- "A Horizon Fuel Cell Company": Gray-500, smaller
- No images/logos (deliverability best practice)

### LinkedIn Post

**Image specs:** 1200 x 627px

**Template structure:**
- Top 1/3: Deep Slate background
  - White headline (32px, Inter Bold)
  - Cyan accent line underneath
- Bottom 2/3: Photography or data visualization
- Bottom corner: Small white logo

**Copy format:**
- Opening hook (1-2 lines)
- Key insight/announcement (3-5 lines)
- Specific metric or proof point
- Call-to-action with link

### Sales Deck Cover Slide

**Background:** Full-bleed facility photography + gradient overlay (60%)

**Content (centered, white text):**
```
HORIZON POWER
[Line: 120px wide, 4px thick, Electric Cyan]

[Presentation Title]
[Date]

[Small logo, bottom right corner]
```

---

## Common Questions & Answers

**Q: Can I use dark blue instead of Deep Slate?**
A: No. Deep Slate (#1A2332) is our exact brand color. Using approximations dilutes brand consistency.

**Q: What if Electric Cyan doesn't meet contrast requirements?**
A: Use cyan ONLY on Deep Slate backgrounds for text, or as decorative accents (not text) elsewhere. Never use cyan text on white.

**Q: Can I use other fonts if I don't have Inter?**
A: For drafts, yes (use Arial). For final materials, Inter is required and free to download. Never substitute in published materials.

**Q: Is it okay to use stock photography?**
A: Only if it matches our style guide (industrial, technical, cool-toned). Avoid generic business stock. Custom photography preferred.

**Q: Can the logo be smaller than 120px on web?**
A: No. Minimum 120px width for legibility. For very small spaces, use a simplified icon/mark instead.

**Q: What about print materials - same colors?**
A: Colors should be converted to CMYK for print. Request CMYK values from brand team - they're calibrated to match RGB as closely as possible.

**Q: Can I add a drop shadow to the logo?**
A: Never. Shadows are only applied to containers (cards, buttons), never to the logo itself.

**Q: How do I animate the gradient?**
A: Gradients can animate position/opacity but not color stops. See animation guidelines for approved effects.

---

## Getting Help

**Brand Assets:** [Internal portal link - to be established]

**Questions:** brand@horizonpower.com (to be established)

**Approvals:**
- Marketing materials: Marketing Director
- Sales collateral: Sales + Marketing approval
- External communications: Executive review required

**Training:** Quarterly brand workshops - watch for calendar invites

---

## Version History

- **v1.0** (2025-11-05): Initial quick reference guide created
- Next review: Upon full brand implementation (Q1 2026)

---

*This is a companion document to the comprehensive Visual Brand Direction Proposal. For detailed rationale, competitive analysis, and implementation roadmap, refer to the full proposal document.*

**ALWAYS USE LATEST VERSION** - Check document version number before starting new projects.