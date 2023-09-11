import { EmailBtn } from './EmailBtn'
import { SectionContainer } from './SectionContainer'

export const Contact = () => {
  return (
    <SectionContainer title="Contato">
      <div className="flex flex-col items-center gap-6">
        <p className="max-w-2xl text-center text-lg">
          Se você tiver dúvidas ou apenas gostaria de dizer olá, fique à vontade
          para me enviar um email.
        </p>
        <EmailBtn />
      </div>
    </SectionContainer>
  )
}
