import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import HeaderLP from "./pages/LP/HeaderLP";
import Hero from "./pages/LP/Hero";
import Beneficios from "./pages/LP/Beneficios";
import ComoFunciona from "./pages/LP/ComoFunciona";
import Footer from "./pages/LP/Footer";

import Login from "./pages/Auth/Login";
import Cadastro from "./pages/Auth/Cadastro";
import ModalLogin from "./pages/Auth/ModalLogin";

import HomeSistema from "./pages/Sistema-frontend/Home";
import MeuPerfil from "./pages/Sistema-frontend/MeuPerfil";
import EditarPerfil from "./pages/Sistema-frontend/EditarPerfil";
import Configuracoes from "./pages/Sistema-frontend/Configuracoes";

function LandingPage() {
  const [modalLogin, setModalLogin] = useState(false);

  return (
    <div className="app-container">
      <HeaderLP onAbrirLogin={() => setModalLogin(true)} />
      <main className="main-content">
        <Hero />
        <Beneficios />
        <ComoFunciona />
      </main>
      <Footer />

      {modalLogin && <ModalLogin onClose={() => setModalLogin(false)} />}
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