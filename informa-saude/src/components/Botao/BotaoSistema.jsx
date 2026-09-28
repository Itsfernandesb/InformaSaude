import React from 'react';

export function BotaoSistema({
  children,
  onClick,
  variante = 'orange',
  tamanho = 'md',
  desabilitado = false,
  tipo = 'button',
  larguraTotal = false,
  className = '',
  ariaLabel
}) {
  const obterClasseVariante = () => {
    switch (variante) {
      case 'orange':
        return 'is-btn--orange';
      case 'outline-green':
        return 'is-btn--outline-green';
      case 'outline-white':
        return 'is-btn--outline-white';
      case 'green':
        return 'is-btn--green';
      case 'danger':
        return 'btn-danger text-white';
      case 'secondary':
        return 'btn-secondary opacity-50';
      default:
        return 'is-btn--orange';
    }
  };

  const obterClasseTamanho = () => {
    if (tamanho === 'sm') return 'is-btn-sm';
    if (tamanho === 'lg') return '';
    return 'is-btn--profile';
  };

  return (
    <button
      type={tipo}
      onClick={onClick}
      disabled={desabilitado}
      aria-label={ariaLabel}
      className={`is-btn ${obterClasseVariante()} ${obterClasseTamanho()} ${larguraTotal ? 'w-100' : ''} ${className}`}
    >
      {children}
    </button>
  );
}

export default BotaoSistema;
