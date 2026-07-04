import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-coral/10 blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-amber/8 blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-coral-dark/5 blur-[200px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 sm:mb-8"
            >
              <Sparkles size={14} className="text-coral" />
              <span className="text-xs sm:text-sm font-medium text-gray-light">
                🔥 Cocinamos código desde Iquique
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6"
            >
              <span className="gradient-text-white">Ideas que</span>
              <br />
              <span className="gradient-text">cobran</span>
              <br />
              <span className="gradient-text-white">vida digital.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-text max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Preparamos soluciones digitales con ingredientes frescos:{' '}
              <span className="text-coral font-semibold">código limpio, diseño premium y entregas rápidas</span>.
              Cada proyecto es un roll hecho a medida desde Iquique.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://wa.me/56989198933?text=Hola%20Coipo!%20Quiero%20cotizar%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 rounded-full text-base font-bold text-white inline-flex items-center justify-center gap-2 group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Cotiza Gratis
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="#productos"
                className="px-8 py-4 rounded-full text-base font-semibold text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300 text-center"
              >
                Ver la Carta
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center gap-8 sm:gap-12 mt-12 justify-center lg:justify-start"
            >
              {[
                { value: '100%', label: 'Consultas gratis' },
                { value: 'Fast', label: 'Entregas' },
                { value: 'Iquique', label: '📍 Tarapacá' },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-text">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg lg:max-w-xl">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-coral/20 to-amber/20 rounded-3xl blur-3xl scale-95" />

              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                <img
                  src="https://images.pexels.com/photos/31393439/pexels-photo-31393439.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1000"
                  alt="Coipo Sushi — Soluciones digitales premium desde Iquique"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[560px] object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-6 left-6 glass-strong px-4 py-3 rounded-2xl"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🔥</span>
                    <div>
                      <div className="text-sm font-bold text-white">Deploy reciente</div>
                      <div className="text-xs text-gray-text">Landing Page Especial</div>
                    </div>
                  </div>
                </motion.div>

                {/* Another floating badge */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute top-6 right-6 glass-strong px-3 py-2 rounded-xl"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">⚡</span>
                    <span className="text-xs font-semibold text-white">Stack fresco</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
}
