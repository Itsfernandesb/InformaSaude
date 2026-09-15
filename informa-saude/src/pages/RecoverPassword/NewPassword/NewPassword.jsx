import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NewPassword.css';

 function ResetPassword() {
  const navigate = useNavigate()
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newPassword !== confirmPassword) {
      alert('As senhas não coincidem!')
      return
    }
    alert('Senha alterada com sucesso!')
    navigate('/esqueci-senha')
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
              onChange={(e) => setNewPassword(e.target.value)}
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
              onChange={(e) => setConfirmPassword(e.target.value)}
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

        <button type="submit" className="btn-submit">
          Alterar senha
        </button>
      </form>
    </div>
  );
}

export default ResetPassword