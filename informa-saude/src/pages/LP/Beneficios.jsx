import { HeartPulse, ShieldCheck, Smartphone, UserCheck, ArrowUpRight } from 'lucide-react';

const BENEFICIOS = [
  {
    icone: HeartPulse,
    titulo: 'Cuidado Próximo',
    texto: 'Acompanhamento que entende seu ritmo diário e cuida de cada etapa da sua saúde.',
    variante: 'is-card-green',
    acao: 'Conhecer jornadas',
    varianteAcao: 'is-btn--outline-white',
    tipoAcao: 'cadastro'
  },
  {
    icone: ShieldCheck,
    titulo: 'Escolhas Seguras',
    texto: 'Informações confiáveis para você tomar decisões sobre alimentação, medicamentos e prevenção com tranquilidade.',
    variante: 'is-card-orange',
    acao: 'Tirar dúvidas',
    varianteAcao: 'is-btn--outline-white',
    href: '#faq'
  },
  {
    icone: Smartphone,
    titulo: 'Simplicidade Digital',
    texto: 'Interface pensada para facilidade de leitura, com botões grandes e navegação intuitiva.',
    variante: 'is-card-gray',
    acao: 'Como funciona',
    varianteAcao: 'is-btn--outline-green',
    href: '#como-funciona'
  },
  {
    icone: UserCheck,
    titulo: 'Acompanhamento Familiar',
    texto: 'Convide familiares para acompanhar suas conquistas e manter todos unidos no cuidado diário.',
    variante: 'is-card-green-light',
    acao: 'Criar conta',
    varianteAcao: 'is-btn--outline-green',
    tipoAcao: 'cadastro'
  }
];

export function Beneficios({ onAbrirCadastro }) {
  return (
    <section className="is-section bg-white" id="beneficios">
      <div className="is-container">
        <div className="mb-4">
          <span className="is-eyebrow mb-2">Por que o Informa Saúde</span>
          <h2 className="fw-bold text-dark fs-2 mb-1">Um jeito mais humano de cuidar</h2>
          <p className="text-muted fs-6 mb-0">Informações claras, acessíveis e seguras para a sua rotina.</p>
        </div>

        <div className="row g-4">
          {BENEFICIOS.map(({ icone: Icon, titulo, texto, variante, acao, varianteAcao, tipoAcao, href }) => (
            <div className="col-12 col-md-6" key={titulo}>
              <article className={`card h-100 border-0 shadow-sm ${variante}`}>
                <div className="card-body p-4 p-md-5 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <Icon size={28} aria-hidden="true" />
                      <h3 className="fw-bold fs-3 mb-0">{titulo}</h3>
                    </div>
                    <p className="fs-6 mb-4 me-md-4">{texto}</p>
                  </div>

                  {tipoAcao === 'cadastro' ? (
                    <button
                      type="button"
                      onClick={onAbrirCadastro}
                      className={`is-btn ${varianteAcao} px-4 py-2 fw-semibold d-inline-flex align-items-center gap-2 align-self-start`}
                    >
                      {acao} <ArrowUpRight size={18} aria-hidden="true" />
                    </button>
                  ) : (
                    <a
                      href={href}
                      className={`is-btn ${varianteAcao} px-4 py-2 fw-semibold d-inline-flex align-items-center gap-2 align-self-start`}
                    >
                      {acao} <ArrowUpRight size={18} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Beneficios;
