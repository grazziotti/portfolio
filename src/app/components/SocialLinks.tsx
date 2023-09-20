import { MotionDiv } from '../lib/motion'

import { Github, Linkedin } from 'lucide-react'

export const socialData = [
  { link: 'https://github.com/grazziotti', icon: <Github /> },
  { link: 'https://linkedin.com/in/daniel-grazziotti/', icon: <Linkedin /> }
]

export const SocialLinks = () => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 left-10 flex flex-col items-center gap-y-4 md:hidden"
    >
      {socialData.map((social, index) => (
        <a
          key={index}
          className="transition hover:-translate-y-1 hover:text-target"
          target="_blank"
          href={social.link}
          rel="noreferrer"
        >
          {social.icon}
        </a>
      ))}
      <div className="mt-4 h-32 w-[2px] origin-bottom bg-target"></div>
    </MotionDiv>
  )
}
