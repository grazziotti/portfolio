import { EmailBtn } from './EmailBtn'

export const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-5xl">
        <div className="flex h-[calc(100vh-112px)] flex-col items-center justify-center gap-3">
          <h1 className="text-8xl font-bold">
            Daniel Grazziotti<span className="text-target">.</span>
          </h1>
          <p className="text-4xl">
            Desenvolvedor{' '}
            <span className="font-bold text-target">Front-end</span>
          </p>
          <EmailBtn />
        </div>
      </div>
    </section>
  )
}
