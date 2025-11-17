import { motion } from 'framer-motion'
import { Code2, Palette, Cpu, Blocks } from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Frontend', items: ['React', 'Vite', 'Tailwind', 'Framer Motion'] },
  { icon: Cpu, title: 'Backend', items: ['FastAPI', 'MongoDB', 'REST'] },
  { icon: Blocks, title: 'Herramientas', items: ['Git', 'Vercel', 'Figma'] },
  { icon: Palette, title: 'UI/UX', items: ['Accesibilidad', 'Design Systems', 'Animaciones'] },
]

export default function Skills() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {skills.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.5 }}
          className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <s.icon className="w-6 h-6 text-indigo-600" />
            <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
          </div>
          <ul className="mt-4 space-y-2 text-gray-700">
            {s.items.map(item => (
              <li key={item} className="text-sm">{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}
