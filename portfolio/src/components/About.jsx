import React from 'react'
import { motion } from 'framer-motion'
import { FaAward, FaUsers, FaGlobeAmericas, FaStar } from 'react-icons/fa'

const About = () => {
  const stats = [
    { icon: FaAward, number: '200+', label: 'Projetos Completos' },
    { icon: FaUsers, number: '100+', label: 'Clientes Satisfeitos' },
    { icon: FaGlobeAmericas, number: '6+', label: 'Anos de Experiência' },
    { icon: FaStar, number: '4.9/5', label: 'Avaliação Média' }
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-dark/50 relative overflow-hidden">
      {/* Background Decorations - Flowing Rays */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-20 sm:-bottom-40 -right-20 sm:-right-40 w-32 sm:w-56 md:w-80 h-32 sm:h-56 md:h-80 blur-lg ring-2 ring-secondary/70"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0%, rgba(0, 217, 255, 0.4) 20%, transparent 40%, transparent 50%, rgba(0, 217, 255, 0.3) 70%, transparent 90%, transparent 100%)',
          borderRadius: '50%'
        }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-20 sm:-top-40 -left-20 sm:-left-40 w-32 sm:w-56 md:w-80 h-32 sm:h-56 md:h-80 blur-lg ring-2 ring-primary/70"
        style={{
          background: 'conic-gradient(from 180deg, transparent 0%, rgba(107, 65, 193, 0.4) 15%, transparent 35%, transparent 50%, rgba(107, 65, 193, 0.3) 65%, transparent 85%, transparent 100%)',
          borderRadius: '50%'
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], rotateZ: 360 }}
        transition={{ 
          scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          rotateZ: { duration: 20, repeat: Infinity, ease: 'linear' }
        }}
        className="absolute top-1/2 right-1/4 w-32 sm:w-56 md:w-80 h-32 sm:h-56 md:h-80 blur-lg ring-2 ring-secondary/60"
        style={{
          background: 'conic-gradient(from 90deg, transparent 0%, rgba(0, 217, 255, 0.35) 18%, transparent 36%, transparent 50%, rgba(0, 217, 255, 0.25) 64%, transparent 82%, transparent 100%)',
          borderRadius: '50%'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-14 md:mb-16\"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-light via-secondary to-light bg-clip-text text-transparent">
              Sobre FLUXO INFORMÁTICO
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-light/70 px-2 sm:px-0">Criatividade, qualidade e inovação em cada projeto</p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left - Description */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={itemVariants}
              className="text-xl text-light/80 mb-6 leading-relaxed"
            >
              Fundada em 2018, a FLUXO INFORMÁTICO é uma empresa moçambicana, composta por um corpo profissional altamente capacitado em diferentes áreas. Ao longo desses anos, buscamos aperfeiçoar nossos serviços para garantir qualidade e satisfação dos nossos clientes.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-xl text-light/80 mb-6 leading-relaxed"
            >
              Propomos soluções nas áreas de Informática, Serigrafia, Gráfica, Publicidade, Reparação e Manutenção de equipamentos informáticos, Atividades de programação informática, Produção de mochilas e uniformes, edição de livros, brochuras, partituras e outras publicações, atividades de consultoria.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-xl text-light/80 mb-8 leading-relaxed"
            >
              Com nossos pilares firmados na qualidade, ética, transparência, respeito e compromisso com os valores, assumimos uma postura responsável, alinhando nosso propósito de desenvolvimento ao cumprimento dos compromissos com nossos colaboradores, sociedade e meio ambiente.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-xl text-light/80 mb-8 leading-relaxed"
            >
              Acreditamos no poder da parceria estratégica. Juntos, podemos alcançar objetivos ainda mais ambiciosos e gerar um crescimento significativo para a humanidade. Somos o sinónimo de excelência e soluções personalizadas, nossa equipe está pronta para entregar o melhor para ti e para a sua empresa.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-xl text-light/80 mb-8 leading-relaxed"
            >
              Com a nossa experiência e dedicação, sua empresa terá uma parceria que faz a diferença. Vamos trabalhar juntos para alcançar o sucesso!
            </motion.p>

            {/* Features List */}
            <motion.div className="space-y-4">
              {[
                'Equipe profissional altamente capacitada',
                'Soluções completas em Informática e Gráfica',
                'Compromisso com qualidade e ética',
                'Parceria estratégica para crescimento',
                'Atendimento personalizado e dedicado',
                'Responsabilidade social e ambiental'
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-3 h-3 bg-secondary rounded-full flex-shrink-0"
                  />
                  <span className="text-light/70">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-dark to-dark/30 border border-primary/30 rounded-xl p-6 text-center hover:border-secondary/50 transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="mb-4 flex justify-center"
                  >
                    <Icon className="text-4xl text-secondary" />
                  </motion.div>
                  <p className="text-3xl font-bold text-light mb-2">{stat.number}</p>
                  <p className="text-light/70 font-semibold">{stat.label}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
