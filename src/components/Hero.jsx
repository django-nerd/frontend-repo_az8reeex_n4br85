import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900"
        >
          Hola, soy <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">Tu Nombre</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-lg text-gray-700 max-w-2xl"
        >
          Desarrollador/a web enfocado/a en crear experiencias digitales modernas, rápidas y accesibles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="#projects" className="px-5 py-2.5 rounded-full bg-gray-900 text-white hover:bg-black transition">Ver proyectos</a>
          <a href="#contact" className="px-5 py-2.5 rounded-full bg-white text-gray-900 border border-gray-200 hover:border-gray-300 transition">Contáctame</a>
        </motion.div>
      </div>
    </section>
  )
}
