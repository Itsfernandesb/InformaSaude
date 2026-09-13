import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import HeaderLP from "./pages/LP/HeaderLP";
import Hero from "./pages/LP/Hero";
import Beneficios from "./pages/LP/Beneficios";
import ComoFunciona from "./pages/LP/ComoFunciona";
import FaqSection from "./pages/LP/FaqSection";
import Footer from "./pages/LP/Footer";

import Login from "./pages/Auth/Login";
import Cadastro from "./pages/Auth/Cadastro";
import ModalLogin from "./pages/Auth/ModalLogin";

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

      {modalConfig.aberto && (
        <ModalLogin 
          abaInicial={modalConfig.abaInicial}
          onClose={() => setModalConfig({ ...modalConfig, aberto: false })} 
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
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/perfil" element={<HomeSistema />} />
        <Route path="/meu-perfil" element={<MeuPerfil />} />
        <Route path="/editar-perfil" element={<EditarPerfil />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;