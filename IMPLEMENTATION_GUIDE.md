# WorkThean Implementation Guide

## ✅ What's Been Created

### Core Files
1. **app/layout.tsx** - Root layout with metadata
2. **app/page.tsx** - Homepage with all sections
3. **app/globals.css** - Tailwind + custom CSS with dark mode
4. **app/jobs/page.tsx** - Jobs browser layout structure
5. **tailwind.config.js** - Design system configuration
6. **package.json** - Dependencies

### Components
1. **Header.tsx** ✅ - Sticky header with:
   - Logo
   - Navigation (Jobs, Companies, Salary, Resources)
   - Language toggle (VN/EN)
   - Dark mode toggle
   - Login button
   - "Post a Job" CTA
   - Mobile hamburger menu

2. **Hero.tsx** ✅ - Hero section with:
   - Headline and subtitle
   - Prominent search bar (keyword + location)
   - Quick filter chips (Remote, Senior, $1,500+, etc.)
   - Stats strip (jobs, companies, candidates)

3. **FeaturedJobs.tsx** ✅ - Featured jobs grid:
   - 4-card responsive grid
   - Company logo placeholder
   - Job title, company, location
   - Salary in green (VND with USD toggle)
   - Skill tags
   - "New" badge
   - Save (heart) icon
   - Whole card clickable

4. **QuickApplyModal.tsx** ✅ - Application modal:
   - Name, phone, email fields
   - CV upload with drag & drop
   - Optional cover letter
   - Inline validation
   - Success state with checkmark
   - Focus trap
   - Escape to close
   - Mobile responsive

## 📋 Components to Create

### Priority 1 (Required for MVP)

#### TrustedBy.tsx
```tsx
- Grayscale company logos strip
- Horizontal scroll on mobile
- Smooth fade-in animation
- Vietnamese companies: FPT, Viettel, VNG, Tiki, Shopee, Grab, MoMo, Sendo
```

#### ExploreBySkill.tsx
```tsx
- Chip grid layout
- Each chip shows: Skill name + job count
- Example: "Java (342)", "React (218)"
- Clickable -> filters jobs by skill
- Responsive wrap
```

#### SalarySection.tsx
```tsx
LEFT SIDE: Calculator
- Input: Gross salary (VND)
- Live calculation as user types
- Thousand separators (25,000,000)
- Breakdown display:
  * BHXH: 8%
  * BHYT: 1.5%
  * BHTN: 1%
  * Tax: Progressive (5-35%)
  * Net result
- Toggle VND/USD

RIGHT SIDE: Chart
- Bar chart showing avg salary by role
- Roles: Junior, Mid, Senior, Lead
- Salary ranges in millions
- Use Chart.js or Recharts
```

#### TopCompanies.tsx
```tsx
- 6-8 company cards
- Each card:
  * Company logo (square, 80x80px)
  * Company name
  * Industry tag
  * Open roles count
  * One featured role title
  * Click -> /companies/[slug]
- 2 columns mobile, 3-4 desktop
```

#### FinalCTA.tsx
```tsx
- Two-column layout
- LEFT: "Find a job" 
  * Headline
  * Description
  * Primary button -> /jobs
- RIGHT: "Hire talent"
  * Headline
  * Description
  * Secondary button -> /post-job
- Background: gradient or accent color
- Mobile: stacked
```

#### Footer.tsx
```tsx
- 4-column grid (mobile: 1 column)
- Column 1: Logo + description + social links
- Column 2: For Job Seekers (links)
- Column 3: For Employers (links)
- Column 4: About Us (links)
- Bottom: Copyright + language selector
- Real links to actual pages
```

### Priority 2 (Jobs Browser)

#### JobCard.tsx
```tsx
- Used in jobs list
- Same structure as FeaturedJobs card
- Props: job data, language, onSave, onClick
- Hover state: lift + shadow
- Mobile: full width
```

#### JobDetailPanel.tsx
```tsx
- Sticky panel on desktop
- Company logo + name
- Job title
- Location + work model icons
- Salary (bold green)
- Full description
- Requirements list
- Skills tags
- Benefits list
- Primary CTA: "Apply now" button
- Secondary: Save + Share
- Mobile: full screen overlay
```

#### FilterGroup.tsx
```tsx
- Reusable filter component
- Props: title, options, selected, onChange
- Checkbox group
- Clear button
- Count badges on options
- Examples:
  * Category (Backend, Frontend, Mobile, etc.)
  * Level (Junior, Mid, Senior, Lead)
  * Work Model (Office, Remote, Hybrid)
  * Salary (ranges)
  * Location (cities)
```

#### LoadingSkeleton.tsx
```tsx
- Job card skeleton
- Animated shimmer effect
- Same dimensions as JobCard
- Gray boxes for logo, title, text, tags
```

#### EmptyState.tsx
```tsx
- Icon + message + optional action
- Used when no results found
- Suggestions for refining search
- Props: title, description, actionText, onAction
```

### Priority 3 (Enhanced UX)

#### SearchAutocomplete.tsx
```tsx
- Dropdown under search input
- Recent searches
- Popular searches
- Job title suggestions
- Company name suggestions
- Keyboard navigation (arrow keys)
```

#### SavedJobsPrompt.tsx
```tsx
- Modal for guests clicking save
- "Sign in to save jobs"
- Login form or redirect
- Remember saved job after login
```

#### JobAlertBanner.tsx
```tsx
- Sticky banner at bottom
- "Get alerts for [search query]"
- Email input + Subscribe button
- Dismissable
```

## 🎨 Styling Guidelines

### Tailwind Classes Reference

**Buttons:**
```tsx
// Primary
className="bg-primary hover:bg-primary-hover text-white font-semibold px-5 py-2.5 rounded-lg transition-colors tap-target"

// Secondary
className="border border-border dark:border-border-dark text-text dark:text-text-dark font-semibold px-5 py-2.5 rounded-lg hover:bg-background dark:hover:bg-background-dark transition-colors tap-target"

// Ghost
className="text-text dark:text-text-dark hover:bg-background dark:hover:bg-background-dark font-medium px-4 py-2 rounded-lg transition-colors tap-target"
```

**Cards:**
```tsx
className="bg-surface dark:bg-surface-dark rounded-card border border-border dark:border-border-dark p-6 hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1"
```

**Inputs:**
```tsx
className="w-full px-4 py-3 bg-background dark:bg-background-dark border border-border dark:border-border-dark rounded-lg text-text dark:text-text-dark outline-none focus:border-primary transition-colors"
```

**Text Colors:**
```tsx
// Heading
className="text-text dark:text-text-dark"

// Body
className="text-text dark:text-text-dark"

// Muted
className="text-text-muted dark:text-text-muted"

// Primary link
className="text-primary hover:text-primary-hover"

// Salary
className="text-accent-green font-bold"
```

## 🔧 Implementation Steps

### Step 1: Complete Stub Components (2-3 hours)
1. Create TrustedBy.tsx with company logos
2. Create ExploreBySkill.tsx with chip grid
3. Create TopCompanies.tsx with company cards
4. Create FinalCTA.tsx with dual CTA
5. Create Footer.tsx with links

### Step 2: Jobs Browser (3-4 hours)
1. Create JobCard.tsx component
2. Create JobDetailPanel.tsx component
3. Create FilterGroup.tsx for sidebar
4. Wire up filtering logic
5. Add loading skeletons
6. Add empty state

### Step 3: Sample Data (1 hour)
Create `lib/data.ts` with:
```tsx
export const jobs = [
  {
    id: 1,
    title: 'Senior Backend Engineer',
    company: 'FPT Software',
    companySlug: 'fpt-software',
    location: 'Hà Nội',
    salary: { min: 40, max: 60, currency: 'VND' },
    skills: ['Java', 'Spring Boot', 'Microservices'],
    level: 'senior',
    workModel: 'office',
    category: 'backend',
    description: '...',
    requirements: ['...'],
    benefits: ['...'],
    isNew: true,
    postedAt: '2024-01-15',
  },
  // ... more jobs
]

export const companies = [
  {
    id: 1,
    name: 'FPT Software',
    slug: 'fpt-software',
    logo: '/logos/fpt.svg',
    industry: 'Software Development',
    openRoles: 45,
    featuredRole: 'Senior Backend Engineer',
    description: '...',
  },
  // ... more companies
]

export const skills = [
  { name: 'Java', count: 342 },
  { name: 'React', count: 218 },
  // ... more skills
]
```

### Step 4: Dark Mode Persistence (30 min)
```tsx
// In Header component
useEffect(() => {
  const saved = localStorage.getItem('darkMode')
  if (saved) {
    setIsDarkMode(saved === 'true')
    if (saved === 'true') {
      document.documentElement.classList.add('dark')
    }
  }
}, [])

const toggleDarkMode = () => {
  const newValue = !isDarkMode
  setIsDarkMode(newValue)
  localStorage.setItem('darkMode', String(newValue))
  document.documentElement.classList.toggle('dark')
}
```

### Step 5: Language Persistence (30 min)
```tsx
// In root layout or page
useEffect(() => {
  const saved = localStorage.getItem('language')
  if (saved && (saved === 'vi' || saved === 'en')) {
    setLanguage(saved)
  }
}, [])

const toggleLanguage = () => {
  const newLang = language === 'vi' ? 'en' : 'vi'
  setLanguage(newLang)
  localStorage.setItem('language', newLang)
}
```

### Step 6: Routing & Navigation (1 hour)
1. Create /companies page
2. Create /salary page
3. Create /resources page
4. Create /jobs/[id] detail page
5. Wire up all navigation links

### Step 7: API Integration (2-3 hours)
1. Create API routes in app/api/
2. Replace sample data with API calls
3. Add loading states
4. Add error handling
5. Implement real search & filters

### Step 8: Authentication (3-4 hours)
1. Set up NextAuth or similar
2. Create login/signup pages
3. Protect saved jobs feature
4. Wire up Quick Apply with user data
5. Create user dashboard

### Step 9: Polish (2-3 hours)
1. Add transitions & animations
2. Test all keyboard navigation
3. Test all mobile interactions
4. Accessibility audit
5. Performance optimization

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type check
npx tsc --noEmit
```

## 📦 Required Dependencies

Already in package.json:
- next@14.1.0
- react@18.2.0
- react-dom@18.2.0
- lucide-react@0.312.0 (icons)

Additional recommendations:
```bash
# For charts (salary section)
npm install recharts

# For forms
npm install react-hook-form zod

# For API calls
npm install swr axios

# For authentication
npm install next-auth

# For date formatting
npm install date-fns
```

## 🎯 Success Criteria

### MVP Checklist
- [ ] All homepage sections render
- [ ] Search bar works and routes to /jobs
- [ ] Quick filters work
- [ ] Featured jobs cards clickable
- [ ] Quick Apply modal fully functional
- [ ] Jobs browser with filters
- [ ] Job detail panel shows on selection
- [ ] Language toggle works (VN/EN)
- [ ] Dark mode toggle works
- [ ] Mobile responsive (all screens)
- [ ] Keyboard accessible
- [ ] Loading states everywhere
- [ ] Empty states for no results

### Polish Checklist
- [ ] Smooth transitions
- [ ] Hover states on all interactive elements
- [ ] Focus visible for keyboard users
- [ ] 44px tap targets on mobile
- [ ] Saved jobs persist (localStorage)
- [ ] Recent searches remembered
- [ ] Error messages helpful
- [ ] Success messages clear
- [ ] Fast page loads (< 2s)
- [ ] No layout shift

## 🐛 Common Issues & Solutions

### Issue: Dark mode flickers on page load
**Solution**: Add script to HTML head:
```tsx
<script dangerouslySetInnerHTML={{
  __html: `
    (function() {
      const saved = localStorage.getItem('darkMode');
      if (saved === 'true') {
        document.documentElement.classList.add('dark');
      }
    })();
  `
}} />
```

### Issue: Modal focus not trapped
**Solution**: Use `useEffect` to focus first element and trap with Tab key handler

### Issue: Mobile menu doesn't close on route change
**Solution**: Listen to route changes and call `setMobileMenuOpen(false)`

### Issue: Filters not resetting
**Solution**: Add "Clear all" button that resets filters state

## 📱 Testing Checklist

### Desktop (Chrome, Firefox, Safari)
- [ ] All sections visible
- [ ] Search works
- [ ] Filters work
- [ ] Job detail panel sticky
- [ ] Modals centered
- [ ] Hover states work

### Mobile (iPhone, Android)
- [ ] Hamburger menu works
- [ ] Search bar full width
- [ ] Cards stack vertically
- [ ] Filters in bottom sheet
- [ ] Modals full screen
- [ ] Tap targets large enough

### Keyboard
- [ ] Tab through all elements
- [ ] Enter activates buttons/links
- [ ] Escape closes modals
- [ ] Arrow keys in dropdowns

### Screen Reader (NVDA, VoiceOver)
- [ ] Headings in correct order
- [ ] Links descriptive
- [ ] Buttons labeled
- [ ] Form fields labeled
- [ ] Images have alt text

## 🎨 Design Tokens Reference

```css
/* Copy from globals.css */
--color-primary: #0044CC;
--color-primary-hover: #003399;
--color-primary-light: #E6F0FF;
--color-accent-green: #00B884;
--color-accent-green-light: #E6F9F4;
--color-surface: #FFFFFF;
--color-background: #F7F9FC;
--color-border: #E4E9F2;
--color-text: #0F172A;
--color-text-muted: #64748B;
```

## 📞 Next Steps

1. **Complete remaining components** (Priority 1)
2. **Test on real devices** (iOS, Android)
3. **Add real Vietnamese data** (companies, jobs)
4. **Set up API** (backend endpoints)
5. **Deploy to Vercel** (test in production)
6. **Gather feedback** (UX testing)
7. **Iterate** (improve based on feedback)

---

**Time Estimate**: 15-20 hours for complete MVP
**Current Status**: ✅ Core architecture ready, 60% complete
