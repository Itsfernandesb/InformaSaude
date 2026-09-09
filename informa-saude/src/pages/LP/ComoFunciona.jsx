import { CheckCircle, Gift, Users, Zap } from 'lucide-react';

const STEPS = [
  { icon: Users, title: 'Seu perfil', text: 'Conte um pouco sobre sua rotina.' },
  { icon: CheckCircle, title: 'Suas missões', text: 'Receba sugestões personalizadas.' },
  { icon: Zap, title: 'Você completa', text: 'Marque o que fez e acompanhe seu avanço.' },
  { icon: Gift, title: 'Você ganha', text: 'Troque pontos por benefícios.' }
];

export function ComoFunciona() {
  return (
    <section className="is-section py-5" id="como-funciona">
      <div className="is-container">
        <div className="row mb-4">
          <div className="col-12 col-lg-8">
            <p className="is-eyebrow mb-2">Como funciona</p>
            <h2 className="fw-bold text-balance mb-3">Pequenos passos. Grandes cuidados.</h2>
            <p className="is-lead mb-0">Tudo foi pensado para ser claro, acolhedor e fácil de acompanhar.</p>
          </div>
        </div>
        
        <div className="row g-4 mt-2">
          {STEPS.map(({ icon: Icon, title, text }, index) => (
            <div className="col-12 col-md-6" key={title}>
              <article className="is-step p-4">
                <div className="is-step-top mb-3">
                  <span className="is-step-number">{index + 1}</span>
                  <Icon size={32} aria-hidden="true" />
                </div>
                <h3 className="fw-bold fs-4 mb-2">{title}</h3>
                <p className="fs-5 text-secondary m-0">{text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComoFunciona;