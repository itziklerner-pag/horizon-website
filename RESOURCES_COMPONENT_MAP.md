# Resources Section - Component Map

## Visual Structure

```
┌─────────────────────────────────────────────────────────────┐
│                      Navigation.tsx                         │
│  [Solutions ▾] [Resources ▾] [About] [Contact] [Get Started]│
│                                                             │
│  Resources Dropdown:                                        │
│    📚 Resource Library                                      │
│    📝 Blog                                                  │
│    📄 Whitepapers                                          │
│    ✓  Case Studies                                         │
│    🎥 Videos                                               │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│              /resources - Resource Library Hub              │
├─────────────────────────────────────────────────────────────┤
│  Hero Section                                               │
│  └─ SearchBar Component                                     │
│                                                             │
│  Filter Section                                             │
│  └─ FilterBar Component (Topic filters)                     │
│                                                             │
│  Featured Resources                                         │
│  ├─ ResourceCard (Whitepaper)                              │
│  ├─ ResourceCard (Case Study)                              │
│  └─ ResourceCard (Video)                                    │
│                                                             │
│  Category Cards Grid                                        │
│  ├─ Blog Card                                              │
│  ├─ Whitepapers Card                                       │
│  ├─ Case Studies Card                                       │
│  └─ Videos Card                                            │
│                                                             │
│  CTA Section                                                │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                /resources/blog - Blog Page                  │
├─────────────────────────────────────────────────────────────┤
│  Hero + Breadcrumb                                          │
│  └─ SearchBar Component                                     │
│                                                             │
│  Filter Section                                             │
│  └─ FilterBar Component (Category filters)                  │
│                                                             │
│  Main Content (3 columns)                                   │
│  ├─ Blog Grid (9 posts)                                    │
│  │  ├─ ResourceCard (type: blog) × 9                       │
│  │  └─ Pagination Component                                │
│  │                                                          │
│  └─ Sidebar                                                │
│     ├─ Popular Posts Widget                                │
│     ├─ Newsletter Signup                                   │
│     └─ Categories List                                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│          /resources/whitepapers - Whitepapers Page          │
├─────────────────────────────────────────────────────────────┤
│  Hero + Breadcrumb                                          │
│  └─ SearchBar Component                                     │
│                                                             │
│  Filter Section                                             │
│  ├─ FilterBar Component (Topic filters)                     │
│  └─ FilterBar Component (Industry filters)                  │
│                                                             │
│  Whitepapers Grid                                           │
│  └─ Whitepaper Cards × 12                                  │
│     └─ Download Button → Opens Modal                        │
│                                                             │
│  Download Modal (Conditional)                               │
│  └─ Email Capture Form                                     │
│     ├─ Name Input                                          │
│     ├─ Email Input                                         │
│     ├─ Company Input                                       │
│     ├─ Job Title Input                                     │
│     └─ Newsletter Checkbox                                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│        /resources/case-studies - Case Studies Page          │
├─────────────────────────────────────────────────────────────┤
│  Hero + Breadcrumb                                          │
│  └─ SearchBar Component                                     │
│                                                             │
│  Filter Section                                             │
│  └─ FilterBar Component (Industry filters)                  │
│                                                             │
│  Stats Overview                                             │
│  ├─ 500+ Deployments                                       │
│  ├─ 99.98% Average Uptime                                 │
│  ├─ 32% Average Cost Savings                               │
│  └─ 60K+ Tons CO2 Reduced                                 │
│                                                             │
│  Case Studies List                                          │
│  └─ Case Study Cards × 6                                   │
│     ├─ Company Logo                                        │
│     ├─ Key Metrics (4 metrics)                             │
│     ├─ Description                                         │
│     └─ Testimonial Quote                                   │
│                                                             │
│  CTA Section                                                │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│            /resources/videos - Video Library Page           │
├─────────────────────────────────────────────────────────────┤
│  Hero + Breadcrumb                                          │
│  └─ SearchBar Component                                     │
│                                                             │
│  Filter Section                                             │
│  └─ FilterBar Component (Category filters)                  │
│                                                             │
│  Videos Grid                                                │
│  └─ Video Cards × 12                                       │
│     └─ Click → Opens VideoModal                            │
│                                                             │
│  Featured Playlists                                         │
│  ├─ Getting Started (8 videos)                             │
│  ├─ Customer Stories (12 videos)                            │
│  ├─ Technical Training (15 videos)                          │
│  └─ Industry Trends (10 videos)                            │
│                                                             │
│  VideoModal Component (Conditional)                         │
│  ├─ Video Player (iframe)                                  │
│  ├─ Video Title                                            │
│  └─ Transcript (expandable)                                │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                         Footer.tsx                          │
│  [Brand] [Solutions] [Company] [Contact]                   │
└─────────────────────────────────────────────────────────────┘
```

## Component Dependency Tree

```
App Layout
│
├── Navigation
│   └── Resources Dropdown
│       ├── /resources
│       ├── /resources/blog
│       ├── /resources/whitepapers
│       ├── /resources/case-studies
│       └── /resources/videos
│
├── Resources Pages
│   │
│   ├── /resources (Hub)
│   │   ├── SearchBar
│   │   ├── FilterBar
│   │   └── ResourceCard × 3
│   │
│   ├── /resources/blog
│   │   ├── SearchBar
│   │   ├── FilterBar
│   │   ├── ResourceCard × 9
│   │   └── Pagination
│   │
│   ├── /resources/whitepapers
│   │   ├── SearchBar
│   │   ├── FilterBar × 2
│   │   └── DownloadModal
│   │
│   ├── /resources/case-studies
│   │   ├── SearchBar
│   │   └── FilterBar
│   │
│   └── /resources/videos
│       ├── SearchBar
│       ├── FilterBar
│       └── VideoModal
│
└── Footer
```

## Component Reusability Matrix

| Component | Used In | Count | Purpose |
|-----------|---------|-------|---------|
| SearchBar | All 5 pages | 5× | Search functionality |
| FilterBar | 4 pages (not videos modal) | 7× | Content filtering |
| ResourceCard | Hub, Blog | 12× | Display resources |
| Pagination | Blog only | 1× | Navigate pages |
| VideoModal | Videos page | 1× | Play videos |
| DownloadModal | Whitepapers page | 1× | Capture leads |

## State Management

```
Resources Hub (/resources)
├── searchQuery: string
└── activeFilter: string

Blog (/resources/blog)
├── searchQuery: string
├── activeFilter: string
└── currentPage: number

Whitepapers (/resources/whitepapers)
├── searchQuery: string
├── topicFilter: string
├── industryFilter: string
├── selectedWhitepaper: object | null
└── showModal: boolean

Case Studies (/resources/case-studies)
├── searchQuery: string
└── industryFilter: string

Videos (/resources/videos)
├── searchQuery: string
├── categoryFilter: string
├── selectedVideo: object | null
└── showModal: boolean
```

## Data Flow

```
User Interaction
      ↓
State Update (useState)
      ↓
Filter Function (Array.filter)
      ↓
Filtered Results
      ↓
Render Components
```

## Routing Structure

```
/resources
    ├── page.tsx ..................... Resource Library Hub
    │
    ├── /blog
    │   └── page.tsx ................. Blog Listing
    │
    ├── /whitepapers
    │   └── page.tsx ................. Whitepapers Library
    │
    ├── /case-studies
    │   └── page.tsx ................. Case Studies
    │
    └── /videos
        └── page.tsx ................. Video Library
```

## Shared Components Location

```
/components/resources/
    ├── ResourceCard.tsx ............. Universal resource card
    ├── SearchBar.tsx ................ Search input with clear
    ├── FilterBar.tsx ................ Filter buttons
    ├── Pagination.tsx ............... Page navigation
    └── VideoModal.tsx ............... Video player modal
```

## Color Coding by Content Type

```
Blog Posts ........... Blue gradient (from-blue-500 to-blue-600)
Whitepapers .......... Purple gradient (from-purple-500 to-purple-600)
Case Studies ......... Green gradient (from-green-500 to-green-600)
Videos ............... Cyan gradient (from-cyan-500 to-cyan-600)
Industry Insights .... Orange gradient (from-orange-500 to-orange-600)
```

## Interaction Patterns

```
Search Flow:
User types → onChange → setSearchQuery → filter results → re-render

Filter Flow:
User clicks → onClick → setActiveFilter → filter results → re-render

Pagination Flow:
User clicks page → onPageChange → setCurrentPage → slice array → re-render

Modal Flow:
User clicks → setState(true) → render modal → click close → setState(false)

Download Flow:
User clicks → open modal → fill form → submit → (API call) → close modal
```

## Responsive Breakpoints

```
Mobile (< 768px)
├── Single column grids
├── Stacked layouts
└── Mobile menu for navigation

Tablet (768px - 1024px)
├── 2-column grids
├── Sidebar below main content
└── Horizontal filters

Desktop (> 1024px)
├── 3-4 column grids
├── Sidebar beside main content
└── Full navigation
```

## Key Component Props

### ResourceCard
```typescript
{
  title: string              // Resource title
  description: string        // Short description
  category: string           // Category/tag
  image?: string            // Thumbnail URL (optional)
  date?: string             // Publication date
  author?: string           // Author name
  readTime?: string         // e.g., "8 min read"
  href: string              // Link destination
  type: 'blog' | 'whitepaper' | 'case-study' | 'video'
}
```

### SearchBar
```typescript
{
  onSearch: (query: string) => void    // Callback function
  placeholder?: string                  // Input placeholder
}
```

### FilterBar
```typescript
{
  filters: FilterOption[]              // Array of filter options
  activeFilter: string                 // Currently selected filter
  onFilterChange: (filter: string) => void
  label?: string                       // Label text
}
```

### Pagination
```typescript
{
  currentPage: number                  // Current page number
  totalPages: number                   // Total number of pages
  onPageChange: (page: number) => void // Page change callback
}
```

### VideoModal
```typescript
{
  isOpen: boolean                      // Modal visibility
  onClose: () => void                  // Close callback
  videoUrl: string                     // YouTube embed URL
  title: string                        // Video title
  transcript?: string                  // Video transcript (optional)
}
```

This component map provides a visual reference for understanding the Resources section architecture and how all pieces fit together.
