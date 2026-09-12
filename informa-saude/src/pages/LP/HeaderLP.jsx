import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImagem from '../../assets/images/logo.svg';

export function HeaderLP({ onAbrirLogin, onAbrirCadastro }) {
  const [open, setOpen] = useState(false);

  const handleAcessibilidade = (acao) => {
    if (acao === 'aumentar') {
      document.documentElement.classList.remove('font-reduzida');
      document.documentElement.classList.add('font-aumentada');
    } else if (acao === 'diminuir') {
      document.documentElement.classList.remove('font-aumentada');
      document.documentElement.classList.add('font-reduzida');
    }
  };

  const toggleContraste = () => {
    document.documentElement.classList.toggle('alto-contraste');
  };

  return (
    <>
      <div className="is-top-accessibility-bar py-1 px-3 border-bottom fs-6">
        <div className="is-container d-flex justify-content-between align-items-center">
          <div className="d-none d-md-block fs-6">
            Acessibilidade:
          </div>
          
          <div className="d-flex align-items-center gap-3 ms-auto fs-6">
            <span>Tamanho do texto:</span>
            <button 
              type="button"
              onClick={() => handleAcessibilidade('aumentar')} 
              className="is-acc-btn"
              title="Aumentar Texto"
            >
              A+
            </button>
            <button 
              type="button"
              onClick={() => handleAcessibilidade('diminuir')} 
              className="is-acc-btn"
              title="Diminuir Texto"
            >
              A-
            </button>

            <span className="ms-1 opacity-50">|</span>

            <button 
              type="button"
              onClick={toggleContraste} 
              className="is-acc-btn"
              title="Alternar Alto Contraste"
            >
              Alto Contraste ◐
            </button>
          </div>
        </div>
      </div>

      <header className="is-navbar sticky-top bg-white border-bottom shadow-sm">
        <nav className="is-container py-2" aria-label="Navegação principal">
          <div className="d-flex align-items-center justify-content-between gap-3">
            
            <Link className="navbar-brand m-0 p-0 text-decoration-none d-flex align-items-center" to="/">
              <img 
                src={logoImagem} 
                alt="InformaSaúde" 
                className="is-header-logo"
              />
            </Link>

            <ul className="nav d-none d-lg-flex align-items-center flex-nowrap gap-4 mb-0">
              <li className="nav-item">
                <a className="nav-link p-0 text-dark fw-bold" href="#beneficios">Benefícios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-0 text-dark fw-bold" href="#como-funciona">Como Funciona</a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-0 text-dark fw-bold" href="#contato">Contato</a>
              </li>
            </ul>

            <div className="d-none d-lg-flex align-items-center gap-2">
              <button 
                type="button"
                className="is-nav-btn is-nav-btn--orange" 
                onClick={onAbrirLogin}
              >
                Entrar
              </button>
              <button 
                type="button"
                className="is-nav-btn is-nav-btn--outline-green" 
                onClick={onAbrirCadastro}
              >
                Criar Conta
              </button>
            </div>

            <button
              type="button"
              className="is-burger d-lg-none"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            >
              {open ? <X size={30} strokeWidth={2.5} /> : <Menu size={30} strokeWidth={2.5} />}
            </button>
          </div>

          {/* Menu Responsivo Mobile */}
          {open && (
            <div className="is-mobile-menu d-lg-none mt-2 rounded-3">
              <ul className="nav flex-column gap-3 mb-3">
                <li className="nav-item">
                  <a className="nav-link p-0 text-dark fw-bold" href="#beneficios" onClick={() => setOpen(false)}>
                    Benefícios
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-0 text-dark fw-bold" href="#como-funciona" onClick={() => setOpen(false)}>
                    Como Funciona
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-0 text-dark fw-bold" href="#contato" onClick={() => setOpen(false)}>
                    Contato
                  </a>
                </li>
              </ul>
              <div className="d-flex flex-column gap-2 pt-2 border-top">
                <button 
                  type="button"
                  className="is-nav-btn is-nav-btn--orange w-100 fs-6" 
                  onClick={() => {
                    setOpen(false);
                    onAbrirLogin();
                  }}
                >
                  Entrar
                </button>
                <button 
                  type="button"
                  className="is-nav-btn is-nav-btn--outline-green w-100 fs-6" 
                  onClick={() => {
                    setOpen(false);
                    onAbrirCadastro();
                  }}
                >
                  Criar Conta
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

export default HeaderLP;