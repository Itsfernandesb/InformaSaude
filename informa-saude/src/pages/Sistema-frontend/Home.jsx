import { useState } from 'react';
import { Link } from 'react-router-dom';
import {Play, Award, Home as HomeIcon, User, MapPin, Gift, BookOpen,} from 'lucide-react';
import imgCardiaca from '../../assets/images/imagem-cardiaca.png';
import imgSono from '../../assets/images/imagem-sono.png';
import imgRespiracao from '../../assets/images/imagem-respiracao.jpg';
import imgProgresso from '../../assets/images/acompanhe-progresso.png';
import { buscarCep } from '../../services/viacep';
import SystemNavbar from '../../components/SystemNavbar/SystemNavbar';

export function HomeSistema() {
  const [modalRede, setModalRede] = useState(false);
  const [cepInput, setCepInput] = useState('');
  const [loadingCep, setLoadingCep] = useState(false);
  const [resultadoCep, setResultadoCep] = useState(null);
  const [erroCep, setErroCep] = useState('');

  const handleBuscarCep = async (e) => {
    e.preventDefault();
    setLoadingCep(true);
    setErroCep('');
    setResultadoCep(null);

    try {
      const dados = await buscarCep(cepInput);
      setResultadoCep(dados);
    } catch (err) {
      setErroCep(err.message || 'Erro ao buscar CEP');
    } finally {
      setLoadingCep(false);
    }
  };

  return (
    <div className="bg-light min-vh-100 pb-5">
      <SystemNavbar />

      <main className="is-container py-4">
        
        
        <div className="mb-4">
          <h1 className="fw-bold text-dark fs-2 mb-1">
            Bem-vindo de volta, <span className="text-is-green">João da Silva!</span>
          </h1>
          <p className="text-muted fs-6 mb-0">Acesse suas jornadas, pontos e serviços de saúde</p>
        </div>
        
        
        <section className="mb-5">
          <h2 className="is-section-title-orange fs-4 mb-3">Ações Rápidas</h2>

          <div className="row g-3">
            
            <div className="col-6 col-md-4 col-lg-3">
              <button 
                type="button"
                className="is-card is-action-card h-100 w-100 border-0 shadow-sm cursor-pointer"
                onClick={() => setModalRede(true)}
              >
                <div className="is-icon-chip mb-2">
                  <MapPin size={24} />
                </div>
                <div className="is-action-title">
                  <span className="fw-bold text-dark fs-6">Rede de Saúde</span>
                </div>
              </button>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <a 
                href="#jornadas" 
                className="is-card is-action-card h-100 w-100 border-0 shadow-sm text-decoration-none"
              >
                <div className="is-icon-chip mb-2">
                  <BookOpen size={24} />
                </div>
                <div className="is-action-title">
                  <span className="fw-bold text-dark fs-6">Jornadas</span>
                </div>
              </a>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <a
                href="/404.html"
                className="is-card is-action-card h-100 w-100 border-0 shadow-sm text-decoration-none"
              >
                <div className="is-icon-chip mb-2">
                  <Gift size={24} />
                </div>
                <div className="is-action-title">
                  <span className="fw-bold text-dark fs-6">Pontos</span>
                </div>
              </a>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <Link 
                to="/meu-perfil" 
                className="is-card is-action-card h-100 w-100 border-0 shadow-sm text-decoration-none"
              >
                <div className="is-icon-chip mb-2">
                  <User size={24} />
                </div>
                <div className="is-action-title">
                  <span className="fw-bold text-dark fs-6">Meu Perfil</span>
                </div>
              </Link>
            </div>

          </div>
        </section>

        
        <div className="is-hero-card p-4 p-md-5 mb-5 shadow-sm">
          <img src={imgCardiaca} alt="Jornada Cardíaca" className="is-card-bg-img" />
          
          <div className="is-hero-content col-12 col-lg-8">
            <p className="text-white fs-3 mb-0 fw-light">Comece sua</p>
            <h2 className="fw-bold text-white display-4 mb-2">Jornada Cardíaca</h2>
            <p className="text-white fs-6 mb-4">
              Aprenda como pequenos hábitos diários podem auxiliar na prevenção de infarto, controle de hipertensão e muito mais!
            </p>
            <button type="button" className="is-btn is-btn--orange fs-5 px-4 py-2 d-inline-flex align-items-center gap-2">
              Iniciar Jornada <Play size={20} fill="currentColor" />
            </button>
          </div>
        </div>

        <section className="mb-5">
          <h2 className="is-section-title-orange fs-4 mb-3">Continue Assistindo</h2>
          <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="is-card h-100 d-flex flex-column justify-content-between">
                <div>
                  <span className="is-eyebrow mb-2">Hipertensão</span>
                  <h4 className="fw-bold text-dark fs-5 mb-3">Controlando o colesterol na alimentação</h4>
                </div>
                <div>
                  <div className="d-flex justify-content-between text-muted fs-6 mb-1">
                    <span>Progresso</span>
                    <span>65%</span>
                  </div>
                  <div className="progress" role="progressbar" aria-label="Progresso da jornada de hipertensão" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar w-75"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="is-card h-100 d-flex flex-column justify-content-between">
                <div>
                  <span className="is-eyebrow mb-2">Prevenção</span>
                  <h4 className="fw-bold text-dark fs-5 mb-3">Hábitos diários para o controle da glicemia</h4>
                </div>
                <div>
                  <div className="d-flex justify-content-between text-muted fs-6 mb-1">
                    <span>Progresso</span>
                    <span>30%</span>
                  </div>
                  <div className="progress" role="progressbar" aria-label="Progresso da jornada de prevenção" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar w-25"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5" id="jornadas">
          <h2 className="is-section-title-orange fs-4 mb-3">Jornadas Recomendadas</h2>
          <div className="row g-4">
            
            <div className="col-12 col-md-6 col-lg-4">
              <div className="is-jornada-card">
                <img src={imgSono} alt="Jornada do Sono" className="is-card-bg-img" />
                <div className="is-jornada-content">
                  <h4 className="fw-bold text-white fs-3 mb-3">Jornada do Sono</h4>
                  <button type="button" className="is-btn is-btn--orange w-100 fs-6 py-2 d-flex align-items-center justify-content-center gap-2">
                    Iniciar Jornada <Play size={18} fill="currentColor" />
                  </button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="is-jornada-card">
                <img src={imgCardiaca} alt="Jornada Cardíaca" className="is-card-bg-img" />
                <div className="is-jornada-content">
                  <h4 className="fw-bold text-white fs-3 mb-3">Jornada Cardíaca</h4>
                  <button type="button" className="is-btn is-btn--orange w-100 fs-6 py-2 d-flex align-items-center justify-content-center gap-2">
                    Iniciar Jornada <Play size={18} fill="currentColor" />
                  </button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="is-jornada-card">
                <img src={imgRespiracao} alt="Jornada Respiratória" className="is-card-bg-img" />
                <div className="is-jornada-content">
                  <h4 className="fw-bold text-white fs-3 mb-3">Jornada Respiratória</h4>
                  <button type="button" className="is-btn is-btn--orange w-100 fs-6 py-2 d-flex align-items-center justify-content-center gap-2">
                    Iniciar Jornada <Play size={18} fill="currentColor" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section>
          <div className="is-jornada-card text-center p-4 p-md-5">
            <img src={imgProgresso} alt="Acompanhe seu progresso" className="is-card-bg-img" />
            <div className="is-jornada-content w-100 d-flex flex-column align-items-center justify-content-center">
              <h3 className="fw-bold text-white fs-2 mb-3 text-center">Acompanhe seu progresso</h3>
              <button type="button" className="is-btn is-btn--outline-white fs-6 py-2 px-4">
                Veja suas estatísticas
              </button>
            </div>
          </div>
        </section>

      </main>

      {modalRede && (
        <div className="is-modal-overlay" onClick={() => setModalRede(false)}>
          <div 
            className="bg-white rounded-4 shadow-lg border-0 position-relative is-modal-box is-modal-box-auto p-4 p-md-5"
            role="dialog"
            aria-modal="true"
            aria-labelledby="rede-saude-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              type="button" 
              className="btn-close position-absolute top-0 end-0 m-3 z-3"
              onClick={() => setModalRede(false)}
              aria-label="Fechar"
            ></button>

            <div className="mb-3 pe-4">
              <h3 id="rede-saude-modal-title" className="fw-bold text-dark fs-4 mb-0">Encontrar Rede de Saúde por CEP</h3>
            </div>

            <p className="text-muted fs-6 mb-3">
              Digite seu CEP para localizar as Unidades Básicas de Saúde (UBS) e Hospitais mais próximos:
            </p>

            <form onSubmit={handleBuscarCep} className="mb-3">
              <label htmlFor="rede-saude-cep" className="visually-hidden">
                CEP para buscar unidades de saúde
              </label>
              <div className="input-group">
                <input 
                  id="rede-saude-cep"
                  type="text" 
                  className="is-form-input flex-fill" 
                  placeholder="Ex: 90010-000 ou 01001-000"
                  value={cepInput}
                  onChange={(e) => setCepInput(e.target.value)}
                  required
                />
                <button type="submit" className="is-btn is-btn--green px-4" disabled={loadingCep}>
                  {loadingCep ? 'Buscando...' : 'Buscar'}
                </button>
              </div>
            </form>

            {erroCep && (
              <div className="alert alert-danger mb-3" role="alert">
                {erroCep}
              </div>
            )}

            {resultadoCep && (
              <div className="bg-light p-3 rounded-3 border">
                <h5 className="fw-bold text-success mb-2">
                  Endereço: {resultadoCep.logradouro}, {resultadoCep.bairro} — {resultadoCep.localidade}/{resultadoCep.uf}
                </h5>
                <p className="text-muted fs-6 mb-3">Unidades de saúde mais próximas:</p>

                <div className="d-flex flex-column gap-2">
                  <div className="bg-white p-3 rounded-3 border">
                    <div className="fw-bold text-dark fs-6">UBS Central - {resultadoCep.bairro}</div>
                    <div className="text-muted fs-6">{resultadoCep.logradouro} — {resultadoCep.localidade}/{resultadoCep.uf}</div>
                    <div className="text-success fw-bold fs-6 mt-1">Aberto das 07:00 às 19:00</div>
                  </div>

                  <div className="bg-white p-3 rounded-3 border">
                    <div className="fw-bold text-dark fs-6">UPA 24h {resultadoCep.localidade}</div>
                    <div className="text-muted fs-6">Atendimento Geral e Urgências — Pronto Socorro</div>
                    <div className="text-danger fw-bold fs-6 mt-1">Funcionamento 24 Horas</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <nav className="fixed-bottom bg-white border-top shadow-lg py-2 d-md-none">
        <div className="d-flex justify-content-around align-items-center text-center">
          <Link to="/inicio" className="text-decoration-none text-success fw-bold fs-6">
            <HomeIcon size={22} className="d-block mx-auto mb-1" />
            Início
          </Link>
          <a href="#jornadas" className="text-decoration-none text-muted fs-6">
            <Play size={22} className="d-block mx-auto mb-1" />
            Jornadas
          </a>
          <span className="text-decoration-none text-muted fs-6">
            <Award size={22} className="d-block mx-auto mb-1" />
            Pontos
          </span>
          <Link to="/meu-perfil" className="text-decoration-none text-muted fs-6">
            <User size={22} className="d-block mx-auto mb-1" />
            Perfil
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default HomeSistema;