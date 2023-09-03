'use client'

import { Monitor, MoonStar, Sun } from 'lucide-react'

const iconSize = { width: 24, height: 24 }

const Themes = [
  {
    label: 'Light',
    icon: <Sun width={iconSize.width} height={iconSize.height} />
  },
  {
    label: 'Dark',
    icon: <MoonStar width={iconSize.width} height={iconSize.height} />
  },
  {
    label: 'System',
    icon: <Monitor width={iconSize.width} height={iconSize.height} />
  }
]

export const ThemeSwitcher = () => {
  return (
    <div className="relative">
      <button className="rounded-lg transition ease-linear">
        {Themes[1].icon}
      </button>
      <ul className="bg-secondary absolute rounded-lg overflow-hidden right-0 w-52 py-2  mt-6">
        {Themes.map((theme, index) => (
          <li
            key={index}
            className="flex items-center px-4 py-2 hover:bg-secondaryHover text-lg transition ease-linear cursor-pointer gap-x-3 "
          >
            {theme.icon}
            {theme.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
