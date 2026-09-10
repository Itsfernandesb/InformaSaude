import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';

export function Login() {
  const navigate = useNavigate();
  const [abaAtiva, setAbaAtiva] = useState('login');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleEntrar = (e) => {
    e.preventDefault();
    navigate('/perfil');
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-4 py-lg-5">
      <div className="is-container is-auth-split-container">
        <div className="bg-white rounded-4 shadow-lg overflow-hidden border">
          <div className="row g-0">
            
            {/* Lado Esquerdo: Painel Institucional Verde */}
            <div className="col-12 col-lg-5 is-footer-green p-4 p-lg-5 d-flex flex-column justify-content-between text-white">
              <div>
                <Link to="/">
                  <img 
                    src={logoImg} 
                    alt="InformaSaúde" 
                    className="is-logo-white mb-4" 
                  />
                </Link>
              </div>

              <div className="my-4 my-lg-0">
                <h2 className="fw-bold fs-2 text-white mb-3">
                  Sua jornada de saúde começa aqui!
                </h2>
                <p className="text-white-50 fs-6 m-0">
                  Informações claras, acessíveis e seguras para cuidar de você e de quem você ama todos os dias.
                </p>
              </div>

              <div className="pt-3 border-top border-white border-opacity-25 fs-6 text-white-50 d-none d-lg-block">
                © 2026 Informa Saúde
              </div>
            </div>

            {/* Lado Direito: Formulário com Abas do Figma */}
            <div className="col-12 col-lg-7 p-4 p-lg-5 bg-white">
              
              <div className="mb-4">
                <h2 className="fw-bold text-dark fs-2 mb-1">Bem-vindo de volta!</h2>
                <p className="text-muted fs-6">Escolha como prefere acessar sua conta</p>
              </div>

              {/* Seletor de Abas (Tabs) */}
              <div className="d-flex bg-light p-1 rounded-3 mb-4 border">
                <button
                  type="button"
                  className={`btn flex-fill fw-bold rounded-2 py-2 px-3 border-0 ${abaAtiva === 'login' ? 'bg-white shadow-sm text-dark' : 'text-muted'}`}
                  onClick={() => setAbaAtiva('login')}
                >
                  Login e Senha
                </button>
                <button
                  type="button"
                  className={`btn flex-fill fw-bold rounded-2 py-2 px-3 border-0 ${abaAtiva === 'codigo' ? 'bg-white shadow-sm text-dark' : 'text-muted'}`}
                  onClick={() => setAbaAtiva('codigo')}
                >
                  Receber código
                </button>
              </div>

              {/* ABA 1: LOGIN E SENHA */}
              {abaAtiva === 'login' && (
                <form onSubmit={handleEntrar}>
                  <div className="is-form-group mb-3">
                    <label className="is-form-label">Usuário</label>
                    <input 
                      type="text" 
                      className="is-form-input w-100" 
                      placeholder="Digite seu usuário"
                      value={usuario}
                      onChange={(e) => setUsuario(e.target.value)}
                      required
                    />
                  </div>

                  <div className="is-form-group mb-2">
                    <label className="is-form-label">Senha</label>
                    <input 
                      type="password" 
                      className="is-form-input w-100" 
                      placeholder="Digite sua senha"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                      required
                    />
                  </div>

                  <div className="text-end mb-4">
                    <a href="#esqueci" className="text-decoration-none fw-bold fs-6 text-dark">
                      Esqueci minha senha
                    </a>
                  </div>

                  <button type="submit" className="is-btn is-btn--orange w-100 fs-5 py-3">
                    Entrar
                  </button>
                </form>
              )}

              {/* ABA 2: RECEBER CÓDIGO */}
              {abaAtiva === 'codigo' && (
                <form onSubmit={handleEntrar}>
                  <p className="text-muted fs-6 mb-3">
                    Preencha seu e-mail ou telefone para receber seu código de acesso rápido
                  </p>

                  <div className="is-form-group mb-3">
                    <label className="is-form-label">E-mail</label>
                    <input 
                      type="email" 
                      className="is-form-input w-100" 
                      placeholder="seuemail@exemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="text-center fw-bold fs-5 my-2 text-success">
                    OU
                  </div>

                  <div className="is-form-group mb-4">
                    <label className="is-form-label">Telefone</label>
                    <input 
                      type="tel" 
                      className="is-form-input w-100" 
                      placeholder="(51) 9 9999 - 9999"
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="is-btn is-btn--orange w-100 fs-5 py-3">
                    Receber código
                  </button>
                </form>
              )}

              <div className="d-flex justify-content-between align-items-center mt-4 pt-3 border-top fs-6">
                <Link to="/" className="is-link-green">
                  ← Voltar ao Início
                </Link>
                <div>
                  <span className="text-muted">Não tem conta? </span>
                  <Link to="/cadastro" className="is-link-green">
                    Criar conta
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;