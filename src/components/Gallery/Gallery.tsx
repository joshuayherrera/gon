import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Gallery.module.css';
import gallery1 from '../../assets/gallery1.png'
import gallery2 from '../../assets/gallery2.png'
import gallery3 from '../../assets/gallery3.png'
import gallery4 from '../../assets/gallery4.png'
import gallery5 from '../../assets/gallery5.png'

const images = [
  {
    url: gallery1,
    alt: 'Presentación del libro en SBS'
  },
  {
    url: gallery2,
    alt: 'Evento corporativo Góngora Legal'
  },
  {
    url: gallery3,
    alt: 'Conferencia de negocios'
  },
  {
    url: gallery4,
    alt: 'Sesión fotográfica profesional'
  },
  {
    url: gallery5,
    alt: 'Sesión fotográfica profesional'
  }
];

const partnerLogos = [
  {
    url: '/logos/sbs.webp',
    alt: 'SBS Librería Internacional'
  },
  {
    url: '/logos/virrey.webp',
    alt: 'El Virrey Librerías'
  },
  {
    url: '/logos/ibero.webp',
    alt: 'Ibero Librerías'
  }
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1
      }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className={styles.gallery} ref={galleryRef}>
      <div className={styles.partners}>
        <div className={`${styles.logosContainer} ${isIntersecting ? styles.visible : ''}`}>
          {partnerLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.url}
              alt={logo.alt}
              className={styles.partnerLogo}
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <h2 className={styles.title}>
          <span className={styles.subtitle}>Nuestra</span>
          Galería
        </h2>

        <div className={styles.carousel}>
          <button 
            className={`${styles.carouselButton} ${styles.prev}`}
            onClick={prevSlide}
            aria-label="Anterior imagen"
          >
            <ChevronLeft />
          </button>

          <div className={styles.carouselTrack}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`${styles.carouselSlide} ${
                  index === currentIndex ? styles.active : ''
                }`}
                style={{
                  transform: `translateX(${(index - currentIndex) * 100}%)`
                }}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className={styles.carouselImage}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <button 
            className={`${styles.carouselButton} ${styles.next}`}
            onClick={nextSlide}
            aria-label="Siguiente imagen"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}