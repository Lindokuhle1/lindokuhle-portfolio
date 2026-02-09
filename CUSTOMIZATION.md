# Customization Guide 🎨

This guide explains how to customize every aspect of your portfolio website.

## 🎯 Content Customization

### Update Your Portfolio Data

All portfolio content is in `src/data/portfolio.ts`. Edit this file to customize:

#### Projects
```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Your Project Title",
    description: "Short description",
    longDescription: "Detailed description...",
    technologies: ["React", "Node.js", "AWS"],
    image: "/projects/your-project.jpg",
    github: "https://github.com/yourname/repo",
    liveDemo: "https://your-project-demo.com",
    featured: true,  // Shows on home page
  },
  // Add more projects...
];
```

#### Experience
```typescript
export const experiences: Experience[] = [
  {
    id: "1",
    title: "Senior Developer",
    company: "Tech Company",
    period: "2022 - Present",
    description: "What you did...",
    technologies: ["C#", ".NET", "React"],
  },
  // Add more experiences...
];
```

#### Skills
```typescript
export const skills: Skill[] = [
  {
    category: "Backend",
    skills: [".NET", "Node.js", "Python", "C#"],
  },
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS"],
  },
  // Add more skill categories...
];
```

#### Education
```typescript
export const education = [
  {
    id: "1",
    degree: "Bachelor of Science",
    institution: "University Name",
    year: "2020",
    details: "Optional details...",
  },
  // Add more education...
];
```

#### Services
```typescript
export const services: Service[] = [
  {
    id: "1",
    title: "Web Development",
    description: "Building modern web apps...",
    icon: "Globe",  // From lucide-react
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  // Add more services...
];
```

#### Blog Posts
```typescript
export const blogPosts = [
  {
    id: "1",
    title: "Article Title",
    excerpt: "Short preview...",
    content: "Full article content...",
    date: "2024-01-15",
    tags: ["React", "Web Development"],
    author: "Your Name",
  },
  // Add more posts...
];
```

## 🎨 Design Customization

### Update Colors

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        50: "#f0f9ff",
        100: "#e0f2fe",
        // ... change these hex values
        500: "#0ea5e9",  // Main primary color
        600: "#0284c7",
      },
    },
  },
}
```

#### Popular Color Schemes

**Purple Theme**
```typescript
primary: {
  500: "#a855f7",  // Medium purple
  600: "#9333ea",  // Darker purple
}
```

**Green/Teal Theme**
```typescript
primary: {
  500: "#14b8a6",  // Teal
  600: "#0d9488",  // Dark teal
}
```

**Orange Theme**
```typescript
primary: {
  500: "#f97316",  // Orange
  600: "#ea580c",  // Dark orange
}
```

**Red/Pink Theme**
```typescript
primary: {
  500: "#ec4899",  // Pink
  600: "#db2777",  // Hot pink
}
```

### Update Typography

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],  // Change main font
      mono: ["Fira Code", "monospace"],  // Change code font
    },
  },
}
```

Popular fonts:
- `"Plus Jakarta Sans"` - Modern, friendly
- `"Poppins"` - Rounded, contemporary
- `"Space Mono"` - Technical, bold
- `"Merriweather"` - Elegant, serif

### Update Animations

Edit `tailwind.config.ts`:

```typescript
keyframes: {
  fadeIn: {
    "0%": { opacity: "0" },
    "100%": { opacity: "1" },
  },
  slideUp: {
    "0%": { transform: "translateY(20px)", opacity: "0" },
    "100%": { transform: "translateY(0)", opacity: "1" },
  },
  // Add custom animations here
}
```

## 📝 Text Content Customization

### Update Navigation Links

Edit `src/components/layout/Navbar.tsx`:

```typescript
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/projects' },  // Change name
  { name: 'Services', href: '/services' },
  // Add new sections
  { name: 'Testimonials', href: '/testimonials' },
];
```

### Update Footer Content

Edit `src/components/layout/Footer.tsx`:

```typescript
const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/yourname',  // Update URL
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/yourprofile',  // Update URL
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:your@email.com',  // Update email
    label: 'Email',
  },
];
```

### Update Contact Information

Edit `src/app/contact/page.tsx`:

```typescript
const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your@email.com',  // Update
    href: 'mailto:your@email.com',  // Update
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 555-5555',  // Update
    href: 'tel:+15555555555',  // Update
  },
];
```

### Update Meta Tags

Edit `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Your Title',  // Update
  description: 'Your professional summary...',  // Update
  keywords: ['Your', 'Keywords', 'Here'],  // Update
  authors: [{ name: 'Your Name', url: 'https://yoursite.com' }],  // Update
};
```

## 🖼️ Media Customization

### Add Project Images

1. Add images to `public/projects/`
2. Update image path in `src/data/portfolio.ts`:

```typescript
{
  // ...
  image: "/projects/my-project.jpg",  // Update path
}
```

### Add Custom Favicon

1. Create favicon (SVG or PNG)
2. Place in `public/favicon.ico`
3. Update in `src/app/layout.tsx`:

```typescript
<link rel="icon" href="/favicon.ico" />
```

## 🔧 Component Customization

### Customize Button Styles

Edit `src/components/ui/Button.tsx`:

```typescript
const variants = {
  primary: 'bg-primary-500 hover:bg-primary-600 text-white',
  secondary: 'bg-dark-800 hover:bg-dark-700 text-primary-400',
  ghost: 'text-primary-400 hover:text-primary-300',
  // Add new variants
  danger: 'bg-red-500 hover:bg-red-600 text-white',
};
```

### Customize Card Design

Edit `src/components/ui/Card.tsx`:

```typescript
className={`glass-dark rounded-2xl p-6 border border-dark-700 ${className}`}
// Change:
// - rounded-2xl → rounded-lg (less rounded)
// - p-6 → p-8 (more padding)
// - glass-dark → glass (use light mode effect)
```

### Customize Section Spacing

Edit `src/components/ui/Section.tsx`:

```typescript
className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}
// Change py-20 to py-32 for more vertical spacing
// Change px-4 to px-2 for less horizontal padding
```

## 🌙 Dark/Light Mode Customization

### Adjust Dark Mode Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  dark: {
    50: "#f9fafb",
    900: "#111827",  // Darkest background
    // Adjust these values for different dark shades
  }
}
```

### Add Light Mode Overrides

Edit `src/app/globals.css`:

```css
.light {
  @apply bg-white text-dark-900;
}

/* Add light mode specific styles */
.light .glass-dark {
  @apply bg-dark-100/20 border-dark-300;
}
```

## 📱 Responsive Design Customization

Update breakpoints in `tailwind.config.ts`:

```typescript
theme: {
  screens: {
    sm: '640px',   // Mobile
    md: '768px',   // Tablet
    lg: '1024px',  # Desktop
    xl: '1280px',  // Large
  },
}
```

## 🚀 Performance Customization

### Optimize Images

Edit `next.config.ts`:

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'your-cdn.com',
    },
  ],
}
```

### Add Analytics

Add to `src/app/layout.tsx`:

```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## 🔐 Environment Variables

Create `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_API_URL=https://api.yoursite.com
```

Update types in `.env.example` for documentation.

## 📋 Checklist for Customization

- [ ] Update portfolio data in `src/data/portfolio.ts`
- [ ] Update contact info in `src/app/contact/page.tsx`
- [ ] Update footer links in `src/components/layout/Footer.tsx`
- [ ] Change primary color in `tailwind.config.ts`
- [ ] Add project images to `public/projects/`
- [ ] Update meta tags in `src/app/layout.tsx`
- [ ] Add custom favicon in `public/`
- [ ] Update navigation links in `Navbar.tsx`
- [ ] Add blog posts to `src/data/portfolio.ts`
- [ ] Test on mobile devices
- [ ] Test dark/light mode toggle

## 🎯 Further Customization

### Add New Page

1. Create folder: `src/app/new-page/`
2. Add files:
   - `layout.tsx` - Page metadata
   - `page.tsx` - Page content
3. Page available at `/new-page`

### Create Custom Component

1. Create file: `src/components/custom/MyComponent.tsx`
2. Export component as default
3. Import in pages with: `import MyComponent from '@/components/custom/MyComponent'`

### Add API Routes

1. Create folder: `src/app/api/route-name/`
2. Add `route.ts` with handler functions
3. Available at `/api/route-name`

---

Ready to make it yours! 🚀

