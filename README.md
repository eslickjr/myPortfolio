# Joshua Eslick — Portfolio

A personal developer portfolio built with React, TypeScript, and Vite. Showcases projects, work/education timeline, skills, and contact information.

**Live site:** https://joshua-eslick.com/

## Features

- **Portfolio** — a filterable grid of projects, each with a screenshot, description, and tech stack tags, linking out to the corresponding GitHub repo
- **Timeline** — a career/education/family history with toggleable category filters and scroll-triggered animations, highlighting the current role
- **About Me** — a scroll-narrated personal story, alternating text and photos by life stage
- **Skills** — technologies grouped by category (Backend, Cloud & DevOps, Databases, Frontend, Testing, Other Tools), each with an icon and short label
- **Hire Me** — contact card with resume download, LinkedIn, GitHub, email, and phone
- Responsive layout (desktop and mobile), dark navy-and-gold theme, and a consistent design system driven by CSS custom properties

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build tool:** Vite
- **Routing:** React Router v6
- **Styling:** Plain CSS with a shared token system (`App.css`) — no CSS framework
- **Linting:** ESLint

## Project Structure

```
src/
├── assets/            Icons, tool logos, and images
├── components/         Header, Navigation, Footer, Project card, ScrollToTop
├── pages/              Portfolio, Timeline, About, Resume (Skills), Contact, Error
├── styles/              Per-page and per-component CSS
├── utils/               Shared TypeScript utilities
├── App.tsx / App.css     Root layout and design tokens
├── index.css            Global resets (scrollbar behavior, etc.)
└── main.tsx              Router setup and entry point
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### Installation

```bash
git clone git@github.com:eslickjr/myPortfolio.git
cd myPortfolio
npm install
```

### Development

```bash
npm run dev
```

Runs the app locally with hot module reloading, typically at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Type-checks the project and outputs an optimized build to `dist/`.

```bash
npm run preview
```

Serves the production build locally to verify it before deploying.

### Linting

```bash
npm run lint
```

## Deployment

The resume PDF is served as a static asset from `public/`, referenced directly (e.g. `/Joshua-Eslick-Resume.pdf`) rather than through React Router, since it needs to trigger a real file download.

## Contact

- **GitHub:** [eslickjr](https://github.com/eslickjr)
- **LinkedIn:** [joshua-eslick](https://www.linkedin.com/in/joshua-eslick)
- **Email:** JoshuaReslick@gmail.com