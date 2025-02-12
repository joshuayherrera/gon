import { Menu } from 'lucide-react';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.svg';
import { navLinks } from '../../data/data';

export default function Navbar() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;

    const element = document.querySelector(href);
    if (!element) return;

    const navbarHeight = 80; 
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <img src={logo} alt="Gongora Legal" className={styles.logo} />
        
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.link}
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button className={styles.mobileMenu} aria-label="Menú">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}