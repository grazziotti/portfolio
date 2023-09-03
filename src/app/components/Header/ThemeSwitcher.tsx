'use client'

import { Fragment } from 'react'

import { Menu, Transition } from '@headlessui/react'
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
    <Menu as="div" className="relative">
      <Menu.Button>{Themes[1].icon}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95 -translate-y-5"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75 -translate-y-5"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="ul"
          className="bg-secondary absolute rounded-lg overflow-hidden right-0 w-52 py-2  mt-6"
        >
          {Themes.map((theme, index) => (
            <Menu.Item
              key={index}
              as="li"
              className="flex items-center px-4 py-2 hover:bg-secondaryHover text-lg transition ease-linear cursor-pointer gap-x-3"
            >
              {theme.icon}
              {theme.label}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
