# Mansoor Sarookh — Tech Hub

> **Learn. Build. Share Technology.**  
> A premium personal technology knowledge, educational, and software engineering platform.

---

## 1. Overview

**Mansoor Sarookh Tech Hub** is a unified digital ecosystem designed to connect in-depth technical writing, structured YouTube video courses, practical software projects, interactive learning roadmaps, and curated computer science resources into one cohesive learning journey:

$$\text{Read} \longrightarrow \text{Watch} \longrightarrow \text{Explore} \longrightarrow \text{Build} \longrightarrow \text{Connect}$$

Rather than a generic blog template or simple link directory, the platform treats YouTube playlists, code repositories, deep-dive articles, and roadmaps as first-class interconnected nodes in a personal technology knowledge graph.

---

## 2. Core Pillars & Architecture

### 🎓 Learn
- **Articles & Tutorials**: In-depth technical guides with code syntax highlighting, copy-paste controls, table of contents scroll-spy, and reading progress indicators.
- **YouTube Video Courses**: Structured university-grade course playlists covering Information Security, Parallel & Distributed Computing, Software Engineering, Software Project Management, Professional Practices, and Modern React 19.
- **Video Library**: Individual lecture recordings with lecture context, adjacent playlist navigation, and companion written readings.

### 🛠️ Build
- **Featured Projects**: Flagship applications including **DataPilot AI** (no-code automated data science platform), **DevKnowledge Graph** (concept dependency visualizer), **NeuralViz** (in-browser convolutional engine), and **DistributedKV** (Raft consensus in Go).
- **Architecture Case Studies**: Detailed problem statements, technical solutions, and direct links to GitHub repositories and live demonstrations.

### 📚 Share & Resources
- **Developer Roadmaps**: Interactive sequential milestones (e.g. Modern React 2026 Developer Roadmap) with completion tracking.
- **Cheat Sheets & Guides**: Cryptographic primitives, OWASP Top 10 defenses, Gang of Four design patterns in TypeScript, and Git collaboration workflows.

---

## 3. Technology Stack

- **Framework**: React 19 + TypeScript
- **Tooling**: Vite 8
- **Styling**: Tailwind CSS v4 + Semantic Design Tokens
- **Routing**: React Router v7
- **Icons**: Lucide React
- **Animations**: CSS Transforms & Transitions + prefers-reduced-motion compliance
- **Typography**: Plus Jakarta Sans (UI) & JetBrains Mono (Code)

---

## 4. Project Structure

```
src/
├── assets/             # Generated high-fidelity visual assets & graphics
├── components/
│   ├── article/        # ArticleCard, TableOfContents, ReadingProgressBar
│   ├── common/         # CodeBlock, YouTubeVideoEmbed, YouTubePlaylistEmbed, SearchModal, ThemeToggle, Breadcrumbs
│   ├── course/         # CourseCard, LectureList
│   ├── home/           # HeroSection, FeaturedEditorial, TopicGrid, LatestArticles, ConnectSection
│   ├── layout/         # TopBar Navbar, Multi-column Footer
│   ├── navigation/     # LearnMegaMenu, MobileNav Drawer
│   ├── project/        # ProjectCard (flagship & standard variants)
│   ├── resource/       # ResourceCard, RoadmapViewer
│   └── video/          # VideoCard
├── config/             # Central siteConfig, author profile, verified social links
├── context/            # ThemeProvider (Light / Dark / System modes + LocalStorage)
├── data/               # Structured data layer (articles, courses, videos, projects, resources, topics)
├── hooks/              # useSearch (fuzzy multi-entity search), useReadingProgress
├── pages/              # 17 routed pages (Home, Articles, Courses, Videos, Topics, Projects, Resources, Search, About, Connect, 404)
└── types/              # Comprehensive TypeScript interfaces
```

---

## 5. Getting Started

### Development
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the development server.

### Production Build
```bash
npm run build
npm run preview
```

### Type Checking & Linting
```bash
npm run lint
```

---

## 6. Official Platforms & Author

- **Author**: Mansoor Sarookh
- **YouTube**: [https://youtube.com/@MansoorSarookh](https://youtube.com/@MansoorSarookh)
- **GitHub**: [https://github.com/mansoorsarookh](https://github.com/mansoorsarookh)
- **LinkedIn**: [https://linkedin.com/in/mansoorsarookh](https://linkedin.com/in/mansoorsarookh)
- **Email**: [mansoorstudentlife@gmail.com](mailto:mansoorstudentlife@gmail.com)

---

## 7. License

MIT License © 2026 Mansoor Sarookh. All rights reserved.
