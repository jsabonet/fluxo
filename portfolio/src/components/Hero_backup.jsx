import React from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        {/* Logo Animation */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <motion.img
            src={logo}
            alt="FLUXO"
            className="h-32 w-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-light via-secondary to-light bg-clip-text text-transparent"
        >
          FLUXO INFORMÁTICO
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl text-secondary font-light mb-8"
        >
          Serigrafia & Gráfica
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-light/70 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Soluções criativas e inovadoras em impressão, serigrafia e design gráfico. 
          Transformamos suas ideias em realidade visual com qualidade profissional.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 216, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-secondary text-dark font-bold rounded-lg text-lg transition-all duration-300"
          >
            Ver Portfólio
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, borderColor: '#00d8ff' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-primary text-light font-bold rounded-lg text-lg hover:bg-primary/10 transition-all duration-300"
          >
            Solicitar Orçamento
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16"
        >
          <p className="text-light/50 text-sm mb-2">Scroll para explorar</p>
          <div className="w-6 h-10 border-2 border-secondary rounded-full mx-auto flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-secondary rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
