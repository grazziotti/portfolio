'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { MotionDiv } from '../lib/motion'
import { projectsData } from '../utils/data'
import { SectionContainer } from './SectionContainer'

import { useAnimation, useInView } from 'framer-motion'
import { Code2, ExternalLink, MoveDown } from 'lucide-react'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const projectsPerPage = 4
const projectsIncrement = 4

export const Projects = () => {
  const [showMore, setShowMore] = useState(false)

  const ref = useRef(null)
  const isInView = useInView(ref)
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView])

  return (
    <SectionContainer title="Projetos">
      <div ref={ref}>
        <MotionDiv
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 gap-32 md:gap-16 sm:grid-cols-1 sm:justify-items-center"
        >
          {projectsData.slice(0, projectsPerPage).map((project, index) => (
            <MotionDiv
              variants={item}
              transition={{ duration: 0.3 }}
              key={index}
              className="relative flex flex-col gap-3 sm:max-w-sm"
            >
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
                <h3 className="text-[22px] font-bold">{project.name}</h3>
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
            </MotionDiv>
          ))}
          {showMore &&
            projectsData
              .slice(projectsPerPage, projectsPerPage + projectsIncrement)
              .map((project, index) => (
                <MotionDiv
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  key={index}
                  className="relative flex flex-col gap-3 sm:max-w-sm"
                >
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
                    <h3 className="text-[22px] font-bold">{project.name}</h3>
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
                </MotionDiv>
              ))}
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t-1 mt-14 flex justify-center"
        >
          <button
            className="flex items-center gap-x-2 rounded-lg text-lg text-textLight transition hover:bg-opacity-80 hover:text-target"
            onClick={() => setShowMore(!showMore)}
          >
            Mostrar {showMore ? 'Menos' : 'Mais'}{' '}
            <MoveDown
              width={20}
              height={20}
              className={`${showMore ? 'rotate-180' : ''} transition-transform`}
            />
          </button>
        </MotionDiv>
      </div>
    </SectionContainer>
  )
}
