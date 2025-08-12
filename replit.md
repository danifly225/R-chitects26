# Overview

This is a modern full-stack architecture firm website for "R-chitects 26" based in Abidjan, Côte d'Ivoire. The application features a sophisticated single-page architecture portfolio with a contact form submission system. Built with React/TypeScript frontend and Express.js backend, it showcases the firm's projects, team, and services through an elegant, minimalist design system.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript in Vite build environment
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Radix UI primitives with shadcn/ui components for consistent design system
- **Styling**: Tailwind CSS with custom CSS variables for theming, featuring premium orange accent color and neutral grays
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form schemas
- **Component Structure**: Modular component architecture with separate sections (Hero, Excellence, Projects, Team, Services, Contact, Footer)

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Data Storage**: In-memory storage with interface-based storage abstraction (IStorage)
- **Request Handling**: Express middleware for JSON parsing, CORS, and request logging
- **Error Handling**: Centralized error middleware with structured error responses
- **Development**: Vite integration for hot reloading and development server

## Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect configuration
- **Tables**: 
  - `users` table with UUID primary keys, username/password fields
  - `contact_messages` table for form submissions with fields for name, email, phone, project type, message, and timestamps
- **Validation**: Zod schemas for runtime validation matching database schema types
- **Type Safety**: Full TypeScript integration with inferred types from schema definitions

## Form Processing
- **Contact Form**: Multi-field form with name, email, phone (optional), project type (optional), and message
- **Validation**: Client-side validation with React Hook Form and server-side validation with Zod
- **Submission Flow**: Form data validated, stored via API endpoint, success/error feedback via toast notifications
- **Data Persistence**: Contact messages stored with auto-generated UUIDs and timestamps

# External Dependencies

## Core Framework Dependencies
- **Frontend**: React 18, Vite, TypeScript, Wouter for routing
- **Backend**: Express.js, TypeScript with tsx for development
- **Database**: Drizzle ORM with @neondatabase/serverless driver for PostgreSQL

## UI and Styling
- **Component Library**: Radix UI primitives for accessible components
- **Design System**: shadcn/ui component collection
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Fonts**: Google Fonts integration (Inter, DM Sans, Fira Code, Geist Mono, Architects Daughter)

## State Management and Forms
- **Data Fetching**: TanStack React Query for server state
- **Form Management**: React Hook Form with @hookform/resolvers
- **Validation**: Zod for schema validation and drizzle-zod for schema integration
- **UI Feedback**: Custom toast system using Radix UI Toast primitives

## Development Tools
- **Build Tool**: Vite with React plugin and runtime error overlay
- **Code Quality**: TypeScript strict mode, ESLint configuration
- **Development**: Hot reloading, file watching, development banner integration
- **Asset Management**: Static file serving and asset optimization

## Third-Party Services
- **Image Hosting**: Unsplash for project portfolio images and team photos
- **Database Hosting**: Configured for Neon Database (PostgreSQL-compatible serverless database)
- **Deployment**: Replit-optimized with cartographer plugin for development environment