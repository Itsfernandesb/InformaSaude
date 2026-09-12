import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, CheckCircle2, AlertTriangle, ArrowLeft, ChevronDown } from 'lucide-react';
import logoImg from '../../assets/images/logo.svg';

export function ModalLogin({ onClose, abaInicial = 'login' }) {
  const navigate = useNavigate();
  const [modoForm, setModoForm] = useState(abaInicial);
  const [etapaCadastro, setEtapaCadastro] = useState(1);

  // Trava a rolagem do fundo enquanto o modal estiver aberto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Estados do Login
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  // Estados do Cadastro (Etapa 1)
  const [nomeCadastro, setNomeCadastro] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [sexo, setSexo] = useState('');
  const [dropdownSexoAberto, setDropdownSexoAberto] = useState(false);

  // Estados do Cadastro (Etapa 2)
  const [emailCadastro, setEmailCadastro] = useState('');
  const [telefoneCadastro, setTelefoneCadastro] = useState('');
  const [senhaCadastro, setSenhaCadastro] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  // Toggles de visibilidade de senha
  const [verSenha, setVerSenha] = useState(false);
  const [verConfirmarSenha, setVerConfirmarSenha] = useState(false);

  // Modais de Retorno (Feedbacks)
  const [modalSucesso, setModalSucesso] = useState(false);
  const [modalAlerta, setModalAlerta] = useState(false);

  const handleEntrar = (e) => {
    e.preventDefault();
    onClose();
    navigate('/perfil');
  };

  const handleAvancarCadastroEtapa1 = (e) => {
    e.preventDefault();
    setEtapaCadastro(2);
  };

  const handleFinalizarCadastro = (e) => {
    e.preventDefault();
    if (emailCadastro === 'existe@exemplo.com') {
      setModalAlerta(true);
      return;
    }
    setModalSucesso(true);
  };

  const handleIrParaQuestionario = () => {
    setModalSucesso(false);
    onClose();
    navigate('/questionario');
  };

  const handleIrParaPerfilDireto = () => {
    setModalSucesso(false);
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
          
          {/* Painel Lateral Verde (Banner Superior no Mobile) */}
          <div className="col-12 col-md-5 is-footer-green py-3 px-4 p-md-4 d-flex flex-column justify-content-between text-white position-relative">
            <div className="d-flex align-items-center justify-content-between justify-content-md-start w-100">
              <img src={logoImg} alt="InformaSaúde" className="is-logo-white is-modal-logo mb-0 mb-md-3" />
              <button 
                type="button" 
                className="btn-close btn-close-white d-md-none"
                onClick={onClose}
                aria-label="Fechar"
              ></button>
            </div>
            <div>
              <h4 className="fw-bold text-white mb-2 fs-4 d-none d-md-block">Sua jornada de saúde começa aqui!</h4>
              <p className="text-white-50 fs-6 m-0 d-none d-md-block">
                Informações claras, acessíveis e seguras para você.
              </p>
            </div>

            <div className="pt-2 border-top border-white border-opacity-25 fs-6 text-white-50 d-none d-md-block">
              © 2026 Informa Saúde
            </div>
          </div>

          {/* Conteúdo Principal do Modal */}
          <div className="col-12 col-md-7 p-3 p-md-4 bg-white position-relative is-modal-content-col">
            <button 
              type="button" 
              className="btn-close position-absolute top-0 end-0 m-3 z-3 d-none d-md-block"
              onClick={onClose}
              aria-label="Fechar"
            ></button>

            {/* Modal de Sucesso (Feedback) */}
            {modalSucesso ? (
              <div className="py-3 text-center d-flex flex-column align-items-center justify-content-center h-100">
                <CheckCircle2 size={56} className="text-success mb-2" />
                <h4 className="fw-bold text-dark fs-4 mb-1">Cadastro criado com sucesso!</h4>
                <p className="text-muted fs-6 mb-3">Agora você já tem acesso completo ao Informa Saúde!</p>
                
                <div className="d-flex flex-column gap-2 w-100 max-w-sm">
                  <button 
                    type="button" 
                    className="is-btn is-btn--orange w-100 fs-6 py-2"
                    onClick={handleIrParaQuestionario}
                  >
                    Acessar minha conta
                  </button>
                </div>
              </div>
            ) : modalAlerta ? (
              /* Modal de Alerta (Feedback Dados Existentes) */
              <div className="py-3 text-center d-flex flex-column align-items-center justify-content-center h-100">
                <AlertTriangle size={56} className="text-warning mb-2" />
                <h4 className="fw-bold text-dark fs-4 mb-1">Atenção!</h4>
                <p className="text-muted fs-6 mb-1">E-mail ou telefone já cadastrados em nosso banco de dados.</p>
                <p className="text-muted fs-6 mb-3">Favor confira os dados digitados e tente novamente.</p>
                
                <div className="d-flex flex-column gap-2 w-100 max-w-sm">
                  <button 
                    type="button" 
                    className="is-btn is-btn--orange w-100 fs-6 py-2"
                    onClick={() => {
                      setModalAlerta(false);
                      setModoForm('login');
                    }}
                  >
                    Acessar minha conta
                  </button>
                  <button 
                    type="button" 
                    className="is-btn is-btn--outline-green w-100 fs-6 py-2"
                    onClick={() => setModalAlerta(false)}
                  >
                    Tentar novamente
                  </button>
                </div>
              </div>
            ) : (
              /* Formulários Padrão */
              <div>
                {/* Cabeçalho Limpo */}
                <div className="mb-2 pe-4">
                  {modoForm === 'cadastro' && etapaCadastro === 2 && (
                    <button 
                      type="button"
                      className="btn p-0 border-0 text-secondary d-inline-flex align-items-center gap-1 fs-6 mb-1"
                      onClick={() => setEtapaCadastro(1)}
                      title="Voltar para a etapa 1"
                      aria-label="Voltar para a etapa 1"
                    >
                      <ArrowLeft size={16} /> Voltar
                    </button>
                  )}
                  <h4 className="fw-bold text-dark fs-4 mb-0">
                    {modoForm === 'cadastro' ? 'Criar sua conta' : 'Acessar conta'}
                  </h4>
                </div>

                {/* MODO 1: LOGIN E SENHA */}
                {modoForm === 'login' && (
                  <form onSubmit={handleEntrar}>
                    <div className="is-form-group">
                      <label className="is-form-label">Usuário ou E-mail</label>
                      <input 
                        type="text" 
                        className="form-control is-form-input w-100" 
                        placeholder="Digite seu usuário ou e-mail"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        required
                      />
                    </div>

                    <div className="is-form-group">
                      <label className="is-form-label">Senha</label>
                      <input 
                        type="password" 
                        className="form-control is-form-input w-100" 
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                      />
                    </div>

                    <div className="text-end mb-2">
                      <a href="#esqueci" className="text-decoration-none fw-bold fs-6 text-dark">
                        Esqueci minha senha
                      </a>
                    </div>

                    <div className="d-flex flex-column gap-2 mt-2">
                      <button type="submit" className="is-btn is-btn--orange w-100 fs-6 py-2">
                        Acessar conta
                      </button>

                      {/* Divisor Visual OU */}
                      <div className="d-flex align-items-center gap-2 my-1">
                        <hr className="flex-fill my-0 text-muted opacity-25" />
                        <span className="text-muted fs-6 fw-semibold">OU</span>
                        <hr className="flex-fill my-0 text-muted opacity-25" />
                      </div>

                      {/* Botão de Login com Google */}
                      <button 
                        type="button" 
                        className="btn is-btn-google w-100 py-2 fs-6 d-flex align-items-center justify-content-center"
                        onClick={() => alert('Integração com Google Login em breve!')}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" className="me-2">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                        </svg>
                        Entrar com o Google
                      </button>
                    </div>

                    {/* Link Limpo para Cadastro */}
                    <div className="text-center mt-3 pt-2 border-top">
                      <span className="text-muted fs-6">Ainda não tem conta? </span>
                      <button 
                        type="button" 
                        className="is-link-button fs-6" 
                        onClick={() => {
                          setModoForm('cadastro');
                          setEtapaCadastro(1);
                        }}
                      >
                        Criar conta gratis
                      </button>
                    </div>
                  </form>
                )}

                {/* MODO 2: CRIAR CONTA (Etapa 1 e Etapa 2) */}
                {modoForm === 'cadastro' && (
                  <div>
                    {/* ETAPA 1: Dados Pessoais */}
                    {etapaCadastro === 1 && (
                      <form onSubmit={handleAvancarCadastroEtapa1}>
                        <div className="is-form-group">
                          <label className="is-form-label">Nome Completo</label>
                          <input 
                            type="text" 
                            className="form-control is-form-input w-100" 
                            placeholder="Digite seu nome completo"
                            value={nomeCadastro}
                            onChange={(e) => setNomeCadastro(e.target.value)}
                            required
                          />
                        </div>

                        <div className="is-form-group">
                          <label className="is-form-label">Data de aniversário</label>
                          <input 
                            type="text" 
                            className="form-control is-form-input w-100" 
                            placeholder="dd/mm/aaaa"
                            maxLength={10}
                            value={dataNascimento}
                            onChange={(e) => {
                              let v = e.target.value.replace(/\D/g, '');
                              if (v.length > 2) v = v.replace(/^(\d{2})/, '$1/');
                              if (v.length > 5) v = v.replace(/^(\d{2})\/(\d{2})/, '$1/$2/');
                              setDataNascimento(v);
                            }}
                            required
                          />
                        </div>

                        {/* Radio Buttons com estrutura padrão Bootstrap form-check */}
                        <div className="is-form-group">
                          <label className="is-form-label mb-2">Sexo</label>
                          <div className="d-flex flex-column gap-2 ms-1">
                            <div className="form-check">
                              <input 
                                className="form-check-input" 
                                type="radio" 
                                name="sexoRadio" 
                                id="sexoFem"
                                value="Feminino"
                                checked={sexo === 'Feminino'}
                                onChange={(e) => setSexo(e.target.value)}
                                required
                              />
                              <label className="form-check-label text-dark fs-6" htmlFor="sexoFem">
                                Feminino
                              </label>
                            </div>
                            
                            <div className="form-check">
                              <input 
                                className="form-check-input" 
                                type="radio" 
                                name="sexoRadio" 
                                id="sexoMasc"
                                value="Masculino"
                                checked={sexo === 'Masculino'}
                                onChange={(e) => setSexo(e.target.value)}
                                required
                              />
                              <label className="form-check-label text-dark fs-6" htmlFor="sexoMasc">
                                Masculino
                              </label>
                            </div>

                            <div className="form-check">
                              <input 
                                className="form-check-input" 
                                type="radio" 
                                name="sexoRadio" 
                                id="sexoOutro"
                                value="Outro / Prefiro não informar"
                                checked={sexo === 'Outro / Prefiro não informar'}
                                onChange={(e) => setSexo(e.target.value)}
                                required
                              />
                              <label className="form-check-label text-dark fs-6" htmlFor="sexoOutro">
                                Outro / Prefiro não informar
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="d-flex flex-column gap-2 mt-3">
                          <button type="submit" className="is-btn is-btn--orange w-100 fs-6 py-2">
                            Avançar
                          </button>
                        </div>
                      </form>
                    )}

                    {/* ETAPA 2: Contato e Segurança (Campos Empilhados + Máscara de Telefone) */}
                    {etapaCadastro === 2 && (
                      <form onSubmit={handleFinalizarCadastro}>
                        <div className="is-form-group">
                          <label className="is-form-label">E-mail</label>
                          <input 
                            type="email" 
                            className="form-control is-form-input w-100" 
                            placeholder="seuemail@exemplo.com"
                            value={emailCadastro}
                            onChange={(e) => setEmailCadastro(e.target.value)}
                            required
                          />
                        </div>

                        <div className="is-form-group">
                          <label className="is-form-label">Telefone</label>
                          <input 
                            type="tel" 
                            className="form-control is-form-input w-100" 
                            placeholder="(51) 9 9999-9999"
                            maxLength={15}
                            value={telefoneCadastro}
                            onChange={(e) => {
                              // Máscara automática de telefone (51) 99999-9999
                              let v = e.target.value.replace(/\D/g, '');
                              if (v.length > 2) v = v.replace(/^(\d{2})/, '($1) ');
                              if (v.length > 7) v = v.replace(/^\((\d{2})\)\s(\d{5})/, '($1) $2-');
                              setTelefoneCadastro(v);
                            }}
                            required
                          />
                        </div>

                        <div className="is-form-group position-relative">
                          <label className="is-form-label">Senha</label>
                          <div className="position-relative">
                            <input 
                              type={verSenha ? 'text' : 'password'} 
                              className="form-control is-form-input w-100 pe-5" 
                              placeholder="••••••••"
                              value={senhaCadastro}
                              onChange={(e) => setSenhaCadastro(e.target.value)}
                              required
                            />
                            <button 
                              type="button"
                              className="btn border-0 position-absolute end-0 top-50 translate-middle-y text-muted p-2 me-1"
                              onClick={() => setVerSenha(!verSenha)}
                              aria-label={verSenha ? "Ocultar senha" : "Mostrar senha"}
                            >
                              {verSenha ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                          </div>
                        </div>

                        <div className="is-form-group position-relative">
                          <label className="is-form-label">Confirmar Senha</label>
                          <div className="position-relative">
                            <input 
                              type={verConfirmarSenha ? 'text' : 'password'} 
                              className="form-control is-form-input w-100 pe-5" 
                              placeholder="••••••••"
                              value={confirmarSenha}
                              onChange={(e) => setConfirmarSenha(e.target.value)}
                              required
                            />
                            <button 
                              type="button"
                              className="btn border-0 position-absolute end-0 top-50 translate-middle-y text-muted p-2 me-1"
                              onClick={() => setVerConfirmarSenha(!verConfirmarSenha)}
                              aria-label={verConfirmarSenha ? "Ocultar senha" : "Mostrar senha"}
                            >
                              {verConfirmarSenha ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                          </div>
                        </div>

                        {/* Box Compacto de Requisitos de Senha (Localizado Abaixo das Senhas) */}
                        <div className="is-password-checklist my-2">
                          <strong className="d-block mb-0.5 text-dark fs-6">Requisitos da senha:</strong>
                          <ul className="mb-0">
                            <li>Mínimo 6 caracteres | 1 símbolo (@#%*)</li>
                            <li>Uma letra maiúscula, uma minúscula e um número</li>
                          </ul>
                        </div>

                        <div className="mt-3">
                          <button type="submit" className="is-btn is-btn--orange w-100 fs-6 py-2">
                            Finalizar Cadastro
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                )}
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}

export default ModalLogin;