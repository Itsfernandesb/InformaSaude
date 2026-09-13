import { HeartPulse, ShieldCheck, Smartphone, UserCheck, ArrowUpRight } from 'lucide-react';

export function BenefitsSection({ onAbrirCadastro }) {
  return (
    <section className="is-section py-5 bg-white border-top" id="beneficios">
      <div className="is-container">
        
        <div className="mb-4">
          <span className="is-eyebrow mb-2">Por que o Informa Saúde</span>
          <h2 className="fw-bold text-dark fs-2 mb-1">Um jeito mais humano de cuidar</h2>
          <p className="text-muted fs-6 mb-0">Informações claras, acessíveis e seguras para a sua rotina.</p>
        </div>
        
        <div className="row g-4">
          
          {/* Card 1: Brand Green */}
          <div className="col-12 col-md-6">
            <div className="p-4 p-md-5 rounded-4 d-flex flex-column justify-content-between h-100 shadow-sm is-card-green">
              <div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <HeartPulse size={28} />
                  <h3 className="fw-bold text-white fs-3 mb-0">Cuidado Próximo</h3>
                </div>
                <p className="fs-6 text-white-50 mb-4 me-md-4">
                  Acompanhamento que entende seu ritmo diário e cuida de cada etapa da sua saúde.
                </p>
              </div>

              <div>
                <button 
                  type="button"
                  onClick={onAbrirCadastro} 
                  className="btn rounded-pill px-4 py-2 fw-semibold text-white border-white border-2 d-inline-flex align-items-center gap-2"
                >
                  Conhecer jornadas <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Brand Orange */}
          <div className="col-12 col-md-6">
            <div className="p-4 p-md-5 rounded-4 d-flex flex-column justify-content-between h-100 shadow-sm is-card-orange">
              <div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <ShieldCheck size={28} />
                  <h3 className="fw-bold text-white fs-3 mb-0">Escolhas Seguras</h3>
                </div>
                <p className="fs-6 text-white mb-4 me-md-4 opacity-90">
                  Informações confiáveis para você tomar decisões sobre alimentação, medicamentos e prevenção com tranquilidade.
                </p>
              </div>

              <div>
                <a 
                  href="#faq" 
                  className="btn rounded-pill px-4 py-2 fw-semibold text-white border-white border-2 d-inline-flex align-items-center gap-2"
                >
                  Tirar dúvidas <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Light Brand Gray */}
          <div className="col-12 col-md-6">
            <div className="p-4 p-md-5 rounded-4 d-flex flex-column justify-content-between h-100 shadow-sm border is-card-gray">
              <div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <Smartphone size={28} className="text-dark" />
                  <h3 className="fw-bold text-dark fs-3 mb-0">Simplicidade Digital</h3>
                </div>
                <p className="fs-6 text-muted mb-4 me-md-4">
                  Interface pensada para facilidade de leitura, com botões grandes e navegação intuitiva.
                </p>
              </div>

              <div>
                <a 
                  href="#como-funciona" 
                  className="is-btn is-btn--outline-green px-4 py-2 fw-semibold d-inline-flex align-items-center gap-2"
                >
                  Como funciona <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Card 4: Light Brand Green */}
          <div className="col-12 col-md-6">
            <div className="p-4 p-md-5 rounded-4 d-flex flex-column justify-content-between h-100 shadow-sm border is-card-green-light">
              <div>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <UserCheck size={28} />
                  <h3 className="fw-bold fs-3 mb-0">Acompanhamento Familiar</h3>
                </div>
                <p className="fs-6 mb-4 me-md-4 opacity-75">
                  Convide familiares para acompanhar suas conquistas e manter todos unidos no cuidado diário.
                </p>
              </div>

              <div>
                <button 
                  type="button" 
                  onClick={onAbrirCadastro}
                  className="is-btn is-btn--green px-4 py-2 fw-semibold d-inline-flex align-items-center gap-2"
                >
                  Criar conta <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;