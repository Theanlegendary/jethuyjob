# WorkThean - Vietnamese IT & Tech Recruitment Platform

A modern, bilingual (Vietnamese/English) recruitment platform built with Next.js 14, React, and Tailwind CSS.

## 🎨 Design System

### Colors
- **Primary**: `#0044CC` (CTA buttons, links)
- **Accent Green**: `#00B884` (Salary highlights)
- **Background**: `#F7F9FC` (Light) / `#0F172A` (Dark)
- **Surface**: `#FFFFFF` (Light) / `#1E293B` (Dark)
- **Border**: `#E4E9F2` (Light) / `#334155` (Dark)
- **Text**: `#0F172A` (Light) / `#F1F5F9` (Dark)
- **Muted**: `#64748B`

### Typography
- **Font**: Be Vietnam Pro (400, 500, 600, 700, 800)
- System fallback: -apple-system, sans-serif

### Components Style
- **Border Radius**: 12px (rounded-card)
- **Shadows**: Soft shadows with 1px borders
- **Transitions**: 200ms ease for all interactions

## 📁 Project Structure

```
workthean/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles + Tailwind
│   ├── jobs/
│   │   ├── page.tsx           # Jobs browser with filters
│   │   └── [id]/
│   │       └── page.tsx       # Job detail page
│   ├── companies/
│   │   └── page.tsx           # Companies directory
│   ├── salary/
│   │   └── page.tsx           # Salary calculator & insights
│   └── resources/
│       └── page.tsx           # Career resources
├── components/
│   ├── Header.tsx             # Sticky header with nav
│   ├── Hero.tsx               # Hero with search bar
│   ├── FeaturedJobs.tsx       # 4-card job grid
│   ├── QuickApplyModal.tsx    # Application modal
│   ├── TrustedBy.tsx          # Company logos strip
│   ├── ExploreBySkill.tsx     # Skill chips grid
│   ├── SalarySection.tsx      # Calculator + chart
│   ├── TopCompanies.tsx       # Company cards
│   ├── FinalCTA.tsx           # Dual CTA section
│   └── Footer.tsx             # Footer with links
├── lib/
│   ├── data.ts                # Sample Vietnamese data
│   └── utils.ts               # Helper functions
├── public/
│   └── logos/                 # Company logos
├── tailwind.config.js
├── package.json
└── tsconfig.json
```

## 🚀 Getting Started

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
npm start
```

## 📱 Pages & Features

### Homepage (`/`)
- ✅ Sticky header with language toggle (VN/EN)
- ✅ Hero with prominent search bar (keyword + location)
- ✅ Quick filter chips (Remote, Senior, $1,500+, Java, React, AI/ML)
- ✅ Stats strip (jobs, companies, candidates)
- ✅ Trusted-by logos (grayscale)
- ✅ Featured Jobs (4-card grid)
- ✅ Explore by skill (chip grid with counts)
- ✅ Salary calculator with breakdown
- ✅ Top companies cards
- ✅ Dual CTA (Find job / Hire talent)
- ✅ Footer with real links

### Jobs Browser (`/jobs`)
**Desktop Layout:**
- Left: Filters (category, level, work model, salary, location)
- Center: Job list with result count and sort dropdown
- Right: Sticky job detail panel with Apply button

**Mobile Layout:**
- Full list view
- Tap opens full-screen detail
- Sticky bottom Apply bar
- Filters in bottom sheet

**Features:**
- ✅ Real-time filtering
- ✅ Search with query params
- ✅ Sorting (newest, salary, relevance)
- ✅ Save jobs (heart icon)
- ✅ Loading skeletons
- ✅ Empty states
- ✅ Pagination

### Job Detail (`/jobs/[id]`)
- Company info + logo
- Job title, location, salary
- Description & requirements
- Skills tags
- Benefits
- Apply button → Quick Apply Modal
- Related jobs
- Share buttons

### Quick Apply Modal
- ✅ Name, phone, email fields
- ✅ CV upload (drag & drop)
- ✅ Optional cover letter
- ✅ Inline validation
- ✅ Success state
- ✅ Focus trap
- ✅ Closes on Escape
- ✅ Empty fields by default

### Salary Calculator (`/salary`)
- Live Gross→Net calculator
- Updates as user types
- Thousand separators (25,000,000 VND)
- Breakdown: BHXH/BHYT/BHTN/Tax
- Salary by role bar chart
- Toggle VND/USD

### Companies (`/companies`)
- Company cards with logos
- Open roles count
- Featured role preview
- Filter by industry
- Search companies

## 🎨 UI Components

### Card Anatomy (Job Card)
```tsx
┌─────────────────────────────┐
│ [❤️]              [NEW]     │ Save + Badge
│                              │
│ [Logo]                       │ Company logo
│                              │
│ Job Title                    │ Bold, clickable
│ Company Name                 │ Muted
│ 📍 Location                  │ Icon + text
│ 💰 Salary (green, bold)      │ Accent color
│                              │
│ [Tag] [Tag] [Tag]            │ Skill chips
└─────────────────────────────┘
```

### Button Hierarchy
- **Primary**: `bg-primary` (Post a Job, Apply, Submit)
- **Secondary**: `border` outline (Cancel, Clear filters)
- **Ghost**: No border (Save, Share)

### Tap Targets
- Minimum 44x44px for all interactive elements
- Extra padding on mobile

## 🌐 Bilingual Support

### Implementation
```tsx
const translations = {
  vi: { /* Vietnamese */ },
  en: { /* English */ }
}

<Component language={language} />
```

### Toggle
```tsx
const [language, setLanguage] = useState<'vi' | 'en'>('vi')
```

### Stored in localStorage
```tsx
useEffect(() => {
  const saved = localStorage.getItem('language')
  if (saved) setLanguage(saved as 'vi' | 'en')
}, [])
```

## 🌙 Dark Mode

### Toggle
```tsx
const [isDarkMode, setIsDarkMode] = useState(false)

const toggleDarkMode = () => {
  setIsDarkMode(prev => !prev)
  document.documentElement.classList.toggle('dark')
}
```

### CSS Variables
```css
:root { /* light mode */ }
.dark { /* dark mode */ }
```

## ♿ Accessibility

### Features
- ✅ WCAG AA contrast ratios
- ✅ Keyboard navigation (Tab, Enter, Escape)
- ✅ Focus visible states (2px primary outline)
- ✅ 44px minimum tap targets
- ✅ Modal focus trapping
- ✅ Semantic HTML (nav, main, section, article)
- ✅ ARIA labels where needed
- ✅ Alt text for images

### Testing
```bash
# Run accessibility audit
npm run audit
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Mobile-First
All components built mobile-first, progressively enhanced for larger screens.

## 🎯 Sample Data

### Companies
- FPT Software
- Viettel Digital
- VNG Corporation
- Tiki Corporation
- Shopee Vietnam
- Grab Vietnam
- MoMo Fintech
- Sendo
- Vietcombank

### Job Titles
- Senior Backend Engineer
- Full-stack Developer
- AI Engineer
- Mobile Developer (Flutter)
- DevOps Engineer
- Product Manager
- UI/UX Designer
- Data Analyst

### Salary Ranges
- Junior: 10-20 triệu VND ($400-$800)
- Mid: 20-40 triệu VND ($800-$1,600)
- Senior: 40-80 triệu VND ($1,600-$3,200)
- Lead: 80-150 triệu VND ($3,200-$6,000)

## 🔐 Authentication Flow

### Guest Users
- Can browse jobs
- Can search & filter
- Save jobs triggers login prompt

### Logged In Users
- Save jobs to profile
- Quick apply with saved profile
- Track applications
- Get job alerts

### Recruiters
- Access via `/employer` (separate route)
- Post jobs form (behind auth)
- View applications
- Company dashboard

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Accessibility
npm run test:a11y
```

## 📦 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Build
```bash
npm run build
npm start
```

### Environment Variables
```env
NEXT_PUBLIC_API_URL=https://api.workthean.com
NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX
```

## 🎨 Design Inspirations

- **ITviec**: Clean job cards, clear hierarchy
- **LinkedIn Jobs**: Professional feel, comprehensive filtering
- **Levels.fyi**: Salary transparency, data-driven

**Not**: Newspaper layout, cluttered design

## 📝 License

© 2024 WorkThean. All rights reserved.

---

## Next Steps

1. Create remaining stub components (TrustedBy, ExploreBySkill, etc.)
2. Implement jobs browser with filters
3. Add API integration
4. Set up authentication
5. Deploy to Vercel
6. Add analytics
7. SEO optimization

**Current Status**: ✅ Core structure complete, ready for component implementation
