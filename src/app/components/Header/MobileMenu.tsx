'use client'

import { useState } from 'react'

import { NavBar } from './NavBar'
import { ThemeSwitcher } from './ThemeSwitcher'

import { Menu, X } from 'lucide-react'

export const MobileMenu = () => {
  const [show, setShow] = useState(false)
  const [animate, setAnimate] = useState(false)

  const openMenu = () => {
    setShow(true)
    window.setTimeout(() => {
      setAnimate(true)
    }, 10)
  }

  const closeMenu = () => {
    setAnimate(false)
    window.setTimeout(() => {
      setShow(false)
    }, 300)
  }

  return (
    <div className="hidden flex-col sm:flex">
      <button onClick={openMenu}>
        <Menu />
      </button>
      {show && (
        <>
          <div
            className={`${
              animate && 'opacity-80'
            } fixed left-0 top-0 z-20 h-screen w-screen bg-black opacity-0 transition duration-300`}
          ></div>
          <div
            className={`${
              animate
                ? 'translate-x-0 opacity-100'
                : 'translate-x-full opacity-0'
            } fixed bottom-0 right-0 top-0 z-30 flex h-screen w-2/3 flex-col items-center justify-center gap-16 bg-secondary p-4 opacity-0 transition duration-300`}
          >
            <button onClick={closeMenu}>
              <X />
            </button>
            <NavBar />
            <ThemeSwitcher />
          </div>
        </>
      )}
    </div>
  )
}
