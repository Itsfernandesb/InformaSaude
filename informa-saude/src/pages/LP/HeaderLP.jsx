import { useState } from 'react';
import { Menu } from 'lucide-react';
import { BarraAcessibilidade, Logo, BotaoLP } from '../../components';

export function HeaderLP({ onAbrirLogin, onAbrirCadastro }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BarraAcessibilidade />

      <header className="is-navbar sticky-top border-bottom shadow-sm">
        <nav className="navbar navbar-expand-lg is-container py-2" aria-label="Navegação principal">
          <Logo to="/" />

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
              <BotaoLP
                isNav
                variante="orange"
                onClick={() => {
                  setOpen(false);
                  onAbrirLogin();
                }}
              >
                Entrar
              </BotaoLP>
              <BotaoLP
                isNav
                variante="outline-green"
                onClick={() => {
                  setOpen(false);
                  onAbrirCadastro();
                }}
              >
                Criar Conta
              </BotaoLP>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default HeaderLP;