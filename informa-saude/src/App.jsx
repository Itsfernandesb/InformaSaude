import { useState } from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import HeaderLP from "./pages/LP/HeaderLP";
import Hero from "./pages/LP/Hero";
import Beneficios from "./pages/LP/Beneficios";
import ComoFunciona from "./pages/LP/ComoFunciona";
import FaqSection from "./pages/LP/FaqSection";
import Footer from "./pages/LP/Footer";
import ModalLogin from "./pages/Auth/ModalLogin";
import ModalCriarConta from "./pages/Auth/ModalCriarConta";
import HomeSistema from "./pages/Sistema-frontend/Home";
import MeuPerfil from "./pages/Sistema-frontend/MeuPerfil";
import EditarPerfil from "./pages/Sistema-frontend/EditarPerfil";
import Configuracoes from "./pages/Sistema-frontend/Configuracoes";

function LandingPage() {
  const [modalConfig, setModalConfig] = useState({ aberto: false, abaInicial: 'login' });

  return (
    <div className="app-container">
      <HeaderLP 
        onAbrirLogin={() => setModalConfig({ aberto: true, abaInicial: 'login' })} 
        onAbrirCadastro={() => setModalConfig({ aberto: true, abaInicial: 'cadastro' })} 
      />
      <main className="main-content">
        <Hero />
        <Beneficios onAbrirCadastro={() => setModalConfig({ aberto: true, abaInicial: 'cadastro' })} />
        <ComoFunciona />
        <FaqSection />
      </main>
      <Footer />

      {modalConfig.aberto && modalConfig.abaInicial === 'login' && (
        <ModalLogin
          onClose={() => setModalConfig({ ...modalConfig, aberto: false })}
          onAbrirCadastro={() => setModalConfig({ aberto: true, abaInicial: 'cadastro' })}
        />
      )}
      {modalConfig.aberto && modalConfig.abaInicial === 'cadastro' && (
        <ModalCriarConta
          onClose={() => setModalConfig({ ...modalConfig, aberto: false })}
          onAbrirLogin={() => setModalConfig({ aberto: true, abaInicial: 'login' })}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/inicio" element={<HomeSistema />} />
        <Route path="/perfil" element={<Navigate to="/inicio" replace />} />
        <Route path="/meu-perfil" element={<MeuPerfil />} />
        <Route path="/editar-perfil" element={<EditarPerfil />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;