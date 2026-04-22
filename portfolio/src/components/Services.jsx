import React from 'react'
import { motion } from 'framer-motion'
import { FaLaptop, FaTshirt, FaPrint, FaBullhorn, FaTools, FaCode } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: FaLaptop,
      title: 'Informática',
      description: ' Atividades de programação informática e soluções tecnológicas para otimizar sua empresa.'
    },
    {
      icon: FaTshirt,
      title: 'Serigrafia',
      description: 'Impressão personalizada e artística em camisetas, bonés e outros tecidos.'
    },
    {
      icon: FaPrint,
      title: 'Gráfica',
      description: 'Serviços de impressão e design gráfico com alta qualidade profissional.'
    },
    {
      icon: FaBullhorn,
      title: 'Publicidade',
      description: 'Estratégias de marketing e comunicação visual para sua marca.'
    },
    {
      icon: FaTools,
      title: 'Reparação & Manutenção',
      description: 'Suporte técnico especializado e manutenção de equipamentos.'
    },
    {
      icon: FaCode,
      title: 'Programação & Consultoria',
      description: 'Consultoria em TI e desenvolvimento de soluções personalizadas.'
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
    <section id="services" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-dark/50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 right-0 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 bg-secondary/12 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-0 left-0 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 bg-primary/12 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotateZ: 360 }}
        transition={{ 
          scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          rotateZ: { duration: 15, repeat: Infinity, ease: 'linear' }
        }}
        className="absolute top-1/2 right-1/4 w-32 sm:w-56 md:w-80 h-32 sm:h-56 md:h-80 bg-secondary/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-light via-secondary to-light bg-clip-text text-transparent">
              Nossos Serviços
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-light/70 px-2 sm:px-0">Soluções completas em Informática, Serigrafia, Gráfica, Publicidade e Consultoria</p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(107, 65, 193, 0.2)' }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-dark to-dark/50 border border-primary/30 rounded-xl p-4 sm:p-6 md:p-8 hover:border-secondary/50 transition-all duration-300"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-4 sm:mb-6"
                >
                  <Icon className="text-3xl sm:text-4xl text-secondary" />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-light">{service.title}</h3>
                <p className="text-sm sm:text-base text-light/70 leading-relaxed">{service.description}</p>

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
