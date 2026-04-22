import React from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Serviços', href: '#services' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Sobre', href: '#about' }
  ]

  const services = [
    'Serigrafia',
    'Design Gráfico',
    'Impressão Offset',
    'Embalagem',
    'Personalização',
    'Consultoria'
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
    <footer className="bg-dark/80 backdrop-blur-md border-t border-primary/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <img src={logo} alt="FLUXO" className="h-16 w-auto" />
            <p className="text-light/70 leading-relaxed">
              Soluções criativas em serigrafia, impressão e design gráfico para sua marca.
            </p>
            <div className="flex gap-3">
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
                  className="w-10 h-10 bg-primary/20 border border-primary/50 rounded-lg flex items-center justify-center text-lg hover:bg-secondary/20 hover:border-secondary/50 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-bold text-light">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <motion.li key={i} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="text-light/70 hover:text-secondary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-bold text-light">Serviços</h4>
            <ul className="space-y-2">
              {services.map((service, i) => (
                <motion.li key={i} whileHover={{ x: 5 }}>
                  <a
                    href="#services"
                    className="text-light/70 hover:text-secondary transition-colors duration-300"
                  >
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-bold text-light">Contato</h4>
            <div className="space-y-3">
              <div>
                <p className="text-light/70 text-sm">Telefone</p>
                <a href="tel:+551112345678" className="text-secondary hover:text-secondary/80 transition-colors">
                  (11) 1234-5678
                </a>
              </div>
              <div>
                <p className="text-light/70 text-sm">WhatsApp</p>
                <a href="https://wa.me/5511987654321" className="text-secondary hover:text-secondary/80 transition-colors">
                  (11) 98765-4321
                </a>
              </div>
              <div>
                <p className="text-light/70 text-sm">Email</p>
                <a href="mailto:contato@fluxo.com.br" className="text-secondary hover:text-secondary/80 transition-colors">
                  contato@fluxo.com.br
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="py-8 flex flex-col md:flex-row justify-between items-center text-light/50 text-sm"
        >
          <p>
            © {currentYear} FLUXO - Serigrafia & Gráfica. Todos os direitos reservados.
          </p>
          <motion.div
            className="flex gap-6 mt-4 md:mt-0"
            whileHover={{ gap: 24 }}
            transition={{ duration: 0.3 }}
          >
            <a href="#" className="hover:text-secondary transition-colors">Privacidade</a>
            <a href="#" className="hover:text-secondary transition-colors">Termos</a>
            <a href="#" className="hover:text-secondary transition-colors">Cookies</a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.a
        href="#home"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-secondary text-dark rounded-full flex items-center justify-center font-bold text-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:shadow-secondary/50 z-40"
      >
        ↑
      </motion.a>
    </footer>
  )
}

export default Footer
