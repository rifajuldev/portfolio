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

export const adminContactDefaultValues = {
  phone_number: '',
  email: '',
  whatsapp: '',
  address: '',
}

export const socialContactDefaultValues = {
  twitter_link: '',
  linkedin_link: '',
  github_link: '',
}

export const mySkillDefaultValues = {
  front_end_technologies: [],
  back_end_technologies: [],
  database_technologies: [],
  tools_platform_technologies: [],
  others_technologies: [],
}

export const educationDefaultValues = {
  start_date: new Date(),
  end_date: new Date(),
  isPresent: false,
  institute: '',
  desc: '',
}

export const gitJournalingDefaultValues = {
  date: new Date(),
  title: '',
}

export const experienceTitleDefaultValues = {
  first_title: '',
  second_title: '',
  third_title: '',
  fourth_title: '',
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

export const serviceDefaultValues = {
  title: '',
  icon_name: '',
  desc: '',
  highlightText: '',
}

export const cooperationTitleDefaultValues = {
  first_title: '',
  second_title: '',
  third_title: '',
  fourth_title: '',
}

export const cooperationDefaultValues = {
  company_name: '',
  logo_url: '',
  company_position: '',
}

export const statisticsDefaultValues = {
  stats_title: '',
  icon_name: '',
  count: 0,
}
