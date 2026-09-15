import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import fotoPerfil from '../../assets/images/foto-perfil.png';
import SystemNavbar from '../../components/SystemNavbar/SystemNavbar';

export function EditarPerfil() {
  const dadosIniciais = {
    nome: 'João da Silva',
    email: 'joao.silva@exemplo.com',
    telefone: '(51) 9 9999 - 9999',
    dataNascimento: '23/03/1954',
  };
  const [nome, setNome] = useState('João da Silva');
  const [email, setEmail] = useState('joao.silva@exemplo.com');
  const [telefone, setTelefone] = useState('(51) 9 9999 - 9999');
  const [dataNascimento, setDataNascimento] = useState('23/03/1954');
  const [modoEdicao, setModoEdicao] = useState(false);
  const [toastSucesso, setToastSucesso] = useState(false);

  const formatarDataNascimento = (valor) => {
    let valorFormatado = valor.replace(/\D/g, '');
    if (valorFormatado.length > 2) valorFormatado = valorFormatado.replace(/^(\d{2})/, '$1/');
    if (valorFormatado.length > 5) valorFormatado = valorFormatado.replace(/^(\d{2})\/(\d{2})/, '$1/$2/');
    return valorFormatado;
  };

  const handleSalvar = (e) => {
    e.preventDefault();
    setModoEdicao(false);
    setToastSucesso(true);
  };

  const handleCancelarEdicao = () => {
    setNome(dadosIniciais.nome);
    setEmail(dadosIniciais.email);
    setTelefone(dadosIniciais.telefone);
    setDataNascimento(dadosIniciais.dataNascimento);
    setModoEdicao(false);
  };

  useEffect(() => {
    if (!toastSucesso) return undefined;

    const timeoutId = setTimeout(() => setToastSucesso(false), 5000);
    return () => clearTimeout(timeoutId);
  }, [toastSucesso]);

  return (
    <div className="bg-light min-vh-100 pb-5">
      <SystemNavbar />

      <main className="is-container py-4">
        <div className="mb-4">
          <h1 className="fw-bold text-dark fs-2 mb-1">Editar Perfil</h1>
          <p className="text-muted fs-6 mb-0">Mantenha seus dados de contato e informações cadastrais atualizados</p>
        </div>

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
              <div className="d-flex align-items-center justify-content-between gap-3 mb-4">
                <h2 className="fw-bold text-dark fs-4 mb-0">Dados pessoais</h2>
                {!modoEdicao && (
                  <button
                    type="button"
                    className="is-btn is-btn--profile is-btn--outline-green fs-6"
                    onClick={() => setModoEdicao(true)}
                  >
                    Editar
                  </button>
                )}
              </div>

              <form onSubmit={handleSalvar}>
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <div className="is-form-group">
                      <label htmlFor="nome-completo" className="form-label is-form-label fs-6">Nome Completo</label>
                      <input 
                        id="nome-completo"
                        type="text" 
                        className="form-control is-form-input w-100 py-2 fs-6" 
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        disabled={!modoEdicao}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="is-form-group">
                      <label htmlFor="email" className="form-label is-form-label fs-6">E-mail</label>
                      <input 
                        id="email"
                        type="email" 
                        className="form-control is-form-input w-100 py-2 fs-6" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={!modoEdicao}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="is-form-group">
                      <label htmlFor="telefone" className="form-label is-form-label fs-6">Telefone</label>
                      <input 
                        id="telefone"
                        type="tel" 
                        className="form-control is-form-input w-100 py-2 fs-6" 
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        disabled={!modoEdicao}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="is-form-group">
                      <label htmlFor="data-nascimento" className="form-label is-form-label fs-6">Data de nascimento</label>
                      <input 
                        id="data-nascimento"
                        type="text" 
                        className="form-control is-form-input w-100 py-2 fs-6" 
                        placeholder="dd/mm/aaaa"
                        maxLength={10}
                        value={dataNascimento}
                        onChange={(e) => setDataNascimento(formatarDataNascimento(e.target.value))}
                        disabled={!modoEdicao}
                        required
                      />
                    </div>
                  </div>
                </div>

                {modoEdicao && (
                  <div className="is-modal-actions mt-4">
                    <button type="submit" className="is-btn is-btn--profile is-btn--orange fs-6">
                      Atualizar cadastro
                    </button>
                    <button
                      type="button"
                      className="is-btn is-btn--profile is-btn--outline-green fs-6"
                      onClick={handleCancelarEdicao}
                    >
                      Cancelar
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </main>

      {toastSucesso && (
        <div className="toast-container position-fixed top-0 end-0 p-3">
          <div className="toast show text-bg-success" role="status" aria-live="polite" aria-atomic="true">
            <div className="toast-header text-bg-success border-bottom border-light-subtle">
              <strong className="me-auto">Perfil atualizado</strong>
              <button
                type="button"
                className="btn-close"
                onClick={() => setToastSucesso(false)}
                aria-label="Fechar"
              ></button>
            </div>
            <div className="toast-body text-white">
              Seus dados foram atualizados com sucesso no sistema.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditarPerfil;