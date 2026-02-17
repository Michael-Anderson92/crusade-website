# CRUSADE Guild Website — Claude Project Context

## Project Summary

This is the official website for **CRUSADE**, a World of Warcraft guild led by **Esfand (EsfandTV)** — a major Twitch streamer with 1.38M+ followers and co-founder of One True King (OTK). CRUSADE achieved the **#1 SSC Speed Clear in the world** during TBC Classic on US-Benediction.

The site serves as the guild's public hub for recruitment, achievement showcases, raid management, and community building.

## Tech Stack

- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS + Framer Motion
- **Database**: PostgreSQL on Railway, Prisma ORM
- **Auth**: Clerk
- **CMS**: Sanity (news/content)
- **Hosting**: Vercel
- **Email**: Resend
- **APIs**: Twitch API, Warcraft Logs API v2 (GraphQL), Blizzard WoW API, Discord Widget

## Design System

- **Theme**: Dark, epic, medieval fantasy — holy paladin gold + emerald green
- **Primary Colors**: Gold (#FFD700), Emerald (#00FF7F), Deep Black (#0A0A0F)
- **Fonts**: Cinzel Decorative (headings), Inter (body)
- **Effects**: Golden particle system, parallax, glow effects, scroll animations
- **WoW Class Colors**: Standard Blizzard class color palette for roster display

## Key Files & Patterns

- `src/app/` — Next.js App Router pages
- `src/components/landing/` — Landing page section components
- `src/components/ui/` — Reusable UI primitives
- `src/lib/` — API helpers, database client, utilities
- `prisma/schema.prisma` — Database schema
- `sanity/schemas/` — CMS content schemas

## Coding Conventions

- TypeScript strict mode
- Server Components by default, `'use client'` only when needed
- Prisma for all database operations with proper `select` to limit fields
- Consistent error handling with try-catch in API routes
- Server Actions for form submissions
- Tailwind for styling, no CSS modules
- Framer Motion for animations
- All API keys server-side only (no NEXT_PUBLIC_ for secrets)

## Content Context

- Guild is on **US-Benediction** server
- Esfand plays **Retribution Paladin** (his iconic spec)
- Known as "The Ret Bull"
- The BlizzCon 2023 guild meetup (20+ members, emotional moment) is key brand content
- Tone: Epic but approachable, competitive but community-first
- WoW-themed language is encouraged (e.g., "Join the Crusade", "For Azeroth")

## Database Models

Core models: GuildMember, Application, RaidEvent, RaidAttendance, LootEntry, Achievement, SiteConfig

## Important Notes

- This is a **fan/community project** — respect Blizzard's IP guidelines
- Warcraft Logs guild ID: 476980
- Esfand's Twitch username: esfandtv
- The logo has already been designed (green/gold shield emblem)
- Reference PLAYBOOK.md for full project documentation