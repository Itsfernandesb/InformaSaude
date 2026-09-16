import React from 'react';

export function BotaoLP({
  children,
  onClick,
  variante = 'orange', // 'orange' | 'green' | 'outline-white' | 'outline-green'
  desabilitado = false,
  tipo = 'button',
  larguraTotal = false,
  isNav = false, // Se true, utiliza .is-nav-btn (altura 40px ideal para Navbar)
  href,
  className = '',
  ariaLabel
}) {
  const baseClass = isNav ? 'is-nav-btn' : 'is-btn';
  const prefix = isNav ? 'is-nav-btn--' : 'is-btn--';

  const obterClasseVariante = () => {
    switch (variante) {
      case 'orange':
        return `${prefix}orange`;
      case 'green':
        return `${prefix}green`;
      case 'outline-white':
        return `${prefix}outline-white`;
      case 'outline-green':
        return `${prefix}outline-green`;
      default:
        return `${prefix}orange`;
    }
  };

  const classes = `${baseClass} ${obterClasseVariante()} ${larguraTotal ? 'w-100' : ''} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        aria-label={ariaLabel}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={tipo}
      onClick={onClick}
      disabled={desabilitado}
      aria-label={ariaLabel}
      className={classes}
    >
      {children}
    </button>
  );
}

export default BotaoLP;
