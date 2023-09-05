'use client'

import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'

import { Menu, Transition } from '@headlessui/react'
import { Monitor, MoonStar, Sun } from 'lucide-react'

const Themes = [
  {
    label: 'Light',
    icon: <Sun />
  },
  {
    label: 'Dark',
    icon: <MoonStar />
  },
  {
    label: 'System',
    icon: <Monitor />
  }
]

export const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme, theme } = useTheme()

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div className="w-6 h-6 relative bg-secondaryHover p rounded-full animate-pulse"></div>
    )
  }

  return (
    <Menu as="div" className="relative">
      <Menu.Button className={theme !== 'system' ? 'text-target' : ''}>
        {resolvedTheme === 'light' ? <Sun /> : <MoonStar />}
      </Menu.Button>
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
          className="bg-secondary absolute rounded-lg overflow-hidden right-0 w-52 py-2 mt-6"
        >
          {Themes.map((themeInfo, index) => (
            <Menu.Item key={index} as="li">
              <button
                onClick={() => setTheme(themeInfo.label.toLowerCase())}
                className={`${
                  themeInfo.label.toLowerCase() !== 'system' &&
                  theme === themeInfo.label.toLowerCase()
                    ? 'text-target'
                    : ''
                } flex items-center w-full px-4 py-2 hover:bg-secondaryHover text-lg transition ease-linear cursor-pointer gap-x-3`}
              >
                {themeInfo.icon}
                {themeInfo.label}
              </button>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
