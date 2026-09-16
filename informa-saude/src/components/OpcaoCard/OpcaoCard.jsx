import React from 'react';
import { Check } from 'lucide-react';

export function OpcaoCard({
  titulo,
  descricao,
  selecionado = false,
  onClick,
  ariaLabel
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selecionado}
      aria-label={ariaLabel || titulo}
      onClick={onClick}
      className={`is-card text-start w-100 h-100 p-4 rounded-4 border-2 transition-all cursor-pointer d-flex flex-column justify-content-between gap-3 ${
        selecionado ? 'is-selected' : ''
      }`}
      style={{
        borderColor: selecionado ? 'var(--is-green)' : 'var(--is-border)',
        backgroundColor: selecionado ? 'var(--is-surface-selected)' : 'var(--is-white)'
      }}
    >
      <div className="d-flex align-items-start justify-content-between w-100 mb-2">
        <h2 className="fw-bold text-dark fs-5 mb-0">{titulo}</h2>
        <div className="flex-shrink-0 ms-2">
          {selecionado ? (
            <div 
              className="rounded-circle d-flex align-items-center justify-content-center text-white" 
              style={{ width: 24, height: 24, backgroundColor: 'var(--is-green)' }}
            >
              <Check size={16} strokeWidth={3} />
            </div>
          ) : (
            <div 
              className="is-questionnaire-option-indicator rounded-circle border border-2 border-secondary opacity-50"
            />
          )}
        </div>
      </div>

      {descricao && (
        <p className="text-muted fs-6 mb-0 flex-grow-1">{descricao}</p>
      )}
    </button>
  );
}

export default OpcaoCard;
