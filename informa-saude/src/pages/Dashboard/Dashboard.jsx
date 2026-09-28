import { useNavigate } from 'react-router-dom';
import { Award, Check, Clock3 } from 'lucide-react';
import CardDiasAprendidos from '../../components/CardDiasAprendidos/CardDiasAprendidos';
import { JornadasProvider } from '../../context/JorneysContext';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <JornadasProvider>
      <main className='dashboard-page'>
        <header className="dashboard-heading">
          <p className="is-eyebrow">VISÃO GERAL</p>
          <h1>Confira seu Progresso</h1>
          <p className="">Acompanhe sua evolução, celebre sua constância e continue construindo hábitos mais saudáveis a cada jornada.</p>
        </header>

        <CardDiasAprendidos />
      </main>
    </JornadasProvider>
  );
}