import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Proyecto A',
    description: 'Aplicación web con enfoque en performance y UX.',
    tags: ['React', 'Tailwind', 'FastAPI'],
    link: '#'
  },
  {
    title: 'Proyecto B',
    description: 'Interfaz interactiva con animaciones fluidas.',
    tags: ['Framer Motion', 'Vite'],
    link: '#'
  },
  {
    title: 'Proyecto C',
    description: 'Dashboard con visualizaciones y dark mode.',
    tags: ['React', 'Charts'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p, i) => (
        <motion.a
          key={p.title}
          href={p.link}
          target={p.link.startsWith('http') ? '_blank' : undefined}
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.5 }}
          className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition overflow-hidden"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-1 text-gray-600">{p.description}</p>
            </div>
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map(tag => (
              <span key={tag} className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-gray-700">{tag}</span>
            ))}
          </div>
        </motion.a>
      ))}
    </div>
  )
}
