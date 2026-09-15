import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
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

      <header className="is-navbar sticky-top border-bottom shadow-sm">
        <nav className="navbar navbar-expand-lg is-container py-2" aria-label="Navegação principal">
          <Link className="navbar-brand m-0 p-0 text-decoration-none d-flex align-items-center" to="/">
            <img src={logoImagem} alt="InformaSaúde" className="is-header-logo" />
          </Link>

          <button
            type="button"
            className={`d-lg-none border-0 shadow-none ${open ? 'btn-close' : 'navbar-toggler'}`}
            onClick={() => setOpen((estadoAtual) => !estadoAtual)}
            aria-expanded={open}
            aria-controls="menuPrincipal"
            aria-label={open ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            {!open && <Menu size={30} strokeWidth={2.5} aria-hidden="true" />}
          </button>

          <div id="menuPrincipal" className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
            <ul className="navbar-nav mx-auto align-items-lg-center gap-lg-4">
              <li className="nav-item">
                <a className="nav-link text-dark fw-bold" href="#beneficios" onClick={() => setOpen(false)}>Benefícios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-bold" href="#como-funciona" onClick={() => setOpen(false)}>Como Funciona</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-bold" href="#contato" onClick={() => setOpen(false)}>Contato</a>
              </li>
            </ul>

            <div className="d-flex flex-column flex-lg-row gap-2 mt-3 mt-lg-0">
              <button
                type="button"
                className="is-nav-btn is-nav-btn--orange"
                onClick={() => {
                  setOpen(false);
                  onAbrirLogin();
                }}
              >
                Entrar
              </button>
              <button
                type="button"
                className="is-nav-btn is-nav-btn--outline-green"
                onClick={() => {
                  setOpen(false);
                  onAbrirCadastro();
                }}
              >
                Criar Conta
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default HeaderLP;