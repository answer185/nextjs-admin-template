# Next.js Admin Template

English | [简体中文](README.md)

A modern admin dashboard template built with Next.js 15 App Router.

## Features

- 🚀 **Tech Stack**
  - Next.js 15 (App Router)
  - React 19+
  - TypeScript
  - Tailwind CSS
  - shadcn/ui Components

- 🌍 **Internationalization**
  - Based on next-intl
  - Support for English and Chinese
  - Route-level language switching

- 🎨 **UI/UX**
  - Responsive design
  - Dark mode support
  - Modern minimalist style
  - Customizable themes

- 📦 **Core Features**
  - Complete form system (various form controls)
  - Dashboard Page
  - List Page
  - Error and Result Page
  - Layout based on group router

[More Content](https://www.zengcreates.cn/2b/project-admin-template)
## Quick Start

### Prerequisites

- Node.js 20.0 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/answer185/nextjs-admin-template

# Enter the project directory
cd nextjs-admin-template

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Project Structure
```md
src/
├── app/ # App Router routes
│ ├── [locale]/ # i18n routes
│ ├── (admin-pages)/ # Admin pages
│ └── (auth)/ # Authentication pages
├── components/ # Common components
│ ├── ui/ # UI base components
│ └── shared/ # Shared business components
├── lib/ # Utility functions
├── hooks/ # Custom Hooks
├── styles/ # Style files
└── types/ # TypeScript type definitions
```

## Development Guide

### Add a new page

- Create a new directory under `src/app/[locale]/(admin-pages)`
- Add `page.tsx` file
- Add the menu name in src/components/layouts/sidebar.tsx

### Internationalization

- Add internationalized text in the `src/intl` directory
- Add the name of the internationalized file in src/lib/constans.ts
- Use the `useTranslations` hook to get translations
- Remember to carry the language parameter when using `<Link>`

### Adding Components

1. Use shadcn/ui CLI to add base components
2. Create custom components under `components/ui`
3. Follow project component guidelines

## Deployment
- Vercel (recommended)
- Docker
- Traditional servers

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Submit a Pull Request
