import { MotionDiv } from '../lib/motion'

export const Footer = () => {
  return (
    <footer className="px-10 sm:px-6">
      <MotionDiv
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
        className="mx-auto w-full max-w-5xl border-t py-8 text-center text-lg"
      >
        © 2023 / Daniel Grazziotti
      </MotionDiv>
    </footer>
  )
}
