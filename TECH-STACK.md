# The Headline Lab - Technical Stack

## Core Technologies

- **Next.js 13.5.1** - React framework with App Router
- **React 18.2.0** - UI library
- **TypeScript 5.2.2** - Type-safe JavaScript
- **Tailwind CSS 3.3.3** - Utility-first CSS framework

## Authentication

- **NextAuth.js 4.24.7** - Authentication solution
  - Google OAuth provider
  - JWT strategy
  - Secure session management

## UI Components

- **shadcn/ui** - Accessible component system built on:
  - Radix UI primitives
  - Tailwind CSS
  - Class Variance Authority
- **Lucide React 0.446.0** - Icon system

## Form Management

- **React Hook Form 7.53.0** - Form validation
- **Zod 3.23.8** - Schema validation

## Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## UI Component Library

Pre-configured components include:
- Accordion
- Alert Dialog
- Avatar
- Button
- Calendar
- Card
- Carousel
- Command
- Dialog
- Dropdown Menu
- Form
- Input
- Navigation Menu
- Select
- Tabs
- Toast
- Tooltip
- And many more...

## Getting Started

1. Clone the repository
2. Create `.env.local` file with:
   ```
   GOOGLE_CLIENT_ID=your_client_id
   GOOGLE_CLIENT_SECRET=your_client_secret
   NEXTAUTH_SECRET=your_secret
   NEXTAUTH_URL=http://localhost:3000
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run development server:
   ```bash
   npm run dev
   ```

## Environment Setup

Required environment variables:
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`

## Features

- 🔐 Secure authentication with Google OAuth
- 🎨 Beautiful, responsive UI with Tailwind CSS
- 🧩 Modular component architecture
- 📱 Mobile-first design
- 🔄 Real-time session management
- 🚀 Production-ready setup
- 🛡️ Type-safe development with TypeScript
- 🎯 Comprehensive form validation
- 🔔 Toast notifications system
- 📊 Error handling and monitoring