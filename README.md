# Lindokuhle Ngcongo's Developer Portfolio

A modern, professional developer portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🎨 Features

- **Modern Design**: Clean, futuristic tech aesthetic with dark mode by default
- **Responsive**: Fully responsive design for mobile, tablet, and desktop
- **Animated Components**: Smooth animations using Framer Motion
- **Dark/Light Mode**: Toggle between dark and light themes
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Complete Portfolio**: Showcasing projects, skills, services, and blog
- **Contact Form**: Functional contact form with validation
- **Timeline Component**: Career history visualization
- **Reusable Components**: Well-structured, reusable UI components

## 💻 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Node Version**: 18+ recommended

## 📁 Folder Structure

```
lindokuhle-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout with theme provider
│   │   ├── page.tsx                   # Home page
│   │   ├── globals.css                # Global styles
│   │   ├── about/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx               # About page
│   │   ├── projects/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx               # Projects page
│   │   ├── services/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx               # Services page
│   │   ├── blog/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx               # Blog page
│   │   └── contact/
│   │       ├── layout.tsx
│   │       └── page.tsx               # Contact page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx             # Navigation bar
│   │   │   └── Footer.tsx             # Footer component
│   │   └── ui/
│   │       ├── Button.tsx             # Reusable button
│   │       ├── Card.tsx               # Card component
│   │       ├── Section.tsx            # Section wrapper
│   │       ├── Timeline.tsx           # Timeline component
│   │       ├── ContactForm.tsx        # Contact form
│   │       └── GradientText.tsx       # Gradient text
│   ├── contexts/
│   │   └── ThemeContext.tsx           # Theme provider context
│   ├── data/
│   │   └── portfolio.ts               # Portfolio data (projects, skills, etc)
│   └── types/
│       └── index.ts                   # TypeScript types
├── public/
│   ├── favicon.ico                    # Favicon
│   └── projects/                      # Project images
├── .github/
│   └── copilot-instructions.md        # Copilot instructions
├── package.json                       # Dependencies
├── tsconfig.json                      # TypeScript config
├── tailwind.config.ts                 # Tailwind config
├── postss.config.js                   # PostCSS config
├── next.config.ts                     # Next.js config
└── README.md                          # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, yarn, pnpm, or bun

### Installation

1. Open the project folder in VS Code
2. Open a terminal and run:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Available Scripts

- `npm run dev` - Starts development server
- `npm run build` - Builds for production
- `npm start` - Runs production build
- `npm run lint` - Runs ESLint

## ✨ Sections & Pages

### 🏠 Home
- Hero section with call-to-action buttons
- Statistics showcase
- Highlights of key expertise
- Gradient text and animations

### 👤 About
- Professional bio
- Career timeline with experiences
- Skills categorized by domain
- Education and certifications
- Downloadable CV button

### 🎯 Projects
- Project cards with descriptions and tech stack
- Filter by technology
- Links to GitHub and live demos
- Featured projects highlight

### 💼 Services
- Six main service offerings
- Detailed feature list for each service
- Working process visualization
- Flexible pricing tiers
- Consultation scheduling

### 📞 Contact
- Contact form with validation
- Multiple contact methods (Email, LinkedIn, GitHub, Phone)
- FAQ section
- Response time guarantee

### 📚 Blog
- Blog post listings
- Tag-based filtering
- Post metadata (date, author, tags)
- Newsletter subscription
- Extensible content structure

## 🎨 Customization

### Update Portfolio Data
Edit `src/data/portfolio.ts` to update:
- Projects and portfolio items
- Work experience and timeline
- Skills and technologies
- Services offered
- Education and certifications
- Blog posts

### Modify Colors
Edit `tailwind.config.ts` to change the color scheme:
- Primary colors (sky blue by default)
- Dark colors (for dark mode)
- Add custom gradients and animations

### Update Content
All pages are easily customizable:
- Page content in `src/app/*/page.tsx`
- Component structure remains consistent
- Reuse existing components for new sections

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

All components adapt fluidly to screen sizes.

## 🌙 Dark/Light Mode

The site features a theme toggle with:
- localStorage persistence
- System preference detection
- Smooth transitions between themes
- Accessible color schemes

## 🔍 SEO Features

- Meta tags for each page
- Open Graph tags for social sharing
- Structured data support
- Semantic HTML
- Responsive design
- Fast page loads with Tailwind CSS

## 🎬 Animations

Uses Framer Motion for:
- Page transitions
- Component entrance animations
- Hover effects
- Scroll-triggered animations
- Smooth interactions

## 📦 Dependencies

- **next**: React framework
- **react**: UI library
- **typescript**: Type safety
- **tailwindcss**: Utility-first CSS
- **framer-motion**: Animation library
- **lucide-react**: Icon library

## 🤝 Contact & Support

- **Email**: hello@lindokuhle.dev
- **LinkedIn**: linkedin.com/in/lindokuhle
- **GitHub**: github.com/lindokuhle
- **Phone**: +1 (555) 123-4567

## 📄 License

This portfolio website is open source and available under the MIT License.

## 🎯 Future Enhancements

- [ ] Blog post individual pages with full content
- [ ] Project detail pages with in-depth case studies
- [ ] Client testimonials section
- [ ] Dark mode image optimization
- [ ] Analytics integration
- [ ] Newsletter backend integration
- [ ] Search functionality for blog
- [ ] Comments system for blog posts
- [ ] Email notification for contact form
- [ ] Admin panel for content management

## 🙏 Acknowledgments

Built with modern web technologies and best practices in mind. Special thanks to the open-source community.

---

**Last Updated**: February 2026
**Built with**: Next.js, TypeScript, and Tailwind CSS
