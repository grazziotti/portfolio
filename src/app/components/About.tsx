import { SectionContainer } from './SectionContainer'

export const About = () => {
  return (
    <SectionContainer title="Sobre mim">
      <div className="flex justify-between">
        <p className="max-w-xl text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="flex flex-1 justify-end">
          <div className="h-60 w-96 bg-secondary"></div>
        </div>
      </div>
    </SectionContainer>
  )
}
