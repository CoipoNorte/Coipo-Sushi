import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Zap, Leaf, Clock, Flame, MessageCircle, Heart } from 'lucide-react';

const features = [
  {
    icon: Flame,
    title: 'Proyectos con Sabor',
    description: 'Cada sitio web y app que armamos tiene ese toque especial que lo hace único. Nada genérico, nada repetido.',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    icon: Leaf,
    title: 'Tecnología Fresca',
    description: 'Trabajamos con el stack más moderno: React, Node, Python y más. Ingredientes de primera para resultados premium.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Clock,
    title: 'Entregas Express',
    description: 'Tu proyecto listo en tiempo récord. Porque las buenas ideas no pueden esperar, y nosotros lo sabemos.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Proceso Simple',
    description: 'Nos escribes al WhatsApp, conversamos tu idea, y te preparamos una propuesta. Sin vueltas, sin letra chica.',
    gradient: 'from-yellow-500 to-amber-500',
  },
  {
    icon: MessageCircle,
    title: 'Consultas Sin Costo',
    description: 'Cuéntanos tu idea y te orientamos gratis. Sin compromiso, sin presión. Solo buena onda y honestidad.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Heart,
    title: 'Hecho con Dedicación',
    description: 'Cada línea de código está pensada con cariño. No somos una fábrica, somos artesanos digitales.',
    gradient: 'from-pink-500 to-rose-500',
  },
];

export default function Features() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-coral/5 blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold text-coral uppercase tracking-widest mb-4">
            ¿Por qué Coipo?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-white">No somos otra agencia más.</span>
            <br />
            <span className="gradient-text">Somos tu equipo en Iquique.</span>
          </h2>
          <p className="text-gray-text text-base sm:text-lg max-w-2xl mx-auto">
            Mezclamos creatividad y tecnología para preparar soluciones digitales que dejan a todos con la boca abierta.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative p-6 sm:p-8 rounded-2xl glass card-hover h-full"
              >
                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-5 shadow-lg`}
                  style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}
                >
                  <feature.icon size={22} className="text-white" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-coral-light transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-text leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover gradient corner */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-tr-2xl transition-opacity duration-500`} />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
