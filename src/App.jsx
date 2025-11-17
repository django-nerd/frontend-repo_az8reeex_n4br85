import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />

      <Section
        id="about"
        eyebrow="Quién soy"
        title="Desarrollador/a enfocado/a en crear experiencias memorables"
        description="Me especializo en construir interfaces modernas con transiciones suaves, microinteracciones y un desempeño impecable."
      >
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <p className="text-gray-700 leading-relaxed">
            Me apasiona combinar diseño y código para construir productos que la gente ame usar. Disfruto trabajar con equipos que valoran la calidad, la accesibilidad y la iteración constante.
          </p>
          <div className="rounded-2xl border border-gray-200 p-5 bg-white shadow-sm">
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• 4+ años creando interfaces con React y Tailwind</li>
              <li>• Enfoque en rendimiento, SEO y accesibilidad</li>
              <li>• Experiencia creando design systems y librerías de componentes</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="projects"
        bg="alt"
        eyebrow="Trabajo"
        title="Proyectos seleccionados"
        description="Una muestra de las soluciones que he diseñado y desarrollado."
      >
        <Projects />
      </Section>

      <Section
        id="skills"
        eyebrow="Stack"
        title="Habilidades y herramientas"
        description="Tecnologías con las que me siento más cómodo/a trabajando."
      >
        <Skills />
      </Section>

      <Section
        id="contact"
        bg="alt"
        eyebrow="Hablemos"
        title="¿Tienes una idea en mente?"
        description="Cuéntame sobre tu proyecto y cómo puedo ayudarte a hacerlo realidad."
      >
        <Contact />
      </Section>

      <footer className="py-10 border-t border-gray-200 text-center text-sm text-gray-600">
        Hecho con cariño • © {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default App
