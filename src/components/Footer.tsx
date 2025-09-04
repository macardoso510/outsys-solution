import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'
import Logo from './Logo'

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <Logo size="md" variant="full" theme="dark" />
            </Link>
            <p className="text-gray-300 mb-6">
              Transformamos tecnologia em soluções que qualquer empresa pode usar.
              Soluções modernas para gestão de empresas de todos os tamanhos.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary transition-colors duration-200">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-secondary transition-colors duration-200">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-300 hover:text-secondary transition-colors duration-200">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-secondary transition-colors duration-200">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Sistema Domus</li>
              <li className="text-gray-300">Desenvolvimento de Software</li>
              <li className="text-gray-300">Consultoria Tecnológica</li>
              <li className="text-gray-300">Suporte Técnico</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-secondary" />
                <span className="text-gray-300">contato@outsyssolution.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-secondary" />
                <span className="text-gray-300">+55 (11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-secondary" />
                <span className="text-gray-300">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2025 OutSys Solution. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-200">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-300 hover:text-secondary transition-colors duration-200">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
