import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Bordados Personalizados',
      category: 'serigrafia',
      image: 'https://res.cloudinary.com/dtdcefrf1/image/upload/v1776834084/Screenshot_2026-04-22_064831_oioveh.png',
      description: 'Bordados de alta precisão em uniformes e peças corporativas'
    },
    {
      id: 2,
      title: 'Impressão de Banners e Roll Ups',
      category: 'impressao',
      image: 'https://res.cloudinary.com/dtdcefrf1/image/upload/v1776834083/Screenshot_2026-04-22_064816_xizaig.png',
      description: 'Banners, roll ups e grandes formatos para eventos e publicidade'
    },
    {
      id: 3,
      title: 'Personalização de EPI',
      category: 'serigrafia',
      image: 'https://res.cloudinary.com/dtdcefrf1/image/upload/v1776834083/Screenshot_2026-04-22_064927_bzap3x.png',
      description: 'Equipamentos de Proteção Individual personalizados com logo da empresa'
    },
    {
      id: 4,
      title: 'Branding de Viaturas',
      category: 'design',
      image: 'https://res.cloudinary.com/dtdcefrf1/image/upload/v1776834083/Screenshot_2026-04-22_064849_h8zqlf.png',
      description: 'Designs e aplicação de logos em viaturas corporativas'
    },
    {
      id: 5,
      title: 'Coletes de Pano',
      category: 'serigrafia',
      image: 'https://res.cloudinary.com/dtdcefrf1/image/upload/v1776834083/Screenshot_2026-04-22_064912_tivf8d.png',
      description: 'Coletes de pano com estampagem de alta qualidade'
    },
    {
      id: 6,
      title: 'Edição de Livros',
      category: 'impressao',
      image: 'https://res.cloudinary.com/dtdcefrf1/image/upload/v1776834083/Screenshot_2026-04-22_064713_dilvux.png',
      description: 'Edição, diagramação e impressão profissional de livros'
    },
    {
      id: 7,
      title: 'Produção de Uniformes e Sacolas',
      category: 'serigrafia',
      image: 'https://res.cloudinary.com/dtdcefrf1/image/upload/v1776834082/Screenshot_2026-04-22_064802_gcgmwk.png',
      description: 'Uniformes, batas e sacolas corporativas personalizadas'
    },
    {
      id: 8,
      title: 'Estampagem Profissional',
      category: 'serigrafia',
      image: 'https://res.cloudinary.com/dtdcefrf1/image/upload/v1776834082/Screenshot_2026-04-22_064749_z8szuf.png',
      description: 'Estampagem em peças de vestuário com acabamento premium'
    }
  ]

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'design', label: 'Branding' },
    { id: 'serigrafia', label: 'Serigrafia' },
    { id: 'impressao', label: 'Impressão & Gráfica' }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 right-0 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 bg-primary/12 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-0 left-0 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 bg-secondary/12 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotateZ: -360 }}
        transition={{ 
          scale: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
          rotateZ: { duration: 20, repeat: Infinity, ease: 'linear' }
        }}
        className="absolute top-1/3 left-1/3 w-32 sm:w-56 md:w-80 h-32 sm:h-56 md:h-80 bg-primary/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-14 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-light via-secondary to-light bg-clip-text text-transparent">
              Portfólio
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-light/70 px-2 sm:px-0">Conheça alguns de nossos melhores trabalhos</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          {categories.map(cat => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-secondary text-dark'
                  : 'bg-dark border border-secondary/30 text-light hover:border-secondary'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-xl group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-primary to-secondary/80 flex flex-col justify-end p-6 transition-opacity duration-300"
                  >
                    <h3 className="text-2xl font-bold text-dark mb-2">{project.title}</h3>
                    <p className="text-dark/90">{project.description}</p>
                  </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="bg-dark border-b-2 border-secondary p-4">
                  <p className="text-secondary font-semibold">
                    {categories.find(c => c.id === project.category)?.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-secondary text-dark font-bold rounded-lg text-lg inline-block transition-all duration-300"
          >
            Ver Mais Projetos
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
