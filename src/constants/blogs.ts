import { IBlog } from '@/types'

export const blogAuthor = {
  name: 'Md Rifajul Islam',
  role: 'Full Stack Web & Mobile Developer',
  avatar: '/hero/hero-self-portrait.png',
}

export const blogs: IBlog[] = [
  {
    _id: 'from-intern-to-full-stack-at-apixcel-how-i-grew-across-web-apis-and-mobile',
    tag: 'Career',
    img_url: '/blog/fullstack-journey.png',
    date: '2026-08-12T00:00:00.000Z',
    read_time: '8 min',
    title: 'From Intern to Full Stack at APIXcel: How I Grew Across Web, APIs, and Mobile',
    desc: 'A practical look at my year at APIXcel — internship, frontend performance work, then leading NestJS, Prisma, and React Native delivery.',
    author: blogAuthor,
    key_takeaways: [
      'Shipping real production tickets as an intern beats isolated tutorials for speed of learning.',
      'Frontend quality work (consistency and performance) is what earned trust to own backend and mobile too.',
      'Acting as a team lead is mostly architecture, reviews, and making product ideas shippable.',
    ],
    contentBlocks: [
      {
        type: 'paragraph',
        text: 'I am **Md Rifajul Islam**, a full stack web and mobile developer with **2+ years** of shipping work across **Node.js, NestJS, React, Next.js, React Native, Expo, MongoDB, PostgreSQL, and MySQL**. This post is the story behind that stack — not a generic roadmap, but the path I actually walked at **APIXcel**.',
      },
      {
        type: 'heading',
        text: 'Three seasons, one company',
      },
      {
        type: 'paragraph',
        text: 'I joined APIXcel as a **Web Developer Intern** (Jul–Sep 2025), moved into a **Frontend Developer** seat (Oct–Dec 2025), and then worked as a **Full Stack Developer** (Jan–Jul 2026). Same product culture, increasing ownership.',
      },
      {
        type: 'list',
        items: [
          '**Intern:** real React features, tests, and reviews inside a professional team.',
          '**Frontend:** up to **50% UI performance** gains and up to **70% less design inconsistency** in AI-assisted workflows.',
          '**Full stack:** NestJS services, PostgreSQL + Prisma, Redis, Next.js, React Native, Docker, and acting **Team Lead**.',
        ],
      },
      {
        type: 'heading',
        text: 'What internships actually taught me',
      },
      {
        type: 'paragraph',
        text: 'Course projects (including my **Programming Hero MERN** certification) taught syntax. Production taught **scope, review comments, and shipping behind a real API**. The intern role was React, TypeScript, and Tailwind — but the habit that stuck was asking “what breaks for the next person who touches this?”',
      },
      {
        type: 'code',
        language: 'ts',
        filename: 'src/features/tasks/useFeatureFlag.ts',
        code: `type FeatureFlag = {
  key: string
  enabled: boolean
  audience: 'intern' | 'staff' | 'all'
}

export function isFeatureEnabled(flag: FeatureFlag, role: FeatureFlag['audience']) {
  if (!flag.enabled) return false
  return flag.audience === 'all' || flag.audience === role
}`,
      },
      {
        type: 'heading',
        text: 'Frontend work that unlocked backend trust',
      },
      {
        type: 'paragraph',
        text: 'The frontend stretch was not “more screens.” It was **performance and visual system**. When UI felt 50% snappier and design drift dropped, collaboration with backend got easier — payloads, loading states, and error contracts finally matched the interface.',
      },
      {
        type: 'code',
        language: 'tsx',
        filename: 'src/components/ProductShell.tsx',
        code: `'use client'

import { memo } from 'react'

type ProductShellProps = {
  title: string
  children: React.ReactNode
}

function ProductShell({ title, children }: ProductShellProps) {
  return (
    <section className="border-border-1 bg-bg-3 rounded-xl border p-5">
      <h2 className="text-neutral-0 mb-4 text-lg font-semibold">{title}</h2>
      {children}
    </section>
  )
}

export default memo(ProductShell)`,
      },
      {
        type: 'heading',
        text: 'Full stack: architecture, not just more files',
      },
      {
        type: 'paragraph',
        text: 'As full stack I helped turn product ideas into **system and database design**, reviewed code as an acting team lead, and shipped across **technical SEO, product, and mobile**. The stack that held it together: **Node.js, NestJS, TypeScript, PostgreSQL, Prisma, Redis, React, Next.js, React Native, and Docker**.',
      },
      {
        type: 'paragraph',
        text: 'If you are early in your career: pick one company problem and own the **data path** end to end — UI, API, schema, cache. That is how intern tickets become full stack ownership.',
      },
    ],
  },
  {
    _id: 'docker-for-typescript-apps-the-same-image-from-localhost-to-linux-vps',
    tag: 'DevOps',
    img_url: '/blog/docker-cicd.png',
    date: '2026-07-28T00:00:00.000Z',
    read_time: '7 min',
    title: 'Docker for TypeScript Apps: The Same Image From Localhost to Linux VPS',
    desc: 'How I containerize NestJS and Next.js so local, CI, and Linux VPS deploys stay in parity — multi-stage builds, health checks, and GitHub Actions.',
    author: blogAuthor,
    key_takeaways: [
      'Multi-stage Docker builds keep production images small and free of build-only tools.',
      'Health checks and non-root users make NestJS APIs safer on a Linux VPS.',
      'CI should run lint, typecheck, and tests on the same Node version you ship.',
    ],
    contentBlocks: [
      {
        type: 'paragraph',
        text: 'At APIXcel we shipped **Docker** alongside NestJS and Next.js. On personal work I still use **Git, GitHub, Docker, CI/CD, Nginx, and Linux VPS**. The goal is boring: **the image that passed CI is the image that runs in production**.',
      },
      {
        type: 'heading',
        text: 'Multi-stage NestJS image',
      },
      {
        type: 'paragraph',
        text: 'Stage one installs dependencies and compiles TypeScript. Stage two copies only `dist` and production `node_modules`. That is how you avoid shipping compilers to a VPS.',
      },
      {
        type: 'code',
        language: 'dockerfile',
        filename: 'Dockerfile',
        code: `FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/main.js"]`,
      },
      {
        type: 'heading',
        text: 'CI that matches production Node',
      },
      {
        type: 'paragraph',
        text: 'I run **ESLint, Prettier, and `tsc`** locally with Husky. In GitHub Actions the same trio plus **Jest or Vitest** should run before any deploy job. If types fail, the container never gets built.',
      },
      {
        type: 'code',
        language: 'yml',
        filename: '.github/workflows/ci.yml',
        code: `name: ci
on:
  pull_request:
  push:
    branches: [main]
jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck
      - run: npm test -- --run`,
      },
      {
        type: 'heading',
        text: 'Nginx in front of the container',
      },
      {
        type: 'list',
        items: [
          'Terminate TLS at **Nginx** and proxy to the Docker published port.',
          'Keep **Redis** and **PostgreSQL** on an internal network — not published to the internet.',
          'Version images by git SHA so rollbacks are a `docker compose pull` away.',
        ],
      },
      {
        type: 'paragraph',
        text: 'DevOps for a full stack developer is not Kubernetes on day one. It is **repeatable images**, **typed builds**, and a VPS that only exposes what Nginx should see.',
      },
    ],
  },
  {
    _id: 'nestjs-prisma-postgresql-redis-clean-architecture-i-use-in-production',
    tag: 'NestJS',
    img_url: '/blog/nestjs-prisma.png',
    date: '2026-07-20T00:00:00.000Z',
    read_time: '9 min',
    title: 'NestJS + Prisma + PostgreSQL + Redis: Clean Architecture I Use in Production',
    desc: 'Patterns from APIXcel full-stack work: modules, Prisma models, Redis caching, and REST APIs that stay typed from controller to database.',
    author: blogAuthor,
    key_takeaways: [
      'Keep NestJS modules aligned with product domains, not with technical layers only.',
      'Prisma plus PostgreSQL gives relations and migrations without giving up TypeScript.',
      'Redis belongs in front of hot reads — not as a second source of truth.',
    ],
    contentBlocks: [
      {
        type: 'paragraph',
        text: 'When I moved into the **Full Stack Developer** role at APIXcel, the backend spine was **Node.js, NestJS, TypeScript, PostgreSQL, Prisma, and Redis**. I still use **Express** and **MongoDB/Mongoose** on other products, but for relational product data this is the setup I reach for first.',
      },
      {
        type: 'heading',
        text: 'Domain modules over a junk-drawer `app.module`',
      },
      {
        type: 'paragraph',
        text: 'A `ProjectsModule` owns its controller, service, and Prisma access. Controllers stay thin. Services never import another module’s repository directly — they talk through exported services. That is what made reviews as acting **Team Lead** possible: reviewers can reason about one domain at a time.',
      },
      {
        type: 'code',
        language: 'ts',
        filename: 'src/projects/projects.service.ts',
        code: `import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { RedisService } from '../redis/redis.service'

@Injectable()
export class ProjectsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly redis: RedisService,
  ) {}

  async findBySlug(slug: string) {
    const cacheKey = \`project:\${slug}\`
    const cached = await this.redis.get(cacheKey)
    if (cached) return JSON.parse(cached)

    const project = await this.prisma.project.findUnique({ where: { slug } })
    if (!project) throw new NotFoundException('Project not found')

    await this.redis.set(cacheKey, JSON.stringify(project), 60 * 5)
    return project
  }
}`,
      },
      {
        type: 'heading',
        text: 'Prisma models that match how you query',
      },
      {
        type: 'paragraph',
        text: 'Indexes should follow **real filters**: slug lookups, `createdAt` lists, foreign keys used in joins. I design schemas with the product questions first — “show events by date,” “list posts by user” — then write Prisma.',
      },
      {
        type: 'code',
        language: 'prisma',
        filename: 'prisma/schema.prisma',
        code: `model Project {
  id        String   @id @default(cuid())
  slug      String   @unique
  title     String
  client    String
  techStack String[]
  createdAt DateTime @default(now())

  @@index([createdAt])
}`,
      },
      {
        type: 'heading',
        text: 'Redis is a cache, not a database',
      },
      {
        type: 'list',
        items: [
          'Cache **read-heavy** endpoints (project details, public SEO pages) with a short TTL.',
          'Invalidate on writes — never leave stale product data as the source of truth.',
          'Keep sessions or rate-limit counters in Redis; keep money and inventory in **PostgreSQL**.',
        ],
      },
      {
        type: 'paragraph',
        text: 'I document the same APIs with **Swagger** and exercise them in **Postman**. Typed contracts plus a cache layer is how those NestJS services stayed production-ready.',
      },
    ],
  },
  {
    _id: 'how-i-built-an-event-platform-with-nextjs-typescript-and-mongodb',
    tag: 'Next.js',
    img_url: '/blog/nextjs-events.png',
    date: '2026-06-15T00:00:00.000Z',
    read_time: '8 min',
    title: 'How I Built an Event Platform with Next.js, TypeScript, and MongoDB',
    desc: 'Ticket booking, event CRUD, and dynamic search — the architecture behind my event management platform and how App Router data fetching fits in.',
    author: blogAuthor,
    key_takeaways: [
      'Model events around search and booking flows, not around a single giant document.',
      'Server Components keep listing pages fast; client components own filters and checkout.',
      'Zod validation on both form and API keeps TypeScript honest at the boundary.',
    ],
    contentBlocks: [
      {
        type: 'paragraph',
        text: 'One of the flagship projects on this portfolio is an **event management platform**: Next.js, TypeScript, Tailwind CSS, and **MongoDB**, with ticket booking, event management, and dynamic search. It is the kind of product I enjoy — public pages that must be fast, and authenticated flows that must be correct.',
      },
      {
        type: 'heading',
        text: 'Split the UI at the data boundary',
      },
      {
        type: 'paragraph',
        text: 'Event **listing and detail** pages can be Server Components: fetch from MongoDB, stream HTML, keep JS small. **Search filters, date pickers, and checkout** are client islands. That split is the same idea I use on this site’s App Router blog pages.',
      },
      {
        type: 'code',
        language: 'tsx',
        filename: 'app/events/page.tsx',
        code: `import { Suspense } from 'react'
import EventGrid from '@/components/events/EventGrid'
import EventFilters from '@/components/events/EventFilters'
import EventGridSkeleton from '@/components/events/EventGridSkeleton'

export default function EventsPage() {
  return (
    <main className="container py-10">
      <EventFilters />
      <Suspense fallback={<EventGridSkeleton />}>
        <EventGrid />
      </Suspense>
    </main>
  )
}`,
      },
      {
        type: 'heading',
        text: 'MongoDB collections that search well',
      },
      {
        type: 'paragraph',
        text: 'I keep **events**, **tickets**, and **users** as separate collections. Search uses indexes on `title`, `city`, and `startsAt`. Tickets store `eventId` and status so booking never mutates the event document into an unreadable blob.',
      },
      {
        type: 'code',
        language: 'ts',
        filename: 'src/lib/events/search.ts',
        code: `import { z } from 'zod'

export const eventSearchSchema = z.object({
  q: z.string().trim().max(80).optional(),
  city: z.string().trim().max(60).optional(),
  from: z.coerce.date().optional(),
})

export type EventSearch = z.infer<typeof eventSearchSchema>

export function buildEventQuery(input: EventSearch) {
  const filters: Record<string, unknown>[] = []
  if (input.q) filters.push({ title: { $regex: input.q, $options: 'i' } })
  if (input.city) filters.push({ city: input.city })
  if (input.from) filters.push({ startsAt: { $gte: input.from } })
  return filters.length ? { $and: filters } : {}
}`,
      },
      {
        type: 'heading',
        text: 'Booking is a transaction in spirit',
      },
      {
        type: 'list',
        items: [
          'Validate capacity **on the server**, never only in the UI.',
          'Store ticket state (`reserved` → `paid`) so you can expire unpaid holds.',
          'Use the same **Zod** schema in the form and the route handler.',
        ],
      },
      {
        type: 'paragraph',
        text: 'The lesson I reuse on client work: **search is a product feature**, not an afterthought. Design the collection and the Server Component fetch around the query users actually type.',
      },
    ],
  },
  {
    _id: 'blog-5',
    tag: 'React',
    img_url: '/blog/snapgram.png',
    date: '2026-05-08T00:00:00.000Z',
    read_time: '7 min',
    title: 'Snapgram Notes: React Query, Appwrite, and a Social Feed That Stays Fast',
    desc: 'Image sharing, likes, saves, and profiles — how I structured React Query caches and Appwrite collections for a social app in two weeks.',
    author: blogAuthor,
    key_takeaways: [
      'Treat each feed, profile, and saved grid as its own React Query key.',
      'Optimistic likes feel instant, but the server must still be the source of truth.',
      'Appwrite collections map cleanly to posts, likes, and saves if IDs stay consistent.',
    ],
    contentBlocks: [
      {
        type: 'paragraph',
        text: '**Snapgram** is my social media project: image sharing, real-time-feeling posts, likes, saved posts, and profiles. Stack: **React, TypeScript, Appwrite, Tailwind CSS, and React Query**. I built it as a personal product in about two weeks — enough time to care about cache keys, not enough to hide messy state.',
      },
      {
        type: 'heading',
        text: 'Query keys that match the UI',
      },
      {
        type: 'paragraph',
        text: 'A home feed, a profile grid, and a “saved” tab are three different lists. If they share one cache key, liking a post on a profile randomly reorders the home feed. I namespace keys: `["posts", "home"]`, `["posts", "user", id]`, `["saves", userId]`.',
      },
      {
        type: 'code',
        language: 'ts',
        filename: 'src/lib/queryKeys.ts',
        code: `export const queryKeys = {
  posts: {
    home: ['posts', 'home'] as const,
    user: (userId: string) => ['posts', 'user', userId] as const,
    detail: (postId: string) => ['posts', 'detail', postId] as const,
  },
  saves: (userId: string) => ['saves', userId] as const,
}`,
      },
      {
        type: 'heading',
        text: 'Optimistic like with a rollback',
      },
      {
        type: 'paragraph',
        text: '**Redux Toolkit** is in my day-to-day frontend toolkit at work. For Snapgram, React Query mutations were enough: update the like count in cache, fire Appwrite, roll back on error. Users feel native speed; data stays honest.',
      },
      {
        type: 'code',
        language: 'tsx',
        filename: 'src/features/posts/useToggleLike.ts',
        code: `import { useMutation, useQueryClient } from '@tanstack/react-query'
import { queryKeys } from '@/lib/queryKeys'
import { toggleLike } from '@/lib/appwrite/posts'

export function useToggleLike(postId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => toggleLike(postId),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: queryKeys.posts.detail(postId) })
      const previous = queryClient.getQueryData(queryKeys.posts.detail(postId))
      queryClient.setQueryData(queryKeys.posts.detail(postId), (post: { likes: number } | undefined) =>
        post ? { ...post, likes: post.likes + 1 } : post,
      )
      return { previous }
    },
    onError: (_error, _vars, context) => {
      if (context?.previous) {
        queryClient.setQueryData(queryKeys.posts.detail(postId), context.previous)
      }
    },
  })
}`,
      },
      {
        type: 'heading',
        text: 'Appwrite collections',
      },
      {
        type: 'list',
        items: [
          '`posts` — image file ID, caption, creator, createdAt.',
          '`likes` — postId + userId unique pair so a like is a document, not a racey array.',
          '`saves` — same idea for bookmarks, which powers the saved tab query.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Social UIs fail in the cache, not in the JSX. Name your queries like screens, and Appwrite stays a thin persistence layer.',
      },
    ],
  },
  {
    _id: 'blog-6',
    tag: 'React Native',
    img_url: '/blog/react-native-expo.png',
    date: '2026-04-22T00:00:00.000Z',
    read_time: '7 min',
    title: 'Shipping iOS and Android Together with React Native and Expo',
    desc: 'Lessons from mobile delivery at APIXcel and personal Expo apps: one TypeScript codebase, native feel, and APIs shared with the web.',
    author: blogAuthor,
    key_takeaways: [
      'Expo Router file routes keep mobile navigation as clear as Next.js App Router.',
      'Share types and API clients with the web app; do not duplicate DTOs.',
      'Native feel comes from platform-aware spacing, fonts, and gestures — not a copied website.',
    ],
    contentBlocks: [
      {
        type: 'paragraph',
        text: 'Mobile is part of how I introduce myself: **full stack web and mobile**. Skills list includes **React Native and Expo**; at APIXcel full stack work included **mobile app delivery** next to NestJS APIs. The win is one TypeScript language from PostgreSQL to the phone.',
      },
      {
        type: 'heading',
        text: 'File-based screens',
      },
      {
        type: 'paragraph',
        text: 'Expo Router lets a `app/(tabs)/index.tsx` be a tab and `app/project/[id].tsx` be a stack screen. That mental model transfers from this Next.js portfolio. Deep links and web-style params stay typed.',
      },
      {
        type: 'code',
        language: 'tsx',
        filename: 'app/project/[id].tsx',
        code: `import { useLocalSearchParams } from 'expo-router'
import { ActivityIndicator, Text, View } from 'react-native'
import { useProject } from '@/hooks/useProject'

export default function ProjectScreen() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const { data, isLoading } = useProject(id)

  if (isLoading) return <ActivityIndicator />
  if (!data) return <Text>Project not found</Text>

  return (
    <View className="flex-1 bg-neutral-950 px-4 pt-6">
      <Text className="text-2xl font-bold text-white">{data.title}</Text>
      <Text className="mt-2 text-neutral-400">{data.client}</Text>
    </View>
  )
}`,
      },
      {
        type: 'heading',
        text: 'One API, two clients',
      },
      {
        type: 'paragraph',
        text: 'The NestJS REST layer I described in the Prisma post is the same backend a Next.js dashboard and an Expo app can call. I keep DTO types in a small shared package or a `packages/api-types` folder so `Project` cannot drift.',
      },
      {
        type: 'code',
        language: 'ts',
        filename: 'packages/api-types/project.ts',
        code: `export type ProjectDto = {
  id: string
  slug: string
  title: string
  client: string
  techStack: string[]
}

export type ProjectDetailResponse = {
  project: ProjectDto
  related: ProjectDto[]
}`,
      },
      {
        type: 'heading',
        text: 'Flutter is in the toolkit — Expo is the default',
      },
      {
        type: 'list',
        items: [
          'I keep **Flutter** as another mobile option, but **React Native + Expo** is how I move fastest with a JS/TS team.',
          'EAS Build is how I would ship TestFlight and Play tracks without maintaining two native laptop setups.',
          'Offline-ish UX (optimistic updates, retry) matters more on phones than on desktop.',
        ],
      },
      {
        type: 'paragraph',
        text: 'If the web and the phone disagree, the API contract is wrong. Fix the DTO once; both clients get honest.',
      },
    ],
  },
  {
    _id: 'blog-7',
    tag: 'Animation',
    img_url: '/blog/gsap-motion.png',
    date: '2026-03-18T00:00:00.000Z',
    read_time: '6 min',
    title: 'GSAP and Motion on a Developer Portfolio Without Killing Performance',
    desc: 'How I use GSAP and Framer Motion (Motion) for hero, sliders, and micro-interactions while keeping this site’s lime-and-purple theme snappy.',
    author: blogAuthor,
    key_takeaways: [
      'Animate transform and opacity, not layout properties that thrash paint.',
      'GSAP is ideal for sequenced hero/timeline work; Motion is ideal for React component state.',
      'Honor reduced-motion so the portfolio stays accessible.',
    ],
    contentBlocks: [
      {
        type: 'paragraph',
        text: 'This site is a **developer portfolio** with dark glass surfaces, **Swiper** project slides, and a lime **primary** on charcoal. The motion stack is **GSAP** and **Motion (Framer Motion)** — the same pair I used as a frontend engineer at APIXcel. Animation should feel like the theme, not like a loading spinner.',
      },
      {
        type: 'heading',
        text: 'When I pick GSAP vs Motion',
      },
      {
        type: 'list',
        items: [
          '**GSAP:** hero timelines, scroll-linked section reveals, SVG draws.',
          '**Motion:** hover on cards, layout transitions, presence of modals.',
          'Never run both on the same property of the same node.',
        ],
      },
      {
        type: 'code',
        language: 'tsx',
        filename: 'src/components/ui/FadeIn.tsx',
        code: `'use client'

import { motion, useReducedMotion } from 'motion/react'

export default function FadeIn({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}`,
      },
      {
        type: 'heading',
        text: 'Theme-aware motion',
      },
      {
        type: 'paragraph',
        text: 'The brand green (`primary-2`) is `#62a92b` in light mode and `#a8ff53` in dark. Hover icons on blog cards already use a dual-arrow animation. I keep accent motion on that token so light and dark both feel native.',
      },
      {
        type: 'code',
        language: 'tsx',
        filename: 'src/components/ui/AccentPulse.tsx',
        code: `'use client'

import { motion } from 'motion/react'

export default function AccentPulse() {
  return (
    <motion.span
      className="bg-primary-2 inline-block h-2 w-2 rounded-full"
      animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}`,
      },
      {
        type: 'paragraph',
        text: 'If Core Web Vitals dip, animation is guilty until proven innocent. Profile **INP**, kill scroll listeners you do not need, and keep blog images sized. Pretty is not a substitute for fast.',
      },
    ],
  },
  {
    _id: 'cutting-ui-jank-by-50-and-design-drift-by-70',
    tag: 'Performance',
    img_url: '/blog/ui-performance.png',
    date: '2026-01-10T00:00:00.000Z',
    read_time: '7 min',
    title: 'Cutting UI Jank by 50% and Design Drift by 70%',
    desc: 'What I actually changed as a frontend developer at APIXcel: shared tokens, less client JS, and collaboration with backend on slower payloads.',
    author: blogAuthor,
    key_takeaways: [
      'Design tokens in CSS beat one-off hex values when multiple AI-assisted screens ship weekly.',
      'Memoization only helps after you remove unnecessary state and giant client trees.',
      'Backend payload shape is a frontend performance feature.',
    ],
    contentBlocks: [
      {
        type: 'paragraph',
        text: 'From **Oct–Dec 2025** I was a **Frontend Developer** at APIXcel. The measurable outcomes: UI performance improved by up to **50%**, and design inconsistency dropped by up to **70%** across AI-assisted workflows. Those numbers came from boring systems, not a single magic library.',
      },
      {
        type: 'heading',
        text: 'Tokens instead of snowflake screens',
      },
      {
        type: 'paragraph',
        text: 'This portfolio uses the same idea: `--theme-primary-2`, `--bg-3`, `--border-1`. When every card, tag, and button reads from tokens, new screens cannot invent a fifth gray. That is how inconsistency collapses when lots of UI is generated or copied.',
      },
      {
        type: 'code',
        language: 'css',
        filename: 'src/app/globals.css',
        code: `:root {
  --theme-primary-2: #62a92b;
  --bg-3: #ffffff;
  --border-1: #c0dcbc;
}

.dark {
  --theme-primary-2: #a8ff53;
  --bg-3: #272730;
  --border-1: #3b413d;
}`,
      },
      {
        type: 'heading',
        text: 'Performance was mostly less JavaScript',
      },
      {
        type: 'list',
        items: [
          'Move static shells to Server Components in Next.js.',
          'Virtualize long lists; do not mount 200 cards for a filter UI.',
          'Debounce search; cancel in-flight requests with React Query or AbortController.',
        ],
      },
      {
        type: 'code',
        language: 'ts',
        filename: 'src/hooks/useDebouncedValue.ts',
        code: `import { useEffect, useState } from 'react'

export function useDebouncedValue<T>(value: T, delay = 250) {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const timer = window.setTimeout(() => setDebounced(value), delay)
    return () => window.clearTimeout(timer)
  }, [value, delay])

  return debounced
}`,
      },
      {
        type: 'heading',
        text: 'Talk to backend early',
      },
      {
        type: 'paragraph',
        text: 'The other half of that 50% was **collaboration with backend**: smaller list DTOs, pagination, and not sending nested graphs the UI never rendered. Frontend “performance work” that ignores the network is incomplete — the same lesson I carried into NestJS + Redis caching later.',
      },
      {
        type: 'paragraph',
        text: 'If you only remember one tactic: **one token file, one list endpoint shape, one debounce**. Inconsistency and jank usually share a root cause — too many one-off decisions.',
      },
    ],
  },
]
