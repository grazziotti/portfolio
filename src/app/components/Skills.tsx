import Image from 'next/image'

import { skillsData } from '../utils/data'
import { SectionContainer } from './SectionContainer'

export const Skills = () => {
  return (
    <SectionContainer title="Habilidades">
      <div className="flex flex-wrap justify-center gap-8">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold"
          >
            <Image
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.img}`}
              alt={skill.name}
              width={40}
              height={40}
            />
            {skill.name}
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
