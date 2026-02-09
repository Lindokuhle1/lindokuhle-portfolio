# Project File Structure

```
lindokuhle-portfolio/
│
├── 📁 .github/
│   └── copilot-instructions.md    # AI Assistant instructions
│
├── 📁 public/
│   ├── projects/                  # Project image placeholders
│   └── favicon.svg                # Website favicon
│
├── 📁 src/
│   │
│   ├── 📁 app/                    # Next.js App Router pages
│   │   ├── layout.tsx             # Root layout with theme provider
│   │   ├── page.tsx               # Home page (/)
│   │   ├── globals.css            # Global styles
│   │   │
│   │   ├── 📁 about/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx           # About page (/about)
│   │   │
│   │   ├── 📁 projects/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx           # Projects page (/projects)
│   │   │
│   │   ├── 📁 services/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx           # Services page (/services)
│   │   │
│   │   ├── 📁 blog/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx           # Blog page (/blog)
│   │   │
│   │   └── 📁 contact/
│   │       ├── layout.tsx
│   │       └── page.tsx           # Contact page (/contact)
│   │
│   ├── 📁 components/
│   │   │
│   │   ├── 📁 layout/
│   │   │   ├── Navbar.tsx         # Navigation bar with theme toggle
│   │   │   └── Footer.tsx         # Footer with social links
│   │   │
│   │   └── 📁 ui/
│   │       ├── Button.tsx         # Reusable button component
│   │       ├── Card.tsx           # Reusable card component
│   │       ├── Section.tsx        # Page section wrapper
│   │       ├── SectionTitle.tsx   # Section title component
│   │       ├── Timeline.tsx       # Career timeline component
│   │       ├── ContactForm.tsx    # Contact form with validation
│   │       └── GradientText.tsx   # Gradient text effect
│   │
│   ├── 📁 contexts/
│   │   └── ThemeContext.tsx       # Dark/Light mode context provider
│   │
│   ├── 📁 data/
│   │   └── portfolio.ts           # All portfolio content (projects, skills, etc)
│   │
│   └── 📁 types/
│       └── index.ts               # TypeScript interface definitions
│
├── Configuration Files
│   ├── package.json               # Dependencies and scripts
│   ├── tsconfig.json              # TypeScript configuration
│   ├── tailwind.config.ts         # Tailwind CSS theme config
│   ├── postcss.config.js          # PostCSS plugins (Tailwind, Autoprefixer)
│   ├── next.config.ts             # Next.js configuration
│   ├── next.config.js             # Additional Next.js config
│   ├── .eslintrc.json             # ESLint rules
│   └── .gitignore                 # Git ignore patterns
│
├── Documentation
│   ├── README.md                  # Main project documentation
│   ├── QUICK_START.md             # Quick start guide
│   ├── PROJECT_STRUCTURE.md       # This file
│   └── .env.example               # Environment variables template
│
└── .github/copilot-instructions.md # Copilot AI instructions
```

## File Descriptions

### Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Manages dependencies and npm scripts |
| `tsconfig.json` | TypeScript compiler options |
| `tailwind.config.ts` | Tailwind CSS customization |
| `postcss.config.js` | PostCSS plugin configuration |
| `next.config.ts` | Next.js framework settings |
| `.eslintrc.json` | Code linting rules |
| `.gitignore` | Files to exclude from Git |

### Core Directories

#### `/src/app`
Next.js App Router pages. Each folder with `page.tsx` creates a route:
- `/` → `page.tsx`
- `/about` → `about/page.tsx`
- `/projects` → `projects/page.tsx`
- etc.

#### `/src/components`
Reusable React components:
- **layout/**: Page layout components (Navbar, Footer)
- **ui/**: Reusable UI components (Button, Card, Section)

#### `/src/contexts`
React Context providers:
- `ThemeContext.tsx` - Manages dark/light mode state

#### `/src/data`
Content and data files:
- `portfolio.ts` - All portfolio data (projects, skills, experiences)

#### `/src/types`
TypeScript type definitions:
- `index.ts` - Interface definitions for projects, experiences, etc.

### Static Files

#### `/public`
Static assets served directly:
- `favicon.svg` - Browser tab icon
- `projects/` - Project image folder (for future images)

## How Files Connect

```
┌─────────────────────────────────────────┐
│        layout.tsx (Root)                │
│     • Theme Provider                    │
│     • Navbar & Footer                   │
└──────────────┬──────────────────────────┘
               │
        ┌──────┴──────┐
        ↓             ↓
   page.tsx      contexts/
   (routes)      ThemeContext.tsx
        │
   ├─→ components/
   │   ├── layout/Navbar
   │   ├── layout/Footer
   │   └── ui/*
   │
   └─→ data/
       portfolio.ts
```

## Adding New Content

### Add a New Project
1. Edit `src/data/portfolio.ts`
2. Add to `projects` array
3. Projects appear automatically on `/projects`

### Add a New Blog Post
1. Edit `src/data/portfolio.ts`
2. Add to `blogPosts` array
3. Post appears on `/blog` with tags

### Create a New Page
1. Create folder in `src/app/` (e.g., `src/app/resources/`)
2. Add `layout.tsx` and `page.tsx`
3. Route automatically available at `/resources`

### Add a New Component
1. Create file in `src/components/ui/`
2. Export component
3. Import and use in pages

## Dependencies

### Core
- **next**: React framework
- **react**: UI library
- **react-dom**: DOM rendering

### Styling
- **tailwindcss**: Utility CSS framework
- **postcss**: CSS processor
- **autoprefixer**: CSS vendor prefixes

### Animation & UI
- **framer-motion**: Smooth animations
- **lucide-react**: Icon library

### Development
- **typescript**: Type safety
- **eslint**: Code linting

## Key Features by File

| Feature | Location |
|---------|----------|
| Pages | `src/app/[page]/page.tsx` |
| Navigation | `src/components/layout/Navbar.tsx` |
| Dark Mode | `src/contexts/ThemeContext.tsx` |
| Animations | `src/components/**/*.tsx` |
| Style Theme | `tailwind.config.ts` |
| Portfolio Data | `src/data/portfolio.ts` |
| Global Styles | `src/app/globals.css` |

---

**Total Files**: 35+
**Components**: 10+
**Pages**: 6
**Configuration Files**: 7
**Data Files**: 1

