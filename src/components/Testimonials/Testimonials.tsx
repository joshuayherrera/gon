import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Gabriel Hernandez',
    role: 'CEO, Empresa Innovadora',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80',
    content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    id: 2,
    name: 'Ana Martinez',
    role: 'Fundadora, StartUp Legal',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80',
    content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={styles.testimonials} ref={containerRef}>
      <div className={styles.backgroundImage} />
      
      <div className={styles.content}>
        <div className={styles.container}>
          <h2 className={styles.title}>
            Algunos resultados
            <br />
            de clientes
            <span className={styles.highlight} />
          </h2>

          <div className={styles.slider}>
            <button
              className={`${styles.navButton} ${styles.prev}`}
              onClick={prevTestimonial}
              aria-label="Testimonio anterior"
            >
              <ChevronLeft />
            </button>

            <div className={styles.testimonialContainer}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`${styles.testimonialCard} ${
                    index === currentIndex ? styles.active : ''
                  }`}
                  style={{
                    transform: `translateX(${(index - currentIndex) * 100}%)`
                  }}
                >
                  <div className={styles.testimonialContent}>
                    <p className={styles.quote}>{testimonial.content}</p>
                    <div className={styles.author}>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className={styles.authorImage}
                        loading="lazy"
                      />
                      <div className={styles.authorInfo}>
                        <h3 className={styles.authorName}>{testimonial.name}</h3>
                        <p className={styles.authorRole}>{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className={`${styles.navButton} ${styles.next}`}
              onClick={nextTestimonial}
              aria-label="Siguiente testimonio"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}