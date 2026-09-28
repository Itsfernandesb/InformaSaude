import React from 'react';

export function HeaderBoasVindas({
  nome = 'João da Silva',
  subtitulo = 'Acesse suas jornadas, pontos e serviços de saúde',
  className = ''
}) {
  return (
    <div className={`mb-4 ${className}`}>
      <h1 className="fw-bold text-dark fs-2 mb-1">
        Bem-vindo de volta, <span className="text-is-green">{nome}!</span>
      </h1>
      {subtitulo && <p className="text-muted fs-6 mb-0">{subtitulo}</p>}
    </div>
  );
}

export default HeaderBoasVindas;
