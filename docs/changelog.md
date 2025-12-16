# Changelog

All notable changes to the Codirity landing page migration project.

---

## [Unreleased]

### Phase 2: Layout Components - 2024-12-16

#### Added
- **Header Component** (`src/components/layout/Header.tsx`)
  - Fixed navigation with scroll state detection
  - Transparent by default, blurred white background on scroll
  - Logo with animated pulsing dot
  - Desktop navigation with hover underline effects
  - Mobile hamburger menu with slide-down animation
  - CTA button with hover effects
  - Responsive breakpoints (mobile-first)

- **Footer Component** (`src/components/layout/Footer.tsx`)
  - Dark background (gray-900)
  - 4-column responsive grid layout
  - Brand section with logo and description
  - Services, Company, and Resources link columns
  - Social links (LinkedIn, Twitter, GitHub) with hover effects
  - Copyright and legal links

- **Section Component** (`src/components/layout/Section.tsx`)
  - Reusable section wrapper
  - Background variants: `default` (white), `gray`, `gradient`
  - Padding variants: `default`, `compact`, `hero`
  - Accepts custom className for additional styling

- **Container Component** (`src/components/layout/Container.tsx`)
  - Max-width container with centered content
  - Size variants: `default` (1400px), `narrow` (1200px), `wide` (full)

- **Layout Index** (`src/components/layout/index.ts`)
  - Barrel export for all layout components

#### Changed
- Updated `src/app/layout.tsx`
  - Added Header and Footer components
  - Added background pattern div
  - Wrapped children in `<main>` tag

- Updated `src/app/page.tsx`
  - Replaced default Next.js content with placeholder sections
  - Hero, Services, Process, and Contact section placeholders
  - Using new Section and Container components

---

### Phase 1: Project Setup - 2024-12-16

#### Added
- **Dependencies**
  - `lucide-react` - Icon library
  - `clsx` - Conditional class utility
  - `tailwind-merge` - Tailwind class merging
  - `class-variance-authority` - Component variant management

- **Fonts** (`src/app/layout.tsx`)
  - Outfit (weights: 300, 400, 500, 600, 700, 800) - Primary font
  - Space Mono (weights: 400, 700) - Monospace font

- **Global CSS** (`src/app/globals.css`)
  - CSS custom properties for all design tokens
  - Brand colors: `--green-dark`, `--green-main`, `--green-light`
  - Gray scale: `--gray-50` through `--gray-900`
  - Shadow variables: `--shadow-xs` through `--shadow-xl`, `--shadow-green`
  - Tailwind theme configuration via `@theme inline`
  - Animation keyframes:
    - `pulse-dot` - Pulsing dot effect
    - `blob-float` - Floating blob animation
    - `shape-spin` - Rotating shape
    - `shape-morph` - Morphing border radius
    - `shape-float` - Floating with rotation
    - `dot-pulse` - Pulsing dots
    - `float-card` - Floating card effect
    - `progress-fill` - Progress bar animation
    - `slide-up` - Slide up reveal
    - `fade-in` - Fade in effect
  - Animation utility classes with delay variants
  - Reveal animation classes for scroll-triggered effects
  - Background pattern class
  - Gradient text class
  - Custom scrollbar styling

- **Utils** (`src/lib/utils.ts`)
  - `cn()` helper function for class name merging

- **Documentation**
  - `docs/design-system.md` - Complete design system guide
  - `docs/todo.md` - Migration task list
  - Updated `CLAUDE.md` with design system reference

#### Changed
- Updated `src/app/layout.tsx`
  - Replaced Geist fonts with Outfit and Space Mono
  - Updated metadata with Codirity branding

---

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles, animations, theme
│   ├── layout.tsx           # Root layout with Header/Footer
│   └── page.tsx             # Home page with section placeholders
├── components/
│   └── layout/
│       ├── Header.tsx       # Navigation component
│       ├── Footer.tsx       # Footer component
│       ├── Section.tsx      # Section wrapper
│       ├── Container.tsx    # Container wrapper
│       └── index.ts         # Barrel exports
└── lib/
    └── utils.ts             # Utility functions (cn)
```

---

## Next Steps

- **Phase 3**: UI Components (Button, Card, Badge, Input, Select, SectionHeader)
- **Phase 4**: Section Components (Hero, Services, Process, Contact)
- **Phase 5**: Integration & Polish (animations, responsive testing)
