import { User, Gift, BookOpen, Hospital } from 'lucide-react';
import imgCardiaca from '../../assets/images/imagem-cardiaca.png';
import imgSono from '../../assets/images/imagem-sono.png';
import imgRespiracao from '../../assets/images/imagem-respiracao.jpg';
import imgProgresso from '../../assets/images/acompanhe-progresso.png';
import {
  SystemNavbar,
  ChatAssistant,
  CardSistema,
  FooterSistemaMobile,
  TituloPaginaSistema,
  TituloSecao
} from '../../components';

const ACOES_RAPIDAS = [
  { id: 'jornadas', icone: BookOpen, titulo: 'Jornadas', href: '#jornadas' },
  { id: 'rede-publica', icone: Hospital, titulo: 'Rede Pública', href: '/404.html' },
  { id: 'pontos', icone: Gift, titulo: 'Pontos', href: '/404.html' },
  { id: 'perfil', icone: User, titulo: 'Meu Perfil', to: '/meu-perfil' }
];

const JORNADAS_EM_ANDAMENTO = [
  {
    id: 1,
    categoria: 'Hipertensão',
    titulo: 'Controlando o colesterol na alimentação',
    progresso: 65
  },
  {
    id: 2,
    categoria: 'Prevenção',
    titulo: 'Hábitos diários para o controle da glicemia',
    progresso: 30
  }
];

const JORNADAS_RECOMENDADAS = [
  {
    id: 'sono',
    imagem: imgSono,
    titulo: 'Jornada do Sono',
    textoBotao: 'Iniciar Jornada'
  },
  {
    id: 'cardiaca',
    imagem: imgCardiaca,
    titulo: 'Jornada Cardíaca',
    textoBotao: 'Iniciar Jornada'
  },
  {
    id: 'respiratoria',
    imagem: imgRespiracao,
    titulo: 'Jornada Respiratória',
    textoBotao: 'Iniciar Jornada'
  }
];

export function HomeSistema() {
  return (
    <div className="bg-light min-vh-100 pb-5">
      <SystemNavbar />

      <main className="is-container py-4">
        <TituloPaginaSistema
          isBoasVindas
          nome="João da Silva"
          subtitulo="Acesse suas jornadas, pontos e serviços de saúde"
        />

        <section className="mb-5">
          <TituloSecao>Ações Rápidas</TituloSecao>
          <div className="row g-3">
            {ACOES_RAPIDAS.map((acao) => (
              <div key={acao.id} className="col-6 col-md-4 col-lg-3">
                <CardSistema isAcao icone={acao.icone} titulo={acao.titulo} href={acao.href} to={acao.to} />
              </div>
            ))}
          </div>
        </section>

        <CardSistema
          isMedia
          isHero
          imagem={imgCardiaca}
          subtitulo="Comece sua"
          titulo="Jornada Cardíaca"
          descricao="Aprenda como pequenos hábitos diários podem auxiliar na prevenção de infarto, controle de hipertensão e muito mais!"
          textoBotao="Iniciar Jornada"
          className="mb-5"
        />

        <section className="mb-5">
          <TituloSecao>Continue Assistindo</TituloSecao>
          <div className="row g-3">
            {JORNADAS_EM_ANDAMENTO.map((jornada) => (
              <div key={jornada.id} className="col-12 col-md-6 col-lg-4">
                <CardSistema
                  isProgresso
                  categoria={jornada.categoria}
                  titulo={jornada.titulo}
                  progresso={jornada.progresso}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-5" id="jornadas">
          <TituloSecao>Jornadas Recomendadas</TituloSecao>
          <div className="row g-4">
            {JORNADAS_RECOMENDADAS.map((jornada) => (
              <div key={jornada.id} className="col-12 col-md-6 col-lg-4">
                <CardSistema
                  isMedia
                  imagem={jornada.imagem}
                  titulo={jornada.titulo}
                  textoBotao={jornada.textoBotao}
                />
              </div>
            ))}
          </div>
        </section>

        <section>
          <CardSistema
            isMedia
            centralizado
            imagem={imgProgresso}
            titulo="Acompanhe seu progresso"
            textoBotao="Veja suas estatísticas"
            varianteBotao="outline-white"
          />
        </section>
      </main>

      <FooterSistemaMobile />
      <ChatAssistant />
    </div>
  );
}

export default HomeSistema;