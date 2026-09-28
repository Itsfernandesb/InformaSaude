import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export function FormInput({
  id,
  label,
  rotulo,
  type = 'text',
  value,
  valor,
  onChange,
  placeholder,
  helpText,
  errorText,
  required = false,
  disabled = false,
  maxLength,
  isPasswordToggle = false,
  icon: IconComponent,
  iconPosition = 'right',
  onIconClick,
  className = '',
  inputClassName = '',
  ...props
}) {
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const inputLabel = label || rotulo;
  const inputValue = value !== undefined ? value : (valor !== undefined ? valor : '');
  const isPassword = type === 'password' || isPasswordToggle;
  const inputType = isPassword ? (senhaVisivel ? 'text' : 'password') : type;

  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  const hasRightIcon = (isPassword && isPasswordToggle) || (IconComponent && iconPosition === 'right');
  const hasLeftIcon = IconComponent && iconPosition === 'left';

  let paddingClass = '';
  if (hasLeftIcon && hasRightIcon) {
    paddingClass = 'ps-5 pe-5';
  } else if (hasLeftIcon) {
    paddingClass = 'ps-5';
  } else if (hasRightIcon || isPassword) {
    paddingClass = 'pe-5';
  }

  return (
    <div className={`is-form-group ${className}`}>
      {inputLabel && (
        <label htmlFor={id} className="form-label is-form-label">
          {inputLabel}
          {required && <span className="text-danger ms-1">*</span>}
        </label>
      )}

      <div className="position-relative w-100">
        {hasLeftIcon && (
          <div className="is-form-input-icon-left d-flex align-items-center">
            {typeof IconComponent === 'function' || typeof IconComponent === 'object' ? (
              <IconComponent size={18} />
            ) : (
              IconComponent
            )}
          </div>
        )}

        <input
          id={id}
          type={inputType}
          className={`form-control is-form-input w-100 ${paddingClass} ${errorText ? 'is-invalid border-danger' : ''} ${inputClassName}`}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          required={required}
          disabled={disabled}
          maxLength={maxLength}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            className="btn border-0 position-absolute end-0 top-50 translate-middle-y text-muted p-2 me-1 d-flex align-items-center justify-content-center"
            onClick={() => setSenhaVisivel(!senhaVisivel)}
            aria-label={senhaVisivel ? `Ocultar ${inputLabel ? inputLabel.toLowerCase() : 'senha'}` : `Mostrar ${inputLabel ? inputLabel.toLowerCase() : 'senha'}`}
            disabled={disabled}
          >
            {senhaVisivel ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}

        {!isPassword && IconComponent && iconPosition === 'right' && (
          <div
            className={`is-form-input-icon-right d-flex align-items-center ${onIconClick ? 'cursor-pointer' : ''}`}
            onClick={onIconClick}
          >
            {typeof IconComponent === 'function' || typeof IconComponent === 'object' ? (
              <IconComponent size={18} />
            ) : (
              IconComponent
            )}
          </div>
        )}
      </div>

      {helpText && !errorText && (
        <span className="is-form-help-text">{helpText}</span>
      )}

      {errorText && (
        <span className="is-form-error-text">{errorText}</span>
      )}
    </div>
  );
}

export default FormInput;
