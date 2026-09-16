import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import logoImg from '../../assets/images/logo.svg';
import { BarraAcessibilidade, BotaoSistema, OpcaoCard } from '../../components';

const PERGUNTAS = [
  {
    id: 1,
    titulo: 'Pergunta 1?',
    subtitulo: 'Consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    opcoes: [
      { id: 'a', titulo: 'Resposta 1', descricao: 'Consectetur adipiscing elit, sed do eiusmod tempor' },
      { id: 'b', titulo: 'Resposta 2', descricao: 'Ut enim ad minim veniam, quis nostrud exercitation' },
      { id: 'c', titulo: 'Resposta 3', descricao: 'Duis aute irure dolor in reprehenderit' },
      { id: 'd', titulo: 'Resposta 4', descricao: 'Sunt in culpa qui officia deserunt mollit anim id est' },
    ]
  },
  {
    id: 2,
    titulo: 'Pergunta 2?',
    subtitulo: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
    opcoes: [
      { id: 'a', titulo: 'Resposta 1', descricao: 'Duis aute irure dolor in reprehenderit in voluptate' },
      { id: 'b', titulo: 'Resposta 2', descricao: 'Nulla pariatur excepteur sint occaecat cupidatat' },
      { id: 'c', titulo: 'Resposta 3', descricao: 'Mollit anim id est laborum et dolorum fuga' },
      { id: 'd', titulo: 'Resposta 4', descricao: 'Voluptas sit aspernatur aut odit aut fugit' },
    ]
  },
  {
    id: 3,
    titulo: 'Pergunta 3?',
    subtitulo: 'Voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    opcoes: [
      { id: 'a', titulo: 'Resposta 1', descricao: 'Non proident, sunt in culpa qui officia deserunt' },
      { id: 'b', titulo: 'Resposta 2', descricao: 'Sed ut perspiciatis unde omnis iste natus error' },
      { id: 'c', titulo: 'Resposta 3', descricao: 'Laudantium, totam rem aperiam, eaque ipsa quae' },
      { id: 'd', titulo: 'Resposta 4', descricao: 'Voluptas sit aspernatur aut odit aut fugit' },
    ]
  },
  {
    id: 4,
    titulo: 'Pergunta 4?',
    subtitulo: 'Error sit voluptatem accusantium doloremque laudantium.',
    opcoes: [
      { id: 'a', titulo: 'Resposta 1', descricao: 'Quae ab illo inventore veritatis et quasi architecto' },
      { id: 'b', titulo: 'Resposta 2', descricao: 'Nemo enim ipsam voluptatem quia voluptas sit' },
      { id: 'c', titulo: 'Resposta 3', descricao: 'Sed quia consequuntur magni dolores eos qui ratione' },
      { id: 'd', titulo: 'Resposta 4', descricao: 'Dolorem ipsum quia dolor sit amet consectetur' },
    ]
  },
  {
    id: 5,
    titulo: 'Pergunta 5?',
    subtitulo: 'Quia dolor sit amet, consectetur, adipisci velit.',
    opcoes: [
      { id: 'a', titulo: 'Resposta 1', descricao: 'Incidunt ut labore et dolore magnam aliquam quaerat' },
      { id: 'b', titulo: 'Resposta 2', descricao: 'Quis nostrum exercitationem ullam corporis suscipit' },
      { id: 'c', titulo: 'Resposta 3', descricao: 'Commodi consequatur quis autem vel eum iure' },
      { id: 'd', titulo: 'Resposta 4', descricao: 'Velit esse quam nihil molestiae consequatur' },
    ]
  },
  {
    id: 6,
    titulo: 'Pergunta 6?',
    subtitulo: 'Qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    opcoes: [
      { id: 'a', titulo: 'Resposta 1', descricao: 'Quo voluptas nulla pariatur at vero eos et accusamus' },
      { id: 'b', titulo: 'Resposta 2', descricao: 'Qui blanditiis praesentium voluptatum deleniti atque' },
      { id: 'c', titulo: 'Resposta 3', descricao: 'Excepturi sint occaecati cupiditate non provident' },
      { id: 'd', titulo: 'Resposta 4', descricao: 'Deserunt mollitia animi id est laborum et dolorum' },
    ]
  },
  {
    id: 7,
    titulo: 'Pergunta 7?',
    subtitulo: 'Mollitia animi, id est laborum et dolorum fuga.',
    opcoes: [
      { id: 'a', titulo: 'Resposta 1', descricao: 'Et expedita distinctio nam libero tempore cum soluta' },
      { id: 'b', titulo: 'Resposta 2', descricao: 'Nihil impedit quo minus id quod maxime placeat' },
      { id: 'c', titulo: 'Resposta 3', descricao: 'Est omnis dolor repellendus temporibus autem' },
      { id: 'd', titulo: 'Resposta 4', descricao: 'Aut rerum necessitatibus saepe eveniet ut et' },
    ]
  },
  {
    id: 8,
    titulo: 'Pergunta 8?',
    subtitulo: 'Debitis aut rerum necessitatibus saepe eveniet ut et voluptates.',
    opcoes: [
      { id: 'a', titulo: 'Resposta 1', descricao: 'Recusandae itaque earum rerum hic tenetur a sapiente' },
      { id: 'b', titulo: 'Resposta 2', descricao: 'Maiores alias consequatur aut perferendis doloribus' },
      { id: 'c', titulo: 'Resposta 3', descricao: 'Tenebo sententiam quid bonum sit id esse solum' },
      { id: 'd', titulo: 'Resposta 4', descricao: 'Dignissimos ducimus qui blanditiis praesentium' },
    ]
  }
];

export function Questionario() {
  const navigate = useNavigate();
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [respostas, setRespostas] = useState({});
  const [isConcluindo, setIsConcluindo] = useState(false);

  const perguntaAtual = PERGUNTAS[etapaAtual];
  const percentualProgresso = Math.round(((etapaAtual + 1) / PERGUNTAS.length) * 100);

  const handleSelecionarOpcao = (opcaoId) => {
    setRespostas(prev => ({
      ...prev,
      [perguntaAtual.id]: opcaoId
    }));
  };

  const handleAvancar = () => {
    if (etapaAtual < PERGUNTAS.length - 1) {
      setEtapaAtual(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setIsConcluindo(true);
      setTimeout(() => {
        navigate('/inicio', { state: { questionarioConcluido: true } });
      }, 1200);
    }
  };

  const handleVoltar = () => {
    if (etapaAtual > 0) {
      setEtapaAtual(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/inicio');
    }
  };

  const opcaoSelecionada = respostas[perguntaAtual.id];

  if (isConcluindo) {
    return (
      <div className="min-vh-100 bg-white d-flex align-items-center justify-content-center p-4">
        <div className="text-center is-profile-container">
          <h2 className="fw-bold text-dark fs-2 mb-3">Concluindo o questionário...</h2>
          <p className="text-muted fs-5 mb-4">
            Processando suas respostas para direcionar à sua área inicial.
          </p>
          <div className="spinner-border text-success" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Carregando...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-column justify-content-between pb-5">
      <div>
        <BarraAcessibilidade />

        <header className="bg-white border-bottom py-3 shadow-sm sticky-top">
          <div className="is-container">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <button 
                type="button" 
                onClick={handleVoltar}
                className="btn btn-link text-decoration-none text-dark d-inline-flex align-items-center gap-2 p-0 fw-semibold fs-6"
                aria-label="Voltar para a pergunta anterior"
              >
                <ArrowLeft size={20} /> <span className="d-none d-sm-inline">Voltar</span>
              </button>

              <Link to="/inicio" className="navbar-brand m-0 p-0 text-decoration-none">
                <img src={logoImg} alt="InformaSaúde" className="is-header-logo" />
              </Link>

              <span className="fw-bold text-is-green fs-6">
                {etapaAtual + 1} de {PERGUNTAS.length}
              </span>
            </div>

            <div className="progress is-questionnaire-progress" style={{ height: '8px' }}>
              <div 
                className="progress-bar transition-all" 
                role="progressbar" 
                style={{ 
                  width: `${percentualProgresso}%`,
                  backgroundColor: 'var(--is-green)'
                }} 
                aria-valuenow={percentualProgresso} 
                aria-valuemin="0" 
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </header>

        <main className="is-container py-4 py-md-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7">
              <div className="text-center mb-4 pb-2">
                <h1 className="fw-bold text-dark fs-2 mb-2">{perguntaAtual.titulo}</h1>
                <p className="text-muted fs-5 mb-0">{perguntaAtual.subtitulo}</p>
              </div>

              <div 
                className="row row-cols-1 row-cols-md-2 g-3 mb-4" 
                role="radiogroup" 
                aria-label={perguntaAtual.titulo}
              >
                {perguntaAtual.opcoes.map((opcao) => (
                  <div key={opcao.id} className="col">
                    <OpcaoCard
                      titulo={opcao.titulo}
                      descricao={opcao.descricao}
                      selecionado={opcaoSelecionada === opcao.id}
                      onClick={() => handleSelecionarOpcao(opcao.id)}
                    />
                  </div>
                ))}
              </div>

              <div className="d-flex align-items-center justify-content-between mt-4 pt-2">
                <BotaoSistema
                  variante="outline-green"
                  onClick={handleVoltar}
                >
                  {etapaAtual === 0 ? 'Voltar' : 'Anterior'}
                </BotaoSistema>

                <BotaoSistema
                  variante={opcaoSelecionada ? 'orange' : 'secondary'}
                  desabilitado={!opcaoSelecionada}
                  onClick={handleAvancar}
                >
                  {etapaAtual === PERGUNTAS.length - 1 ? 'CONCLUIR' : 'SEGUINTE'}
                </BotaoSistema>
              </div>

            </div>
          </div>
        </main>
      </div>

    </div>
  );
}

export default Questionario;
