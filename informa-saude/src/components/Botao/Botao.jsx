import React from 'react';

export function Botao({
  children,
  onClick,
  variante = 'orange',
  tamanho = 'md',
  desabilitado = false,
  tipo = 'button',
  larguraTotal = false,
  className = ''
}) {
  const obterClasseVariante = () => {
    switch (variante) {
      case 'orange':
        return 'is-btn--orange';
      case 'outline-green':
        return 'is-btn--outline-green';
      case 'green':
        return 'is-btn--green';
      case 'secondary':
        return 'btn-secondary opacity-50';
      default:
        return 'is-btn--orange';
    }
  };

  const obterClasseTamanho = () => {
    if (tamanho === 'sm') return 'is-btn-sm';
    if (tamanho === 'md') return 'is-btn--profile';
    return '';
  };

  return (
    <button
      type={tipo}
      onClick={onClick}
      disabled={desabilitado}
      className={`is-btn ${obterClasseVariante()} ${obterClasseTamanho()} ${larguraTotal ? 'w-100' : ''} ${className}`}
    >
      {children}
    </button>
  );
}

export default Botao;
