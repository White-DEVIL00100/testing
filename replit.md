# ITN Innovative Tech Nexus - Project Documentation

## Overview

This is a modern React-based company website for ITN Innovative Tech Nexus, built with a full-stack TypeScript architecture. The application features a dark, futuristic design with glassmorphism effects and showcases technology services, portfolio projects, and company information. It uses a monorepo structure with shared components and utilities between the client and server.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Bundler**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom dark theme and glassmorphism effects
- **UI Components**: Radix UI primitives with shadcn/ui design system
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth animations and transitions
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints for services, portfolio, and contact submissions
- **Data Storage**: In-memory storage with interface for future database integration
- **Session Management**: Express session handling with PostgreSQL session store ready

### Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: Neon serverless PostgreSQL (configured but can be substituted)
- **Migrations**: Drizzle Kit for schema management
- **Schema**: Shared TypeScript schema definitions with Zod validation

## Key Components

### Shared Schema (`shared/schema.ts`)
- Centralized database schema definitions using Drizzle ORM
- Type-safe data models for users, contact submissions, services, and portfolio projects
- Zod validation schemas for form inputs and API validation

### Frontend Sections
- **Navigation**: Fixed glassmorphism header with smooth scroll navigation
- **Hero Section**: Animated landing area with floating elements and call-to-action
- **Services Section**: Dynamic service cards loaded from API
- **About Section**: Company information with feature highlights
- **Technology Stack**: Showcase of technologies used
- **Portfolio Section**: Project gallery with filtering capabilities
- **Contact Section**: Form submission with validation and API integration
- **Footer**: Company links and information

### Backend API Endpoints
- `GET /api/services` - Retrieve all available services
- `GET /api/portfolio` - Fetch portfolio projects
- `POST /api/contact` - Submit contact form with validation

### Storage Interface
- Abstract storage interface (`IStorage`) for future database implementations
- In-memory implementation (`MemStorage`) with default data seeding
- Prepared for easy migration to PostgreSQL with Drizzle ORM

## Data Flow

1. **Client Requests**: React components use TanStack Query for API calls
2. **API Layer**: Express routes handle requests with validation
3. **Storage Layer**: Abstract storage interface processes data operations
4. **Response**: Structured JSON responses with error handling
5. **UI Updates**: React Query manages cache invalidation and UI updates

## External Dependencies

### Core Framework Dependencies
- React 18 with TypeScript support
- Express.js for server-side API
- Vite for build tooling and development server

### UI and Styling
- Tailwind CSS for utility-first styling
- Radix UI primitives for accessible components
- Framer Motion for animations
- Font Awesome icons (referenced in components)

### Database and Validation
- Drizzle ORM for type-safe database operations
- Zod for runtime type validation
- Neon serverless PostgreSQL driver

### Development Tools
- TypeScript for type safety
- ESBuild for server bundling
- Replit-specific development plugins

## Deployment Strategy

### Development Mode
- Vite dev server with HMR for frontend
- TSX for server development with hot reload
- Concurrent client and server development

### Production Build
1. Vite builds optimized client bundle to `dist/public`
2. ESBuild bundles server code to `dist/index.js`
3. Static file serving for production assets
4. Environment-based configuration

### Environment Configuration
- Development: Vite middleware integration with Express
- Production: Static file serving with optimized builds
- Database: Environment variable configuration for DATABASE_URL

## Changelog

- July 05, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.