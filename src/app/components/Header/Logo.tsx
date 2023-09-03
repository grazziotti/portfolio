import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href={'/'}>
      <p className=" font-bold text-3xl">
        DG
        <span className="text-target">.</span>
      </p>
    </Link>
  )
}
