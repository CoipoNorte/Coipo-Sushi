import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Valentina R.',
    role: 'Dueña de tienda online',
    avatar: '👩‍💼',
    text: 'Les pedí un e-commerce y me entregaron algo que superó todas mis expectativas. Mis ventas se duplicaron el primer mes. El mejor ingrediente fue la comunicación directa.',
    rating: 5,
    platform: 'Google',
  },
  {
    name: 'Santiago M.',
    role: 'Startup Founder',
    avatar: '🧑‍💻',
    text: 'Necesitaba una landing para mi app y me la tuvieron lista en una semana. Rápido, limpio y a un precio que no dolió. Ahora siempre les pido más cosas.',
    rating: 5,
    platform: 'WhatsApp',
  },
  {
    name: 'Camila P.',
    role: 'Nutricionista',
    avatar: '👩‍🎨',
    text: 'Mi sitio web quedó tan lindo que hasta mis colegas me preguntaron quién lo hizo. La atención al detalle es otro nivel. Recomendados al 100%.',
    rating: 5,
    platform: 'Instagram',
  },
  {
    name: 'Andrés G.',
    role: 'Fotógrafo',
    avatar: '📸',
    text: 'Quería un portafolio que se viera profesional y me lo prepararon justo como lo imaginaba. El proceso fue super fácil, desde la cotización gratis hasta la entrega.',
    rating: 5,
    platform: 'Instagram',
  },
  {
    name: 'María F.',
    role: 'Restaurantera',
    avatar: '🧑‍🍳',
    text: 'Me hicieron la web de mi restaurante con menú digital y reservas online. Mis clientes aman lo fácil que es. La inversión se pagó sola en pocas semanas.',
    rating: 5,
    platform: 'Google',
  },
  {
    name: 'Diego L.',
    role: 'Músico independiente',
    avatar: '🎸',
    text: 'Me armaron una web con player de música, links a Spotify y tienda de merch. Todo integrado, todo bonito. Estos cabros saben lo que hacen.',
    rating: 5,
    platform: 'WhatsApp',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-amber/5 rounded-full blur-[200px]" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-coral/5 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold text-amber uppercase tracking-widest mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-white">Lo que dicen</span>{' '}
            <span className="gradient-text">nuestros clientes.</span>
          </h2>
          <p className="text-gray-text text-base sm:text-lg">
            No nos creai a nosotros. Créeles a quienes ya probaron nuestras recetas digitales.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="relative p-6 sm:p-7 rounded-2xl glass card-hover h-full flex flex-col"
              >
                {/* Quote icon */}
                <Quote size={28} className="text-coral/20 mb-4" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="text-gold fill-gold" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm sm:text-base text-gray-light leading-relaxed mb-6 flex-1">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{t.avatar}</span>
                    <div>
                      <div className="text-sm font-semibold text-white">{t.name}</div>
                      <div className="text-xs text-gray-text">{t.role}</div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-text/50 font-medium">
                    vía {t.platform}
                  </span>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
