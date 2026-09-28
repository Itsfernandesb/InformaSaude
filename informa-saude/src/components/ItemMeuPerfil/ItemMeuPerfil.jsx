import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';


export function ItemMeuPerfil({
  icone,
  titulo,
  descricao,
  to,
  onClick,
  perigo = false
}) {
  const conteudoInner = (
    <>
      <div className="d-flex align-items-center gap-3 flex-grow-1 text-start">
        {icone && (
          <div className="is-icon-chip mb-0 rounded-circle is-profile-icon flex-shrink-0">
            {icone}
          </div>
        )}
        <div className="flex-grow-1 text-start">
          <span className={`fw-bold fs-5 d-block ${perigo ? 'text-danger' : 'text-dark'}`}>
            {titulo}
          </span>
          {descricao && (
            <span className="text-muted fs-6 d-block">{descricao}</span>
          )}
        </div>
      </div>
      <ChevronRight size={22} className="text-muted ms-2 flex-shrink-0" />
    </>
  );

  const classeBase = "d-flex align-items-center justify-content-between p-3 rounded-3 bg-light text-decoration-none text-dark border w-100 text-start transition-all";

  if (to) {
    return (
      <Link to={to} className={classeBase}>
        {conteudoInner}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classeBase}>
      {conteudoInner}
    </button>
  );
}

export default ItemMeuPerfil;
