# Quick Start Guide 🚀

## Installation & Setup

### Step 1: Install Node.js

**Option A: Download from Official Website**
1. Visit https://nodejs.org/
2. Download LTS version (v20 or higher recommended)
3. Run the installer and follow the setup wizard
4. Choose "Add to PATH" during installation
5. Restart your terminal/VS Code

**Option B: Using Chocolatey (Windows package manager)**
```powershell
choco install nodejs
```

**Option C: Using Windows Package Manager**
```powershell
winget install OpenJS.NodeJS
```

### Step 2: Verify Node.js Installation

After installing, open a new Terminal and run:
```bash
node --version
npm --version
```

You should see version numbers for both.

### Step 3: Install Project Dependencies

```bash
cd c:\Users\lindo\Downloads\lindokuhle-portfolio
npm install
```

This will download and install all required packages (React, Next.js, Tailwind CSS, Framer Motion, etc).

### Step 4: Run the Development Server

```bash
npm run dev
```

You should see output like:
```
  ▲ Next.js 15.0.0
  - Local:        http://localhost:3000
```

### Step 5: Open in Browser

Open http://localhost:3000 in your web browser and enjoy your portfolio!

## Available Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Create production build
npm start        # Run production build
npm run lint     # Check code with ESLint
```

## Project Structure

```
📁 Portfolio/
├── 📁 src/
│   ├── 📁 app/          # Pages (Home, About, Projects, etc)
│   ├── 📁 components/   # Reusable UI components
│   ├── 📁 contexts/     # React contexts (Theme)
│   ├── 📁 data/         # Portfolio data (projects, skills)
│   ├── 📁 types/        # TypeScript type definitions
│   └── globals.css      # Global styles
├── 📁 public/           # Static assets
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript config
├── tailwind.config.ts   # Tailwind CSS config
└── next.config.ts       # Next.js config
```

## Customization

### Update Your Info
Edit `src/data/portfolio.ts` to add:
- Your projects
- Your skills
- Your experience
- Your education
- Blog posts

### Update Contact Info
Edit `src/components/layout/Footer.tsx` for:
- Email address
- LinkedIn URL
- GitHub URL

Edit `src/app/contact/page.tsx` for:
- Phone number
- Contact methods

### Customize Colors
Edit `tailwind.config.ts`:
- Change primary colors (currently sky blue)
- Modify dark mode colors
- Add custom gradients

## Troubleshooting

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```
Then visit http://localhost:3001

### Module not found errors?
```bash
rm -r node_modules
npm install
```

### Changes not showing?
1. Stop the dev server (Ctrl+C)
2. Clear browser cache (Ctrl+Shift+Delete)
3. Run `npm run dev` again

## Features

✅ Fully responsive (mobile, tablet, desktop)
✅ Dark/Light mode toggle
✅ Smooth animations with Framer Motion
✅ SEO optimized with meta tags
✅ Contact form
✅ Project showcase with filters
✅ Blog section with tags
✅ Timeline component
✅ Service offerings
✅ CV download button

## Performance Tips

- The site is optimized with Tailwind CSS (minimal CSS)
- Images are lazy-loaded
- Animations only run on viewport
- Next.js handles code splitting automatically

## Next Steps

1. ✅ Install Node.js (if not done yet)
2. ✅ Run `npm install`
3. ✅ Run `npm run dev`
4. ✅ Customize your portfolio data
5. ✅ Update contact information
6. ✅ Test on different devices
7. ✅ Deploy to Vercel, Netlify, or your hosting

## Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Click Deploy

### Deploy to Netlify
1. Create production build: `npm run build`
2. Push to GitHub
3. Connect repository to Netlify
4. Deploy

## Need Help?

- Check the README.md in the project root
- Review Copilot instructions in .github/copilot-instructions.md
- Edit data in src/data/portfolio.ts to customize content

---

Happy coding! 🎉
