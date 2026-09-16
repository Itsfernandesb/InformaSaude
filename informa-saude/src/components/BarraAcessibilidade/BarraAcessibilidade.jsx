import React from 'react';

export function BarraAcessibilidade() {
  const aumentarTexto = () => {
    document.documentElement.classList.remove('font-reduzida');
    document.documentElement.classList.add('font-aumentada');
  };

  const diminuirTexto = () => {
    document.documentElement.classList.remove('font-aumentada');
    document.documentElement.classList.add('font-reduzida');
  };

  const alternarAltoContraste = () => {
    document.documentElement.classList.toggle('alto-contraste');
  };

  return (
    <div className="is-top-accessibility-bar py-1 px-3 border-bottom fs-6">
      <div className="is-container d-flex justify-content-between align-items-center">
        <div className="d-none d-md-block fs-6">Acessibilidade:</div>
        <div className="d-flex align-items-center gap-3 ms-auto fs-6">
          <span>Tamanho do texto:</span>
          <button 
            type="button" 
            onClick={aumentarTexto} 
            className="is-acc-btn" 
            title="Aumentar Texto"
            aria-label="Aumentar tamanho do texto"
          >
            A+
          </button>
          <button 
            type="button" 
            onClick={diminuirTexto} 
            className="is-acc-btn" 
            title="Diminuir Texto"
            aria-label="Diminuir tamanho do texto"
          >
            A-
          </button>
          <span className="ms-1 opacity-50">|</span>
          <button 
            type="button" 
            onClick={alternarAltoContraste} 
            className="is-acc-btn" 
            title="Alternar Alto Contraste"
            aria-label="Alternar modo de alto contraste"
          >
            Alto Contraste ◐
          </button>
        </div>
      </div>
    </div>
  );
}

export default BarraAcessibilidade;
