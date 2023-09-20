'use client'

import { useEffect, useRef, useState } from 'react'

import { SectionContainer } from '../SectionContainer'
import { ProjectCard } from './ProjectCard'

import { MotionDiv } from '@/app/lib/motion'
import { projectsData } from '@/app/utils/data'
import { useAnimation, useInView } from 'framer-motion'
import { MoveDown } from 'lucide-react'

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
    <SectionContainer id="projects" title="Projetos">
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
              <ProjectCard projectData={project} />
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
                  <ProjectCard projectData={project} />
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
            className="flex items-center gap-x-2 rounded-lg text-lg transition hover:bg-opacity-80 hover:text-target"
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
