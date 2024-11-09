import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between p-6 bg-white">
    <div>
      <h1 className="text-4xl font-bold">Neha Arora</h1>
      <p>Director, Editor, & Set Designer</p>
    </div>
    <nav className="space-x-6">
      <Link href="/editor">Editor</Link>
      <Link href="/director">Director</Link>
      <Link href="/set-designer">Set Designer</Link>
      <Link href="/creative-projects">Creative Projects</Link>
    </nav>
  </header>
  )
}

export default Header