import { useEffect, useState } from 'react';
import fotoPerfil from '../../assets/images/foto-perfil.webp';
import { SystemNavbar, ToastFeedback, FormInput, TituloPaginaSistema, CardPerfilSidebar } from '../../components';

export function EditarPerfil() {
  const dadosIniciais = {
    nome: 'João da Silva',
    email: 'joaodasilva@example.com',
    telefone: '(51) 9 9999 - 9999',
    dataNascimento: '23/03/1954',
  };
  const [nome, setNome] = useState('João da Silva');
  const [email, setEmail] = useState('joaodasilva@example.com');
  const [telefone, setTelefone] = useState('(51) 9 9999 - 9999');
  const [dataNascimento, setDataNascimento] = useState('23/03/1954');
  const [modoEdicao, setModoEdicao] = useState(false);
  const [toastSucesso, setToastSucesso] = useState(false);
  const [toastFotoMsg, setToastFotoMsg] = useState(null);
  const [foto, setFoto] = useState(() => {
    const fotoSalva = localStorage.getItem('informa-saude-foto-perfil');
    if (fotoSalva === 'null') return null;
    return fotoSalva || fotoPerfil;
  });

  const atualizarFotoPerfil = (novaFoto) => {
    setFoto(novaFoto);
    if (novaFoto) {
      localStorage.setItem('informa-saude-foto-perfil', novaFoto);
    } else {
      localStorage.setItem('informa-saude-foto-perfil', 'null');
    }
    window.dispatchEvent(new Event('foto-perfil-atualizada'));
  };

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
        <TituloPaginaSistema
          titulo="Editar Perfil"
          subtitulo="Mantenha seus dados de contato e informações cadastrais atualizados"
          linkVoltar={{ to: '/meu-perfil', texto: 'Voltar para Meu Perfil' }}
        />

        <div className="row g-4">
          <div className="col-12 col-lg-4">
            <CardPerfilSidebar
              nome={nome}
              email={email}
              foto={foto}
              podeEditar
              onAlterarFoto={(novaUrl) => {
                atualizarFotoPerfil(novaUrl);
                setToastFotoMsg('Foto de perfil atualizada!');
              }}
              onRemoverFoto={() => {
                atualizarFotoPerfil(null);
                setToastFotoMsg('Foto removida com sucesso!');
              }}
            />
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
                    <FormInput
                      id="nome-completo"
                      label="Nome Completo"
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      disabled={!modoEdicao}
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <FormInput
                      id="email"
                      label="E-mail"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={!modoEdicao}
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <FormInput
                      id="telefone"
                      label="Telefone"
                      type="tel"
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                      disabled={!modoEdicao}
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <FormInput
                      id="data-nascimento"
                      label="Data de nascimento"
                      type="text"
                      placeholder="dd/mm/aaaa"
                      maxLength={10}
                      value={dataNascimento}
                      onChange={(e) => setDataNascimento(formatarDataNascimento(e.target.value))}
                      disabled={!modoEdicao}
                      required
                    />
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

      <ToastFeedback
        visivel={toastSucesso}
        onClose={() => setToastSucesso(false)}
        titulo="Perfil atualizado"
        mensagem="Seus dados foram atualizados com sucesso no sistema."
        tipo="sucesso"
      />

      <ToastFeedback
        visivel={!!toastFotoMsg}
        onClose={() => setToastFotoMsg(null)}
        titulo="Foto de perfil"
        mensagem={toastFotoMsg}
        tipo="sucesso"
      />
    </div>
  );
}

export default EditarPerfil;