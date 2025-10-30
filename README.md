# Prudhvi Nikku - Portfolio

A modern, responsive portfolio website built with Next.js 16, TypeScript, and shadcn/ui components.

## Features

- Modern and clean design with shadcn/ui components
- Dark/Light mode toggle with system preference detection
- Fully responsive layout
- TypeScript for type safety
- Tailwind CSS for styling
- Fast and optimized with Next.js 16

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with theme provider
│   ├── page.tsx        # Homepage with all portfolio sections
│   └── globals.css     # Global styles and Tailwind directives
├── components/
│   ├── ui/             # shadcn/ui components
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── lib/
│   ├── data.ts         # Portfolio content and data
│   └── utils.ts        # Utility functions
└── public/             # Static assets

```

## Customization

To customize the portfolio content, edit the `lib/data.ts` file with your personal information, experience, education, projects, and skills.

## Deployment

This portfolio is designed to be deployed on Vercel, but can be deployed to any platform that supports Next.js applications.

## License

MIT License - feel free to use this template for your own portfolio!
