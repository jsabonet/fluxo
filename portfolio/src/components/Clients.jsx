import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Clients = () => {
  const [hoveredId, setHoveredId] = useState(null)

  const clients = [
    {
      id: 1,
      logo: 'https://res.cloudinary.com/dtdcefrf1/image/upload/v1776835737/Screenshot_2026-04-22_072247_snrc69.png',
      name: 'Cliente 1'
    },
    {
      id: 2,
      logo: 'https://res.cloudinary.com/dtdcefrf1/image/upload/v1776835736/Screenshot_2026-04-22_072238_nziafx.png',
      name: 'Cliente 2'
    },
    {
      id: 3,
      logo: 'https://res.cloudinary.com/dtdcefrf1/image/upload/v1776835734/Screenshot_2026-04-22_072152_xevvvy.png',
      name: 'Cliente 3'
    },
    {
      id: 4,
      logo: 'https://res.cloudinary.com/dtdcefrf1/image/upload/v1776835734/Screenshot_2026-04-22_072226_ymf1jo.png',
      name: 'Cliente 4'
    },
    {
      id: 5,
      logo: 'https://res.cloudinary.com/dtdcefrf1/image/upload/v1776835734/Screenshot_2026-04-22_072217_pjd7g2.png',
      name: 'Cliente 5'
    },
    {
      id: 6,
      logo: 'https://res.cloudinary.com/dtdcefrf1/image/upload/v1776835734/Screenshot_2026-04-22_072133_zlmwo7.png',
      name: 'Cliente 6'
    },
    {
      id: 7,
      logo: 'https://res.cloudinary.com/dtdcefrf1/image/upload/v1776835733/Screenshot_2026-04-22_072203_zvfqno.png',
      name: 'Cliente 7'
    },
    {
      id: 8,
      logo: 'https://res.cloudinary.com/dtdcefrf1/image/upload/v1776835733/Screenshot_2026-04-22_072140_ajepin.png',
      name: 'Cliente 8'
    },
    {
      id: 9,
      logo: 'https://res.cloudinary.com/dtdcefrf1/image/upload/v1776835428/Screenshot_2026-04-22_072118_jddj1z.png',
      name: 'Cliente 9'
    },
    {
      id: 10,
      logo: 'https://res.cloudinary.com/dtdcefrf1/image/upload/v1776835427/Screenshot_2026-04-22_072106_ql8o84.png',
      name: 'Cliente 10'
    },
    {
      id: 11,
      logo: 'https://res.cloudinary.com/dtdcefrf1/image/upload/v1776835421/Screenshot_2026-04-22_072056_flqv3t.png',
      name: 'Cliente 11'
    },
    {
      id: 12,
      logo: 'https://res.cloudinary.com/dtdcefrf1/image/upload/v1776835421/Screenshot_2026-04-22_072036_sdgfqt.png',
      name: 'Cliente 12'
    },
    {
      id: 13,
      logo: 'https://res.cloudinary.com/dtdcefrf1/image/upload/v1776835421/Screenshot_2026-04-22_072019_twqx5w.png',
      name: 'Cliente 13'
    },
    {
      id: 14,
      logo: 'https://res.cloudinary.com/dtdcefrf1/image/upload/v1776835421/Screenshot_2026-04-22_071900_fy6wqa.png',
      name: 'Cliente 14'
    },
    {
      id: 15,
      logo: 'https://res.cloudinary.com/dtdcefrf1/image/upload/v1776835420/Screenshot_2026-04-22_072008_aggpbw.png',
      name: 'Cliente 15'
    },
    {
      id: 16,
      logo: 'https://res.cloudinary.com/dtdcefrf1/image/upload/v1776835420/Screenshot_2026-04-22_072027_pthmvt.png',
      name: 'Cliente 16'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
        duration: 0.8,
      },
    },
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 25,
      scale: 0.95,
      rotateY: -25
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: { 
        duration: 0.9,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="clients" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          y: [0, 15, 0]
        }}
        transition={{ 
          rotate: { duration: 18, repeat: Infinity, ease: 'linear' },
          y: { duration: 12, repeat: Infinity, ease: 'easeInOut' }
        }}
        className='absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-secondary/12 to-transparent rounded-full blur-3xl'
      />
      <motion.div
        animate={{ 
          rotate: -360,
          y: [0, -15, 0]
        }}
        transition={{ 
          rotate: { duration: 22, repeat: Infinity, ease: 'linear' },
          y: { duration: 13, repeat: Infinity, ease: 'easeInOut' }
        }}
        className='absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/12 to-transparent rounded-full blur-3xl'
      />
      <motion.div
        animate={{ 
          scale: [1, 1.12, 1],
          opacity: [0.2, 0.4, 0.2],
          rotateZ: 360
        }}
        transition={{ 
          scale: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
          rotateZ: { duration: 20, repeat: Infinity, ease: 'linear' }
        }}
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/3 rounded-full blur-3xl'
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.8,
            ease: 'easeOut'
          }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="text-secondary font-bold text-lg tracking-widest">PARCEIROS</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-light via-secondary to-light bg-clip-text text-transparent">
              Alguns dos Nossos Clientes
            </span>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl text-light/70 max-w-2xl mx-auto"
          >
            Confiança de empresas líderes em todo o país
          </motion.p>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(client.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ 
                y: -5, 
                scale: 1.03,
                transition: { duration: 0.4 }
              }}
              className="relative group"
            >
              {/* Outer Glow */}
              <motion.div
                animate={hoveredId === client.id ? {
                  opacity: [0.2, 0.35, 0.2],
                  scale: [1, 1.03, 1]
                } : {
                  opacity: 0.08,
                  scale: 1
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-secondary to-primary rounded-lg blur-lg -z-10"
              />

              {/* Card */}
              <motion.div
                className="relative flex items-center justify-center p-6 h-28 bg-gradient-to-br from-dark/80 via-dark/60 to-dark/80 border border-primary/30 rounded-lg backdrop-blur-sm overflow-hidden"
              >
                {/* Animated Background Gradient */}
                <motion.div
                  animate={hoveredId === client.id ? {
                    opacity: 0.25,
                    x: [0, 30, 0]
                  } : {
                    opacity: 0,
                    x: 0
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-secondary/3 to-primary/3"
                />

                {/* Border Animate */}
                <motion.div
                  animate={hoveredId === client.id ? {
                    opacity: [0, 0.25, 0],
                  } : {
                    opacity: 0
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="absolute inset-0 border border-secondary/20 rounded-lg"
                />

                {/* Logo Container */}
                <div className="relative z-10 flex items-center justify-center w-full h-full">
                  <motion.img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-[90%] max-h-[90%] object-contain"
                    animate={hoveredId === client.id ? {
                      filter: ['brightness(0.88)', 'brightness(1.08)', 'brightness(0.88)'],
                    } : {
                      filter: 'brightness(0.82)'
                    }}
                    transition={{ duration: 0.7 }}
                  />
                </div>

                {/* Corner Accent */}
                <motion.div
                  animate={hoveredId === client.id ? {
                    opacity: 0.6,
                    scale: 1
                  } : {
                    opacity: 0,
                    scale: 0.5
                  }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-secondary/10 to-transparent"
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.6,
            duration: 0.8
          }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="text-lg text-light/70 mb-4">
              Descubra como a FLUXO pode transformar sua marca
            </p>
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 0 15px rgba(0, 217, 255, 0.25)'
              }}
              whileTap={{ scale: 0.99 }}
              className="px-8 py-3 bg-gradient-to-r from-secondary to-primary text-dark font-bold rounded-lg inline-block transition-all duration-300"
            >
              Solicitar Orçamento
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Clients
