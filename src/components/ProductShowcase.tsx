import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Star, MessageCircle } from 'lucide-react';

const categories = ['Todos', 'Webs', 'Apps', 'Especiales', 'Combos'];

const products = [
  {
    name: 'Landing Roll',
    category: 'Webs',
    price: 'Desde $99.990',
    rating: 4.9,
    reviews: 34,
    tag: '🔥 Best Seller',
    image: 'https://images.pexels.com/photos/7719908/pexels-photo-7719908.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=600',
    description: 'Landing page a medida con diseño premium, animaciones y responsive. Lista para convertir visitas en clientes.',
  },
  {
    name: 'Sitio Web Nigiri',
    category: 'Webs',
    price: 'Desde $249.990',
    rating: 4.8,
    reviews: 28,
    tag: '💎 Premium',
    image: 'https://images.pexels.com/photos/12659890/pexels-photo-12659890.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=600',
    description: 'Sitio web multipágina con CMS, blog, SEO optimizado y panel de administración incluido.',
  },
  {
    name: 'E-Commerce Tempura',
    category: 'Webs',
    price: 'Desde $399.990',
    rating: 4.7,
    reviews: 19,
    tag: '⚡ Popular',
    image: 'https://images.pexels.com/photos/11064614/pexels-photo-11064614.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=600',
    description: 'Tienda online completa con carrito, pasarela de pago, inventario y panel admin. Apanada con todo.',
  },
  {
    name: 'App Omakase',
    category: 'Apps',
    price: 'A cotizar',
    rating: 5.0,
    reviews: 12,
    tag: '👑 Chef\'s Pick',
    image: 'https://images.pexels.com/photos/31388920/pexels-photo-31388920.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=600',
    description: 'Aplicación móvil o de escritorio hecha a medida. El chef elige las mejores tecnologías para tu caso.',
  },
  {
    name: 'Automatización Spicy',
    category: 'Especiales',
    price: 'Desde $149.990',
    rating: 4.8,
    reviews: 22,
    tag: '🌶️ Spicy',
    image: 'https://images.pexels.com/photos/37356430/pexels-photo-37356430.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=600',
    description: 'Bots, scrapers, APIs y automatizaciones que hacen el trabajo pesado por ti. Picante y eficiente.',
  },
  {
    name: 'Combo Full Stack',
    category: 'Combos',
    price: 'Desde $499.990',
    rating: 4.9,
    reviews: 15,
    tag: '🌈 Completo',
    image: 'https://images.pexels.com/photos/31393441/pexels-photo-31393441.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=600',
    description: 'Web + App + Automatización + Hosting. El menú degustación completo para tu negocio digital.',
  },
];

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filtered = activeCategory === 'Todos'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="productos" className="relative py-20 sm:py-28">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber/5 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold text-amber uppercase tracking-widest mb-4">
            Nuestra Carta
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-white">Elige lo que</span>{' '}
            <span className="gradient-text">necesitas.</span>
          </h2>
          <p className="text-gray-text text-base sm:text-lg">
            Cada servicio está crafteado como un buen roll: con los mejores ingredientes y presentación impecable.
          </p>
        </AnimatedSection>

        {/* Category filters */}
        <AnimatedSection className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'btn-primary text-white shadow-lg shadow-coral/20'
                  : 'glass text-gray-text hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </AnimatedSection>

        {/* Products grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filtered.map((product, i) => (
            <AnimatedSection key={product.name} delay={i * 0.1}>
              <motion.div
                layout
                whileHover={{ y: -6 }}
                className="group rounded-2xl glass overflow-hidden card-hover"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48 sm:h-56">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />

                  {/* Tag */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass-strong text-xs font-semibold text-white">
                    {product.tag}
                  </div>

                  {/* Quick contact via WhatsApp */}
                  <motion.a
                    href={`https://wa.me/56989198933?text=Hola!%20Me%20interesa%20el%20servicio%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute bottom-3 right-3 p-2.5 rounded-full bg-coral text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg shadow-coral/30"
                    aria-label={`Cotizar ${product.name} por WhatsApp`}
                  >
                    <MessageCircle size={16} />
                  </motion.a>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Star size={14} className="text-gold fill-gold" />
                    <span className="text-sm font-semibold text-white">{product.rating}</span>
                    <span className="text-xs text-gray-text">({product.reviews} proyectos)</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-coral-light transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-text mb-4 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-lg sm:text-xl font-bold gradient-text">{product.price}</span>
                    <span className="text-xs text-gray-text px-2 py-1 rounded-full glass">
                      {product.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Link a más productos */}
        <AnimatedSection className="text-center mt-12" delay={0.3}>
          <a
            href="https://coiponorte.github.io/CoipoNorte/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white border border-white/10 hover:border-coral/30 hover:bg-white/5 transition-all duration-300 group"
          >
            <span>Ver portafolio completo y más proyectos</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
