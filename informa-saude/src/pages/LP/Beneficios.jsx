import { Star, Users, Zap } from 'lucide-react';
const BENEFITS = [
  { 
    icon: Zap, 
    title: 'Missões Personalizadas', 
    text: 'Receba tarefas de saúde baseadas nas suas necessidades e no seu momento.' 
  },
  { 
    icon: Star, 
    title: 'Pontos que ajudam', 
    text: 'Transforme suas conquistas em descontos reais em farmácias parceiras.', 
    accent: true 
  },
  { 
    icon: Users, 
    title: 'Família por perto', 
    text: 'Convide quem você ama para acompanhar e celebrar cada conquista.' 
  },
];
export function BenefitsSection() {
  return (
    <section className="is-section is-section--gray" id="beneficios">
      <div className="is-container">
        <div className="row is-row align-items-end">
          <div className="col-12 col-lg-7">
            <p className="is-eyebrow mb-3">Por que Informa Saúde</p>
            <h2 className="text-balance mb-3">Um jeito mais humano de cuidar</h2>
          </div>
          <div className="col-12 col-lg-5">
            <p className="is-lead mb-0">
              A tecnologia fica em segundo plano. O importante é você se sentir acompanhado.
            </p>
          </div>
        </div>
        
        <div className="row is-row mt-5">
          {BENEFITS.map(({ icon: Icon, title, text, accent }) => (
            <div className="col-12 col-md-4" key={title}>
              <article className={`is-benefit${accent ? ' is-benefit--accent' : ''}`}>
                <span className="is-icon-chip" aria-hidden="true">
                  <Icon size={30} strokeWidth={2.25} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default BenefitsSection;