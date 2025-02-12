import { Menu } from 'lucide-react';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.svg';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <img src={logo} alt="Gongora Legal" className={styles.logo} />
        
        <nav className={styles.nav}>
          <a href="#planes" className={styles.link}>Planes</a>
          <a href="#sobre-gl" className={styles.link}>Sobre GL</a>
          <a href="#testimonios" className={styles.link}>Testimonios</a>
          <a href="#galeria" className={styles.link}>Galería</a>
        </nav>

        <button className={styles.mobileMenu}>
          <Menu className="text-white" />
        </button>
      </div>
    </header>
  );
}