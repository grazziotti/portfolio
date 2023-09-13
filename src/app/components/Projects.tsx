'use client'

import Link from 'next/link'
import { useState } from 'react'

import { projectsData } from '../utils/data'
import { SectionContainer } from './SectionContainer'

import { Code2, ExternalLink, MoveDown } from 'lucide-react'

const projectsPerPage = 4
const projectsIncrement = 4

export const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(projectsPerPage)

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + projectsIncrement)
  }

  const showLessProjects = () => {
    setVisibleProjects(projectsPerPage)
  }

  return (
    <SectionContainer title="Projetos">
      <div className="grid grid-cols-2 gap-32 sm:grid-cols-1 sm:justify-items-center md:gap-16">
        {projectsData.slice(0, visibleProjects).map((project, index) => (
          <div key={index} className="relative flex flex-col gap-3 sm:max-w-sm">
            <div className="relative flex-col gap-4">
              <img src={project.image} alt={project.name} />
              <div className="absolute left-0 top-0 z-10 flex h-full w-full items-end bg-black bg-opacity-80 p-3 opacity-0 transition hover:opacity-100">
                <nav className="flex items-center gap-x-4">
                  <Link
                    target="_blank"
                    href={project.repo}
                    className="rounded-lg bg-textLight p-3 text-black transition hover:text-target sm:p-2"
                  >
                    <Code2 />
                  </Link>
                  <Link
                    target="_blank"
                    href={project.url}
                    className="rounded-lg bg-textLight p-3 text-black transition hover:text-target sm:p-2"
                  >
                    <ExternalLink />
                  </Link>
                </nav>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-[22px] font-bold">
                {project.name} {index + 1}
              </h3>
              <p className="text-lg">{project.description}</p>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, index) => (
                  <span
                    className="rounded-3xl bg-target bg-opacity-20 px-2 py-1 text-sm font-bold text-target "
                    key={index}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-1 mt-14 flex justify-center">
        <button
          className="flex items-center gap-x-2 rounded-lg text-lg text-textLight transition hover:bg-opacity-80 hover:text-target"
          onClick={
            visibleProjects > projectsPerPage
              ? showLessProjects
              : loadMoreProjects
          }
        >
          Mostrar {visibleProjects > projectsPerPage ? 'Menos' : 'Mais'}{' '}
          <MoveDown
            width={20}
            height={20}
            className={`${
              visibleProjects > projectsPerPage ? 'rotate-180' : ''
            } transition-transform`}
          />
        </button>
      </div>
    </SectionContainer>
  )
}
