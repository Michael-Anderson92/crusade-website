# CRUSADE Guild Website — Master Playbook

> **Project**: CRUSADE - Esfand's WoW Guild Website
> **Last Updated**: February 2026
> **Author**: Mike Anderson (Anderson Designs)

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Research: Esfand & CRUSADE](#2-research-esfand--crusade)
3. [Brand Identity & Design System](#3-brand-identity--design-system)
4. [Information Architecture](#4-information-architecture)
5. [Technical Stack & Architecture](#5-technical-stack--architecture)
6. [Feature Roadmap](#6-feature-roadmap)
7. [API Integrations](#7-api-integrations)
8. [Content Strategy](#8-content-strategy)
9. [SEO & Performance](#9-seo--performance)
10. [Deployment & Infrastructure](#10-deployment--infrastructure)
11. [Development Phases](#11-development-phases)

---

## 1. Project Overview

### Mission

Build a world-class guild website for **CRUSADE** — the WoW guild led by Esfand (EsfandTV), one of the most prominent World of Warcraft streamers and co-founder of OTK. The site should capture the guild's competitive excellence, deep community bonds, and the epic Burning Crusade aesthetic that defines the CRUSADE identity.

### Goals

- Serve as the guild's public-facing hub for recruitment, achievements, and community
- Showcase CRUSADE's competitive accomplishments (including the #1 SSC Speed Clear world record)
- Provide functional tools for guild management (applications, roster, raid scheduling)
- Integrate with Esfand's streaming ecosystem (Twitch, YouTube, social)
- Create an immersive, visually stunning experience worthy of a top-tier WoW guild

### Target Audience

- Prospective guild applicants (serious raiders)
- Current CRUSADE guild members
- Esfand's broader community and fans
- WoW Classic / TBC Classic enthusiasts

---

## 2. Research: Esfand & CRUSADE

### Who Is Esfand?

**Tim Esfandiari** (born September 3, 1991), known as **Esfand** or **EsfandTV**, is a major American Twitch streamer, YouTuber, and entrepreneur.

**Key Facts:**

- Co-founder and co-owner of **One True King (OTK)** — founded October 11, 2020 with Asmongold, Mizkif, Rich Campbell, and Tips Out
- Co-owner of **Starforge Systems** (PC building company), **Mythic Talent**, and **Mad Mushroom** (game publishing)
- 1.38M+ Twitch followers, ranked #5 English WoW channel on Twitch
- Won **Best Roleplay Streamer** at the 2024 Streamer Awards
- Multiple nominations for Best MMORPG Streamer (2021-2024)
- Known as **"The Ret Bull"** — the iconic Retribution Paladin champion
- Former college football player at SMU (Defensive Tackle), hence the "Coach Esfand" persona
- Dallas Cowboys supporter, Austin TX native
- Streams WoW, Madden NFL, variety content, IRL, and sports talk
- Formerly joined Method Gaming as content creator (February 2019)
- Created the ClassiCast podcast with StaySafe and TipsOut
- Hosted **Let's Go! Football** weekly show on Twitch with NFL players
- Organized the **OTK Charity Lift-A-Thon** raising $140,601+ for Games for Love
- Participated in **OnlyFangs** (Sodapoppin's WoW Hardcore streamer guild)
- Hosted the **Mak'gora Tournament** driving massive WoW community engagement

### CRUSADE Guild

- **Server**: US - Benediction (Classic/TBC Classic)
- **Achievement**: **#1 SSC (Serpentshrine Cavern) Speed Clear in the World** — September 2021
- **Warcraft Logs**: [classic.warcraftlogs.com/guild/id/476980](https://classic.warcraftlogs.com/guild/id/476980)
- **Expansion Focus**: The Burning Crusade Classic
- **Leadership**: Led by Esfand as guild leader
- **Culture**: Competitive excellence combined with genuine community — the emotional BlizzCon meetups prove this isn't just a raiding guild, it's a family

### The BlizzCon Story (Critical Brand Moment)

At **BlizzCon 2023** (November 3-4, Anaheim CA), Esfand met **20+ CRUSADE guild members** in person for the first time. He was visibly emotional and overwhelmed with joy, paying for the entire guild's dinner and eventually breaking down in tears after saying goodbye. He described it as one of the most meaningful experiences of his streaming career. This moment encapsulates everything CRUSADE stands for: **real connections forged through gaming**.

A prior **BlizzCon guild photo** was also taken at an earlier event, posted on Twitter showing the CRUSADE roster together in person.

### Esfand's Brand Pillars (Design Implications)

| Pillar | What It Means | Design Implication |
|--------|--------------|-------------------|
| Holy Warrior | Ret Paladin identity, crusade/holy themes | Gold, divine light, paladin iconography |
| Competitive | World-first speed clears, serious raiding | Achievement showcases, leaderboards, stats |
| Community | BlizzCon tears, guild loyalty | Member spotlights, testimonials, meetup gallery |
| Coach | Football background, leadership | Bold, structured layout, team-oriented |
| Entertainment | OTK co-founder, major streamer | Stream integration, VODs, highlight clips |
| Charity | Lift-A-Thon, Games for Love | Community-first messaging |

---

## 3. Brand Identity & Design System

### Logo

CRUSADE guild logo provided (green/gold shield emblem). This is the primary brand mark.

### Color Palette

```
Primary Colors:
  --gold-primary:     #FFD700    /* Holy Paladin gold */
  --gold-dark:        #B8960C    /* Darker gold for text/accents */
  --gold-light:       #FFF1A8    /* Light gold glow */
  --emerald:          #00FF7F    /* From logo - fel/nature green */
  --emerald-dark:     #00CC66    /* Darker emerald */

Background Colors:
  --bg-primary:       #0A0A0F    /* Near-black base */
  --bg-secondary:     #12121A    /* Card backgrounds */
  --bg-tertiary:      #1A1A2E    /* Elevated surfaces */
  --bg-overlay:       rgba(10, 10, 15, 0.85)  /* Overlay */

Accent Colors:
  --red-crusade:      #8B0000    /* Deep red - Horde/blood */
  --silver:           #C0C0C0    /* Armor/metallic accents */
  --silver-dark:      #808080    /* Muted silver */

WoW Class Colors (for roster):
  --class-warrior:    #C79C6E
  --class-paladin:    #F58CBA
  --class-hunter:     #ABD473
  --class-rogue:      #FFF569
  --class-priest:     #FFFFFF
  --class-shaman:     #0070DE
  --class-mage:       #69CCF0
  --class-warlock:    #9482C9
  --class-druid:      #FF7D0A

Text Colors:
  --text-primary:     #E8E6E3    /* Light text on dark */
  --text-secondary:   #9CA3AF    /* Muted body text */
  --text-accent:      #FFD700    /* Gold highlights */
```

### Typography

```
Headings:     "Cinzel Decorative" or "MedievalSharp" (Google Fonts)
              Fallback: "Cinzel", Georgia, serif
              Weight: 700-900, uppercase for major headings

Subheadings:  "Cinzel" (Google Fonts)
              Weight: 400-600

Body:         "Inter" or "Outfit" (Google Fonts)
              Weight: 300-500
              Line-height: 1.6-1.8 for readability

Monospace:    "JetBrains Mono" (for any stats/data)

Scale (Desktop):
  Hero:       4rem - 6rem (clamp)
  H1:         2.5rem - 3.5rem
  H2:         2rem - 2.5rem
  H3:         1.5rem - 1.75rem
  Body:       1rem - 1.125rem
  Small:      0.875rem
  Caption:    0.75rem
```

### Visual Effects & Animations

- **Golden particle system**: Floating holy light particles on hero section
- **Parallax scrolling**: Multi-layer backgrounds with depth
- **Glow effects**: Gold/emerald glow on hover states and CTAs
- **Metallic textures**: Subtle leather, chainmail, parchment backgrounds
- **Border ornaments**: Medieval-style corner decorations on cards/sections
- **Scroll-triggered reveals**: Fade-up animations as sections enter viewport
- **Ember/spark effects**: Subtle fire particles near achievements
- **Shield/crest motifs**: Repeating guild emblem as watermarks

### Iconography

- Use WoW-inspired icons where possible (swords, shields, class icons)
- Lucide React icons for functional UI elements
- Custom SVG icons for class symbols matching WoW's aesthetic

---

## 4. Information Architecture

### Sitemap

```
/                           → Landing Page (Hero + Key Sections)
├── /roster                 → Guild Roster & Character Profiles
├── /achievements           → Raid Progression & Speed Clears
├── /schedule               → Raid Schedule & Calendar
├── /apply                  → Guild Application Form
├── /news                   → News & Updates Feed
├── /media                  → Screenshots, VODs, Gallery
├── /about                  → Guild History & Leadership
│
├── /portal (Authenticated) → Member Dashboard
│   ├── /portal/attendance  → Personal Attendance Tracking
│   ├── /portal/loot        → DKP/Loot History
│   └── /portal/settings    → Account Settings
│
└── /admin (Admin Only)     → Admin Dashboard
    ├── /admin/applications → Review Applications
    ├── /admin/roster       → Manage Roster
    ├── /admin/news         → Manage News Posts
    └── /admin/settings     → Site Configuration
```

### Landing Page Sections (Scroll Flow)

1. **Hero** — Full-screen immersive intro with logo, tagline, CTA
2. **Achievements Banner** — #1 SSC Speed Clear, kill counts, stats
3. **About / Who We Are** — Guild identity, led by Esfand, community values
4. **Raid Progression** — Current tier progress visualization
5. **Live Stream** — Twitch embed when Esfand is live, fallback to highlights
6. **Guild Roster Preview** — Class composition overview with key members
7. **News / Updates** — Latest boss kills, recruitment, patch discussions
8. **Media Gallery** — Screenshots, BlizzCon meetup photos, highlight clips
9. **Recruitment CTA** — "Join the Crusade" with application link
10. **Footer** — Links, Discord widget, social links, credits

---

## 5. Technical Stack & Architecture

### Core Stack

| Layer | Technology | Reasoning |
|-------|-----------|-----------|
| Framework | **Next.js 15** (App Router) | SSR/SSG, familiar from Elaview |
| Language | **TypeScript** | Type safety, developer experience |
| Styling | **Tailwind CSS** | Rapid iteration, consistent design |
| Animations | **Framer Motion** | Smooth, performant scroll animations |
| Database | **PostgreSQL** (Railway) | Reliable, familiar from Elaview |
| ORM | **Prisma** | Type-safe queries, migrations |
| Auth | **Clerk** | Quick setup, familiar from Elaview |
| CMS | **Sanity** | News/content management, familiar from CCF |
| Hosting | **Vercel** | CI/CD, edge functions, familiar |
| Email | **Resend** | Transactional emails (applications) |

### Optional / Phase 2+

| Layer | Technology | Use Case |
|-------|-----------|----------|
| Real-time | **Pusher** or **Socket.io** | Live raid status, notifications |
| File Storage | **Cloudinary** or **Uploadthing** | Screenshots, media uploads |
| Analytics | **Vercel Analytics** + **PostHog** | Traffic, engagement tracking |
| Monitoring | **Sentry** | Error tracking |

### Project Structure

```
crusade-website/
├── .claude/
│   └── project-context.md         # AI context file
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── hero-bg.jpg
│   │   └── class-icons/
│   ├── fonts/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx                # Landing page
│   │   ├── globals.css
│   │   ├── roster/
│   │   ├── achievements/
│   │   ├── schedule/
│   │   ├── apply/
│   │   ├── news/
│   │   ├── media/
│   │   ├── about/
│   │   ├── portal/
│   │   └── admin/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── landing/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AchievementsBanner.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── RaidProgression.tsx
│   │   │   ├── StreamEmbed.tsx
│   │   │   ├── RosterPreview.tsx
│   │   │   ├── NewsSection.tsx
│   │   │   ├── MediaGallery.tsx
│   │   │   └── RecruitmentCTA.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── GoldDivider.tsx
│   │   │   ├── GlowText.tsx
│   │   │   ├── ParticleField.tsx
│   │   │   └── ClassIcon.tsx
│   │   ├── roster/
│   │   ├── forms/
│   │   └── shared/
│   ├── lib/
│   │   ├── db.ts                   # Prisma client singleton
│   │   ├── twitch.ts               # Twitch API helper
│   │   ├── warcraftlogs.ts         # WCL API helper
│   │   ├── utils.ts
│   │   └── constants.ts
│   ├── hooks/
│   │   ├── useScrollAnimation.ts
│   │   ├── useTwitchStream.ts
│   │   └── useClassColor.ts
│   ├── types/
│   │   ├── roster.ts
│   │   ├── application.ts
│   │   └── raid.ts
│   └── styles/
│       └── animations.css
├── sanity/
│   ├── schemas/
│   │   ├── newsPost.ts
│   │   ├── bossKill.ts
│   │   └── galleryImage.ts
│   └── sanity.config.ts
├── PLAYBOOK.md                     # This file
├── .env.local
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### Database Schema (Core)

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model GuildMember {
  id              String   @id @default(cuid())
  characterName   String
  characterClass  String   // Warrior, Paladin, Hunter, etc.
  characterSpec   String   // Arms, Retribution, Beast Mastery, etc.
  characterRace   String   // Human, Orc, etc.
  rank            String   // Guild Master, Officer, Raider, Trial, Social
  joinedAt        DateTime @default(now())
  isActive        Boolean  @default(true)
  profileImageUrl String?
  warcraftLogsUrl String?
  notes           String?

  raidAttendance  RaidAttendance[]
  lootHistory     LootEntry[]
  application     Application?

  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  @@index([characterClass])
  @@index([rank])
  @@index([isActive])
}

model Application {
  id                String            @id @default(cuid())
  characterName     String
  characterClass    String
  characterSpec     String
  characterLevel    Int
  serverName        String
  warcraftLogsUrl   String?
  raidExperience    String            @db.Text
  availability      String            @db.Text
  whyCrusade        String            @db.Text
  aboutYou          String?           @db.Text
  referral          String?
  contactDiscord    String
  contactBattleNet  String?
  status            ApplicationStatus @default(PENDING)
  reviewerNotes     String?           @db.Text
  reviewedAt        DateTime?

  memberId          String?           @unique
  member            GuildMember?      @relation(fields: [memberId], references: [id])

  createdAt         DateTime          @default(now())
  updatedAt         DateTime          @updatedAt

  @@index([status])
  @@index([createdAt])
}

enum ApplicationStatus {
  PENDING
  UNDER_REVIEW
  ACCEPTED
  DECLINED
  WAITLISTED
}

model RaidEvent {
  id          String   @id @default(cuid())
  name        String   // "SSC Clear", "Black Temple Prog", etc.
  raidZone    String   // "Serpentshrine Cavern", "Black Temple", etc.
  scheduledAt DateTime
  duration    Int?     // Expected duration in minutes
  raidGroup   String   @default("Raid 1") // Raid 1, Raid 2, etc.
  notes       String?  @db.Text
  isComplete  Boolean  @default(false)

  attendance  RaidAttendance[]

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([scheduledAt])
  @@index([isComplete])
}

model RaidAttendance {
  id        String           @id @default(cuid())
  status    AttendanceStatus @default(SIGNED_UP)

  memberId  String
  member    GuildMember      @relation(fields: [memberId], references: [id], onDelete: Cascade)

  eventId   String
  event     RaidEvent        @relation(fields: [eventId], references: [id], onDelete: Cascade)

  createdAt DateTime         @default(now())

  @@unique([memberId, eventId])
  @@index([memberId])
  @@index([eventId])
}

enum AttendanceStatus {
  SIGNED_UP
  CONFIRMED
  TENTATIVE
  ABSENT
  BENCH
}

model LootEntry {
  id        String   @id @default(cuid())
  itemName  String
  itemId    Int?     // WoW item ID
  raidZone  String
  bossName  String
  awardedAt DateTime @default(now())
  dkpCost   Int?

  memberId  String
  member    GuildMember @relation(fields: [memberId], references: [id], onDelete: Cascade)

  @@index([memberId])
  @@index([awardedAt])
}

model Achievement {
  id          String   @id @default(cuid())
  title       String   // "#1 SSC Speed Clear"
  description String   @db.Text
  achievedAt  DateTime
  category    String   // "Speed Clear", "World First", "Server First"
  raidZone    String?
  proofUrl    String?  // Screenshot or WCL link
  isFeatured  Boolean  @default(false)

  createdAt   DateTime @default(now())

  @@index([isFeatured])
  @@index([achievedAt])
}

model SiteConfig {
  id    String @id @default(cuid())
  key   String @unique
  value String @db.Text
}
```

---

## 6. Feature Roadmap

### Phase 1: Launch MVP (Weeks 1-3)

**Goal**: Get a stunning, functional public site live.

| Feature | Priority | Description |
|---------|----------|-------------|
| Landing Page | 🔴 Critical | Hero, achievements, about, recruitment CTA |
| Responsive Design | 🔴 Critical | Mobile-first, all breakpoints |
| Application Form | 🔴 Critical | Full app form with email notifications |
| Static Roster | 🟡 High | Manually managed roster with class filters |
| Achievement Showcase | 🟡 High | Featured achievements with proof links |
| Twitch Stream Embed | 🟡 High | Live detection + embedded player |
| Contact / Discord Link | 🟡 High | Discord invite, social links |
| SEO + Meta Tags | 🟡 High | OG images, structured data |

### Phase 2: Content & Management (Weeks 4-6)

| Feature | Priority | Description |
|---------|----------|-------------|
| Sanity CMS Integration | 🟡 High | News posts, boss kill announcements |
| Admin Dashboard | 🟡 High | Application review, roster management |
| Raid Schedule Calendar | 🟠 Medium | Visual calendar with raid times |
| Media Gallery | 🟠 Medium | Screenshots, BlizzCon photos, clips |
| News Feed | 🟠 Medium | CMS-powered news/updates section |
| Email Notifications | 🟠 Medium | Application status updates via Resend |

### Phase 3: Integrations & Member Portal (Weeks 7-10)

| Feature | Priority | Description |
|---------|----------|-------------|
| Warcraft Logs API | 🟠 Medium | Auto-pull raid rankings and parses |
| Twitch API Integration | 🟠 Medium | Live status, VOD embeds, clips |
| Member Portal (Clerk) | 🟠 Medium | Login, personal attendance, loot history |
| Raid Attendance System | 🟠 Medium | RSVP, bench tracking |
| DKP/Loot Tracker | 🔵 Low | Loot history with DKP costs |
| Discord Widget | 🔵 Low | Show online member count |

### Phase 4: Advanced Features (Weeks 11+)

| Feature | Priority | Description |
|---------|----------|-------------|
| Interactive Raid Planner | 🔵 Low | Drag-and-drop raid comp builder |
| Guild History Timeline | 🔵 Low | Interactive timeline of milestones |
| Blizzard WoW API | 🔵 Low | Character data (retail, limited Classic support) |
| Leaderboards | 🔵 Low | Top DPS/HPS by boss from WCL |
| Analytics Dashboard | 🔵 Low | Site traffic, recruitment funnel |
| Forum / Discussion Board | 🔵 Low | Member-only discussions |

---

## 7. API Integrations

### Twitch API

**Purpose**: Show when Esfand is live, embed stream, display recent VODs.

```
Endpoints:
  GET /helix/streams?user_login=esfandtv     → Live stream status
  GET /helix/videos?user_id={id}&type=archive → Recent VODs
  GET /helix/clips?broadcaster_id={id}       → Popular clips

Auth: Client Credentials (OAuth2)
Docs: https://dev.twitch.tv/docs/api/
Rate Limit: 800 requests/minute
```

**Implementation Notes:**
- Use server-side API route to fetch stream status (cache for 60s)
- Show "LIVE NOW" badge in navbar when streaming
- Embed Twitch player component with chat toggle
- Fallback to highlight reel or latest VOD when offline

### Warcraft Logs API (v2 - GraphQL)

**Purpose**: Pull raid performance data, speed clear rankings, boss kill logs.

```
Endpoint: https://www.warcraftlogs.com/api/v2/client
Auth: OAuth2 Client Credentials
Docs: https://www.warcraftlogs.com/v2-api-docs

Key Queries:
  - Guild reports (raid logs by date range)
  - Speed rankings by zone
  - Character parses (DPS/HPS rankings)
  - Boss kill data with fight duration
```

**Implementation Notes:**
- GraphQL client to query guild data by guild ID (476980)
- Cache responses aggressively (raid data doesn't change often)
- Display speed clear rankings prominently
- Link individual parses to full WCL reports

### Blizzard WoW API

**Purpose**: Character data for roster enrichment (limited Classic support).

```
Endpoints (Retail):
  GET /profile/wow/character/{realm}/{character} → Character profile
  GET /data/wow/guild/{realm}/{guild}/roster     → Guild roster

Auth: OAuth2 Client Credentials
Docs: https://develop.battle.net/documentation/world-of-warcraft
Note: Classic API support is limited — Profile APIs exist for Classic
      but may not include all data available in retail.
```

**Implementation Notes:**
- Classic character profile API exists but has limited data
- Best used as supplementary data to manually managed roster
- Retail characters can be fully enriched
- Consider using WCL as primary data source for Classic characters

### Discord API (Widget)

**Purpose**: Show online member count, server invite link.

```
Widget URL: https://discord.com/api/guilds/{guild_id}/widget.json
Embed: https://discord.com/widget?id={guild_id}
```

**Implementation Notes:**
- Server widget must be enabled in Discord server settings
- No auth required for public widget data
- Shows online count, channels, and invite link

---

## 8. Content Strategy

### Voice & Tone

- **Epic but approachable** — Use dramatic WoW language but keep it human
- **Community-first** — Emphasize bonds over boss kills
- **Competitive confidence** — Don't brag, let achievements speak
- **Esfand's personality** — Inject humor, football references, "ret is viable" energy

### Key Messaging

| Message | Where Used |
|---------|-----------|
| "Join the Crusade" | Primary CTA, hero section |
| "For Glory. For Azeroth. For CRUSADE." | Hero tagline |
| "#1 SSC Speed Clear in the World" | Achievement banner |
| "Led by EsfandTV" | About section, credibility |
| "Real connections forged through gaming" | Community section |
| "We don't just raid together — we're family" | BlizzCon story section |

### Content Types to Create

1. **Boss Kill Announcements** — Post after major kills with screenshots
2. **Recruitment Posts** — Specific class/spec needs with personality
3. **Guild Spotlight** — Feature individual members, their stories
4. **Raid Recap** — Weekly raid summaries with fun moments
5. **Patch Analysis** — How patches affect CRUSADE's strategy
6. **BlizzCon / Meetup Recaps** — Photo galleries, stories
7. **Memes & Fun** — Essential for WoW guild culture

### Social Links to Feature

- **Twitch**: twitch.tv/esfandtv
- **YouTube**: youtube.com/esfandtv
- **Twitter/X**: x.com/EsfandTV
- **Instagram**: instagram.com/esfandtv
- **OTK**: otknetwork.com
- **Discord**: Guild Discord invite link
- **Warcraft Logs**: classic.warcraftlogs.com/guild/id/476980

---

## 9. SEO & Performance

### SEO Strategy

```
Primary Keywords:
  - "CRUSADE WoW guild"
  - "Esfand guild"
  - "EsfandTV CRUSADE"
  - "WoW TBC Classic guild"
  - "CRUSADE Benediction"

Meta Title: "CRUSADE | Esfand's World of Warcraft Guild"
Meta Description: "Official website of CRUSADE — the WoW guild led by EsfandTV.
  Home of the #1 SSC Speed Clear in the world. Apply to join the crusade."

OG Image: Custom branded social card with logo + achievements
```

### Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 90+ |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Time to Interactive | < 3.5s |

### Performance Strategies

- Use Next.js Image component with WebP/AVIF optimization
- Lazy load below-fold sections and media gallery
- Static generation (SSG) for landing page, roster, achievements
- Incremental Static Regeneration (ISR) for news, raid data
- Edge caching on Vercel for API responses
- Preload critical fonts (Cinzel, Inter)
- Code-split animation libraries (Framer Motion)

---

## 10. Deployment & Infrastructure

### Environment Variables

```env
# Database
DATABASE_URL=postgresql://...

# Auth (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...

# Twitch API
TWITCH_CLIENT_ID=...
TWITCH_CLIENT_SECRET=...

# Warcraft Logs API
WCL_CLIENT_ID=...
WCL_CLIENT_SECRET=...

# Blizzard API
BLIZZARD_CLIENT_ID=...
BLIZZARD_CLIENT_SECRET=...

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=...
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=...

# Email (Resend)
RESEND_API_KEY=re_...

# Discord
NEXT_PUBLIC_DISCORD_GUILD_ID=...
NEXT_PUBLIC_DISCORD_INVITE_URL=...

# Site
NEXT_PUBLIC_SITE_URL=https://crusade-guild.com
```

### Hosting

- **Frontend**: Vercel (automatic deployments from GitHub)
- **Database**: Railway PostgreSQL
- **CMS**: Sanity.io (hosted)
- **Domain**: crusade-guild.com or similar
- **DNS**: Cloudflare (optional, for DDoS protection)

### CI/CD

- Push to `main` → auto-deploy to production (Vercel)
- Push to `develop` → deploy to preview URL
- PR previews enabled for feature branches
- Prisma migrations run via deploy hook or manual Railway command

---

## 11. Development Phases

### Phase 1 Sprint Plan (Weeks 1-3)

**Week 1**: Foundation
- [ ] Initialize Next.js 15 project with TypeScript
- [ ] Configure Tailwind CSS with custom theme (colors, fonts)
- [ ] Set up project structure (folders, components, types)
- [ ] Create reusable UI components (Button, Card, GlowText, etc.)
- [ ] Build responsive Navbar and Footer
- [ ] Create Hero section with particle effects
- [ ] Set up Prisma + Railway database

**Week 2**: Core Sections
- [ ] Build Achievements Banner section
- [ ] Build About / Who We Are section
- [ ] Build Roster Preview section (static data)
- [ ] Build Recruitment CTA section
- [ ] Build Application Form page
- [ ] Integrate Framer Motion scroll animations
- [ ] Set up Clerk auth (basic, for future admin)

**Week 3**: Polish & Launch
- [ ] Build Twitch stream embed with live detection
- [ ] Create responsive mobile experience
- [ ] Add SEO meta tags, OG images, sitemap
- [ ] Performance optimization pass
- [ ] Browser testing (Chrome, Firefox, Safari, mobile)
- [ ] Deploy to Vercel production
- [ ] Configure custom domain

### Git Workflow

```bash
# Branch naming
feature/hero-section
feature/application-form
fix/mobile-responsive
refactor/component-library

# Commit format
feat(landing): add hero section with particle effects
feat(roster): implement class filter and search
fix(forms): resolve application submission validation
refactor(ui): extract reusable GlowText component
chore(deps): update Next.js to 15.x
docs(playbook): add API integration details
```

---

## Appendix A: Reference Sites for Inspiration

- **Method.gg** — Top WoW guild site, clean competitive feel
- **Liquid Guild (Team Liquid WoW)** — Modern esports + guild hybrid
- **Guilds of WoW (guildsofwow.com)** — Guild management platform
- **Raider.IO** — WoW profile/ranking site, excellent data presentation
- **WoWProgress** — Guild rankings, good achievement layouts

## Appendix B: WoW Class Colors Reference

| Class | Hex | RGB |
|-------|-----|-----|
| Warrior | #C79C6E | 199, 156, 110 |
| Paladin | #F58CBA | 245, 140, 186 |
| Hunter | #ABD473 | 171, 212, 115 |
| Rogue | #FFF569 | 255, 245, 105 |
| Priest | #FFFFFF | 255, 255, 255 |
| Shaman | #0070DE | 0, 112, 222 |
| Mage | #69CCF0 | 105, 204, 240 |
| Warlock | #9482C9 | 148, 130, 201 |
| Druid | #FF7D0A | 255, 125, 10 |

## Appendix C: TBC Raid Tiers (For Progression Tracking)

| Tier | Raids | Bosses |
|------|-------|--------|
| T4 | Karazhan, Gruul's Lair, Magtheridon's Lair | 15 |
| T5 | Serpentshrine Cavern, Tempest Keep: The Eye | 10 |
| T6 | Hyjal Summit, Black Temple | 14 |
| T6.5 | Sunwell Plateau | 6 |
| **Total** | | **45 bosses** |