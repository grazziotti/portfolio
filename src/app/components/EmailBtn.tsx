'use client'

import { useState } from 'react'

import copy from 'copy-to-clipboard'
import { Mail } from 'lucide-react'

export const EmailBtn = () => {
  const email = 'danielgrazziotti99@gmail.com'
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    copy(email)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

  return (
    <button
      className={`${
        copied && 'border-green-500 transition-none hover:border-green-500'
      } relative flex items-center border px-4 py-4 text-lg transition before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:origin-top-left before:scale-0 before:bg-target before:px-8 before:py-4 before:text-textLight before:opacity-0 before:transition before:content-['Copiar'] hover:border-target hover:before:scale-100 hover:before:opacity-100`}
      onClick={handleCopyEmail}
    >
      <Mail className="sm:hidden" />{' '}
      <span className="ml-4 border-l pl-4 sm:m-0 sm:border-0 sm:p-0">
        {email}
      </span>
      {copied && (
        <div className="absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center bg-green-500 text-white">
          Copiado
        </div>
      )}
    </button>
  )
}
