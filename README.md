# NVQ Portfolio

Personal portfolio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## ✨ Features

- ⚡ **Next.js 15 App Router** — Multi-page routing with optimized navigation
- 🎨 **Light / Dark Mode** — Seamless theme switching via `next-themes`
- 🌐 **Bilingual** — English & Vietnamese content toggle
- 🎬 **Framer Motion** — Smooth page transitions and micro-animations
- 📱 **Fully Responsive** — Mobile-first design with hamburger menu
- 📊 **Route Progress Bar** — Gold-themed top progress bar via `@bprogress/next`

## 🛠️ Tech Stack

| Category   | Technology            |
| ---------- | --------------------- |
| Framework  | Next.js 15, React 19  |
| Language   | TypeScript            |
| Styling    | Tailwind CSS v4       |
| Animations | Framer Motion         |
| Icons      | Lucide React, Devicon |
| Theme      | next-themes           |
| Progress   | @bprogress/next       |

## 📁 Project Structure

```
src/
├── app/
│   ├── (main)/                # Route group with shared Navbar + Footer
│   │   ├── about/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── skills/page.tsx
│   │   ├── experience/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── layout.tsx         # Shared layout (Navbar + Footer)
│   │   └── page.tsx           # Homepage (Hero)
│   ├── globals.css            # Theme variables & custom utilities
│   └── layout.tsx             # Root layout (fonts, providers)
├── components/
│   ├── layout/                # Navbar, Footer
│   ├── sections/              # Page section components
│   └── ui/                    # Reusable UI (ThemeToggle, TypeWriter, etc.)
├── data/                      # Portfolio & resume data (EN/VN)
├── hooks/                     # useLanguage
├── provider/                  # AppProvider (theme + progress bar)
├── lib/                       # Utilities (cn)
└── types/                     # TypeScript interfaces
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📄 License

This project is private and not open for redistribution.
