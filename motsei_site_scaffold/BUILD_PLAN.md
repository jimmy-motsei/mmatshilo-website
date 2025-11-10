# Build Plan — Dr Mmatshilo Motsei Website
Generated: 2025-11-06

## Overview
Phased delivery to launch Approach A (MVP), then layer Approach B modules (community, knowledge atlas, AI Companion).

---
## Phase 0 — Foundations (Week 0–1)
- Confirm IA & copy (approved from canvas).
- Choose LMS path (Strapi headless recommended) & Shopify configuration.
- Repo setup, CI, environments (.env, secrets), analytics events taxonomy.

**Acceptance**: Repo + CI green; staging env alive; route list frozen.

---
## Phase 1 — MVP (Approach A) (Weeks 1–6)
**Scope**
- Routes: /, /about, /healing, /academy, /academy/courses/[slug], /books, /books/hearing-visions-seeing-voices, /corporate-wellness, /events, /media, /contact, /account, /cart, /checkout
- Headless Shopify: books, service products; cart/checkout; order webhooks.
- Strapi: content types (Course, Lesson, Cohort, Testimonial, Book), auth, enroll endpoint.
- NextAuth: email + social; gated lessons.
- Accessibility: captions/transcripts scaffolding; reduced motion; content notes.

**Deliverables**
- Working catalog (Academy + Books)
- Enrollment flow: guest -> account -> payment -> access
- Booking: discovery call + session packages
- SEO: sitemap, robots, JSON-LD for Book/Course/Event

**Acceptance**
- Lighthouse PWA >= 90 perf on Home/Academy
- Test purchase enrolls user into Strapi course
- Discovery call booked via form scheduler (tool of choice)

---
## Phase 2 — Community & Knowledge (Weeks 6–10)
**Scope**
- /community: tiers (free/paid), onboarding prompts, agreements.
- /knowledge: Indigenous Healing Atlas taxonomy & pages.
- Forum (headless Discourse or Strapi-based), member profiles, badges.

**Acceptance**
- User completes onboarding; sees tailored suggestions
- First community event listing + recap post

---
## Phase 3 — Ikalafe Companion (Weeks 10–14)
**Scope**
- /companion: journaling, prompt packs, local-first storage option.
- Wayfinding: “Start my path” wizard connecting to circles & courses.
- Ethics & privacy: explicit consent UI, export/delete, escalation resources.

**Acceptance**
- Opt-in-only; data deletion verified; prompts library live

---
## Operations & Governance
- Incident & content moderation runbook
- Release cadence: weekly
- KPIs: enrollments, bookings, book sales, newsletter, course completion, community retention

---
## Risks & Mitigations
- Shopify/LMS webhook drift → contract tests
- Privacy & sensitive topics → legal review; modular consent components
- Bandwidth constraints → transcripts, audio-only, low-res toggles

---
## Handover Pack (for another LLM/Team)
- Repo + scaffold (see link)
- Build plan (this doc)
- Copy kit & sitemap (from canvas)
- .env template with notes
