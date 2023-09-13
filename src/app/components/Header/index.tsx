import { Logo } from './Logo'
import { NavBar } from './NavBar'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Header = () => {
  return (
    <header className="px-10 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="flex h-28 items-center justify-between">
          <Logo />
          <NavBar />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  )
}
