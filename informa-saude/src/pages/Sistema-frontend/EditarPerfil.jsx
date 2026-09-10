import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import fotoPerfil from '../../assets/images/foto-perfil.png';

export function EditarPerfil() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('João da Silva');
  const [email, setEmail] = useState('joao.silva@exemplo.com');
  const [telefone, setTelefone] = useState('(51) 9 9999 - 9999');
  const [dataNascimento, setDataNascimento] = useState('1995-03-23');
  const [modalSucesso, setModalSucesso] = useState(false);

  const handleSalvar = (e) => {
    e.preventDefault();
    setModalSucesso(true);
  };

  const handleFecharModal = () => {
    setModalSucesso(false);
    navigate('/meu-perfil');
  };

  return (
    <div className="bg-light min-vh-100 pb-5">
      <header className="is-footer-green py-2 px-3 shadow-sm sticky-top">
        <div className="is-container d-flex align-items-center justify-content-between">
          <Link to="/meu-perfil" className="d-flex align-items-center text-decoration-none text-white gap-2 fs-6 fw-bold">
            <ArrowLeft size={20} /> Voltar para Meu Perfil
          </Link>
          <Link to="/perfil" className="is-nav-btn is-nav-btn--outline-white py-1 px-3 fs-6 text-decoration-none">
            Início
          </Link>
        </div>
      </header>

      <div className="is-footer-green border-top border-white border-opacity-10 py-4">
        <div className="is-container">
          <h1 className="fw-bold text-white fs-2 mb-1">Editar Perfil</h1>
          <p className="text-white-50 fs-6 mb-0">Mantenha seus dados de contato e informações cadastrais atualizados</p>
        </div>
      </div>

      <main className="is-container py-4">
        <div className="mb-3">
          <Link to="/meu-perfil" className="is-link-green d-inline-flex align-items-center gap-1 fs-6">
            <ArrowLeft size={18} /> Voltar para Meu Perfil
          </Link>
        </div>

        <div className="row g-4">
          
          <div className="col-12 col-lg-4">
            <div className="bg-white rounded-4 shadow-sm p-4 text-center border-0">
              <div className="d-flex justify-content-center mb-3">
                <img 
                  src={fotoPerfil} 
                  alt="João Da Silva" 
                  className="rounded-circle object-fit-cover shadow-sm border border-3 border-success-subtle is-profile-avatar" 
                />
              </div>
              <h3 className="fw-bold text-dark fs-3 mb-1">João Da Silva</h3>
              <p className="text-muted fs-6 mb-0">joao.silva@exemplo.com</p>
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <div className="bg-white rounded-4 shadow-sm p-4 border-0">
              <form onSubmit={handleSalvar}>
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <div className="is-form-group">
                      <label className="is-form-label fs-6">Nome Completo</label>
                      <input 
                        type="text" 
                        className="is-form-input w-100 py-2 fs-6" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="is-form-group">
                      <label className="is-form-label fs-6">E-mail</label>
                      <input 
                        type="email" 
                        className="is-form-input w-100 py-2 fs-6" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="is-form-group">
                      <label className="is-form-label fs-6">Telefone</label>
                      <input 
                        type="tel" 
                        className="is-form-input w-100 py-2 fs-6" 
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="is-form-group">
                      <label className="is-form-label fs-6">Data de aniversário</label>
                      <input 
                        type="date" 
                        className="is-form-input w-100 py-2 fs-6" 
                        value={dataNascimento}
                        onChange={(e) => setDataNascimento(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-end">
                  <button type="submit" className="is-btn is-btn--orange px-5 fs-6 py-2">
                    Atualizar cadastro
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </main>

      {modalSucesso && (
        <div className="is-modal-overlay" onClick={handleFecharModal}>
          <div 
            className="bg-white rounded-4 shadow-lg border-0 position-relative is-modal-box is-modal-box-sm p-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="fw-bold text-success fs-3 mb-2">Perfil Atualizado!</h3>
            <p className="text-muted fs-6 mb-4">
              Seus dados foram atualizados com sucesso no sistema.
            </p>
            <button 
              type="button" 
              className="is-btn is-btn--orange w-100 fs-6 py-2"
              onClick={handleFecharModal}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditarPerfil;