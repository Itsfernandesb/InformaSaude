import './App.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RecoverGet from '../src/pages/RecoverPassword/RecoverEmailGet/RecoverEmailGet'
import VerifyCode from './pages/RecoverPassword/Codeverify/Codeverify'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ResetPassword from '../src/pages/RecoverPassword/NewPassword/NewPassword'

function App() {
  console.log("O App.jsx foi carregado!");
  
  return (
  <BrowserRouter>
    <div className="app-container">
      <Header />
      <main className="main-content">
        <h1>InformaSaúde</h1>
        <Routes>
          <Route path="/esqueci-senha" element={<RecoverGet />} />
          <Route path="/verificar-codigo" element={<VerifyCode />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
  );
}


export default App
