import logoImg from '../../assets/images/logo.svg';

export function AuthModalLayout({
  children,
  onClose,
  titulo,
  centralizarConteudo = false,
  conteudoAntesDoTitulo
}) {
  return (
    <div className="is-modal-overlay" role="presentation" onClick={onClose}>
      <div
        className="bg-white rounded-4 shadow-lg overflow-hidden border-0 position-relative is-modal-box is-modal-box-auto"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-titulo"
      >
        <div className="row g-0 h-100">
          <div className="col-12 col-md-5 is-footer-green py-3 px-4 p-md-4 d-flex flex-column justify-content-between text-white position-relative">
            <div className="d-flex align-items-center justify-content-between justify-content-md-start w-100">
              <img src={logoImg} alt="InformaSaúde" className="is-logo-white is-modal-logo mb-0 mb-md-3" />
              <button
                type="button"
                className="btn-close btn-close-white d-md-none"
                onClick={onClose}
                aria-label="Fechar"
              />
            </div>

            <div>
              <h4 className="fw-bold text-white mb-2 fs-4 d-none d-md-block">Sua jornada de saúde começa aqui!</h4>
              <p className="text-white-50 fs-6 m-0 d-none d-md-block">
                Informações claras, acessíveis e seguras para você.
              </p>
            </div>

            <div className="pt-2 border-top border-white border-opacity-25 fs-6 text-white-50 d-none d-md-block">
              © 2026 Informa Saúde
            </div>
          </div>

          <div className={`col-12 col-md-7 p-3 p-md-4 bg-white position-relative is-modal-content-col ${centralizarConteudo ? 'is-modal-content-col--centered' : ''}`}>
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 m-3 z-3 d-none d-md-block"
              onClick={onClose}
              aria-label="Fechar"
            />
            <div className="is-modal-content-inner">
              {conteudoAntesDoTitulo}
              <div className="mb-2 pe-4">
                <h4 id="auth-modal-titulo" className="fw-bold text-dark fs-4 mb-0">
                  {titulo}
                </h4>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthModalLayout;
