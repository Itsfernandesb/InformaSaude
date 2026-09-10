import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell, Trash2, ArrowLeft } from 'lucide-react';
import fotoPerfil from '../../assets/images/foto-perfil.png';

export function Configuracoes() {
  const navigate = useNavigate();
  const [modalDeletar, setModalDeletar] = useState(false);

  const handleDeletarConta = () => {
    setModalDeletar(false);
    navigate('/');
  };

  return (
    <div className="bg-light min-vh-100 pb-5">
      <header className="is-footer-green py-2 px-3 shadow-sm sticky-top">
        <div className="is-container d-flex align-items-center justify-content-between">
          <Link to="/meu-perfil" className="d-flex align-items-center text-decoration-none text-white gap-2 fs-6 fw-bold">
            <ArrowLeft size={20} /> Voltar para Meu Perfil
          </Link>
          <Link to="/perfil" className="is-nav-btn is-nav-btn--outline-white py-1 px-3 fs-6 text-decoration-none">
            Início
          </Link>
        </div>
      </header>

      <div className="is-footer-green border-top border-white border-opacity-10 py-4">
        <div className="is-container">
          <h1 className="fw-bold text-white fs-2 mb-1">Configurações</h1>
          <p className="text-white-50 fs-6 mb-0">Gerencie preferências de notificação e segurança da conta</p>
        </div>
      </div>

      <main className="is-container py-4">
        <div className="mb-3">
          <Link to="/meu-perfil" className="is-link-green d-inline-flex align-items-center gap-1 fs-6">
            <ArrowLeft size={18} /> Voltar para Meu Perfil
          </Link>
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
              <h4 className="fw-bold text-dark fs-4 mb-4">Preferências do Sistema</h4>

              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-center justify-content-between p-3 rounded-3 bg-light border">
                  <div className="d-flex align-items-center gap-3 me-3">
                    <div className="is-icon-chip mb-0 rounded-circle is-profile-icon flex-shrink-0">
                      <Bell size={22} />
                    </div>
                    <div>
                      <span className="fw-bold fs-5 d-block">Notificações</span>
                      <span className="text-muted fs-6">Receber alertas de novas jornadas e dicas de saúde</span>
                    </div>
                  </div>
                  <div className="form-check form-switch m-0 p-0 flex-shrink-0 fs-4">
                    <input className="form-check-input ms-0 cursor-pointer" type="checkbox" defaultChecked />
                  </div>
                </div>

                <button 
                  type="button"
                  className="d-flex align-items-center justify-content-between p-3 rounded-3 bg-light border w-100 text-start cursor-pointer border-0"
                  onClick={() => setModalDeletar(true)}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div className="is-icon-chip mb-0 rounded-circle is-profile-icon text-danger bg-danger-subtle flex-shrink-0">
                      <Trash2 size={22} className="text-danger" />
                    </div>
                    <div>
                      <span className="fw-bold fs-5 text-danger d-block">Deletar Conta</span>
                      <span className="text-muted fs-6">Excluir permanentemente seus dados do sistema</span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>

      {modalDeletar && (
        <div className="is-modal-overlay" onClick={() => setModalDeletar(false)}>
          <div 
            className="bg-white rounded-4 shadow-lg border-0 position-relative is-modal-box is-modal-box-sm p-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="fw-bold text-danger fs-3 mb-2">Excluir Conta?</h3>
            <p className="text-muted fs-6 mb-4">
              Esta ação é irreversível. Todos os seus pontos e histórico de jornadas serão removidos.
            </p>

            <div className="d-flex flex-column gap-2">
              <button 
                type="button" 
                className="is-btn is-btn--orange bg-danger border-danger w-100 fs-6 py-2"
                onClick={handleDeletarConta}
              >
                Sim, excluir minha conta
              </button>
              <button 
                type="button" 
                className="is-btn is-btn--outline-green w-100 fs-6 py-2"
                onClick={() => setModalDeletar(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Configuracoes;