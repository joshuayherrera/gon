import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Gallery.module.css';
import { images } from '../../data/data'

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
        <img src='{group19}' alt="Group 19" className={styles.group19} />
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