import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import fotoPerfil from '../../assets/images/foto-perfil.png';
import logoImg from '../../assets/images/logo.svg';

export function SystemNavbar() {
  const navigate = useNavigate();
  const [modalSair, setModalSair] = useState(false);

  const confirmarSaida = () => {
    setModalSair(false);
    navigate('/');
  };

  return (
    <>
      <div className="is-top-accessibility-bar py-1 px-3 border-bottom fs-6">
        <div className="is-container d-flex justify-content-between align-items-center">
          <div className="d-none d-md-block fs-6">Acessibilidade:</div>
          <div className="d-flex align-items-center gap-3 ms-auto fs-6">
            <span>Tamanho do texto:</span>
            <button type="button" onClick={() => {
              document.documentElement.classList.remove('font-reduzida');
              document.documentElement.classList.add('font-aumentada');
            }} className="is-acc-btn" title="Aumentar Texto">A+</button>
            <button type="button" onClick={() => {
              document.documentElement.classList.remove('font-aumentada');
              document.documentElement.classList.add('font-reduzida');
            }} className="is-acc-btn" title="Diminuir Texto">A-</button>
            <span className="ms-1 opacity-50">|</span>
            <button type="button" onClick={() => document.documentElement.classList.toggle('alto-contraste')} className="is-acc-btn" title="Alternar Alto Contraste">
              Alto Contraste ◐
            </button>
          </div>
        </div>
      </div>

      <header className="is-navbar sticky-top bg-white border-bottom shadow-sm">
        <nav className="is-container py-2 d-flex align-items-center justify-content-between">
          <Link
            className="navbar-brand m-0 p-0 d-flex align-items-center"
            to="/inicio"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src={logoImg} alt="InformaSaúde" className="is-header-logo" />
          </Link>
          <div className="dropdown">
            <button
              type="button"
              className="is-user-menu d-flex align-items-center gap-2 border-0 bg-transparent"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={fotoPerfil} alt="" className="is-user-menu-avatar rounded-circle" />
              <span className="d-none d-sm-inline fw-bold text-dark">João da Silva</span>
              <ChevronDown size={18} aria-hidden="true" />
            </button>
            <ul className="dropdown-menu dropdown-menu-end shadow-sm">
              <li><Link className="dropdown-item" to="/meu-perfil">Meu Perfil</Link></li>
              <li><Link className="dropdown-item" to="/editar-perfil">Editar Perfil</Link></li>
              <li><Link className="dropdown-item" to="/configuracoes">Configurações</Link></li>
              <li><a className="dropdown-item" href="/404.html">Meus pontos</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <button type="button" className="dropdown-item text-danger" onClick={() => setModalSair(true)}>Sair</button>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {modalSair && (
        <div className="is-modal-overlay" onClick={() => setModalSair(false)}>
          <div
            className="bg-white rounded-4 shadow-lg border-0 position-relative is-modal-box is-modal-box-sm p-4 pt-5"
            role="dialog"
            aria-modal="true"
            aria-labelledby="navbar-sair-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 m-3 z-3"
              onClick={() => setModalSair(false)}
              aria-label="Fechar"
            ></button>
            <h2 id="navbar-sair-modal-title" className="fw-bold text-dark fs-4 mb-2">Sair do aplicativo?</h2>
            <p className="text-muted fs-6 mb-4">
              Você precisará preencher suas credenciais ao acessar novamente.
            </p>
            <div className="is-modal-actions">
              <button type="button" className="is-btn is-btn--profile is-btn--orange fs-6" onClick={confirmarSaida}>
                Sim, sair
              </button>
              <button type="button" className="is-btn is-btn--profile is-btn--outline-green fs-6" onClick={() => setModalSair(false)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SystemNavbar;
