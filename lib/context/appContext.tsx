'use client'
import { blogs as staticBlogs, projects as staticProjects } from '@/constants'
import { getHero } from '@/lib/actions/hero.action'
import { getAllProjects } from '@/lib/actions/project.action'
import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react'
import { getAllBlogs } from '../actions/blog.action'
import { getAllCooperations } from '../actions/cooperation.action'
import { getCooperationAvatar } from '../actions/cooperationAvatar.action'
import { getCooperationTitle } from '../actions/cooperationTitle.action'
import { getAllEducation } from '../actions/education.action'
import { getAllExperiences } from '../actions/experience.action'
import { getExperienceTitle } from '../actions/experienceTitle.action'
import { getAllGits } from '../actions/gitJournaling.action'
import { getSkills } from '../actions/mySkill.action'
import { getAllServices } from '../actions/service.action'
import { getAllStats } from '../actions/statistics.action'
import { getAllTechnologies } from '../actions/technology.action'
import { IBlog } from '../database/models/blog.model'
import { ICooperation } from '../database/models/cooperation.model'
import { ICooperationAvatar } from '../database/models/cooperationAvatar.model'
import { ICooperationTitle } from '../database/models/cooperationTitle.model'
import { IEducation } from '../database/models/education.model'
import { IExperience } from '../database/models/experience.model'
import { IExperienceTitle } from '../database/models/experienceTitle.model'
import { IGit } from '../database/models/gitJournaling.model'
import { IHero } from '../database/models/hero.model'
import { IMySkill } from '../database/models/mySkill.model'
import { IProject } from '../database/models/project.model'
import { IService } from '../database/models/service.model'
import { IStatistics } from '../database/models/statistics.model'
import { ITechnology } from '../database/models/technology.model'

interface AppContextProps {
  projects: IProject[]
  fetchProjects: () => Promise<void>
  hero: IHero | null
  fetchHero: () => Promise<void>
  technologies: ITechnology[]
  fetchTechnology: () => Promise<void>
  blogs: IBlog[]
  fetchBlogs: () => Promise<void>
  skills: IMySkill | null
  fetchSkills: () => Promise<void>
  educations: IEducation[]
  fetchEducations: () => Promise<void>
  gits: IGit[]
  fetchGits: () => Promise<void>
  experienceTitle: IExperienceTitle | null
  fetchExperienceTitle: () => Promise<void>
  experiences: IExperience[]
  fetchExperiences: () => Promise<void>
  services: IService[]
  fetchServices: () => Promise<void>
  cooperationTitle: ICooperationTitle | null
  fetchCooperationTitle: () => Promise<void>
  cooperations: ICooperation[]
  fetchCooperations: () => Promise<void>
  cooperationAvatar: ICooperationAvatar | null
  fetchCooperationAvatar: () => Promise<void>
  statistics: IStatistics[]
  fetchStatistics: () => Promise<void>
}

const AppContext = createContext<AppContextProps | undefined>(undefined)

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<IProject[]>(staticProjects as IProject[])
  const [hero, setHero] = useState<IHero | null>(null)
  const [technologies, setTechnologies] = useState<ITechnology[]>([])
  const [blogs, setBlogs] = useState<IBlog[]>(staticBlogs as unknown as IBlog[])
  const [skills, setSkills] = useState<IMySkill | null>(null)
  const [educations, setEducations] = useState<IEducation[]>([])
  const [gits, setGits] = useState<IGit[]>([])
  const [experienceTitle, setExperienceTitle] = useState<IExperienceTitle | null>(null)
  const [experiences, setExperiences] = useState<IExperience[]>([])
  const [services, setServices] = useState<IService[]>([])
  const [cooperationTitle, setCooperationTitle] = useState<ICooperationTitle | null>(null)
  const [cooperations, setCooperations] = useState<ICooperation[]>([])
  const [cooperationAvatar, setCooperationAvatar] = useState<ICooperationAvatar | null>(null)
  const [statistics, setStatistics] = useState<IStatistics[]>([])

  const fetchProjects = async () => {
    try {
      const fetchedProjects = await getAllProjects()
      if (fetchedProjects && fetchedProjects.length > 0) {
        setProjects(fetchedProjects)
      }
    } catch {
      setProjects(staticProjects as IProject[])
    }
  }

  const fetchHero = async () => {
    const fetchedHero = await getHero()
    setHero(fetchedHero)
  }

  const fetchTechnology = async () => {
    const fetchedTechnology = await getAllTechnologies()
    setTechnologies(fetchedTechnology)
  }

  const fetchBlogs = async () => {
    try {
      const fetchedBlogs = await getAllBlogs()
      if (fetchedBlogs && fetchedBlogs.length > 0) {
        setBlogs(fetchedBlogs)
      }
    } catch {
      setBlogs(staticBlogs as unknown as IBlog[])
    }
  }

  const fetchSkills = async () => {
    const fetchedSkills = await getSkills()
    setSkills(fetchedSkills)
  }

  const fetchEducations = async () => {
    const fetchedEducations = await getAllEducation()
    setEducations(fetchedEducations)
  }

  const fetchGits = async () => {
    const fetchedGits = await getAllGits()
    setGits(fetchedGits)
  }

  const fetchExperienceTitle = async () => {
    const fetchedExperienceTitle = await getExperienceTitle()
    setExperienceTitle(fetchedExperienceTitle)
  }

  const fetchExperiences = async () => {
    const fetchedExperiences = await getAllExperiences()
    setExperiences(fetchedExperiences)
  }

  const fetchServices = async () => {
    const fetchedServices = await getAllServices()
    setServices(fetchedServices)
  }

  const fetchCooperationTitle = async () => {
    const fetchedCooperationTitle = await getCooperationTitle()
    setCooperationTitle(fetchedCooperationTitle)
  }

  const fetchCooperations = async () => {
    const fetchedCooperations = await getAllCooperations()
    setCooperations(fetchedCooperations)
  }

  const fetchCooperationAvatar = async () => {
    const fetchedCooperationAvatar = await getCooperationAvatar()
    setCooperationAvatar(fetchedCooperationAvatar)
  }

  const fetchStatistics = async () => {
    const fetchedStatistics = await getAllStats()
    setStatistics(fetchedStatistics)
  }

  useEffect(() => {
    // Initial data load on mount
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional mount-time data fetch
    fetchProjects()
    fetchHero()
    fetchTechnology()
    fetchBlogs()
    fetchSkills()
    fetchEducations()
    fetchGits()
    fetchExperienceTitle()
    fetchExperiences()
    fetchServices()
    fetchCooperationTitle()
    fetchCooperations()
    fetchCooperationAvatar()
    fetchStatistics()
  }, [])

  return (
    <AppContext.Provider
      value={{
        projects,
        fetchProjects,
        hero,
        fetchHero,
        technologies,
        fetchTechnology,
        blogs,
        fetchBlogs,
        skills,
        fetchSkills,
        educations,
        fetchEducations,
        gits,
        fetchGits,
        experienceTitle,
        fetchExperienceTitle,
        experiences,
        fetchExperiences,
        services,
        fetchServices,
        cooperationTitle,
        fetchCooperationTitle,
        cooperations,
        fetchCooperations,
        cooperationAvatar,
        fetchCooperationAvatar,
        statistics,
        fetchStatistics,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}
