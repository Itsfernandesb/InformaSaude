import { UserCheck, BookOpen, Activity, Award } from 'lucide-react';
import { CardLP } from '../../components';

const STEPS = [
  { icon: UserCheck, title: 'Seu perfil de saúde', text: 'Conte um pouco sobre você e suas necessidades para personalizar seu acompanhamento.' },
  { icon: BookOpen, title: 'Jornadas educativas', text: 'Acesse módulos práticos e vídeos interativos preparados por especialistas de saúde.' },
  { icon: Activity, title: 'Hábitos e metas diárias', text: 'Acompanhe pequenas tarefas diárias e visualize seu progresso com clareza.' },
  { icon: Award, title: 'Recompensas de saúde', text: 'Acumule pontos ao cuidar de você e garanta benefícios em farmácias e serviços parceiros.' }
];

export function ComoFunciona() {
  return (
    <section className="is-section bg-light" id="como-funciona">
      <div className="is-container">
        <div className="mb-4">
          <span className="is-eyebrow mb-2">Passo a passo</span>
          <h2 className="fw-bold text-dark fs-2 mb-1">Como funciona o Informa Saúde</h2>
          <p className="text-muted fs-6 mb-0">Um processo simples e direto para acompanhar sua saúde todos os dias.</p>
        </div>
        
        <div className="row g-4">
          {STEPS.map(({ icon, title, text }, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={title}>
              <CardLP
                tipo="passo"
                numero={`0${index + 1}`}
                icone={icon}
                titulo={title}
                texto={text}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComoFunciona;