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

## Phase 3: UI Components ✅

- [x] Create `src/components/ui/Button.tsx`
  - Primary variant (green, rounded-full)
  - Secondary variant (outline)
  - Ghost variant
  - Dark variant
  - Icon support
- [x] Create `src/components/ui/Card.tsx`
  - Standard card (white, hover effects)
  - Featured card (dark green gradient)
  - Accent card with top bar
  - Flat card variant
  - Sub-components: CardAccentBar, CardIcon, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- [x] Create `src/components/ui/Badge.tsx`
  - Brand badge with animated dot
  - Neutral badge
  - Success badge
- [x] Create `src/components/ui/Input.tsx`
  - Size variants (sm, md, lg)
  - Label, error, and helper text support
  - Accessible with ARIA attributes
- [x] Create `src/components/ui/Select.tsx`
  - Size variants (sm, md, lg)
  - Label, error, and helper text support
  - Custom chevron icon
  - Accessible with ARIA attributes
- [x] Create `src/components/ui/SectionHeader.tsx`
  - Section label (mono font, uppercase)
  - Title with optional gradient text
  - Description
  - Center/left alignment options
  - Max-width variants
- [x] Create `src/components/ui/index.ts` (barrel exports)

---

## Phase 4: Section Components ✅

### Hero Section
- [x] Create `src/components/sections/Hero.tsx`
  - Hero badge with pulsing dot
  - H1 with gradient text
  - Description paragraph
  - CTA buttons (primary + secondary)
- [x] Create `src/components/sections/HeroBackground.tsx`
  - Animated gradient blobs
  - Floating shapes (circles, morphing shapes)
  - Pulsing dots
  - Grid lines overlay
  - Bottom wave SVG
- [x] Create `src/components/sections/HeroCards.tsx`
  - 3 floating cards with metrics
  - Float animation
  - Progress bar animation

### Services Section
- [x] Create `src/components/sections/Services.tsx`
  - Section header
  - Bento grid layout (3x2)
- [x] Create `src/components/sections/ServiceCard.tsx`
  - Icon container with hover animation
  - Title and description
  - Link with arrow (hover gap animation)
  - Stats grid (for featured card)
  - Featured variant (spans 2 cols/rows, dark gradient)

### Process Section
- [x] Create `src/components/sections/Process.tsx`
  - Section header
  - 4-column grid with connecting line
  - Gradient background overlay
- [x] Create `src/components/sections/ProcessStep.tsx`
  - Numbered circle (hover effect)
  - Title and description

### Contact Section
- [x] Create `src/components/sections/Contact.tsx`
  - Two-column layout
  - Sticky sidebar on desktop
- [x] Create `src/components/sections/ContactInfo.tsx`
  - Title and description
  - Contact methods (email, phone, location)
  - Schedule call box (dark card)
- [x] Create `src/components/sections/ContactForm.tsx`
  - Form header
  - Name, email, company, service select, message
  - Submit button with icon
  - Privacy note with lock icon
- [x] Create `src/components/sections/index.ts` (barrel exports)

---

## Phase 5: Integration & Polish ✅

- [x] Create main page `src/app/page.tsx`
  - Import and compose all sections
  - Clean, minimal implementation
- [x] Add scroll reveal animations
  - Created `src/hooks/useRevealOnScroll.ts` with Intersection Observer
  - Created `src/components/layout/RevealProvider.tsx` client wrapper
  - Staggered reveal delays for grid items
- [x] Add smooth scroll behavior (already configured in globals.css)
- [x] Test responsive design
  - Mobile-first approach throughout
  - Responsive grids in all sections
  - Hidden hero cards on mobile (<lg)
- [x] Verify all hover states and transitions
  - Card hover effects (translate, shadow, border)
  - Button hover effects (translate, shadow)
  - Process step number hover effects
  - Link hover animations
- [ ] Test dark mode compatibility (future enhancement)
- [ ] Performance optimization (future enhancement)

---

## File Structure (Final)

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
│   │   ├── Container.tsx
│   │   ├── RevealProvider.tsx
│   │   └── index.ts
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── SectionHeader.tsx
│   │   └── index.ts
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
│       ├── ContactForm.tsx
│       └── index.ts
├── hooks/
│   ├── useRevealOnScroll.ts
│   └── index.ts
└── lib/
    └── utils.ts
```

---

## Notes

- **Mobile-first approach**: All components styled for mobile first, then enhanced for larger screens
- **Design system**: Follow `docs/design-system.md` for all styling decisions
- **Animations**: Use CSS keyframes defined in globals.css, triggered via Tailwind classes
- **Accessibility**: Ensure proper focus states, ARIA labels, and color contrast
