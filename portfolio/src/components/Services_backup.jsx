import React from 'react'
import { motion } from 'framer-motion'
import { FaPrint, FaDesktop, FaTshirt, FaPalette, FaBoxOpen, FaCheck } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: FaTshirt,
      title: 'Serigrafia',
      description: 'Impressão de alta qualidade em camisetas, bonés e outros tecidos com cores vibrantes e durabilidade.'
    },
    {
      icon: FaDesktop,
      title: 'Design Gráfico',
      description: 'Criação de identidade visual, logotipos, materiais de marketing e designs personalizados.'
    },
    {
      icon: FaPrint,
      title: 'Impressão Offset',
      description: 'Impressão profissional em papel e outros substratos com acabamentos especiais.'
    },
    {
      icon: FaPalette,
      title: 'Personalização',
      description: 'Customização de produtos com designs exclusivos para sua marca ou evento.'
    },
    {
      icon: FaBoxOpen,
      title: 'Embalagem',
      description: 'Soluções de embalagem criativas para produtos, com design e funcionalidade.'
    },
    {
      icon: FaCheck,
      title: 'Consultoria',
      description: 'Consultoria profissional em design, materiais e estratégias de impressão.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark/50 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-light via-secondary to-light bg-clip-text text-transparent">
              Nossos Serviços
            </span>
          </h2>
          <p className="text-xl text-light/70">Soluções completas em serigrafia, impressão e design</p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(107, 65, 193, 0.2)' }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-dark to-dark/50 border border-primary/30 rounded-xl p-8 hover:border-secondary/50 transition-all duration-300"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-6"
                >
                  <Icon className="text-4xl text-secondary" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-light">{service.title}</h3>
                <p className="text-light/70 leading-relaxed">{service.description}</p>

                {/* Hover Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 h-1 bg-gradient-to-r from-secondary to-primary origin-left"
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
