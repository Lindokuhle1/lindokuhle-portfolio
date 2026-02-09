# 🚀 GETTING STARTED

Welcome to your professional developer portfolio! Follow these steps to get your site up and running.

## ⚡ Quick Summary

Your complete Next.js portfolio website has been created with:
- ✅ 6 main pages (Home, About, Projects, Services, Blog, Contact)
- ✅ 10+ reusable components
- ✅ Dark/Light mode toggle
- ✅ Responsive design
- ✅ Smooth animations
- ✅ SEO optimized
- ✅ Contact form
- ✅ Project filtering
- ✅ Blog system
- ✅ Career timeline

## 📋 Prerequisites

You need **Node.js 18+** installed on your computer.

### Check if Node.js is installed:
```powershell
node --version
npm --version
```

### Install Node.js if needed:
1. Visit https://nodejs.org/
2. Download **LTS version** (v20 or higher)
3. Run the installer
4. **Important**: Check "Add to PATH" during installation
5. Restart your terminal/VS Code

## 🏃 Quick Setup (3 steps)

### Step 1: Open Terminal in VS Code
- Your folder is already open in VS Code
- Press `Ctrl + ~` to open Terminal
- Or: Terminal → New Terminal

### Step 2: Install Dependencies
```bash
npm install
```
This downloads all required packages (~300MB, takes 2-5 minutes depending on your internet)

### Step 3: Start Development Server
```bash
npm run dev
```

You should see:
```
▲ Next.js 15.0.0
- Local:        http://localhost:3000
```

### Open Your Portfolio
Open http://localhost:3000 in your web browser

**That's it!** 🎉 Your portfolio is now running locally.

## 🎨 Customize Your Portfolio

### Essential Customizations

#### 1. Update Your Information
**File**: `src/data/portfolio.ts`

Replace the sample data with your own:
- Your projects (add, edit, remove)
- Your skills and technologies
- Your work experience
- Your education
- Your services
- Your blog posts

#### 2. Update Contact Information
**File**: `src/app/contact/page.tsx`

Update these lines:
```typescript
const contactMethods = [
  {
    value: 'your@email.com',  // ← Change
    href: 'mailto:your@email.com',  // ← Change
  },
  {
    value: '+1 (555) 123-4567',  // ← Change
    href: 'tel:+15551234567',  // ← Change
  },
];
```

#### 3. Update Footer Links
**File**: `src/components/layout/Footer.tsx`

```typescript
const socialLinks = [
  {
    href: 'https://github.com/yourname',  // ← Change
  },
  {
    href: 'https://linkedin.com/in/yourname',  // ← Change
  },
  {
    href: 'mailto:your@email.com',  // ← Change
  },
];
```

#### 4. Change Colors
**File**: `tailwind.config.ts`

Find and update primary colors:
```typescript
primary: {
  500: "#0ea5e9",  // Main color - CHANGE THIS
  600: "#0284c7",  // Darker version
}
```

Popular alternatives:
- **Purple**: `#a855f7`
- **Green**: `#14b8a6`
- **Orange**: `#f97316`
- **Pink**: `#ec4899`

#### 5. Update Page Titles and Descriptions
**File**: `src/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Your Title',  // ← Change
  description: 'Your professional summary...',  // ← Change
};
```

## 📁 Important Files

| File | Purpose | Edit For |
|------|---------|----------|
| `src/data/portfolio.ts` | Portfolio content | Projects, skills, experience |
| `tailwind.config.ts` | Colors & theme | Color scheme, fonts |
| `src/app/layout.tsx` | Page metadata | Site title, meta description |
| `src/components/layout/Footer.tsx` | Footer content | Social links |
| `src/app/contact/page.tsx` | Contact info | Email, phone, contact methods |
| `src/app/page.tsx` | Home page | Hero content |
| `src/app/about/page.tsx` | About page | Bio, story |

## 🎯 Workflow for Development

### 1. Start Dev Server
```bash
npm run dev
```

### 2. Make Changes
- Edit files in `src/`
- See changes instantly in browser (hot reload)
- No need to restart!

### 3. View Changes
- Browser refreshes automatically
- Portfolio updates live

### 4. Stop Server
- Press `Ctrl + C` in terminal

## 📂 Adding Content

### Add a Project
1. Edit `src/data/portfolio.ts`
2. Add to `projects` array:
```typescript
{
  id: "7",
  title: "My New Project",
  description: "...",
  longDescription: "...",
  technologies: ["React", "Node.js"],
  image: "/projects/my-project.jpg",
  github: "https://github.com/...",
  featured: false,
}
```
3. Project appears on `/projects` page

### Add a Blog Post
1. Edit `src/data/portfolio.ts`
2. Add to `blogPosts` array:
```typescript
{
  id: "4",
  title: "My Article",
  excerpt: "Short preview...",
  date: "2024-01-20",
  tags: ["React", "Web Dev"],
  author: "Your Name",
}
```
3. Post appears on `/blog` page

### Add Project Image
1. Save image to `public/projects/`
2. Update image path in project:
```typescript
image: "/projects/my-image.jpg",
```

## 🔧 Available Commands

```bash
npm run dev      # Start development server (ctrl+C to stop)
npm run build    # Create optimized production build
npm start        # Run production build locally
npm run lint     # Check code style with ESLint
```

## 🌙 Test Dark Mode

- Look for the sun/moon icon in top right
- Click to toggle between dark and light mode
- Setting persists (saved in browser)

## 📱 Test Responsiveness

### Desktop (1920px)
- All features visible
- Multi-column layouts

### Tablet (768px)
- 2-column grid layouts
- Sidebar menus collapse
- Touch-friendly spacing

### Mobile (375px)
- Single column layout
- Full-width elements
- Stacked navigation

**Test in Browser:**
1. Open DevTools: `F12` or `Ctrl+Shift+I`
2. Press `Ctrl+Shift+M` (toggle device toolbar)
3. Test different sizes

## 🚀 Deploy to Production

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Go to https://vercel.com
3. Click "New Project"
4. Select your GitHub repo
5. Click "Deploy"

### Option 2: Netlify
1. Run `npm run build`
2. Go to https://netlify.com
3. Drag `out` folder to Netlify
4. Your site is live!

### Option 3: Any Hosting
1. Run `npm run build` (creates optimized build)
2. Upload `out` folder to your host
3. Point domain to your site

## ✨ Features Tour

### 🏠 Home Page
- Hero section with CTA buttons
- Statistics (projects, clients, years)
- Highlights of expertise
- Call to action sections

### 👤 About Page
- Professional bio
- Career timeline
- Skills by category
- Education & certifications
- **Download CV button** (downloads as text file)

### 🎯 Projects Page
- Project cards with descriptions
- **Filter by technology**
- GitHub and demo links
- Featured projects marked
- Tech tags on each project

### 💼 Services Page
- 6 service offerings
- Feature lists
- Working process (4 steps)
- Flexible pricing tiers
- Consultation CTA

### 📚 Blog Page
- Article listings
- **Filter by tags**
- Post metadata (date, author)
- Newsletter subscription form
- Extensible for future posts

### 📞 Contact Page
- **Contact form** (works locally)
- Multiple contact methods
- Social links
- FAQ section

## 🎨 Customization Tips

1. **Colors**: Edit `tailwind.config.ts` (primary colors)
2. **Content**: Edit `src/data/portfolio.ts` (all data)
3. **Layout**: Edit component files in `src/components/`
4. **Pages**: Edit page files in `src/app/*/page.tsx`
5. **Animations**: FramerMotion already configured in components
6. **Fonts**: Edit font stack in `tailwind.config.ts`

## 📚 Learning Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **React**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org/docs/

## ❓ Troubleshooting

### Port 3000 in use?
```bash
npm run dev -- -p 3001
```
Then visit http://localhost:3001

### Changes not showing?
1. Save the file
2. Check terminal for errors
3. Refresh browser (Ctrl+F5 hard refresh)

### Module not found?
```bash
rm -r node_modules
npm install
npm run dev
```

### Terminal won't start?
1. Make sure Node.js is installed
2. Close other terminals
3. Restart VS Code
4. Try again in fresh terminal

## 📋 Checklist

- [ ] Node.js installed
- [ ] `npm install` completed
- [ ] `npm run dev` running
- [ ] Site visible at http://localhost:3000
- [ ] Updated portfolio data
- [ ] Updated contact information
- [ ] Changed primary color
- [ ] Added project images
- [ ] Tested dark mode
- [ ] Tested on mobile
- [ ] Ready to deploy!

## 🎓 Next Learning Steps

1. **Customize colors** - Edit `tailwind.config.ts`
2. **Add your projects** - Edit `src/data/portfolio.ts`
3. **Update contact** - Edit `src/app/contact/page.tsx`
4. **Learn React** - Follow React docs
5. **Deploy** - Deploy to Vercel

## 💡 Pro Tips

- **Git**: Initialize with `git init` to track changes
- **Backups**: Keep backups of `src/data/portfolio.ts`
- **Assets**: Keep images in `public/projects/`
- **Testing**: Always test on mobile before deploying
- **Analytics**: Add Google Analytics later if needed

## 🎉 You're All Set!

Your professional portfolio is ready to customize and share with the world.

**Next Step**: 
```bash
npm install
npm run dev
```

Then start editing `src/data/portfolio.ts` with your information!

---

**Need help?** Read:
- `QUICK_START.md` - Quick setup guide
- `CUSTOMIZATION.md` - Detailed customization guide
- `PROJECT_STRUCTURE.md` - File organization
- `README.md` - Complete documentation

**Happy building!** 🚀
