import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaTiktok } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Telefone',
      value: '87 614 1982 / 84 289 3089',
      href: 'tel:+258876141982'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      value: '87 614 1982',
      href: 'https://wa.me/258876141982'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'fluxoinformatico@gmail.com',
      href: 'mailto:fluxoinformatico@gmail.com'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Localização',
      value: `Av. Alberto Joaquim Chipande\nPerto do Portão Wimbe\nAlto Gingone, Cidade de Pemba`,
      href: '#'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 left-0 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 bg-primary/12 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-0 right-0 w-40 sm:w-64 md:w-96 h-40 sm:h-64 md:h-96 bg-secondary/12 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotateZ: 360 }}
        transition={{ 
          scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          rotateZ: { duration: 18, repeat: Infinity, ease: 'linear' }
        }}
        className="absolute top-1/2 left-1/3 w-32 sm:w-56 md:w-80 h-32 sm:h-56 md:h-80 bg-secondary/10 rounded-full blur-3xl"
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
              Entre em Contacto
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-light/70 px-2 sm:px-0">Estamos prontos para transformar sua visão em realidade</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-light/70 leading-relaxed"
            >
              Tem dúvidas? Quer conhecer mais sobre nossos serviços? Entre em contato conosco e receba um orçamento personalizado.
            </motion.p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                    <motion.a
                      key={index}
                      href={info.href}
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-gradient-to-r from-dark to-dark/50 border border-primary/30 rounded-xl hover:border-secondary/50 transition-all duration-300"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="flex-shrink-0"
                      >
                        <Icon className="text-2xl sm:text-3xl text-secondary mt-1" />
                      </motion.div>
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-light mb-1">{info.title}</h3>
                        <p className="text-xs sm:text-sm md:text-base text-light/70">{info.value}</p>
                      </div>
                    </motion.a>
                )
              })}
            </div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-3 sm:gap-4 pt-6 flex-wrap"
            >
              {[
                { 
                  icon: FaLinkedin, 
                  href: 'https://linkedin.com/company/fluxo',
                  label: 'LinkedIn',
                  name: 'LinkedIn'
                },
                { 
                  icon: FaFacebook, 
                  href: 'https://facebook.com/fluxoinformatica',
                  label: 'Facebook',
                  name: 'Facebook'
                },
                { 
                  icon: FaInstagram, 
                  href: 'https://instagram.com/fluxoinformatica',
                  label: 'Instagram',
                  name: 'Instagram'
                },
                { 
                  icon: FaYoutube, 
                  href: 'https://youtube.com/@fluxoinformatica',
                  label: 'YouTube',
                  name: 'YouTube'
                },
                { 
                  icon: FaTwitter, 
                  href: 'https://twitter.com/fluxoinformatica',
                  label: 'Twitter',
                  name: 'Twitter'
                },
                { 
                  icon: FaTiktok, 
                  href: 'https://tiktok.com/@fluxoinformatica',
                  label: 'TikTok',
                  name: 'TikTok'
                }
              ].map((social, i) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/50 rounded-lg flex items-center justify-center hover:border-secondary/80 transition-all duration-300 group"
                  >
                    <Icon className="text-lg sm:text-xl text-secondary group-hover:text-white transition-colors duration-300" />
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-light font-semibold mb-2">Nome</label>
              <motion.input
                whileFocus={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' }}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-3 bg-dark border border-primary/30 text-light rounded-lg focus:outline-none focus:border-secondary/50 transition-all duration-300"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label className="block text-light font-semibold mb-2">Email</label>
              <motion.input
                whileFocus={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' }}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-3 bg-dark border border-primary/30 text-light rounded-lg focus:outline-none focus:border-secondary/50 transition-all duration-300"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-light font-semibold mb-2">Telefone</label>
              <motion.input
                whileFocus={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' }}
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-6 py-3 bg-dark border border-primary/30 text-light rounded-lg focus:outline-none focus:border-secondary/50 transition-all duration-300"
                placeholder="(+258) 8x xxxx-xxxx"
              />
            </div>

            <div>
              <label className="block text-light font-semibold mb-2">Assunto</label>
              <motion.input
                whileFocus={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' }}
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-6 py-3 bg-dark border border-primary/30 text-light rounded-lg focus:outline-none focus:border-secondary/50 transition-all duration-300"
                placeholder="Assunto da mensagem"
              />
            </div>

            <div>
              <label className="block text-light font-semibold mb-2">Mensagem</label>
              <motion.textarea
                whileFocus={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' }}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-6 py-3 bg-dark border border-primary/30 text-light rounded-lg focus:outline-none focus:border-secondary/50 transition-all duration-300 resize-none"
                placeholder="Sua mensagem..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className={`w-full py-3 rounded-lg font-bold text-lg transition-all duration-300 ${
                submitted
                  ? 'bg-green-500 text-dark'
                  : 'bg-secondary text-dark hover:shadow-2xl hover:shadow-secondary/50'
              }`}
            >
              {submitted ? '✓ Mensagem Enviada!' : 'Enviar Mensagem'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
