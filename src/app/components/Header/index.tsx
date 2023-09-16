import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { NavBar } from './NavBar'
import { ThemeSwitcher } from './ThemeSwitcher'

import { MotionHeader } from '@/app/lib/motion'

export const Header = () => {
  return (
    <MotionHeader
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="fixed z-30 w-full bg-primary px-10 sm:px-6"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex h-28 items-center justify-between sm:hidden">
          <Logo />
          <NavBar />
          <ThemeSwitcher />
        </div>
        <div className="hidden h-28 items-center justify-between sm:flex">
          <Logo />
          <MobileMenu />
        </div>
      </div>
    </MotionHeader>
  )
}
