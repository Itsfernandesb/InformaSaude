import { useState } from 'react';
import './Header.css';
import logoImagem from '../../assets/images/logo.jpg';

function Header() {
  const [fontSize, setFontSize] = useState(100);
  const [menuAberto, setMenuAberto] = useState(false);

  // Função para ajustar o tamanho da fonte da página
  const handleAcessibilidade = (acao) => {
    let novoTamanho = fontSize;
    if (acao === 'aumentar' && fontSize < 140) novoTamanho += 10;
    if (acao === 'diminuir' && fontSize > 90) novoTamanho -= 10;

    setFontSize(novoTamanho);
    document.documentElement.style.fontSize = `${novoTamanho}%`;
  };

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className="cabecalho">
      {/* Marca e Logo */}
      <div className="cabecalho-logo">
        <a href="/">
          <img src={logoImagem} alt="InformaSaúde" className="logo-img" />
        </a>
      </div>

      {/* Botão Hambúrguer (Aparece apenas no mobile) */}
      <button 
        className={`hamburger ${menuAberto ? 'ativo' : ''}`} 
        onClick={toggleMenu}
        aria-label="Abrir menu de navegação"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Conteúdo de Navegação e Acessibilidade */}
      <div className={`cabecalho-conteudo ${menuAberto ? 'ativo' : ''}`}>
        {/* Menu Principal */}
        <nav className="cabecalho-menu" aria-label="Navegação principal">
          <a href="#inicio" onClick={() => setMenuAberto(false)}>Início</a>
          <a href="#jornadas" onClick={() => setMenuAberto(false)}>Jornadas de Saúde</a>
          <a href="#remedios" onClick={() => setMenuAberto(false)}>Remédios e Vacinas</a>
          <a href="#ajuda" onClick={() => setMenuAberto(false)}>Onde achar Ajuda</a>
          <a href="#quiz" onClick={() => setMenuAberto(false)}>Quiz</a>
        </nav>

        {/* Controles de Acessibilidade */}
        <div className="cabecalho-acessibilidade">
          <span className="acessibilidade-rotulo">Tamanho do texto:</span>
          <button 
            onClick={() => handleAcessibilidade('diminuir')} 
            aria-label="Diminuir tamanho do texto"
            title="Texto menor"
          >
            -
          </button>
          <button 
            onClick={() => handleAcessibilidade('aumentar')} 
            aria-label="Aumentar tamanho do texto"
            title="Texto maior"
          >
            +
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
