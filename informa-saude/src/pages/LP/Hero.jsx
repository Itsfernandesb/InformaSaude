import { useState, useEffect } from 'react';
import heroCareImg from '../../assets/images/hero-care.png';
import hero2Img from '../../assets/images/hero-2.jpg';

const SLIDES = [
  { id: 1, img: heroCareImg, alt: "Cuidar da saúde pode ser simples" },
  { id: 2, img: hero2Img, alt: "Informa Saúde - Viva melhor todos os dias" }
];

export function Hero() {
  const [indexAtual, setIndexAtual] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndexAtual((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="is-container py-3" id="home">
      <div className="position-relative rounded-4 overflow-hidden shadow border">
        <img 
          src={SLIDES[indexAtual].img} 
          alt={SLIDES[indexAtual].alt} 
          className="img-fluid w-100 d-block"
        />
        
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