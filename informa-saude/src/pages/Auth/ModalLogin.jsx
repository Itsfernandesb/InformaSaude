import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';

export function ModalLogin({ onClose }) {
  const navigate = useNavigate();
  const [abaAtiva, setAbaAtiva] = useState('login');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleEntrar = (e) => {
    e.preventDefault();
    onClose();
    navigate('/perfil');
  };

  return (
    <div className="is-modal-overlay" onClick={onClose}>
      <div 
        className="bg-white rounded-4 shadow-lg overflow-hidden border-0 position-relative is-modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="row g-0">
          
          <div className="col-12 col-md-5 is-footer-green p-3 p-md-4 d-flex flex-column justify-content-between text-white position-relative">
            <div>
              <img src={logoImg} alt="InformaSaúde" className="is-logo-white is-modal-logo mb-3" />
              <h4 className="fw-bold text-white mb-2 fs-4">Sua jornada de saúde começa aqui!</h4>
              <p className="text-white-50 fs-6 m-0">
                Informações claras, acessíveis e seguras para você.
              </p>
            </div>

            <div className="pt-2 border-top border-white border-opacity-25 fs-6 text-white-50 d-none d-md-block">
              © 2026 Informa Saúde
            </div>
          </div>

          <div className="col-12 col-md-7 p-3 p-md-4 bg-white position-relative">
            <button 
              type="button" 
              className="btn-close position-absolute top-0 end-0 m-3 z-3"
              onClick={onClose}
              aria-label="Fechar"
            ></button>

            <div className="mb-2">
              <h4 className="fw-bold text-dark fs-4 mb-0">Bem-vindo de volta!</h4>
              <p className="text-muted fs-6 mb-0">Escolha como prefere acessar</p>
            </div>

            <div className="d-flex bg-light p-1 rounded-3 mb-3 border-0">
              <button
                type="button"
                className={`btn flex-fill fw-bold rounded-2 py-1 fs-6 border-0 ${abaAtiva === 'login' ? 'bg-white shadow-sm text-dark' : 'text-muted'}`}
                onClick={() => setAbaAtiva('login')}
              >
                Login e Senha
              </button>
              <button
                type="button"
                className={`btn flex-fill fw-bold rounded-2 py-1 fs-6 border-0 ${abaAtiva === 'codigo' ? 'bg-white shadow-sm text-dark' : 'text-muted'}`}
                onClick={() => setAbaAtiva('codigo')}
              >
                Receber código
              </button>
            </div>

            {abaAtiva === 'login' && (
              <form onSubmit={handleEntrar}>
                <div className="is-form-group mb-2">
                  <label className="is-form-label mb-1 fs-6">Usuário</label>
                  <input 
                    type="text" 
                    className="is-form-input w-100 py-2 fs-6" 
                    placeholder="Digite seu usuário"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    required
                  />
                </div>

                <div className="is-form-group mb-1">
                  <label className="is-form-label mb-1 fs-6">Senha</label>
                  <input 
                    type="password" 
                    className="is-form-input w-100 py-2 fs-6" 
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                  />
                </div>

                <div className="text-end mb-3">
                  <a href="#esqueci" className="text-decoration-none fw-bold fs-6 text-dark">
                    Esqueci minha senha
                  </a>
                </div>

                <div className="d-flex flex-column gap-2">
                  <button type="submit" className="is-btn is-btn--orange w-100 fs-6 py-2">
                    Entrar
                  </button>
                  <Link 
                    to="/cadastro" 
                    className="is-btn is-btn--outline-green w-100 fs-6 py-2" 
                    onClick={onClose}
                  >
                    Criar Conta
                  </Link>
                </div>
              </form>
            )}

            {abaAtiva === 'codigo' && (
              <form onSubmit={handleEntrar}>
                <p className="text-muted fs-6 mb-2">
                  Preencha seu e-mail ou telefone para receber o código
                </p>

                <div className="is-form-group mb-2">
                  <label className="is-form-label mb-1 fs-6">E-mail</label>
                  <input 
                    type="email" 
                    className="is-form-input w-100 py-2 fs-6" 
                    placeholder="seuemail@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="text-center fw-bold fs-6 my-1 text-success">
                  OU
                </div>

                <div className="is-form-group mb-3">
                  <label className="is-form-label mb-1 fs-6">Telefone</label>
                  <input 
                    type="tel" 
                    className="is-form-input w-100 py-2 fs-6" 
                    placeholder="(51) 9 9999 - 9999"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                  />
                </div>

                <div className="d-flex flex-column gap-2">
                  <button type="submit" className="is-btn is-btn--orange w-100 fs-6 py-2">
                    Receber código
                  </button>
                  <Link 
                    to="/cadastro" 
                    className="is-btn is-btn--outline-green w-100 fs-6 py-2" 
                    onClick={onClose}
                  >
                    Criar Conta
                  </Link>
                </div>
              </form>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}

export default ModalLogin;