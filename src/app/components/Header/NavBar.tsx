import Link from 'next/link'

import { navigationLinks } from '@/app/utils/data'

export const NavBar = () => {
  return (
    <nav className="sm:hidden">
      <ul className="flex items-center gap-8 md:gap-5">
        {navigationLinks.map((link, index) => (
          <li key={index}>
            <Link
              className="relative flex items-center text-lg transition before:absolute before:text-yellow-400 before:opacity-0 before:transition before:content-['{'] after:absolute after:right-0 after:text-yellow-400 after:opacity-0 after:transition after:content-['}'] hover:text-target before:hover:-translate-x-4 before:hover:opacity-100 after:hover:translate-x-4 after:hover:opacity-100"
              href={link.path}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
