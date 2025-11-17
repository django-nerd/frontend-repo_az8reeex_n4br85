import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const navItems = [
  { id: 'about', label: 'Sobre mí' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'contact', label: 'Contacto' },
]

function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl/50 bg-white/60 dark:bg-black/40 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button onClick={() => scrollToId('hero')} className="text-xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">Mi Portafolio</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className="text-sm text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="mailto:you@example.com" className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"><Mail size={18} /></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"><Github size={18} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"><Linkedin size={18} /></a>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/20 bg-white/70 dark:bg-black/60 backdrop-blur-xl">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => { setOpen(false); scrollToId(item.id) }}
                className="text-base text-gray-800 dark:text-gray-200 text-left"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <a href="mailto:you@example.com" className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"><Mail size={18} /></a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"><Github size={18} /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
