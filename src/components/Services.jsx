import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Services() {
  const sectionRef = useRef()
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const services = [
    {
      icon: '🎨',
      title: '3D Design',
      description: 'Stunning 3D visuals and interactive experiences that captivate and engage your audience.',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'High-performance web applications built with modern frameworks and best practices.',
      gradient: 'from-cyan-600 to-blue-600',
    },
    {
      icon: '📱',
      title: 'UI/UX Design',
      description: 'Intuitive interfaces designed with user experience at the forefront of every decision.',
      gradient: 'from-pink-600 to-rose-600',
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Lightning-fast loading times and optimized experiences across all devices.',
      gradient: 'from-amber-600 to-orange-600',
    },
    {
      icon: '🎬',
      title: 'Animation',
      description: 'Smooth, purposeful animations that bring your digital products to life.',
      gradient: 'from-violet-600 to-purple-600',
    },
    {
      icon: '🔧',
      title: 'Consulting',
      description: 'Strategic guidance to help you navigate complex technical decisions and achieve your goals.',
      gradient: 'from-emerald-600 to-teal-600',
    },
  ]

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative min-h-screen py-32 px-6 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to elevate your digital presence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-cyan-400 transition-all">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
