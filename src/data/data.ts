import gallery1 from '../assets/gallery/gallery1.png'
import gallery2 from '../assets/gallery/gallery2.png'
import gallery3 from '../assets/gallery/gallery3.png'
import gallery4 from '../assets/gallery/gallery4.png'
import gallery5 from '../assets/gallery/gallery5.png'

export interface NavLink {
    href: string;
    label: string;
}

export interface Image {
    url: string;
    alt: string;
}

export interface Service {
    title: string;
    description: string;
    features: string[];
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    image: string;
    content: string;
}

export const navLinks: NavLink[] = [
    { href: '#planes', label: 'Planes' },
    { href: '#sobre-gl', label: 'Sobre GL' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#galeria', label: 'Galería' }
];

export const images = [
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