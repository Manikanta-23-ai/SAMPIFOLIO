import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

export default function Projects() {
  const sectionRef = useRef()
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Nexus Platform',
      category: 'Web Application',
      description: 'A comprehensive SaaS platform featuring real-time collaboration and advanced analytics.',
      tags: ['React', 'Three.js', 'WebGL'],
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      id: 2,
      title: 'Aurora Commerce',
      category: 'E-Commerce',
      description: 'Immersive 3D product visualization for a luxury retail brand with AR integration.',
      tags: ['Next.js', 'R3F', 'AR.js'],
      gradient: 'from-cyan-600 to-blue-600',
    },
    {
      id: 3,
      title: 'Zenith Studios',
      category: 'Portfolio',
      description: 'Award-winning portfolio site with cinematic transitions and interactive storytelling.',
      tags: ['React', 'GSAP', 'WebGL'],
      gradient: 'from-pink-600 to-rose-600',
    },
    {
      id: 4,
      title: 'Quantum Dashboard',
      category: 'Data Visualization',
      description: 'Real-time data visualization platform with 3D charts and predictive analytics.',
      tags: ['Vue', 'D3.js', 'Three.js'],
      gradient: 'from-emerald-600 to-teal-600',
    },
    {
      id: 5,
      title: 'Stellar Agency',
      category: 'Creative',
      description: 'Interactive agency website featuring parallax effects and smooth scroll animations.',
      tags: ['React', 'Framer', 'Lenis'],
      gradient: 'from-violet-600 to-purple-600',
    },
    {
      id: 6,
      title: 'Horizon Tech',
      category: 'Landing Page',
      description: 'High-converting landing page with animated 3D product showcase and CTA optimization.',
      tags: ['Next.js', 'Tailwind', 'R3F'],
      gradient: 'from-amber-600 to-orange-600',
    },
  ]

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen py-32 px-6 bg-gradient-to-b from-black via-cyan-950/10 to-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing our latest work across web, mobile, and immersive experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-sm hover:border-white/30 transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className={`relative h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50 group-hover:opacity-80 transition-opacity">
                  {project.category === 'Web Application' && '🌐'}
                  {project.category === 'E-Commerce' && '🛍️'}
                  {project.category === 'Portfolio' && '🎨'}
                  {project.category === 'Data Visualization' && '📊'}
                  {project.category === 'Creative' && '✨'}
                  {project.category === 'Landing Page' && '🚀'}
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-white/20">
                  {project.category}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-2xl w-full bg-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-xl"
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-400 text-sm mb-4">{selectedProject.category}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                  View Case Study
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
