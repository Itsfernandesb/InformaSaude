import { useNavigate } from 'react-router-dom';
import { Award, Check, Clock3 } from 'lucide-react';
import { useJornadas } from '../../context/JorneysContext';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <h1>Dashboard</h1>
  );
}