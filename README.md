# MyWeb

This repository contains the source code for my personal website and interactive resume.

The site is a lightweight portfolio for Shawn (Xuantong) Yan. It introduces my background as a backend and AI systems engineer, lists professional experience, links to selected projects, and includes an interactive resume modal with education, skills, research, and publication details.

## What This Package Includes

- A Vite + React single-page website
- Tailwind CSS styling with a minimal personal-site layout
- Resume and portfolio content stored as structured TypeScript data
- Sections for profile summary, experience, projects, skills, education, and publications
- An interactive resume modal built with React components and Lucide icons

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- Motion

## Project Structure

```text
src/
  App.tsx                  # Main page layout
  data.ts                  # Portfolio, resume, project, and writing content
  index.css                # Tailwind and global font styling
  main.tsx                 # React entry point
  types.ts                 # Shared content types
  components/
    Header.tsx             # Intro, contact links, and resume trigger
    ExperienceSec.tsx      # Experience summary section
    ProjectsSec.tsx        # Project links section
    ResumeModal.tsx        # Interactive resume view
    ThemeContext.tsx       # Theme state wrapper
```

## Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run a TypeScript check:

```bash
npm run lint
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Notes

This is not a reusable library package. It is the application code for my personal website. Most site content is edited in `src/data.ts`, while layout and presentation are handled by the React components under `src/components/`.

The repository still contains a few artifacts from the original AI Studio-generated scaffold, but the current website does not require a Gemini API key to render the portfolio UI.
