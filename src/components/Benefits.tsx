import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

export default function Benefits() {
  return (
    <section id="beneficios" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-coral/5 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-coral/20 to-amber/10 rounded-3xl blur-3xl scale-90" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <img
                  src="https://images.pexels.com/photos/5616132/pexels-photo-5616132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="Equipo colaborando en un proyecto digital"
                  className="w-full h-[350px] sm:h-[450px] lg:h-[520px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />

                {/* Floating stat */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-6 right-6 glass-strong px-5 py-3 rounded-2xl"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">$0</div>
                    <div className="text-xs text-gray-text">Costo de consulta</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content side */}
          <div>
            <AnimatedSection direction="right">
              <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold text-coral uppercase tracking-widest mb-4">
                La diferencia Coipo
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="gradient-text-white">No solo hacemos webs.</span>
                <br />
                <span className="gradient-text">Preparamos experiencias.</span>
              </h2>
              <p className="text-gray-text text-base sm:text-lg mb-8 leading-relaxed">
                Cada proyecto que entregamos es como abrir una caja de sushi premium:
                cuidado al detalle, presentación impecable y un resultado que te deja diciendo "esto quedó increíble".
              </p>
            </AnimatedSection>

            <div className="space-y-4 sm:space-y-5">
              {[
                {
                  emoji: '🎨',
                  title: 'Diseño que Enamora',
                  desc: 'Interfaces modernas, limpias y responsive. Tu proyecto va a verse tan bien que querrás mostrárselo a todos.',
                },
                {
                  emoji: '🧑‍🍳',
                  title: 'Código Artesanal',
                  desc: 'Nada de templates reciclados. Cada línea de código se escribe pensando en tu negocio y tus usuarios.',
                },
                {
                  emoji: '💬',
                  title: 'Comunicación Directa',
                  desc: 'Hablas directo con quien cocina tu proyecto. Sin intermediarios, sin teléfonos descompuestos.',
                },
                {
                  emoji: '🚀',
                  title: 'Deploy + Soporte',
                  desc: 'No solo te entregamos el plato servido: te ayudamos con hosting, dominio y soporte post-entrega.',
                },
              ].map((benefit, i) => (
                <AnimatedSection key={benefit.title} delay={i * 0.12} direction="right">
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="flex gap-4 p-4 sm:p-5 rounded-xl glass card-hover cursor-default group"
                  >
                    <span className="text-2xl sm:text-3xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {benefit.emoji}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-coral-light transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-text leading-relaxed">{benefit.desc}</p>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
