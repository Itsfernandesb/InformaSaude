import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroCareImg from '../../assets/images/hero-care.png';
import hero2Img from '../../assets/images/hero-2.jpg';

const SLIDES = [
  { id: 1, img: heroCareImg, alt: "Cuidar da saúde pode ser simples." },
  { id: 2, img: hero2Img, alt: "Informa Saúde - Viva melhor todos os dias." }
];

export function Hero() {
  const [indexAtual, setIndexAtual] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndexAtual((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleAnterior = () => {
    setIndexAtual((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleProximo = () => {
    setIndexAtual((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <section className="w-100 p-0 position-relative overflow-hidden" id="home">
      <div className="position-relative w-100">
        <img 
          src={SLIDES[indexAtual].img} 
          alt={SLIDES[indexAtual].alt}
          className="w-100 d-block object-fit-cover"
          style={{ maxHeight: '640px', minHeight: '380px' }}
        />

        {/* Setas Chevrons Limpas (Sem Círculo Preto) */}
        <button
          type="button"
          onClick={handleAnterior}
          className="position-absolute top-50 start-0 translate-middle-y ms-3 border-0 bg-transparent text-white cursor-pointer z-3 p-1"
          aria-label="Slide anterior"
          style={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.6))' }}
        >
          <ChevronLeft size={44} strokeWidth={2.5} />
        </button>

        <button
          type="button"
          onClick={handleProximo}
          className="position-absolute top-50 end-0 translate-middle-y me-3 border-0 bg-transparent text-white cursor-pointer z-3 p-1"
          aria-label="Próximo slide"
          style={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.6))' }}
        >
          <ChevronRight size={44} strokeWidth={2.5} />
        </button>

        {/* Indicadores de Slide (Dots) Centralizados */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex gap-2 z-3">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndexAtual(idx)}
              className={`is-slider-dot ${idx === indexAtual ? 'ativo' : ''}`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;