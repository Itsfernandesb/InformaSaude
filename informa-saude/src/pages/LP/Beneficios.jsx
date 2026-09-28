import { HeartPulse, ShieldCheck, Smartphone, UserCheck } from 'lucide-react';
import { CardLP } from '../../components';

const BENEFICIOS = [
  {
    icone: HeartPulse,
    titulo: 'Cuidado Próximo',
    texto: 'Acompanhamento que entende seu ritmo diário e cuida de cada etapa da sua saúde.',
    variante: 'is-card-green',
    acaoText: 'Conhecer jornadas',
    varianteAcao: 'outline-white',
    tipoAcao: 'cadastro'
  },
  {
    icone: ShieldCheck,
    titulo: 'Escolhas Seguras',
    texto: 'Informações confiáveis para você tomar decisões sobre alimentação, medicamentos e prevenção com tranquilidade.',
    variante: 'is-card-orange',
    acaoText: 'Tirar dúvidas',
    varianteAcao: 'outline-white',
    hrefAcao: '#faq'
  },
  {
    icone: Smartphone,
    titulo: 'Simplicidade Digital',
    texto: 'Interface pensada para facilidade de leitura, com botões grandes e navegação intuitiva.',
    variante: 'is-card-orange-light',
    acaoText: 'Como funciona',
    varianteAcao: 'outline-green',
    hrefAcao: '#como-funciona'
  },
  {
    icone: UserCheck,
    titulo: 'Acompanhamento Familiar',
    texto: 'Convide familiares para acompanhar suas conquistas e manter todos unidos no cuidado diário.',
    variante: 'is-card-green-light',
    acaoText: 'Criar conta',
    varianteAcao: 'outline-green',
    tipoAcao: 'cadastro'
  }
];

export function Beneficios({ onAbrirCadastro }) {
  return (
    <section className="is-section bg-light" id="beneficios">
      <div className="is-container">
        <div className="mb-4">
          <span className="is-eyebrow mb-2">Por que o Informa Saúde</span>
          <h2 className="fw-bold text-dark fs-2 mb-1">Um jeito mais humano de cuidar</h2>
          <p className="text-muted fs-6 mb-0">Informações claras, acessíveis e seguras para a sua rotina.</p>
        </div>

        <div className="row g-4">
          {BENEFICIOS.map(({ icone, titulo, texto, variante, acaoText, varianteAcao, tipoAcao, hrefAcao }) => (
            <div className="col-12 col-md-6" key={titulo}>
              <CardLP
                tipo="beneficio"
                variante={variante}
                icone={icone}
                titulo={titulo}
                texto={texto}
                acaoText={acaoText}
                varianteAcao={varianteAcao}
                onClickAcao={tipoAcao === 'cadastro' ? onAbrirCadastro : undefined}
                hrefAcao={hrefAcao}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Beneficios;
