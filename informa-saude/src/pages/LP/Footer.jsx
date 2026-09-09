import logoImg from '../../assets/images/logo.jpg';

export function Footer() {
  return (
    <footer className="is-footer-green pt-5 pb-3 mt-auto" id="contato">
      <div className="is-container">
        <div className="row g-4 justify-content-between">
          <div className="col-12 col-md-3">
           <img 
              src={logoImg} 
              alt="InformaSaúde" 
              className="mb-3 d-block" 
              style={{ height: '48px', width: 'auto' }} 
            />
            <p className="text-white-50 fs-6">
              Informações claras, acessíveis e seguras para cuidar da sua saúde diariamente.
            </p>
          </div>

          <div className="col-6 col-md-3">
            <h5 className="fw-bold mb-3 text-white fs-6">Navegação</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 fs-6">
              <li><a href="#home" className="text-white text-decoration-none opacity-75">Início</a></li>
              <li><a href="#beneficios" className="text-white text-decoration-none opacity-75">Benefícios</a></li>
              <li><a href="#como-funciona" className="text-white text-decoration-none opacity-75">Como Funciona</a></li>
              <li><a href="#/sobre" className="text-white text-decoration-none opacity-75">Sobre nós</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-3">
            <h5 className="fw-bold mb-3 text-white fs-6">Canais de Ajuda</h5>
            <p className="text-white-50 mb-1 fs-6"><strong>SUS / Disque Saúde:</strong> 136</p>
            <p className="text-white-50 fs-6"><strong>SAMU:</strong> 192</p>
          </div>

          <div className="col-12 col-md-3">
            <h5 className="fw-bold mb-3 text-white fs-6">Projeto</h5>
            <p className="text-white-50 mb-1 fs-6">Desenvolvido em React & Python</p>
            <p className="text-white-50 fs-6">Projeto acadêmico sem fins lucrativos</p>
          </div>
        </div>

        <div className="border-top border-white border-opacity-25 mt-4 pt-3 text-center text-white-50 fs-6">
          © 2026 Informa Saúde. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;