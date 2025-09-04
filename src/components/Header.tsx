import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Contato', href: '/contato' },
  ]

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
            style={!isScrolled ? { filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' } : {}}
          >
            <Logo
              size="md"
              variant="full"
              theme={isScrolled ? 'light' : 'dark'}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-all duration-200 relative py-2 ${
                  location.pathname === item.href
                    ? isScrolled
                      ? 'text-primary'
                      : 'text-white font-semibold'
                    : isScrolled
                    ? 'text-neutral-dark hover:text-primary'
                    : 'text-white hover:text-secondary drop-shadow-sm'
                }`}
                style={!isScrolled ? { textShadow: '0 2px 4px rgba(0,0,0,0.6)' } : {}}
              >
                {item.name}
                {/* Active indicator line */}
                {location.pathname === item.href && (
                  <div
                    className={`absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300 ${
                      isScrolled ? 'bg-primary' : 'bg-white'
                    }`}
                    style={!isScrolled ? { boxShadow: '0 2px 4px rgba(0,0,0,0.3)' } : {}}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contato"
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg ${
                isScrolled
                  ? 'bg-secondary text-white hover:bg-opacity-90 hover:shadow-xl'
                  : 'bg-white text-primary hover:bg-opacity-90 hover:shadow-xl'
              }`}
              style={!isScrolled ? { boxShadow: '0 4px 12px rgba(0,0,0,0.15)' } : {}}
            >
              Fale Conosco
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-all duration-200 ${
              isScrolled
                ? 'text-neutral-dark hover:bg-neutral-light'
                : 'text-white hover:bg-white/10'
            }`}
            style={!isScrolled ? { filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.6))' } : {}}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md shadow-xl border-t border-gray-100">
          <div className="container-custom py-6">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium py-3 px-4 rounded-lg transition-all duration-200 ${
                    location.pathname === item.href
                      ? 'text-primary bg-primary/5 border-l-4 border-primary'
                      : 'text-neutral-dark hover:text-primary hover:bg-neutral-light/50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contato"
                onClick={() => setIsOpen(false)}
                className="bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 text-center mt-6 shadow-lg hover:shadow-xl"
              >
                Fale Conosco
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
