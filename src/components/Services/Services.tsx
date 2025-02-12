import { Building2, HandCoins, Scale } from 'lucide-react';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Optimicemos tu negocio</h2>
          <p className={styles.subtitle}>¿Listo para ver lo que tenemos para ti?</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <Building2 className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Setup Legal en 8 semanas<br />(Negocios nuevos)</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.checkmark}>✓</span>
                <span>Constitución de empresa</span>
              </li>
              <li className={styles.listItem}>
                <span className={styles.checkmark}>✓</span>
                <span>Registro de marca</span>
              </li>
              <li className={styles.listItem}>
                <span className={styles.checkmark}>✓</span>
                <span>Contratos base</span>
              </li>
            </ul>
            <a href="#contacto" className={styles.button}>
              Accede ahora
            </a>
          </div>

          <div className={styles.card} style={{ animationDelay: '0.2s' }}>
            <div className={styles.iconWrapper}>
              <HandCoins className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Programa de Eficiencia<br />Tributaria en 10 semanas</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.checkmark}>✓</span>
                <span>Optimización fiscal</span>
              </li>
              <li className={styles.listItem}>
                <span className={styles.checkmark}>✓</span>
                <span>Planificación tributaria</span>
              </li>
              <li className={styles.listItem}>
                <span className={styles.checkmark}>✓</span>
                <span>Gestión de impuestos</span>
              </li>
            </ul>
            <a href="#contacto" className={styles.button}>
              Accede ahora
            </a>
          </div>

          <div className={styles.card} style={{ animationDelay: '0.4s' }}>
            <div className={styles.iconWrapper}>
              <Scale className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Programa de Eficiencia<br />Legal en 10 semanas</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.checkmark}>✓</span>
                <span>Auditoría legal</span>
              </li>
              <li className={styles.listItem}>
                <span className={styles.checkmark}>✓</span>
                <span>Optimización de procesos</span>
              </li>
              <li className={styles.listItem}>
                <span className={styles.checkmark}>✓</span>
                <span>Gestión de riesgos</span>
              </li>
            </ul>
            <a href="#contacto" className={styles.button}>
              Accede ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}