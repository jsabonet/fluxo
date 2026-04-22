import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

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
      value: '(11) 1234-5678',
      href: 'tel:+551112345678'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      value: '(11) 98765-4321',
      href: 'https://wa.me/5511987654321'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'contato@fluxo.com.br',
      href: 'mailto:contato@fluxo.com.br'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Localização',
      value: 'São Paulo, SP',
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-0 left-0 w-96 h-96 bg-primary/12 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/12 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotateZ: 360 }}
        transition={{ 
          scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          rotateZ: { duration: 18, repeat: Infinity, ease: 'linear' }
        }}
        className="absolute top-1/2 left-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
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
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-light via-secondary to-light bg-clip-text text-transparent">
              Entre em Contato
            </span>
          </h2>
          <p className="text-xl text-light/70">Estamos prontos para transformar sua visão em realidade</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
              className="text-xl text-light/70 leading-relaxed"
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
                    className="flex items-start gap-6 p-6 bg-gradient-to-r from-dark to-dark/50 border border-primary/30 rounded-xl hover:border-secondary/50 transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="flex-shrink-0"
                    >
                      <Icon className="text-3xl text-secondary mt-1" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-light mb-1">{info.title}</h3>
                      <p className="text-light/70">{info.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 pt-6"
            >
              {[
                { icon: '💼', href: '#' },
                { icon: '📘', href: '#' },
                { icon: '📷', href: '#' },
                { icon: '🎥', href: '#' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-primary/20 border border-primary/50 rounded-lg flex items-center justify-center text-2xl hover:bg-secondary/20 hover:border-secondary/50 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
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
                placeholder="(11) 98765-4321"
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
