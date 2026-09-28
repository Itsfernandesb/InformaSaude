import { useState } from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="rodape">
      <div className="rodape-conteudo">
        {/* Coluna 1: Sobre a plataforma */}
        <div className="coluna">
          <h4>Informa Saúde</h4>
          <p>Informações claras, acessíveis e seguras para cuidar da sua saúde diariamente.</p>
        </div>

        {/* Coluna 2: Navegação */}
        <div className="coluna">
          <h4>Navegação</h4>
          <nav aria-label="Navegação do rodapé">
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#vacinas">Vacinas</a></li>
              <li><a href="#postos">Postos de saúde</a></li>
              <li><a href="#sobre">Sobre nós</a></li>
            </ul>
          </nav>
        </div>

        {/* Coluna 3: Telefones Úteis (Essencial para idosos) */}
        <div className="coluna">
          <h4>Canais de Ajuda</h4>
          <p><strong>SUS / Disque Saúde:</strong> 136</p>
          <p><strong>SAMU:</strong> 192</p>
        </div>

        {/* Coluna 4: Informações do Projeto */}
        <div className="coluna">
          <h4>Projeto</h4>
          <p>Desenvolvido em React & Python</p>
          <p>Projeto acadêmico sem fins lucrativos</p>
        </div>
      </div>

      {/* Copyright dentro do rodapé */}
      <div className="copyright">
        © 2026 Informa Saúde. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;