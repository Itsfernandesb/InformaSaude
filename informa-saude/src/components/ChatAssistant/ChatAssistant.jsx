import { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

export function ChatAssistant() {
  const [aberto, setAberto] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const [mensagens, setMensagens] = useState([
    {
      id: 1,
      autor: 'assistente',
      texto: 'Olá! O assistente de saúde estará disponível em breve.'
    }
  ]);

  const enviarMensagem = (event) => {
    event.preventDefault();
    const texto = mensagem.trim();

    if (!texto) {
      return;
    }

    setMensagens((mensagensAtuais) => [
      ...mensagensAtuais,
      { id: Date.now(), autor: 'usuario', texto },
      {
        id: Date.now() + 1,
        autor: 'assistente',
        texto: 'Ainda estou sendo preparado. Em breve poderei responder sua mensagem.'
      }
    ]);
    setMensagem('');
  };

  return (
    <div className="is-chat-assistant">
      {aberto && (
        <section className="is-chat-panel" aria-label="Chat do assistente de saúde">
          <header className="is-chat-header">
            <div>
              <h2 className="is-chat-title">Assistente de saúde</h2>
              <p className="is-chat-status">Em preparação</p>
            </div>
            <button
              type="button"
              className="is-chat-close"
              onClick={() => setAberto(false)}
              aria-label="Fechar chat"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </header>

          <div className="is-chat-messages" aria-live="polite">
            {mensagens.map((item) => (
              <div key={item.id} className={`is-chat-message is-chat-message--${item.autor}`}>
                {item.texto}
              </div>
            ))}
          </div>

          <form className="is-chat-form" onSubmit={enviarMensagem}>
            <label htmlFor="chat-message" className="visually-hidden">
              Digite sua mensagem
            </label>
            <input
              id="chat-message"
              type="text"
              value={mensagem}
              onChange={(event) => setMensagem(event.target.value)}
              placeholder="Digite uma mensagem"
              className="is-chat-input"
            />
            <button type="submit" className="is-chat-send" aria-label="Enviar mensagem">
              <Send size={18} aria-hidden="true" />
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        className="is-chat-fab"
        onClick={() => setAberto((estadoAtual) => !estadoAtual)}
        aria-label={aberto ? 'Fechar assistente de saúde' : 'Abrir assistente de saúde'}
        aria-expanded={aberto}
      >
        {aberto ? <X size={26} aria-hidden="true" /> : <MessageCircle size={26} aria-hidden="true" />}
      </button>
    </div>
  );
}

export default ChatAssistant;
