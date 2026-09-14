import { useState } from 'react';

const FAQS = [
  {
    id: 1,
    pergunta: 'O que é o Informa Saúde?',
    resposta: 'O Informa Saúde é uma plataforma digital acessível e gratuita desenvolvida para levar orientações de saúde, prevenção de doenças (como hipertensão e diabetes) e jornadas de aprendizado de forma simples para todos.'
  },
  {
    id: 2,
    pergunta: 'Preciso pagar para usar a plataforma?',
    resposta: 'Não! O Informa Saúde é um serviço 100% gratuito. Você pode criar sua conta, acessar os vídeos, participar das jornadas e localizar postos de saúde sem nenhum custo.'
  },
  {
    id: 3,
    pergunta: 'Como funcionam a pontuação e os prêmios?',
    resposta: 'Ao assistir às aulas, concluir missões diárias e manter seus hábitos em dia, você acumula pontos que podem ser trocados por benefícios e descontos em serviços de saúde parceiros.'
  },
  {
    id: 4,
    pergunta: 'O Informa Saúde substitui consultas médicas?',
    resposta: 'Não. Nosso conteúdo é estritamente educativo e preventivo. Para diagnósticos, prescrições de medicamentos ou emergências, consulte sempre um médico ou dirija-se à Unidade Básica de Saúde (UBS) mais próxima.'
  },
  {
    id: 5,
    pergunta: 'Como encontro um posto de saúde perto da minha casa?',
    resposta: 'Dentro do sistema, acesse a ferramenta "Rede de Saúde" em Ações Rápidas. Basta digitar o seu CEP para visualizar as UBS e UPAs mais próximas do seu endereço.'
  }
];

export function FaqSection() {
  const [aberto, setAberto] = useState(0);

  const toggleFaq = (idx) => {
    setAberto(aberto === idx ? null : idx);
  };

  return (
    <section className="is-section py-5 bg-light border-top" id="faq">
      <div className="is-container py-4">
        <div className="row g-4 align-items-start">
          
          
          <div className="col-12 col-lg-4">
            <span className="is-eyebrow mb-2">Dúvidas Frequentes</span>
            <h2 className="fw-bold text-dark fs-2 mb-3">Perguntas Frequentes</h2>
            <p className="text-muted fs-6 mb-4 lh-base">
              Tire suas dúvidas sobre o funcionamento do Informa Saúde, cadastro, jornadas educativas e como localizar postos de saúde.
            </p>
          </div>

          
          <div className="col-12 col-lg-8">
            <div className="accordion d-flex flex-column gap-3" id="accordionFaq">
              {FAQS.map((faq, idx) => {
                const isExpanded = aberto === idx;
                const itemId = `faq-item-${faq.id}`;

                return (
                  <div key={faq.id} className="accordion-item rounded-3 overflow-hidden shadow-sm">
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className={`accordion-button ${isExpanded ? '' : 'collapsed'} fw-bold text-dark fs-5`}
                      aria-expanded={isExpanded}
                      aria-controls={itemId}
                    >
                      {faq.pergunta}
                    </button>

                    <div id={itemId} className={`accordion-collapse collapse ${isExpanded ? 'show' : ''}`}>
                      <div className="accordion-body text-muted fs-6">
                        {faq.resposta}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FaqSection;
