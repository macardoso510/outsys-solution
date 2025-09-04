import React from 'react'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'full' | 'icon' | 'text' | 'stacked'
  theme?: 'light' | 'dark'
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md', 
  variant = 'full',
  theme = 'light'
}) => {
  const sizes = {
    sm: { width: 120, height: 32, iconSize: 32 },
    md: { width: 150, height: 40, iconSize: 40 },
    lg: { width: 200, height: 56, iconSize: 56 },
    xl: { width: 280, height: 80, iconSize: 80 }
  }

  const currentSize = sizes[size]
  
  // Cores baseadas no tema
  const textColor = theme === 'dark' ? 'text-white' : 'text-primary'
  const subtextColor = theme === 'dark' ? 'text-gray-300' : 'text-neutral-dark'

  // Apenas o ícone
  if (variant === 'icon') {
    return (
      <div className={`inline-flex ${className}`}>
        <svg
          width={currentSize.iconSize}
          height={currentSize.iconSize}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Fundo do círculo com gradiente */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1A3F7A" />
              <stop offset="100%" stopColor="#2AC769" />
            </linearGradient>
          </defs>
          <circle cx="20" cy="20" r="20" fill="url(#logoGradient)" />
          
          {/* Letra O estilizada */}
          <circle cx="20" cy="20" r="12" fill="none" stroke="white" strokeWidth="3" />
          <circle cx="20" cy="20" r="6" fill="white" />
          
          {/* Elementos tecnológicos - linhas de conexão */}
          <line x1="8" y1="12" x2="12" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="32" y1="12" x2="28" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="32" y1="28" x2="28" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="8" y1="28" x2="12" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    )
  }

  // Apenas o texto
  if (variant === 'text') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <span 
          className={`font-heading font-bold ${textColor}`}
          style={{ fontSize: `${currentSize.height * 0.6}px` }}
        >
          OutSys
        </span>
      </div>
    )
  }

  // Logo empilhada (ícone em cima, texto embaixo)
  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center ${className}`}>
        {/* Ícone */}
        <svg
          width={currentSize.iconSize}
          height={currentSize.iconSize}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-2"
        >
          <defs>
            <linearGradient id="logoGradientStacked" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1A3F7A" />
              <stop offset="100%" stopColor="#2AC769" />
            </linearGradient>
          </defs>
          <circle cx="20" cy="20" r="20" fill="url(#logoGradientStacked)" />
          
          <circle cx="20" cy="20" r="12" fill="none" stroke="white" strokeWidth="3" />
          <circle cx="20" cy="20" r="6" fill="white" />
          
          <line x1="8" y1="12" x2="12" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="32" y1="12" x2="28" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="32" y1="28" x2="28" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="8" y1="28" x2="12" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>

        {/* Texto empilhado */}
        <div className="text-center">
          <div 
            className={`font-heading font-bold ${textColor} leading-tight`}
            style={{ fontSize: `${currentSize.height * 0.35}px` }}
          >
            OutSys
          </div>
          <div 
            className={`font-body ${subtextColor} leading-tight`}
            style={{ fontSize: `${currentSize.height * 0.18}px` }}
          >
            Solution
          </div>
        </div>
      </div>
    )
  }

  // Logo completa (ícone + texto)
  return (
    <div className={`inline-flex items-center space-x-3 ${className}`}>
      {/* Ícone */}
      <svg
        width={currentSize.iconSize}
        height={currentSize.iconSize}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1A3F7A" />
            <stop offset="100%" stopColor="#2AC769" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="20" fill="url(#logoGradient)" />
        
        {/* Letra O estilizada com elementos tech */}
        <circle cx="20" cy="20" r="12" fill="none" stroke="white" strokeWidth="3" />
        <circle cx="20" cy="20" r="6" fill="white" />
        
        {/* Elementos de conectividade */}
        <line x1="8" y1="12" x2="12" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="32" y1="12" x2="28" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="32" y1="28" x2="28" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="28" x2="12" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>

      {/* Texto */}
      <div className="flex flex-col">
        <span 
          className={`font-heading font-bold ${textColor} leading-none`}
          style={{ fontSize: `${currentSize.height * 0.55}px` }}
        >
          OutSys
        </span>
        <span 
          className={`font-body ${subtextColor} leading-none mt-0.5`}
          style={{ fontSize: `${currentSize.height * 0.25}px` }}
        >
          Solution
        </span>
      </div>
    </div>
  )
}

export default Logo
