import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoImagem from '../../assets/images/logo.svg';

const NAV_LINKS = [
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Contato', href: '#contato' },
];

export function HeaderLP() {
  const [open, setOpen] = useState(false);

  return (
    <header className="is-navbar sticky-top bg-white border-bottom shadow-sm">
      <nav className="is-container py-2" aria-label="Navegação principal">
        <div className="d-flex align-items-center justify-content-between gap-3">
          
          <a className="navbar-brand m-0 p-0 text-decoration-none d-flex align-items-center" href="#home">
            <img 
              src={logoImagem} 
              alt="InformaSaúde" 
              style={{ height: '58px', width: 'auto' }} 
            />
          </a>

          <ul className="nav d-none d-lg-flex align-items-center flex-nowrap gap-4 mb-0">
            {NAV_LINKS.map((link) => (
              <li className="nav-item" key={link.href}>
                <a className="nav-link p-0 text-dark fw-bold" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="d-none d-lg-flex align-items-center gap-2">
            <a 
              className="btn rounded-pill px-4 py-2 fw-bold text-white" 
              href="#/login"
              style={{ backgroundColor: 'var(--is-orange)', borderColor: 'var(--is-orange)', fontSize: '0.95rem' }}
            >
              Entrar
            </a>
            <a 
              className="btn rounded-pill px-4 py-2 fw-bold" 
              href="#/register"
              style={{ color: 'var(--is-green)', borderColor: 'var(--is-green)', border: '2px solid var(--is-green)', fontSize: '0.95rem' }}
            >
              Começar
            </a>
          </div>

          <button
            type="button"
            className="is-burger d-lg-none"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {open ? (
          <div className="d-lg-none pt-3 pb-2 border-top mt-2">
            <ul className="nav flex-column gap-2 mb-3">
              {NAV_LINKS.map((link) => (
                <li className="nav-item" key={link.href}>
                  <a className="nav-link text-dark fw-bold" href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="d-grid gap-2">
              <a 
                className="btn rounded-pill py-2 fw-bold text-white text-center" 
                href="#/login" 
                onClick={() => setOpen(false)}
                style={{ backgroundColor: 'var(--is-orange)', borderColor: 'var(--is-orange)' }}
              >
                Entrar
              </a>
              <a 
                className="btn rounded-pill py-2 fw-bold text-center" 
                href="#/register" 
                onClick={() => setOpen(false)}
                style={{ color: 'var(--is-green)', borderColor: 'var(--is-green)', border: '2px solid var(--is-green)' }}
              >
                Começar
              </a>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}

export default HeaderLP;