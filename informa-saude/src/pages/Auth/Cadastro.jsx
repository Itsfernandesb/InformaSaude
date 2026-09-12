import { useNavigate } from 'react-router-dom';
import ModalLogin from './ModalLogin';

export function Cadastro() {
  const navigate = useNavigate();

  return (
    <div className="min-vh-100 bg-light">
      <ModalLogin abaInicial="cadastro" onClose={() => navigate('/')} />
    </div>
  );
}

export default Cadastro;