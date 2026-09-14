import { Eye, EyeOff } from 'lucide-react';

export function CampoSenha({ id, rotulo, valor, onChange, visivel, onAlternar }) {
  return (
    <div className="is-form-group position-relative">
      <label htmlFor={id} className="form-label is-form-label">
        {rotulo}
      </label>

      <div className="position-relative">
        <input
          id={id}
          type={visivel ? 'text' : 'password'}
          className="form-control is-form-input w-100 pe-5"
          placeholder="••••••••"
          value={valor}
          onChange={(e) => onChange(e.target.value)}
          required
        />
        <button
          type="button"
          className="btn border-0 position-absolute end-0 top-50 translate-middle-y text-muted p-2 me-1"
          onClick={onAlternar}
          aria-label={visivel ? `Ocultar ${rotulo.toLowerCase()}` : `Mostrar ${rotulo.toLowerCase()}`}
        >
          {visivel ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
    </div>
  );
}

export default CampoSenha;
