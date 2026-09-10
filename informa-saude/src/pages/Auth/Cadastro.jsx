import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export function Cadastro() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = (e) => {
    e.preventDefault();
    navigate('/perfil');
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-4">
      <div className="is-container is-auth-container">
        <div className="bg-white rounded-4 shadow-lg overflow-hidden border">
          
          <div className="is-footer-green p-4 text-center">
            <h2 className="fw-bold text-white mb-0 fs-3">Criar sua conta</h2>
          </div>

          <div className="p-4">
            <form onSubmit={handleCadastro}>
              <div className="is-form-group mb-3">
                <label className="is-form-label">Nome Completo</label>
                <input 
                  type="text" 
                  className="is-form-input w-100" 
                  placeholder="Digite seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>

              <div className="is-form-group mb-3">
                <label className="is-form-label">E-mail</label>
                <input 
                  type="email" 
                  className="is-form-input w-100" 
                  placeholder="seuemail@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="is-form-group mb-4">
                <label className="is-form-label">Senha</label>
                <input 
                  type="password" 
                  className="is-form-input w-100" 
                  placeholder="Crie uma senha segura"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="is-btn is-btn--green w-100 fs-5 py-3 mb-3">
                Criar conta
              </button>
            </form>

            <div className="text-center mt-3 pt-3 border-top">
              <span className="text-muted fs-6">Já tem uma conta? </span>
              <Link to="/login" className="is-link-green fs-6">
                Fazer Login
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Cadastro;