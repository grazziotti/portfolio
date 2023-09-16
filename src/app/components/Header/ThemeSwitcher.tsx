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
      <div className="p relative h-6 w-6 animate-pulse rounded-full bg-secondaryHover"></div>
    )
  }

  return (
    <Menu as="div" className="relative">
      <Menu.Button
        className={`${
          theme !== 'system' ? 'text-target' : ''
        } flex items-center`}
      >
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
          className="absolute right-0 mt-6 flex w-52 flex-col overflow-hidden rounded-lg bg-secondary py-2 sm:mt-2 sm:bg-secondaryHover"
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
                } flex w-full cursor-pointer items-center gap-x-3 px-4 py-2 text-lg transition ease-linear hover:bg-secondaryHover`}
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
