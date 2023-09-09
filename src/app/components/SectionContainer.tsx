import { ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
}

export const SectionContainer = ({ title, children }: Props) => {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="pb-12 text-center text-4xl font-bold">
          <span className="mr-2 text-target">//</span>
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  )
}
