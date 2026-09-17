import React, { useState, useEffect } from 'react';
import './RecoverEmailGet.css';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [maskedEmail, setMaskedEmail] = useState('')

  const [timer, setTimer] = useState(60)
  const [canResend, setCanResend] = useState(false)
  

  useEffect(() => {
    let interval = null
    if (isModalOpen && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000)
    } else if (timer === 0) {
      setCanResend(true)
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isModalOpen, timer])

  const maskEmail = (userEmail) => {
    const parts = userEmail.split('@')
    if (parts.length < 2) return userEmail
    const name = parts[0]
    const domain = parts[1]
    const visibleChars = name.length > 3 ? 3 : 1
    return `${name.substring(0, visibleChars)}*****@${domain}`
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setMaskedEmail(maskEmail(email))
    setIsModalOpen(true)
    startTimer()
  }

  const startTimer = () => {
    setTimer(60)
    setCanResend(false)
  }

  const handleResendCode = () => {
    if (!canResend) return
    console.log('Código reenviado para:', email)
    startTimer()
  }

  return (
    <div className="forgot-container-RecoverEmailGet">
      <div className="forgot-card-RecoverEmailGet">
        <Link className='back-button-RecoverEmailGet' to='/'>&#10094;</Link>
        <h1 className="title-RecoverEmailGet">Esqueci minha senha</h1>
        <p className="subtitle-RecoverEmailGet">
          Por favor, preencha seu e-mail para recuperar sua senha.
        </p>
        <form onSubmit={handleSubmit} className="forgot-form">
          <div className="input-group-RecoverEmailGet">
            <label htmlFor="email">Seu E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button-RecoverEmailGet">
            Recuperar senha
          </button>
        </form>
      </div>
      {isModalOpen && (
        <div className="modal-overlay-RecoverEmailGet">
          <div className="modal-content-RecoverEmailGet">
            <div className="modal-icon-RecoverEmailGet">
              <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h2 className="modal-title-RecoverEmailGet">
              Código enviado com sucesso!
            </h2>
            <p className="modal-text-RecoverEmailGet">
              Seu código de recuperação foi enviado para o e-mail{' '}
              <strong>{maskedEmail}</strong>. Acesse para seguir com a recuperação!
            </p>
            <div className="modal-actions-RecoverEmailGet">
              <button
                type="button"
                className={`btn-primary-RecoverEmailGet ${!canResend ? 'disabled' : ''}`}
                onClick={handleResendCode}
                disabled={!canResend}
              >
                {canResend
                  ? 'Não recebi o código'
                  : `Reenviar código em (${timer}s)`}
              </button>
              <button
                type="button"
                className="btn-secondary-RecoverEmailGet"
                onClick={() => setIsModalOpen(false)}
              >
                Alterar E-mail
              </button>
              <Link className='btn-continue-RecoverEmailGet' to='/verificar-codigo'>Continuar</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ForgotPassword;