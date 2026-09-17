import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Settings, KeyRound, LogOut } from 'lucide-react';
import fotoPerfilInicial from '../../assets/images/foto-perfil.png';
import { SystemNavbar, ItemMeuPerfil, AvatarUsuario, ToastFeedback } from '../../components';
import { obterNomeUsuario, obterEmailUsuario } from '../../utils/usuario';

export function MeuPerfil() {
  const navigate = useNavigate();
  const nomeUsuario = obterNomeUsuario();
  const emailUsuario = obterEmailUsuario();
  const [modalSair, setModalSair] = useState(false);
  const [modalSenha, setModalSenha] = useState(false);
  const [foto, setFoto] = useState(() => {
    const fotoSalva = localStorage.getItem('informa-saude-foto-perfil');
    if (fotoSalva === 'null') return null;
    return fotoSalva || fotoPerfilInicial;
  });
  const [toastMsg, setToastMsg] = useState(null);

  const atualizarFotoPerfil = (novaFoto) => {
    setFoto(novaFoto);
    if (novaFoto) {
      localStorage.setItem('informa-saude-foto-perfil', novaFoto);
    } else {
      localStorage.setItem('informa-saude-foto-perfil', 'null');
    }
    window.dispatchEvent(new Event('foto-perfil-atualizada'));
  };

  const handleConfirmarSair = () => {
    setModalSair(false);
    navigate('/');
  };

  const handleSalvarSenha = (e) => {
    e.preventDefault();
    setModalSenha(false);
    setToastMsg('Senha alterada com sucesso!');
  };

  return (
    <div className="bg-light min-vh-100 pb-5">
      <SystemNavbar />

      <main className="is-container py-4">
        <div className="mb-4">
          <h1 className="fw-bold text-dark fs-2 mb-1">Meu Perfil</h1>
          <p className="text-muted fs-6 mb-0">Gerencie seus dados pessoais, senha e preferências do sistema</p>
        </div>

        <div className="row g-4">
          
          <div className="col-12 col-lg-4">
            <div className="bg-white rounded-4 shadow-sm p-4 text-center border-0">
              <div className="d-flex justify-content-center mb-3">
                <AvatarUsuario
                  nome={nomeUsuario}
                  src={foto}
                  podeEditar
                  onAlterarFoto={(novaUrl) => {
                    atualizarFotoPerfil(novaUrl);
                    setToastMsg('Foto de perfil atualizada!');
                  }}
                  onRemoverFoto={() => {
                    atualizarFotoPerfil(null);
                    setToastMsg('Foto removida com sucesso!');
                  }}
                />
              </div>
              <h3 className="fw-bold text-dark fs-3 mb-1">{nomeUsuario}</h3>
              <p className="text-muted fs-6 mb-0">{emailUsuario}</p>
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <div className="bg-white rounded-4 shadow-sm p-4 border-0">
              <h4 className="fw-bold text-dark fs-4 mb-4">Opções da Conta</h4>

              <div className="d-flex flex-column gap-3">
                <ItemMeuPerfil
                  icone={<User size={22} />}
                  titulo="Editar Perfil"
                  descricao="Atualizar nome, e-mail, telefone e data de nascimento"
                  to="/editar-perfil"
                />

                <ItemMeuPerfil
                  icone={<Settings size={22} />}
                  titulo="Configurações"
                  descricao="Gerenciar notificações e opções da conta"
                  to="/configuracoes"
                />

                <ItemMeuPerfil
                  icone={<KeyRound size={22} />}
                  titulo="Alterar Senha"
                  descricao="Atualizar sua senha de acesso ao sistema"
                  onClick={() => setModalSenha(true)}
                />

                <ItemMeuPerfil
                  icone={<LogOut size={22} className="text-danger" />}
                  titulo="Sair da Conta"
                  descricao="Encerrar a sessão atual com segurança"
                  onClick={() => setModalSair(true)}
                  perigo
                />
              </div>
            </div>
          </div>

        </div>
      </main>

      {modalSenha && (
        <div className="is-modal-overlay" onClick={() => setModalSenha(false)}>
          <div 
            className="bg-white rounded-4 shadow-lg border-0 position-relative is-modal-box is-modal-box-sm p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="alterar-senha-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              type="button" 
              className="btn-close position-absolute top-0 end-0 m-3 z-3"
              onClick={() => setModalSenha(false)}
              aria-label="Fechar"
            ></button>

            <h3 id="alterar-senha-modal-title" className="fw-bold text-dark fs-4 mb-3">Alterar Senha</h3>

            <form onSubmit={handleSalvarSenha}>
              <div className="is-form-group mb-2">
                <label htmlFor="senha-atual" className="is-form-label mb-1 fs-6">Senha Atual</label>
                <input id="senha-atual" type="password" className="is-form-input w-100 py-2 fs-6" placeholder="Digite sua senha atual" required />
              </div>

              <div className="is-form-group mb-2">
                <label htmlFor="nova-senha" className="is-form-label mb-1 fs-6">Nova Senha</label>
                <input id="nova-senha" type="password" className="is-form-input w-100 py-2 fs-6" placeholder="Digite a nova senha" required />
              </div>

              <div className="is-form-group mb-3">
                <label htmlFor="confirmar-nova-senha" className="is-form-label mb-1 fs-6">Confirmar Nova Senha</label>
                <input id="confirmar-nova-senha" type="password" className="is-form-input w-100 py-2 fs-6" placeholder="Confirme a nova senha" required />
              </div>

              <div className="is-modal-actions">
                <button type="submit" className="is-btn is-btn--profile is-btn--orange fs-6">
                  Salvar Nova Senha
                </button>
                <button
                  type="button"
                  className="is-btn is-btn--profile is-btn--outline-green fs-6"
                  onClick={() => setModalSenha(false)}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {modalSair && (
        <div className="is-modal-overlay" onClick={() => setModalSair(false)}>
          <div
            className="bg-white rounded-4 shadow-lg border-0 position-relative is-modal-box is-modal-box-sm p-4 pt-5"
            role="dialog"
            aria-modal="true"
            aria-labelledby="sair-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 m-3 z-3"
              onClick={() => setModalSair(false)}
              aria-label="Fechar"
            ></button>
            <h3 id="sair-modal-title" className="fw-bold text-dark fs-4 mb-2">Sair do aplicativo?</h3>
            <p className="text-muted fs-6 mb-4">
              Você precisará preencher suas credenciais ao acessar novamente.
            </p>
            <div className="is-modal-actions">
              <button type="button" className="is-btn is-btn--profile is-btn--orange fs-6" onClick={handleConfirmarSair}>
                Sim, sair
              </button>
              <button type="button" className="is-btn is-btn--profile is-btn--outline-green fs-6" onClick={() => setModalSair(false)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastFeedback
        visivel={!!toastMsg}
        onClose={() => setToastMsg(null)}
        titulo="Atualização"
        mensagem={toastMsg}
        tipo="sucesso"
      />

    </div>
  );
}

export default MeuPerfil;