import { MotionDiv } from '../lib/motion'
import { EmailBtn } from './EmailBtn'
import { SectionContainer } from './SectionContainer'

export const Contact = () => {
  return (
    <SectionContainer title="Contato">
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-6"
      >
        <p className="max-w-2xl text-center text-lg">
          Se você tiver dúvidas ou apenas gostaria de dizer olá, fique à vontade
          para me enviar um email.
        </p>
        <EmailBtn />
      </MotionDiv>
    </SectionContainer>
  )
}
