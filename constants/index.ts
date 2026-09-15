import { CombinedContactData, CombinedSocialContactData } from '@/types'
import {
  RiFacebookCircleFill,
  RiGithubFill,
  RiLinkedinFill,
  RiMailFill,
  RiMap2Fill,
  RiPhoneFill,
  RiTwitterXFill,
  RiWhatsappLine,
} from 'react-icons/ri'

export const socialLinks = {
  facebook: 'https://www.facebook.com/MdRifajulIslam',
  twitter: 'https://x.com/MdRifajulIslam',
  linkedin: 'https://www.linkedin.com/in/devrifaj',
  github: 'https://github.com/rifajuldev',
}

export const socialLinkList: CombinedSocialContactData[] = [
  { id: 1, link: socialLinks.facebook, icon: RiFacebookCircleFill },
  { id: 2, link: socialLinks.twitter, icon: RiTwitterXFill },
  { id: 3, link: socialLinks.linkedin, icon: RiLinkedinFill },
  { id: 4, link: socialLinks.github, icon: RiGithubFill },
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
  { label: 'Portfolio', route: '#portfolio' },
  { label: 'Skills', route: '#skills' },
  { label: 'Contact', route: '#contact' },
]

export const skillDisplayNames: { [key: string]: string } = {
  front_end_technologies: 'Front-End',
  back_end_technologies: 'Back-End',
  database_technologies: 'Databases',
  tools_platform_technologies: 'Tools & Platforms',
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
  last_title: 'Web & App developer',
  desc: 'With 2+ years of expertise in cutting-edge technologies such as NodeJS, ExpressJs, React, React Native, NextJs, MongoDB and MySql... I deliver web solutions that are both innovative and robust.',
  desc_highlighted_text: 'NodeJS, ExpressJs, React, React Native, NextJs, MongoDB and MySql',
  hero_img_url: 'https://utfs.io/f/NA8LFvDghE1xQmjdIyBg7i1hEpjqzvdsfUOm6HyI2b5lV8ro',
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
    tech_official_url: 'https://www.typescriptlang.org/',
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
    tech_official_url: 'https://expressjs.com/',
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
    tech_name: 'Tailwind',
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
    tech_name: 'Redux',
    tech_img_url: '/technologies/redux.svg',
    tech_official_url: 'https://redux.js.org/',
    show_in_hero: true,
    skill_position: 'Top',
  },
  {
    tech_name: 'Bootstrap',
    tech_img_url: '/technologies/bootstrap.svg',
    tech_official_url: 'https://getbootstrap.com/',
    show_in_hero: true,
    skill_position: 'Top',
  },
  {
    tech_name: 'HTML',
    tech_img_url: '/technologies/html.svg',
    tech_official_url: 'https://html.com/',
    show_in_hero: false,
    skill_position: 'Top',
  },
  {
    tech_name: 'CSS',
    tech_img_url: '/technologies/css.svg',
    tech_official_url: 'https://www.w3.org/TR/CSS/',
    show_in_hero: false,
    skill_position: 'Top',
  },
  {
    tech_name: 'JavaScript',
    tech_img_url: '/technologies/javascript.svg',
    tech_official_url: 'https://www.javascript.com/',
    show_in_hero: false,
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

export const contactDefaultValues = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

export const mySkillDefaultValues = {
  front_end_technologies: [],
  back_end_technologies: [],
  database_technologies: [],
  tools_platform_technologies: [],
  others_technologies: [],
}

export const mySkills = {
  front_end_technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind', 'React', 'NextJS'],
  back_end_technologies: ['Node.js', 'Express'],
  database_technologies: ['MongoDB', 'Mongoose'],
  tools_platform_technologies: ['Git', 'Github'],
  others_technologies: ['RESTful APIs'],
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
    institute: 'Govt. BL College, Khulna',
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
    _id: 'fiverr',
    company_name: 'Fiverr',
    company_logo_url: '/experience/fiverr.png',
    role: 'Full Stack Web Developer',
    job_start_date: '2025-04-01T11:39:38.000Z',
    job_end_date: undefined as string | undefined,
    isPresent: true,
    job_desc_list: [
      {
        text: 'Developed responsive and dynamic web applications using modern front-end technologies.',
      },
      {
        text: 'Specialized in React.js, Next.js, and Tailwind CSS for building scalable UIs.',
        highlight: 'React.js, Next.js, and Tailwind CSS',
      },
      {
        text: 'Integrated third-party APIs and optimized performance for seamless user experiences.',
      },
      {
        text: 'Passionate about crafting visually appealing and efficient web solutions.',
      },
    ],
    experi_technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'TailwindCSS',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Firebase',
      'React',
      'NextJS',
      'Redux',
    ],
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
  first_title: 'More than +168',
  second_title: 'companies',
  third_title: 'trusted ',
  fourth_title: 'worldwide_',
}

export const cooperationDefaultValues = {
  company_name: '',
  logo_url: '',
  company_position: '',
}

export const cooperations = [
  {
    company_name: 'Google',
    logo_url: '/cooperation/brands/google.svg',
    company_position: 'Top',
  },
  {
    company_name: 'Samsung',
    logo_url: '/cooperation/brands/samsung.svg',
    company_position: 'Top',
  },
  {
    company_name: 'Stripe',
    logo_url: '/cooperation/brands/stripe.svg',
    company_position: 'Top',
  },
  {
    company_name: 'Monzo',
    logo_url: '/cooperation/brands/monzo.svg',
    company_position: 'Top',
  },
  {
    company_name: 'GoCardless',
    logo_url: '/cooperation/brands/gocardless.svg',
    company_position: 'Bottom',
  },
  {
    company_name: 'Intercom',
    logo_url: '/cooperation/brands/intercom.svg',
    company_position: 'Bottom',
  },
  {
    company_name: 'Spotify',
    logo_url: '/cooperation/brands/spotify.svg',
    company_position: 'Bottom',
  },
  {
    company_name: 'Bravado',
    logo_url: '/cooperation/brands/bravodo.svg',
    company_position: 'Bottom',
  },
]

export const cooperationAvatarUrl = '/avatar.png'

export const statisticsDefaultValues = {
  stats_title: '',
  icon_name: '',
  count: 0,
}

export const statistics = [
  {
    stats_title: 'Projects Completed',
    icon_name: 'RiComputerLine',
    count: 5,
  },
  {
    stats_title: 'Years Experience',
    icon_name: 'RiShapeLine',
    count: 2,
  },
  {
    stats_title: 'Satisfied Clients',
    icon_name: 'RiServiceLine',
    count: 0,
  },
  {
    stats_title: 'Awards Winner',
    icon_name: 'RiAwardLine',
    count: 0,
  },
]
