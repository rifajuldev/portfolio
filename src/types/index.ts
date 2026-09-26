import { IconType } from 'react-icons'

export interface IHero {
  headline: string
  first_title: string
  middle_title: string
  hero_img_url: string
  hero_pdf_url: string
  last_title: string
  desc: string
  desc_highlighted_text: string
}

export interface ITechnology {
  _id?: string
  tech_name: string
  tech_img_url: string
  tech_img_white_url?: string
  tech_official_url: string
  show_in_hero: boolean
  skill_position: string
}

export interface IProject {
  _id: string
  title: string
  desc: string
  client: string
  completion_time: string
  technologies: string[]
  project_img_url: string
  live_link: string
  github_link: string
}

export type BlogContentBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'code'; language: string; filename?: string; code: string }

export interface IBlog {
  _id: string
  tag: string
  img_url: string
  date: string | Date
  read_time: string
  title: string
  desc: string
  link?: string
  content?: string
  contentBlocks?: BlogContentBlock[]
  author?: {
    name: string
    role: string
    avatar: string
  }
  key_takeaways?: string[]
}

export interface IMySkill {
  front_end_technologies: string[]
  back_end_technologies: string[]
  database_technologies: string[]
  tools_platform_technologies: string[]
  others_technologies: string[]
}

export interface IEducation {
  _id: string
  start_date: string | Date
  end_date?: string | Date
  isPresent: boolean
  institute: string
  desc: string
}

export interface IGit {
  _id: string
  date: string | Date
  title: string
}

export interface IExperienceTitle {
  first_title: string
  second_title: string
  third_title: string
  fourth_title: string
}

export interface IExperience {
  _id: string
  company_name: string
  company_logo_url: string
  company_url?: string
  role: string
  job_start_date: string | Date
  job_end_date?: string | Date
  isPresent: boolean
  job_desc_list: Array<{ text: string; highlight?: string }>
  experi_technologies: string[]
}

export interface IService {
  title: string
  icon_name: string
  desc: string
  highlightText?: string
}

export interface ICooperationTitle {
  first_title: string
  second_title: string
  third_title: string
  fourth_title: string
}

export interface ICooperation {
  company_name: string
  logo_url: string
  company_position: string
}

export interface IStatistics {
  stats_title: string
  icon_name: string
  count: number
}

export interface CombinedContactData {
  id: number
  mediaName: string
  mediaData: string
  link: string
  icon: IconType
}

export interface CombinedSocialContactData {
  id: number
  name: string
  link: string
  icon: IconType
}
