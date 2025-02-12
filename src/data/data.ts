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