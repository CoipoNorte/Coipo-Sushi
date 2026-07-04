import AnimatedSection from './AnimatedSection';
import { Camera, MessageCircle, MapPin, Phone, Mail, Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <AnimatedSection className="col-span-2 md:col-span-1">
            <a href="#hero" className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <span className="text-2xl sm:text-3xl">🍣</span>
              <span className="text-xl sm:text-2xl font-bold gradient-text">Coipo Sushi</span>
            </a>
            <p className="text-sm text-gray-text leading-relaxed mb-6 max-w-xs">
              Soluciones digitales frescas desde Iquique. Cocinamos código con los mejores ingredientes para tu negocio.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Camera, label: 'Instagram', href: 'https://www.instagram.com/coipo_norte/' },
                { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/56989198933?text=Hola%20Coipo!' },
                { icon: Code, label: 'GitHub', href: 'https://coiponorte.github.io/CoipoNorte/' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl glass hover:bg-white/10 transition-all duration-300 text-gray-text hover:text-coral group"
                >
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Servicios */}
          <AnimatedSection delay={0.1}>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Carta</h4>
            <ul className="space-y-2.5">
              {['Landing Pages', 'Sitios Web', 'E-Commerce', 'Apps', 'Automatizaciones', 'Diseño UI/UX'].map((link) => (
                <li key={link}>
                  <a href="#productos" className="text-sm text-gray-text hover:text-coral transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Coipo</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Portafolio', href: 'https://coiponorte.github.io/CoipoNorte/' },
                { label: 'Nuestro Sitio', href: 'https://coiponorte.github.io/CoipoNorte/' },
                { label: 'Proyectos', href: 'https://coiponorte.github.io/CoipoNorte/' },
                { label: 'Cotizar Proyecto', href: 'https://wa.me/56989198933?text=Hola!%20Quiero%20cotizar%20un%20proyecto' },
                { label: 'Trabaja con Nosotros', href: 'https://wa.me/56989198933?text=Hola!%20Me%20interesa%20colaborar' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-text hover:text-coral transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-text">
                <MapPin size={14} className="text-coral shrink-0" />
                <span>Iquique, Tarapacá, Chile</span>
              </li>
              <li>
                <a
                  href="https://wa.me/56989198933"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-text hover:text-coral transition-colors"
                >
                  <Phone size={14} className="text-coral shrink-0" />
                  <span>+56 9 8919 8933</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:christiancaceres1398@gmail.com"
                  className="flex items-center gap-2 text-sm text-gray-text hover:text-coral transition-colors"
                >
                  <Mail size={14} className="text-coral shrink-0" />
                  <span>christiancaceres1398@gmail.com</span>
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="text-xs font-semibold text-white mb-2">Horarios de atención</h5>
              <p className="text-xs text-gray-text">Lun - Vie: 09:00 - 20:00</p>
              <p className="text-xs text-gray-text">Sáb: 10:00 - 14:00</p>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-text/50">
            © 2025 Coipo Sushi · Soluciones Digitales · Iquique, Chile. Hecho con 🍣 y {"</>"}
          </p>
          <div className="flex gap-4 sm:gap-6 items-center">
            <a
              href="https://www.instagram.com/coipo_norte/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-text/50 hover:text-coral transition-colors"
            >
              @coipo_norte
            </a>
            <a
              href="https://coiponorte.github.io/CoipoNorte/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-text/50 hover:text-coral transition-colors"
            >
              coiponorte.github.io
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
