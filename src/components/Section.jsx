import { motion, useScroll, useTransform } from 'framer-motion'
import { forwardRef, useRef } from 'react'

const Section = forwardRef(function Section(
  { id, eyebrow, title, description, children, bg = 'white' }, ref
) {
  const localRef = useRef(null)
  const targetRef = ref || localRef
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 0.6])

  return (
    <section id={id} ref={targetRef} className={`relative py-24 sm:py-32 ${bg === 'alt' ? 'bg-gradient-to-b from-white to-gray-50' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div style={{ y, opacity }}>
          {eyebrow && <p className="text-sm font-medium text-indigo-600">{eyebrow}</p>}
          {title && <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">{title}</h2>}
          {description && <p className="mt-3 text-gray-600 max-w-2xl">{description}</p>}
        </motion.div>
        <div className="mt-10">
          {children}
        </div>
      </div>
    </section>
  )
})

export default Section
