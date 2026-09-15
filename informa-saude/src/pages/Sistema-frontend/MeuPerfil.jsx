import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Settings, KeyRound, LogOut, ChevronRight } from 'lucide-react';
import fotoPerfil from '../../assets/images/foto-perfil.png';
import SystemNavbar from '../../components/SystemNavbar/SystemNavbar';

export function MeuPerfil() {
  const navigate = useNavigate();
  const [modalSair, setModalSair] = useState(false);
  const [modalSenha, setModalSenha] = useState(false);
  const [modalSenhaSucesso, setModalSenhaSucesso] = useState(false);

  const handleConfirmarSair = () => {
    setModalSair(false);
    navigate('/');
  };

  const handleSalvarSenha = (e) => {
    e.preventDefault();
    setModalSenha(false);
    setModalSenhaSucesso(true);
  };

  return (
    <div className="bg-light min-vh-100 pb-5">
      <SystemNavbar />

      <main className="is-container py-4">
        <div className="mb-4">
          <h1 className="fw-bold text-dark fs-2 mb-1">Meu Perfil</h1>
          <p className="text-muted fs-6 mb-0">Gerencie seus dados pessoais, senha e preferências do sistema</p>
        </div>

        <div className="row g-4">
          
          <div className="col-12 col-lg-4">
            <div className="bg-white rounded-4 shadow-sm p-4 text-center border-0">
              <div className="d-flex justify-content-center mb-3">
                <img 
                  src={fotoPerfil} 
                  alt="João Da Silva" 
                  className="rounded-circle object-fit-cover shadow-sm border border-3 border-success-subtle is-profile-avatar" 
                />
              </div>
              <h3 className="fw-bold text-dark fs-3 mb-1">João Da Silva</h3>
              <p className="text-muted fs-6 mb-0">joao.silva@exemplo.com</p>
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <div className="bg-white rounded-4 shadow-sm p-4 border-0">
              <h4 className="fw-bold text-dark fs-4 mb-4">Opções da Conta</h4>

              <div className="d-flex flex-column gap-3">
                <Link 
                  to="/editar-perfil" 
                  className="d-flex align-items-center justify-content-between p-3 rounded-3 bg-light text-decoration-none text-dark border"
                >
                  <div className="d-flex align-items-center gap-3">
                    <div className="is-icon-chip mb-0 rounded-circle is-profile-icon">
                      <User size={22} />
                    </div>
                    <div>
                      <span className="fw-bold fs-5 d-block">Editar Perfil</span>
                      <span className="text-muted fs-6">Atualizar nome, e-mail, telefone e data de nascimento</span>
                    </div>
                  </div>
                  <ChevronRight size={22} className="text-muted" />
                </Link>

                <Link 
                  to="/configuracoes" 
                  className="d-flex align-items-center justify-content-between p-3 rounded-3 bg-light text-decoration-none text-dark border"
                >
                  <div className="d-flex align-items-center gap-3">
                    <div className="is-icon-chip mb-0 rounded-circle is-profile-icon">
                      <Settings size={22} />
                    </div>
                    <div>
                      <span className="fw-bold fs-5 d-block">Configurações</span>
                      <span className="text-muted fs-6">Gerenciar notificações e opções da conta</span>
                    </div>
                  </div>
                  <ChevronRight size={22} className="text-muted" />
                </Link>

                <button 
                  type="button"
                  className="d-flex align-items-center justify-content-between p-3 rounded-3 bg-light text-decoration-none text-dark border w-100 text-start"
                  onClick={() => setModalSenha(true)}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div className="is-icon-chip mb-0 rounded-circle is-profile-icon">
                      <KeyRound size={22} />
                    </div>
                    <div>
                      <span className="fw-bold fs-5 d-block">Alterar Senha</span>
                      <span className="text-muted fs-6">Atualizar sua senha de acesso ao sistema</span>
                    </div>
                  </div>
                  <ChevronRight size={22} className="text-muted" />
                </button>

                <button 
                  type="button"
                  className="d-flex align-items-center justify-content-between p-3 rounded-3 bg-light text-decoration-none text-dark border w-100 text-start"
                  onClick={() => setModalSair(true)}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div className="is-icon-chip mb-0 rounded-circle is-profile-icon">
                      <LogOut size={22} />
                    </div>
                    <div>
                      <span className="fw-bold fs-5 d-block text-danger">Sair da Conta</span>
                      <span className="text-muted fs-6">Encerrar a sessão atual com segurança</span>
                    </div>
                  </div>
                  <ChevronRight size={22} className="text-muted" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>

      {modalSenha && (
        <div className="is-modal-overlay" onClick={() => setModalSenha(false)}>
          <div 
            className="bg-white rounded-4 shadow-lg border-0 position-relative is-modal-box is-modal-box-sm p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="alterar-senha-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              type="button" 
              className="btn-close position-absolute top-0 end-0 m-3 z-3"
              onClick={() => setModalSenha(false)}
              aria-label="Fechar"
            ></button>

            <h3 id="alterar-senha-modal-title" className="fw-bold text-dark fs-4 mb-3">Alterar Senha</h3>

            <form onSubmit={handleSalvarSenha}>
              <div className="is-form-group mb-2">
                <label htmlFor="senha-atual" className="is-form-label mb-1 fs-6">Senha Atual</label>
                <input id="senha-atual" type="password" className="is-form-input w-100 py-2 fs-6" placeholder="Digite sua senha atual" required />
              </div>

              <div className="is-form-group mb-2">
                <label htmlFor="nova-senha" className="is-form-label mb-1 fs-6">Nova Senha</label>
                <input id="nova-senha" type="password" className="is-form-input w-100 py-2 fs-6" placeholder="Digite a nova senha" required />
              </div>

              <div className="is-form-group mb-3">
                <label htmlFor="confirmar-nova-senha" className="is-form-label mb-1 fs-6">Confirmar Nova Senha</label>
                <input id="confirmar-nova-senha" type="password" className="is-form-input w-100 py-2 fs-6" placeholder="Confirme a nova senha" required />
              </div>

              <div className="is-modal-actions">
                <button type="submit" className="is-btn is-btn--profile is-btn--orange fs-6">
                  Salvar Nova Senha
                </button>
                <button
                  type="button"
                  className="is-btn is-btn--profile is-btn--outline-green fs-6"
                  onClick={() => setModalSenha(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {modalSenhaSucesso && (
        <div className="is-modal-overlay" onClick={() => setModalSenhaSucesso(false)}>
          <div 
            className="bg-white rounded-4 shadow-lg border-0 position-relative is-modal-box is-modal-box-sm p-4 text-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="senha-alterada-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="senha-alterada-modal-title" className="fw-bold text-success fs-3 mb-2">Senha Alterada!</h3>
            <p className="text-muted fs-6 mb-4">
              Sua senha foi atualizada com sucesso.
            </p>
            <button 
              type="button" 
              className="is-btn is-btn--profile is-btn--orange w-100 fs-6"
              onClick={() => setModalSenhaSucesso(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}

      {modalSair && (
        <div className="is-modal-overlay" onClick={() => setModalSair(false)}>
          <div
            className="bg-white rounded-4 shadow-lg border-0 position-relative is-modal-box is-modal-box-sm p-4 pt-5"
            role="dialog"
            aria-modal="true"
            aria-labelledby="sair-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 m-3 z-3"
              onClick={() => setModalSair(false)}
              aria-label="Fechar"
            ></button>
            <h3 id="sair-modal-title" className="fw-bold text-dark fs-4 mb-2">Sair do aplicativo?</h3>
            <p className="text-muted fs-6 mb-4">
              Você precisará preencher suas credenciais ao acessar novamente.
            </p>
            <div className="is-modal-actions">
              <button type="button" className="is-btn is-btn--profile is-btn--orange fs-6" onClick={handleConfirmarSair}>
                Sim, sair
              </button>
              <button type="button" className="is-btn is-btn--profile is-btn--outline-green fs-6" onClick={() => setModalSair(false)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default MeuPerfil;