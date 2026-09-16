import heroCareImg from '../../assets/images/hero-care.png';
import hero2Img from '../../assets/images/hero-2.jpg';
import { CarrosselSistema } from '../../components';

const SLIDES = [
  { id: 1, img: heroCareImg, alt: 'Cuidar da saúde pode ser simples.' },
  { id: 2, img: hero2Img, alt: 'Informa Saúde - Viva melhor todos os dias.' }
];

export function Hero() {
  return (
    <section className="w-100 p-0 position-relative overflow-hidden" id="home">
      <CarrosselSistema id="heroCarousel" slides={SLIDES} intervalo={5000} />
    </section>
  );
}

export default Hero;
