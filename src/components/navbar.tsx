import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex h-16 border-b">
      <ul className="flex gap-6 items-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/folder">Folder</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
