'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
// modules
import { Autoplay, Keyboard, Navigation } from 'swiper/modules'
// Import Swiper styles
import { useAppContext } from '@/lib/context/appContext'
import { IProject } from '@/lib/database/models/project.model'
import Image from 'next/image'
import Link from 'next/link'
import { RiArrowRightUpLine, RiGithubFill } from 'react-icons/ri'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import 'swiper/css'
import ProjectsSliderNavButton from './ProjectsSliderNavButton'

const ProjectsSlider = () => {
  const { projects } = useAppContext()
  // const projects = []

  return (
    <Swiper
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      keyboard={{
        enabled: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      modules={[Keyboard, Navigation, Autoplay]}
      className="relative"
    >
      {projects.length > 0 ? (
        projects.map((project: IProject) => (
          <SwiperSlide key={project._id} className="relative">
            <div className="border-border-1 bg-bg-3 mt-8 min-h-[570px] border p-4 md:p-6 lg:p-8">
              <div className="items-center gap-11 xl:flex">
                {/* Left side */}
                <div className="mx-auto lg:w-3/4 xl:w-1/2">
                  <Image width={800} height={600} className="w-full" src={project.project_img_url} alt="project" />
                </div>

                {/* Right Side */}
                <div className="mx-auto mt-8 lg:w-3/4 xl:mt-0 xl:w-7/12">
                  <h4 className="text-linear-4">{project.title}</h4>
                  <p>{project.desc}</p>

                  <div className="mt-4">
                    <p className="text-secondary-2 border-border-1 mb-4 border-b pb-4">Project Info</p>

                    <ul>
                      <li className="text-neutral-0 border-border-1 mb-4 border-b pb-4">
                        <div className="flex justify-between">
                          <p className="mb-0 text-end">Client</p>
                          <p className="mb-0 text-end text-neutral-300">{project.client}</p>
                        </div>
                      </li>

                      <li className="text-neutral-0 border-border-1 mb-4 border-b pb-4">
                        <div className="flex justify-between">
                          <p className="mb-0 text-end">Completion Time</p>
                          <p className="mb-0 text-end text-neutral-300">{project.completion_time}</p>
                        </div>
                      </li>

                      <li className="text-neutral-0 border-border-1 mb-4 border-b pb-4">
                        <div className="flex justify-between">
                          <p className="mb-0 text-right">Technologies</p>
                          <p className="mb-0 text-right text-neutral-300">
                            {project.technologies.map((tech, index) => (
                              <span key={index} className="mr-2">
                                {tech}
                                {index < project.technologies.length - 1 && ', '}
                              </span>
                            ))}
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-10 flex flex-wrap items-end gap-4">
                    <Link
                      href={project.live_link}
                      target="_blank"
                      className="border-border-1 hover:text-primary-2 hover:border-primary-2 flex items-center gap-2 border-b px-2 pb-2 text-neutral-300 transition-all duration-200"
                    >
                      <RiArrowRightUpLine size={24} />
                      Live Demo
                    </Link>

                    <Link
                      href={project.github_link}
                      target="_blank"
                      className="border-border-1 hover:text-primary-2 hover:border-primary-2 flex items-center gap-2 border-b px-2 pb-2 text-neutral-300 transition-all duration-300"
                    >
                      <RiGithubFill size={24} />
                      View on Github
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))
      ) : (
        <div className="border-border-1 bg-bg-3 mt-8 min-h-[570px] border p-4 md:p-6 lg:p-8">
          <div className="items-center gap-11 xl:flex">
            {/* Left side Skeleton */}
            <div className="mx-auto lg:w-3/4 xl:w-1/2">
              <Skeleton className="h-[340px] lg:h-[470px]" />
            </div>

            {/* Right Side Skeleton */}
            <div className="mx-auto mt-8 lg:w-3/4 xl:mt-0 xl:w-7/12">
              {/* Title Skeleton */}
              <Skeleton height={60} style={{ marginBottom: 15 }} />

              {/* Description Skeleton */}
              <Skeleton height={20} count={2} style={{ marginBottom: 8 }} />

              {/* List Items Skeleton */}
              <div>
                <Skeleton height={30} style={{ marginBottom: 4 }} />
                <div className="border-border-1 mt-4 mb-0 border-b"></div>

                <ul className="py-2">
                  {[...Array(3)].map((_, index) => (
                    <li key={index} className="text-neutral-0 border-border-1 mb-4 border-b pb-4">
                      <div className="flex justify-between gap-8">
                        <Skeleton height={30} containerClassName="mb-0 flex-1" />
                        <Skeleton height={30} containerClassName="mb-0 flex-1" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Links Skeleton */}
              <div className="flex flex-wrap items-end gap-4 lg:w-1/2">
                {[...Array(2)].map((_, index) => (
                  <Skeleton
                    key={index}
                    height={30}
                    containerClassName="mb-0 border-b border-border-1 flex-1"
                    style={{ marginBottom: 8 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <ProjectsSliderNavButton />
    </Swiper>
  )
}

export default ProjectsSlider
