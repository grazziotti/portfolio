import { ReactNode } from 'react'

import { MotionH2 } from '../lib/motion'

type Props = {
  id: string
  title: string
  children: ReactNode
}

export const SectionContainer = ({ id, title, children }: Props) => {
  return (
    <section id={id} className="py-16">
      <div className="mx-auto max-w-5xl">
        <MotionH2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="pb-12 text-center text-4xl font-bold sm:text-3xl"
        >
          <span className="mr-2 text-target">{'//'}</span>
          {title}
        </MotionH2>
        {children}
      </div>
    </section>
  )
}
