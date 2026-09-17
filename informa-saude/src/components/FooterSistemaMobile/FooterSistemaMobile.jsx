import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home as HomeIcon, Play, Award, User } from 'lucide-react';

export function FooterSistemaMobile() {
  const location = useLocation();

  const isAtivo = (path) => location.pathname === path;

  return (
    <nav className="fixed-bottom bg-white border-top shadow-lg py-2 d-md-none" aria-label="Navegação inferior mobile">
      <div className="d-flex justify-content-around align-items-center text-center">
        <Link
          to="/inicio"
          className={`text-decoration-none fs-6 ${isAtivo('/inicio') ? 'text-success fw-bold' : 'text-muted'}`}
        >
          <HomeIcon size={22} className="d-block mx-auto mb-1" />
          Início
        </Link>
        <a
          href="#jornadas"
          className="text-decoration-none text-muted fs-6"
        >
          <Play size={22} className="d-block mx-auto mb-1" />
          Jornadas
        </a>
        <a
          href="/404.html"
          className="text-decoration-none text-muted fs-6"
        >
          <Award size={22} className="d-block mx-auto mb-1" />
          Pontos
        </a>
        <Link
          to="/meu-perfil"
          className={`text-decoration-none fs-6 ${isAtivo('/meu-perfil') ? 'text-success fw-bold' : 'text-muted'}`}
        >
          <User size={22} className="d-block mx-auto mb-1" />
          Perfil
        </Link>
      </div>
    </nav>
  );
}

export default FooterSistemaMobile;
