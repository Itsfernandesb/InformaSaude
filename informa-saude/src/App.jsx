import './App.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  console.log("O App.jsx foi carregado!");
  
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <h1>InformaSaúde</h1>
      </main>
      <Footer />
    </div>
  );
}


export default App
