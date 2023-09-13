import { EmailBtn } from './EmailBtn'

export const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-5xl">
        <div className="flex h-[calc(100vh-112px)] flex-col items-center justify-center gap-3">
          <h1 className="text-center text-8xl font-bold sm:text-5xl md:text-7xl">
            Daniel Grazziotti<span className="text-target">.</span>
          </h1>
          <p className="text-center text-4xl sm:text-3xl">
            Desenvolvedor{' '}
            <span className="font-bold text-target">Front-end</span>
          </p>
          <EmailBtn />
        </div>
      </div>
    </section>
  )
}
