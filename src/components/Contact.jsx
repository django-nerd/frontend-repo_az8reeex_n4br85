import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="max-w-xl">
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        onSubmit={(e) => { e.preventDefault(); alert('¡Gracias por tu mensaje!') }}
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre</label>
          <input className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tu nombre" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="tu@email.com" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Mensaje</label>
          <textarea rows="4" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Cuéntame sobre tu proyecto" />
        </div>
        <button className="rounded-md bg-gray-900 text-white px-4 py-2 hover:bg-black transition">Enviar</button>
      </motion.form>
    </div>
  )
}
