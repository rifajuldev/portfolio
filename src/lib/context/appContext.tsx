'use client'
import {
  blogs as staticBlogs,
  cooperationAvatarUrl as staticCooperationAvatarUrl,
  cooperations as staticCooperations,
  cooperationTitle as staticCooperationTitle,
  educations as staticEducations,
  experiences as staticExperiences,
  experienceTitle as staticExperienceTitle,
  gits as staticGits,
  hero as staticHero,
  projects as staticProjects,
  services as staticServices,
  mySkills as staticSkills,
  statistics as staticStatistics,
  technologies as staticTechnologies,
} from '@/constants'
import {
  IBlog,
  ICooperation,
  ICooperationTitle,
  IEducation,
  IExperience,
  IExperienceTitle,
  IGit,
  IHero,
  IMySkill,
  IProject,
  IService,
  IStatistics,
  ITechnology,
} from '@/types'
import { createContext, FC, ReactNode, useContext } from 'react'

interface AppContextProps {
  projects: IProject[]
  hero: IHero
  technologies: ITechnology[]
  blogs: IBlog[]
  skills: IMySkill
  educations: IEducation[]
  gits: IGit[]
  experienceTitle: IExperienceTitle
  experiences: IExperience[]
  services: IService[]
  cooperationTitle: ICooperationTitle
  cooperations: ICooperation[]
  cooperationAvatar: string
  statistics: IStatistics[]
}

const AppContext = createContext<AppContextProps>({
  projects: staticProjects as IProject[],
  hero: staticHero as IHero,
  technologies: staticTechnologies as ITechnology[],
  blogs: staticBlogs as unknown as IBlog[],
  skills: staticSkills as IMySkill,
  educations: staticEducations as IEducation[],
  gits: staticGits as IGit[],
  experienceTitle: staticExperienceTitle as IExperienceTitle,
  experiences: staticExperiences as IExperience[],
  services: staticServices as IService[],
  cooperationTitle: staticCooperationTitle as ICooperationTitle,
  cooperations: staticCooperations as ICooperation[],
  cooperationAvatar: staticCooperationAvatarUrl,
  statistics: staticStatistics as IStatistics[],
})

export const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AppContext.Provider
      value={{
        projects: staticProjects as IProject[],
        hero: staticHero as IHero,
        technologies: staticTechnologies as ITechnology[],
        blogs: staticBlogs as unknown as IBlog[],
        skills: staticSkills as IMySkill,
        educations: staticEducations as IEducation[],
        gits: staticGits as IGit[],
        experienceTitle: staticExperienceTitle as IExperienceTitle,
        experiences: staticExperiences as IExperience[],
        services: staticServices as IService[],
        cooperationTitle: staticCooperationTitle as ICooperationTitle,
        cooperations: staticCooperations as ICooperation[],
        cooperationAvatar: staticCooperationAvatarUrl,
        statistics: staticStatistics as IStatistics[],
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext)
  return context
}
