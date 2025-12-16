# Landing Page Migration - Todo List

> Migration plan for converting the static HTML landing page to Next.js with React components.

---

## Phase 1: Project Setup ✅

- [x] Install dependencies (shadcn/ui, lucide-react)
- [x] Add Outfit and Space Mono fonts via next/font/google
- [x] Configure Tailwind with brand colors and custom theme
- [x] Set up global CSS with animations and custom properties
- [x] Create `src/lib/utils.ts` with `cn()` helper

---

## Phase 2: Layout Components ✅

- [x] Create `src/components/layout/Header.tsx` (mobile-first navigation)
  - Logo with animated dot
  - Desktop nav links with hover underline effect
  - Mobile hamburger menu
  - Scroll state (transparent -> blurred background)
  - CTA button
- [x] Create `src/components/layout/Footer.tsx`
  - 4-column grid (brand, services, company, contact)
  - Social links
  - Legal links and copyright
- [x] Create `src/components/layout/Section.tsx` (reusable section wrapper)
- [x] Create `src/components/layout/Container.tsx` (max-width container)
- [x] Update `src/app/layout.tsx` with new fonts and structure

---

## Phase 3: UI Components

- [ ] Create `src/components/ui/Button.tsx`
  - Primary variant (green, rounded-full)
  - Secondary variant (outline)
  - Ghost variant
  - Icon support
- [ ] Create `src/components/ui/Card.tsx`
  - Standard card (white, hover effects)
  - Featured card (dark green gradient)
  - Card with top accent bar
- [ ] Create `src/components/ui/Badge.tsx`
  - Brand badge with animated dot
  - Neutral badge
- [ ] Create `src/components/ui/Input.tsx`
- [ ] Create `src/components/ui/Select.tsx`
- [ ] Create `src/components/ui/SectionHeader.tsx`
  - Section label (mono font, uppercase)
  - Title and description
  - Center/left alignment options

---

## Phase 4: Section Components

### Hero Section
- [ ] Create `src/components/sections/Hero.tsx`
  - Hero badge with pulsing dot
  - H1 with gradient text
  - Description paragraph
  - CTA buttons (primary + secondary)
- [ ] Create `src/components/sections/HeroBackground.tsx`
  - Animated gradient blobs
  - Floating shapes (circles, morphing shapes)
  - Pulsing dots
  - Grid lines overlay
- [ ] Create `src/components/sections/HeroCards.tsx`
  - 3 floating cards with metrics
  - Float animation
  - Progress bar animation

### Services Section
- [ ] Create `src/components/sections/Services.tsx`
  - Section header
  - Bento grid layout
- [ ] Create `src/components/sections/ServiceCard.tsx`
  - Icon container
  - Title and description
  - Link with arrow
  - Stats grid (for featured card)
  - Featured variant (spans 2 cols/rows)

### Process Section
- [ ] Create `src/components/sections/Process.tsx`
  - Section header
  - 4-column grid with connecting line
- [ ] Create `src/components/sections/ProcessStep.tsx`
  - Numbered circle (hover effect)
  - Title and description

### Contact Section
- [ ] Create `src/components/sections/Contact.tsx`
  - Two-column layout
  - Sticky sidebar on desktop
- [ ] Create `src/components/sections/ContactInfo.tsx`
  - Title and description
  - Contact methods (email, phone, location)
  - Schedule call box (dark card)
- [ ] Create `src/components/sections/ContactForm.tsx`
  - Form header
  - Name, email, company, service select, message
  - Submit button
  - Privacy note

---

## Phase 5: Integration & Polish

- [ ] Create main page `src/app/page.tsx`
  - Import and compose all sections
  - Add proper spacing between sections
- [ ] Add scroll reveal animations
  - Intersection Observer hook
  - Reveal animation classes
- [ ] Add smooth scroll behavior
- [ ] Test responsive design
  - Mobile (< 640px)
  - Tablet (640px - 1024px)
  - Desktop (> 1024px)
  - Large desktop (> 1200px)
- [ ] Verify all hover states and transitions
- [ ] Test dark mode compatibility
- [ ] Performance optimization (lazy loading, image optimization)

---

## File Structure (Target)

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Section.tsx
│   │   └── Container.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   └── SectionHeader.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── HeroBackground.tsx
│       ├── HeroCards.tsx
│       ├── Services.tsx
│       ├── ServiceCard.tsx
│       ├── Process.tsx
│       ├── ProcessStep.tsx
│       ├── Contact.tsx
│       ├── ContactInfo.tsx
│       └── ContactForm.tsx
└── lib/
    └── utils.ts
```

---

## Notes

- **Mobile-first approach**: All components styled for mobile first, then enhanced for larger screens
- **Design system**: Follow `docs/design-system.md` for all styling decisions
- **Animations**: Use CSS keyframes defined in globals.css, triggered via Tailwind classes
- **Accessibility**: Ensure proper focus states, ARIA labels, and color contrast
