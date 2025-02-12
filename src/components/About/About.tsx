import { Users, Users2 } from 'lucide-react';
import styles from './About.module.css';
import group18 from '../../assets/about.jpg';
import book from '../../assets/book.png';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.title}>Sobre Góngora Legal</h2>
            <p className={styles.description}>
              Góngora Legal es el referente para empresas que buscan crecimiento y valor empresarial de manera innovadora y proactiva.
            </p>
            <div className={styles.questions}>
              <p>
                <strong>¿Qué hacemos?</strong> Aportamos valor a los negocios haciéndoles el setup legal perfecto o las transformamos en lo que necesitan ser.
              </p>
              <p>
                <strong>¿Quiénes somos?</strong> Somos una firma legal que agrega valor a los negocios de forma acelerada y premeditada.
              </p>
            </div>
            <div className={styles.actions}>
              <a href="#more" className={styles.textLink}>Ver más</a>
              <a href="#testimonios" className={styles.primaryButton}>
                Ver testimonios
              </a>
            </div>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <Users className={styles.statIcon} />
                <div className={styles.statContent}>
                  <span className={styles.statNumber}>+300</span>
                  <span className={styles.statLabel}>Clientes</span>
                </div>
              </div>
              <div className={styles.stat}>
                <Users2 className={styles.statIcon} />
                <div className={styles.statContent}>
                  <span className={styles.statNumber}>+46K</span>
                  <span className={styles.statLabel}>Seguidores</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <img 
              src={group18}
              alt="Equipo Góngora Legal"
              className={styles.teamImage}
            />
          </div>
        </div>
      </div>

      <div className={styles.bookSection}>
        <div className={styles.container}>
          <div className={styles.bookContent}>
            <h2 className={styles.bookTitle}>
              ¿Sientes que podrías llevar tu negocio al siguiente nivel, pero te falta claridad sobre cómo hacerlo de manera estratégica y legalmente sólida?"
            </h2>
            <p className={styles.bookDescription}>
              CON TODAS LAS DE LA LEY es el mapa definitivo que te mostrará cómo convertir el mundo legal en tu mejor aliado para hacer crecer tu negocio, maximizar tu rentabilidad y aprovechar cada oportunidad con inteligencia. No solo te dará la seguridad para tomar decisiones estratégicas con confianza, sino que te equipará con herramientas legales que vas a usar tu firmemente y potenciar tu éxito.
            </p>
            <p className={styles.bookDescription}>
              Este libro no es solo una guía, es un camino de transformación que te ayudará a ver el derecho como un recurso para escalar, innovar y proteger lo que con tanto esfuerzo has construido.
            </p>
            <p className={styles.bookQuestion}>
              ¿Estás listo para jugar con todas las de la ley y llevar tu negocio al siguiente nivel?
            </p>
            <a href="#comprar" className={styles.bookButton}>
              Adquiere tu libro ahora!
            </a>
          </div>
          <div className={styles.bookImageWrapper}>
            <img 
              src={book}
              alt="Libro: Con Todas Las De La Ley"
              className={styles.bookImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}