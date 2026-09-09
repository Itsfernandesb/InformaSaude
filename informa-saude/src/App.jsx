import './App.css';
import CabecalhoLP from "./pages/LP/HeaderLP";
import Hero from "./pages/LP/Hero";
import SecaoBeneficios from "./pages/LP/Beneficios";
import SecaoComoFunciona from "./pages/LP/ComoFunciona";
import RodapeLP from "./pages/LP/Footer";

function App() {
  return (
    <div className="app-container">
      <CabecalhoLP />
      <main className="main-content">
        <Hero />
        <SecaoBeneficios />
        <SecaoComoFunciona />
      </main>
      <RodapeLP />
    </div>
  );
}

export default App;