# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Baptiste Renouf's portfolio website built with Next.js 15, showcasing professional experience, projects, and technical skills. The application is written in TypeScript and uses Tailwind CSS for styling.

## Commands

```bash
# Development
npm run dev              # Start development server with Turbopack
npm run build           # Build for production
npm start               # Start production server
npm run lint            # Run ESLint

# Installation
npm install             # Install dependencies
```

## Architecture

### Core Structure
- **Next.js App Router**: Uses the new app directory structure (`src/app/`)
- **Component-based**: Modular React components in `src/app/components/`
- **Section-based Layout**: Main content organized in `src/app/sections/`
- **Data-driven**: Portfolio content stored in `src/data/portfolio.json`

### Key Components
- `Portfolio.tsx`: Main page component that orchestrates all sections
- `HeroSection.tsx`: Landing section with personal introduction
- `TechnologiesAndExperienceSection.tsx`: Technical skills and work experience
- `ProjectsSection.tsx`: Project showcase with screenshots and links
- `ResumeAndStudiesSection.tsx`: Education and career background

### Special Features
- **Tiled Layout**: Alternative layout at `/tiled` with dynamic color themes
- **Dynamic Theming**: Color schemes defined in portfolio.json with random selection
- **Custom Fonts**: Uses Clash Display font family and Google Fonts (Geist)
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Data Structure
The `portfolio.json` file contains all content including:
- Personal information and descriptions
- Work experience and education
- Project details with technologies and links
- Contact information
- Technology stacks with icons
- Color theme configurations

### Styling
- **Tailwind CSS v4**: Latest version with PostCSS integration
- **Custom Animations**: Includes slower spin animation for D20 icon
- **Typography**: Custom font classes (font-clash-regular, font-clash-bold)
- **Dynamic Styling**: Inline styles for theme colors from JSON data

### Development Notes
- TypeScript strict mode enabled
- ESLint configuration with Next.js rules
- Images stored in `public/assets/` with organized subdirectories
- Profile picture and project screenshots included
- Technology icons for skills visualization