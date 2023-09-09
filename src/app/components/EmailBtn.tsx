import { Mail } from 'lucide-react'

export const EmailBtn = () => {
  return (
    <button className="relative mt-4 flex items-center border px-4 py-4 text-lg transition before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:origin-top-left before:scale-0 before:bg-target before:px-8 before:py-4 before:text-textlight before:opacity-0 before:transition before:content-['copiar'] hover:border-target hover:before:scale-100 hover:before:opacity-100">
      <Mail />{' '}
      <span className="ml-4 border-l pl-4">example.contato@gmail.com</span>
    </button>
  )
}
