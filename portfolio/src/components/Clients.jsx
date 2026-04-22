import React from 'react'
import { motion } from 'framer-motion'

const Clients = () => {
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

  return (
    <section id="clients" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-dark/30">
      {/* Enhanced Flowing Background Elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          y: [0, 20, 0]
        }}
        transition={{ 
          rotate: { duration: 12, repeat: Infinity, ease: 'linear' },
          y: { duration: 10, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute top-0 right-0 w-32 sm:w-48 md:w-72 lg:w-96 h-32 sm:h-48 md:h-72 lg:h-96 bg-primary/12 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          rotate: -360,
          y: [0, -20, 0]
        }}
        transition={{ 
          rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
          y: { duration: 12, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute bottom-0 left-0 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 bg-secondary/12 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1], 
          rotateZ: 360,
          opacity: [0.12, 0.22, 0.12]
        }}
        transition={{ 
          scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          rotateZ: { duration: 10, repeat: Infinity, ease: 'linear' },
          opacity: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute top-1/3 left-1/4 w-32 sm:w-56 md:w-80 h-32 sm:h-56 md:h-80 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          rotate: -360,
          y: [0, 15, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ 
          rotate: { duration: 18, repeat: Infinity, ease: 'linear' },
          y: { duration: 11, repeat: Infinity, ease: 'easeInOut' },
          scale: { duration: 9, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute top-2/3 right-1/4 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 bg-secondary/8 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          rotate: 360,
          x: [0, 25, 0]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          x: { duration: 13, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute top-1/2 -left-16 sm:-left-32 w-32 sm:w-64 md:w-80 h-32 sm:h-64 md:h-80 bg-primary/8 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotateZ: -360,
          opacity: [0.1, 0.18, 0.1]
        }}
        transition={{ 
          scale: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
          rotateZ: { duration: 16, repeat: Infinity, ease: 'linear' },
          opacity: { duration: 7, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute -bottom-10 sm:-bottom-20 -right-10 sm:-right-20 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 bg-secondary/7 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
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
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6"
          >
            <span className="bg-gradient-to-r from-light via-secondary to-light bg-clip-text text-transparent">
              Alguns dos Nossos Clientes
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-light/70 max-w-2xl mx-auto px-2 sm:px-0"
          >
            Confiança de empresas líderes em todo o país
          </motion.p>
        </motion.div>

        {/* Clients Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12"
        >
          {clients.map((client) => (
            <motion.div
              key={client.id}
              className="relative group"
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: 'easeOut',
                  },
                },
              }}
            >
              {/* Card */}
              <motion.div 
                className="relative flex items-center justify-center p-6 h-28 bg-gradient-to-br from-dark/80 via-dark/60 to-dark/80 border border-primary/30 rounded-lg backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-secondary/50"
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.4 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Logo Container */}
                <div className="relative z-10 flex items-center justify-center w-full h-full">
                  <motion.img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-[90%] max-h-[90%] object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <motion.div 
            className="inline-block"
            whileHover={{ scale: 1.02 }}
          >
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-light/70 mb-4"
            >
              Descubra como a FLUXO INFORMÁTICO pode transformar sua marca
            </motion.p>
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-secondary to-primary text-dark font-bold rounded-lg inline-block transition-all duration-300"
              whileHover={{ 
                scale: 1.08,
                boxShadow: '0 0 20px rgba(0, 217, 255, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
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
