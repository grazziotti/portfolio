import Link from 'next/link'

import { navigationLinks } from '@/app/utils/data'

export const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-8 items-center">
        {navigationLinks.map((link, index) => (
          <li key={index}>
            <Link
              className="relative flex items-center text-lg transition ease-linear before:content-['{'] before:text-yellow-400 before:opacity-0 before:hover:opacity-100 before:absolute before:hover:-translate-x-4 before:transition after:content-['}'] after:text-yellow-400 after:opacity-0 after:hover:opacity-100 after:absolute after:right-0 after:hover:translate-x-4 after:transition hover:text-target"
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
