import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './NewPassword.css'


function ResetPassword() {
  const navigate = useNavigate()
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (newPassword.length < 8) {
      setErrorMessage('A senha deve ter no mínimo 8 dígitos.')
      return
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage('As senhas não coincidem!')
      return
    }

    setErrorMessage('')
    setIsSuccessModalOpen(true)
  }

  const handleModalContinue = () => {
    setIsSuccessModalOpen(false)
    navigate('/')
  }

  return (
    <div className="reset-container">
      <Link to="/esqueci-senha" className="btn-back">
        &#8249;
      </Link>

      <h2 className="title">Digite uma nova senha</h2>
      <p className="subtitle">
        Digite sua nova senha. Ela deve ter no mínimo 8 dígitos.
      </p>

      <form onSubmit={handleSubmit} className="reset-form">
        <div className="input-group">
          <label>Digite sua nova senha</label>
          <div className="input-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Digite sua nova senha"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value)
                if (errorMessage) setErrorMessage('')
              }}
              required
            />
            <button
              type="button"
              className="toggle-eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁
            </button>
          </div>
        </div>

        <div className="input-group">
          <label>Confirme sua nova senha</label>
          <div className="input-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirme sua nova senha"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value)
                if (errorMessage) setErrorMessage('')
              }}
              required
            />
            <button
              type="button"
              className="toggle-eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁
            </button>
          </div>
        </div>

        {errorMessage && (
          <p className="error-message">
            {errorMessage}
          </p>
        )}

        <button type="submit" className="btn-submit">
          Alterar senha
        </button>
      </form>

      {isSuccessModalOpen && (
        <div className="modal-overlay-RecoverEmailGet">
          <div className="modal-content-RecoverEmailGet">
            <div className="modal-icon-RecoverEmailGet">
              <svg viewBox="0 0 24 24" width="36" height="36" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h2 className="modal-title-RecoverEmailGet">
              Senha alterada com sucesso!
            </h2>
            <p className="modal-text-RecoverEmailGet">
              Sua senha foi redefinida. Clique em continuar para prosseguir.
            </p>
            <div className="modal-actions-RecoverEmailGet">
              <button
                type="button"
                className="btn-continue-RecoverEmailGet"
                onClick={handleModalContinue}
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ResetPassword