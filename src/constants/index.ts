import { CombinedContactData, CombinedSocialContactData } from '@/types'
import { FaDiscord, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { RiGithubFill, RiMailFill, RiMap2Fill, RiPhoneFill, RiTwitterXFill, RiWhatsappLine } from 'react-icons/ri'
import { SiDailydotdev } from 'react-icons/si'

export const socialLinkList: CombinedSocialContactData[] = [
  { id: 1, name: 'X (@rifajuldev)', link: 'https://x.com/rifajuldev', icon: RiTwitterXFill },
  { id: 2, name: 'LinkedIn (rifajuldev)', link: 'https://www.linkedin.com/in/rifajuldev', icon: FaLinkedin },
  { id: 3, name: 'GitHub (rifajuldev)', link: 'https://github.com/rifajuldev', icon: RiGithubFill },
  { id: 4, name: 'Discord (rifajul.dev)', link: 'https://discord.com/users/1389185123190046875', icon: FaDiscord },
  { id: 5, name: 'daily.dev (@rifajuldev)', link: 'https://daily.dev/rifajuldev', icon: SiDailydotdev },
  {
    id: 6,
    name: 'YouTube (@rifajuldev)',
    link: 'https://www.youtube.com/channel/UCGvsCqrSjEc2QQnnJCMvz1Q',
    icon: FaYoutube,
  },
]

export const contactInfo = {
  phone: '+8801601016160',
  email: 'rifajul.dev@gmail.com',
  whatsapp: '+8801601016160',
  address: 'Satkhira, Khulna, Bangladesh',
}

export const contactList: CombinedContactData[] = [
  {
    id: 1,
    mediaName: 'phone number',
    mediaData: contactInfo.phone,
    link: `tel:${contactInfo.phone}`,
    icon: RiPhoneFill,
  },
  {
    id: 2,
    mediaName: 'email',
    mediaData: contactInfo.email,
    link: `mailto:${contactInfo.email}`,
    icon: RiMailFill,
  },
  {
    id: 3,
    mediaName: 'whatsapp',
    mediaData: contactInfo.whatsapp,
    link: `https://wa.me/${contactInfo.whatsapp.replace('+', '')}`,
    icon: RiWhatsappLine,
  },
  {
    id: 4,
    mediaName: 'address',
    mediaData: contactInfo.address,
    link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`,
    icon: RiMap2Fill,
  },
]

export const navItems = [
  { label: 'About me', route: '#about' },
  { label: 'Resume', route: '#resume' },
  { label: 'Projects', route: '#projects' },
  { label: 'Blog', route: '/blogs' },
  { label: 'Skills', route: '#skills' },
  { label: 'Contact', route: '#contact' },
]

export const skillDisplayNames: { [key: string]: string } = {
  front_end_technologies: 'Front-End',
  back_end_technologies: 'Back-End',
  database_technologies: 'Databases',
  tools_platform_technologies: 'Tools',
  others_technologies: 'Others',
}

export const projectDefaultValues = {
  title: '',
  desc: '',
  completion_time: '',
  technologies: [],
  project_img_url: '',
  live_link: '',
  github_link: '',
}

export const projects = [
  {
    _id: 'project-1',
    title: 'Event Management Platform',
    desc: 'A modern full-stack event platform built with Next.js, TypeScript, Tailwind CSS, and MongoDB featuring ticket booking, event management, and dynamic search.',
    client: 'Open Source / Personal',
    completion_time: '3 Weeks',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    project_img_url: '/blog/img-1.png',
    live_link: 'https://github.com/rifajuldev',
    github_link: 'https://github.com/rifajuldev',
  },
  {
    _id: 'project-2',
    title: 'Snapgram - Social Media App',
    desc: 'A feature-rich social media application enabling image sharing, real-time posts, post likes, saved posts, and user profiles with clean responsive UI.',
    client: 'Personal Project',
    completion_time: '2 Weeks',
    technologies: ['React', 'TypeScript', 'Appwrite', 'Tailwind CSS', 'React Query'],
    project_img_url: '/blog/img-2.png',
    live_link: 'https://github.com/rifajuldev',
    github_link: 'https://github.com/rifajuldev',
  },
  {
    _id: 'project-3',
    title: 'Developer Portfolio Website',
    desc: 'A sleek, modern developer portfolio featuring dark mode glassmorphism, animated UI transitions, interactive sliders, and static content integration.',
    client: 'Self',
    completion_time: '1 Week',
    technologies: ['Next.js 16', 'React 19', 'Tailwind CSS', 'TypeScript', 'Swiper'],
    project_img_url: '/blog/img-3.png',
    live_link: 'https://github.com/rifajuldev',
    github_link: 'https://github.com/rifajuldev',
  },
]

export const heroDefaultValues = {
  headline: '',
  first_title: '',
  middle_title: '',
  hero_img_url: '',
  hero_pdf_url: '',
  last_title: '',
  desc: '',
  desc_highlighted_text: '',
}

export const hero = {
  headline: "Hey, I'm Rifajul",
  first_title: '',
  middle_title: 'Full Stack',
  last_title: 'Web & Mobile Developer',
  desc: 'With 2+ years of experience and completed over 30+ projects in cutting-edge technologies such as NodeJS, ExpressJs, NestJs, React, NextJs, React Native, Expo, MongoDB and MySql... I deliver web & app solutions that are innovative, reliable, robust and production-ready.',
  desc_highlighted_text: 'NodeJS, ExpressJs, NestJs, React, NextJs, React Native, Expo, MongoDB, MySql',
  hero_img_url: '/hero/hero-self-portrait.png',
  hero_pdf_url: 'https://utfs.io/f/NA8LFvDghE1xMk9oEFicB9Osg0Q7JyWhPAjtnxfrdZo8GvSq',
}

export const technologies = [
  {
    tech_name: 'NextJS',
    tech_img_url: '/technologies/nextjs.svg',
    tech_official_url: 'https://nextjs.org',
    show_in_hero: true,
    skill_position: 'Top',
  },
  {
    tech_name: 'React',
    tech_img_url: '/technologies/react.svg',
    tech_official_url: 'https://react.dev',
    show_in_hero: true,
    skill_position: 'Top',
  },
  {
    tech_name: 'TypeScript',
    tech_img_url: '/technologies/typescript.svg',
    tech_official_url: 'https://www.typescriptlang.org',
    show_in_hero: true,
    skill_position: 'Bottom',
  },
  {
    tech_name: 'NodeJS',
    tech_img_url: '/technologies/nodejs.svg',
    tech_official_url: 'https://nodejs.org/en',
    show_in_hero: true,
    skill_position: 'Bottom',
  },
  {
    tech_name: 'ExpressJS',
    tech_img_url: '/technologies/expressjs.svg',
    tech_official_url: 'https://expressjs.com',
    show_in_hero: true,
    skill_position: 'Bottom',
  },
  {
    tech_name: 'MongoDB',
    tech_img_url: '/technologies/mongodb.svg',
    tech_official_url: 'https://www.mongodb.com',
    show_in_hero: true,
    skill_position: 'Bottom',
  },
  {
    tech_name: 'Tailwind CSS',
    tech_img_url: '/technologies/tailwind.svg',
    tech_official_url: 'https://tailwindcss.com',
    show_in_hero: true,
    skill_position: 'Bottom',
  },
  {
    tech_name: 'Firebase',
    tech_img_url: '/technologies/firebase.svg',
    tech_official_url: 'https://firebase.google.com',
    show_in_hero: true,
    skill_position: 'Top',
  },
  {
    tech_name: 'Redux & Redux Toolkit',
    tech_img_url: '/technologies/redux.svg',
    tech_official_url: 'https://redux.js.org',
    show_in_hero: true,
    skill_position: 'Top',
  },
  {
    tech_name: 'Bootstrap',
    tech_img_url: '/technologies/bootstrap.svg',
    tech_official_url: 'https://getbootstrap.com',
    show_in_hero: true,
    skill_position: 'Top',
  },
  {
    tech_name: 'NestJS',
    tech_img_url: '/technologies/nestjs.svg',
    tech_official_url: 'https://nestjs.com/',
    show_in_hero: true,
    skill_position: 'Bottom',
  },
  {
    tech_name: 'HTML',
    tech_img_url: '/technologies/html.svg',
    tech_official_url: 'https://html.com',
    show_in_hero: false,
    skill_position: 'Top',
  },
  {
    tech_name: 'CSS',
    tech_img_url: '/technologies/css.svg',
    tech_official_url: 'https://www.w3.org/TR/CSS',
    show_in_hero: false,
    skill_position: 'Top',
  },
  {
    tech_name: 'JavaScript',
    tech_img_url: '/technologies/javascript.svg',
    tech_official_url: 'https://www.javascript.com',
    show_in_hero: false,
    skill_position: 'Bottom',
  },
  {
    tech_name: 'React Native',
    tech_img_url: '/technologies/react_native.svg',
    tech_official_url: 'https://reactnative.dev',
    show_in_hero: false,
    skill_position: 'Bottom',
  },
  {
    tech_name: 'Expo',
    tech_img_url: '/technologies/expo.svg',
    tech_official_url: 'https://expo.dev',
    show_in_hero: true,
    skill_position: 'Top',
  },
  {
    tech_name: 'GSAP',
    tech_img_url: '/technologies/gsap-black.svg',
    tech_img_white_url: '/technologies/gsap.svg',
    tech_official_url: 'https://gsap.com',
    show_in_hero: true,
    skill_position: 'Top',
  },
  {
    tech_name: 'Motion (Framer Motion)',
    tech_img_url: '/technologies/motion.svg',
    tech_official_url: 'https://motion.dev',
    show_in_hero: true,
    skill_position: 'Top',
  },
  {
    tech_name: 'Flutter',
    tech_img_url: '/technologies/flutter.svg',
    tech_official_url: 'https://flutter.dev',
    show_in_hero: true,
    skill_position: 'Bottom',
  },
  {
    tech_name: 'Fast API',
    tech_img_url: '/technologies/fast_api_white.svg',
    tech_official_url: 'https://fastapi.tiangolo.com',
    show_in_hero: true,
    skill_position: 'Bottom',
  },
  {
    tech_name: 'Redis',
    tech_img_url: '/technologies/redis.svg',
    tech_official_url: 'https://redis.io',
    show_in_hero: false,
    skill_position: 'Bottom',
  },
  {
    tech_name: 'Mongoose',
    tech_img_url: '/technologies/mongoose.svg',
    tech_official_url: 'https://mongoosejs.com',
    show_in_hero: false,
    skill_position: 'Bottom',
  },
  {
    tech_name: 'Prisma',
    tech_img_url: '/technologies/prisma.svg',
    tech_official_url: 'https://prisma.io',
    show_in_hero: false,
    skill_position: 'Bottom',
  },
  {
    tech_name: 'PostgreSQL',
    tech_img_url: '/technologies/postgresql.svg',
    tech_official_url: 'https://www.postgresql.org',
    show_in_hero: false,
    skill_position: 'Top',
  },
  {
    tech_name: 'Docker',
    tech_img_url: '/technologies/docker.svg',
    tech_official_url: 'https://www.docker.com',
    show_in_hero: true,
    skill_position: 'Top',
  },
  {
    tech_name: 'Vitest',
    tech_img_url: '/technologies/vitest.svg',
    tech_official_url: 'https://vitest.dev',
    show_in_hero: true,
    skill_position: 'Top',
  },
  {
    tech_name: 'Jest',
    tech_img_url: '/technologies/jest.svg',
    tech_official_url: 'https://jestjs.io',
    show_in_hero: true,
    skill_position: 'Top',
  },
  {
    tech_name: 'Postman',
    tech_img_url: '/technologies/postman.svg',
    tech_official_url: 'https://www.postman.com',
    show_in_hero: true,
    skill_position: 'Bottom',
  },
  {
    tech_name: 'Swagger',
    tech_img_url: '/technologies/swagger.svg',
    tech_official_url: 'https://swagger.io',
    show_in_hero: true,
    skill_position: 'Bottom',
  },
]

export const heroTechnologies = technologies.filter((tech) => tech.show_in_hero)

export const technologyDefaultValues = {
  tech_name: '',
  tech_img_url: '',
  tech_official_url: '',
  show_in_hero: false,
  skill_position: '',
}

export const blogDefaultValues = {
  tag: '',
  img_url: '',
  date: new Date(),
  read_time: '',
  title: '',
  desc: '',
  link: '',
}

export const blogs = [
  {
    _id: 'blog-1',
    tag: 'Next.js',
    img_url: '/blog/img-1.png',
    date: '2025-01-15T00:00:00.000Z',
    read_time: '5 min',
    title: 'Building Scalable Web Apps with Next.js & App Router',
    desc: 'A deep dive into server components, dynamic routing, performance optimization, and best practices in modern web development.',
    author: {
      name: 'Md Rifajul Islam',
      role: 'Full Stack Developer',
      avatar: '/hero/hero-self-image.png',
    },
    key_takeaways: [
      'React Server Components reduce client-side JavaScript bundle sizes dramatically.',
      'App Router enables seamless parallel and intercepted routes for complex UI layouts.',
      'Caching strategies at fetch and route level maximize response speed and minimize server loads.',
    ],
    content: `Next.js has transformed modern web development by introducing a paradigm shift with the App Router architecture. Powered by React Server Components (RSC), Next.js allows developers to execute server-side data fetching directly inside components, reducing client-side JavaScript execution overhead while improving Core Web Vitals.

### Why Next.js App Router Matters
In traditional SPA frameworks, rendering state and executing initial data fetches occur on the client, leading to layout shifts and slower initial load times. Next.js App Router moves the default rendering environment to the server, producing streaming HTML directly to the browser.

### Key Architectural Concepts

1. **React Server Components (RSC):** Components render on the server by default. No hydration cost is incurred unless specified with the \`'use client'\` directive.
2. **Streaming & Suspense:** Break up UI into dynamic chunks that stream instantly, showing skeletons while data loads asynchronously.
3. **Route Handlers:** Clean, structured backend API endpoints built directly into your application directory.

### Code Example: Streaming Data with Suspense

\`\`\`tsx
import { Suspense } from 'react'
import DataWidget from './DataWidget'
import LoadingSkeleton from './LoadingSkeleton'

export default function DashboardPage() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
      <Suspense fallback={<LoadingSkeleton />}>
        <DataWidget />
      </Suspense>
    </div>
  )
}
\`\`\`

### Summary & Best Practices
When building production applications, keep state localized to client boundary nodes, leverage static generation (\`revalidate\`) where applicable, and optimize asset loading using Next.js Image and Font modules.`,
  },
  {
    _id: 'blog-2',
    tag: 'Tailwind CSS',
    img_url: '/blog/img-2.png',
    date: '2025-02-01T00:00:00.000Z',
    read_time: '4 min',
    title: 'Designing Beautiful UI Components with Glassmorphism',
    desc: 'Learn how to combine custom utility classes, smooth hover effects, and CSS gradients for interactive user interfaces.',
    author: {
      name: 'Md Rifajul Islam',
      role: 'Full Stack Developer',
      avatar: '/hero/hero-self-image.png',
    },
    key_takeaways: [
      'Backdrop filter blur creates realistic frosted glass textures over dynamic backgrounds.',
      'Subtle border gradients enhance visual depth without cluttering UI hierarchy.',
      'Responsive dark and light themes can share unified CSS tokens.',
    ],
    content: `Glassmorphism has become one of the defining design trends in modern software aesthetics. Characterized by translucency, soft shadows, subtle glowing borders, and blurred background layers, it creates a tactile sense of visual hierarchy and depth.

### The Math Behind Glassmorphism
To achieve a convincing frosted glass effect, UI elements require three primary styling layers:
- **Translucent Background:** Using HSL or RGBA colors with low alpha transparency (e.g. \`rgba(255, 255, 255, 0.05)\`).
- **Backdrop Blur Filter:** Applying hardware-accelerated background blur (\`backdrop-filter: blur(12px)\`).
- **Gradient Border:** Incorporating a thin 1px border with variable opacity gradients to mimic light diffraction edges.

### Implementing Glassmorphism in CSS & Tailwind

\`\`\`css
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}
\`\`\`

### Accessibility Considerations
While glassmorphism produces visual elegance, readability must never be sacrificed. Always maintain text contrast ratios of at least 4.5:1 against the background under dynamic scroll conditions.`,
  },
  {
    _id: 'blog-3',
    tag: 'Full Stack',
    img_url: '/blog/img-3.png',
    date: '2025-02-10T00:00:00.000Z',
    read_time: '6 min',
    title: 'RESTful API Architecture & MongoDB Data Modeling',
    desc: 'Best practices for structuring backend APIs in Node.js and Express with robust schema design and database indexing.',
    author: {
      name: 'Md Rifajul Islam',
      role: 'Full Stack Developer',
      avatar: '/hero/hero-self-image.png',
    },
    key_takeaways: [
      'Design RESTful endpoints around predictable resource nouns instead of action verbs.',
      'Leverage MongoDB compound indexes for high-volume query acceleration.',
      'Implement structured schema validation using Zod or Mongoose schemas.',
    ],
    content: `Designing scalable backend APIs requires careful consideration of data access patterns, payload structures, authentication boundaries, and query performance. In Node.js ecosystem, pairing Express or NestJS with MongoDB offers flexibility when structured correctly.

### Principles of Clean REST API Design
- **Consistent Resource Naming:** Use plural nouns (\`/api/v1/projects\`, \`/api/v1/blogs\`).
- **Standard HTTP Verbs:** Utilize GET, POST, PUT/PATCH, and DELETE appropriately.
- **Unified Error Payload Schema:** Always return consistent JSON error objects containing code, message, and timestamp.

### MongoDB Schema & Index Optimization
Document databases offer unmatched flexibility, but unstructured schemas can lead to data fragmentation over time. Using Mongoose schemas allows strict type validation at runtime:

\`\`\`typescript
import { Schema, model } from 'mongoose'

const BlogSchema = new Schema({
  title: { type: String, required: true, index: true },
  slug: { type: String, required: true, unique: true },
  views: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now, index: true }
})

// Compound index for sorted queries
BlogSchema.index({ createdAt: -1, views: -1 })
\`\`\``,
  },
  {
    _id: 'blog-4',
    tag: 'TypeScript',
    img_url: '/blog/img-1.png',
    date: '2025-02-15T00:00:00.000Z',
    read_time: '7 min',
    title: 'Mastering TypeScript: Advanced Types & Utility Patterns',
    desc: 'Unlock the full power of static typing in large-scale projects with generics, template literal types, and custom utilities.',
    author: {
      name: 'Md Rifajul Islam',
      role: 'Full Stack Developer',
      avatar: '/hero/hero-self-image.png',
    },
    key_takeaways: [
      'Generics enable fully type-safe code reuse across dynamic backend and frontend layers.',
      'Conditional types allow complex type transformations based on runtime contracts.',
      'Template literal types give precise string format enforcement at compile time.',
    ],
    content: `TypeScript has become the industry standard for building robust web applications. By catching errors at compile time rather than runtime, developers can build scalable codebases with high confidence.

### Advanced Type Manipulations
Beyond standard interfaces, TypeScript offers built-in mapped types, conditional types, and string manipulation types.

\`\`\`typescript
// Extract object keys conditioned on type value
type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never
}[keyof T]

interface UserProfile {
  id: number
  username: string
  email: string
  age: number
}

type UserStringKeys = StringKeys<UserProfile> // 'username' | 'email'
\`\`\`

### Writing Clean API Contracts
Combining TypeScript with validation libraries like Zod allows single-source-of-truth type inferencing across server and client applications.`,
  },
  {
    _id: 'blog-5',
    tag: 'React',
    img_url: '/blog/img-2.png',
    date: '2025-02-20T00:00:00.000Z',
    read_time: '5 min',
    title: 'State Management in Modern React: Zustand vs Redux Toolkit',
    desc: 'Compare light-weight state managers like Zustand against Redux Toolkit for complex multi-step user workflows.',
    author: {
      name: 'Md Rifajul Islam',
      role: 'Full Stack Developer',
      avatar: '/hero/hero-self-image.png',
    },
    key_takeaways: [
      'Zustand offers a minimal boilerplate store with direct hook bindings.',
      'Redux Toolkit remains ideal for centralized audit logs and complex devtools middleware.',
      'Avoid global state for localized UI state to minimize unnecessary re-renders.',
    ],
    content: `Choosing the right state management solution is critical for maintaining clean component architecture. While React Context works well for simple themes or user auth, complex state operations require optimized store selectors.

### Zustand: Simple & Lightweight
Zustand utilizes a simplified publish-subscribe model without wrapping your application tree in context providers:

\`\`\`typescript
import { create } from 'zustand'

interface BearState {
  bears: number
  increasePopulation: () => void
  removeAllBears: () => void
}

export const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
\`\`\`

### When to Use Redux Toolkit
For enterprise applications with multi-step workflows, action logging, and heavy middleware requirements, Redux Toolkit provides time-travel debugging and rigid state updates.`,
  },
  {
    _id: 'blog-6',
    tag: 'Performance',
    img_url: '/blog/img-3.png',
    date: '2025-02-28T00:00:00.000Z',
    read_time: '5 min',
    title: 'Optimizing Web Performance: Core Web Vitals & Image Loading',
    desc: 'Actionable strategies for improving Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS).',
    author: {
      name: 'Md Rifajul Islam',
      role: 'Full Stack Developer',
      avatar: '/hero/hero-self-image.png',
    },
    key_takeaways: [
      'Prioritize above-the-fold hero images using high priority load tags.',
      'Eliminate dynamic layout shifts by reserving aspect ratio dimensions on container elements.',
      'Minimize main thread blocking by deferring heavy JavaScript execution.',
    ],
    content: `User experience and search engine optimization (SEO) depend heavily on fast load speed. Google Core Web Vitals evaluate web performance based on three core metrics: LCP, INP, and CLS.

### Key Performance Optimization Steps
1. **Modern Image Formats:** Convert legacy PNG/JPG assets to AVIF or WebP for up to 70% compression savings.
2. **Font Subsetting:** Self-host Web Open Font Format (WOFF2) files and apply \`font-display: swap\`.
3. **Resource Preloading:** Preload critical font files and API endpoints required for hero section rendering.`,
  },
  {
    _id: 'blog-7',
    tag: 'Mobile Development',
    img_url: '/blog/img-1.png',
    date: '2025-03-05T00:00:00.000Z',
    read_time: '6 min',
    title: 'Building Cross-Platform Mobile Apps with React Native & Expo',
    desc: 'Explore native module integrations, smooth animations, and streamlined iOS & Android app distribution using Expo Router.',
    author: {
      name: 'Md Rifajul Islam',
      role: 'Full Stack Developer',
      avatar: '/hero/hero-self-image.png',
    },
    key_takeaways: [
      'Expo Router brings file-based routing to native iOS and Android development.',
      'Reanimated 3 executes smooth 60fps animations directly on the UI thread.',
      'EAS Build automates continuous integration and cloud app deployments.',
    ],
    content: `React Native with Expo has revolutionized mobile app development. By allowing developers to share code across iOS and Android while retaining access to native APIs, development velocity increases dramatically.

### File-Based Routing with Expo Router
Expo Router leverages familiar App Router conventions for mobile navigation, supporting tab bars, stack navigators, and modal presentation controllers seamlessly.`,
  },
  {
    _id: 'blog-8',
    tag: 'Security',
    img_url: '/blog/img-2.png',
    date: '2025-03-10T00:00:00.000Z',
    read_time: '5 min',
    title: 'Securing Node.js Applications: JWT, OAuth2 & Rate Limiting',
    desc: 'Essential security practices for web applications including httpOnly cookie sessions, rate limiting, and CORS security headers.',
    author: {
      name: 'Md Rifajul Islam',
      role: 'Full Stack Developer',
      avatar: '/hero/hero-self-image.png',
    },
    key_takeaways: [
      'Store JWTs in httpOnly, secure, sameSite cookies to protect against XSS attacks.',
      'Implement API rate limiting to safeguard endpoints against brute-force attempts.',
      'Utilize Helmet middleware to enforce strict HTTP Security Headers.',
    ],
    content: `Security should never be an afterthought in web application design. Protecting user data requires defensive layer implementation across authentication, transport layer security, and database query parameters.

### Storing Tokens Securely
Never store sensitive JWT access or refresh tokens in local storage, as malicious third-party scripts can read client-accessible storage via Cross-Site Scripting (XSS). Always issue tokens inside \`httpOnly\` cookies configured with \`SameSite=Strict\`.`,
  },
  {
    _id: 'blog-9',
    tag: 'CSS & Design',
    img_url: '/blog/img-3.png',
    date: '2025-03-12T00:00:00.000Z',
    read_time: '4 min',
    title: 'CSS Architecture & Tailwind CSS v4 Best Practices',
    desc: 'How to organize design tokens, theme variables, and reusable utility classes in modern frontend projects.',
    author: {
      name: 'Md Rifajul Islam',
      role: 'Full Stack Developer',
      avatar: '/hero/hero-self-image.png',
    },
    key_takeaways: [
      'Tailwind CSS v4 introduces CSS-first configuration using standard CSS directives.',
      'Maintain custom theme variables in CSS custom properties for instant theme toggling.',
      'Group complex composite styles into reusable CSS utilities.',
    ],
    content: `Tailwind CSS v4 brings a new CSS-centric configuration model, simplifying build pipelines and speeding up style compilation. By leveraging native CSS variables alongside utility classes, developers achieve unmatched styling consistency.`,
  },
  {
    _id: 'blog-10',
    tag: 'Cloud & Serverless',
    img_url: '/blog/img-1.png',
    date: '2025-03-15T00:00:00.000Z',
    read_time: '5 min',
    title: 'Serverless Functions & Edge Computing for Modern Frontend',
    desc: 'Deploy low-latency backend logic closer to your users using Vercel Edge Middleware and Cloudflare Workers.',
    author: {
      name: 'Md Rifajul Islam',
      role: 'Full Stack Developer',
      avatar: '/hero/hero-self-image.png',
    },
    key_takeaways: [
      'Edge functions execute in geographically distributed data centers near the client.',
      'Sub-millisecond cold starts ensure responsive user authentication and A/B testing.',
      'Serverless computing eliminates infrastructure management overhead.',
    ],
    content: `Edge computing moves computation from centralized servers to distributed nodes closest to the end user. By executing middleware and lightweight API handlers at the edge, response latency decreases significantly.`,
  },
  {
    _id: 'blog-11',
    tag: 'DevOps',
    img_url: '/blog/img-2.png',
    date: '2025-03-18T00:00:00.000Z',
    read_time: '6 min',
    title: 'Docker & CI/CD Pipelines for Frontend Developers',
    desc: 'Automate build testing, linting, and containerized deployments using GitHub Actions and Docker.',
    author: {
      name: 'Md Rifajul Islam',
      role: 'Full Stack Developer',
      avatar: '/hero/hero-self-image.png',
    },
    key_takeaways: [
      'Containerize applications with multi-stage Docker builds to reduce image size.',
      'Run automated linting and typechecking in GitHub Actions workflows.',
      'Maintain environment parity between local development and production deployments.',
    ],
    content: `Continuous Integration and Continuous Deployment (CI/CD) pipelines ensure code quality and seamless software delivery. By wrapping Next.js apps into multi-stage Docker containers, deployment environments remain consistent across all cloud platforms.`,
  },
  {
    _id: 'blog-12',
    tag: 'UI / UX',
    img_url: '/blog/img-3.png',
    date: '2025-03-20T00:00:00.000Z',
    read_time: '5 min',
    title: 'Effective UI/UX Principles for Software Engineers',
    desc: 'Master visual hierarchy, typography scaling, micro-interactions, and accessibility standards to create wowed products.',
    author: {
      name: 'Md Rifajul Islam',
      role: 'Full Stack Developer',
      avatar: '/hero/hero-self-image.png',
    },
    key_takeaways: [
      'Establish clear visual contrast to guide user focus toward primary actions.',
      'Use subtle spring micro-animations for physical feedback on button clicks.',
      'Ensure complete keyboard accessibility and screen-reader compatibility.',
    ],
    content: `Great engineering paired with intuitive UI design results in software users love. Understanding fundamental UI/UX design principles allows developers to make informed interface decisions without relying solely on design specs.`,
  },
]

export const mySkills = {
  front_end_technologies: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Bootstrap',
    'Tailwind',
    'React',
    'NextJS',
    'React Native',
    'Expo',
    'Redux Toolkit',
    'GSAP',
    'Framer Motion',
    'Flutter',
    'Modern UI Library',
  ],
  back_end_technologies: ['Node.js', 'Express.js', 'Nest.js', 'Fast API', 'WebSockets', 'Firebase', 'Redis'],

  database_technologies: ['MongoDB', 'Mongoose', 'Prisma', 'SQL', 'MySql', 'PostgreSQL'],
  tools_platform_technologies: [
    'Git',
    'Github',
    'Docker',
    'CI/CD',
    'Nginx/Apache',
    'Vitest',
    'Jest',
    'Stripe',
    'Postman',
    'Swagger',
    'Linux VPS',
  ],
  others_technologies: ['Teamwork', 'Attention to Detail', 'Punctuality'],
}

export const educationDefaultValues = {
  start_date: new Date(),
  end_date: new Date(),
  isPresent: false,
  institute: '',
  desc: '',
}

export const educations = [
  {
    _id: 'govt-bl-college',
    start_date: '2024-01-01T09:16:43.000Z',
    end_date: undefined as string | undefined,
    isPresent: true,
    institute: 'Govt. Brajalal (BL) College, Khulna',
    desc: "Bachelor's in Mathematics",
  },
  {
    _id: 'programming-hero',
    start_date: '2024-01-01T09:16:43.000Z',
    end_date: '2024-01-01T09:16:43.000Z',
    isPresent: false,
    institute: 'Programming Hero',
    desc: 'Certification in MERN Stack Developer Course',
  },
]

export const gitJournalingDefaultValues = {
  date: new Date(),
  title: '',
}

export const gits = [
  {
    _id: 'portfolio-finished',
    date: '2025-02-13T11:55:50.000Z',
    title: 'portfolio finished successfully',
  },
  {
    _id: 'event-platform-finished',
    date: '2024-12-25T11:55:50.000Z',
    title: 'event_platform finished successfully',
  },
  {
    _id: 'snapgram-finished',
    date: '2024-09-07T11:55:50.000Z',
    title: 'snapgram finished successfully',
  },
]

export const experienceTitleDefaultValues = {
  first_title: '',
  second_title: '',
  third_title: '',
  fourth_title: '',
}

export const experienceTitle = {
  first_title: '2+',
  second_title: 'years of',
  third_title: 'passion',
  fourth_title: 'for programming techniques',
}

export const experienceDefaultValues = {
  job_desc_list: [] as Array<{ text: string; highlight?: string }>,
  experi_technologies: [],
  company_name: '',
  company_logo_url: '',
  role: '',
  job_start_date: new Date(),
  job_end_date: new Date(),
  isPresent: false,
}

export const experiences = [
  {
    _id: 'apixcel-fullstack',
    company_name: 'APIXcel',
    company_logo_url: '/experience/apixcel.svg',
    company_url: 'https://www.apixcel.com',
    role: 'Full Stack Developer',
    job_start_date: '2026-01-01T00:00:00.000Z',
    job_end_date: '2026-07-01T00:00:00.000Z',
    isPresent: false,
    job_desc_list: [
      {
        text: 'Led and supported developers as an acting Team Lead, reviewing code and guiding architecture across multiple projects.',
        highlight: 'Team Lead',
      },
      {
        text: 'Contributed to system and database design, turning product ideas into practical production solutions.',
        highlight: 'system and database design',
      },
      {
        text: 'Built scalable backend services with Node.js, NestJS, TypeScript, PostgreSQL, Prisma, and Redis using clean architecture and RESTful API practices.',
        highlight: 'Node.js, NestJS, TypeScript, PostgreSQL, Prisma, and Redis',
      },
      {
        text: 'Worked across technical SEO, product development, and mobile app delivery, helping shape systems from idea to production with a focus on smooth user experiences.',
        highlight: 'technical SEO, product development, and mobile app delivery',
      },
    ],
    experi_technologies: [
      'Node.js',
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Redis',
      'React',
      'Next.js',
      'React Native',
      'Docker',
    ],
  },
  {
    _id: 'apixcel-frontend',
    company_name: 'APIXcel',
    company_logo_url: '/experience/apixcel.svg',
    company_url: 'https://www.apixcel.com',
    role: 'Frontend Developer',
    job_start_date: '2025-10-01T00:00:00.000Z',
    job_end_date: '2025-12-31T00:00:00.000Z',
    isPresent: false,
    job_desc_list: [
      {
        text: 'Improved UI performance by up to 50% and reduced design inconsistency by up to 70% across AI-assisted workflows.',
        highlight: 'up to 50%',
      },
      {
        text: 'Collaborated closely with backend developers to improve existing services and deliver smoother, more reliable product experiences.',
        highlight: 'smoother, more reliable product experiences',
      },
    ],
    experi_technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'GSAP', 'Framer Motion'],
  },
  {
    _id: 'apixcel-intern',
    company_name: 'APIXcel',
    company_logo_url: '/experience/apixcel.svg',
    company_url: 'https://www.apixcel.com',
    role: 'Web Developer Intern',
    job_start_date: '2025-07-01T00:00:00.000Z',
    job_end_date: '2025-09-30T00:00:00.000Z',
    isPresent: false,
    job_desc_list: [
      {
        text: 'Contributed to real-world production projects while gaining practical development experience in a professional team environment.',
        highlight: 'real-world production projects',
      },
      {
        text: 'Collaborated with developers to build, test, and improve features for React-based web applications.',
        highlight: 'React-based web applications',
      },
    ],
    experi_technologies: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS'],
  },
]

export const serviceDefaultValues = {
  title: '',
  icon_name: '',
  desc: '',
  highlightText: '',
}

export const services = [
  {
    title: 'Web Development',
    icon_name: 'RiWindowLine',
    desc: 'Building fast, responsive websites and web apps with Next.js, React, and modern tooling tailored to your product goals.',
    highlightText: 'Next.js React',
  },
  {
    title: 'Mobile Apps',
    icon_name: 'RiSmartphoneLine',
    desc: 'Cross-platform mobile experiences with React Native that feel native on both iOS and Android from a single codebase.',
    highlightText: 'React Native',
  },
  {
    title: 'UI / UX Design',
    icon_name: 'RiPaletteLine',
    desc: 'Clean interfaces and thoughtful user flows that balance aesthetics with usability so your product is easy to love.',
    highlightText: 'user flows',
  },
  {
    title: 'Backend & APIs',
    icon_name: 'RiServerLine',
    desc: 'Scalable Node.js and Express APIs with solid auth, validation, and integrations that keep your app reliable.',
    highlightText: 'Node.js Express',
  },
  {
    title: 'Database Design',
    icon_name: 'RiDatabase2Line',
    desc: 'Well-structured MongoDB and MySQL schemas designed for performance, clarity, and long-term maintainability.',
    highlightText: 'MongoDB MySQL',
  },
  {
    title: 'Maintenance & Support',
    icon_name: 'RiToolsLine',
    desc: 'Ongoing improvements, bug fixes, and performance tuning so your product stays secure, fast, and up to date.',
    highlightText: 'performance tuning',
  },
]

export const cooperationTitleDefaultValues = {
  first_title: '',
  second_title: '',
  third_title: '',
  fourth_title: '',
}

export const cooperationTitle = {
  first_title: 'Have an idea or want to',
  second_title: 'collaborate?',
  third_title: "Let's connect and build",
  fourth_title: 'together_',
}

export const cooperationDefaultValues = {
  company_name: '',
  logo_url: '',
  company_position: '',
}

export const cooperationAvatarUrl = '/avatar.png'

export const statisticsDefaultValues = {
  stats_title: '',
  icon_name: '',
  count: 0,
}
