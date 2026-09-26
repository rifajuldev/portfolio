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
    _id: 'exclusive-online-shopping-platform',
    title: 'Exclusive - Online Shopping Platform',
    desc: 'A full-stack e-commerce platform built with Next.js (React framework) and TypeScript for a robust, type-safe, and scalable solution. It supports both frontend and backend logic, integrated with MongoDB for persistence and Stripe for secure payments. The UI is responsive and dynamic with animations, sliders, and notifications.',
    client: 'Open Source',
    completion_time: '1 Month',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'MongoDB',
      'Mongoose',
      'Stripe',
      'Redux & Toolkit',
    ],
    project_img_url: '/projects/exclusive.jpg',
    live_link: 'https://exclusive-online-shopping.vercel.app',
    github_link: 'https://github.com/rifajuldev/exclusive',
  },
  {
    _id: 'salle-blanche',
    title: 'Salle Blanche',
    desc: 'Salle Blanche is a premium fine-dining restaurant website concept for a Florence maison brand — an editorial, animation-forward experience, not a generic template.',
    client: 'Open Source',
    completion_time: '3 Weeks',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'GSAP'],
    project_img_url: '/projects/salle-blanche.webp',
    live_link: 'https://salle-blanche-restraint.vercel.app',
    github_link: 'https://github.com/rifajuldev/salle-blanche',
  },
  {
    _id: 'nrmlss',
    title: 'NRMLSS',
    desc: 'NRMLSS is a futuristic fashion e-commerce concept focused on immersive motion design, minimalist storytelling, and a bold experimental visual identity.',
    client: 'Self',
    completion_time: '1 Week',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'GSAP', 'Lenis'],
    project_img_url: '/projects/nrmlss.webp',
    live_link: 'https://nrmlss-fashion.vercel.app',
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

export { blogAuthor, blogs } from './blogs'

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
