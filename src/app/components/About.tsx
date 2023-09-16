import { MotionDiv, MotionP } from '../lib/motion'
import { SectionContainer } from './SectionContainer'

export const About = () => {
  return (
    <SectionContainer title="Sobre mim">
      <div className="flex items-center justify-between md:justify-center">
        <MotionP
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="max-w-xl text-xl md:text-center sm:text-lg"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </MotionP>
        <MotionDiv
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="flex flex-1 justify-end pl-8 md:hidden"
        >
          <div className="h-72 w-72 bg-secondary"></div>
        </MotionDiv>
      </div>
    </SectionContainer>
  )
}
