import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { AuthModalLayout } from './AuthModalLayout';
import CampoSenha from '../../components/Auth/CampoSenha';

const OPCOES_SEXO = [
  { id: 'sexoFem', valor: 'Feminino' },
  { id: 'sexoMasc', valor: 'Masculino' },
  { id: 'sexoOutro', valor: 'Outro / Prefiro não informar' }
];

export function ModalCriarConta({ onClose, onAbrirLogin }) {
  const navigate = useNavigate();
  const [etapaCadastro, setEtapaCadastro] = useState(1);
  const [dadosCadastro, setDadosCadastro] = useState({
    nome: '',
    dataNascimento: '',
    sexo: '',
    email: '',
    telefone: '',
    senha: '',
    confirmarSenha: ''
  });
  const [senhasVisiveis, setSenhasVisiveis] = useState({
    senha: false,
    confirmarSenha: false
  });
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleAvancarCadastroEtapa1 = (e) => {
    e.preventDefault();
    setEtapaCadastro(2);
  };

  const handleFinalizarCadastro = (e) => {
    e.preventDefault();
    if (dadosCadastro.email === 'existe@exemplo.com') {
      setFeedback('alerta');
      return;
    }
    setFeedback('sucesso');
  };

  const handleIrParaPerfil = () => {
    setFeedback(null);
    onClose();
    navigate('/inicio');
  };

  const atualizarCampo = (campo, valor) => {
    setDadosCadastro((dadosAtuais) => ({
      ...dadosAtuais,
      [campo]: valor
    }));
  };

  const alternarVisibilidadeSenha = (campo) => {
    setSenhasVisiveis((estadoAtual) => ({
      ...estadoAtual,
      [campo]: !estadoAtual[campo]
    }));
  };

  const formatarDataNascimento = (valor) => {
    let valorFormatado = valor.replace(/\D/g, '');
    if (valorFormatado.length > 2) valorFormatado = valorFormatado.replace(/^(\d{2})/, '$1/');
    if (valorFormatado.length > 5) valorFormatado = valorFormatado.replace(/^(\d{2})\/(\d{2})/, '$1/$2/');
    return valorFormatado;
  };

  const formatarTelefone = (valor) => {
    let valorFormatado = valor.replace(/\D/g, '');
    if (valorFormatado.length > 2) valorFormatado = valorFormatado.replace(/^(\d{2})/, '($1) ');
    if (valorFormatado.length > 7) valorFormatado = valorFormatado.replace(/^\((\d{2})\)\s(\d{5})/, '($1) $2-');
    return valorFormatado;
  };

  if (feedback === 'sucesso') {
    return (
      <AuthModalLayout onClose={onClose} titulo="Cadastro concluído" centralizarConteudo>
        <div className="py-3 text-center d-flex flex-column align-items-center justify-content-center h-100">
          <CheckCircle2 size={56} className="text-success mb-2" />
          <h4 className="fw-bold text-dark fs-4 mb-1">Cadastro criado com sucesso!</h4>
          <p className="text-muted fs-6 mb-3">Agora você já tem acesso completo ao Informa Saúde!</p>
          <button type="button" className="is-btn is-btn--orange w-100 fs-6 py-2" onClick={handleIrParaPerfil}>
            Acessar minha conta
          </button>
        </div>
      </AuthModalLayout>
    );
  }

  if (feedback === 'alerta') {
    return (
      <AuthModalLayout onClose={onClose} titulo="Atenção" centralizarConteudo>
        <div className="py-3 text-center d-flex flex-column align-items-center justify-content-center h-100">
          <AlertTriangle size={56} className="text-warning mb-2" />
          <h4 className="fw-bold text-dark fs-4 mb-1">Dados já cadastrados</h4>
          <p className="text-muted fs-6 mb-1">E-mail ou telefone já cadastrados em nosso banco de dados.</p>
          <p className="text-muted fs-6 mb-3">Confira os dados digitados e tente novamente.</p>
          <div className="d-flex flex-column gap-2 w-100">
            <button type="button" className="is-btn is-btn--orange w-100 fs-6 py-2" onClick={onAbrirLogin}>
              Acessar minha conta
            </button>
            <button type="button" className="is-btn is-btn--outline-green w-100 fs-6 py-2" onClick={() => setFeedback(null)}>
              Tentar novamente
            </button>
          </div>
        </div>
      </AuthModalLayout>
    );
  }

  const botaoVoltar = etapaCadastro === 2 ? (
    <button
      type="button"
      className="btn p-0 border-0 text-secondary d-inline-flex align-items-center gap-1 fs-6 mb-1"
      onClick={() => setEtapaCadastro(1)}
      aria-label="Voltar para a etapa 1"
    >
      <ArrowLeft size={16} /> Voltar
    </button>
  ) : null;

  return (
    <AuthModalLayout
      onClose={onClose}
      titulo="Criar sua conta"
      centralizarConteudo={etapaCadastro === 1}
      conteudoAntesDoTitulo={botaoVoltar}
    >

      {etapaCadastro === 1 ? (
        <form onSubmit={handleAvancarCadastroEtapa1}>
          <div className="is-form-group">
            <label htmlFor="modal-nome" className="form-label is-form-label">Nome Completo</label>
            <input id="modal-nome" type="text" className="form-control is-form-input w-100" placeholder="Digite seu nome completo" value={dadosCadastro.nome} onChange={(e) => atualizarCampo('nome', e.target.value)} required />
          </div>

          <div className="is-form-group">
            <label htmlFor="modal-data-nascimento" className="form-label is-form-label">Data de aniversário</label>
            <input id="modal-data-nascimento" type="text" className="form-control is-form-input w-100" placeholder="dd/mm/aaaa" maxLength={10} value={dadosCadastro.dataNascimento} onChange={(e) => atualizarCampo('dataNascimento', formatarDataNascimento(e.target.value))} required />
          </div>

          <fieldset className="is-form-group border-0 p-0">
            <legend className="form-label is-form-label mb-2">Sexo</legend>
            <div className="d-flex flex-column gap-2 ms-1">
              {OPCOES_SEXO.map(({ id, valor }) => (
                <div className="form-check" key={id}>
                  <input className="form-check-input" type="radio" name="sexoRadio" id={id} value={valor} checked={dadosCadastro.sexo === valor} onChange={(e) => atualizarCampo('sexo', e.target.value)} required />
                  <label className="form-check-label text-dark fs-6" htmlFor={id}>{valor}</label>
                </div>
              ))}
            </div>
          </fieldset>

          <button type="submit" className="is-btn is-btn--orange w-100 fs-6 py-2 mt-3">Avançar</button>
        </form>
      ) : (
        <form onSubmit={handleFinalizarCadastro}>
          <div className="is-form-group">
            <label htmlFor="modal-email" className="form-label is-form-label">E-mail</label>
            <input id="modal-email" type="email" className="form-control is-form-input w-100" placeholder="seuemail@exemplo.com" value={dadosCadastro.email} onChange={(e) => atualizarCampo('email', e.target.value)} required />
          </div>

          <div className="is-form-group">
            <label htmlFor="modal-telefone" className="form-label is-form-label">Telefone</label>
            <input id="modal-telefone" type="tel" className="form-control is-form-input w-100" placeholder="(51) 9 9999-9999" maxLength={15} value={dadosCadastro.telefone} onChange={(e) => atualizarCampo('telefone', formatarTelefone(e.target.value))} required />
          </div>

          <CampoSenha
            id="modal-senha-cadastro"
            rotulo="Senha"
            valor={dadosCadastro.senha}
            onChange={(valor) => atualizarCampo('senha', valor)}
            visivel={senhasVisiveis.senha}
            onAlternar={() => alternarVisibilidadeSenha('senha')}
          />
          <CampoSenha
            id="modal-confirmar-senha"
            rotulo="Confirmar Senha"
            valor={dadosCadastro.confirmarSenha}
            onChange={(valor) => atualizarCampo('confirmarSenha', valor)}
            visivel={senhasVisiveis.confirmarSenha}
            onAlternar={() => alternarVisibilidadeSenha('confirmarSenha')}
          />

          <div className="is-password-checklist my-2">
            <strong className="d-block mb-0.5 text-dark fs-6">Requisitos da senha:</strong>
            <ul className="mb-0">
              <li>Mínimo 6 caracteres | 1 símbolo (@#%*)</li>
              <li>Uma letra maiúscula, uma minúscula e um número</li>
            </ul>
          </div>

          <button type="submit" className="is-btn is-btn--orange w-100 fs-6 py-2 mt-3">Finalizar Cadastro</button>
        </form>
      )}

      <div className="text-center mt-3 pt-2 border-top">
        <span className="text-muted fs-6">Já tem uma conta? </span>
        <button type="button" className="is-link-button fs-6" onClick={onAbrirLogin}>
          Acessar conta
        </button>
      </div>
    </AuthModalLayout>
  );
}

export default ModalCriarConta;
