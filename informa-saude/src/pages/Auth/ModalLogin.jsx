import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthModalLayout } from './AuthModalLayout';
import { Eye, EyeOff } from 'lucide-react';
import googleIcon from '../../assets/images/google.svg';

export function ModalLogin({ onClose, onAbrirCadastro }) {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [verSenha, setVerSenha] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleEntrar = (e) => {
    e.preventDefault();
    onClose();
    navigate('/inicio');
  };

  return (
    <AuthModalLayout onClose={onClose} titulo="Acessar conta" centralizarConteudo>
      <form onSubmit={handleEntrar}>
        <div className="is-form-group">
          <label htmlFor="modal-usuario" className="form-label is-form-label">Usuário ou E-mail</label>
          <input
            id="modal-usuario"
            type="text"
            className="form-control is-form-input w-100"
            placeholder="Digite seu usuário ou e-mail"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>

        <div className="is-form-group">
          <label htmlFor="modal-senha" className="form-label is-form-label">Senha</label>
          <div className="position-relative">
            <input
              id="modal-senha"
              type={verSenha ? 'text' : 'password'}
              className="form-control is-form-input w-100 pe-5"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <button
              type="button"
              className="btn border-0 position-absolute end-0 top-50 translate-middle-y text-muted p-2 me-1"
              onClick={() => setVerSenha(!verSenha)}
              aria-label={verSenha ? 'Ocultar senha' : 'Mostrar senha'}
            >
              {verSenha ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <div className="text-end mb-2">
          <a href="/404.html" className="text-decoration-none fw-bold fs-6 text-dark">
            Esqueci minha senha
          </a>
        </div>

        <div className="d-flex flex-column gap-2 mt-2">
          <button type="submit" className="is-btn is-btn--orange w-100 fs-6 py-2">
            Acessar conta
          </button>

          <div className="d-flex align-items-center gap-2 my-1">
            <hr className="flex-fill my-0 text-muted opacity-25" />
            <span className="text-muted fs-6 fw-semibold">OU</span>
            <hr className="flex-fill my-0 text-muted opacity-25" />
          </div>

          <button
            type="button"
            className="btn is-btn-google w-100 py-2 fs-6 d-flex align-items-center justify-content-center"
            onClick={() => alert('Integração com Google Login em breve!')}
          >
            <img src={googleIcon} alt="" width="18" height="18" className="me-2" aria-hidden="true" />
            Entrar com o Google
          </button>
        </div>

        <div className="text-center mt-3 pt-2 border-top">
          <span className="text-muted fs-6">Ainda não tem conta? </span>
          <button type="button" className="is-link-button is-auth-access-link fs-6" onClick={onAbrirCadastro}>
            Criar conta grátis
          </button>
        </div>
      </form>
    </AuthModalLayout>
  );
}

export default ModalLogin;
