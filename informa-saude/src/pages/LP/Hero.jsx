import heroCareImg from '../../assets/images/hero-care.png';
import hero2Img from '../../assets/images/hero-2.jpg';

const SLIDES = [
  { id: 1, img: heroCareImg, alt: 'Cuidar da saúde pode ser simples.' },
  { id: 2, img: hero2Img, alt: 'Informa Saúde - Viva melhor todos os dias.' }
];

export function Hero() {
  return (
    <section className="w-100 p-0 position-relative overflow-hidden" id="home">
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-indicators">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : undefined}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {SLIDES.map((slide, index) => (
            <div key={slide.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
              <img
                src={slide.img}
                alt={slide.alt}
                className="is-hero-image w-100 d-block object-fit-cover"
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Slide anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Próximo slide</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
