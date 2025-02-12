import styles from './Hero.module.css';
import hero from '../../assets/hero.png';
import group18 from '../../assets/Group 18.png';
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Optimiza tu negocio legalmente
            <span className={styles.highlight}></span>
          </h1>
          <p className={styles.description}>
            Genera eficiencia en tu negocio con herramientas legales.
          </p>
          <div className={styles.buttons}>
            <a href="#setup" className={styles.primaryButton}>
              Setup Legal
            </a>
            <a href="#eficiencia" className={styles.secondaryButton}>
              Eficiencia tributaria
            </a>
            <a href="#planes" className={styles.secondaryButton}>
              Planes
            </a>
          </div>
        </div>
        
        <div className={styles.image}>
          <img 
            src={hero}
            alt="Abogada profesional"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <div className={styles.featured}>
        <div className="max-w-7xl mx-auto">
          <h2 className={styles.featuredTitle}>
            Destacada <span style={{ color: '#3b82f6' }}>en</span>
          </h2>
          <div className={styles.logos}>
            <img 
              src={group18}
              alt="Empresas destacadas"
              className={styles.featuredImage}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}