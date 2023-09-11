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
      <div className="grid grid-cols-2 gap-32">
        {projectsData.slice(0, visibleProjects).map((project, index) => (
          <div key={index} className="relative flex flex-col gap-3">
            <div className="relative flex-col gap-4">
              <img src={project.image} alt={project.name} />
              <div className="absolute left-0 top-0 z-10 flex h-full w-full items-end bg-black bg-opacity-80 p-3 opacity-0 transition hover:opacity-100">
                <nav className="flex items-center gap-x-4">
                  <Link
                    target="_blank"
                    href={project.repo}
                    className="rounded-lg bg-textLight p-3 text-black transition hover:text-target"
                  >
                    <Code2 />
                  </Link>
                  <Link
                    target="_blank"
                    href={project.url}
                    className="rounded-lg bg-textLight p-3 text-black transition hover:text-target"
                  >
                    <ExternalLink />
                  </Link>
                </nav>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-bold">
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
      <div className="mt-24 flex justify-center">
        <button
          className="ml-2 flex items-center gap-x-2 rounded-lg px-4 py-2 text-lg text-textLight transition hover:bg-opacity-80 hover:text-target"
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
