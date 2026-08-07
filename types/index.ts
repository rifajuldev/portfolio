import { projectFormSchema } from '@/lib/validator'
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { IconType } from 'react-icons'
import { z } from 'zod'

export type ProjectFormData = z.infer<typeof projectFormSchema>

export const projectDocumentSchema = projectFormSchema.extend({
  _id: z.string().optional(),
})
export type ProjectDocument = z.infer<typeof projectDocumentSchema>

export interface DropdownProps {
  register: UseFormRegister<ProjectFormData>
  setValue: UseFormSetValue<ProjectFormData>
  errors?: FieldErrors<ProjectFormData>
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>
  selectedOptions: string[]
}

export interface ImageUploaderProps {
  onFieldChange: (url: string) => void
  fileUrl: string
  setFiles: React.Dispatch<React.SetStateAction<File[]>>
  errors?: FieldErrors<ProjectFormData>
}

// ====== PROJECT PARAMS ======
export type CreateProjectParams = {
  project: {
    title: string
    desc: string
    client: string
    completion_time: string
    technologies: Array<string>
    project_img_url: string
    live_link: string
    github_link: string
  }
}

export type ProjectParams = {
  project: {
    _id: string
    title: string
    desc: string
    client: string
    completion_time: string
    technologies: Array<string>
    project_img_url: string
    live_link: string
    github_link: string
  }
}

export type DeleteProjectParams = {
  projectId: string
}

// ====== FORM TECHNOLOGY PARAMS ======
export type CreateFormTechnologyParams = {
  formTechnology: {
    name: string
  }
}

// ====== TECHNOLOGY PARAMS ======
export type CreateTechnologyParams = {
  technology: {
    tech_name: string
    tech_img_url: string
    tech_official_url: string
    show_in_hero: boolean
    skill_position: string
  }
}

export type TechnologyParams = {
  technology: {
    _id: string
    tech_name: string
    tech_img_url: string
    tech_official_url: string
    show_in_hero: boolean
    skill_position: string
  }
}

export type DeleteTechnologyParams = {
  technologyId: string
}

// ====== BLOG PARAMS ======
export type CreateBlogParams = {
  blog: {
    tag: string
    img_url: string
    date: Date
    read_time: string
    title: string
    desc: string
    link: string
  }
}

export type BlogParams = {
  blog: {
    _id: string
    tag: string
    img_url: string
    date: Date
    read_time: string
    title: string
    desc: string
    link: string
  }
}

export type DeleteBlogParams = {
  blogId: string
}

// ====== ADMIN CONTACT PARAMS ======
export interface CombinedContactData {
  id: number
  mediaName: string
  mediaData: string
  link: string
  icon: IconType
}

// ====== SOCIAL CONTACT PARAMS ======
export interface CombinedSocialContactData {
  id: number
  link: string
  icon: IconType
}

// ====== EDUCATION PARAMS ======
export type CreateEducationParams = {
  education: {
    start_date: Date
    end_date?: Date
    isPresent: boolean
    institute: string
    desc: string
  }
}

export type EducationParams = {
  education: {
    _id: string
    start_date: Date
    end_date?: Date
    isPresent: boolean
    institute: string
    desc: string
  }
}

export type DeleteEducationParams = {
  educationId: string
}

// ====== GIT PARAMS ======
export type CreateGitParams = {
  git: {
    title: string
    date: Date
  }
}

export type GitParams = {
  git: {
    _id: string
    title: string
    date: Date
  }
}

export type DeleteGitParams = {
  gitId: string
}

// ====== EXPERIENCE PARAMS ======
export type CreateExperienceParams = {
  experience: {
    job_desc_list: Array<{ text: string; highlight?: string }>
    experi_technologies: string[]
    company_name: string
    company_logo_url: string
    role: string
    job_start_date: Date
    job_end_date?: Date
    isPresent: boolean
  }
}

export type ExperienceParams = {
  experience: {
    _id: string
    job_desc_list: Array<{ text: string; highlight?: string }>
    experi_technologies: string[]
    company_name: string
    company_logo_url: string
    role: string
    job_start_date: Date
    job_end_date?: Date
    isPresent: boolean
  }
}

export type DeleteExperienceParams = {
  experienceId: string
}

// ====== SERVICE PARAMS ======
export type CreateServiceParams = {
  service: {
    title: string
    desc: string
    icon_name: string
    highlightText?: string
  }
}

export type ServiceParams = {
  service: {
    _id: string
    title: string
    desc: string
    icon_name: string
    highlightText?: string
  }
}

export type DeleteServiceParams = {
  serviceId: string
}

// ====== Cooperation PARAMS ======
export type CreateCooperationParams = {
  cooperation: {
    company_name: string
    logo_url: string
    company_position: string
  }
}

export type DeleteCooperationParams = {
  cooperationId: string
}

// ====== STATISTICS PARAMS ======
export type CreateStatsParams = {
  stats: {
    stats_title: string
    icon_name: string
    count: number
  }
}

export type StatsParams = {
  stats: {
    _id: string
    stats_title: string
    icon_name: string
    count: number
  }
}

export type DeleteStatParams = {
  statId: string
}
