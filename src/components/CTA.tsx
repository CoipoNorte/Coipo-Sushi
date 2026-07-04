import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-coral/20 via-dark-card to-amber/10" />
          <div className="absolute inset-0 glass" />

          {/* Floating orbs */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-coral/20 rounded-full blur-[80px] animate-pulse-glow" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber/15 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-coral-dark/10 rounded-full blur-[100px]" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
          />

          <div className="relative px-6 sm:px-12 lg:px-20 py-16 sm:py-20 lg:py-24 text-center">
            <AnimatedSection>
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="text-5xl sm:text-6xl mb-6 inline-block"
              >
                🍣
              </motion.div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                <span className="gradient-text-white">¿Tienes una idea?</span>
                <br />
                <span className="gradient-text">Conversemos sin costo.</span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-gray-text max-w-2xl mx-auto mb-10 leading-relaxed">
                Cuéntanos qué necesitas y te preparamos una propuesta a medida.
                La consulta es{' '}
                <span className="text-coral font-bold">100% gratuita</span>{' '}
                y sin compromiso. Solo buena onda y soluciones reales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="https://wa.me/56989198933?text=Hola%20Coipo!%20Tengo%20una%20idea%20y%20quiero%20cotizar%20un%20proyecto"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary px-10 py-4 rounded-full text-base sm:text-lg font-bold text-white inline-flex items-center gap-2 group shadow-2xl shadow-coral/20"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Escribir por WhatsApp
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.a>

                <a
                  href="https://coiponorte.github.io/CoipoNorte/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-text hover:text-white transition-colors underline underline-offset-4"
                >
                  O visita nuestro portafolio →
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
