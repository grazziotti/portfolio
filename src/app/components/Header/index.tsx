import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { NavBar } from './NavBar'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Header = () => {
  return (
    <header className="px-10 sm:px-6">
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
    </header>
  )
}
