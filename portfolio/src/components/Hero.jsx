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
      {/* Swirling Vortex Effects - Creating Hurricane-like Formation */}
      <motion.div
        animate={{ 
          rotate: 360,
          y: [0, 20, 0]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          y: { duration: 10, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute top-10 sm:top-20 right-5 sm:right-10 w-32 sm:w-48 md:w-72 h-32 sm:h-48 md:h-72 blur-lg ring-2 ring-primary/75"
        style={{
          background: `radial-gradient(circle at 30% 30%, rgba(107,65,193,0.56) 0%, rgba(0,102,255,0.4) 18%, rgba(255,45,154,0.18) 40%, transparent 55%), 
                        conic-gradient(from 0deg at 50% 50%, rgba(0,191,255,0.46) 0deg, transparent 60deg, rgba(255,212,0,0.22) 130deg, transparent 200deg, rgba(0,102,255,0.34) 270deg, transparent 360deg)`,
          borderRadius: '50%'
        }}
      />
      {/* Secondary Bottom Left - Cyan Vortex */}
      <motion.div
        animate={{ 
          rotate: -360,
          y: [0, -20, 0]
        }}
        transition={{ 
          rotate: { duration: 22, repeat: Infinity, ease: 'linear' },
          y: { duration: 12, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 blur-lg ring-2 ring-secondary/75"
        style={{
          background: `radial-gradient(circle at 70% 70%, rgba(0,216,255,0.7) 0%, rgba(0,102,255,0.42) 14%, rgba(255,212,0,0.18) 42%, transparent 56%), 
                        conic-gradient(from 45deg at 50% 50%, rgba(0,191,255,0.55) 0deg, transparent 70deg, rgba(107,65,193,0.28) 140deg, transparent 200deg, rgba(0,216,255,0.42) 270deg, transparent 320deg, rgba(0,191,255,0.55) 360deg)`,
          borderRadius: '50%'
        }}
      />
      {/* Primary Center - Purple Spiral */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1], 
          rotateZ: 360,
          opacity: [0.25, 0.38, 0.25]
        }}
        transition={{ 
          scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          rotateZ: { duration: 18, repeat: Infinity, ease: 'linear' },
          opacity: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute top-1/3 left-1/4 w-32 sm:w-56 md:w-80 h-32 sm:h-56 md:h-80 blur-lg ring-2 ring-primary/70"
        style={{
          background: `radial-gradient(circle at 35% 35%, rgba(107,65,193,0.52) 0%, rgba(0,102,255,0.36) 22%, rgba(255,45,154,0.12) 46%, transparent 62%), 
                        conic-gradient(from 90deg at 50% 50%, rgba(0,191,255,0.42) 0deg, transparent 65deg, rgba(255,212,0,0.18) 130deg, transparent 190deg, rgba(0,102,255,0.34) 260deg, transparent 310deg, rgba(107,65,193,0.42) 360deg)`,
          borderRadius: '50%'
        }}
      />
      {/* Secondary Bottom Right - Cyan Vortex */}
      <motion.div
        animate={{ 
          rotate: -360,
          y: [0, 15, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ 
          rotate: { duration: 24, repeat: Infinity, ease: 'linear' },
          y: { duration: 11, repeat: Infinity, ease: 'easeInOut' },
          scale: { duration: 9, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute bottom-1/3 right-1/4 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 blur-lg ring-2 ring-secondary/70"
        style={{
          background: `radial-gradient(circle at 65% 65%, rgba(0,216,255,0.5) 0%, rgba(107,65,193,0.34) 20%, rgba(0,102,255,0.15) 44%, transparent 60%), 
                        conic-gradient(from 180deg at 50% 50%, rgba(0,191,255,0.38) 0deg, transparent 72deg, rgba(255,45,154,0.22) 145deg, transparent 210deg, rgba(0,216,255,0.35) 280deg, transparent 330deg, rgba(0,191,255,0.4) 360deg)`,
          borderRadius: '50%'
        }}
      />
      {/* Primary Left - Purple Vortex */}
      <motion.div
        animate={{ 
          rotate: 360,
          x: [0, 25, 0]
        }}
        transition={{ 
          rotate: { duration: 26, repeat: Infinity, ease: 'linear' },
          x: { duration: 13, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute top-1/2 -left-16 sm:-left-32 w-32 sm:w-64 md:w-80 h-32 sm:h-64 md:h-80 blur-lg ring-2 ring-primary/65"
        style={{
          background: `radial-gradient(circle at 40% 40%, rgba(107,65,193,0.45) 0%, rgba(0,102,255,0.28) 24%, rgba(255,212,0,0.08) 50%, transparent 68%), 
                        conic-gradient(from 270deg at 50% 50%, rgba(0,191,255,0.34) 0deg, transparent 68deg, rgba(255,45,154,0.2) 138deg, transparent 202deg, rgba(0,102,255,0.28) 270deg, transparent 320deg, rgba(107,65,193,0.35) 360deg)`,
          borderRadius: '50%'
        }}
      />
      {/* Secondary Bottom Right Corner - Cyan Vortex */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotateZ: -360,
          opacity: [0.2, 0.32, 0.2]
        }}
        transition={{ 
          scale: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
          rotateZ: { duration: 20, repeat: Infinity, ease: 'linear' },
          opacity: { duration: 7, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute -bottom-10 sm:-bottom-20 -right-10 sm:-right-20 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 blur-lg ring-2 ring-secondary/65"
        style={{
          background: `radial-gradient(circle at 60% 60%, rgba(0,216,255,0.48) 0%, rgba(0,102,255,0.32) 18%, rgba(107,65,193,0.12) 44%, transparent 62%), 
                        conic-gradient(from 315deg at 50% 50%, rgba(0,191,255,0.36) 0deg, transparent 75deg, rgba(255,212,0,0.2) 150deg, transparent 215deg, rgba(0,216,255,0.32) 285deg, transparent 335deg, rgba(0,191,255,0.38) 360deg)`,
          borderRadius: '50%'
        }}
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
          {/* <motion.img
            src={logo}
            alt="FLUXO"
            className="h-32 w-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          /> */}
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-light via-secondary to-light bg-clip-text text-transparent"
        >
          FLUXO INFORMÁTICO
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-secondary font-light mb-6 sm:mb-8"
        >
          Serigrafia & Gráfica
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg text-light/70 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed"
        >
          Soluções criativas e inovadoras em impressão, serigrafia e design gráfico. 
          Transformamos suas ideias em realidade visual com qualidade profissional.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full px-2 sm:px-0"
        >
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 216, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-secondary text-dark font-bold rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300"
          >
            Ver Portfólio
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, borderColor: '#00d8ff' }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary text-light font-bold rounded-lg text-sm sm:text-base md:text-lg hover:bg-primary/10 transition-all duration-300"
          >
            Solicitar Orçamento
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-10 sm:mt-12 md:mt-16 hidden sm:block"
        >
          <p className="text-light/50 text-xs sm:text-sm mb-2">Scroll para explorar</p>
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
